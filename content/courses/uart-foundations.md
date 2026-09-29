---
id: course-uart-foundations-v1
title: UART：从一个字符到可靠串口程序
slug: uart-foundations
summary: 从“UART 到底是什么”开始，沿着字符、字节、数据帧和真实线路，在 STM32F103C8T6 上完成可测量、可排错的串口收发。
type: course
domain: interfaces-and-communication
tags: [UART, STM32F103, serial, debugging]
platforms: [generic, STM32F103C8T6]
maturity: review
visibility: unlisted
createdAt: 2026-09-27
updatedAt: 2026-09-27
prerequisites: []
related: [knowledge-data-and-byte-stream-v1, knowledge-uart-frame-and-idle-v1, knowledge-c-buffer-model-v1, knowledge-stm32f103-usart-v1]
authors: [MagicBude]
license: CC-BY-SA-4.0
version: 0.4.0
package:
  version: 0.4.0
  path: uart-foundations/v0.4.0
  status: review
  entry: index.html
  manifest: manifest.json
sources:
  - sourceId: rfc20-ascii
    locator: Sections 2 and 3
    relation: supports
    claims: [字符与编码值的关系]
    checkedAt: 2026-09-29
  - sourceId: iso-wg14-n1570
    locator: Object representation, arrays and pointer arithmetic
    relation: supports
    claims: [课程中的字节、数组、指针和缓冲区边界]
    checkedAt: 2026-09-29
  - sourceId: st-rm0008-usart
    locator: Sections 7, 9 and 27
    relation: supports
    claims: [STM32F103 时钟、GPIO 和 USART 外设行为]
    checkedAt: 2026-09-29
  - sourceId: st-ds5319-f103x8-xb
    locator: Pinouts and pin description; alternate functions
    relation: supports
    claims: [STM32F103C8T6 封装引脚与 USART1 默认引脚功能]
    checkedAt: 2026-09-29
  - sourceId: st-um1850-hal
    locator: HAL UART driver chapter
    relation: explains
    claims: [STM32F1 HAL UART 的轮询、中断和 DMA 接口]
    checkedAt: 2026-09-29
  - sourceId: st-stm32f1-hal-uart-driver
    locator: HAL_UART_Receive and polling mode documentation
    relation: explains
    claims: [HAL_UART_Receive 的阻塞、长度、超时、状态与 RXNE 读取路径]
    checkedAt: 2026-09-29
  - sourceId: st-an6363-uart-clock
    locator: Section 2.1, UART
    relation: supports
    claims: [UART 时钟误差、采样位置漂移和真实容差影响因素]
    checkedAt: 2026-09-29
