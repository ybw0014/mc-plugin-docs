import {themes as prismThemes} from 'prism-react-renderer'
import type {Config} from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'ybw0014\'s Minecraft Plugins',
  tagline: 'Plugins are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.ybw0014.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/ybw0014/mc-plugin-docs/tree/master/docs'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ybw0014\'s Minecraft Plugins',
      logo: {
        alt: 'Logo',
        src: 'img/logo.jpg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guizhan-builds',
          position: 'left',
          label: 'Guizhan Builds'
        },
        {
          type: 'docSidebar',
          sidebarId: 'bump',
          position: 'left',
          label: 'Bump'
        },
        {
          type: 'docSidebar',
          sidebarId: 'slimefun-translation',
          position: 'left',
          label: 'SlimefunTranslation'
        },
        {
          href: 'https://github.com/ybw0014/mc-plugin-docs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository'
        },
        {
          type: 'localeDropdown',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'My Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ybw0014'
            },
            {
              label: 'Guizhan Builds',
              href: 'https://builds.guizhanss.com'
            }
          ]
        },
        {
          title: 'Slimefun Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Slimefun/Slimefun4'
            },
            {
              label: 'Wiki',
              href: 'https://github.com/Slimefun/Slimefun4/wiki'
            },
            {
              label: 'Blob Builds',
              href: 'https://blob.build/'
            }
          ]
        }
      ],
      copyright: `&copy; ${new Date().getFullYear()} ybw0014. Powered by Docusaurus.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'groovy']
    },
    algolia: {
      appId: 'O8LFXULH6B',
      apiKey: 'c54e71d1bd5e789ccb299a25f9516559',
      indexName: 'ybw0014',
      contextualSearch: true
    }
  } satisfies Preset.ThemeConfig
}

export default config
