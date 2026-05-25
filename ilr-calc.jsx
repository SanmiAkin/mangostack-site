// ILR-Calc product detail page
// HARD REQUIREMENTS: NO analytics on this page. NO UTMs on outbound link. New tab + rel="noopener".

const ILR_URL = "https://www.ilr-calc.co.uk"; // NEVER add tracking params

const ILRHero = () => (
  <section className="prod-hero">
    <div className="ms-hero__wash"></div>
    <div className="ms-container" style={{ position: "relative", zIndex: 2 }}>
      <Breadcrumb items={[{ label: "Software", href: "software.html" }, { label: "ILR-Calc" }]} />
      <div className="prod-hero__pills">
        <Pill kind="live">LIVE</Pill>
        <Pill kind="neutral-dark">ZERO DATA COLLECTED</Pill>
      </div>
      <div className="eyebrow">PRODUCT</div>
      <h1 className="h1" style={{ fontSize: "clamp(40px, 5.4vw, 64px)" }}>
        ILR-Calc — UK Indefinite Leave to Remain readiness, in minutes.
      </h1>
      <div className="prod-hero__divider"></div>
      <p className="lede" style={{ maxWidth: 820 }}>
        A free readiness calculator for people preparing to apply for UK Indefinite Leave to Remain. Answer a short set of questions, get a clear readiness result. Free, no account, no email, no tracking — your answers never leave your browser.
      </p>
      <div className="prod-hero__ctas">
        <a href={ILR_URL} target="_blank" rel="noopener" className="btn-primary">Open ILR-Calc →</a>
        <span style={{ fontSize: 13, color: "var(--grey)" }}>ilr-calc.co.uk · opens in a new tab</span>
      </div>
    </div>
  </section>
);

const ZeroPIIShield = () => (
  <div style={{
    aspectRatio: "1 / 1",
    maxWidth: 380,
    margin: "0 auto",
    borderRadius: 20,
    background: "linear-gradient(135deg, rgba(34,197,94,0.10), rgba(34,197,94,0.02) 60%, transparent)",
    border: "1px solid rgba(34,197,94,0.2)",
    display: "flex", alignItems: "center", justifyContent: "center",
    position: "relative",
    padding: 40,
  }}>
    <svg viewBox="0 0 200 200" width="60%" height="60%" style={{ filter: "drop-shadow(0 12px 40px rgba(34,197,94,0.35))" }}>
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22C55E"/>
          <stop offset="100%" stopColor="#16A34A"/>
        </linearGradient>
      </defs>
      <path d="M100 12 L172 40 L172 96 C172 142 138 178 100 188 C62 178 28 142 28 96 L28 40 Z"
            fill="none" stroke="url(#sg)" strokeWidth="6" strokeLinejoin="round"/>
      <path d="M70 100 L92 122 L132 78" fill="none" stroke="url(#sg)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <div style={{
      position: "absolute", bottom: 24, left: 24, right: 24,
      textAlign: "center", fontSize: 11.5, letterSpacing: "0.16em",
      textTransform: "uppercase", fontWeight: 600,
      color: "#22C55E",
    }}>
      Zero PII. Verifiable.
    </div>
  </div>
);

const ILRApp = () => (
  <>
    <Nav active="software" />
    <main>
      <ILRHero />

      <section className="prose-section prose-section--alt">
        <div className="ms-container">
          <div className="eyebrow">WHY ILR-CALC</div>
          <h2>The stakes are high. The first read shouldn't be expensive.</h2>
          <p>ILR is high-stakes. Most applicants don't know whether they're ready until they're deep in the application — or paying a solicitor to find out. ILR-Calc gives a fast, structured first read on where you stand: ready to apply, fixable issues to resolve first, or a hard blocker that needs resolving.</p>
        </div>
      </section>

      <section className="prose-section">
        <div className="ms-container two-col" style={{ alignItems: "center" }}>
          <div>
            <div className="eyebrow">THE ZERO-PII PROMISE</div>
            <h2>Your answers never leave your browser.</h2>
            <p>ILR-Calc collects <strong style={{ color: "var(--white)" }}>zero</strong> personally identifying information. No name, no email, no account, no tracking.</p>
            <p>A technically literate user can open browser dev tools and confirm there are no tracking or analytics calls leaving their machine. This is the central product positioning — and the reason it's safe to trust the tool with sensitive immigration details.</p>
            <div className="callout" style={{ marginTop: 24 }}>
              <strong>Verifiable, not stated.</strong> The promise is auditable from any browser's network inspector. We don't ask you to trust us.
            </div>
          </div>
          <ZeroPIIShield />
        </div>
      </section>

      <section className="prose-section prose-section--alt">
        <div className="ms-container">
          <div className="eyebrow">ROUTES</div>
          <h2>Routes available.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 32 }}>
            <div style={{ padding: 28, background: "var(--navy)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <Pill kind="live">LIVE</Pill>
              </div>
              <h3 style={{ fontSize: 22, margin: "0 0 8px", letterSpacing: "-0.01em" }}>Skilled Worker route</h3>
              <p style={{ margin: 0, color: "var(--grey-2)", fontSize: 15 }}>The most common ILR pathway. Five-year continuous-residency check, salary, absences, and English-language qualification.</p>
            </div>
            <div style={{ padding: 28, background: "var(--navy)", border: "1px solid var(--line)", borderRadius: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <Pill kind="neutral-dark">ROADMAP</Pill>
              </div>
              <h3 style={{ fontSize: 22, margin: "0 0 12px", letterSpacing: "-0.01em" }}>Coming next</h3>
              <ul style={{ margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8, color: "var(--grey-2)", fontSize: 15 }}>
                <li>· Health and Care Worker</li>
                <li>· Global Talent</li>
                <li>· Innovator Founder</li>
                <li>· Further routes to follow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="ms-container">
          <div className="eyebrow">SCOPE</div>
          <h2>What ILR-Calc is not.</h2>
          <p>ILR-Calc is a self-assessment tool, not legal advice. It does not grant, guarantee, or pre-qualify any application outcome. It is not affiliated with the UK Home Office or gov.uk.</p>
          <p>For complex cases, see a qualified immigration solicitor.</p>
        </div>
      </section>

      <FinalCTA
        heading="Try ILR-Calc."
        line="Free. No account. No tracking. Opens in a new tab."
        cta="Open ILR-Calc →"
        href={ILR_URL}
      />
    </main>
    <Footer />
  </>
);

// Last-mile: ensure the final-CTA outbound goes new-tab without tracking.
// We override FinalCTA's anchor here (still no UTMs).
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<ILRApp />);
// After render, patch the final CTA target/rel (no UTMs anywhere).
setTimeout(() => {
  const ctas = root.querySelectorAll(`a[href="${ILR_URL}"]`);
  ctas.forEach(a => {
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });
}, 0);
