import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Company(): ReactNode {
  return (
    <Layout
      title="Company — Deltisan Engineering"
      description="Deltisan Engineering — design and manufacturing in Coimbatore, Tamil Nadu, India.">
      <section className={styles.stub}>
        <div
          className={styles.heroBanner}
          style={{ backgroundImage: 'url(/img/stock/welding-1.jpg)' }}
          aria-hidden="true"
        />
        <p className={styles.eyebrow}>Company</p>
        <h1 className={styles.title}>Engineering, the way it should be — careful, considered, and built to last.</h1>
        <p className={styles.subtitle}>
          Deltisan Engineering is based in Coimbatore, Tamil Nadu. We work
          with industrial customers and OEMs across India who care about
          fitment, finish, and on-time delivery.
        </p>
        <Link className={styles.cta} to="/contact">Get in touch</Link>
      </section>
    </Layout>
  );
}
