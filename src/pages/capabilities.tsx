import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Capabilities(): ReactNode {
  return (
    <Layout
      title="Capabilities — Deltisan Engineering"
      description="Deltisan capabilities: mechanical design, CNC machining, sheet metal, welding, fabrication, finishing, and quality control.">
      <section className={styles.stub}>
        <p className={styles.eyebrow}>Capabilities</p>
        <h1 className={styles.title}>Design and manufacturing under one roof.</h1>
        <p className={styles.subtitle}>
          Mechanical design, CNC machining, sheet metal fabrication, welding,
          surface finishing, and quality control. Detailed capability sheets
          are available on request.
        </p>
        <Link className={styles.cta} to="/contact">Discuss your part</Link>
      </section>
    </Layout>
  );
}
