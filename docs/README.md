# 项目文档

本目录保存 Embedded Learning Lab 的产品、内容、架构和协作规范。

## 文档分类

### `project/`

管理项目为什么存在、当前做什么、何时进入下一阶段。

- `project-charter.md`：使命、目标用户、核心问题和非目标；
- `planning-gate.md`：规划完成条件和实现阶段入口；
- `roadmap.md`：阶段性推进顺序；
- `decisions.md`：重要决策与待决策事项。
- `current-state.md`：跨电脑、跨会话和跨 Agent 的唯一续接入口；
- `backlog.md`：按 `now / next / later / icebox` 管理尚未执行的工作；
- `planning-session.md`：Q1–Q94 的完整规划决策访谈，用于回顾选项、选择和取代关系；正式设计文档仍是当前规则的权威来源。

### `product/`

管理用户看到什么，以及不同内容类型如何协作。

- `content-model.md`：学习路径、知识、课程、实验、项目、笔记和工具的职责；
- `content-schema.md`：内容公共元数据、状态、分类、关系和来源模型；
- `course-package-protocol.md`：生成课程的清单、版本化产物、接入和审核规则；
- `learning-roadmap.md`：完整学习主干、目标分支、阶段产出和验收；
- `first-release-scope.md`：UART 第一版页面、内容、功能、非目标和验收；
- `design-system.md`：视觉语言、设计令牌、页面模板、核心组件和 UI 验收；
- `design-tokens.md`：浅色与深色色彩、排版、间距、尺寸、断点和动效令牌；
- `component-specification.md`：核心组件的状态、职责、使用边界和验收要求；
- `interface-wireframes.md`：关键页面的桌面、移动端骨架与响应式规则；
- `information-architecture.md`：站点栏目、导航、页面结构和内容发现方式。

### `architecture/`

管理仓库边界和未来技术系统的职责。

- `repository-structure.md`：规划阶段与实现阶段的仓库结构；
- `technical-architecture.md`：待讨论的技术架构问题，不提前锁定框架。

### `standards/`

管理所有内容和文档需要遵循的共同规范。

- `documentation-standard.md`：文档结构、状态和引用要求；
- `naming-standard.md`：文件、目录、slug 和标题规则；
- `ai-governance.md`：AI 辅助研究、写作和验证边界；
- `visual-documentation-standard.md`：流程图、架构图、技术图和交互可视化规范。
- `quality-standard.md`：自动检查、测试、可访问性、性能、浏览器和发布规范。

### `research/`

保存竞品、创作者、技术方案和资料来源的调研结果。调研结论只有在被用户确认并写入 `project/decisions.md` 后，才成为项目约束。

- `learning-routes-and-site-patterns.md`：嵌入式学习路线、题库和个人知识站的代表性模式与采用结论。

### `assets/`

保存文档引用的共享资产。正式框图位于 `assets/diagrams/`，每张图同时保存可编辑的 `.drawio` 源文件和供 Markdown 引用的同名 `.svg` 导出文件。

## 状态标记

规划文档使用以下状态：

```text
draft       正在讨论
proposed    已提出明确方案，等待确认
accepted    已确认，成为项目约束
superseded  已被后续决策替代
```
