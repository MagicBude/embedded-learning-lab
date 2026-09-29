---
status: accepted
updated: 2026-09-29
---

# 嵌入式学习资料目录

本文保存首批经过入口核对的资料来源，用于后续建立结构化资料卡。它不是“最好资料”排名，也不表示所有内容都允许转载。

## 采用标准

- 优先原作者、维护方或项目官网；
- 能定位版本、章节、源码或实验；
- 免费范围和许可证可以说明；
- 能支撑现有学习路线中的真实主题；
- 博客和视频用于解释与经验，关键事实仍回到标准、官方手册或可重复实验。

## C 语言、编译与调试

### ISO C / WG14

- 入口：<https://www.open-std.org/jtc1/sc22/wg14/>
- 等级：`normative`
- 访问：免费公开工作组资料；正式 ISO 标准可能需要购买
- 用途：语言版本、公开草案、提案和缺陷报告
- 复用：默认链接和短引用；逐份文档检查版权说明

### GCC

- 入口：<https://gcc.gnu.org/onlinedocs/>
- 等级：`official`
- 访问：免费
- 用途：语言模式、警告、优化、扩展和链接选项
- 复用：文档与源码分别按各自许可证处理

### LLVM / Clang

- 入口：<https://clang.llvm.org/docs/>
- 等级：`official`
- 访问：免费
- 用途：编译诊断、AddressSanitizer、UndefinedBehaviorSanitizer 和静态分析

### GDB 与 GNU Binutils

- 入口：<https://sourceware.org/gdb/documentation/>、<https://sourceware.org/binutils/docs/>
- 等级：`official`
- 访问：免费
- 用途：断点、回溯、寄存器、ELF、反汇编、尺寸分析和链接脚本

## Cortex-M 与 MCU

### Arm Education

- 入口：<https://www.arm.com/resources/education>
- 教材仓库：<https://github.com/arm-education/Embedded-Systems-Fundamentals>
- 等级：`official / educational`
- 访问：MOOC 可免费注册；教材可免费下载
- 用途：嵌入式系统基础、Cortex-M、中断、外设、串口和 DMA
- 复用：教材仓库声明以个人、非商业学习为主；不得因可下载而全文再发布

### STMicroelectronics STM32

- MOOC：<https://www.st.com/content/st_com/en/support/learning/stm32-moocs.html>
- Wiki：<https://wiki.st.com/stm32mcu/wiki/Training_zone>
- 等级：`official`
- 访问：在线课程免费，部分实验需要开发板或账号
- 用途：STM32Cube、芯片外设、安全、RTOS 与应用培训

### Raspberry Pi Pico C/C++ SDK

- 入口：<https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf>
- 等级：`official`
- 访问：免费
- 用途：现代 CMake、SDK、外设和多核 MCU 实践

## RTOS

### FreeRTOS

- 入口：<https://docs.freertos.org/>
- 等级：`official`
- 访问：免费
- 用途：内核概念、任务、队列、同步、移植和示例
- 许可：内核采用 MIT；具体文档和扩展组件分别核对

### Zephyr

- 入口：<https://docs.zephyrproject.org/latest/>
- 等级：`official`
- 访问：免费
- 用途：内核、设备驱动、Devicetree、Kconfig、构建系统和示例

### RT-Thread

- 中文文档：<https://www.rt-thread.org/document/site/>
- 源码：<https://github.com/RT-Thread/rt-thread>
- 等级：`official`
- 访问：免费
- 用途：中文 RTOS 学习路线、内核、设备模型、BSP、工具和 QEMU 实践
- 许可：当前主要源码采用 Apache-2.0；旧版本需按对应版本核对

## Embedded Linux

### Linux Kernel Documentation

- 入口：<https://docs.kernel.org/>
- 等级：`official`
- 访问：免费
- 用途：内核子系统、驱动接口、设备树、调试和开发流程

### Bootlin

- 入口：<https://bootlin.com/docs/>
- 等级：`educational / practitioner`
- 访问：培训材料免费；讲师课程收费
- 用途：Embedded Linux、内核驱动、Buildroot、Yocto、PREEMPT_RT、调试和性能分析
- 许可：公开培训文档采用 CC BY-SA 3.0，可在署名和相同许可条件下修改与分发

