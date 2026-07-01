import { useEffect, useState, type JSX } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Translate from '@docusaurus/Translate'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'

import styles from './index.module.css'

function openDocSearch() {
  if (typeof window === 'undefined') return
  const button = document.querySelector('.DocSearch-Button') as HTMLElement | null
  if (button) {
    button.click()
    return
  }

  const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform)
  document.dispatchEvent(
    new KeyboardEvent('keydown', {
      key: 'k',
      code: 'KeyK',
      metaKey: isMac,
      ctrlKey: !isMac,
      bubbles: true,
    })
  )
}

function SearchButton() {
  const [shortcut, setShortcut] = useState('Ctrl + K')

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform)
      setShortcut(isMac ? '⌘ + K' : 'Ctrl + K')
    }
  }, [])

  return (
    <button
      type="button"
      className={clsx('button button--secondary button--lg', styles.searchButton)}
      onClick={openDocSearch}
      aria-label="Search documentation">
      <svg
        className={styles.searchIcon}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <span className={styles.searchPlaceholder}>
        <Translate>Search documentation</Translate>
      </span>
      <kbd className={styles.searchShortcut}>{shortcut}</kbd>
    </button>
  )
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          <Translate>Documentation, setup guides, and configuration references for my Minecraft plugins.</Translate>
        </p>
        <div className={styles.buttons}>
          <SearchButton />
        </div>
      </div>
    </header>
  )
}

function AllPlugins() {
  const plugins = [
    { to: '/guizhan-builds/api/reference', label: 'Guizhan Builds' },
    { to: '/bump/', label: 'Bump' },
    { to: '/genetic-chickengineering/', label: 'GeneticChickengineering' },
    { to: '/infinity-expansion-2/', label: 'InfinityExpansion2' },
    { to: '/slimefun-translation/', label: 'SlimefunTranslation' },
  ]

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <h2 className="text--primary">
            <Translate>All plugins</Translate>
          </h2>
        </div>
        <div className={clsx('row', styles.cardGrid)}>
          {plugins.map((plugin) => (
            <div key={plugin.to} className={clsx('col col--6', styles.cardCol)}>
              <Link className={styles.cardLink} to={plugin.to}>
                <div className={clsx('card', styles.card)}>
                  <div className="card__body">
                    <h3 className={styles.cardTitle}>
                      <Translate id={`plugin.${plugin.label}`}>{plugin.label}</Translate>
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={'Home'}
      description="The documentation website of ybw0014's Minecraft plugins.">
      <HomepageHeader />
      <main>
        <AllPlugins />
      </main>
    </Layout>
  )
}
