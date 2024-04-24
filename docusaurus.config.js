// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rossum.ai Cookbook',
  tagline: 'Build something cool with Rossum.ai',
  favicon: 'img/128-blue-crunch.png',

  // Set the production url of your site here
  url: 'https://rossumai-community.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cookbook/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rossumai-community', // Usually your GitHub org/user name.
  projectName: 'cookbook', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Will be passed to @docusaurus/plugin-content-docs (false to disable)
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/rossumai-community/cookbook/tree/master/',
        },
        blog: {
          // Will be passed to @docusaurus/plugin-content-blog (false to disable)
          showReadingTime: true,
          editUrl: 'https://github.com/rossumai-community/cookbook/tree/master/',
        },
        theme: {
          // Will be passed to @docusaurus/theme-classic.
          customCss: './src/css/custom.css',
        },
        gtag: {
          // Will be passed to @docusaurus/plugin-google-gtag (only enabled when explicitly specified)
          trackingID: 'G-2DBTH3BGYK',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/og_image.png',
      navbar: {
        title: 'Rossum.ai Cookbook',
        logo: {
          alt: 'Rossum.ai Logo',
          src: 'img/128-blue-crunch.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'extensionsSidebar',
            position: 'left',
            label: 'Extensions',
          },
          {
            type: 'docSidebar',
            sidebarId: 'guidesSidebar',
            position: 'left',
            label: 'Guides',
          },
          {
            href: 'https://elis.rossum.ai/api/docs/',
            label: 'API Reference',
            position: 'left',
          },

          // See: http://localhost:3000/cookbook/docs/docusaurus/intro
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'docusaurusSidebar',
          //   position: 'left',
          //   label: 'Docusaurus',
          // },

          // http://localhost:3000/cookbook/blog
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left',
          // },

          {
            href: 'https://rossum.ai/',
            label: 'Rossum.ai',
            position: 'right',
          },
          {
            href: 'https://status.rossum.ai/',
            label: 'Status page',
            position: 'right',
          },
          {
            href: 'https://github.com/rossumai-community/cookbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Integrations',
          //   items: [
          //     {
          //       label: 'NetSuite',
          //       to: '/docs/category/netsuite',
          //     },
          //   ],
          // },
          // {
          //   title: 'Extensions',
          //   items: [
          //     {
          //       label: 'Master Data Hub',
          //       to: '/docs/category/master-data-hub',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/rossumai-community/cookbook',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rossum.ai`,
      },
      announcementBar: {
        content: '🚧 Work in progress. <strong>Do not share publicly.</strong> 🚧',
        backgroundColor: '#fff8e6',
        isCloseable: false,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'python'],
      },
    }),
};

export default config;
