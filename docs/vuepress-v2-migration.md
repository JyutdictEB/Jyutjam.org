# Jyutjam.org VuePress 1.x → 2.x 迁移记录

> 迁移时间：2026-08-02
> 迁移人：JyutdictEB（AI 协助）
> 关联提交：`ac6a699`（迁移主体）、`dc6c421`（导航修复）、`d9fbc4e`（hero 按钮修复）、`e77144e`（侧边栏修复）、`dba8728`（首页 3 列网格）

---

## 1. 为什么迁移

| 触发点 | 说明 |
|---|---|
| Vercel/Netlify 警告 | 平台提示"项目使用 Node.js 12，Agent Runners 建议 Node 22+" |
| VuePress 1.x 已 EOL | 1.x 分支 2022 年后停止维护（最后版本 1.9.10） |
| 实测 1.x 在现代 Node 上不可用 | 1.9.10 在 Node 24 上构建**必挂**：渲染阶段报 `ReferenceError: assignWith is not defined`（vue-server-renderer 与新版 lodash.template 不兼容，1.x 已知未修复问题） |
| 1.x 的 workaround 也在失效边缘 | 1.8.2 能构建但必须带 `NODE_OPTIONS=--openssl-legacy-provider`（webpack 4 的 md4 哈希 vs OpenSSL 3），该参数是 Node 官方计划移除的兼容开关 |

结论：**不值得继续修 1.x，直接升 v2**（Vue 3 + Vite，无 webpack 4 包袱，Node 22/24 原生支持）。

**注意：VuePress 2 目前仍是 RC 线**（本迁移使用 `2.0.0-rc.30`，官方文档站自己也跑在 rc 上）。已用 `--save-exact` 精确锁版，避免依赖漂移；后续升级需手动 bump。

---

## 2. 变更清单（文件级）

### 2.1 依赖（package.json）

```json
"devDependencies": {
  "@vuepress/bundler-vite": "2.0.0-rc.30",
  "@vuepress/theme-default": "2.0.0-rc.132",
  "sass-embedded": "1.100.0",
  "vuepress": "2.0.0-rc.30"
}
```

- `vuepress` 1.5.3 → 2.0.0-rc.30（精确锁版）
- 新增 `@vuepress/theme-default`、`@vuepress/bundler-vite`（v2 中主题和打包器需要显式安装）
- 新增 `sass-embedded`（vite 7+ 编译 scss 的必需依赖，缺了会报 `Preprocessor dependency "sass-embedded" not found`）
- **移除** `@vuepress/plugin-back-to-top`、`@vuepress/plugin-medium-zoom`——v2 的 defaultTheme **已内置**这两个插件（还有 SEO/sitemap/git/prismjs 等），显式再装会警告 "plugin has been used multiple times"
- `yarn.lock` 用 `npx yarn@1.22.22 install` 重新生成，与 package-lock.json 对齐

### 2.2 配置文件

| 文件 | 变化 |
|---|---|
| `src/.vuepress/config.js` | 删除，改为 `config.mjs`（v2 要求 ESM 配置） |
| `src/.vuepress/config.mjs` | 新增，v2 格式（见下） |
| `src/.vuepress/enhanceApp.js` | 删除（原本就是空壳，v2 中对应文件是 `client.js`，不需要） |
| `src/.vuepress/styles/palette.styl` | → `palette.scss`，4 个配色变量原样保留 |
| `src/.vuepress/styles/index.styl` | → `index.scss`，原有规则保留 |
| `src/.vuepress/components/` | 整个删除（3 个未使用的脚手架示例组件；v2 不再自动注册该目录，内容里也没用到） |
| `vercel.json` | 新增（旧 URL 重写，见 §3.5） |
| `.gitignore` | 新增 `/src/.vuepress/dist`、`.cache`（v2 构建产物与缓存目录） |

### 2.3 config.mjs 关键写法（v1 → v2 对照）

```js
// v1: module.exports = { ... }
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  locales: { '/': { lang: 'zh-hant', title: '嶺南粵音', ... }, '/en/': { ... } },
  head: [['meta', { name: 'theme-color', content: '#3eaf7c' }], ...],
  bundler: viteBundler(),
  theme: defaultTheme({
    sidebar: 'heading',
    locales: {
      '/': { selectLanguageText: 'Languages', selectLanguageName: '粵語', lastUpdatedText: '上次更新', sidebar: 'heading', navbar: [...] },
      '/en/': { ... }
    }
  }),
})
```

**删除的死配置**：`themeConfig.sidebar` 中指向不存在 `/guide/` 的配置、`search: false`（v2 默认无搜索，无需显式关闭）、空 `repo`/`editLinks` 字段。

### 2.4 内容页面

- `src/j++/` → `src/jpp/`、`src/en/j++/` → `src/en/jpp/`（原因见 §3.5）
- 全部 16 处 `/j++/` 链接改为 `/jpp/`
- 14 个页面的 frontmatter：`sidebar: auto` → `sidebar: 'heading'`（见 §3.7）
- 中英文首页 frontmatter：`actionText/actionLink` → `actions`（见 §3.6）

