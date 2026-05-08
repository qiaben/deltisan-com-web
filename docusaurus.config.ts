import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Deltisan Engineering',
  tagline: 'We design and build things that last.',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://deltisan.com',
  baseUrl: '/',

  organizationName: 'qiaben',
  projectName: 'deltisan-com-web',

  onBrokenLinks: 'warn',

  headTags: [
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Deltisan Engineering',
        url: 'https://deltisan.com',
        email: 'deltisanengineering@gmail.com',
        telephone: '+91-99435-99093',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1/39, Veerappanur',
          addressLocality: 'Coimbatore',
          addressRegion: 'Tamil Nadu',
          postalCode: '641105',
          addressCountry: 'IN',
        },
        description:
          'Deltisan is an engineering company that designs and produces precision-built products in Coimbatore, India.',
      }),
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/deltisan-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Deltisan',
      logo: {
        alt: 'Deltisan Engineering',
        src: 'img/logo-navbar.png',
      },
      items: [
        { to: '/capabilities', label: 'Capabilities', position: 'left' },
        { to: '/products', label: 'Products', position: 'left' },
        { to: '/process', label: 'Process', position: 'left' },
        { to: '/company', label: 'Company', position: 'left' },
        {
          to: '/contact',
          label: 'Get a quote',
          position: 'right',
          className: 'navbar-cta',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Work',
          items: [
            { label: 'Capabilities', to: '/capabilities' },
            { label: 'Products', to: '/products' },
            { label: 'Process', to: '/process' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'About', to: '/company' },
            { label: 'Contact', to: '/contact' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacy', to: '/privacy' },
            { label: 'Terms', to: '/terms' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deltisan Engineering. Coimbatore, Tamil Nadu, India.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
