---
id: clang-documentation
title: Clang documentation
slug: clang-documentation
summary: Clang 官方文档入口，覆盖编译器使用、诊断、静态分析和 AddressSanitizer、UndefinedBehaviorSanitizer 等工具。
type: source
domain: engineering-testing-and-debugging
tags: [Clang, LLVM, sanitizer, static-analysis]
platforms: [generic]
maturity: verified
visibility: public
createdAt: 2026-09-29
updatedAt: 2026-09-29
verifiedAt: 2026-09-29
authors: [LLVM Project]
organization: LLVM Project
sourceType: official-doc
authorityLevel: official
url: https://clang.llvm.org/docs/
checkedAt: 2026-09-29
access: free
license: Apache-2.0 WITH LLVM-exception;按具体文档核对
reuse: 可链接并按 LLVM 项目许可使用；引用行为时记录 Clang 版本。
localCopy: false
scope: [Clang 用户手册, 诊断, AddressSanitizer, UndefinedBehaviorSanitizer, 静态分析]
audience: [C/C++ 开发者, 测试与调试人员]
prerequisites: [基础编译与运行]
readingGuide: [按任务进入 Users Manual、Diagnostics Reference 或具体 Sanitizer 文档；记录工具版本和编译参数。]
strengths: [运行时诊断文档完整, 官方参数说明, 适合主机侧验证 C 模块]
limitations: [Sanitizer 不覆盖所有缺陷, 裸机目标通常不能直接照搬主机配置, 不代替语言标准。]
supports: [内存越界诊断, 未定义行为检测, 编译器诊断, 静态分析]
---

## 为什么收录

Sanitizer 是把抽象的越界和未定义行为转成可观察证据的重要工具，但它只能报告实际执行路径中被检测到的问题。

## 使用建议

课程中的检测命令应同时记录操作系统、Clang 版本、编译参数和测试输入，不能只写“已通过 Sanitizer”。