---

## 3. 踩过的坑（现象 → 原因 → 解决）

### 3.1 v1 1.9.10 在 Node 24 构建失败

- **现象**：`npm run build` 在渲染静态 HTML 阶段报 `ReferenceError: assignWith is not defined`
- **原因**：vue-server-renderer 2.7.x 与 npm 解析出的新版 lodash.template 不兼容（1.x 未修复的已知问题；1.9.10 是 1.x 最终版，不会再修）
- **解决**：放弃 1.x，迁移到 v2。**教训：升级到 EOL 分支的最后一个版本不等于"更新"**

### 3.2 webpack 4 的 OpenSSL 错误（仅历史参考）

- **现象**：1.x 在 Node 17+ 报 `ERR_OSSL_EVP_UNSUPPORTED`
- **原因**：webpack 4 用 md4 哈希，Node 17+ 的 OpenSSL 3 默认禁用
- **临时解决**（v1 时代有效，迁移后已移除）：`NODE_OPTIONS=--openssl-legacy-provider`。v2 用 Vite，不再需要

### 3.3 v2 插件重复注册警告

- **现象**：构建时警告 `plugin @vuepress/plugin-back-to-top has been used multiple times`
- **原因**：v2 的 defaultTheme 已内置 back-to-top、medium-zoom 等插件，config 里再显式安装就是重复
- **解决**：删除 config.mjs 的 `plugins: [backToTopPlugin(), mediumZoomPlugin()]` 并卸载两个包

### 3.4 导航栏消失（最重要的坑）

- **现象**：迁移后顶部导航栏只剩下站点名和语言切换，导航项全空
- **原因**：**v1 的配置键名 `nav` 在 v2 里是 `navbar`**。v2 主题读的是 `themeLocale.navbar`，`nav` 键的数据进了 themeData 但永远取不到；同理下拉子项 v1 的 `items` 在 v2 是 `children`（`'children' in item` 判断失败后下拉组被当无链接项渲染为空）
- **解决**：config.mjs 中 `nav:` → `navbar:`、`items:` → `children:`
- **排查方法参考**：语言下拉正常（键名 `selectLanguageText` 没变）而导航项全空，是判断"配置键名不对"的典型信号

### 3.5 `j++` 路径在 v2 中无法存在

- **现象**：v2 构建后 `/j++/` 页面路由变成 `/j__/`，导航链接 `/j++/` 全部 404
- **原因**：v2 的 `resolvePagePath` 对路由**每一段**无条件执行 `sanitizeFileName`，其非法字符表 `[\u0000-\u001F"#$%&*+,:;<=>?[\]^`{|}\u007F]`（Windows 文件名非法字符）包含 `+`，且 `+` → `_`。**permalink frontmatter 也救不了**（permalink 同样被 sanitize）
- **解决**：目录改名为 `jpp`（显示名"擴展粵拼方案（J++）"不变，只改 URL slug）；旧 URL 用 vercel.json rewrite 兜底：

```json
{
  "rewrites": [
    { "source": "/j\\+\\+/:path*", "destination": "/jpp/:path*" }
  ]
}
```

- **坑中坑**：Vercel 的 rewrite source 用 path-to-regexp 语法，**裸 `+` 会被当作 MODIFIER 报错**（`Unexpected MODIFIER`），必须写成 `\\+\\+` 转义。用 `@vercel/routing-utils`（Vercel 官方路由库）本地验证通过才写的：

```bash
npm i @vercel/routing-utils   # 临时验证用
node -e 'const {sourceToRegex}=require("@vercel/routing-utils"); console.log(sourceToRegex("/j\\+\\+/:path*", false, {}))'
```

### 3.6 首页 hero 按钮消失

- **现象**：首页 hero 的「關於我哋 →」按钮没了
- **原因**：v1 的 `actionText/actionLink` frontmatter 在 v2 里不生效，v2 改用 `actions` 数组
- **解决**（中英文首页各一）：

```yaml
actions:
- text: 關於我哋 →
  link: /about/
  type: primary
