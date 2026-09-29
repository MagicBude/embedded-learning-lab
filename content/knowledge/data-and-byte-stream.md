---
id: knowledge-data-and-byte-stream-v1
title: 从数值到字节流：串口到底发送了什么
slug: data-and-byte-stream
summary: 区分数值、字符编码、字节和字节流，避免把屏幕上看到的字符误认为线路直接传输了文字。
type: knowledge
domain: programming-foundations
tags: [byte, bit, ASCII, stream]
platforms: [generic]
maturity: verified
visibility: public
createdAt: 2026-09-27
updatedAt: 2026-09-27
verifiedAt: 2026-09-27
publishedAt: 2026-09-27
prerequisites: []
related: [knowledge-uart-frame-and-idle-v1, knowledge-c-buffer-model-v1]
authors: [MagicBude]
license: CC-BY-SA-4.0
sources:
  - sourceId: iso-wg14-n1570
    locator: Sections 3.6, 5.2.4.2.1 and 6.2.6.1
    relation: supports
    claims:
      - C 中 byte 是足以容纳执行环境基本字符集成员的可寻址存储单元
      - 对象的表示由若干字节组成
    checkedAt: 2026-09-29
  - sourceId: rfc20-ascii
    locator: Sections 2 and 3
    relation: supports
    claims:
      - ASCII 定义字符与数值编码之间的映射
      - ASCII 字符使用 7 位表示
    checkedAt: 2026-09-29
---

## 线路不会发送“文字”

程序里的数值、屏幕上的字符和通信线路上的电平属于不同层次。发送字符 `A` 时，可以把过程拆成：

```text
字符 A → 编码值 0x41 → 一个字节 → 一串按时间排列的比特 → 线路电平
```

ASCII 规定 `A` 对应十六进制 `0x41`；它不规定这些比特怎样经过 UART、USB 或网络传输。[^rfc20-ascii]

## bit、byte 和字节流

- bit（比特）只有 0 或 1 两种值；
- byte（字节）是 C 执行环境的基本可寻址存储单元，现代 MCU 上通常为 8 bit，但写通用 C 代码时应通过 `CHAR_BIT` 获取准确位数；
- 字节流只是按顺序到达的一串字节，本身不携带“字符串结束”“一条命令结束”或“一个结构体结束”的天然边界。[^iso-wg14-n1570]

例如连续收到 `0x41 0x42 0x0A`，终端可能按 ASCII 显示为 `AB` 后换行；另一个程序也可以把三个字节解释成长度、命令码和参数。解释规则来自上层协议，而不是字节流本身。

## 十六进制只是更方便的写法

一个十六进制数字恰好表示 4 bit，所以两个十六进制数字很适合紧凑表示一个 8-bit 字节：

```text
0x41 = 0100 0001₂ = 65₁₀
```

它们是同一个数值的三种写法，不是三份不同的数据。

## 自检

如果串口工具显示字符 `1`，线路上传输的通常是 ASCII 编码 `0x31`，而不是数值 `0x01`。反过来，发送单个字节 `0x01` 通常不会显示为字符 `1`。

[^iso-wg14-n1570]: WG14 N1570, Sections 3.6, 5.2.4.2.1 and 6.2.6.1.
[^rfc20-ascii]: RFC 20, Sections 2 and 3.
