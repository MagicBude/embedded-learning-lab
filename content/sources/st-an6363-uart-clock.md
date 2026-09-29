---
id: st-an6363-uart-clock
title: AN6363 — Introduction to clock requirements and calibration for STM32 MCUs
slug: st-an6363-uart-clock
summary: ST 关于 MCU 时钟要求和校准的应用笔记，其中 UART 部分用于理解时钟误差与采样位置偏移。
type: source
domain: interfaces-and-communication
tags: [UART, clock, sampling, calibration]
platforms: [STM32]
maturity: verified
visibility: public
createdAt: 2026-09-29
updatedAt: 2026-09-29
verifiedAt: 2026-09-29
authors: [STMicroelectronics]
organization: STMicroelectronics
sourceType: official-doc
authorityLevel: official
url: https://www.st.com/resource/en/application_note/an6363-introduction-to-clock-requirements-and-calibration-for-stm32-mcus-stmicroelectronics.pdf
version: AN6363
checkedAt: 2026-09-29
access: free
license: STMicroelectronics copyright
reuse: 允许链接和必要短引用；图表和完整文档不按开放内容处理。
localCopy: false
scope: [STM32 时钟精度, UART 采样, 时钟校准]
audience: [调试串行通信和时钟问题的固件开发者]
prerequisites: [UART 帧, 波特率, 时钟基础]
readingGuide: [UART 学习优先阅读第 2.1 节，再回到具体器件参考手册确认采样与分频限制。]
strengths: [把时钟误差与通信风险连接起来, 官方应用背景, 适合解释误差累计]
limitations: [不能给出所有 STM32 和所有帧格式的统一安全百分比, 不能替代实测。]
supports: [UART 时钟误差, 帧内采样偏移, 波特率容差边界]
---

## 为什么收录

“UART 允许多少误差”经常被简化成一个固定百分比。这份资料适合解释误差来源，但最终容差仍要结合具体器件、配置和测量。

## 使用建议

将应用笔记用于建立模型，再用参考手册确定具体实现，用逻辑分析仪或示波器验证真实位宽和边沿。
