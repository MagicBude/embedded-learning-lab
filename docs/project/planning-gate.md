---
status: accepted
---

# 规划门槛

本文件定义项目何时可以从规划阶段进入实现阶段。

## 必须完成的讨论

- [x] 确认项目章程和首要用户；
- [x] 确认第一版范围与明确非目标；
- [x] 确认一级栏目和导航；
- [x] 确认各内容类型的职责与关系；
- [x] 确认内容的权威来源和派生产物规则；
- [x] 确认课程生成、存储和网站接入方式；
- [x] 确认内容状态、审核和技术验证流程；
- [x] 选择第一条真实纵向切片；
- [x] 确认第一版页面清单；
- [x] 确认技术栈和选择理由；
- [x] 确认部署、搜索、分析和备份的第一版策略；
- [x] 确认基础测试、可访问性和性能要求；
- [x] 确认视觉基调、设计令牌、关键页面线框和核心组件状态；
- [x] 确认开源许可证和内容许可证；
- [x] 形成第一版可执行路线图。

## 规划证据

- 项目定位：`project-charter.md`；
- 已确认决定：`decisions.md`；
- 第一版范围：`../product/first-release-scope.md`；
- 内容职责与 Schema：`../product/content-model.md`、`../product/content-schema.md`；
- 学习路线：`../product/learning-roadmap.md`；
- 课程协议：`../product/course-package-protocol.md`；
- 信息架构：`../product/information-architecture.md`；
- 视觉与 UI 设计：`../product/design-system.md`；
- 设计令牌：`../product/design-tokens.md`；
- 核心组件：`../product/component-specification.md`；
- 页面线框：`../product/interface-wireframes.md`；
- 技术架构：`../architecture/technical-architecture.md`；
- 质量要求：`../standards/quality-standard.md`；
- 视觉验收：`../standards/visual-acceptance-checklist.md`；
- 完整决策访谈：`planning-session.md`。

## 进入实现阶段的双重条件

只有同时满足以下条件才能开始写代码：

1. 上述项目已经完成或被明确推迟，并记录原因；
2. 用户明确确认：**规划完成，可以开始实现。**

文档自行达到完整状态，不构成自动授权。

条件 1 与条件 2 均已满足。用户已于 2026-09-27 明确授权开始实现，项目进入 **Implementation / First Vertical Slice**。

## 实现阶段的第一个任务

不得直接建设完整站点。第一个实现任务应是一条经过确认的最小纵向切片，能够验证：

```text
内容源
→ 元数据
→ 页面呈现
→ 导航与发现
→ 课程或交互接入
→ 构建与部署
```
