---
home: true
heroImage: /jyutjam_logo_1024.png
tagline: 粵語研究愛好者網上社團
actionText: 關於我哋 →
actionLink: /about/
xfeatures:
- title: 泛粵典網頁版
  details: 各地粵語字音查詢
  link: /jyutdict-web/
  target: ''
- title: 泛粵典安卓端
  details: 與網頁版功能有些少出入
  link: /jyutdict-android/
  target: ''
- title: Bilibili 平臺
  details: 製作並發佈粵語科普視頻
  link: https://space.bilibili.com/410568594
  target: view_window
- title: 聯繫我哋
  details: info@jyutjam.org
  link: 'mailto: info@jyutjam.org'
  target: view_window
footer: 'By github.com/JyutdictEB | 2017-2025'
---
<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.xfeatures">
    <h2><a v-bind:href="feat.link" v-bind:target="feat.target">{{ feat.title }}</a></h2>
    <p>{{ feat.details }}</p>
  </div>
</div>
