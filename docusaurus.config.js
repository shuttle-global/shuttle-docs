module.exports = {
  title: 'Shuttle',
  tagline: 'Global Payment Logistics',
  url: 'http://docs.shuttleglobal.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'shuttle-global', 
  projectName: 'shuttle-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Logo',
        src: 'img/shuttle_header.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'User Guide',
          position: 'left',
        }, {
          to: 'https://api.shuttleglobal.com/',
          activeBasePath: '/',
          label: 'API',
          position: 'left',
        }, {
          to: 'https://app.shuttleglobal.com/c/devportal/',
          activeBasePath: '/',
          label: 'Login',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Getting Started',
        //       to: 'docs/',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shuttle Global.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'intro_getting_started',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/shuttle-global/shuttle-docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
