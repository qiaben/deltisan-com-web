import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function CtaBar(): ReactNode {
  return (
    <div className={styles.ctaBar}>
      <div className={styles.ctaText}>
        <h3 className={styles.ctaTitle}>Got a part to make?</h3>
        <p className={styles.ctaSubtitle}>
          Send a drawing or a description. We&apos;ll come back with a
          feasibility note and an honest quote within one business day.
        </p>
      </div>
      <div className={styles.ctaActions}>
        <Link to="/quote" className={styles.ctaPrimary}>Get a quote</Link>
        <Link to="/schedule" className={styles.ctaSecondary}>Book a call ›</Link>
      </div>
    </div>
  );
}

function ContactBlock(): ReactNode {
  return (
    <div className={styles.contactBlock}>
      <h4 className={styles.colTitle}>Contact</h4>
      <address className={styles.address}>
        <strong>Deltisan Engineering LLC</strong>
        14922 Chicago St,<br />
        Parker, CO 80134
        <br />
        United States
      </address>
      <a className={styles.contactLink} href="tel:+17206660405">
        <svg className={styles.contactIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24c1.12.37 2.33.57 3.54.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.21.2 2.42.57 3.54a1 1 0 0 1-.24 1.05l-2.21 2.2z" />
        </svg>
        720-666-0405
      </a>
      <a className={styles.contactLink} href="mailto:info@deltisan.com">
        <svg className={styles.contactIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
        info@deltisan.com
      </a>
      <p className={styles.hours}>
        <svg className={styles.contactIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm.5-13H11v6l5.2 3.1.8-1.3-4.5-2.7z" />
        </svg>
        Mon&ndash;Fri, 8:00 AM &ndash; 5:00 PM MT
      </p>
    </div>
  );
}

function LinkColumn({title, items}: {title: string; items: {label: string; to?: string; href?: string}[]}): ReactNode {
  return (
    <div className={styles.linkCol}>
      <h4 className={styles.colTitle}>{title}</h4>
      <ul className={styles.linkList}>
        {items.map((item) =>
          item.href ? (
            <li key={item.label}><a href={item.href}>{item.label}</a></li>
          ) : (
            <li key={item.label}><Link to={item.to!}>{item.label}</Link></li>
          )
        )}
      </ul>
    </div>
  );
}

function Badges(): ReactNode {
  const badges = [
    {label: 'Made in USA', sub: 'Parker, CO'},
    {label: 'Woman-Owned', sub: 'Small business'},
    {label: 'ISO 9001', sub: 'Pursuing'},
    {label: 'US Small Business', sub: 'Registered'},
  ];
  return (
    <div className={styles.badgeRow}>
      {badges.map((b) => (
        <div key={b.label} className={styles.badge}>
          <strong>{b.label}</strong>
          <span>{b.sub}</span>
        </div>
      ))}
    </div>
  );
}

export default function Footer(): ReactNode {
  const logo = useBaseUrl('/img/logo.png');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <CtaBar />

        <div className={styles.cols}>
          <div className={styles.brandCol}>
            <Link to="/" className={styles.brandLink} aria-label="Deltisan Engineering home">
              <img src={logo} alt="Deltisan Engineering" className={styles.brandLogo} />
              <span className={styles.brandName}>Deltisan</span>
            </Link>
            <p className={styles.brandTagline}>
              Colorado precision engineering. Design, machining, fabrication,
              and finishing &mdash; built to spec, inspected to spec.
            </p>
            <Badges />
          </div>

          <ContactBlock />

          <LinkColumn
            title="Work"
            items={[
              {label: 'Capabilities', to: '/capabilities'},
              {label: 'Products', to: '/products'},
              {label: 'Process', to: '/process'},
              {label: 'Journal', to: '/blog'},
              {label: 'Get a quote', to: '/quote'},
            ]}
          />

          <LinkColumn
            title="Company"
            items={[
              {label: 'About Deltisan', to: '/company'},
              {label: 'Book a call', to: '/schedule'},
              {label: 'Contact', to: '/contact'},
              {label: 'Privacy', to: '/privacy'},
              {label: 'Terms', to: '/terms'},
            ]}
          />
        </div>

        <p className={styles.serviceArea}>
          <strong>Serving:</strong> Parker · Denver · Lakewood · Aurora ·
          Centennial · Englewood · Highlands Ranch · Castle Rock · Boulder
          · Colorado Springs &mdash; with nationwide US shipping and export
          support on request.
        </p>

        <div className={styles.bottomBar}>
          <span>© {year} Deltisan Engineering LLC. All rights reserved.</span>
          <span className={styles.bottomLinks}>
            <Link to="/privacy">Privacy</Link>
            <span aria-hidden="true">·</span>
            <Link to="/terms">Terms</Link>
            <span aria-hidden="true">·</span>
            <a href="mailto:info@deltisan.com">info@deltisan.com</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
