import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HeroVisual(): ReactNode {
  return (
    <div className={styles.heroVisual} aria-hidden="true">
      <div className={styles.blueprint}>
        <div className={styles.blueprintMain}>
          <div className={styles.blueprintHeader}>
            <div className={styles.blueprintTitle}>Bracket Mount · Rev. C</div>
            <div className={styles.blueprintMeta}>Material: MS · Coating: Powder</div>
          </div>
          <div className={styles.blueprintCanvas}>
            <span className={styles.dimensionLabel}>Ø 110 mm</span>
            <span className={styles.shapeCircle} />
            <span className={styles.shapeBracket} />
            <span className={styles.shapeSquare} />
            <span className={styles.dimensionLabel}>80 × 80 mm</span>
          </div>
        </div>
        <aside className={styles.specs}>
          <div className={styles.specsTitle}>Specifications</div>
          <div className={styles.specRow}>
            <span className={styles.specKey}>Tolerance</span>
            <span className={styles.specVal}>±0.05 mm</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.specKey}>Finish</span>
            <span className={styles.specVal}>Ra 1.6 µm</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.specKey}>Batch</span>
            <span className={styles.specVal}>250 units</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.specKey}>QC</span>
            <span className={styles.specVal}>100% inspected</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.specKey}>Origin</span>
            <span className={styles.specVal}>Parker, Colorado</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Hero(): ReactNode {
  return (
    <section className={styles.hero}>
      <span className={styles.heroBadge}>Engineering · Design · Manufacturing</span>
      <h1 className={styles.heroTitle}>
        We design and build{' '}
        <span className={styles.gradientText}>things that last</span>.
      </h1>
      <p className={styles.heroSubtitle}>
        We take ideas from sketch to shipped product — design, prototype,
        manufacture, and finish — under one roof.
      </p>
      <div className={styles.heroCtas}>
        <Link className={styles.primaryCta} to="/schedule">
          Book a call
        </Link>
        <Link className={styles.linkCta} to="/capabilities">
          See capabilities ›
        </Link>
      </div>
      <HeroVisual />
    </section>
  );
}

type Tile = {
  eyebrow: string;
  title: string;
  subtitle: string;
  link: string;
  linkLabel: string;
  image: string;
  full?: boolean;
};

function ProductTile({ tile }: { tile: Tile }): ReactNode {
  const className = [styles.tile, styles.tileLight, tile.full ? styles.tileFull : '']
    .filter(Boolean)
    .join(' ');
  return (
    <article className={className}>
      <div
        className={styles.tileImage}
        style={{ backgroundImage: `url(${tile.image})` }}
      />
      <div className={styles.tileScrim} />
      <span className={styles.tileEyebrow}>{tile.eyebrow}</span>
      <h2 className={styles.tileTitle}>{tile.title}</h2>
      <p className={styles.tileSubtitle}>{tile.subtitle}</p>
      <div className={styles.tileSpacer} />
      <Link className={styles.tileLink} to={tile.link}>
        {tile.linkLabel} ›
      </Link>
    </article>
  );
}

function ProductTiles(): ReactNode {
  const tiles: Tile[] = [
    {
      eyebrow: 'Design',
      title: 'From rough sketch to production-ready CAD.',
      subtitle:
        'Mechanical design, DFM review, and tolerance analysis — by engineers who will be on the shop floor when it is built.',
      link: '/capabilities',
      linkLabel: 'Learn more',
      image: '/img/stock/blueprint-1.jpg',
    },
    {
      eyebrow: 'Manufacturing',
      title: 'Machined, fabricated, finished.',
      subtitle:
        'Sheet metal, CNC machining, welding, and surface finishing — small to mid-volume runs with consistent QC.',
      link: '/capabilities',
      linkLabel: 'Learn more',
      image: '/img/stock/cnc-1.jpg',
    },
    {
      eyebrow: 'End to end',
      title: 'One partner, from the first concept to the last carton.',
      subtitle:
        'Skip the handoffs. Deltisan handles design, prototyping, production, finishing, and dispatch in-house.',
      link: '/process',
      linkLabel: 'See the process',
      image: '/img/stock/workshop-1.jpg',
      full: true,
    },
    {
      eyebrow: 'Products',
      title: 'Custom assemblies, repeatably built.',
      subtitle:
        'Brackets, frames, enclosures, and bespoke assemblies for industrial and OEM customers.',
      link: '/products',
      linkLabel: 'Learn more',
      image: '/img/stock/sheet-metal-1.jpg',
    },
    {
      eyebrow: 'Quality',
      title: 'Built to spec. Inspected to spec.',
      subtitle:
        'Documented tolerances, calibrated instruments, and 100% inspection on critical dimensions.',
      link: '/process',
      linkLabel: 'Learn more',
      image: '/img/stock/blueprint-2.jpg',
    },
  ];

  return (
    <section className={styles.tileSection}>
      <div className={styles.tileGrid}>
        {tiles.map((t) => (
          <ProductTile key={t.title} tile={t} />
        ))}
      </div>
    </section>
  );
}

