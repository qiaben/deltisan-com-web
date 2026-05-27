import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Contact(): ReactNode {
  return (
    <Layout
      title="Contact — Deltisan Engineering"
      description="Contact Deltisan Engineering. US-registered, manufactured in Coimbatore, India. Email, phone, addresses, and a 30-minute call booking.">
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
            <div className={styles.contactLabel}>Phone (US)</div>
            <a className={styles.contactValue} href="tel:+17206660405">
              +1 720-666-0405
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
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>US sales &amp; contracting</div>
            <div className={styles.contactValue}>
              Deltisan Engineering LLC
              <br />
              6222 E Pine Lane,
              <br />
              Suite 6212 #1075,
              <br />
              Parker, CO 80138, United States
            </div>
            <div className={styles.contactHours}>
              Mon &ndash; Fri, 8:00 AM &ndash; 5:00 PM Mountain Time
            </div>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>India head office</div>
            <div className={styles.contactValue}>
              Deltisan Engineering &mdash; India
              <br />
              1/39, Veerappanur,
              <br />
              Coimbatore, Tamil Nadu 641105,
              <br />
              India
            </div>
            <div className={styles.contactHours}>
              Mon &ndash; Sat, 9:00 AM &ndash; 6:00 PM IST
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
            title="Deltisan Engineering US sales office map"
            src="https://www.google.com/maps?q=6222+E+Pine+Lane,+Parker,+CO+80138&output=embed"
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
        <p className={styles.eyebrow}>How we work globally</p>
        <h2 className={styles.title} style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
          US contracts. Indian manufacturing. Global delivery.
        </h2>
        <p className={styles.subtitle}>
          Deltisan Engineering LLC is a Colorado-registered company that
          contracts, invoices, and supports customers under US law.
          Production happens in India, coordinated from our Coimbatore head
          office &mdash; to your drawings or to ours when you need design
          support &mdash; and ships worldwide to the US, EU, UK, Canada,
          Australia, and Asia on documented commercial terms.
        </p>
      </section>
    </Layout>
  );
}
