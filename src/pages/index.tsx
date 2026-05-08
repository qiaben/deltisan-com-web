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
            <span className={styles.specKey}>Lead time</span>
            <span className={styles.specVal}>3 weeks</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.specKey}>QC</span>
            <span className={styles.specVal}>100% inspected</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.specKey}>Origin</span>
            <span className={styles.specVal}>Coimbatore, IN</span>
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
        Deltisan is an engineering company in Coimbatore. We take ideas from
        sketch to shipped product — design, prototype, manufacture, and finish
        — under one roof.
      </p>
      <div className={styles.heroCtas}>
        <Link className={styles.primaryCta} to="/contact">
          Get a quote
        </Link>
        <Link className={styles.linkCta} to="/capabilities">
          See capabilities ›
        </Link>
      </div>
      <HeroVisual />
    </section>
  );
}

function ProductTiles(): ReactNode {
  return (
    <section className={styles.tileSection}>
      <div className={styles.tileGrid}>
        <article className={styles.tile}>
          <span className={styles.tileEyebrow}>Design</span>
          <h2 className={styles.tileTitle}>From rough sketch to production-ready CAD.</h2>
          <p className={styles.tileSubtitle}>
            Mechanical design, DFM review, and tolerance analysis — done by
            engineers who&apos;ll be on the shop floor when it&apos;s built.
          </p>
          <Link className={styles.tileLink} to="/capabilities">
            Learn more ›
          </Link>
          <div className={styles.tileGlyph} aria-hidden="true">✎</div>
        </article>

        <article className={styles.tile}>
          <span className={styles.tileEyebrow}>Manufacturing</span>
          <h2 className={styles.tileTitle}>Machined, fabricated, finished.</h2>
          <p className={styles.tileSubtitle}>
            Sheet metal, machining, welding, and surface finishing — small to
            mid-volume runs with consistent QC.
          </p>
          <Link className={styles.tileLink} to="/capabilities">
            Learn more ›
          </Link>
          <div className={styles.tileGlyph} aria-hidden="true">⚙</div>
        </article>

        <article className={`${styles.tile} ${styles.tileFull}`}>
          <span className={styles.tileEyebrow}>End to end</span>
          <h2 className={styles.tileTitle}>
            One partner, from the first concept to the last carton.
          </h2>
          <p className={styles.tileSubtitle}>
            Skip the handoffs. Deltisan handles design, prototyping,
            production, finishing, and dispatch in-house.
          </p>
          <Link className={styles.tileLink} to="/process">
            See the process ›
          </Link>
          <div className={styles.tileGlyph} aria-hidden="true">▦</div>
        </article>

        <article className={styles.tile}>
          <span className={styles.tileEyebrow}>Products</span>
          <h2 className={styles.tileTitle}>Custom assemblies, repeatably built.</h2>
          <p className={styles.tileSubtitle}>
            Brackets, frames, enclosures, and bespoke assemblies for industrial
            and OEM customers.
          </p>
          <Link className={styles.tileLink} to="/products">
            Learn more ›
          </Link>
          <div className={styles.tileGlyph} aria-hidden="true">⬢</div>
        </article>

        <article className={styles.tile}>
          <span className={styles.tileEyebrow}>Quality</span>
          <h2 className={styles.tileTitle}>Built to spec. Inspected to spec.</h2>
          <p className={styles.tileSubtitle}>
            Documented tolerances, calibrated instruments, and 100% inspection
            on critical dimensions.
          </p>
          <Link className={styles.tileLink} to="/process">
            Learn more ›
          </Link>
          <div className={styles.tileGlyph} aria-hidden="true">◯</div>
        </article>
      </div>
    </section>
  );
}

function Capabilities(): ReactNode {
  const items = [
    { icon: '✎', title: 'Mechanical design', desc: 'CAD, DFM review, tolerance stacks, drawings ready for the floor.' },
    { icon: '🛠', title: 'Prototyping', desc: 'First-articles built fast so you can hold the part before committing.' },
    { icon: '⚙', title: 'CNC machining', desc: 'Turning and milling for precision components and fixtures.' },
    { icon: '◧', title: 'Sheet metal', desc: 'Cutting, bending, punching, and welding for frames and enclosures.' },
    { icon: '🔥', title: 'Welding & fabrication', desc: 'MIG, TIG, and structural fabrication with documented procedures.' },
    { icon: '🎨', title: 'Surface finishing', desc: 'Powder coating, painting, plating, and corrosion protection.' },
    { icon: '📐', title: 'Quality control', desc: 'Calibrated instruments, inspection reports, and traceable batches.' },
    { icon: '📦', title: 'Assembly & packing', desc: 'Sub-assembly, fitment checks, and ready-to-ship packaging.' },
    { icon: '🚚', title: 'Logistics', desc: 'Pan-India dispatch, with export support on request.' },
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
            <div className={styles.moduleIcon}>{m.icon}</div>
            <h3 className={styles.moduleTitle}>{m.title}</h3>
            <p className={styles.moduleDesc}>{m.desc}</p>
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
        <Link className={styles.primaryCta} to="/contact">
          Get a quote
        </Link>
        <Link className={styles.linkCta} to="/company">
          About Deltisan ›
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Deltisan Engineering — Design & manufacturing in Coimbatore"
      description="Deltisan is an engineering company in Coimbatore that designs and produces precision-built products. End-to-end: design, prototyping, manufacturing, finishing, and dispatch.">
      <div className={styles.page}>
        <Hero />
        <ProductTiles />
        <Capabilities />
        <Closing />
      </div>
    </Layout>
  );
}
