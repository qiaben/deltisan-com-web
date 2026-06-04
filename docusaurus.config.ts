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
        '@id': 'https://deltisan.com/#organization',
        name: 'Deltisan Engineering LLC',
        legalName: 'Deltisan Engineering LLC',
        url: 'https://deltisan.com',
        logo: 'https://deltisan.com/img/logo.png',
        image: 'https://deltisan.com/img/logo.png',
        email: 'info@deltisan.com',
        telephone: '+1-720-666-0405',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '6222 E Pine Lane, Suite 6212 #1075',
          addressLocality: 'Parker',
          addressRegion: 'CO',
          postalCode: '80138',
          addressCountry: 'US',
        },
        location: [
          {
            '@type': 'Place',
            name: 'Deltisan Engineering LLC — US sales & contracting',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '6222 E Pine Lane, Suite 6212 #1075',
              addressLocality: 'Parker',
              addressRegion: 'CO',
              postalCode: '80138',
              addressCountry: 'US',
            },
          },
          {
            '@type': 'Place',
            name: 'Deltisan Engineering — Coimbatore head office (India)',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '1/39, Veerappanur',
              addressLocality: 'Coimbatore',
              addressRegion: 'TN',
              postalCode: '641105',
              addressCountry: 'IN',
            },
          },
        ],
        areaServed: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'Canada' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Place', name: 'European Union' },
          { '@type': 'Country', name: 'Australia' },
          { '@type': 'Country', name: 'India' },
        ],
        sameAs: ['https://deltisan.com'],
        description:
          'Deltisan Engineering LLC is a Colorado-registered precision-engineering company offering CNC machining, sheet-metal fabrication, welding, and surface finishing. Production happens in India, coordinated from our Coimbatore head office, and is exported worldwide to aerospace, oil-and-gas, and industrial OEM customers.',
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
          postsPerPage: 3,
          sortPosts: 'descending',
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
        {
          href: 'tel:+17206660405',
          label: '+1 720-666-0405',
          position: 'right',
          className: 'navbar-phone',
        },
        {
          href: 'mailto:info@deltisan.com',
          label: 'info@deltisan.com',
          position: 'right',
          className: 'navbar-email',
        },
        { to: '/contact', label: 'Contact', position: 'right' },
        {
          to: '/quote',
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
      copyright: `Copyright © ${new Date().getFullYear()} Deltisan Engineering LLC · 6222 E Pine Lane, Suite 6212 #1075, Parker, CO 80138 · +1 720-666-0405 · info@deltisan.com`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
