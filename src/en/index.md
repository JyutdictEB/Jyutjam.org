---
home: true
heroImage: https://z3.ax1x.com/2021/08/03/fiKNN9.jpg
tagline: Online Association for Yue Studies Lovers
actionText: About us →
actionLink: /en/about/
xfeatures:
- title: Jyutdict Android
  details: Pan-Cantonese pronunciation query app
  link: /en/jyutdict-web/
  target: ''
- title: Bilibili Platform
  details: Produce and publish Cantonese popular science videos
  link: https://space.bilibili.com/410568594
  target: view_window
- title: Contact us
  details: jyutjam@tutanota.com
  link: 'mailto: jyutjam@tutanota.com'
  target: view_window
footer: Made by github.com/JyutdictEB | 2017-2021
---
<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.xfeatures">
    <h2><a v-bind:href="feat.link" v-bind:target="feat.target">{{ feat.title }}</a></h2>
    <p>{{ feat.details }}</p>
  </div>
</div>
