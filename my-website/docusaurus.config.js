// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Proyecto 2 | Comunicación Asertiva',
  tagline:
    'Documentación del proceso de investigación, análisis y propuesta para Restaurante Don Juan.',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://alvarito2006.github.io',
  baseUrl: '/CA_S1_G4/',
  organizationName: 'Alvarito2006',
  projectName: 'CA_S1_G4',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Proyecto 2',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            to: '/docs/intro',
            label: 'Resumen',
            position: 'left',
          },
          {
            href: 'https://github.com/Alvarito2006/CA_S1_G4',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Proyecto',
            items: [
              {
                label: 'Visión general',
                to: '/docs/intro',
              },
              {
                label: 'Inicio',
                to: '/',
              },
            ],
          },
          {
            title: 'Contenido',
            items: [
              {
                label: 'Recolección',
                to: '/docs/recoleccion/preguntas',
              },
              {
                label: 'Análisis',
                to: '/docs/analisis/requisitos',
              },
              {
                label: 'Propuesta',
                to: '/docs/propuesta/junta-directiva',
              },
            ],
          },
          {
            title: 'Enlaces',
            items: [
              {
                label: 'Repositorio',
                href: 'https://github.com/Alvarito2006/CA_S1_G4',
              },
            ],
          },
        ],
        copyright: `Universidad de San Carlos de Guatemala · Grupo 4 · ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
