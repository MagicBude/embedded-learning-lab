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
version: 0.3.0
package:
  version: 0.3.0
  path: uart-foundations/v0.3.0
  status: review
  entry: index.html
  manifest: manifest.json
sources:
  - id: rfc20-ascii
    type: standard
    title: RFC 20 — ASCII format for network interchange
    organization: RFC Editor
    url: https://www.rfc-editor.org/rfc/rfc20.html
    locator: Sections 2 and 3
    accessedAt: 2026-09-27
    supports: [字符与编码值的关系]
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
  - id: st-an6363-uart-clock
    type: official
    title: AN6363 — Introduction to clock requirements and calibration for STM32 MCUs
    organization: STMicroelectronics
    url: https://www.st.com/resource/en/application_note/an6363-introduction-to-clock-requirements-and-calibration-for-stm32-mcus-stmicroelectronics.pdf
    locator: Section 2.1, UART
    accessedAt: 2026-09-27
    supports: [UART 时钟误差、采样位置漂移和真实容差影响因素]
units:
  - id: uart-u01-byte-to-wire
    title: UART 是什么：从设备到线路
    objective: 能说明 UART 解决什么问题、怎样连接、规定与不规定什么，并解释字符 A 如何变成 8N1 线路帧。
    status: available
    knowledge: [knowledge-data-and-byte-stream-v1, knowledge-uart-frame-and-idle-v1]
    exercises: [uart-ex-system-boundary-v1, uart-ex-frame-builder-v1, uart-ex-start-edge-v1]
    acceptance: [能解释 UART、串行、异步和全双工, 能画出 TX、RX、GND 交叉连接, 能区分 UART 与相邻接口层, 能画出字符对应的 8N1 帧]
  - id: uart-u02-speed-and-sampling
    title: 波特率、采样与误差
    objective: 能由位时间推导整帧耗时，并解释异步接收端如何采样以及误差为什么向帧尾积累。
    status: available
    knowledge: [knowledge-uart-frame-and-idle-v1]
    exercises: [uart-ex-frame-time-v1, uart-ex-sampling-drift-v1]
    acceptance: [能计算位时间与帧时间, 能解释起始位的时间参考作用, 能解释累计采样偏移, 能说明模型不能替代实测]
  - id: uart-u03-first-stm32-link
    title: STM32F103 第一次收发
    objective: 能安全接线并使用 HAL 轮询接口完成发送、接收和回环验证。
    status: planned
    knowledge: [knowledge-stm32f103-usart-v1]
    exercises: []
    acceptance: [能完成安全接线、轮询收发和回环证据记录]
  - id: uart-u04-buffer-and-interrupt
    title: 中断与缓冲区
    objective: 能用容量和有效长度管理接收数据，并解释阻塞、溢出和丢字节的原因。
    status: planned
    knowledge: [knowledge-c-buffer-model-v1, knowledge-stm32f103-usart-v1]
    exercises: []
    acceptance: [能实现有边界检查的非阻塞接收并观察溢出行为]
  - id: uart-u05-debug-and-evidence
    title: 用证据排查串口故障
    objective: 能根据接线、状态标志、日志和逻辑分析仪证据定位常见故障。
    status: planned
    knowledge: [knowledge-uart-frame-and-idle-v1, knowledge-stm32f103-usart-v1]
    exercises: []
    acceptance: [能依据状态、日志或波形定位至少一种人为故障]
  - id: uart-u06-dma-and-messages
    title: DMA 与消息边界
    objective: 能说明 DMA 解决了什么、没有解决什么，并为字节流设计明确的消息边界。
    status: planned
    knowledge: [knowledge-data-and-byte-stream-v1, knowledge-c-buffer-model-v1]
    exercises: []
    acceptance: [能区分 DMA 搬运边界与上层消息边界]
---

## 课程说明

这门课程采用独立课程包承载，不再把所有课文和互动堆在主站的一张长页面里。

独立课程包含课程首页、逐课页面、共享教学样式、互动脚本和 UART 入门速查表。主站继续负责课程状态、课表、Knowledge 关系和发布入口。

当前版本完成前两课，其余课次只在目录中说明路线，不创建没有正文的空 HTML 页面。整门课程仍处于审核状态。
