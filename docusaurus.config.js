/** @type {import('@docusaurus/types').Config} */

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Streams Docs',
  tagline: '',
  url: 'https://testpress.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/testpress_favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'testpress', // Usually your GitHub org/user name.
  projectName: 'streams-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: ['@docusaurus/theme-live-codeblock'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [
            require('remark-grid-tables'),
          ]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Streams',
        logo: {
          alt: 'Testpress Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'server-api/organizations',
            label: 'Server APIs',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'liveStreamApi',
            label: 'Live Stream',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'videoEmbeddingSidebar',
            label: 'Video Embedding',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'uploaderSidebar',
            label: 'Videos Uploader',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'mobileSdk',
            label: 'Mobile SDK',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'drmSidebar',
            label: 'DRM Service',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'transcodingSidebar',
            label: 'Transcoding Service',
          },

          {
            href: 'https://app.getpostman.com/run-collection/18601519-52c5b04b-8b6c-457f-a38d-e015ee8752dd?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D18601519-52c5b04b-8b6c-457f-a38d-e015ee8752dd%26entityType%3Dcollection%26workspaceId%3Dc04c7c68-3b97-4c20-9ed4-ec556fccdd29',
            label: 'Postman Collection',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Testpress Tech labs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', "php", "ruby", "csharp", "go", "kotlin", "swift", "dart"],
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
    }),
};

module.exports = config;