function HeroStrip(): ReactNode {
  return (
    <section
      className={styles.heroStrip}
      style={{ backgroundImage: 'url(/img/stock/welding-1.jpg)' }}
      aria-label="Deltisan workshop">
      <div className={styles.heroStripCaption}>
        <h3 className={styles.heroStripTitle}>
          Built for OEMs and industrial customers across the United States.
        </h3>
        <span className={styles.heroStripMeta}>The workshop</span>
      </div>
    </section>
  );
}

function Gallery(): ReactNode {
  const items = [
    { src: '/img/stock/cnc-2.jpg', caption: 'CNC machining', cls: 'tall' },
    { src: '/img/stock/welding-2.jpg', caption: 'TIG welding' },
    { src: '/img/stock/sheet-metal-2.jpg', caption: 'Sheet metal' },
    { src: '/img/stock/cnc-3.jpg', caption: 'Precision turning' },
    { src: '/img/stock/welding-3.jpg', caption: 'Fabrication', cls: 'wide' },
    { src: '/img/stock/sheet-metal-3.jpg', caption: 'Press & punch' },
  ];
  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryHead}>
        <p className={styles.sectionEyebrow}>In the workshop</p>
        <h2 className={styles.sectionTitle}>
          Real machines.{' '}
          <span className={styles.gradientText}>Real engineers.</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          A look inside the shop floor where parts get cut, formed, welded,
          and finished.
        </p>
      </div>
      <div className={styles.galleryGrid}>
        {items.map((it) => (
          <div
            key={it.src}
            className={`${styles.galleryItem} ${it.cls ? styles[it.cls] : ''}`}
            style={{ backgroundImage: `url(${it.src})` }}
            role="img"
            aria-label={it.caption}>
            <span className={styles.galleryCaption}>{it.caption}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Capabilities(): ReactNode {
  const items = [
    {
      image: '/img/stock/blueprint-1.jpg',
      title: 'Mechanical design',
      desc: 'CAD, DFM review, tolerance stacks, drawings ready for the floor.',
    },
    {
      image: '/img/stock/blueprint-2.jpg',
      title: 'Prototyping',
      desc: 'First-articles built fast so you can hold the part before committing.',
    },
    {
      image: '/img/stock/cnc-1.jpg',
      title: 'CNC machining',
      desc: 'Turning and milling for precision components and fixtures.',
    },
    {
      image: '/img/stock/sheet-metal-2.jpg',
      title: 'Sheet metal',
      desc: 'Cutting, bending, punching, and welding for frames and enclosures.',
    },
    {
      image: '/img/stock/welding-1.jpg',
      title: 'Welding & fabrication',
      desc: 'MIG, TIG, and structural fabrication with documented procedures.',
    },
    {
      image: '/img/stock/welding-3.jpg',
      title: 'Surface finishing',
      desc: 'Powder coating, painting, plating, and corrosion protection.',
    },
    {
      image: '/img/stock/cnc-2.jpg',
      title: 'Quality control',
      desc: 'Calibrated instruments, inspection reports, and traceable batches.',
    },
    {
      image: '/img/stock/sheet-metal-1.jpg',
      title: 'Assembly & packing',
      desc: 'Sub-assembly, fitment checks, and ready-to-ship packaging.',
    },
    {
      image: '/img/stock/workshop-1.jpg',
      title: 'Logistics',
      desc: 'Nationwide US dispatch, with export support on request.',
    },
  ];

  return (
    <section className={styles.modulesSection}>
      <p className={styles.sectionEyebrow}>What we do</p>
      <h2 className={styles.sectionTitle}>
        One workshop.{' '}
        <span className={styles.gradientText}>Every step covered.</span>
      </h2>
      <p className={styles.sectionSubtitle}>
        Deltisan combines design and manufacturing capabilities so a single
        team owns the part from drawing to dispatch.
      </p>
      <div className={styles.moduleGrid}>
        {items.map((m) => (
          <div key={m.title} className={styles.module}>
            <div
              className={styles.moduleImage}
              style={{ backgroundImage: `url(${m.image})` }}
            />
            <div className={styles.moduleBody}>
              <h3 className={styles.moduleTitle}>{m.title}</h3>
              <p className={styles.moduleDesc}>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Closing(): ReactNode {
  return (
    <section className={styles.closingSection}>
      <h2 className={styles.closingTitle}>
        Got a drawing?{' '}
        <span className={styles.gradientText}>Let&apos;s build it.</span>
      </h2>
      <p className={styles.closingSubtitle}>
        Send us a sketch, a CAD file, or just a description. We&apos;ll come
        back with a feasibility note and an honest quote.
      </p>
      <div className={styles.closingCtas}>
        <Link className={styles.primaryCta} to="/schedule">
          Book a call
        </Link>
        <Link className={styles.linkCta} to="/contact">
          Email us a drawing ›
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Deltisan Engineering — Design and manufacturing"
      description="Deltisan is an engineering company that designs and produces precision-built products. End-to-end: design, prototyping, manufacturing, finishing, and dispatch.">
      <div className={styles.page}>
        <Hero />
        <HeroStrip />
        <ProductTiles />
        <Capabilities />
        <Gallery />
        <Closing />
      </div>
    </Layout>
  );
}
