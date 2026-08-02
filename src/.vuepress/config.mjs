import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  /**
   * 多語言配置
   */
  locales: {
    '/': {
      lang: 'zh-hant',
      title: '嶺南粵音',
      description: '粵語研究愛好者網上社團'
    },
    '/en/': {
      lang: 'en',
      title: 'Lingnaam Jyutjam',
      description: 'An association of Cantonese lovers'
    }
  },

  /**
   * Extra tags to be injected to the page HTML `<head>`
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/jyutjam_logo_205.png' }],
  ],

  bundler: viteBundler(),

  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageText: 'Languages',
        selectLanguageName: '粵語',
        lastUpdatedText: '上次更新',
        nav: [
          {
            text: '項目介紹',
            items: [
              { text: '泛粵典安卓版', link: '/jyutdict-android/' },
              { text: '泛粵典網頁版', link: '/jyutdict-web/' },
              { text: '擴展粵拼方案（J++）', link: '/jpp/' },
              { text: 'Lagarrue 北部灣粵語在線語料庫', link: '/got/' },
            ]
          },
          {
            text: '活動介紹',
            items: [
              { text: '嶺南語言討論會（FoLiSC）', link: '/folisc/' },
              { text: '泛粵線下交流會', link: '/pan-cantonese-offline-meeting/' },
            ]
          },
          { text: '泛粵典網頁版', link: 'https://jyutdict.org/' },
          { text: 'Bilibili', link: 'https://space.bilibili.com/410568594' },
          { text: '關於我哋', link: '/about/' },
        ],
      },
      '/en/': {
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        lastUpdatedText: 'Last Updated',
        nav: [
          {
            text: 'Projects',
            items: [
              { text: 'Jyutdict Android', link: '/en/jyutdict-android/' },
              { text: 'Jyutdict Web', link: '/en/jyutdict-web/' },
              { text: 'Jyutping++ (J++)', link: '/en/jpp/' },
              { text: 'Lagarrue\'s GoT Cantonese Online Corpus', link: '/en/got/' },
            ]
          },
          {
            text: 'Events',
            items: [
              { text: 'Forum on Languages in South China (FoLiSC)', link: '/en/folisc/' },
              { text: 'Pan-Cantonese Offline Meeting', link: '/en/pan-cantonese-offline-meeting/' },
            ]
          },
          { text: 'Jyutdict Web', link: 'https://jyutdict.org/' },
          { text: 'Bilibili', link: 'https://space.bilibili.com/410568594' },
          { text: 'About Us', link: '/en/about/' },
        ],
      },
    }
  }),
})
