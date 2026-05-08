import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Contact(): ReactNode {
  return (
    <Layout
      title="Contact — Deltisan Engineering"
      description="Contact Deltisan Engineering. Email, address, and Calendly booking.">
      <section className={styles.stub}>
        <p className={styles.eyebrow}>Get in touch</p>
        <h1 className={styles.title}>Talk to an engineer.</h1>
        <p className={styles.subtitle}>
          Send a drawing, a sketch, or a question. We&apos;ll come back with
          a feasibility note and an honest quote. Or pick a time directly on
          our calendar.
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>Book a call</div>
            <Link className={styles.contactValue} to="/schedule">
              calendly.com/deltisan/30min
            </Link>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>Email</div>
            <a className={styles.contactValue} href="mailto:info@deltisan.com">
              info@deltisan.com
            </a>
          </div>
          <div className={styles.contactCard} style={{ gridColumn: '1 / -1' }}>
            <div className={styles.contactLabel}>India Head Office</div>
            <div className={styles.contactValue}>
              Deltisan Engineering
              <br />
              1/39, Veerappanur,
              <br />
              Coimbatore, Tamil Nadu 641105, India
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className={styles.cta} to="/schedule">
            Book a 30-min call
          </Link>
          <a
            className={styles.cta}
            style={{ background: 'transparent', color: 'var(--d-accent)', border: '1px solid var(--d-border)' }}
            href="mailto:info@deltisan.com?subject=Quote%20request">
            Email us a drawing
          </a>
        </div>
      </section>
    </Layout>
  );
}
