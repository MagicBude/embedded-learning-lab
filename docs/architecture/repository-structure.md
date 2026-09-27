---
status: accepted
---

# 仓库结构

## 当前规划阶段

当前只保留实际需要的治理和规划文件：

```text
embedded-learning-lab/
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

## 实现阶段候选结构

以下是进入实现阶段后的目标结构。仍然只在职责真实出现时创建目录：

```text
embedded-learning-lab/
├─ apps/
│  └─ site/              # Astro 主站
├─ content/              # 公开 Markdown / MDX 权威内容
├─ courses/              # 课程 manifest、来源和批准产物
├─ packages/             # 出现真实复用后才创建
├─ public/               # 静态资源
├─ scripts/              # 构建和内容工具
├─ docs/                 # 项目文档
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
