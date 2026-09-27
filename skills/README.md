# 项目技能

本目录保存 Embedded Learning Lab 专用的 Codex 技能，是技能内容的权威来源。技能采用 `skills/<skill-name>/SKILL.md` 结构，便于随仓库克隆、审查和版本化。

## 使用方式

Codex 已能读取仓库文件时，可以按 `AGENTS.md` 直接使用这里的技能。需要把技能安装到个人 Codex 环境时，将对应技能目录复制到：

```text
%CODEX_HOME%/skills/<skill-name>/
```

若未设置 `CODEX_HOME`，Windows 默认个人位置通常为：

```text
%USERPROFILE%/.codex/skills/<skill-name>/
```

仓库版本始终优先。修改项目技能时，先更新并验证本目录，再同步个人安装副本；不要只修改某台电脑上的副本。

## 当前技能

- `teach`：把嵌入式学习请求转化为符合本项目内容模型、来源规则和发布门槛的 Knowledge、课程、练习与学习反馈。课程单元必须通过零基础入口审计；独立课程可以在版本目录内使用 `index.html + lessons/ + reference/ + assets/`，一课一个页面。
