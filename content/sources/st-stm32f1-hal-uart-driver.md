---
id: st-stm32f1-hal-uart-driver
title: STM32F1 HAL UART driver source
slug: st-stm32f1-hal-uart-driver
summary: ST 官方 STM32F1 HAL UART 驱动源码，用于追踪轮询、中断、DMA、状态和错误处理的真实执行路径。
type: source
domain: mcu-and-bare-metal
tags: [STM32F1, HAL, UART, source-code]
platforms: [STM32F103C8T6]
maturity: verified
visibility: public
createdAt: 2026-09-29
updatedAt: 2026-09-29
verifiedAt: 2026-09-29
authors: [STMicroelectronics]
organization: STMicroelectronics
sourceType: official-code
authorityLevel: official
url: https://github.com/STMicroelectronics/stm32f1xx-hal-driver/blob/master/Src/stm32f1xx_hal_uart.c
version: master branch；使用时固定提交
checkedAt: 2026-09-29
access: free
license: BSD-3-Clause
reuse: 可按 BSD-3-Clause 使用和修改；引用行为时必须记录实际使用的标签或提交，而不是只写 master。
localCopy: false
scope: [HAL UART 实现, 阻塞收发, 中断收发, DMA 收发, 状态和错误路径]
audience: [需要追踪 HAL 行为的 STM32 开发者]
prerequisites: [C 语言, STM32F1 USART, HAL API 基础]
readingGuide: [从公开 API 搜索到内部状态机和中断处理函数；项目使用时补充固定 commit。]
strengths: [可追踪真实控制流, 许可明确, 能解释文档没有展开的状态变化]
limitations: [master 会变化, 代码行为仍受具体芯片和配置影响, 不替代硬件手册。]
supports: [HAL_UART_Receive 阻塞路径, HAL 中断回调, 接收重新挂接, 错误处理]
---

## 为什么收录

API 文档说明“应当怎样使用”，源码显示“这个版本实际上怎样执行”。二者不一致时，必须固定版本并记录差异。

## 使用建议

不要长期引用 `master` 的行号。课程或主题指南引用具体实现时，应先固定标签或提交 SHA，再记录文件与函数。
