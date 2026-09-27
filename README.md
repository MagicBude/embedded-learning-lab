# Embedded Learning Lab

> Read. Experiment. Build.

Embedded Learning Lab（嵌入式学习实验室）是一个面向嵌入式系统的个人学习与工程实验室。

项目计划将分散在教材、数据手册、技术文档、代码和实际工程中的知识，逐步整理成结构化、可查阅、可练习、可运行的内容，并在适合时扩展为交互课程、实验、项目和实用工具。

## 当前阶段

项目处于 **Implementation / First Vertical Slice** 阶段，正在实现基础站点和 UART 最小纵向切片。

当前优先进行：

- UART 所需的最小 Knowledge、课程、互动与面试题；
- 内容关联、自动检查和 GitHub Pages 线上验证；
- 按规划文档进行响应式、可访问性和视觉验收。

基础站点、内容 Schema、浅深主题、响应式导航、Pagefind 和部署工作流已经落地。

## 本地运行

```bash
cd apps/site
npm install
npm run dev
```

类型检查与生产构建：

```bash
npm run check
npm run build
```

## 长期内容边界

```text
Embedded Learning Lab
├─ Paths       学习路径
├─ Knowledge   结构化知识
├─ Courses     交互课程
├─ Labs        实验与可视化
├─ Projects    工程项目
├─ Notes       问题记录与复盘
└─ Tools       实用工具
```

以上是长期内容类型，不等于第一版必须同时实现全部模块。

## 文档入口

- [文档导航](docs/README.md)
- [项目章程](docs/project/project-charter.md)
- [规划门槛](docs/project/planning-gate.md)
- [产品内容模型](docs/product/content-model.md)
- [第一版范围与验收](docs/product/first-release-scope.md)
- [内容模型与元数据](docs/product/content-schema.md)
- [课程产物协议](docs/product/course-package-protocol.md)
- [长期学习路线](docs/product/learning-roadmap.md)
- [网站设计系统](docs/product/design-system.md)
- [设计令牌](docs/product/design-tokens.md)
- [核心组件规范](docs/product/component-specification.md)
- [界面线框](docs/product/interface-wireframes.md)
- [视觉验收清单](docs/standards/visual-acceptance-checklist.md)
- [信息架构草案](docs/product/information-architecture.md)
- [仓库结构](docs/architecture/repository-structure.md)
- [决策记录](docs/project/decisions.md)
- [项目专用技能](skills/README.md)

## 项目原则

1. 首先服务个人长期学习、查阅和实践。
2. 内容从真实学习与工程活动中生长，不为填充目录而生产。
3. 技术正确性和可验证性优先于更新数量与视觉效果。
4. 同一知识只维护一个权威来源，再按不同媒介生成或改编。
5. 先完成小而完整的纵向切片，再扩展主题与功能。
6. 网站是长期知识入口，社交平台是分发渠道而非内容主库。

## 仓库状态

规划已完成并获得实现授权。第一版采用 Astro 静态输出、npm、Pagefind、GitHub Actions 和 GitHub Pages，按 UART 最小纵向切片逐步实现。

自创代码采用 [MIT](LICENSE)，原创文章、课程正文和图表采用 [CC BY-SA 4.0](CONTENT-LICENSE.md)。第三方材料边界见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
