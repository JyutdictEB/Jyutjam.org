# Jyutjam.org

For the English version, please go to [jyutjam.org/en](https://jyutjam.org/en/)

## 開發指南 Developer's Guide

本站採用 [VuePress 2.x](https://v2.vuepress.vuejs.org/)（Vue 3 + Vite）搭建，開發之前須安裝 [Node.js 20](https://nodejs.org/)（含）以上版本，推薦用 [Node.js 22 LTS](https://nodejs.org/download/release/latest-v22.x/)。<br/>
This site is powered by [VuePress 2.x](https://v2.vuepress.vuejs.org/) (Vue 3 + Vite). Please install [Node.js 20](https://nodejs.org/) or above before development, Node.js 22 LTS is recommended.

裝完 Node.js 之後，安裝依賴包：<br/>
After installing Node.js, install the dependencies:

```bash
git clone git@github.com:JyutdictEB/Jyutjam.org.git
cd Jyutjam.org
npm install
```

運行以下命令來本地調試：<br/>
Run the following command to debug locally:

```bash
npm run dev
```

構建靜態站點（輸出到 `src/.vuepress/dist`）：<br/>
Build the static site (output to `src/.vuepress/dist`):

```bash
npm run build
```

搞掂之後 Commit & Push 上來就得！<br/>
Once that's done, just Commit & Push!

> 備註：舊網址 `/j++/` 已由 `vercel.json` 嘅 rewrite 指向新版 `/jpp/` 頁面，舊鏈接仍然有效。<br/>
> Note: the legacy URL `/j++/` is rewritten to the new `/jpp/` page via `vercel.json`, so old links still work.

**遷移記錄 Migration Record**：本站於 2026-08 由 VuePress 1.x 遷移至 2.x，完整嘅改動清單、踩坑紀錄同解決方法見 [`docs/vuepress-v2-migration.md`](docs/vuepress-v2-migration.md)。<br/>
Migrated from VuePress 1.x to 2.x in 2026-08; see [`docs/vuepress-v2-migration.md`](docs/vuepress-v2-migration.md) for the full change list and troubleshooting notes.

若果你唔係我哋 JyutdictEB 嘅成員，你都可以創建 Pull Requests 來幫手改嘢，或者直接喺 Issues 度提意見。<br/>
If you are not a member of our JyutdictEB team, you can also create Pull Requests to help with changes, or comment directly in Issues.
