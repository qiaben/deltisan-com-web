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

  markdown: {
    format: 'detect',
  },

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
        email: 'info@deltisan.com',
        telephone: '+91-93633-32913',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1/39, Veerappanur',
          addressLocality: 'Coimbatore',
          addressRegion: 'Tamil Nadu',
          postalCode: '641105',
          addressCountry: 'IN',
        },
        description:
          'Deltisan is an engineering company that designs and produces precision-built products.',
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
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          showReadingTime: true,
          blogTitle: 'Deltisan Journal',
          blogDescription: 'Notes from the workshop — DFM, fabrication, finishing, and quality.',
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 5,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: 'Deltisan Journal',
            description: 'Notes from the workshop.',
          },
          onInlineTags: 'ignore',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
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
        { to: '/blog', label: 'Journal', position: 'left' },
        { to: '/company', label: 'Company', position: 'left' },
        { to: '/contact', label: 'Contact', position: 'right' },
        {
          to: '/schedule',
          label: 'Book a call',
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
            { label: 'Journal', to: '/blog' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'About', to: '/company' },
            { label: 'Book a call', to: '/schedule' },
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
      copyright: `Copyright © ${new Date().getFullYear()} Deltisan Engineering.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
