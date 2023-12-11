import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import rehypeExternalLinks from 'rehype-external-links'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'ybw0014\'s Minecraft Plugin Documents',
    description: 'A documentation website for ybw0014\'s Minecraft plugins.',
    logo: {
      src: './src/assets/avatar.png'
    },
    favicon: './src/assets/avatar.png',
    customCss: [
      '@fontsource/noto-sans',
      '@fontsource/noto-sans-sc',
      './src/styles/docs.css'
    ],
    social: {
      github: 'https://github.com/ybw0014/mc-plugin-docs'
    },
    defaultLocale: 'root',
    locales: {
      root: {
        label: 'English',
        lang: 'en'
      },
      'zh-cn': {
        label: '简体中文',
        lang: 'zh-CN'
      }
    },
    head: [
      {
        tag: 'script',
        attrs: {
          src: 'https://static.cloudflareinsights.com/beacon.min.js',
          'data-cf-beacon': '{"token": "f6be7a6832534cc2a07b8756a30d1780"}',
          defer: true
        }
      }
    ],
    sidebar: [
      {
        label: 'Home',
        link: '/',
        translations: {
          'zh-CN': '首页'
        }
      },
      {
        label: 'Bump',
        items: [
          {
            label: 'What is Bump?',
            link: '/bump/what-is-bump/',
            translations: {
              'zh-CN': '什么是 Bump?'
            }
          },
          {
            label: 'Translating Bump',
            link: '/bump/translation/',
            translations: {
              'zh-CN': '翻译 Bump'
            }
          },
          {
            label: 'Settings',
            translations: {
              'zh-CN': '设置'
            },
            autogenerate: { directory: 'bump/settings' }
          },
          {
            label: 'Categories',
            translations: {
              'zh-CN': '分类'
            },
            autogenerate: { directory: 'bump/categories' }
          },
          {
            label: 'Items',
            translations: {
              'zh-CN': '物品'
            },
            collapsed: true,
            autogenerate: { directory: 'bump/items' }
          }
        ]
      }
    ]
  }), tailwind({
    applyBaseStyles: false
  })],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, {
      target: '_blank',
      rel: ['noopener', 'noreferrer']
    }]]
  },
  output: 'hybrid',
  adapter: cloudflare()
})
