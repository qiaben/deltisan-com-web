import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

type Capability = {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  image: string;
  reverse?: boolean;
  alt?: boolean;
};

const capabilities: Capability[] = [
  {
    eyebrow: 'Design',
    title: 'Mechanical design and DFM',
    desc: 'Drawings ready for the floor — done by engineers who will be on the shop floor when the part is built.',
    image: '/img/stock/blueprint-1.jpg',
    bullets: [
      '2D drawings and 3D CAD',
      'Tolerance stacks',
      'DFM and DFA review',
      'Reverse-engineering from samples',
      'Material selection',
      'Cost-down redesign',
    ],
  },
  {
    eyebrow: 'CNC machining',
    title: 'Turning and milling for precision parts',
    desc: 'Production runs and one-off parts in steel, aluminium, brass, and stainless. Tooling and fixtures designed alongside the part.',
    image: '/img/stock/cnc-1.jpg',
    reverse: true,
    alt: true,
    bullets: [
      'CNC turning',
      'CNC milling (3-axis)',
      'Drilling and tapping',
      'Threading (internal / external)',
      'Boring and reaming',
      'Knurling, slotting, grooving',
    ],
  },
  {
    eyebrow: 'Sheet metal',
    title: 'Cutting, forming, and joining',
    desc: 'From single brackets to large enclosures and frames, with consistent bend radii and clean joints.',
    image: '/img/stock/sheet-metal-2.jpg',
    bullets: [
      'Laser / plasma cutting',
      'Press brake bending',
      'Punching and notching',
      'Sheet rolling',
      'Riveting and fastening',
      'Sub-assembly',
    ],
  },
  {
    eyebrow: 'Welding & fabrication',
    title: 'MIG, TIG, and structural fabrication',
    desc: 'Welded with documented procedures and trained welders. Stress-relieved when the application calls for it.',
    image: '/img/stock/welding-1.jpg',
    reverse: true,
    alt: true,
    bullets: [
      'MIG (GMAW)',
      'TIG (GTAW)',
      'Spot welding',
      'Stick / arc welding',
      'Structural fabrication',
      'Stress relieving',
    ],
  },
  {
    eyebrow: 'Surface finishing',
    title: 'Powder coat, paint, and plating',
    desc: 'Pre-treated, masked, and finished to your spec — not just sprayed on. Colour and texture controlled.',
    image: '/img/stock/welding-3.jpg',
    bullets: [
      'Powder coating',
      'Wet painting (industrial)',
      'Phosphate pre-treatment',
      'Zinc plating (outsourced)',
      'Galvanising (outsourced)',
      'Brushed / polished finishes',
    ],
  },
  {
    eyebrow: 'Quality control',
    title: 'Calibrated, documented, traceable',
    desc: '100% inspection on critical dimensions, calibrated instruments, and inspection reports tied to the batch.',
    image: '/img/stock/cnc-2.jpg',
    reverse: true,
    alt: true,
    bullets: [
      'Vernier callipers, micrometers',
      'Height gauges, bore gauges',
      'Plug and ring gauges',
      'Coating thickness gauge',
      'Hardness testing',
      'Inspection reports on request',
    ],
  },
];

const materials = [
  { name: 'Mild steel', meta: 'Sheet, plate, sections' },
  { name: 'Stainless 304 / 316', meta: 'Sheet, sections, fasteners' },
  { name: 'Aluminium 6061 / 5052', meta: 'Sheet, plate, extrusion' },
  { name: 'Brass', meta: 'Bar stock, components' },
  { name: 'Cast iron', meta: 'Machined components' },
  { name: 'Galvanised steel', meta: 'Pre-galv sheet and tube' },
  { name: 'Tool steel', meta: 'Tooling and fixtures' },
  { name: 'Engineering plastics', meta: 'Delrin, nylon, HDPE on request' },
];

