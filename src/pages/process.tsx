import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Process(): ReactNode {
  return (
    <Layout
      title="Process — Deltisan Engineering"
      description="The Deltisan process: from concept through design, prototyping, manufacturing, finishing, QC, and dispatch.">
      <section className={styles.stub}>
        <p className={styles.eyebrow}>Process</p>
        <h1 className={styles.title}>From sketch to shipped, in one workshop.</h1>
        <p className={styles.subtitle}>
          Concept → design → prototype → manufacture → finish → inspect →
          dispatch. A single team owns the part end to end, with documented
          checkpoints at every stage.
        </p>
        <Link className={styles.cta} to="/contact">Start a project</Link>
      </section>
    </Layout>
  );
}