units:
  - id: uart-u01-system-boundary
    title: UART 是什么：设备、线路与接口边界
    objective: 能说明 UART 解决什么问题，在完整系统中处于哪里，怎样连接，以及它规定与不规定什么。
    status: available
    knowledge: [knowledge-uart-frame-and-idle-v1]
    exercises: [uart-ex-system-boundary-v1]
    acceptance: [能解释 UART、串行、异步和全双工, 能画出 TX、RX、GND 交叉连接, 能区分 UART、USB-UART、RS-232 和终端软件]
  - id: uart-u02-character-to-frame
    title: 字符怎样变成 UART 帧
    objective: 能把一个 ASCII 字符逐步转换为编码值、内存字节、D0 至 D7 位序和完整 8N1 线路帧，并反向解码。
    status: available
    knowledge: [knowledge-data-and-byte-stream-v1, knowledge-uart-frame-and-idle-v1]
    exercises: [uart-ex-frame-builder-v1, uart-ex-frame-decode-v1]
    acceptance: [能解释每次表示转换及其责任主体, 能区分纸面位序与线路时间顺序, 能独立生成和解码 8N1 帧, 能说明校验位的能力边界]
  - id: uart-u03-baud-and-sampling
    title: 波特率、采样与时钟误差
    objective: 能由波特率和帧格式推导位时间、帧时间与有效速率，并解释采样点为什么会在帧内累计偏移。
    status: available
    knowledge: [knowledge-uart-frame-and-idle-v1]
    exercises: [uart-ex-frame-time-v1, uart-ex-sampling-drift-v1]
    acceptance: [能区分 baud、bit 每秒和 byte 每秒, 能完整计算位时间与帧时间, 能解释起始位与累计采样偏移, 能说明理想模型不能替代器件手册和实测]
  - id: uart-u04-first-transmit
    title: 工具、接线与第一次发送
    objective: 能安全连接 STM32F103C8T6 与 3.3 V USB-UART，配置 USART1，并用 HAL 轮询发送获得终端证据。
    status: available
    knowledge: [knowledge-stm32f103-usart-v1]
    exercises: [uart-ex-first-transmit-evidence-v1, uart-ex-first-transmit-debug-v1]
    acceptance: [能完成接线与配置检查, 能发送固定字节和字符串, 能保存终端输出或波形证据]
  - id: uart-u05-polling-receive
    title: 轮询接收、超时与回环
    objective: 能使用 HAL 轮询接口完成单字节和定长接收，观察阻塞与超时，并实现 echo 回环。
    status: available
    knowledge: [knowledge-stm32f103-usart-v1]
    exercises: [uart-ex-polling-echo-v1, uart-ex-fixed-length-timeout-v1]
    acceptance: [能解释阻塞和超时参数, 能完成轮询回环, 能记录无输入与输入不足时的行为]
  - id: uart-u06-stream-string-buffer
    title: 字节流、字符串与缓冲区
    objective: 能区分容量、有效长度、字符串终止符和二进制数据，并安全处理接收缓冲区。
    status: available
    knowledge: [knowledge-data-and-byte-stream-v1, knowledge-c-buffer-model-v1]
    exercises: [uart-ex-binary-zero-byte-v1, uart-ex-stale-buffer-v1]
    acceptance: [能避免越界与错误字符串解释, 能用长度处理包含零值的二进制数据]
  - id: uart-u07-interrupt-receive
    title: 中断实现非阻塞接收
    objective: 能解释 RXNE、中断服务与 HAL 回调的协作，并在主循环继续运行时持续接收数据。
    status: planned
    knowledge: [knowledge-stm32f103-usart-v1]
    exercises: []
    acceptance: [能实现并验证非阻塞接收, 能说明重新挂接接收和共享状态的边界]
  - id: uart-u08-ring-buffer
    title: 环形缓冲区、溢出与持续数据流
    objective: 能用读写索引把中断收到的字节交给主循环，并显式检测和处理缓冲区溢出。
    status: planned
    knowledge: [knowledge-c-buffer-model-v1, knowledge-stm32f103-usart-v1]
    exercises: []
    acceptance: [能实现有边界检查的环形缓冲区, 能制造并观察溢出, 能说明覆盖与丢弃策略]
  - id: uart-u09-debug-evidence
    title: 错误标志与证据化排错
    objective: 能联合接线、配置、状态标志、日志和逻辑分析仪证据定位常见 UART 故障。
    status: planned
    knowledge: [knowledge-uart-frame-and-idle-v1, knowledge-stm32f103-usart-v1]
    exercises: []
    acceptance: [能解释 ORE、FE、NE 等错误的可观察意义, 能依据至少两类证据定位一种人为故障]
  - id: uart-u10-dma-idle-messages
    title: DMA、IDLE 与消息边界
    objective: 能区分 DMA 数据搬运、IDLE 空闲检测与应用层消息定界，并完成不定长命令接收案例。
    status: planned
    knowledge: [knowledge-data-and-byte-stream-v1, knowledge-c-buffer-model-v1, knowledge-stm32f103-usart-v1]
    exercises: []
    acceptance: [能说明 DMA 解决和没有解决的问题, 能比较定长、分隔符、长度字段和 IDLE, 能验证不定长消息接收]
---

## 课程说明

这门课程从“UART 是什么”开始，逐课建立连接、帧、时序、收发程序、缓冲区和排错方法。

建议按目录顺序学习：先阅读讲解并完成课内练习，再用入门速查表复习术语和公式。课程中的稳定知识会同时关联到可独立查阅的 Knowledge。

当前版本完成前六课，其余课次只在目录中说明路线，不创建没有正文的空 HTML 页面。整门课程仍处于审核状态。