### Buildroot

- 入口：<https://buildroot.org/docs.html>
- 等级：`official`
- 访问：免费
- 用途：工具链、根文件系统、内核和系统镜像构建

## 中文免费教程与社区

### 江协科技

- 入口：<https://jiangxiekeji.com/>
- 等级：`educational`
- 访问：官网声明教程免费且完整公开
- 用途：51 单片机和 STM32 零基础实验
- 限制：围绕特定板卡和库版本；公开观看不自动授予转载权

### 野火电子 EmbedFire

- 文档：<https://doc.embedfire.com/>
- GitHub：<https://github.com/Embedfire>
- 等级：`educational / practitioner`
- 访问：大量文档与代码公开
- 用途：STM32、RT-Thread、模块例程、网络和显示
- 限制：逐个仓库和文档核对许可证；不能把公开下载等同于允许全文复制

### 韦东山 / 百问网

- 文档：<https://linux.100ask.net/>
- 课程：<https://www.100ask.net/course/>
- 资料：<https://download.100ask.net/>
- 等级：`educational / practitioner`
- 访问：免费与付费混合
- 用途：Embedded Linux 应用、驱动、设备树、系统构建和项目实践
- 限制：逐门课程记录免费范围；不得复制付费或许可不明内容

### 正点原子

- 等级：`educational / practitioner`
- 访问：大量视频、论坛和板卡配套资料公开，部分内容与产品绑定
- 用途：STM32 与常见嵌入式平台实操
- 收录要求：只使用可确认的官方入口，逐项记录板卡、芯片、库版本和转载边界；旧网盘或来源不明副本不收录

## 英文工程博客与公开视频

### Memfault Interrupt

- 入口：<https://interrupt.memfault.com/>
- 等级：`practitioner`
- 访问：免费
- 用途：故障分析、看门狗、日志、链接脚本、测试、升级和设备可靠性
- 许可：网站声明采用 CC BY-SA，适合在署名和相同许可条件下整理

### Quantum Leaps / Miro Samek

- 课程：<https://old.state-machine.com/quickstart/>
- 等级：`educational / practitioner`
- 访问：课程视频、讲义和项目文件免费公开
- 用途：C 与硬件、Cortex-M、启动、中断、RTOS、事件驱动和状态机
- 限制：课程材料和框架源码分别核对许可证

### Embedded Artistry

- 入口：<https://embeddedartistry.com/first-time-here/>
- 等级：`practitioner`
- 访问：博客部分免费，系统课程和会员内容部分收费
- 用途：模块化、测试、架构和现代嵌入式软件实践

### Phil's Lab

- 项目：<https://pms67.github.io/>
- 视频：<https://www.youtube.com/phils94>
- 等级：`practitioner`
- 访问：大量内容免费，也有会员内容
- 用途：STM32、PCB、音频、DSP、FPGA、USB 和完整工程项目

### EmbeddedRelated

- 入口：<https://embeddedrelated.com/>
- 等级：`practitioner / community`
- 访问：大量文章免费
- 用途：发现状态机、RTOS、链接脚本、串行通信、信号处理和面试主题
- 限制：多作者平台，必须按单篇文章记录作者、日期、依据和许可

### The Ganssle Group

- 入口：<https://www.ganssle.com/>
- 等级：`practitioner`
- 访问：大量文章免费
- 用途：固件质量、调试、实时性、防御式编程和工程管理

## 暂不收录

- 来源不明的网盘转载；
- 未经授权扫描的商业书籍；
- 只有搜索摘要、找不到原始作者的文章；
- 用聚合站替代原作者页面的副本；
- 没有板卡、芯片、库或版本说明的陈旧代码包；
- 仅凭流量或标题推荐、尚未实际阅读的资料。

## 下一轮整理

其中 10 项与 UART、嵌入式 C 和基础工具链直接相关的资料已经转换为 `content/sources/` 资料卡，并补齐稳定 ID、版本、许可、阅读定位、适用阶段和已关联内容。其余候选资料随真实学习需求逐项核对，不批量生成空资料卡。
