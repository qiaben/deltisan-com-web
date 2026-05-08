import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

const products = [
  {
    image: '/img/stock/sheet-metal-1.jpg',
    title: 'Brackets & mounts',
    desc: 'Wall mounts, machine brackets, and load-bearing supports cut, formed, welded, and finished.',
    meta: 'Sheet metal · Welded',
  },
  {
    image: '/img/stock/welding-3.jpg',
    title: 'Frames & structures',
    desc: 'Trolleys, machine frames, and structural assemblies in mild steel and stainless.',
    meta: 'Fabrication · Powder coat',
  },
  {
    image: '/img/stock/sheet-metal-2.jpg',
    title: 'Enclosures & cabinets',
    desc: 'Electrical enclosures, control cabinets, and IP-rated housings to your dimensions.',
    meta: 'Sheet metal · Painted',
  },
  {
    image: '/img/stock/cnc-2.jpg',
    title: 'Machined components',
    desc: 'Turned and milled parts in steel, aluminium, and brass — production runs and one-offs.',
    meta: 'CNC · Turning · Milling',
  },
  {
    image: '/img/stock/blueprint-2.jpg',
    title: 'Fixtures & jigs',
    desc: 'Welding fixtures, assembly jigs, and inspection gauges built to your process.',
    meta: 'Tooling · Custom',
  },
  {
    image: '/img/stock/cnc-3.jpg',
    title: 'Sub-assemblies',
    desc: 'Partial or fully built assemblies, packaged and ready for your line.',
    meta: 'Assembly · Pack',
  },
  {
    image: '/img/stock/welding-1.jpg',
    title: 'Spare parts to drawing',
    desc: 'Replacement parts and small-batch components from a sketch, drawing, or sample.',
    meta: 'Reverse-engineered',
  },
  {
    image: '/img/stock/sheet-metal-3.jpg',
    title: 'OEM components',
    desc: 'Repeating production work for OEM customers under supply agreements.',
    meta: 'Repeat · Scheduled',
  },
  {
    image: '/img/stock/workshop-1.jpg',
    title: 'Custom builds',
    desc: 'Whatever you need that is not on this page. Send us a drawing and we will quote it.',
    meta: 'On request',
  },
];

const industries = [
  { title: 'Industrial automation', desc: 'Brackets, frames, guards, fixtures.' },
  { title: 'Electrical & electronics', desc: 'Enclosures, cabinets, panel hardware.' },
  { title: 'Automotive & after-market', desc: 'Mounts, jigs, tooling, spares.' },
  { title: 'Renewables', desc: 'Solar mounting and structural components.' },
  { title: 'Agricultural machinery', desc: 'Frames, brackets, fittings, replacement parts.' },
  { title: 'Material handling', desc: 'Trolleys, racks, conveyors, fabricated structures.' },
  { title: 'OEM & contract mfg', desc: 'Repeat production under supply agreements.' },
  { title: 'Architectural', desc: 'Custom metalwork, railings, signage frames.' },
];

export default function Products(): ReactNode {
  return (
    <Layout
      title="Products — Deltisan Engineering"
      description="Deltisan products and custom assemblies: brackets, frames, enclosures, fixtures, machined components, OEM parts, and bespoke builds.">
      <section className={styles.stub} style={{ paddingBottom: 40 }}>
        <div
          className={styles.heroBanner}
          style={{ backgroundImage: 'url(/img/stock/sheet-metal-1.jpg)' }}
          aria-hidden="true"
        />
        <p className={styles.eyebrow}>Products</p>
        <h1 className={styles.title}>Custom assemblies, repeatably built.</h1>
        <p className={styles.subtitle}>
          Most of our work is bespoke — built to your drawing or designed
          alongside our engineers. The categories below are a sample of what
          we ship every week.
        </p>
        <Link className={styles.cta} to="/schedule">Book a call</Link>
      </section>

      <section className={styles.productSection} style={{ paddingTop: 40 }}>
        <div className={styles.productGrid}>
          {products.map((p) => (
            <article key={p.title} className={styles.productCard}>
              <div
                className={styles.productImage}
                style={{ backgroundImage: `url(${p.image})` }}
                aria-hidden="true"
              />
              <div className={styles.productBody}>
                <h3 className={styles.productTitle}>{p.title}</h3>
                <p className={styles.productDesc}>{p.desc}</p>
                <span className={styles.productMeta}>{p.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.industries}>
        <p className={styles.eyebrow}>Industries we serve</p>
        <h2 className={styles.title} style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
          Wherever metal needs to be cut, formed, or joined.
        </h2>
        <div className={styles.industriesGrid}>
          {industries.map((i) => (
            <div key={i.title} className={styles.industry}>
              <h4 className={styles.industryTitle}>{i.title}</h4>
              <p className={styles.industryDesc}>{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.stub} style={{ paddingTop: 80, paddingBottom: 100 }}>
        <h2 className={styles.title}>Have a drawing? Let&apos;s build it.</h2>
        <p className={styles.subtitle}>
          Send a CAD file, a sketch, or a sample. We&apos;ll come back with a
          feasibility note and an honest quote.
        </p>
        <Link className={styles.cta} to="/schedule">Book a call</Link>
      </section>
    </Layout>
  );
}
