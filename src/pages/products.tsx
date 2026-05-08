import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Products(): ReactNode {
  return (
    <Layout
      title="Products — Deltisan Engineering"
      description="Deltisan products and custom assemblies: brackets, frames, enclosures, and bespoke components for industrial and OEM customers.">
      <section className={styles.stub}>
        <div
          className={styles.heroBanner}
          style={{ backgroundImage: 'url(/img/stock/sheet-metal-1.jpg)' }}
          aria-hidden="true"
        />
        <p className={styles.eyebrow}>Products</p>
        <h1 className={styles.title}>Custom assemblies, repeatably built.</h1>
        <p className={styles.subtitle}>
          Brackets, frames, enclosures, fixtures, and complete sub-assemblies
          built to your drawing or designed alongside our engineers. Product
          gallery coming soon.
        </p>
        <Link className={styles.cta} to="/contact">Request a quote</Link>
        <div className={styles.imageStrip} aria-hidden="true">
          <div style={{ backgroundImage: 'url(/img/stock/cnc-2.jpg)' }} />
          <div style={{ backgroundImage: 'url(/img/stock/sheet-metal-3.jpg)' }} />
          <div style={{ backgroundImage: 'url(/img/stock/welding-3.jpg)' }} />
        </div>
      </section>
    </Layout>
  );
}
