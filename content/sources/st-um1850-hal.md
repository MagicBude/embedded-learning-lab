---
id: st-um1850-hal
title: Description of STM32F1 HAL and low-layer drivers
slug: st-um1850-hal
summary: STM32F1 HAL 与 LL 驱动说明，用于理解句柄、初始化、轮询、中断和 DMA API 的职责。
type: source
domain: mcu-and-bare-metal
tags: [STM32F1, HAL, LL, UART]
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
url: https://www.st.com/resource/en/user_manual/dm00154093-description-of-stm32f1-hal-and-lowlayer-drivers-stmicroelectronics.pdf
version: UM1850
checkedAt: 2026-09-29
access: free
license: STMicroelectronics copyright
reuse: 允许链接和必要短引用；完整手册和图表不按开放内容处理。
localCopy: false
scope: [STM32F1 HAL 架构, UART HAL API, 状态与错误处理, 中断和 DMA 接口]
audience: [使用 STM32Cube HAL 的固件开发者]
prerequisites: [C 语言, STM32F1 外设基础]
readingGuide: [先读 HAL 通用约定，再读 UART 驱动章节；API 细节应与实际使用的驱动源码版本交叉核对。]
strengths: [官方 API 说明, 统一解释句柄和回调, 覆盖轮询、中断与 DMA]
limitations: [版本可能落后于当前源码, 不替代参考手册, 不解决应用层缓冲和消息边界。]
supports: [HAL UART 句柄, 轮询收发, 中断回调, DMA 收发, 错误码]
---

## 为什么收录

HAL 负责软件接口，参考手册负责硬件行为。将两者分开记录，可以避免把 HAL 的状态机误认为 USART 本身的硬件规定。

## 使用建议

遇到回调、状态或超时问题时，同时查看手册、头文件和当前版本源码；教程中的函数名不能代替版本核对。
