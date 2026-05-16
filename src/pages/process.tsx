import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

const steps = [
  {
    title: 'Brief',
    desc: 'Send a sketch, a CAD file, or a description. We ask the questions that matter — quantity, finish, fitment, tolerances, deadline.',
    image: '/img/stock/blueprint-1.jpg',
  },
  {
    title: 'Design & DFM review',
    desc: 'Our engineers review your drawing for manufacturability and call out anything that will hurt cost or quality. If you don’t have a drawing yet, we make one.',
    image: '/img/stock/blueprint-2.jpg',
  },
  {
    title: 'Quote',
    desc: 'A clear, itemised quote with material, processes, finish, batch size, and lead time. No surprise line items later.',
    image: '/img/stock/blueprint-1.jpg',
  },
  {
    title: 'Prototype',
    desc: 'For new or critical parts we build a first-article so you can hold it before committing to a production run.',
    image: '/img/stock/cnc-3.jpg',
  },
  {
    title: 'Material procurement',
    desc: 'We source steel, aluminium, stainless, fasteners, and consumables from vetted suppliers with traceable mill certificates.',
    image: '/img/stock/sheet-metal-3.jpg',
  },
  {
    title: 'Manufacture',
    desc: 'CNC machining, sheet-metal cutting and forming, welding, and structural fabrication — done in-house with documented procedures.',
    image: '/img/stock/cnc-1.jpg',
  },
  {
    title: 'Finish',
    desc: 'Powder coating, painting, plating, or other surface treatments to your spec, with colour and finish controlled to standards.',
    image: '/img/stock/welding-3.jpg',
  },
  {
    title: 'Inspection',
    desc: 'Calibrated instruments, documented tolerances, and 100% inspection on critical dimensions. Inspection reports on request.',
    image: '/img/stock/cnc-2.jpg',
  },
  {
    title: 'Pack & dispatch',
    desc: 'Sub-assembly, fitment checks, and ready-to-ship packaging. Nationwide US dispatch with export support on request.',
    image: '/img/stock/workshop-1.jpg',
  },
];

export default function Process(): ReactNode {
  return (
    <Layout
      title="Process — Deltisan Engineering"
      description="The Deltisan process: brief, design, quote, prototype, material, manufacture, finish, inspect, dispatch.">
      <section className={styles.stub} style={{ paddingBottom: 40 }}>
        <div
          className={styles.heroBanner}
          style={{ backgroundImage: 'url(/img/stock/workshop-1.jpg)' }}
          aria-hidden="true"
        />
        <p className={styles.eyebrow}>Process</p>
        <h1 className={styles.title}>From sketch to shipped, in one workshop.</h1>
        <p className={styles.subtitle}>
          A single team owns the part end to end, with documented checkpoints
          at every stage. Here is how an order moves through Deltisan.
        </p>
      </section>

      <section className={styles.processSection} style={{ paddingTop: 20 }}>
        <div className={styles.processTimeline}>
          {steps.map((s, i) => (
            <div key={s.title} className={styles.processStep}>
              <div className={styles.processNumber}>{String(i + 1).padStart(2, '0')}</div>
              <div className={styles.processBody}>
                <h3 className={styles.processTitle}>{s.title}</h3>
                <p className={styles.processDesc}>{s.desc}</p>
              </div>
              <div
                className={styles.processImage}
                style={{ backgroundImage: `url(${s.image})` }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        <div className={styles.qualityCallout}>
          <h3 className={styles.qualityTitle}>Quality, in plain English</h3>
          <p className={styles.qualityDesc}>
            We use calibrated instruments, follow documented procedures, and
            keep traceable records for every batch. If something is wrong, we
            tell you, and we make it right. That&apos;s the deal.
          </p>
        </div>
      </section>

      <section className={styles.stub} style={{ paddingTop: 60, paddingBottom: 100 }}>
        <h2 className={styles.title}>Ready to start a project?</h2>
        <p className={styles.subtitle}>
          Send a drawing or a description and we&apos;ll move you straight to
          step one.
        </p>
        <Link className={styles.cta} to="/schedule">Book a call</Link>
      </section>
    </Layout>
  );
}
