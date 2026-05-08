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
    eyebrow: 'Engineering · in-house',
    title: 'Mechanical design and DFM',
    desc: 'Drawings, DFM, and tolerance work done by Deltisan engineers — and the same engineers stay on the part through production.',
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
    eyebrow: 'CNC machining · partner network',
    title: 'Turning and milling for precision parts',
    desc: 'Run through specialist machine shops we vet, brief, and inspect. We pick the right partner for the part — capability, capacity, and consistency.',
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
    eyebrow: 'Sheet metal · partner network',
    title: 'Cutting, forming, and joining',
    desc: 'From single brackets to large enclosures, through fabricators we work with regularly. Consistent bend radii and clean joints because we control the spec, not just the order.',
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
    eyebrow: 'Welding & fabrication · partner network',
    title: 'MIG, TIG, and structural fabrication',
    desc: 'Welded under documented procedures by qualified welders in our partner shops. Stress-relieved when the application calls for it.',
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
    eyebrow: 'Surface finishing · partner network',
    title: 'Powder coat, paint, and plating',
    desc: 'Pre-treated, masked, and finished to spec by finishing partners — not just sprayed on. Colour, texture, and thickness controlled and verified.',
    image: '/img/stock/welding-3.jpg',
    bullets: [
      'Powder coating',
      'Wet painting (industrial)',
      'Phosphate pre-treatment',
      'Zinc plating',
      'Galvanising',
      'Brushed / polished finishes',
    ],
  },
  {
    eyebrow: 'Quality control · in-house',
    title: 'Calibrated, documented, traceable',
    desc: '100% inspection on critical dimensions — done by Deltisan engineers before anything leaves us. Calibrated instruments, inspection reports tied to the batch.',
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
        <h1 className={styles.title}>Engineering and QC, in-house. Production, where it runs best.</h1>
        <p className={styles.subtitle}>
          Deltisan is the engineering team and the inspection bench.
          Production runs through a vetted network of specialist workshops —
          chosen per part, briefed by us, and inspected before anything ships.
        </p>
        <Link className={styles.cta} to="/schedule">Book a call</Link>
      </section>

      <section className={styles.proseSection} style={{ paddingTop: 40, paddingBottom: 0 }}>
        <div className={styles.prose}>
          <p className={styles.lead}>
            How it works.
          </p>
          <p>
            Most workshops do one or two things well and try to win every
            order. We do it differently. Deltisan is the engineering and
            quality team — we own design, sourcing, oversight, and
            inspection. Production happens at the partner workshop best
            suited to your part, not the one we happen to run.
          </p>
          <p>
            For you, that means a single accountable point of contact, a
            shop matched to the job, and a part that is inspected by us
            before it leaves. For us, it means we never compromise capability
            for the sake of keeping a machine busy.
          </p>
        </div>
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
        <p className={styles.eyebrow}>Materials we spec and source</p>
        <h2 className={styles.title} style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
          Steel, stainless, aluminium, and the rest.
        </h2>
        <p className={styles.subtitle}>
          Specified by Deltisan, sourced from vetted suppliers with traceable
          mill certificates. Specials on request.
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
            What we hold partners to. What we inspect.
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
