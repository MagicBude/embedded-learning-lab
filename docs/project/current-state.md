---
status: accepted
updated: 2026-09-27
---

# 当前状态

本文件是更换电脑、会话或 AI Agent 后的唯一续接入口。它只保存当前有效状态，不保存完整讨论流水账。

## 当前阶段

项目处于 **Implementation / First Vertical Slice**。用户已于 2026-09-27 明确授权开始实现，当前范围是基础站点和 UART 最小纵向切片。

## 当前工作

- Q1–Q97 的规划、设计与视觉确认已经完成并融入正式文档；
- `apps/site/` 已完成 Astro、MDX、Content Collections、Pagefind 和 npm 基础；
- 已实现浅深主题、响应式导航、首页、路线、Knowledge、搜索、关于和 404 页面；
- 根目录 `content/knowledge/` 已形成数据与字节流、C 缓冲区、UART 通用原理和 STM32F103 USART 四篇最小知识链；
- `content/courses/uart-foundations.md` 已建立 6 单元课程骨架，当前保持 `review / unlisted`，尚未进入搜索或正式课程列表；
- Knowledge 详情页会展示“建议先读”和“继续学习”，原 UART URL 已改写为从“什么是 UART”开始的入门页；
- 项目专用 `teach` 技能已适配内容模型，并以仓库 `skills/teach/` 为权威版本；
- GitHub Pages 工作流已经建立；本地类型检查和生产构建均通过；
- 已在真实浏览器验证桌面端、320px 移动端、主题切换和 UART 搜索；
- 下一工作单元转向完成课程第一单元、练习反馈和 UART 信号互动。

## 已稳定方向

- Git 仓库是内容权威来源，未来在线编辑通过预览和 Git 提交流程写回；
- 第一版以 Courses 为主、Knowledge 为辅，加入少量 UART 面试题；
- 仓库和内容源全部公开，可见性只使用 `public / unlisted`；
- 第一版不建设账户、数据库、跨设备同步、评论社区或在线编辑后台，但为后期演进预留边界；
- 长期知识分类、学习路线和面试准备是三个关联但不同的视图；
- 第一版采用路线指导的 UART 纵向切片，不先填满整条路线，也不产生空内容页。

## 下一步

1. 用项目 `teach` 技能完成 UART 课程第一单元及即时练习；
2. 实现 UART 帧、传输时间与采样误差的最小互动；
3. 补充 STM32F103C8T6 安全接线、轮询回环和证据记录；
4. 扩充关系与发布资格校验，再加入少量分层面试题。

## 阻塞项

无。用户已完成 GitHub Pages 发布源设置；本工作单元推送后需要确认首次成功部署。
