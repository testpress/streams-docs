import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Video DRM Encryption',
    Svg: require('@site/static/img/security-svgrepo-com.svg').default,
    description: (
      <>
        No downloader, plugin or hack can download the videos streamed through Streams.
      </>
    ),
  },
  {
    title: 'Dynamic Watermarking',
    Svg: require('@site/static/img/web-security-svgrepo-com.svg').default,
    description: (
      <>
        Total Screen Capture Block in Mobile Apps. Discourage screen capture in websites with user based watermark like IP address, user id, email id, phone no. etc.
      </>
    ),
  },
  {
    title: 'Upload & Embed on Your Site Or App',
    Svg: require('@site/static/img/app-plugin-plug-addon-connect-svgrepo-com.svg').default,
    description: (
      <>
        Embed player with subtitles, multiple qualities & speed change options.
        Option for the viewer to download securely in mobile app and play offline.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
