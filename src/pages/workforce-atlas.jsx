import React from "react";
import { Pill, Nav, Footer, submitForm, FinalCTA, Breadcrumb } from "../shared.jsx";
// Workforce Atlas detail page — product + service
const { useState: useStateWA } = React;

const AtlasHero = () => (
  <section className="prod-hero">
    <div className="ms-hero__wash"></div>
    <div className="ms-container" style={{ position: "relative", zIndex: 2 }}>
      <Breadcrumb items={[{ label: "Software", href: "software.html" }, { label: "Workforce Atlas" }]} />
      <div className="prod-hero__pills">
        <Pill kind="soon">COMING SOON</Pill>
        <Pill kind="neutral-dark">PRODUCT + SERVICE</Pill>
      </div>
      <div className="eyebrow">PRODUCT · BY MANGOSTACK</div>
      <h1 className="h1" style={{ fontSize: "clamp(40px, 5.4vw, 64px)" }}>
        Workforce Atlas — AI Workforce Audits for high-performing firms.
      </h1>
      <div className="prod-hero__divider"></div>
      <p className="lede" style={{ maxWidth: 820 }}>
        Atlas is a productised audit methodology and the service to deliver it. We map your team's time, identify the repetitive work that's burning fee-earner capacity, and design the small set of AI employees that should be deployed alongside the human team.
      </p>
      <div className="prod-hero__ctas">
        <a href="#request" className="btn-primary">Request an audit →</a>
        <a href="mailto:info@mangostack.co.uk?subject=Workforce%20Atlas%20enquiry" className="btn-link">Talk to us about Atlas →</a>
      </div>
    </div>
  </section>
);

const AtlasBoth = () => (
  <section className="prose-section prose-section--alt">
    <div className="ms-container">
      <div className="eyebrow">ATLAS IS BOTH</div>
      <h2>One methodology. Two ways to engage.</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 36 }}>
        <div style={{ padding: 32, background: "var(--navy)", border: "1px solid var(--line)", borderRadius: 16, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: "auto -10% -10% auto", width: 200, height: 200, background: "radial-gradient(circle, rgba(255,138,0,0.18), transparent 70%)", filter: "blur(30px)" }}></div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="eyebrow" style={{ color: "var(--orange)" }}>THE PRODUCT</div>
            <h3 style={{ fontSize: 24, margin: "0 0 16px", letterSpacing: "-0.01em" }}>The methodology</h3>
            <p style={{ color: "var(--grey-2)", lineHeight: 1.6, margin: 0 }}>A structured audit you can take, with a workforce map, an opportunity ranking, and a recommended AI workforce. <a href="#request" style={{ color: "var(--white)" }}>Request your audit →</a></p>
          </div>
        </div>
        <div style={{ padding: 32, background: "var(--navy)", border: "1px solid var(--line)", borderRadius: 16, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: "auto -10% -10% auto", width: 200, height: 200, background: "radial-gradient(circle, rgba(255,193,7,0.18), transparent 70%)", filter: "blur(30px)" }}></div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="eyebrow" style={{ color: "var(--yellow)" }}>THE SERVICE</div>
            <h3 style={{ fontSize: 24, margin: "0 0 16px", letterSpacing: "-0.01em" }}>The delivery</h3>
            <p style={{ color: "var(--grey-2)", lineHeight: 1.6, margin: 0 }}>MangoStack designs, deploys, trains, and replaces the AI workforce on your behalf, under a managed retainer that follows the audit.</p>
          </div>
        </div>
      </div>
      <p style={{ marginTop: 32, fontSize: 17, color: "var(--grey-2)" }}>Same methodology, two ways to engage.</p>
    </div>
  </section>
);

const AtlasRequest = () => {
  const [sent, setSent] = useStateWA(false);
  return (
    <section className="prose-section prose-section--alt" id="request">
      <div className="ms-container" style={{ maxWidth: 720 }}>
        <div className="eyebrow">REQUEST AN AUDIT</div>
        <h2>Tell us about your firm.</h2>
        <p>Atlas is opening first for UK Accounting firms (five-partner+). If you'd like to be considered for the first cohort, send us a few details and we'll be in touch within one business day.</p>
        {!sent ? (
          <form className="contact-form" style={{ marginTop: 32 }} onSubmit={async (e) => { e.preventDefault(); await submitForm(e.currentTarget, { subject: "Workforce Atlas — audit request" }); setSent(true); }}>
            <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
            <input type="hidden" name="source" value="Workforce Atlas request" />
            <label className="field"><span>Name *</span><input name="name" type="text" required placeholder="Your name" /></label>
            <label className="field"><span>Work email *</span><input name="email" type="email" required placeholder="you@firm.com" /></label>
            <div className="field-row">
              <label className="field"><span>Firm *</span><input name="company" type="text" required placeholder="Firm name" /></label>
              <label className="field"><span>Your role</span><input name="role" type="text" placeholder="e.g. Managing Partner" /></label>
            </div>
            <label className="field"><span>Industry *</span>
              <select name="industry" required defaultValue="">
                <option value="" disabled>Choose one</option>
                <option>UK Accounting</option>
                <option>UK Recruitment</option>
                <option>UK Insurance</option>
                <option>US Accounting</option>
                <option>International Fintech</option>
                <option>International Insurance</option>
                <option>Other</option>
              </select>
            </label>
            <label className="field"><span>Approximate headcount</span>
              <select name="headcount" defaultValue="">
                <option value="" disabled>Optional</option>
                <option>Under 25</option>
                <option>25–50</option>
                <option>50–100</option>
                <option>100–250</option>
                <option>250+</option>
              </select>
            </label>
            <label className="field"><span>What's driving the interest in an audit?</span><textarea name="context" rows="3" placeholder="Optional — a sentence or two on what you're hoping Atlas will help with"></textarea></label>
            <p className="form-consent">By submitting, you agree we can contact you about your Atlas audit request. We store your details per our <a href="privacy.html">Privacy notice</a> until you ask us to remove them.</p>
            <button className="btn-primary btn-full" type="submit">Request an audit</button>
          </form>
        ) : (
          <div className="form-thanks" style={{ background: "var(--navy-2)", border: "1px solid var(--line)", borderRadius: 16, padding: 32 }}>
            <div className="form-thanks__check">✓</div>
            <h3>Thanks — we'll be in touch within one business day.</h3>
            <p>— The MangoStack team</p>
          </div>
        )}
      </div>
    </section>
  );
};

