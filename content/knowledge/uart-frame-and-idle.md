---
id: knowledge-uart-frame-and-idle-v1
title: UART 是什么：从电平到数据帧
slug: uart-frame-and-idle
summary: 从“两个设备怎样交换一个字符”开始，理解 UART、串行传输、收发线路和最基本的数据帧。
type: knowledge
domain: interfaces-and-communication
tags: [UART, serial, frame]
platforms: [generic, STM32F103]
maturity: verified
visibility: public
createdAt: 2026-09-27
updatedAt: 2026-09-27
verifiedAt: 2026-09-27
publishedAt: 2026-09-27
prerequisites: [knowledge-data-and-byte-stream-v1]
related: [knowledge-c-buffer-model-v1, knowledge-stm32f103-usart-v1]
authors: [MagicBude]
license: CC-BY-SA-4.0
sources:
  - id: rfc20-ascii
    type: standard
    title: RFC 20 — ASCII format for network interchange
    organization: RFC Editor
    url: https://www.rfc-editor.org/rfc/rfc20.html
    locator: Sections 2 and 3
    accessedAt: 2026-09-27
    supports:
      - ASCII 使用 7 位编码表示字符
      - 字符 A 的编码值为十六进制 41
  - id: st-rm0008-usart
    type: official
    title: RM0008 STM32F10xxx reference manual
    organization: STMicroelectronics
    url: https://www.st.com/resource/en/reference_manual/rm0008-stm32f103xx-advanced-armbased-32bit-mcus-stmicroelectronics.pdf
    locator: Section 27, Universal synchronous asynchronous receiver transmitter
    accessedAt: 2026-09-27
    supports:
      - STM32F103 USART 的 TX 空闲状态为高电平
      - RX 使用过采样恢复数据并区分有效输入与噪声
      - 外设提供帧错误、噪声错误、过载错误和奇偶校验错误标志
---

## 先回答：UART 是什么

UART（Universal Asynchronous Receiver/Transmitter，通用异步收发器）是一类把设备内部的并行数据转换成串行比特、再从串行比特恢复数据的硬件外设。

“串行”表示比特沿一根发送线依次出现；“异步”表示两端不共享一根持续的时钟线，而是预先约定传输速度和帧格式。最常见的全双工连接至少包含：

- 设备 A 的 TX（发送）接设备 B 的 RX（接收）；
- 设备 A 的 RX 接设备 B 的 TX；
- 两端 GND 相连，建立共同的电压参考。

UART 只规定收发器如何传送一帧比特，不规定插头、电压标准，也不自动规定一条“消息”在哪里结束。TTL/CMOS 电平 UART、RS-232 和 RS-485 不能因为都传串行数据就直接混接。

## 一个字符如何变成线路上的变化

假设程序发送 ASCII 字符 `A`。`A` 的编码值是十六进制 `0x41`，也就是一个数值为 65 的字节。软件把这个字节交给 UART 外设，UART 再根据双方约定的帧格式逐位发送。字符编码负责“这个数代表哪个字符”，UART 负责“这些比特怎样按时间送到另一端”，两者不是同一层。[^rfc20]

## 先从空闲状态开始

在常见的异步 UART 配置中，发送器启用但没有数据发送时，TX 线路保持高电平。接收端看到线路从高电平跳到低电平后，把这个变化当作一帧可能开始的信号。对 STM32F103 的 USART，这一行为由参考手册的功能描述明确规定。[^st-rm0008-usart]

## 一帧为什么需要起始位和停止位

异步通信没有额外的共享时钟线。发送端和接收端预先约定波特率、数据位、校验方式和停止位数量，然后通过帧结构重新获得时间边界：

1. **起始位**把线路从空闲高电平拉低，提示接收端开始计时；
2. **数据位**承载实际比特，通常最低有效位先发送；
3. **可选校验位**提供有限的单比特错误检测；
4. **停止位**让线路回到高电平，并给接收端检查帧结束状态。

因此，“UART 只是一串 0 和 1”并不完整。没有共同的帧参数，即使两端的导线已经接通，也无法可靠解释这些电平。

## 接收端不是在任意时刻读引脚

STM32F103 USART 的 RX 使用过采样技术恢复数据。接收器会围绕预计的位中心观察输入，而不是只在检测到边沿时读取一次。过采样可以帮助它区分有效输入与短暂噪声，但不能弥补任意大的时钟或波特率偏差。[^st-rm0008-usart]

> **工程边界：** “能偶尔收到字符”不等于配置正确。波特率误差、线路电平、接地、噪声和两端帧参数都需要分别验证。

## 可以观察哪些错误

STM32F103 USART 为过载、噪声、帧和奇偶校验错误提供状态标志。调试时不要只读取数据寄存器；同时记录这些错误状态，通常能更快地区分“软件没有及时取走数据”和“线路或帧参数不匹配”。[^st-rm0008-usart]

## 最小验证方法

- 先确认两端共地，并使用与开发板兼容的 3.3 V USB-UART；
- 固定为一个明确配置，例如 115200、8 数据位、无校验、1 停止位；
- 连续发送已知重复字节，用串口工具确认内容和数量；
- 有逻辑分析仪时，同时检查空闲电平、位宽和帧解码；
- 在固件中统计并输出 USART 错误标志，而不是静默丢弃。

[^st-rm0008-usart]: STMicroelectronics, RM0008, Section 27, Universal synchronous asynchronous receiver transmitter.
[^rfc20]: RFC 20, ASCII format for network interchange, character representation and code table.
