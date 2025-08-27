/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Continuous Help',
  tagline: 'OpCon Advanced Training',
  url: 'https://help.smatechnologies.com',
  baseUrl: '/training/opcon-advanced/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'smatechnologies',
  projectName: 'opcon-advanced-training',
  themeConfig: {
    navbar: {
      title: 'Help',
      logo: {
        alt: 'Continuous Help Logo',
        src: 'img/logo.svg',
        href: 'https://help.smatechnologies.com',
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Continuous.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/smatechnologies/opcon-advanced-training/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
//  plugins: [
//    [
//      require.resolve('@cmfcmf/docusaurus-search-local'), 
//      {}
//    ],
//  ],
};
