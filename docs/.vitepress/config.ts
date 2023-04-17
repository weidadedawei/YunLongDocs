import { defineConfig } from '../../src/node'
import { version } from '../../package.json'

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'YunLong',
  description: '微服务敏捷开发框架',

  lastUpdated: true,
  // cleanUrls: 'without-subfolders',
  // cleanUrls: 'with-subfolders',
  cleanUrls: 'disabled',

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    [
      'script',
      { src: 'https://hm.baidu.com/hm.js?c9c96e4dca0f4e44d53267a84cd53497' }
    ]
  ],

  markdown: {
    headers: {
      level: [0, 0]
    }
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig()
    },

    editLink: {
      pattern: 'https://github.com/weidadedawei/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/weidadedawei/yunlong' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright:
        'Copyright © 2022-present YunLong <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备18064574号-1</a>'
    },

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    }
  }
})

function nav() {
  return [
    { text: '指南', link: '/guide/what-is-yunlong', activeMatch: '/guide/' },
    { text: '配置', link: '/config/introduction', activeMatch: '/config/' },
    {
      text: version,
      items: [
        {
          text: '更新日志',
          link: 'https://github.com/weidadedawei/yunlong/blob/main/CHANGELOG.md'
        },
        {
          text: '贡献',
          link: 'https://github.com/weidadedawei/yunlong/blob/main/contributing.md'
        }
      ]
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: '什么是 YunLong?', link: '/guide/what-is-yunlong' },
        { text: '开发计划', link: '/guide/plan-gantt' },
        { text: '快速开始', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Deploying', link: '/guide/deploying' }
      ]
    },
    {
      text: 'Writing',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: 'Asset Handling', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'API Reference', link: '/guide/api' }
      ]
    },
    {
      text: 'Theme',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/guide/theme-introduction' },
        { text: 'Nav', link: '/guide/theme-nav' },
        { text: 'Sidebar', link: '/guide/theme-sidebar' },
        { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
        { text: 'Edit Link', link: '/guide/theme-edit-link' },
        { text: 'Last Updated', link: '/guide/theme-last-updated' },
        { text: 'Layout', link: '/guide/theme-layout' },
        { text: 'Home Page', link: '/guide/theme-home-page' },
        { text: 'Team Page', link: '/guide/theme-team-page' },
        { text: 'Badge', link: '/guide/theme-badge' },
        { text: 'Footer', link: '/guide/theme-footer' },
        { text: 'Search', link: '/guide/theme-search' },
        { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' }
      ]
    },
    {
      text: 'Migrations',
      collapsible: true,
      items: [
        {
          text: 'Migration from VuePress',
          link: '/guide/migration-from-vuepress'
        },
        {
          text: 'Migration from VitePress 0.x',
          link: '/guide/migration-from-vitepress-0'
        }
      ]
    }
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/introduction' },
        { text: 'App Configs', link: '/config/app-configs' },
        { text: 'Theme Configs', link: '/config/theme-configs' },
        { text: 'Frontmatter Configs', link: '/config/frontmatter-configs' }
      ]
    }
  ]
}
