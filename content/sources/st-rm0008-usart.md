---
id: st-rm0008-usart
title: RM0008 STM32F10xxx reference manual
slug: st-rm0008-usart
summary: STM32F101、STM32F102、STM32F103 和 STM32F105/107 的参考手册，是寄存器、时钟、GPIO 与 USART 行为的主要依据。
type: source
domain: mcu-and-bare-metal
tags: [STM32F103, USART, GPIO, RCC, register]
platforms: [STM32F103C8T6]
maturity: verified
visibility: public
createdAt: 2026-09-29
updatedAt: 2026-09-29
verifiedAt: 2026-09-29
authors: [STMicroelectronics]
organization: STMicroelectronics
sourceType: official-doc
authorityLevel: official
url: https://www.st.com/resource/en/reference_manual/rm0008-stm32f103xx-advanced-armbased-32bit-mcus-stmicroelectronics.pdf
version: RM0008 Rev 21
checkedAt: 2026-09-29
access: free
license: STMicroelectronics copyright
reuse: 允许链接和必要短引用；图表、正文和完整文档不得因免费下载而视为开放许可。
localCopy: false
scope: [STM32F1 系统架构, RCC, GPIO, USART, 中断与 DMA 请求]
audience: [STM32F103 固件开发者]
prerequisites: [C 语言基础, MCU 寄存器基础]
readingGuide: [UART 主线先读 RCC、GPIO 和 USART 章节；寄存器位字段以当前修订版为准。]
strengths: [芯片系列官方行为依据, 寄存器和位字段完整, 包含错误状态和时序说明]
limitations: [不替代具体型号数据手册, 示例不等同于完整工程, 不负责 HAL API 行为。]
supports: [STM32F103 时钟树, GPIO 复用, USART 寄存器, 帧与错误标志, 中断和 DMA 请求]
---

## 为什么收录

UART 是否启用、挂在哪条总线、怎样产生波特率以及错误标志如何变化，都应首先回到参考手册，而不是依据某段 HAL 示例反推。

## 使用建议

把参考手册与具体型号数据手册配对使用：参考手册说明外设如何工作，数据手册确认芯片封装、引脚和电气限制。
