import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

const values = [
  {
    n: '01',
    title: 'Honest quoting',
    desc: 'A clear, itemised quote with the trade-offs called out. No surprise line items later.',
  },
  {
    n: '02',
    title: 'Quality without theater',
    desc: 'Calibrated instruments, documented procedures, traceable batches. Records, not slogans.',
  },
  {
    n: '03',
    title: 'Take ownership',
    desc: 'A single team owns the part end to end. If something is wrong, we fix it — without finger-pointing.',
  },
  {
    n: '04',
    title: 'Make it last',
    desc: 'We build parts the way we want our own equipment built. Functional, clean, and properly finished.',
  },
  {
    n: '05',
    title: 'Plain language',
    desc: 'No jargon-for-the-sake-of-it. We tell you what is happening and why, in words that mean something.',
  },
  {
    n: '06',
    title: 'Long relationships',
    desc: 'We would rather quote fairly and earn the next order than win one job by underbidding it.',
  },
];

const principles = [
  {
    title: 'One team, end to end',
    desc:
      'Design, manufacturing, finishing, and inspection all sit under the same roof. The person who quotes a job is connected to the person who runs it on the floor. There are fewer handoffs, fewer misunderstandings, and a shorter path between a question and an answer.',
  },
  {
    title: 'Drawings before assumptions',
    desc:
      'When something on a drawing is not clear, we ask. When something is going to cost more than it should, we say so before we cut. We would rather spend an extra ten minutes on a phone call than ship the wrong part.',
  },
  {
    title: 'Records that hold up',
    desc:
      'Inspection notes, mill certificates, finish thicknesses, and batch references are kept and tied together. If a question comes up months later, the records exist to answer it.',
  },
  {
    title: 'Small enough to care, set up to deliver',
    desc:
      'We are not the largest workshop in our city, and that is on purpose. The people who answer your email are the people running your job. The processes are documented enough that nothing depends on heroics.',
  },
];

export default function Company(): ReactNode {
  return (
    <Layout
      title="Company — Deltisan Engineering"
      description="About Deltisan Engineering — design and manufacturing for industrial customers and OEMs.">
      <section className={styles.stub} style={{ paddingBottom: 40 }}>
        <div
          className={styles.heroBanner}
          style={{ backgroundImage: 'url(/img/stock/welding-1.jpg)' }}
          aria-hidden="true"
        />
        <p className={styles.eyebrow}>Company</p>
        <h1 className={styles.title}>
          Engineering, the way it should be — careful, considered, and built to last.
        </h1>
        <p className={styles.subtitle}>
          We work with industrial customers and OEMs who care about fitment,
          finish, and on-time delivery.
        </p>
      </section>

      <section className={styles.proseSection}>
        <div className={styles.prose}>
          <p className={styles.lead}>
            Deltisan Engineering is a design and manufacturing company. We
            take ideas from sketch to shipped product — design, prototype,
            machine, fabricate, finish, and ship — under one roof.
          </p>
          <p>
            Most of what we make is bespoke. Brackets, frames, enclosures,
            fixtures, machined components, and full sub-assemblies built to a
            customer&apos;s drawing or designed alongside our engineers. The
            customers who come back to us tend to share something in common:
            they care about how the part fits, how it looks once it is
            finished, and whether it shows up when it was promised.
          </p>
          <p>
            We are not trying to be the cheapest workshop. We are trying to be
            the workshop you actually want to keep working with — the one that
            answers the phone, asks the right questions before cutting, and
            ships parts that don&apos;t need to come back.
          </p>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <p className={styles.eyebrow}>What we believe</p>
        <h2 className={styles.title} style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
          Six things we will not compromise on.
        </h2>
        <div className={styles.valuesGrid}>
          {values.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <p className={styles.valueNumber}>{v.n}</p>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.processSection} style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className={styles.processTimeline} style={{ marginTop: 0 }}>
          <p
            className={styles.eyebrow}
            style={{ textAlign: 'center', marginBottom: 14 }}>
            How we work
          </p>
          <h2
            className={styles.title}
            style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            The four things that actually matter.
          </h2>
        </div>
        <div className={styles.capRows} style={{ marginTop: 40 }}>
          {principles.map((p, i) => (
            <article key={p.title} className={`${styles.capRow} ${i % 2 === 1 ? styles.alt : ''}`}>
              <div className={styles.capContent} style={{ gridColumn: '1 / -1' }}>
                <p className={styles.capEyebrow}>0{i + 1}</p>
                <h3 className={styles.capTitle}>{p.title}</h3>
                <p className={styles.capDesc} style={{ marginBottom: 0 }}>
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.workshopSection}>
        <div className={styles.workshopSplit}>
          <div
            className={styles.workshopImage}
            style={{ backgroundImage: 'url(/img/stock/workshop-1.jpg)' }}
            aria-hidden="true"
          />
          <div className={styles.workshopCard}>
            <p className={styles.workshopEyebrow}>India head office</p>
            <h2 className={styles.workshopTitle}>
              Where the work is run.
            </h2>
            <p className={styles.workshopDesc}>
              Our India head office in Coimbatore is where engineering,
              quoting, scheduling, and quality oversight come together.
              Production is run through it &mdash; to the same documented
              procedures whether we&apos;re machining, fabricating,
              finishing, or inspecting.
            </p>
            <p className={styles.workshopAddress}>
              <strong>Deltisan Engineering &mdash; India head office</strong>
              <br />
              1/39, Veerappanur,
              <br />
              Coimbatore, Tamil Nadu 641105,
              <br />
              India
            </p>
            <p className={styles.workshopAddress} style={{ marginTop: 12, fontSize: '0.9rem' }}>
              <strong>US sales &amp; contracting</strong>
              <br />
              Deltisan Engineering LLC, Parker, CO &middot;{' '}
              <a href="tel:+17206660405">+1 720-666-0405</a>
            </p>
            <Link className={styles.cta} to="/schedule">
              Book a call
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.stub} style={{ paddingTop: 80, paddingBottom: 100 }}>
        <h2 className={styles.title}>Want to work with us?</h2>
        <p className={styles.subtitle}>
          Send a drawing or a description. We&apos;ll come back with a
          feasibility note and a quote.
        </p>
        <Link className={styles.cta} to="/schedule">Book a call</Link>
      </section>
    </Layout>
  );
}
