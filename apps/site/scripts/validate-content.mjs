import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { parse } from 'yaml';

const repositoryRoot = resolve(import.meta.dirname, '../../..');
const contentRoot = resolve(repositoryRoot, 'content');
const errors = [];

async function loadCollection(name) {
  const directory = resolve(contentRoot, name);
  const files = (await readdir(directory)).filter((file) => file.endsWith('.md'));

  return Promise.all(files.map(async (file) => {
    const text = await readFile(resolve(directory, file), 'utf8');
    const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) {
      errors.push(`${name}/${file}: 缺少 YAML frontmatter`);
      return { file, data: {} };
    }

    try {
      return { file, data: parse(match[1]) ?? {} };
    } catch (error) {
      errors.push(`${name}/${file}: YAML 解析失败：${error.message}`);
      return { file, data: {} };
    }
  }));
}

function reportDuplicates(items, field, collectionName) {
  const seen = new Map();
  for (const { file, data } of items) {
    const value = data[field];
    if (!value) continue;
    if (seen.has(value)) {
      errors.push(`${collectionName}: ${field} "${value}" 同时出现在 ${seen.get(value)} 和 ${file}`);
    } else {
      seen.set(value, file);
    }
  }
}

const [sources, knowledge, courses] = await Promise.all([
  loadCollection('sources'),
  loadCollection('knowledge'),
  loadCollection('courses'),
]);

reportDuplicates(sources, 'id', 'sources');
reportDuplicates(sources, 'slug', 'sources');

const sourceIds = new Set(sources.map(({ data }) => data.id).filter(Boolean));
for (const { file, data } of sources) {
  if (data.maturity === 'verified' && data.visibility === 'public') {
    for (const field of ['checkedAt', 'license', 'reuse', 'readingGuide']) {
      if (!data[field] || (Array.isArray(data[field]) && data[field].length === 0)) {
        errors.push(`sources/${file}: 已发布资料卡缺少 ${field}`);
      }
    }
  }
}

for (const [collectionName, items] of [['knowledge', knowledge], ['courses', courses]]) {
  for (const { file, data } of items) {
    for (const citation of data.sources ?? []) {
      if (!sourceIds.has(citation.sourceId)) {
        errors.push(`${collectionName}/${file}: 引用了不存在的 Source ID "${citation.sourceId}"`);
      }
      if (!citation.checkedAt || !Array.isArray(citation.claims) || citation.claims.length === 0) {
        errors.push(`${collectionName}/${file}: Source ID "${citation.sourceId}" 缺少 checkedAt 或 claims`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error(`内容关系校验失败（${errors.length} 项）：`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`内容关系校验通过：${sources.length} 张资料卡，${knowledge.length} 篇主题指南，${courses.length} 门课程。`);
}
