import { useEffect, type ReactNode } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './_stub.module.css';

const CALENDLY_URL = 'https://calendly.com/deltisan/30min';

function CalendlyWidget(): ReactNode {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (existing) return;

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={CALENDLY_URL}
      style={{ minWidth: 320, height: 700, width: '100%' }}
    />
  );
}

export default function Schedule(): ReactNode {
  return (
    <Layout
      title="Book a call — Deltisan Engineering"
      description="Pick a 30-minute slot to talk to Deltisan about your project. Send a drawing or a description, and we'll prepare for the call.">
      <section className={styles.stub} style={{ paddingTop: 120, paddingBottom: 32 }}>
        <p className={styles.eyebrow}>Schedule</p>
        <h1 className={styles.title}>Book a 30-minute call.</h1>
        <p className={styles.subtitle}>
          Pick a time that works for you. We&apos;ll spend the call talking
          about what you need built — material, finish, quantity, deadline —
          and what makes sense for the part. No prep required, but a drawing
          helps.
        </p>
      </section>

      <section className={styles.scheduleSection}>
        <div className={styles.scheduleWrap}>
          <BrowserOnly fallback={<div style={{ height: 700 }} aria-hidden="true" />}>
            {() => <CalendlyWidget />}
          </BrowserOnly>
        </div>
      </section>

      <section className={styles.stub} style={{ paddingTop: 60, paddingBottom: 100 }}>
        <h2 className={styles.title} style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
          Prefer email?
        </h2>
        <p className={styles.subtitle}>
          Send your drawing or description to{' '}
          <a href="mailto:info@deltisan.com">info@deltisan.com</a>{' '}
          and we&apos;ll come back with a feasibility note and a quote.
        </p>
      </section>
    </Layout>
  );
}
