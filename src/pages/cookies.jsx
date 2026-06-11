import React from "react";
import { Nav, Footer, FinalCTA, Breadcrumb } from "../shared.jsx";
// Cookies notice
const CookiesApp = () => (
  <>
    <Nav active="" />
    <main>
      <section className="ms-hero ms-hero--short">
        <div className="ms-hero__wash"></div>
        <div className="ms-container ms-hero__inner">
          <Breadcrumb items={[{ label: "MangoStack", href: "index.html" }, { label: "Cookies" }]} />
          <div className="eyebrow">COOKIES</div>
          <h1 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>Cookies, kept <span className="grad-text">light</span>.</h1>
          <p className="legal-meta">Last updated: 17 May 2026 · Version 1.0</p>
        </div>
      </section>

      <section className="prose-section">
        <div className="ms-container legal-prose">
          <p className="legal-intro">We try to run this site without the usual cookie freight. No advertising trackers. No cross-site profiling. No session replay. This page lists what is set and why.</p>

          <h2>What is a cookie?</h2>
          <p>A cookie is a small text file a website stores on your device. Cookies can be set by the site you are visiting (first-party) or by other services embedded on that site (third-party).</p>

          <h2>What we set</h2>
          <p>At present this site sets <strong>no first-party cookies for tracking or personalisation</strong>. Forms and waitlists do not require cookies to function.</p>

          <h2>What our providers may set</h2>
          <ul className="bulleted">
            <li><strong>Hosting / CDN provider</strong> — may set a short-lived cookie or similar mechanism to route traffic, balance load, and mitigate abuse. Strictly necessary; no consent required under UK PECR.</li>
            <li><strong>Analytics</strong> — if and when enabled, we will use a privacy-respecting, aggregate-only analytics tool (no individual profiles, no cross-site tracking). Where the chosen tool sets cookies, they will be listed here.</li>
            <li><strong>Embedded content</strong> — if a page embeds external content (e.g. a calendar booking widget), that provider may set its own cookies under their own privacy notice.</li>
          </ul>

          <h2>Your choices</h2>
          <p>You can clear or block cookies in your browser at any time. Doing so will not break the parts of this site you came here for. If we add cookies that require consent under PECR, we will ask before setting them.</p>

          <h2>Related notices</h2>
          <p>See our <a href="privacy.html">Privacy notice</a> for how we handle personal data, and our <a href="terms.html">Terms of Use</a> for the rules of using this site.</p>

          <h2>Questions</h2>
          <p>Email <a href="mailto:info@mangostack.co.uk">info@mangostack.co.uk</a>.</p>
        </div>
      </section>

      <FinalCTA />
    </main>
    <Footer />
  </>
);
export default CookiesApp;
