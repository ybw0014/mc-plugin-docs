import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import rehypeExternalLinks from 'rehype-external-links'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'ybw0014\'s Minecraft Plugin Documents',
      description: 'A documentation website for ybw0014\'s Minecraft plugins.',
      logo: {
        src: './src/assets/avatar.png'
      },
      favicon: './src/assets/avatar.png',
      customCss: [
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
              link: '/bump/what-is-bump',
              translations: {
                'zh-CN': '什么是 Bump?'
              }
            },
            {
              label: 'Translating Bump',
              link: '/bump/translation',
              translations: {
                'zh-CN': '翻译 Bump'
              }
            },
            {
              label: 'Settings',
              translations: {
                'zh-CN': '设置'
              },
              items: [
                {
                  label: 'Main config',
                  link: '/bump/settings/main-config',
                  translations: {
                    'zh-CN': '主要配置'
                  }
                },
                {
                  label: 'Appraise types config',
                  link: '/bump/settings/appraise-types-config',
                  translations: {
                    'zh-CN': '鉴定类型配置'
                  }
                }
              ]
            },
            {
              label: 'Categories',
              translations: {
                'zh-CN': '分类'
              },
              items: [
                {
                  label: 'Armor',
                  link: '/bump/categories/armor',
                  translations: {
                    'zh-CN': '盔甲'
                  }
                },
                {
                  label: 'Food',
                  link: '/bump/categories/food',
                  translations: {
                    'zh-CN': '食物'
                  }
                },
                {
                  label: 'Machine',
                  link: '/bump/categories/machine',
                  translations: {
                    'zh-CN': '机器'
                  }
                },
                {
                  label: 'Stuff',
                  link: '/bump/categories/stuff',
                  translations: {
                    'zh-CN': '材料'
                  }
                },
                {
                  label: 'Tool',
                  link: '/bump/categories/tool',
                  translations: {
                    'zh-CN': '工具'
                  }
                },
                {
                  label: 'Magic Weapon',
                  link: '/bump/categories/magic-weapon',
                  translations: {
                    'zh-CN': '魔法武器'
                  }
                }
              ]
            }
          ]
        }
      ]
    }),
    tailwind({
      applyBaseStyles: false
    })
  ],
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ]
  }
})
