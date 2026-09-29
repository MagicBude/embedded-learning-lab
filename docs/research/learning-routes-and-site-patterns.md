---
status: accepted
reviewed: 2026-09-27
---

# 学习路线与网站模式调研

本调研用于解释长期学习路线、面试题库和信息架构的来源。外部站点只提供覆盖度和设计模式参考，不成为技术事实来源，也不授权复制其正文、课程结构或视觉资产。

## 代表性路线来源

- [嵌问学习路线](https://qianwen-tech.cn/roadmap)：共同基础、MCU/RTOS 主线、可选 Linux 分支，以及每阶段产出和过关标准；
- [CodeSheep 嵌入式路线图](https://static.r2coding.com/r2_static/pdf/embed.pdf)：编程、硬件、ARM、Linux 应用、内核驱动和工具的岗位分支；
- [0voice EmbeddedSoftwareLearn](https://github.com/0voice/EmbeddedSoftwareLearn)：C/C++、驱动、网络、RTOS、Embedded Linux 与 IoT 的社区型覆盖；
- [asia-meidia embedded-interview](https://github.com/asia-meidia/embedded-interview)：面试高频知识清单，用于检查覆盖度；
- [江协科技](https://www.jiangxiekeji.com/)：中文初学者课程顺序、实验颗粒度和常见问题的教学形式参考。

这些来源共同指向：

```text
C 与程序模型
→ MCU、裸机和常见外设
→ UART / I²C / SPI
→ RTOS 与工程项目
→ Embedded Linux、BSP/驱动、网络与 IoT 等目标分支
```

面试目录会放大易于提问的细节，并可能漏掉测试、测量、维护和可靠性。因此它只能作为策展视图和覆盖度检查，不能直接充当长期知识分类。

## 网站与内容设计参考

### Chenxu Qiao

- [首页](https://chenxuqiao.com/)以一句定位、精选入口、分类知识库和课程归档支持系统学习、专题探索和快速回查；
- [STM32 学习路线](https://chenxuqiao.com/lab/stm32-embedded/)用阶段、优先级和贯穿能力表达依赖。

适合借鉴轻量信息层级、内容规模提示和路线阶段；不复制其分类、卡片、配色、图标或文案。

### 嵌问

- [首页](https://qianwen-tech.cn/)突出搜索、学习路线、题库和复习入口；
- [题库](https://qianwen-tech.cn/questions)使用分类、岗位、难度和技术标签筛选；
- [学习路线](https://qianwen-tech.cn/roadmap)将重点、产出、过关标准和练习放在同一阶段。

适合借鉴搜索、练习、成果和验收闭环；不照搬商业辅导入口、密集导航或具体视觉资产。

## 已采用结论

- 知识领域、学习路线和面试准备分为三个相关视图；
- 路线采用共同主干后分四条目标方向；
- 每阶段必须有目标、前置、产出和验收；
- 面试题反向引用 Sources、主题指南和实验依据；
- 首页采用轻量层级，路线和题库强调搜索、练习和完成证据；
- 路线完整规划，但不生成空栏目或占位内容。
