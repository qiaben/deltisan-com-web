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
  { name: 'Aluminum 6061 / 7075', meta: 'Sheet, plate, bar — aerospace and structural' },
  { name: 'Stainless 304 / 316 / 17-4', meta: 'Sheet, sections, fasteners' },
  { name: 'Carbon steel (A36 / 1018 / 1045)', meta: 'Sheet, plate, structural sections' },
  { name: 'Tool steel (D2 / A2 / H13)', meta: 'Tooling and fixtures' },
  { name: 'Titanium Grade 5 (6Al-4V)', meta: 'Aerospace and high-strength parts' },
  { name: 'Brass and bronze', meta: 'Bar stock, bushings, components' },
  { name: 'Galvanized steel', meta: 'Pre-galv sheet and tube' },
  { name: 'Engineering plastics', meta: 'Delrin, nylon, UHMW, HDPE on request' },
];

const machineSpecs = [
  { name: 'Chuck', value: '210 mm (8")' },
  { name: 'Max turning diameter', value: '320 mm' },
  { name: 'Max turning length', value: '310 mm' },
  { name: 'Spindle bore', value: '61 mm' },
  { name: 'Spindle nose', value: 'A2-6' },
  { name: 'Spindle speed', value: 'Up to 4,000 rpm' },
  { name: 'Turret', value: '8 stations' },
  { name: 'Tool shank', value: '25 × 25 mm' },
  { name: 'Max boring bar', value: '40 mm' },
  { name: 'X-axis travel', value: '185 mm' },
  { name: 'Z-axis travel', value: '370 mm' },
  { name: 'Rapid traverse (X/Z)', value: '30 m/min' },
  { name: 'Tailstock', value: 'MT-4, 75 mm quill' },
  { name: 'CNC control', value: 'Fanuc / Siemens' },
];

export default function Capabilities(): ReactNode {
  return (
    <Layout
      title="Capabilities — Deltisan Engineering"
      description="Deltisan capabilities: mechanical design, CNC machining, sheet metal, welding, finishing, and quality control. Materials, tolerances, and standards.">
      <section className={styles.stub} style={{ paddingBottom: 40 }}>
        <div
          className={styles.heroBanner}
          style={{ backgroundImage: 'url(/img/facility/cnc-turning-lx20t-wide.jpg)' }}
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

      <section className={styles.equipment}>
        <div className={styles.equipmentHead}>
          <p className={styles.eyebrow}>Equipment</p>
          <h2 className={styles.title} style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            The machines the parts are actually cut on.
          </h2>
          <p className={styles.subtitle}>
            Turning capacity at our Kinathukadavu unit, listed in full so you
            can check your part against it before you send a drawing.
          </p>
        </div>
        <div className={styles.equipmentSplit}>
          <div
            className={styles.equipmentImage}
            style={{ backgroundImage: 'url(/img/facility/cnc-turning-lx20t.jpg)' }}
            role="img"
            aria-label="LMW LX20T L3 horizontal CNC turning centre on the shop floor"
          />
          <div className={styles.equipmentCard}>
            <p className={styles.capEyebrow}>CNC turning centre</p>
            <h3 className={styles.equipmentName}>LMW LX20T L3</h3>
            <p className={styles.equipmentDesc}>
              A horizontal CNC turning centre built for high-precision,
              high-repeatability production turning &mdash; an 8-station
              turret, a 61 mm spindle bore, and 4,000 rpm on the spindle.
              Available with Fanuc or Siemens control.
            </p>
            <div className={styles.specTable}>
              {machineSpecs.map((sp) => (
                <div key={sp.name} className={styles.specLine}>
                  <p className={styles.specName}>{sp.name}</p>
                  <p className={styles.specFigure}>{sp.value}</p>
                </div>
              ))}
            </div>
          </div>
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
