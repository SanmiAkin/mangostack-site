// About + Contact + Insights — bundled
const AboutApp = () => (
  <>
    <Nav active="about" />
    <main>
      <section className="ms-hero">
        <div className="ms-hero__wash"></div>
        <div className="ms-container ms-hero__inner">
          <Breadcrumb items={[{ label: "MangoStack", href: "index.html" }, { label: "About" }]} />
          <div className="eyebrow">ABOUT MANGOSTACK</div>
          <h1 className="display" style={{ fontSize: "clamp(48px, 6vw, 84px)" }}>
            Senior operators. <span className="grad-text">Embedded</span>.<br/>Software, <span className="grad-text">shipped</span>.
          </h1>

          <dl className="studio-card">
            <div className="studio-card__row">
              <dt>The studio</dt>
              <dd>MangoStack — AI-native operating studio</dd>
            </div>
            <div className="studio-card__row">
              <dt>Disciplines</dt>
              <dd>Strategic Advisory · Transformation · Operations · Forward-Deployed AI Engineering</dd>
            </div>
            <div className="studio-card__row">
              <dt>Products</dt>
              <dd>Workforce Atlas · ILR-Calc · HowCraft</dd>
            </div>
            <div className="studio-card__row">
              <dt>Based</dt>
              <dd>London, United Kingdom</dd>
            </div>
            <div className="studio-card__row">
              <dt>Network</dt>
              <dd>Senior operators across the UK &amp; Africa</dd>
            </div>
            <div className="studio-card__row">
              <dt>Established</dt>
              <dd>2025</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="prose-section prose-section--alt">
        <div className="ms-container" style={{ maxWidth: 820 }}>
          <p>MangoStack was built on a simple observation: most companies don't fail at strategy. They fail at execution. The plans are sound. The decks are sharp. But when it's time to ship, the senior leaders who can actually do the work aren't in the room.</p>
          <p>We exist to put them there. MangoStack embeds a senior operator into your business — fractionally, full-time, or as a project lead — across transformation, operations, and strategy. Fifteen years of senior operating experience across regulated industries: fintech, banking, insurtech, regtech, telecommunications, and microfinance. AI sits at the centre of how we work, because that's how modern operators think.</p>
          <p>And we ship software. Three products in market or in build: Workforce Atlas (our AI workforce audit — productised methodology and the service to deliver it, launching first in UK Accounting), ILR-Calc (a free UK immigration readiness tool, live), and HowCraft (a decision engine for revenue operations, in build). Each one is a bet that real software, built by operators, is more useful than slides about software.</p>

          <figure className="op-quote">
            <blockquote>Senior operators in the room — not on the bench.</blockquote>
            <figcaption>The MangoStack operating principle</figcaption>
          </figure>

          <p>Every engagement is led by a senior operator and delivered by a tight, vetted network across the United Kingdom and Africa. No bench. No juniors. No fluff. We deliver — then we hand back.</p>
        </div>
      </section>

      <section className="prose-section">
        <div className="ms-container">
          <div className="eyebrow">INDUSTRIES WE SERVE</div>
          <h2>Where we go deep.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 32 }}>
            {[
              ["Fintech & Embedded Finance", "Payments, FaaS, embedded credit and insurance"],
              ["Banking & Financial Services", "Retail, corporate, and inclusive finance"],
              ["InsureTech", "Distribution, claims, underwriting modernisation"],
              ["RegTech", "Compliance, KYC/AML, regulatory reporting"],
              ["Telecommunications", "Operations, customer experience, distribution"],
              ["Microfinance & Inclusive Finance", "Operations transformation, multi-country rollouts"],
            ].map(([t, d], i) => (
              <div key={i} style={{ padding: 24, background: "var(--navy-2)", border: "1px solid var(--line)", borderRadius: 12 }}>
                <h3 style={{ fontSize: 18, margin: "0 0 6px", letterSpacing: "-0.005em" }}>{t}</h3>
                <p style={{ color: "var(--grey-2)", fontSize: 14.5, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 32, fontStyle: "italic", color: "var(--grey-2)", maxWidth: 720 }}><strong style={{ color: "var(--orange)", fontStyle: "normal" }}>Common thread:</strong> regulated, complex, high-stakes. We thrive where execution discipline matters more than ideas.</p>
        </div>
      </section>

      <FinalCTA />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<AboutApp />);
