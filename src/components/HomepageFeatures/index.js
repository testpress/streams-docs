import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'On-Demand Video Streaming',
    imgSrc: 'img/feature-cards/on-demand-video.png',
    description: (
      <>
        Deliver recorded video content with a reliable, scalable streaming pipeline. TPStreams handles encoding, storage, and adaptive delivery so your videos play smoothly across devices and varying network conditions. Build experiences like course platforms, media libraries, or event archives without worrying about playback compatibility or performance.
      </>
    ),
  },
  {
    title: 'Live Streaming',
    imgSrc: 'img/feature-cards/live-streaming.png',
    description: (
      <>
        Stream real-time video with infrastructure designed for scale and consistency. Create and schedule live streams, manage ingestion, and deliver content to large audiences with minimal latency. Whether it's classes, webinars, or live events, TPStreams ensures stable playback and seamless transition between live and recorded content.
      </>
    ),
  },
  {
    title: 'DRM Encryption',
    imgSrc: 'img/feature-cards/drm.png',
    description: (
      <>
        Protect premium video content using industry-standard DRM technologies. Enforce secure playback environments that prevent unauthorized downloads, screen recording, and content redistribution. Integrate content protection across web and mobile platforms while maintaining a smooth and uninterrupted user experience.
      </>
    ),
  },
  {
    title: 'Video Player',
    imgSrc: 'img/feature-cards/video-player.png',
    description: (
      <>
        Integrate a flexible, production-ready video player built for modern streaming workflows. Support adaptive bitrate playback, subtitles, playback speed control, chapters, and preview thumbnails. Customize the player UI and behavior while ensuring secure playback and consistent performance across browsers and devices.
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureImageContainer}>
        <img src={imgSrc} className={styles.featureImage} alt={title} />
      </div>
      <div className={styles.featureTextContainer}>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresContainer}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
