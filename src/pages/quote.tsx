import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdbrkar';

export default function Quote(): ReactNode {
  return (
    <Layout
      title="Request a Quote — Deltisan Engineering"
      description="Request a manufacturing quote from Deltisan Engineering. Upload your drawing (STEP, IGES, STL, DXF, PDF) and we'll come back with a feasibility note and a quote.">
      <section className={styles.stub} style={{ paddingTop: 120, paddingBottom: 32 }}>
        <p className={styles.eyebrow}>Request a Quote</p>
        <h1 className={styles.title}>Send us a drawing. Get an honest quote.</h1>
        <p className={styles.subtitle}>
          Upload a STEP, IGES, STL, DXF, or PDF and tell us a bit about the
          part. We&apos;ll come back within one business day with a feasibility
          note, lead time, and a clear quote &mdash; or a straight answer if we
          aren&apos;t the right shop for the job.
        </p>
      </section>

      <section className={styles.quoteSection}>
        <form
          className={styles.quoteForm}
          action={FORMSPREE_ENDPOINT}
          method="POST"
          encType="multipart/form-data">
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="name">Name *</label>
              <input id="name" name="name" type="text" required autoComplete="name" />
            </div>
            <div className={styles.formField}>
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" autoComplete="organization" />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="email">Email *</label>
              <input id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className={styles.formField}>
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="industry">Industry</label>
              <select id="industry" name="industry" defaultValue="">
                <option value="" disabled>Choose one…</option>
                <option>Aerospace</option>
                <option>Oil, gas &amp; energy</option>
                <option>Industrial machinery / OEM</option>
                <option>Research / university</option>
                <option>Other</option>
              </select>
            </div>
            <div className={styles.formField}>
              <label htmlFor="material">Primary material</label>
              <select id="material" name="material" defaultValue="">
                <option value="" disabled>Choose one…</option>
                <option>Aluminum 6061 / 7075</option>
                <option>Stainless 304 / 316 / 17-4</option>
                <option>Carbon steel</option>
                <option>Tool steel</option>
                <option>Titanium Grade 5</option>
                <option>Brass / bronze</option>
                <option>Engineering plastics</option>
                <option>Other / not sure</option>
              </select>
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label htmlFor="quantity">Quantity</label>
              <input id="quantity" name="quantity" type="text" placeholder="e.g. 25 prototypes, or 500/year" />
            </div>
            <div className={styles.formField}>
              <label htmlFor="tolerance">Tolerance class</label>
              <select id="tolerance" name="tolerance" defaultValue="">
                <option value="" disabled>Choose one…</option>
                <option>Standard (±0.005&quot;)</option>
                <option>Precision (±0.001&quot;)</option>
                <option>Tight (±0.0005&quot; or better)</option>
                <option>Per drawing</option>
                <option>Not sure</option>
              </select>
            </div>
          </div>

          <div className={styles.formField}>
            <label htmlFor="leadTime">Target lead time</label>
            <input id="leadTime" name="leadTime" type="text" placeholder="e.g. 3 weeks, end of next month, ASAP" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="description">Project description *</label>
            <textarea
              id="description"
              name="description"
              rows={5}
              required
              placeholder="What is the part? What does it need to do? Any finish, certification, or qualification requirements?"
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="drawings">Drawings &amp; files</label>
            <input
              id="drawings"
              name="drawings"
              type="file"
              multiple
              accept=".step,.stp,.iges,.igs,.stl,.dxf,.dwg,.pdf,.zip,.x_t,.x_b,.sldprt,.sldasm"
            />
            <small className={styles.formHelp}>
              Accepted: STEP, IGES, STL, DXF, DWG, PDF, Solidworks, Parasolid,
              ZIP. Up to 25 MB per file. Confidential by default &mdash; see
              note below.
            </small>
          </div>

          <div className={styles.formField}>
            <label className={styles.formCheckbox}>
              <input type="checkbox" name="nda" value="yes" />
              <span>I&apos;d like an NDA in place before review</span>
            </label>
          </div>

          <div className={styles.ndaNote}>
            <strong>Confidentiality.</strong> Drawings and project files you
            send are treated as confidential and used only to evaluate, quote,
            and produce your work. We&apos;re happy to sign a Non-Disclosure
            Agreement on request before reviewing sensitive designs.
          </div>

          <button type="submit" className={styles.cta} style={{ alignSelf: 'flex-start', marginTop: 8 }}>
            Send request
          </button>

          <p className={styles.formHelp} style={{ marginTop: 12 }}>
            We respond within one business day. For anything urgent,
            call <a href="tel:+17206660405">+1 720-666-0405</a> or email{' '}
            <a href="mailto:info@deltisan.com">info@deltisan.com</a>.
          </p>
        </form>
      </section>

      <section className={styles.stub} style={{ paddingTop: 80, paddingBottom: 100 }}>
        <h2 className={styles.title} style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
          Prefer to talk first?
        </h2>
        <p className={styles.subtitle}>
          Book a 30-minute call and we&apos;ll walk through your part live.
        </p>
        <Link className={styles.cta} to="/schedule">Book a call</Link>
      </section>
    </Layout>
  );
}
