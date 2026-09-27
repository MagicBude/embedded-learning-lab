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

## 来源记录

每个来源记录：

- 稳定来源 ID；
- 来源类型；
- 标题、作者或机构；
- URL、文档编号和版本；
- 章节、页码或定位信息；
- 访问日期；
- 原许可证和版权说明；
- 它支持的结论；
- 必要的修改说明。

正文通过来源 ID 引用。关键结论使用紧邻引用，不能只在文末堆放链接。

## 内容格式

- 普通知识内容使用标准 Markdown 与结构化 YAML；
- 只有真正需要互动组件的课程章节或实验使用 MDX；
- MDX 属于可执行内容边界，只允许可信仓库作者维护；
- 通用知识是权威基础，具体平台实现较短时作为明确分区，增长后拆为关联实现页。
