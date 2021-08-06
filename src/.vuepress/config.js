module.exports = {
  /**
   * 多語言配置
   */
   locales: {
    '/': {
      lang: 'zh-yue-hant',
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
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    search: false,
    locales: {
      '/': {
        selectText: 'Languages',
        label: '粵語',
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '項目介紹',
            items: [
              {
                text: '泛粵典安卓版',
                link: '/jyutdict-android/'
              },
              {
                text: '泛粵典網頁版',
                link: '/jyutdict-web/'
              },
              {
                text: '擴展粵拼方案（J++）',
                link: '/j++/'
              },
            ]
          },
          {
            text: '社團活動',
            items: [
              {
                text: '嶺南語言討論會（FoSCL）',
                link: '/foscl/'
              },
              {
                text: '泛粵線下交流會',
                link: '/pan-cantonese-offline-meeting/'
              },
            ]
          },
          {
            text: '泛粵典網頁版',
            link: 'https://jyutdict.org/'
          },
          {
            text: 'Bilibili',
            link: 'https://space.bilibili.com/410568594'
          },
          {
            text: '關於我哋',
            link: '/about/'
          },
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                'using-vue',
              ]
            }
          ],
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Projects',
            items: [
              {
                text: 'Jyutdict Android',
                link: '/en/jyutdict-android/'
              },
              {
                text: 'Jyutdict Web',
                link: '/en/jyutdict-web/'
              },
              {
                text: 'Jyutping++ (J++)',
                link: '/en/j++/'
              },
            ]
          },
          {
            text: 'Events',
            items: [
              {
                text: 'Forum on Southern China Language (FoSCL)',
                link: '/en/foscl/'
              },
              {
                text: 'Pan-Cantonese offline meeting',
                link: '/en/pan-cantonese-offline-meeting/'
              },
            ]
          },
          {
            text: 'Jyutdict Web',
            link: 'https://jyutdict.org/'
          },
          {
            text: 'Bilibili',
            link: 'https://space.bilibili.com/410568594'
          },
          {
            text: 'About Us',
            link: '/en/about/'
          },
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                'using-vue',
              ]
            }
          ],
        }
      }
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
