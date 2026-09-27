---
id: course-uart-foundations-v1
title: UART：从一个字符到可靠串口程序
slug: uart-foundations
summary: 从字节、电平和数据帧出发，在 STM32F103C8T6 上完成可测量、可排错的串口收发。
type: course
domain: interfaces-and-communication
tags: [UART, STM32F103, serial, debugging]
platforms: [generic, STM32F103C8T6]
maturity: review
visibility: unlisted
createdAt: 2026-09-27
updatedAt: 2026-09-27
prerequisites: []
related:
  - knowledge-data-and-byte-stream-v1
  - knowledge-uart-frame-and-idle-v1
  - knowledge-c-buffer-model-v1
  - knowledge-stm32f103-usart-v1
authors: [MagicBude]
license: CC-BY-SA-4.0
version: 0.1.0
sources:
  - id: iso-wg14-n1570
    type: standard
    title: ISO/IEC 9899:201x Committee Draft N1570
    organization: ISO/IEC JTC1/SC22/WG14
    url: https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf
    locator: Object representation, arrays and pointer arithmetic
    accessedAt: 2026-09-27
    supports: [课程中的字节、数组、指针和缓冲区边界]
  - id: st-rm0008-usart
    type: official
    title: RM0008 STM32F10xxx reference manual
    organization: STMicroelectronics
    url: https://www.st.com/resource/en/reference_manual/cd00171190-stm32f101-103-105-107-stm32f100-series-armbased-32bit-mcus-stmicroelectronics.pdf
    locator: Sections 7, 9 and 27
    accessedAt: 2026-09-27
    supports: [STM32F103 时钟、GPIO 和 USART 外设行为]
  - id: st-um1850-hal
    type: official
    title: Description of STM32F1 HAL and low-layer drivers
    organization: STMicroelectronics
    url: https://www.st.com/resource/en/user_manual/dm00154093-description-of-stm32f1-hal-and-lowlayer-drivers-stmicroelectronics.pdf
    locator: HAL UART driver chapter
    accessedAt: 2026-09-27
    supports: [STM32F1 HAL UART 的轮询、中断和 DMA 接口]
units:
  - id: uart-u01-byte-to-wire
    title: 从字符到线路
    objective: 能解释字符 A 如何变成字节、UART 帧和线路电平，并画出 8N1 帧。
    status: in-progress
    knowledge: [knowledge-data-and-byte-stream-v1, knowledge-uart-frame-and-idle-v1]
  - id: uart-u02-speed-and-sampling
    title: 波特率、采样与误差
    objective: 能计算一帧传输时间，并判断时钟误差为什么会积累成采样风险。
    status: planned
    knowledge: [knowledge-uart-frame-and-idle-v1]
  - id: uart-u03-first-stm32-link
    title: STM32F103 第一次收发
    objective: 能安全接线并使用 HAL 轮询接口完成发送、接收和回环验证。
    status: planned
    knowledge: [knowledge-stm32f103-usart-v1]
  - id: uart-u04-buffer-and-interrupt
    title: 中断与缓冲区
    objective: 能用容量和有效长度管理接收数据，并解释阻塞、溢出和丢字节的原因。
    status: planned
    knowledge: [knowledge-c-buffer-model-v1, knowledge-stm32f103-usart-v1]
  - id: uart-u05-debug-and-evidence
    title: 用证据排查串口故障
    objective: 能根据接线、状态标志、日志和逻辑分析仪证据定位常见故障。
    status: planned
    knowledge: [knowledge-uart-frame-and-idle-v1, knowledge-stm32f103-usart-v1]
  - id: uart-u06-dma-and-messages
    title: DMA 与消息边界
    objective: 能说明 DMA 解决了什么、没有解决什么，并为字节流设计明确的消息边界。
    status: planned
    knowledge: [knowledge-data-and-byte-stream-v1, knowledge-c-buffer-model-v1]
---

## 课程定位

这门课不是从寄存器清单开始，而是沿着一条可以观察的链路学习：

```text
字符与数值 → 字节流 → UART 帧 → STM32 外设 → 缓冲区 → 可验证的串口程序
```

每个单元只引入完成当前任务所需的知识，并通过计算、画帧、代码阅读或真实硬件证据检验理解。课程仍处于审核态；只有单元内容、练习反馈和实验步骤通过验证后才会进入正式导航。

## 完成标准

学习者最终应能独立完成 STM32F103C8T6 与 3.3 V USB-UART 的安全接线，实现轮询与非阻塞收发，解释缓冲区和消息边界，并能主动制造和定位至少一种配置错误或接收溢出。
