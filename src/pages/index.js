import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="docs/server-api/organizations">
                Get Started
              </Link>
            </div>
          </div>
          <img src="img/logo-3D.png" alt="TPStreams" className={styles.heroLogo} />
        </div>
      </div>
    </header>
  );
}

function AiBanner() {
  return (
    <section className={styles.aiBannerSection}>
      <div className={styles.aiBannerContainer}>
        <div className={styles.aiBanner}>
          <div className={styles.aiBannerLeft}>
            <div className={styles.aiBannerIconWrap}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.7 8.3L21 11L14.7 13.7L12 20L9.3 13.7L3 11L9.3 8.3L12 2Z" />
                <path d="M19 16L20.2 18.8L23 20L20.2 21.2L19 24L17.8 21.2L15 20L17.8 18.8L19 16Z" opacity="0.7" />
              </svg>
            </div>
            <div>
              <h3 className={styles.aiBannerTitle}>Build with TPStreams using AI</h3>
              <p className={styles.aiBannerDescription}>
                Give your AI coding assistant the context it needs to integrate TPStreams.<br/> Works with Claude Code, Cursor, Codex, and more.
              </p>
            </div>
          </div>
          <div className={styles.aiBannerActions}>
            <Link className={styles.aiBannerButton} to="docs/ai-skill">
              Get the AI Skill &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <AiBanner />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

