---
id: gdb-documentation
title: GDB documentation
slug: gdb-documentation
summary: GNU Debugger 官方文档入口，用于查找断点、单步、回溯、内存、寄存器、远程调试和优化代码调试方法。
type: source
domain: engineering-testing-and-debugging
tags: [GDB, debugger, backtrace, remote-debugging]
platforms: [generic, Arm Cortex-M]
maturity: verified
visibility: public
createdAt: 2026-09-29
updatedAt: 2026-09-29
verifiedAt: 2026-09-29
authors: [GNU Project]
organization: GNU Project
sourceType: official-doc
authorityLevel: official
url: https://sourceware.org/gdb/documentation/
checkedAt: 2026-09-29
access: free
license: GNU Free Documentation License;按具体手册核对
reuse: 可链接；复制或改编手册内容时遵守对应 GFDL 声明。
localCopy: false
scope: [断点与观察点, 栈回溯, 内存和寄存器, 远程目标, 优化代码调试]
audience: [C/C++ 开发者, MCU 调试人员]
prerequisites: [可调试构建, 基础命令行]
readingGuide: [先掌握断点、运行、单步、栈帧和表达式；进入 MCU 调试时再读 Remote Debugging。]
strengths: [官方完整手册, 同时覆盖本机与远程调试, 可定位具体命令行为]
limitations: [调试结果受优化和调试信息影响, 具体探针与 GDB server 另有文档, 不能代替故障现场保存。]
supports: [断点, 回溯, 故障定位, 内存与寄存器检查, 远程 MCU 调试]
---

## 为什么收录

调试器使用不是一组脱离上下文的命令。官方文档能帮助区分 GDB 的能力、编译优化的影响和远程目标的限制。

## 使用建议

保存调试证据时记录可执行文件、符号、编译选项、GDB 版本、目标状态和执行命令，避免只截取一个缺少上下文的变量值。
