---
id: knowledge-stm32f103-usart-v1
title: STM32F103 USART：从通用 UART 到片上外设
slug: stm32f103-usart
summary: 把 UART 通用模型映射到 STM32F103 的时钟、GPIO、状态标志和 HAL 收发接口。
type: knowledge
domain: mcu-and-bare-metal
tags: [UART, USART, STM32F103, HAL]
platforms: [STM32F103C8T6]
maturity: verified
visibility: public
createdAt: 2026-09-27
updatedAt: 2026-09-27
verifiedAt: 2026-09-27
publishedAt: 2026-09-27
prerequisites: [knowledge-uart-frame-and-idle-v1, knowledge-c-buffer-model-v1]
related: []
authors: [MagicBude]
license: CC-BY-SA-4.0
sources:
  - id: st-rm0008-usart
    type: official
    title: RM0008 STM32F10xxx reference manual
    organization: STMicroelectronics
    url: https://www.st.com/resource/en/reference_manual/cd00171190-stm32f101-103-105-107-stm32f100-series-armbased-32bit-mcus-stmicroelectronics.pdf
    locator: Sections 7, 9 and 27
    accessedAt: 2026-09-27
    supports:
      - USART 外设时钟和 GPIO 复用需要分别配置
      - USART1 位于 APB2 而 USART2 和 USART3 位于 APB1
      - SR、DR、BRR 和 CR 寄存器承担状态、数据、波特率和控制职责
  - id: st-um1850-hal
    type: official
    title: Description of STM32F1 HAL and low-layer drivers
    organization: STMicroelectronics
    url: https://www.st.com/resource/en/user_manual/dm00154093-description-of-stm32f1-hal-and-lowlayer-drivers-stmicroelectronics.pdf
    locator: HAL UART driver chapter
    accessedAt: 2026-09-27
    supports:
      - HAL UART 提供轮询、中断和 DMA 三类收发接口
      - HAL UART 句柄保存初始化、状态、缓冲和错误信息
---

## 为什么芯片手册写 USART

USART（Universal Synchronous/Asynchronous Receiver/Transmitter）比 UART 多了同步通信能力。STM32F103 的 USART 工作在异步模式时，就是本项目所说的 UART 用法；代码中通常使用 HAL UART 接口。

## 一条发送链路需要哪些条件

以常用的 USART1 为例，发送一个字节之前至少要让下面几层同时成立：

1. RCC 为 GPIOA 和 USART1 打开外设时钟；
2. PA9 配置为复用推挽输出，PA10 配置为输入；
3. USART 的波特率、数据位、校验和停止位与对端一致；
4. USART、发送器和接收器按需要启用；
5. 软件等待可发送状态并写入数据，或者交给中断/DMA 流程。

USART1 挂在 APB2；USART2 和 USART3 挂在 APB1。计算波特率时必须使用对应外设实际得到的总线时钟，而不是笼统地套用“CPU 主频”。[^st-rm0008-usart]

## HAL 把什么封装起来

`HAL_UART_Transmit` 和 `HAL_UART_Receive` 提供阻塞式入门接口；带 `_IT` 的接口使用中断，带 `_DMA` 的接口使用 DMA（直接内存访问）。这些接口减少了直接操作寄存器的样板代码，但不会替你解决缓冲区容量、消息边界、超时策略或接线错误。[^st-um1850-hal]

学习时应同时知道几个关键寄存器职责：

- `SR`：发送、接收和错误状态；
- `DR`：收发数据；
- `BRR`：波特率分频；
- `CR1/CR2/CR3`：启用、帧格式、中断、DMA 等控制。

## 最小接线边界

本项目以 STM32F103C8T6 最小系统板和 3.3 V USB-UART 为例：板端 TX 接转换器 RX，板端 RX 接转换器 TX，并且共地。先确认转换器逻辑电平兼容 3.3 V；不要把传统 RS-232 电平直接接到 MCU 引脚。

## 自检

如果 USART1 配置看似正确却没有波形，先分别检查 GPIOA 时钟、USART1 时钟、PA9 复用配置和发送器使能。只检查波特率并不能覆盖整条链路。

[^st-rm0008-usart]: STMicroelectronics, RM0008, Sections 7, 9 and 27.
[^st-um1850-hal]: STMicroelectronics, UM1850, HAL UART driver chapter.