export default function Capabilities(): ReactNode {
  return (
    <Layout
      title="Capabilities — Deltisan Engineering"
      description="Deltisan capabilities: mechanical design, CNC machining, sheet metal, welding, finishing, and quality control. Materials, tolerances, and standards.">
      <section className={styles.stub} style={{ paddingBottom: 40 }}>
        <div
          className={styles.heroBanner}
          style={{ backgroundImage: 'url(/img/stock/cnc-1.jpg)' }}
          aria-hidden="true"
        />
        <p className={styles.eyebrow}>Capabilities</p>
        <h1 className={styles.title}>Design and manufacturing under one roof.</h1>
        <p className={styles.subtitle}>
          Mechanical design, CNC machining, sheet-metal fabrication, welding,
          surface finishing, and quality control — six capabilities owned by
          one team.
        </p>
        <Link className={styles.cta} to="/schedule">Book a call</Link>
      </section>

      <section className={styles.processSection} style={{ paddingTop: 40, paddingBottom: 80 }}>
        <div className={styles.capRows}>
          {capabilities.map((c) => (
            <article
              key={c.title}
              className={[
                styles.capRow,
                c.reverse ? styles.reverse : '',
                c.alt ? styles.alt : '',
              ]
                .filter(Boolean)
                .join(' ')}>
              <div
                className={styles.capImage}
                style={{ backgroundImage: `url(${c.image})` }}
                aria-hidden="true"
              />
              <div className={styles.capContent}>
                <p className={styles.capEyebrow}>{c.eyebrow}</p>
                <h2 className={styles.capTitle}>{c.title}</h2>
                <p className={styles.capDesc}>{c.desc}</p>
                <ul className={styles.capList}>
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.materialsSection}>
        <p className={styles.eyebrow}>Materials</p>
        <h2 className={styles.title} style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
          Steel, stainless, aluminium, and the rest.
        </h2>
        <p className={styles.subtitle}>
          Sourced from vetted suppliers with traceable mill certificates.
          Common stock kept on the floor; specials on request.
        </p>
        <div className={styles.materialsGrid}>
          {materials.map((m) => (
            <div key={m.name} className={styles.materialCard}>
              <h4 className={styles.materialName}>{m.name}</h4>
              <p className={styles.materialMeta}>{m.meta}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.standards}>
        <div className={styles.standardsHead}>
          <p className={styles.eyebrow}>Tolerances and standards</p>
          <h2 className={styles.title} style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            Built to spec. Inspected to spec.
          </h2>
        </div>
        <div className={styles.standardsGrid}>
          <div className={styles.standardCard}>
            <p className={styles.standardLabel}>General machining</p>
            <p className={styles.standardValue}>±0.05 mm</p>
            <p className={styles.standardDesc}>
              Tighter on request; called out on the drawing where it matters.
            </p>
          </div>
          <div className={styles.standardCard}>
            <p className={styles.standardLabel}>Sheet metal forming</p>
            <p className={styles.standardValue}>±0.5 mm</p>
            <p className={styles.standardDesc}>
              Standard bend tolerance; tightened with formed-feature tooling.
            </p>
          </div>
          <div className={styles.standardCard}>
            <p className={styles.standardLabel}>Surface finish (machined)</p>
            <p className={styles.standardValue}>Ra 1.6 µm</p>
            <p className={styles.standardDesc}>
              Standard. Finer finishes available with secondary operations.
            </p>
          </div>
          <div className={styles.standardCard}>
            <p className={styles.standardLabel}>Welding</p>
            <p className={styles.standardValue}>WPS-led</p>
            <p className={styles.standardDesc}>
              Documented procedures, qualified welders, visual inspection on
              every joint.
            </p>
          </div>
          <div className={styles.standardCard}>
            <p className={styles.standardLabel}>Powder coat thickness</p>
            <p className={styles.standardValue}>60–80 µm</p>
            <p className={styles.standardDesc}>
              Measured with calibrated coating thickness gauge on each batch.
            </p>
          </div>
          <div className={styles.standardCard}>
            <p className={styles.standardLabel}>Inspection records</p>
            <p className={styles.standardValue}>Per batch</p>
            <p className={styles.standardDesc}>
              Tied to the batch ID and retained, available on request.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.stub} style={{ paddingTop: 80, paddingBottom: 100 }}>
        <h2 className={styles.title}>Have a part in mind?</h2>
        <p className={styles.subtitle}>
          Send a drawing or a sketch. We will tell you what is feasible, what
          we&apos;d change, and what it costs.
        </p>
        <Link className={styles.cta} to="/schedule">Book a call</Link>
      </section>
    </Layout>
  );
}
