---
status: accepted
---

# 内容模型与元数据

## 公共字段

所有内容具有稳定 `id`。适用时记录：

- `title`、`slug`、`summary`；
- `type`；
- `domain`、`tags`、`platforms`；
- `maturity`、`visibility`；
- `createdAt`、`updatedAt`、`verifiedAt`、`publishedAt`；
- `prerequisites`、`related`；
- `sources`；
- `authors`；
- `license`。

可选字段不适用时省略，不填写虚假占位值。稳定 ID 不由路径或框架自动生成。

## Sources 资料卡字段

资料卡除适用的公共字段外记录：

- `sourceType`：`standard / official-doc / official-code / book / paper / course / article / video / community`；
- `authorityLevel`：`normative / official / educational / practitioner / community`；
- `organization` 与 `authors`；
- `url`、文档编号、仓库提交或课程入口；
- `version`、发布日期与最后核对日期；
- `access`：`free / registration / mixed / paid`；
- `license`、版权声明与允许的复用方式；
- `localCopy`：是否允许保存本地副本及其路径；
- `scope`：解决的问题与明确不覆盖的范围；
- `audience`、`prerequisites` 和推荐学习阶段；
- `readingGuide`：建议阅读的章节、页码、视频段落或源码位置；
- `strengths`、`limitations` 和可替代来源；
- `supports`：它支撑的主题、课程单元、实验或具体结论。

资料卡正文用于独立评价和阅读导航，不复制原资料正文。详细规则见 [`source-library.md`](source-library.md)。

## 状态

成熟度：

```text
capture → draft → review → verified → archived
```

可见性：

- `public`：满足发布条件后进入导航、搜索和站点地图；
- `unlisted`：可以生成页面，但不进入导航、搜索和站点地图。

仓库和内容源公开，因此可见性只控制网站呈现，不承担保密职责。`capture`、`draft` 和 `review` 默认不进入正式站点。

## 分类与关系

- `domain`：九个稳定知识领域之一；
- `tags`：UART、DMA 等可演进关键词；
- `platforms`：STM32F103、ESP32 等具体实现平台；
- `prerequisites`：学习前置关系；
- `related`：一般关联；
- 路线、课程、章节和题目使用各自的专用关系字段。

## 知识领域

1. 编程基础；
2. 计算机与硬件基础；
3. MCU 与裸机开发；
4. 接口与通信；
5. 实时系统；
6. Embedded Linux；
7. 网络与 IoT；
8. 工程、测试与调试；
9. 系统设计与可靠性。

规划和路线保留完整领域；网站只展示具有真实内容的入口。

## 引用与来源关系

主题指南、课程、实验和题目通过稳定 Source ID 引用资料卡，并在需要时补充精确定位：

- `sourceId`；
- `locator`：章节、页码、条款、时间段、文件与行号或提交；
- `relation`：`supports / explains / demonstrates / contrasts / contradicts / supersedes`；
- `claims`：它在当前内容中支持的一组具体陈述；
- `checkedAt`：本次使用时的核对日期。

关键结论使用紧邻引用，不能只在文末堆放资料链接。来源与正文的重复书目信息已经由稳定 ID 统一解析；新内容不得重新引入内嵌书目对象。

## 内容格式

- 资料卡和普通主题指南使用标准 Markdown 与结构化 YAML；
- 只有真正需要互动组件的课程章节或实验使用 MDX；
- MDX 属于可执行内容边界，只允许可信仓库作者维护；
- 标准和官方资料是事实基础；主题指南负责跨来源解释，具体平台实现较短时作为明确分区，增长后拆为关联实现页。

## 课程字段

课程除公共字段外还记录：

- `version`：课程内容版本；
- `units`：具有稳定单元 ID 的有序单元；
- 单元 `status`：`planned / in-progress / available`；
- 单元 `objective`：一个可观察的学习目标；
- 单元 `knowledge`：关联的主题指南 ID；
- 单元 `sources`：推荐阅读和关键事实所使用的 Source ID；
- 单元 `exercises`：稳定练习 ID；
- 单元 `acceptance`：证明学习目标达成所需的可观察证据。

单元可以在课程整体仍为 `review / unlisted` 时达到 `available`，用于内部预览和真实学习反馈；只有课程整体达到 `verified / public` 后，才进入正式课程列表与搜索。