const AtlasApp = () => (
  <>
    <Nav active="software" />
    <main>
      <AtlasHero />
      <AtlasBoth />

      <section className="prose-section">
        <div className="ms-container">
          <div className="eyebrow">HOW WE DELIVER THIS</div>
          <h2>Atlas is Forward-Deployed AI Engineering, productised.</h2>
          <p>Underneath Atlas sits MangoStack's <a href="operating.html#ai" style={{ color: "var(--orange)" }}>AI embedment</a> model — one senior engineer-operator, embedded into your business, who builds the AI workforce alongside your human team and operates it until your team is ready to take it over.</p>
          <p>Atlas is what an AI-embedment engagement looks like when we've packaged it for one specific case: an AI workforce audit followed by deployment. Where the work generalises into a product, we ship the product. Where it doesn't — a custom AI tool you need built inside your business, an agentic workflow no one has built before — we run the engagement directly. Same engineer-operator brain, both ways.</p>
          <div className="callout" style={{ marginTop: 24 }}><strong>Need custom AI shipped, not an audit?</strong> If your business already knows what it needs built, you can engage MangoStack directly through our operating work rather than starting with an Atlas audit. <a href="operating.html#ai" style={{ color: "var(--white)", textDecoration: "underline" }}>See how that works →</a></div>
        </div>
      </section>

      <section className="prose-section">
        <div className="ms-container">
          <div className="eyebrow">WHAT'S IN AN AUDIT</div>
          <h2>The audit deliverable.</h2>
          <ul className="bulleted">
            <li>A <strong style={{ color: "var(--white)" }}>workforce map</strong> of where your team's time goes today, across nine workflow domains</li>
            <li>The <strong style={{ color: "var(--white)" }}>top five automation opportunities</strong>, ranked by ROI and complexity</li>
            <li>A <strong style={{ color: "var(--white)" }}>recommended AI workforce</strong> — typically 4–6 AI employees, sized to your firm</li>
            <li>A <strong style={{ color: "var(--white)" }}>90-day deployment roadmap</strong> and a managed retainer to deliver it</li>
            <li>A non-negotiable principle: <strong style={{ color: "var(--white)" }}>capacity unlocked, never headcount reduced</strong></li>
          </ul>
        </div>
      </section>

      <section className="prose-section prose-section--alt">
        <div className="ms-container">
          <div className="eyebrow">INDUSTRIES</div>
          <h2>Where Atlas is available.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 32, marginTop: 32 }}>
            <div style={{ padding: 24, background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 14 }}>
              <Pill kind="live">AVAILABLE FIRST</Pill>
              <h3 style={{ fontSize: 22, margin: "16px 0 8px", letterSpacing: "-0.01em" }}>UK Accounting</h3>
              <p style={{ color: "var(--grey-2)", fontSize: 14.5, margin: 0 }}>Five-partner+ practices upward. Fee-earner capacity audit, recommended AI workforce, deployment retainer.</p>
            </div>
            <div style={{ padding: 24, background: "var(--navy)", border: "1px solid var(--line)", borderRadius: 14 }}>
              <Pill kind="soon">THROUGHOUT 2026</Pill>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16 }}>
                {["UK Recruitment","UK Insurance","US Accounting","International Fintech","International Insurance","More to follow"].map(i => (
                  <div key={i} style={{ fontSize: 15, color: "#CBD5E1", padding: "8px 0" }}>· {i}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="ms-container">
          <div className="eyebrow">ON POSITIONING</div>
          <h2>Atlas unlocks capacity. It doesn't reduce headcount.</h2>
          <p>Atlas is not about reducing headcount. It's about unlocking capacity. We design AI workforces that take the repetitive work off your team's plate so the team becomes more valuable, not smaller.</p>
          <div className="callout"><strong>Non-negotiable.</strong> Both in how Atlas is positioned and in how every audit is delivered. If your goal is layoffs, Atlas is the wrong tool.</div>
        </div>
      </section>

      <AtlasRequest />

      <FinalCTA
        heading="Talk to us about Atlas."
        line="Five-partner+ practices, UK Accounting first. Tell us about your firm and we'll be in touch."
        cta="Request an audit →"
        href="#request"
      />
    </main>
    <Footer />
  </>
);

export default AtlasApp;
