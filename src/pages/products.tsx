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
        <p className={styles.eyebrow}>Products</p>
        <h1 className={styles.title}>Custom assemblies, repeatably built.</h1>
        <p className={styles.subtitle}>
          Brackets, frames, enclosures, fixtures, and complete sub-assemblies
          built to your drawing or designed alongside our engineers. Product
          gallery coming soon.
        </p>
        <Link className={styles.cta} to="/contact">Request a quote</Link>
      </section>
    </Layout>
  );
}
