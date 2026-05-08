import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './_stub.module.css';

export default function Privacy(): ReactNode {
  return (
    <Layout
      title="Privacy Policy — Deltisan Engineering"
      description="Deltisan Engineering Privacy Policy. How we collect and protect personal information from website visitors and customers.">
      <main className={styles.legalContainer}>
        <article className={styles.legal}>
          <Heading as="h1">Privacy Policy</Heading>
          <p className={styles.legalMeta}>
            <strong>Effective Date:</strong> May 8, 2026 &nbsp;|&nbsp;{' '}
            <strong>Last Updated:</strong> May 8, 2026
          </p>

          <p>
            Deltisan Engineering (&ldquo;Deltisan,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects the privacy of
            visitors to{' '}
            <a href="https://deltisan.com">deltisan.com</a> and of our
            customers. This Privacy Policy describes the personal
            information we collect and how we use it.
          </p>

          <Heading as="h2">1. Information We Collect</Heading>
          <ul>
            <li>
              <strong>Contact information you provide:</strong> name,
              company, email, phone number, and any details you share when
              you request a quote, send a drawing, or otherwise contact us.
            </li>
            <li>
              <strong>Project information:</strong> drawings, CAD files,
              specifications, and other technical material you send for the
              purpose of obtaining a quotation or production work.
            </li>
            <li>
              <strong>Website usage data:</strong> standard server logs
              including IP address, browser type, pages visited, and
              timestamps. We use cookies only as needed for basic site
              functionality.
            </li>
          </ul>

          <Heading as="h2">2. How We Use Information</Heading>
          <ul>
            <li>To respond to enquiries and prepare quotations.</li>
            <li>To design, manufacture, and deliver products you order.</li>
            <li>To send invoices and operational communications.</li>
            <li>To comply with applicable Indian law and tax requirements.</li>
            <li>To improve our website and services.</li>
          </ul>
          <p>We do not sell personal information.</p>

          <Heading as="h2">3. Confidentiality of Drawings and Designs</Heading>
          <p>
            Drawings, CAD files, and technical material you share with us are
            treated as confidential. We use this material only to evaluate,
            quote, and produce your work, and we restrict access to staff
            who need it. We are happy to sign a Non-Disclosure Agreement on
            request before reviewing sensitive designs.
          </p>

          <Heading as="h2">4. Sharing of Information</Heading>
          <p>We may share information with:</p>
          <ul>
            <li>
              <strong>Suppliers and subcontractors</strong> only as needed
              to source materials or perform specialised processes for your
              order.
            </li>
            <li>
              <strong>Logistics providers</strong> for dispatch and delivery.
            </li>
            <li>
              <strong>Government and tax authorities</strong> as required
              by law.
            </li>
          </ul>

          <Heading as="h2">5. Data Retention</Heading>
          <p>
            We retain customer records, drawings, and correspondence for as
            long as needed to fulfil our contractual obligations and to
            comply with statutory record-keeping requirements under Indian
            law.
          </p>

          <Heading as="h2">6. Security</Heading>
          <p>
            We use reasonable physical, administrative, and technical
            safeguards to protect personal and project information. No
            method of transmission or storage is fully secure, and we
            cannot guarantee absolute security.
          </p>

          <Heading as="h2">7. Your Rights</Heading>
          <p>
            You may request access to, correction of, or deletion of the
            personal information we hold about you, subject to applicable
            law. To make a request, write to{' '}
            <a href="mailto:info@deltisan.com">
              info@deltisan.com
            </a>
            .
          </p>

          <Heading as="h2">8. Changes to This Policy</Heading>
          <p>
            We may update this policy from time to time. The
            &ldquo;Last Updated&rdquo; date at the top reflects the most
            recent revision.
          </p>

          <Heading as="h2">9. Contact</Heading>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><strong>Deltisan Engineering</strong></li>
            <li>1/39, Veerappanur, Coimbatore, Tamil Nadu 641105, India</li>
            <li>
              Email:{' '}
              <a href="mailto:info@deltisan.com">
                info@deltisan.com
              </a>
            </li>
            <li>
              Phone: <a href="tel:+919363332913">+91 93633 32913</a>{' '}
              (Suhesma Sri)
            </li>
          </ul>
        </article>
      </main>
    </Layout>
  );
}
