---
id: gcc-online-documentation
title: GCC online documentation
slug: gcc-online-documentation
summary: GNU Compiler Collection 的官方版本化手册入口，用于核对语言模式、警告、优化、扩展和链接选项。
type: source
domain: engineering-testing-and-debugging
tags: [GCC, compiler, warning, optimization]
platforms: [generic]
maturity: verified
visibility: public
createdAt: 2026-09-29
updatedAt: 2026-09-29
verifiedAt: 2026-09-29
authors: [GNU Project]
organization: GNU Project
sourceType: official-doc
authorityLevel: official
url: https://gcc.gnu.org/onlinedocs/
checkedAt: 2026-09-29
access: free
license: GNU Free Documentation License;按具体手册核对
reuse: 可链接；复制或改编具体手册内容时遵守对应版本的 GFDL 声明。
localCopy: false
scope: [GCC 版本化手册, C 方言, 警告选项, 优化, 预处理与链接选项]
audience: [C/C++ 开发者, 固件构建维护者]
prerequisites: [基础编译流程]
readingGuide: [先选择与本机 GCC 一致的版本，再查 C Dialect Options、Warning Options 和 Optimization Options。]
strengths: [官方且按版本归档, 选项说明完整, 可区分 ISO C 与 GNU 扩展]
limitations: [不能代替 ISO C 标准, 不解释特定 MCU 硬件, 不同 GCC 版本行为可能变化。]
supports: [严格警告配置, C 标准模式, 编译优化, 诊断解释]
---

## 为什么收录

编译器选项不是跨版本永恒不变的常识。资料卡保留版本入口，项目内容引用某个诊断或优化行为时还应记录实际 GCC 版本。

## 使用建议

先由 `gcc --version` 确定版本，再进入相应手册。语言规则回到 WG14，编译器特有行为回到 GCC 文档，两者不能混写。
