---
home: true
heroImage: https://z3.ax1x.com/2021/08/03/fiKNN9.jpg
tagline: Online Association for Yue Studies Lovers
actionText: About Us →
actionLink: /en/about/
xfeatures:
- title: Jyutdict Android
  details: An online dictionary platform for Pan-Cantonese words including pronunciations and meanings
  link: /en/jyutdict-android/
  target: ''
- title: Our Bilibili
  details: Making videos on fun facts about Yue Language
  link: https://space.bilibili.com/410568594
  target: view_window
- title: Contact Us
  details: jyutjam@tutanota.com
  link: 'mailto: jyutjam@tutanota.com'
  target: view_window
footer: 'By github.com/JyutdictEB | 2017-2022'
---
<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.xfeatures">
    <h2><a v-bind:href="feat.link" v-bind:target="feat.target">{{ feat.title }}</a></h2>
    <p>{{ feat.details }}</p>
  </div>
</div>
