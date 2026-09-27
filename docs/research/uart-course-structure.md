---
status: accepted
updated: 2026-09-27
---

# UART 课程结构调研

## 目的

检查原 6 单元 UART 课程是否具有适合零基础学习者的粒度，并为课程重构提供可追溯依据。调研只借鉴覆盖范围、递进关系和练习方式，不复制第三方正文、图片、代码或课程表达。

## 参考样本

| 样本 | 观察到的组织方式 | 本项目采用的启发 |
| --- | --- | --- |
| [SparkFun Serial Communication](https://learn.sparkfun.com/tutorials/serial-communication) | 从串行通信、UART、接线和帧结构建立直觉 | 第一课先建立完整系统地图，不从 STM32 API 起步 |
| [Valvano: Chapter 11 Serial Interfacing](https://users.ece.utexas.edu/~valvano/Volume1/E-Book/C11_SerialInterface.htm) | 理论、帧、忙等待驱动、字符转换、双机通信与实验逐步推进 | 把表示转换、软件同步与真实通信分别教学，并要求可观察练习 |
| [ST: Getting started with UART](https://wiki.st.com/stm32mcu/wiki/Getting_started_with_UART) | 按轮询、中断和 DMA 三种工作方式展开 STM32 实践 | 三种执行模型分别建立，不压缩成一次 API 罗列 |
| [DeepBlueEmbedded: STM32 UART Receive Examples](https://deepbluembedded.com/how-to-receive-uart-serial-data-with-stm32-dma-interrupt-polling/) | 用独立示例比较轮询、中断与 DMA 接收行为 | 每种模型都应有可运行实验和成本对比 |
| [ControllersTech: UART Idle Line Reception](https://controllerstech.com/stm32-uart-5-receive-data-using-idle-line/) | 把未知长度接收和 IDLE 检测作为单独问题 | 明确区分数据搬运、空闲事件和消息边界 |
| 本地 `IO-Link从零到Device产品开发` 课程 | 24 课逐层推进，单课围绕相对集中的目标组织 | UART 不追求同样课数，但避免把多个心智模型塞进一个短课 |

## 诊断

原六课的主题覆盖基本正确，但粒度不均：第一课同时承担系统地图与完整成帧；“第一次收发”同时跨越接线、发送、接收与回环；“中断与缓冲区”混合执行模型和数据模型；“DMA 与消息边界”混合数据搬运、空闲检测和上层协议。继续在原标题下扩写只会形成几篇过重课文，不能解决前置跳跃。

## 采用结论

UART 课程从 v0.4.0 起采用十课渐进结构：

1. UART 是什么：设备、线路与接口边界；
2. 字符怎样变成 UART 帧；
3. 波特率、采样与时钟误差；
4. 工具、接线与第一次发送；
5. 轮询接收、超时与回环；
6. 字节流、字符串与缓冲区；
7. 中断实现非阻塞接收；
8. 环形缓冲区、溢出与持续数据流；
9. 错误标志与证据化排错；
10. DMA、IDLE 与消息边界。

每课保持一个主要可观察目标。排错证据不只放在第九课，而要作为所有实机课的固定部分；第九课负责综合故障注入与诊断。尚未撰写的课次只保留在元数据和课程目录，不创建空页面。
