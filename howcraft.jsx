// HowCraft — pre-launch product page with waitlist
const { useState: useStateHC } = React;

const HowCraftHero = () => (
  <section className="prod-hero">
    <div className="ms-hero__wash"></div>
    <div className="ms-container" style={{ position: "relative", zIndex: 2 }}>
      <Breadcrumb items={[{ label: "Software", href: "software.html" }, { label: "HowCraft" }]} />
      <div className="prod-hero__pills">
        <Pill kind="soon">COMING SOON</Pill>
      </div>
      <div className="eyebrow">PRODUCT · BY MANGOSTACK</div>
      <h1 className="h1" style={{ fontSize: "clamp(40px, 5.4vw, 64px)" }}>
        Decisions in seconds, not days.
      </h1>
      <div className="prod-hero__divider"></div>
      <p className="lede" style={{ maxWidth: 820 }}>
        HowCraft turns your team's tribal knowledge into instant, consistent decisions — inside Slack, Teams, and the tools you already use.
      </p>
      <div className="prod-hero__ctas">
        <a href="#waitlist" className="btn-primary">Join the waitlist →</a>
        <a href="mailto:info@mangostack.co.uk?subject=HowCraft%20enquiry" className="btn-link">Talk to us →</a>
      </div>
    </div>
  </section>
);

const Steps = () => (
  <section className="prose-section">
    <div className="ms-container">
      <div className="eyebrow">HOW IT WORKS</div>
      <h2>Ask. Decide. Learn.</h2>
      <div className="steps">
        {[
          ["01", "Ask", "A team member sends a request in Slack, Teams, or email."],
          ["02", "Decide", "HowCraft returns a verdict, the reasoning, and the next action in seconds."],
          ["03", "Learn", "When HowCraft meets something new, it asks the right person, captures the answer, and remembers."],
        ].map(([n, t, b]) => (
          <div className="step" key={n}>
            <div className="step__num">STEP {n}</div>
            <h3 className="step__title">{t}</h3>
            <p className="step__body">{b}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Waitlist = () => {
  const [sent, setSent] = useStateHC(false);
  return (
    <section className="prose-section prose-section--alt" id="waitlist">
      <div className="ms-container" style={{ maxWidth: 720 }}>
        <div className="eyebrow">WAITLIST</div>
        <h2>Be among the first to get access.</h2>
        <p>HowCraft is in build, with a small number of design-partner conversations underway. Launching first for deal desks and revenue operations in B2B SaaS.</p>
        {!sent ? (
          <form className="contact-form" style={{ marginTop: 32 }} onSubmit={async (e) => { e.preventDefault(); await submitForm(e.currentTarget, { subject: "HowCraft waitlist — new sign-up" }); setSent(true); }}>
            <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
            <input type="hidden" name="source" value="HowCraft waitlist" />
            <label className="field"><span>Email *</span><input name="email" type="email" required placeholder="you@company.com" /></label>
            <div className="field-row">
              <label className="field"><span>Company</span><input name="company" type="text" placeholder="Company name" /></label>
              <label className="field"><span>Role</span><input name="role" type="text" placeholder="Your role" /></label>
            </div>
            <label className="field"><span>What problem are you hoping HowCraft will solve?</span><textarea name="problem" rows="3" placeholder="Optional"></textarea></label>
            <p className="form-consent">By joining, you agree we can email you about HowCraft access. We store your details per our <a href="privacy.html">Privacy notice</a> until you ask us to remove them.</p>
            <button className="btn-primary btn-full" type="submit">Join the waitlist</button>
          </form>
        ) : (
          <div className="form-thanks" style={{ background: "var(--navy-2)", border: "1px solid var(--line)", borderRadius: 16, padding: 32 }}>
            <div className="form-thanks__check">✓</div>
            <h3>Thanks — we'll be in touch when we open up access.</h3>
            <p>— The MangoStack team</p>
          </div>
        )}
      </div>
    </section>
  );
};

const HowCraftApp = () => (
  <>
    <Nav active="software" />
    <main>
      <HowCraftHero />

      <section className="prose-section prose-section--alt">
        <div className="ms-container">
          <div className="eyebrow">THE PROBLEM</div>
          <h2>Tribal knowledge becomes a bottleneck.</h2>
          <p>Inside every company, the people who actually know how things are done — pricing exceptions, approvals, who signs off on what, when to escalate — carry that knowledge in their heads.</p>
          <p>The result is a constant queue of questions to senior people, slow decisions, and inconsistency across the team.</p>
        </div>
      </section>

      <Steps />

      <section className="prose-section prose-section--alt">
        <div className="ms-container">
          <div className="eyebrow">WHO IT'S FOR</div>
          <h2>Built for the people stuck in the approval queue.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 32 }}>
            <div style={{ padding: 28, background: "var(--navy)", border: "1px solid var(--line)", borderRadius: 14 }}>
              <h3 style={{ fontSize: 20, margin: "0 0 12px", letterSpacing: "-0.005em" }}>Sales reps & account executives</h3>
              <p style={{ color: "var(--grey-2)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>Who lose hours waiting for senior approvals on pricing, discounts, and non-standard contract terms. With HowCraft, those decisions come back in seconds, inside the tools you already use.</p>
            </div>
            <div style={{ padding: 28, background: "var(--navy)", border: "1px solid var(--line)", borderRadius: 14 }}>
              <h3 style={{ fontSize: 20, margin: "0 0 12px", letterSpacing: "-0.005em" }}>Heads of RevOps & CROs</h3>
              <p style={{ color: "var(--grey-2)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>Who get pulled into every approval decision and find the team's answers vary depending on who they ask. HowCraft gives consistency, an audit trail, and a system that gets smarter over time.</p>
            </div>
          </div>
        </div>
      </section>

      <Waitlist />

      <section className="prose-section">
        <div className="ms-container">
          <div className="eyebrow">SCOPE</div>
          <h2>What HowCraft is not.</h2>
          <p>HowCraft is launching focused on one use case (deal desks). It is not a generic AI assistant, not a replacement for a knowledge base, and not yet integrated with every tool.</p>
          <p>The brief is deliberately narrow at launch. The roadmap covers vendor approvals, refunds, pricing, and incident response — but only after the first use case is working in production.</p>
        </div>
      </section>

      <FinalCTA
        heading="Join the waitlist."
        line="We'll get in touch as access opens for deal desks and revenue operations."
        cta="Join the waitlist →"
        href="#waitlist"
      />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<HowCraftApp />);