```

### 3.7 子页面侧边栏消失

- **现象**：迁移后子页面（/about/、/jpp/ 等）左侧的目录导航没了
- **原因**（两层）：
  1. 14 个页面的 frontmatter 是 v1 的 `sidebar: auto`——**v2 里 `auto` 不是合法值**（合法值：`false`、`'heading'`、数组、对象），且 frontmatter 优先于全局配置，把默认行为覆盖成了无效值
  2. v2 默认值才是 `'heading'`（自动从页面标题生成目录）
- **解决**：14 个页面 frontmatter `sidebar: auto` → `sidebar: 'heading'`，config.mjs 里也显式加了全局 `sidebar: 'heading'`
- **排查大坑**：**v2（rc.13x）的目录侧边栏不在 SSR HTML 里**！它是客户端 JS 运行时从页面 DOM 提取 h2/h3 动态生成的（`setupHeaders` + `getHeaders`，`onContentUpdated` 时刷新），目的是减小 SSR HTML 体积。所以：
  - 检查 HTML 源码看不到侧边栏 ≠ 坏了
  - 判断侧边栏是否生效，必须以**浏览器渲染后**的结果为准
  - 这次排查曾在"SSR 里找不到侧边栏"上浪费了很长时间，最后是通过验证 pageData 结构（rc.132 的 `page.data` 只有 path/title/lang/frontmatter，headers 已移除）才确认是客户端渲染机制

### 3.8 首页功能块竖排（3×2 网格丢失）

- **现象**：首页 6 个功能块（泛粵典網頁版/安卓版/Bilibili/J++/FoLiSC/聯繫我哋）从 3×2 变成竖排一列
- **原因**：这 6 块是 v1 时代的 hack——`xfeatures` frontmatter + markdown 里自定义 `<div class="features">` + `v-for`（v1 的 features 不支持链接才这么写）。v2 里没有这套自定义 class 的网格样式（v2 原生是 `.vp-features`），所以块间无布局
- **为什么不直接换 v2 原生 `features:`**：查了官方组件，**v2 原生 features 不支持链接**（只渲染 title + details 纯文本），而这 6 块全部带链接（含外链 Bilibili 和 mailto），必须保留自定义块
- **解决**：把官方 `vp-features` 的网格样式原样移植到自定义 class 上（index.scss）：

```scss
.features {
  display: flex;
  flex-wrap: wrap;
  place-content: stretch space-between;
  align-items: flex-start;
  margin-top: 2.5rem;
  padding: 1.2rem 0;
  border-top: 1px solid var(--vp-c-divider);
  @media (max-width: 719px) { flex-flow: column; }
  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;
    @media (max-width: 719px) { max-width: 100%; padding: 0 2.5rem; }
    h2 { padding-bottom: 0; border-bottom: none; font-weight: 500; font-size: 1.4rem; }
    p { color: var(--vp-c-text-mute); }
  }
}
```

- **意外发现**：这个 hack 依赖的 `$page` 全局变量在 v2 里**仍然存在**（`$page`、`$site` 等都还挂在 globalProperties 上），所以 `v-for="feat in $page.frontmatter.xfeatures"` 能继续工作。这是 v1 代码能跑起来的幸运点，但属于未文档化行为，将来 v2 若移除 `$page` 需改用 `usePageData()` 重写

### 3.9 杂项小坑

- `git mv src/j++ src/jyutping-plus` 报 `fatal: bad source`，但目录实际已移动——用 `git status` 确认 `R` 状态后继续，别被报错吓到
- 本机没有 yarn，`yarn.lock` 用 `npx -y yarn@1.22.22 install` 重新生成（yarn 1 在 Node 24 下可用）
- macOS 的 BSD grep 不支持 `\|` 和 `\{n\}` 量词，排查时误报过"找不到内容"，用 `grep -E`/node 脚本替代

---

## 4. 最终验证状态

| 项目 | 状态 |
|---|---|
| `npm run build` | 17 页全部成功 |
| 顶部导航 | 中英文完整（下拉组 + 外链），SSR 可见 |
| 子页面侧边栏 | 浏览器客户端渲染（SSR 不可见属正常），about/jpp 等页面标题目录恢复 |
| 首页 hero | 图 + 标题 + 副标题 + 「關於我哋 →」按钮 |
| 首页功能块 | 3×2 网格（官方样式移植），移动端单列 |
| 旧 URL `/j++/` | vercel.json rewrite 至 `/jpp/`（URL 栏不变） |
| 构建/开发脚本 | 已去掉 `NODE_OPTIONS` workaround，`npm run dev` / `npm run build` 直接可用 |

---

## 5. 部署注意事项（Netlify）

1. **Node 版本**：构建机需 Node ≥ 18.16（本项目实际用 22+）。Netlify 默认版本已满足，构建成功即证明没问题
2. 推送后 Netlify 自动部署，1-2 分钟生效；改过项目设置后需手动 Redeploy
3. 构建命令与输出目录 v1→v2 未变：`npm run build` → `src/.vuepress/dist`
4. 部署后验证三个 URL：`/`、`/jpp/`、`/j++/`（旧链接）

---

## 6. 遗留事项

- [ ] VuePress 2 仍是 RC 线（2.0.0-rc.30），发布正式版后评估升级（注意生态包版本号独立：theme-default rc.132、plugins rc.131，需对齐 vuepress 主包的 peer 要求）
- [ ] 首页 features 块的 `$page` hack 依赖未文档化行为，v2 若移除 `$page` 需用 `usePageData()` 重写
- [ ] 首页 hero 图尺寸规则 `.home .hero img { max-width: 450px }` 为 v1 遗留选择器（v2 实际类名是 `vp-hero-image`），当前可能未生效，如需限制 logo 尺寸建议改为 v2 的 `heroHeight` frontmatter（默认 280px）
- [ ] `vercel.json` 的 rewrite 如需 SEO 收敛可改为 301 `redirects`
