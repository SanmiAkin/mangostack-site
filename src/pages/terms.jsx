import React from "react";
import { Nav, Footer, FinalCTA, Breadcrumb } from "../shared.jsx";
// Terms of Use
const TermsApp = () => (
  <>
    <Nav active="" />
    <main>
      <section className="ms-hero ms-hero--short">
        <div className="ms-hero__wash"></div>
        <div className="ms-container ms-hero__inner">
          <Breadcrumb items={[{ label: "MangoStack", href: "index.html" }, { label: "Terms" }]} />
          <div className="eyebrow">TERMS OF USE</div>
          <h1 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>The rules of the <span className="grad-text">road</span>.</h1>
          <p className="legal-meta">Last updated: 17 May 2026 · Version 1.0</p>
        </div>
      </section>

      <section className="prose-section">
        <div className="ms-container legal-prose">
          <p className="legal-intro">These terms govern your use of the mangostack.co.uk website. They do not govern a consulting engagement or product subscription — those are covered by separate signed agreements.</p>

          <h2>1. Who we are</h2>
          <p>This website is operated by MangoStack Ltd, a company registered in England &amp; Wales (Company No. 17196444), with its registered office in London, United Kingdom.</p>

          <h2>2. What this site is</h2>
          <p>This website provides information about MangoStack's services and products. The content is for general information only. It is not professional, legal, financial, tax, or immigration advice. Always seek qualified advice for your specific situation before acting on anything you read here.</p>

          <h2>3. Intellectual property</h2>
          <p>All content on this site — including text, design, code, logos, and product names (MangoStack, Workforce Atlas, ILR-Calc, HowCraft) — is owned by MangoStack Ltd or used with permission. You may view and share links to this site freely. You may not republish, copy, or commercially reuse our content without written permission.</p>

          <h2>4. Acceptable use</h2>
          <p>By using this site, you agree not to:</p>
          <ul className="bulleted">
            <li>Use it for any unlawful purpose</li>
            <li>Attempt to gain unauthorised access to any part of the site or its infrastructure</li>
            <li>Submit malicious code, automated scraping, or abusive form submissions</li>
            <li>Misrepresent your identity in any form submission or correspondence</li>
          </ul>

          <h2>5. Third-party links</h2>
          <p>We sometimes link to external sites we find useful. We do not control them and are not responsible for their content, privacy practices, or availability.</p>

          <h2>6. Disclaimer of warranties</h2>
          <p>The site is provided on an "as is" and "as available" basis. We do not warrant that it will be uninterrupted, error-free, or free from security issues. To the fullest extent permitted by law, we exclude all implied warranties.</p>

          <h2>7. Limitation of liability</h2>
          <p>Nothing in these terms limits liability that cannot be limited by English law (including liability for death, personal injury caused by negligence, or fraud). Subject to that, MangoStack Ltd will not be liable for any indirect or consequential loss arising from your use of this website.</p>

          <h2>8. Governing law</h2>
          <p>These terms and any dispute arising from them are governed by the laws of England and Wales, and subject to the exclusive jurisdiction of the courts of England and Wales.</p>

          <h2>9. Changes</h2>
          <p>We may update these terms from time to time. The "Last updated" date reflects the most recent revision.</p>

          <h2>10. Contact</h2>
          <p>Questions about these terms? <a href="mailto:info@mangostack.co.uk">info@mangostack.co.uk</a>.</p>
        </div>
      </section>

      <FinalCTA />
    </main>
    <Footer />
  </>
);
export default TermsApp;
