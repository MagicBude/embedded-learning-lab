---
id: knowledge-c-buffer-model-v1
title: C 缓冲区模型：数组、指针与有效长度
slug: c-buffer-model
summary: 用起始地址、容量和有效长度理解串口收发缓冲区，并识别越界与字符串误用。
type: knowledge
domain: programming-foundations
tags: [C, array, pointer, buffer]
platforms: [generic]
maturity: verified
visibility: public
createdAt: 2026-09-27
updatedAt: 2026-09-27
verifiedAt: 2026-09-27
publishedAt: 2026-09-27
prerequisites: [knowledge-data-and-byte-stream-v1]
related: [knowledge-uart-frame-and-idle-v1, knowledge-stm32f103-usart-v1]
authors: [MagicBude]
license: CC-BY-SA-4.0
sources:
  - id: iso-wg14-n1570
    type: standard
    title: ISO/IEC 9899:201x Committee Draft N1570
    organization: ISO/IEC JTC1/SC22/WG14
    url: https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf
    locator: Sections 6.5.6, 6.5.8 and 6.7.6.2
    accessedAt: 2026-09-27
    supports:
      - 数组由连续排列的元素组成
      - 指针运算只在同一数组对象及其尾后一位的边界内定义
      - 数组下标访问必须落在有效元素范围内
---

## 缓冲区不是“一个指针”

在串口程序里，缓冲区通常由三个信息共同描述：

```c
uint8_t rx[64];   // 存储区域，容量 64 byte
size_t used = 0;  // 当前有效数据长度
```

数组提供连续存储，指向首元素的指针告诉函数从哪里开始读写，容量限制最多能放多少数据，有效长度说明其中多少数据已经有意义。只有指针而没有容量，函数就无法自行判断边界。

## 容量与有效长度不能混用

`sizeof rx` 在当前作用域得到整个数组的大小；把数组传给函数后，形参里的 `uint8_t *buffer` 只是指针，`sizeof buffer` 得到的是指针大小，不再是原数组容量。因此可靠接口会显式传入容量或长度。

```c
bool push_byte(uint8_t *buffer, size_t capacity, size_t *used, uint8_t value) {
    if (*used >= capacity) return false;
    buffer[(*used)++] = value;
    return true;
}
```

C 只允许在同一数组对象及其尾后一位范围内进行相关指针运算；尾后一位可以用于比较，但不能解引用。越界访问不是“可能读到旧数据”这么简单，而是未定义行为。[^iso-wg14-n1570]

## 字节缓冲区不一定是字符串

C 字符串需要以空字符 `\0` 结束。UART 接收得到的是任意字节流，它可能包含 `0x00`，也可能填满整个数组而没有终止符。未经检查就把接收缓冲区交给 `%s`、`strlen` 或 `strcpy`，可能越界读取或过早截断。

处理串口数据时，优先让接口携带明确长度；只有确认编码、空间和终止符后，才把一段数据当作 C 字符串。

## 自检

`uint8_t buffer[8]` 已接收 8 byte 时，下一字节不能写入 `buffer[8]`。下标 8 是尾后一位，不是第九个可用元素。

[^iso-wg14-n1570]: WG14 N1570, Sections 6.5.6, 6.5.8 and 6.7.6.2.
