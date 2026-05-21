// Privacy notice
const PrivacyApp = () =>
<>
    <Nav active="" />
    <main>
      <section className="ms-hero ms-hero--short">
        <div className="ms-hero__wash"></div>
        <div className="ms-container ms-hero__inner">
          <Breadcrumb items={[{ label: "MangoStack", href: "index.html" }, { label: "Privacy" }]} />
          <div className="eyebrow">PRIVACY NOTICE</div>
          <h1 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>How we handle your <span className="grad-text">data</span>.</h1>
          <p className="legal-meta">LAST UPDATED: 17 MAY 2026 ·</p>
        </div>
      </section>

      <section className="prose-section">
        <div className="ms-container legal-prose">
          <p className="legal-intro">This notice explains what personal data MangoStack Ltd ("MangoStack", "we") collects when you use this website, why we collect it, how we use it, and your rights under the UK GDPR and the Data Protection Act 2018.</p>

          <h2>1. Who we are</h2>
          <p>MangoStack Ltd is a company registered in England &amp; Wales (Company No. 17196444), with its registered office in London, United Kingdom. We are the data controller for personal data collected through this website.</p>
          <p>You can contact us about this notice or your data at <a href="mailto:info@mangostack.co.uk">info@mangostack.co.uk</a>.</p>

          <h2>2. What we collect</h2>
          <p>We only collect what you actively give us. We do not run third-party advertising trackers, profiling cookies, or session recorders on this site.</p>
          <ul className="bulleted">
            <li><strong>Contact form submissions</strong> — name, email address, company, and the message you send us.</li>
            <li><strong>Waitlist sign-ups</strong> (HowCraft, Workforce Atlas) — email address, optional company, optional role, optional context about your interest.</li>
            <li><strong>Email correspondence</strong> — when you email us directly, we retain the content of that correspondence.</li>
            <li><strong>Basic server logs</strong> — our hosting provider may record IP address, user-agent, and timestamps for security and abuse prevention. These are retained on a short rolling window by the provider.</li>
          </ul>
          <p>The ILR-Calc product is explicitly zero-data: it runs entirely in your browser and stores no answers, identifiers, or PII on our servers. Its separate privacy notice lives at <a href="https://www.ilr-calc.co.uk" target="_blank" rel="noopener">ilr-calc.co.uk</a>.</p>

          <h2>3. Why we use it (lawful basis)</h2>
          <ul className="bulleted">
            <li><strong>To reply to enquiries and run engagements</strong> — lawful basis: legitimate interests (responding to a business enquiry you initiated), or, where you become a client, performance of a contract.</li>
            <li><strong>To operate product waitlists</strong> — lawful basis: consent. You can withdraw at any time by emailing us.</li>
            <li><strong>To keep the website running and secure</strong> — lawful basis: legitimate interests.</li>
          </ul>

          <h2>4. Who sees it</h2>
          <p>Submissions are read by MangoStack operators. We do not sell, rent, or share your data with advertising networks.</p>
          <p>We use a small number of processors to deliver the service:</p>
          <ul className="bulleted">
            <li><strong>Form-handling provider</strong> — routes form submissions to our inbox. Processes contents of form submissions.</li>
            <li><strong>Email provider</strong> — sends and receives our business email.</li>
            <li><strong>Hosting provider</strong> — serves this website.</li>
            <li><strong>Analytics provider</strong> (privacy-respecting, aggregate only — no individual profiles, no cross-site tracking).</li>
          </ul>
          <p>We use processors that offer UK or EU data residency and standard contractual clauses where transfers are required.</p>

          <h2>5. How long we keep it</h2>
          <ul className="bulleted">
            <li>Form submissions and email correspondence — retained for up to <strong>24 months</strong> from last contact, unless you become a client (in which case our engagement contract governs retention).</li>
            <li>Waitlist sign-ups — retained until the product launches and you have been contacted, or you ask us to remove you.</li>
            <li>Server logs — short rolling window as set by our hosting provider.</li>
          </ul>

          <h2>6. Your rights</h2>
          <p>Under UK GDPR you have the right to:</p>
          <ul className="bulleted">
            <li>Access the personal data we hold about you</li>
            <li>Ask us to correct inaccurate data</li>
            <li>Ask us to delete your data ("right to erasure")</li>
            <li>Object to processing or restrict it</li>
            <li>Withdraw consent (for waitlists and similar) at any time</li>
            <li>Receive your data in a portable format</li>
          </ul>
          <p>To exercise any of these rights, email <a href="mailto:info@mangostack.co.uk">info@mangostack.co.uk</a>. We will respond within one month.</p>
          <p>If you are not satisfied with our response, you can complain to the UK Information Commissioner's Office at <a href="https://ico.org.uk" target="_blank" rel="noopener">ico.org.uk</a>.</p>

          <h2>7. Cookies</h2>
          <p>We aim to keep this site cookie-light. See our <a href="cookies.html">Cookies notice</a> for the current list of what is set and why.</p>

          <h2>8. Changes to this notice</h2>
          <p>We may update this notice as our practices evolve. The "Last updated" date at the top reflects the most recent revision. Material changes will be flagged on the homepage for a reasonable period.</p>
        </div>
      </section>

      <FinalCTA />
    </main>
    <Footer />
  </>;

ReactDOM.createRoot(document.getElementById("root")).render(<PrivacyApp />);