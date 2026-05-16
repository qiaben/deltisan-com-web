import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Contact(): ReactNode {
  return (
    <Layout
      title="Contact — Deltisan Engineering"
      description="Contact Deltisan Engineering in Parker, Colorado. Email, phone, address, and a 30-minute call booking.">
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
            <div className={styles.contactLabel}>Phone</div>
            <a className={styles.contactValue} href="tel:+17206660405">
              720-666-0405
            </a>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>Email</div>
            <a className={styles.contactValue} href="mailto:info@deltisan.com">
              info@deltisan.com
            </a>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>Request a Quote</div>
            <Link className={styles.contactValue} to="/quote">
              Upload your drawing
            </Link>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>Book a call</div>
            <Link className={styles.contactValue} to="/schedule">
              calendly.com/deltisan/30min
            </Link>
          </div>
          <div className={styles.contactCard} style={{ gridColumn: '1 / -1' }}>
            <div className={styles.contactLabel}>Head Office</div>
            <div className={styles.contactValue}>
              Deltisan Engineering LLC
              <br />
              14922 Chicago St,
              <br />
              Parker, CO 80134, United States
            </div>
            <div className={styles.contactHours}>
              Monday &ndash; Friday, 8:00 AM &ndash; 5:00 PM Mountain Time
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className={styles.cta} to="/quote">
            Get a quote
          </Link>
          <Link
            className={styles.cta}
            style={{ background: 'transparent', color: 'var(--d-accent)', border: '1px solid var(--d-border)' }}
            to="/schedule">
            Book a call
          </Link>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.mapWrap}>
          <iframe
            title="Deltisan Engineering location map"
            src="https://www.google.com/maps?q=14922+Chicago+St,+Parker,+CO+80134&output=embed"
            width="100%"
            height="420"
            style={{ border: 0, borderRadius: 18 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <section className={styles.stub} style={{ paddingTop: 60, paddingBottom: 100 }}>
        <p className={styles.eyebrow}>Service area</p>
        <h2 className={styles.title} style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
          Built in Parker. Shipped across Colorado and the country.
        </h2>
        <p className={styles.subtitle}>
          We serve customers across the Denver metro and Front Range &mdash;
          Parker, Lakewood, Aurora, Centennial, Englewood, Highlands Ranch,
          Castle Rock, Denver, Boulder, and Colorado Springs &mdash; with
          nationwide US shipping and export support on request.
        </p>
      </section>
    </Layout>
  );
}
