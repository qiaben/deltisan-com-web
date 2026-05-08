import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Contact(): ReactNode {
  return (
    <Layout
      title="Contact — Deltisan Engineering"
      description="Contact Deltisan Engineering. Phone, email, and address.">
      <section className={styles.stub}>
        <p className={styles.eyebrow}>Get in touch</p>
        <h1 className={styles.title}>Talk to an engineer.</h1>
        <p className={styles.subtitle}>
          Send a drawing, a sketch, or a question. We&apos;ll come back with
          a feasibility note and an honest quote.
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>Contact person</div>
            <div className={styles.contactValue}>Suhesma Sri</div>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>Phone</div>
            <a className={styles.contactValue} href="tel:+919363332913">
              +91 93633 32913
            </a>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>Email</div>
            <a className={styles.contactValue} href="mailto:deltisanengineering@gmail.com">
              deltisanengineering@gmail.com
            </a>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>India Head Office</div>
            <div className={styles.contactValue}>
              1/39, Veerappanur,
              <br />
              Coimbatore, Tamil Nadu
              <br />
              641105, India
            </div>
          </div>
        </div>

        <a
          className={styles.cta}
          href="mailto:deltisanengineering@gmail.com?subject=Quote%20request">
          Email us a drawing
        </a>
      </section>
    </Layout>
  );
}
