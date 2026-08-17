# AGENTS.md — Jyutjam.org 项目约定

给 AI agent 和协作者的快速指南。完整迁移历史见 [`docs/vuepress-v2-migration.md`](docs/vuepress-v2-migration.md)。

## 项目概述

嶺南粵音協會（Lingnaam Jyutjam）官方网站，基于 **VuePress 2.x**（Vue 3 + Vite）构建的静态站，中英双语（`/` 繁中、`/en/` 英文）。部署在 Netlify（GitHub 推送自动部署）。

## 常用命令

```bash
npm install        # 安装依赖（勿用 yarn，仓库以 package-lock.json 为准）
npm run dev        # 本地开发（默认 http://localhost:8080）
npm run build      # 构建静态站 → src/.vuepress/dist（已 gitignore）
```

- Node.js ≥ 20（推荐 22 LTS）。VuePress 2 目前是 RC 线，依赖**精确锁版**（`--save-exact`），升级需手动 bump 且注意各包版本对齐（vuepress rc.30 ↔ theme-default rc.132 ↔ plugins rc.131）。
- 修改依赖后 `yarn.lock` 不会自动同步（本机无 yarn）；如需同步用 `npx -y yarn@1.22.22 install`。

## 代码结构

```
src/                     # 站点内容（Markdown 页面，按栏目分目录）
  .vuepress/
    config.mjs           # 唯一配置文件（ESM，v2 格式）
    styles/palette.scss  # 主题配色变量（品牌绿 #3eaf7c）
    styles/index.scss    # 自定义样式
    public/              # 静态资源（logo 等）
    dist/                # 构建产物（勿提交）
docs/vuepress-v2-migration.md  # 1.x→2.x 迁移记录（必读）
vercel.json              # 旧 URL /j++/ → /jpp/ rewrite
```

## 配置约定（v2 与 v1 的关键差异，改配置前必看）

| 主题 | 正确写法（v2） | 常见错误（v1 遗留） |
|---|---|---|
| 导航栏键名 | `navbar:` | `nav:`（取不到，导航栏空白） |
| 导航下拉子项 | `children:` | `items:`（下拉组渲染为空） |
| 侧边栏 | `sidebar: 'heading'`（frontmatter 或 config） | `sidebar: auto`（无效值，目录不生成） |
| hero 按钮 | `actions:` 数组 | `actionText/actionLink`（不渲染） |
| 配置文件 | `config.mjs`（ESM） | `config.js`（CJS，v2 不支持） |
| 样式 | `palette.scss` / `index.scss` | `.styl`（v2 默认主题用 SASS） |

## 页面 frontmatter 约定

- 所有内容页面：`sidebar: 'heading'`（自动生成当前页标题目录）
- 首页（`src/index.md`、`src/en/index.md`）：`home: true` + `heroImage` + `actions` + **`xfeatures`**（自定义字段，见下）
- **侧边栏是客户端从 DOM 提取标题渲染的，SSR HTML 里看不到是正常的**——验证侧边栏必须在浏览器里看，不能 grep 构建产物

## 图片与暗色模式约定

- 主题暗色模式选择器是 `html[data-theme='dark']`（theme-default rc.132 起用 data-theme 属性，不再是 `html.dark` class）——自定义暗色样式必须用前者。
- **白底图不允许直接引用**：暗色模式下会露白块。项目里已处理的图分两类：
  - **真透明图**：`public/jyutjam_logo*.png` 已抠成真透明（绿色 logo，亮/暗模式皆可用）。替换 logo 时保持透明，不要交回白底图；抠白可用亮度键：`alpha = 255 - min(R,G,B)`（纯白为 0，阈值取 min≤200 全不透明），边缘像素按白底反除（un-premultiply）去白边。
  - **白底深色内容图**（App 截图、双色 logo）：暗色模式下由 `index.scss` 的规则自动反色适配：
    ```scss
    html[data-theme='dark'] {
      img[src*='Kelit-'], img[src*='folisc_logo'], img.dark-invert {
        filter: invert(1) hue-rotate(180deg);
      }
    }
    ```
    新增这类图时给 `<img>` 加 `class="dark-invert"`（或复用 `Kelit-` / `folisc_logo` 文件名前缀）。
  - **反色只适用于「白底 + 深色内容」的图**；照片、彩色插画不得加 `dark-invert`，反色会变负片观感。

## 注意事项与坑

1. **URL slug 不能含 `+` 等字符**：v2 的 `sanitizeFileName` 会把 `+` 编码成 `_`（`/j++/` → `/j__/`），permalink 也救不了。目录已改名 `jpp`，旧 URL 由 vercel.json rewrite 兜底。新页面命名避免 `"#$%&*+,:;<=>?` 等字符。
2. **首页 features 块是 v1 遗留 hack**：`xfeatures` frontmatter + `src/index.md` 里自定义 `<div class="features">` 的 `v-for`，依赖 `$page` 全局变量（v2 未文档化但仍在）。不要改成 v2 原生 `features:`（不支持链接）。网格样式在 `index.scss` 的 `.features` 里（官方 vp-features 样式移植）。
3. **不要给 defaultTheme 显式装内置插件**（back-to-top、medium-zoom 等已内置，重复注册会警告）。
4. **修改 v2 依赖时**：vuepress 主包与生态包版本号独立（rc.30 vs rc.132），插件有 peer 依赖精确匹配（如 plugins rc.131 要求 vuepress 2.0.0-rc.30），安装冲突时对齐主包版本而非 `--force`。
5. 构建/开发脚本**不要**加 `NODE_OPTIONS=--openssl-legacy-provider`（v1 时代 workaround，v2 不需要）。
6. macOS 排查时注意 BSD grep 不支持 `\|` 与 `\{n\}`，用 `grep -E`。

## 部署（Netlify）

- 构建命令 `npm run build`，输出 `src/.vuepress/dist`，Node 版本 22+
- 推送 main 自动部署；验证 URL：`/`、`/jpp/`、`/j++/`（旧链接）
