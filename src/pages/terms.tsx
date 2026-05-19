import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './_stub.module.css';

export default function Terms(): ReactNode {
  return (
    <Layout
      title="Terms of Service — Deltisan Engineering"
      description="Deltisan Engineering Terms of Service governing the use of deltisan.com and the supply of engineering and manufacturing services.">
      <main className={styles.legalContainer}>
        <article className={styles.legal}>
          <Heading as="h1">Terms of Service</Heading>
          <p className={styles.legalMeta}>
            <strong>Effective Date:</strong> May 8, 2026 &nbsp;|&nbsp;{' '}
            <strong>Last Updated:</strong> May 8, 2026
          </p>

          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
            the website at <a href="https://deltisan.com">deltisan.com</a>{' '}
            (the &ldquo;Site&rdquo;) and your engagement with Deltisan
            Engineering (&ldquo;Deltisan,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) for engineering and
            manufacturing services. By using the Site or engaging us for
            services, you agree to these Terms.
          </p>

          <Heading as="h2">1. Use of the Site</Heading>
          <p>
            You may use the Site for lawful purposes only. Content on the
            Site is provided for general information and does not constitute
            an offer or commitment to supply goods or services on the terms
            shown.
          </p>

          <Heading as="h2">2. Quotations and Orders</Heading>
          <p>
            Any quotation we issue is valid for the period stated on it (and
            otherwise for 30 days). A binding contract is formed only when
            we acknowledge a purchase order in writing. The terms of our
            written acknowledgement, along with these Terms, govern the
            order.
          </p>

          <Heading as="h2">3. Drawings and Specifications</Heading>
          <p>
            You are responsible for the accuracy and completeness of any
            drawings, CAD files, and specifications you provide. We perform
            a reasonable design-for-manufacture review and may flag
            concerns; however, our manufacture in accordance with your
            drawings is taken as conforming. Any change after order
            confirmation may affect price and lead time.
          </p>

          <Heading as="h2">4. Payment</Heading>
          <p>
            Payment terms are set out in the relevant quotation or order
            acknowledgement. Unless otherwise agreed, an advance is required
            before production begins, with the balance due before dispatch.
            Late payments may attract interest at the rate permitted by law.
          </p>

          <Heading as="h2">5. Lead Time and Delivery</Heading>
          <p>
            Lead times are estimates given in good faith based on
            information available at the time of quotation. We are not
            liable for delays caused by force majeure, supplier delays, or
            changes you request after order confirmation. Risk passes to
            you on delivery to the carrier unless otherwise agreed.
          </p>

          <Heading as="h2">6. Quality and Inspection</Heading>
          <p>
            We manufacture to the tolerances and finishes specified on your
            drawing or in our acknowledgement. You must inspect goods on
            receipt and notify us of any non-conformance within 7 days. We
            will, at our discretion, repair, replace, or refund the
            non-conforming goods. This is your sole remedy for
            manufacturing defects.
          </p>

          <Heading as="h2">7. Confidentiality</Heading>
          <p>
            Each party will keep the other&apos;s confidential information
            confidential and use it only for the purposes of the engagement.
            We are willing to sign a separate Non-Disclosure Agreement on
            request before review of sensitive material.
          </p>

          <Heading as="h2">8. Intellectual Property</Heading>
          <p>
            You retain ownership of intellectual property in drawings,
            designs, and specifications you provide. We retain ownership of
            our background know-how, fixtures, tooling, and any
            manufacturing improvements developed by us. Tooling produced
            specifically for you and paid for in full will be transferred
            on request.
          </p>

          <Heading as="h2">9. Warranty</Heading>
          <p>
            We warrant that goods we manufacture will conform to the
            agreed specifications and be free from defects in workmanship
            for the period stated in the acknowledgement (and otherwise for
            6 months from delivery). Components and materials sourced from
            third parties carry only the warranty offered by their
            manufacturer.
          </p>

          <Heading as="h2">10. Limitation of Liability</Heading>
          <p>
            To the maximum extent permitted by law, our liability arising
            out of or in connection with any order is limited to the price
            paid for the goods giving rise to the claim. We are not liable
            for indirect, incidental, special, or consequential losses,
            including loss of profit, loss of production, or loss of
            opportunity.
          </p>

          <Heading as="h2">11. Force Majeure</Heading>
          <p>
            We are not liable for any failure or delay caused by events
            beyond our reasonable control, including acts of God, strikes,
            transport disruption, supply-chain failures, or government
            action.
          </p>

          <Heading as="h2">12. Governing Law</Heading>
          <p>
            These Terms and any contract formed under them are governed by
            the laws of the State of Colorado, United States, without regard
            to its conflict-of-laws principles. The state and federal courts
            located in Douglas County, Colorado have exclusive jurisdiction
            over any dispute, except that we may seek injunctive relief in
            any court of competent jurisdiction.
          </p>

          <Heading as="h2">13. Changes to Terms</Heading>
          <p>
            We may update these Terms from time to time. The version in
            effect at the time your order is acknowledged will apply to
            that order.
          </p>

          <Heading as="h2">14. Contact</Heading>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><strong>Deltisan Engineering LLC</strong></li>
            <li>6222 E Pine Lane, Suite 6212 #1075, Parker, CO 80138, United States</li>
            <li>
              Email:{' '}
              <a href="mailto:info@deltisan.com">
                info@deltisan.com
              </a>
            </li>
            <li>
              Phone: <a href="tel:+17206660405">720-666-0405</a>
            </li>
          </ul>
        </article>
      </main>
    </Layout>
  );
}
