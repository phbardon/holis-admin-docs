// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HOLIS',
  tagline: 'De l\'information à l\'action',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://phbardon.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/holis-admin-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'phbardon', // Usually your GitHub org/user name.
  projectName: 'holis-admin-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',   // 👈 makes docs appear at /
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'HOLIS ADMIN',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'crewSidebar',
            position: 'left',
            label: 'CREW',
          },
          {
            type: 'docSidebar',
            sidebarId: 'crewSidebar',
            position: 'left',
            label: 'ECL',
          },
          {
            type: 'docSidebar',
            sidebarId: 'gocSidebar',
            position: 'left',
            label: 'GOC',
          },
          {
            type: 'docSidebar',
            sidebarId: 'MCCSidebar',
            position: 'left',
            label: 'MCC',
          },
          {
            type: 'docSidebar',
            sidebarId: 'occSidebar',
            position: 'left',
            label: 'OCC',
          },
          {
            type: 'docSidebar',
            sidebarId: 'opsSidebar',
            position: 'left',
            label: 'OPS',
          },
//          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
//              {
//                label: 'Tutorial',
//                to: '/docs/intro',
//              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
//              {
//                label: 'Blog',
//                to: '/blog',
 //             },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
