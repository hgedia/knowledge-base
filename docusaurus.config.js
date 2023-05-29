// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'hgedia',
  tagline: "Tis' but a scratch place",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/knowledge-base/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hgedia', // Usually your GitHub org/user name.
  projectName: 'knowledge-base', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  // stylesheets: [
  //   {
  //     href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
  //     type: "text/css",
  //     integrity:
  //         "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
  //     crossorigin: "anonymous",
  //   },
  // ],
  // plugins:    [
  //   async function tailwindPlugin(context, options) {
  //     return {
  //       name: "docusaurus-tailwindcss",
  //       configurePostCss(postcssOptions) {
  //         postcssOptions.plugins.push(require("tailwindcss"));
  //         postcssOptions.plugins.push(require("autoprefixer"));
  //         return postcssOptions;
  //       },
  //     };
  //   },
  // ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/hgedia/knowledge-base/tree/main/',
        },
        blog:
            {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hgedia/knowledge-base/tree/main/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Musings',
          },
          {
            href: 'https://github.com/hgedia',
            position: 'right',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   // links: [
      //   //   {
      //   //     title: 'Docs',
      //   //     items: [
      //   //       {
      //   //         label: 'Docs',
      //   //         to: '/docs/intro',
      //   //       },
      //   //     ],
      //   //   },
      //   //   {
      //   //     title: 'Community',
      //   //     items: [
      //   //       {
      //   //         label: 'Twitter',
      //   //         href: 'https://twitter.com/docusaurus',
      //   //       },
      //   //     ],
      //   //   },
      //   //   {
      //   //     title: 'More',
      //   //     items: [
      //   //       {
      //   //         label: 'GitHub',
      //   //         href: 'https://github.com/facebook/docusaurus',
      //   //       },
      //   //     ],
      //   //   },
      //   //],
      //   //copyright: `Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
