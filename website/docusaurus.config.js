const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'ArdaCraft Wiki',
  tagline: 'Documentation and information',
  url: 'https://wiki.ardacraft.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'ArdaCraft',
  projectName: 'Wiki',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ArdaCraft/Wiki/edit/master/website/',
          routeBasePath: '/',
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
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      gtag: {
        trackingID: 'G-F9S9Y9S8EQ',
      },
      navbar: {
        title: 'ArdaCraft Wiki',
        logo: {
          alt: 'ArdaCraft Logo',
          src: 'img/logo.png',
        },
        items: [],
      },
      footer: {},
    }),
});
