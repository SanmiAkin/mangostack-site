// AI Transformation page
const AIHero = () => (
  <section className="ms-hero">
    <div className="ms-hero__wash"></div>
    <div className="ms-container ms-hero__inner">
      <Breadcrumb items={[{ label: "MangoStack", href: "index.html" }, { label: "AI Transformation" }]} />
      <div className="eyebrow">AI TRANSFORMATION</div>
      <h1 className="display" style={{ fontSize: "clamp(48px, 6.2vw, 88px)" }}>
        Turn AI from a hype topic<br/>into a <span className="grad-text">working part</span><br/>of your business.
      </h1>
      <p className="lede">Strategy. Integration. Governance. Adoption. End-to-end AI Transformation, led by a senior operator who has delivered in regulated industries.</p>
      <a href="contact.html" className="btn-primary">Book a discovery call</a>
    </div>
  </section>
);

const AITransformApp = () => (
  <>
    <Nav active="ai" />
    <main>
      <AIHero />

      <section className="prose-section prose-section--alt">
        <div className="ms-container">
          <div className="eyebrow">THE PITCH</div>
          <h2>Pilots that go nowhere are operating problems, not technical ones.</h2>
          <p>Most AI strategies are written by people who've never run an operation. Ours isn't.</p>
          <p>We've deployed financial services across 14 African markets, processed millions of transactions, and built operating systems for businesses that couldn't afford to break. We bring that operating discipline to AI — because the agents and models that work in production are the ones wrapped in a working operating model.</p>
          <p>Pilots that go nowhere, tools no one uses, governance built after the fact: these are operating problems, not technical ones. We solve them as operating problems.</p>
        </div>
      </section>

      <section className="prose-section">
        <div className="ms-container">
          <div className="eyebrow">OUR METHODOLOGY</div>
          <h2>Workforce Atlas.</h2>
          <p>Where the industry fits, we run AI Transformation engagements through Workforce Atlas — our productised audit methodology. The audit maps your team's time, identifies the highest-ROI automation opportunities, designs the small set of AI employees that should be deployed alongside the human team, and gives you a 90-day implementation roadmap.</p>
          <p>Atlas is available first for UK Accounting firms, with more industries arriving throughout 2026. Where Atlas doesn't yet cover your industry, we structure the engagement the same way without the productised wrapper.</p>
          <a href="workforce-atlas.html" className="btn-primary" style={{ marginTop: 16 }}>Learn more about Atlas →</a>
        </div>
      </section>

      <section className="prose-section prose-section--alt">
        <div className="ms-container two-col">
          <div>
            <div className="eyebrow">WHAT WE LEAD</div>
            <h2>End-to-end.</h2>
            <ul className="bulleted">
              <li>AI strategy and roadmap — where AI actually moves your needle</li>
              <li>Use case discovery, prioritisation, and pilot design</li>
              <li>AI integration into existing products and operations</li>
              <li>AI governance, risk frameworks, and policy (compliance designed in, not bolted on)</li>
              <li>Agentic workflows and ops automation</li>
              <li>Team uplift, AI literacy, and adoption programmes</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow">OUR APPROACH</div>
            <h2>Five phases.</h2>
            <div className="kv-list">
              {[
                ["01 — DIAGNOSTIC", "Where AI fits your business and where it doesn't (2–4 wks; uses Atlas where supported)"],
                ["02 — ROADMAP", "Prioritised use cases with cost, effort, and expected outcome"],
                ["03 — PILOT", "Small, measurable, in-market test"],
                ["04 — SCALE", "Production integration, governance, and team uplift"],
                ["05 — HAND BACK", "Your team owns it"],
              ].map(([l, v], i) => (
                <div className="kv" key={i}>
                  <div className="kv__lbl">{l}</div>
                  <div className="kv__val">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="ms-container">
          <div className="eyebrow">ENGAGEMENT SHAPE</div>
          <h2>Two entry points.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 32 }}>
            <div style={{ padding: 28, background: "var(--navy-2)", border: "1px solid var(--line)", borderRadius: 14 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>AI DIAGNOSTIC</div>
              <h3 style={{ fontSize: 28, margin: "0 0 8px", letterSpacing: "-0.015em" }}>2–4 weeks</h3>
              <p style={{ color: "var(--grey-2)", margin: 0 }}>Fixed scope · diagnostic + roadmap</p>
            </div>
            <div style={{ padding: 28, background: "linear-gradient(135deg, rgba(255,138,0,0.10), rgba(255,193,7,0.02))", border: "1px solid rgba(255,138,0,0.3)", borderRadius: 14 }}>
              <div className="eyebrow" style={{ marginBottom: 12, color: "var(--orange)" }}>FULL AI EMBEDMENT</div>
              <h3 style={{ fontSize: 28, margin: "0 0 8px", letterSpacing: "-0.015em" }}>12 weeks – 6 months</h3>
              <p style={{ color: "var(--grey-2)", margin: 0 }}>Embedded delivery · diagnostic, pilot, scale, hand back</p>
            </div>
          </div>
          <p style={{ marginTop: 24, color: "var(--grey-2)" }}>Best for: leadership teams under board pressure to "do something with AI," product orgs wanting to ship AI-native features that actually work, and operations leaders ready to embed AI into how the business runs.</p>
        </div>
      </section>

      <FinalCTA heading="Talk to us about AI Transformation" />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<AITransformApp />);
