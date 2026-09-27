---
status: proposed
---

# 设计令牌

本文件定义第一版网站的可实现视觉令牌。令牌名称表达用途，不以某个具体色值或页面命名；实现阶段映射为 CSS 自定义属性，组件不得绕过语义令牌直接使用任意值。

## 色彩

### 浅色主题

| 令牌 | 色值 | 用途 |
| --- | --- | --- |
| `color-bg` | `#F6F8FB` | 页面背景 |
| `color-surface` | `#FFFFFF` | 导航、可进入内容和有边界区域 |
| `color-surface-subtle` | `#EDF4FF` | 轻强调背景、选中前景区域 |
| `color-text` | `#172033` | 主要文字 |
| `color-text-muted` | `#52627A` | 次要说明与元数据 |
| `color-border` | `#D9E1EC` | 常规边框与分隔线 |
| `color-border-strong` | `#AEBBCD` | 强调边界、表单悬停 |
| `color-primary` | `#245EA8` | 主要链接、行动和当前位置 |
| `color-primary-hover` | `#174A87` | 主要交互悬停与按下 |
| `color-verified` | `#0F766E` | 实验、完成和已验证 |
| `color-warning` | `#8A5700` | 风险、注意与待处理 |
| `color-danger` | `#B42318` | 错误、破坏性操作 |
| `color-code-bg` | `#18202C` | 代码块背景 |
| `color-code-text` | `#DCE9F7` | 代码块默认文字 |

### 深色主题

| 令牌 | 色值 | 用途 |
| --- | --- | --- |
| `color-bg` | `#0F141C` | 页面背景 |
| `color-surface` | `#171E28` | 导航、可进入内容和有边界区域 |
| `color-surface-subtle` | `#17263A` | 轻强调背景、选中前景区域 |
| `color-text` | `#EEF3FA` | 主要文字 |
| `color-text-muted` | `#AAB7C8` | 次要说明与元数据 |
| `color-border` | `#2B3747` | 常规边框与分隔线 |
| `color-border-strong` | `#52627A` | 强调边界、表单悬停 |
| `color-primary` | `#78ADF2` | 主要链接、行动和当前位置 |
| `color-primary-hover` | `#9FC5F5` | 主要交互悬停与按下 |
| `color-verified` | `#55C8BC` | 实验、完成和已验证 |
| `color-warning` | `#F0B950` | 风险、注意与待处理 |
| `color-danger` | `#FF8A80` | 错误、破坏性操作 |
| `color-code-bg` | `#0B1017` | 代码块背景 |
| `color-code-text` | `#DCE9F7` | 代码块默认文字 |

主要文字、次要文字和各语义色在对应背景上的目标对比度不低于 WCAG 2.2 AA 正文要求。状态必须同时带有文字或图形标识，颜色不作为唯一信息来源。

## 字体

| 令牌 | 建议值 |
| --- | --- |
| `font-sans` | `Inter, ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif` |
| `font-mono` | `"Cascadia Code", "JetBrains Mono", ui-monospace, SFMono-Regular, Consolas, monospace` |
| `text-xs` | `0.75rem / 1.5` |
| `text-sm` | `0.875rem / 1.6` |
| `text-base` | `1rem / 1.75` |
| `text-lg` | `1.125rem / 1.6` |
| `text-xl` | `1.25rem / 1.45` |
| `text-2xl` | `1.5rem / 1.35` |
| `text-3xl` | `2rem / 1.2` |
| `text-display` | `clamp(2.25rem, 5vw, 4rem) / 1.08` |

- 正文常规字重为 `400`，强调和交互使用 `600`，标题最高使用 `700`；
- 正文不小于 `16px`，辅助信息不小于 `12px`；
- 代码默认 `14px / 1.7`，移动端不通过缩小字体解决横向空间不足。

第一版不主动下载 Inter 或 JetBrains Mono；只有用户设备已安装时才使用，否则回退到系统字体，以控制性能和隐私成本。

## 间距与尺寸

间距采用 4px 基准：

```text
space-0  0
space-1  4px
space-2  8px
space-3  12px
space-4  16px
space-5  20px
space-6  24px
space-8  32px
space-10 40px
space-12 48px
space-16 64px
space-20 80px
```

| 令牌 | 值 | 用途 |
| --- | --- | --- |
| `content-reading` | `46rem` | Knowledge、课程和长文正文 |
| `content-wide` | `76rem` | 常规页面容器 |
| `content-max` | `80rem` | 路线与互动实验最大容器 |
| `control-height-sm` | `36px` | 紧凑桌面控件 |
| `control-height-md` | `44px` | 默认控件与触摸目标 |
| `control-height-lg` | `52px` | 首页搜索和主要行动 |
| `header-height` | `64px` | 桌面导航 |
| `header-height-mobile` | `56px` | 移动端导航 |

## 圆角、边框和阴影

| 令牌 | 值 | 用途 |
| --- | --- | --- |
| `radius-sm` | `6px` | 代码内标记、小标签 |
| `radius-md` | `10px` | 输入框、按钮、常规卡片 |
| `radius-lg` | `12px` | 大型内容区域 |
| `radius-round` | `999px` | 仅用于明确的圆形或胶囊状态 |
| `border-default` | `1px solid var(--color-border)` | 默认边界 |
| `shadow-float` | `0 12px 32px rgb(15 20 28 / 14%)` | 菜单、弹层和章节抽屉 |

普通卡片不使用阴影。阴影只表达覆盖关系，不能用于装饰每个区块。

## 断点与布局

| 断点 | 值 | 行为 |
| --- | --- | --- |
| `bp-sm` | `40rem` | 手机横向与小平板 |
| `bp-md` | `48rem` | 导航、筛选与双栏开始变化 |
| `bp-lg` | `64rem` | 正文目录、课程侧栏和三栏布局 |
| `bp-xl` | `80rem` | 限制全宽路线和实验区域 |

断点由内容是否拥挤决定，不按设备型号编写特例。支持最窄 `320px` 视口；宽度不足时优先换行、堆叠和抽屉，不缩小正文或触摸目标。

## 动效

| 令牌 | 值 | 用途 |
| --- | --- | --- |
| `motion-fast` | `120ms` | 悬停、焦点和小型状态反馈 |
| `motion-base` | `180ms` | 抽屉、折叠和内容切换 |
| `motion-slow` | `260ms` | 解释空间关系的有限过渡 |
| `ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | 默认缓动 |

不使用循环装饰动画。减少动画模式将位移与缩放过渡改为即时变化或极短淡化。

## 代码高亮

- 代码块固定使用深色中性背景，浅色与深色站点主题下保持一致，避免切换主题时语义颜色漂移；
- 默认文字 `#DCE9F7`，注释使用 `#91A4BA`，关键字使用 `#8CB9FF`，字符串使用 `#8ED3C7`，数字使用 `#F3C77B`，错误标记使用 `#FF9B92`；
- 行号、复制按钮和语言名称属于辅助信息，不盖过代码；
- 高亮行同时使用背景与左侧标记，不只依赖颜色；
- 长行允许代码区域水平滚动，正文页面本身不得出现横向滚动。
