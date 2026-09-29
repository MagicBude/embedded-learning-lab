---
id: rfc20-ascii
title: RFC 20 — ASCII format for network interchange
slug: rfc20-ascii
summary: RFC Editor 保存的 ASCII 编码规范，用于核对字符与 7 位编码值之间的映射。
type: source
domain: programming-foundations
tags: [ASCII, encoding, byte]
platforms: [generic]
maturity: verified
visibility: public
createdAt: 2026-09-29
updatedAt: 2026-09-29
verifiedAt: 2026-09-29
authors: [Vint Cerf]
organization: RFC Editor
sourceType: standard
authorityLevel: normative
url: https://www.rfc-editor.org/rfc/rfc20.html
version: RFC 20
checkedAt: 2026-09-29
access: free
license: IETF Trust Legal Provisions
reuse: 可链接并在许可范围内短引用；再发布或改编应核对 RFC Editor 与 IETF Trust 的现行条款。
localCopy: false
scope: [ASCII 字符集, 字符与编码值映射, 控制字符]
audience: [C 语言学习者, 串行通信学习者]
prerequisites: []
readingGuide: [先读第 2 节的字符表示，再查第 3 节代码表；不必从头逐字阅读全部历史说明。]
strengths: [规范性来源, HTML 版本便于定位, 可直接核对字符代码]
limitations: [只定义 ASCII，不规定 UART 帧、线路电平或现代 Unicode 编码。]
supports: [字符与编码值的关系, UART 示例中的 ASCII 字节, 字节流与文本显示边界]
---

## 为什么收录

很多串口教程把“字符”“编码值”和“线路上的比特”混为一谈。RFC 20 只负责 ASCII 这一层，因此适合用来固定表示转换的起点和边界。

## 使用建议

需要确认某个 ASCII 字符的数值时查代码表；需要说明 UART 如何发送该数值时，应转到 UART 外设手册，而不是继续从本规范推导线路行为。
