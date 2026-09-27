---
status: accepted
---

# 仓库结构

## 当前实现结构

当前仓库已经进入实现阶段，只创建承担真实职责的目录：

```text
embedded-learning-lab/
├─ .github/
│  └─ workflows/
│     └─ deploy.yml       # 检查、构建与 GitHub Pages 部署
├─ apps/
│  └─ site/               # Astro 主站及其独立 npm 锁文件
├─ content/
│  ├─ knowledge/          # 框架无关的公开 Knowledge 权威源
│  └─ courses/            # 主站课程元数据、状态与内容关系
├─ courses/               # 版本化独立课程包与 manifest
├─ skills/                # 随仓库版本化的项目专用 Codex 技能
├─ docs/
│  ├─ project/
│  │  ├─ current-state.md # 当前状态与下一步
│  │  └─ backlog.md       # 分级待办
│  ├─ product/
│  ├─ architecture/
│  ├─ standards/
│  ├─ research/
│  └─ assets/
│     └─ diagrams/       # 同名 .drawio 图源与 .svg 导出文件
├─ .editorconfig
├─ .gitattributes
├─ .gitignore
├─ AGENTS.md
└─ README.md
```

## 按需扩展结构

以下目录只在对应职责真实出现时创建，不为长期蓝图预建空目录：

```text
embedded-learning-lab/
├─ packages/             # 出现真实复用后才创建
├─ public/               # 跨应用共享的静态资源（若确有需要）
├─ scripts/              # 构建和内容工具
└─ ...
```

## 原则

- 不提前创建全部长期目录；
- 目录必须对应真实职责；
- 生成产物与人工维护的源文件明确分离；
- 不把大型二进制资料直接提交到仓库，除非经过明确决策；
- 内容结构不应绑定某个特定 Web 框架；
- 课程生成器应通过明确产物协议接入，而不是侵入主站内部实现。
- 正式框图的 `.drawio` 图源与 `.svg` 导出文件必须成对维护。
- 第一版使用 npm 和单一站点包；第二个真实应用或共享包出现后再评估 workspaces；
- 仓库和内容源公开，不创建私有内容目录或双构建结构。
