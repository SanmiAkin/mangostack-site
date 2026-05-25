// MangoStack — Software index (v4)
const SwHero = () => (
  <section className="ms-hero ms-hero--short-mid">
    <div className="ms-hero__wash"></div>
    <div className="ms-container ms-hero__inner">
      <Breadcrumb items={[{ label: "MangoStack", href: "index.html" }, { label: "Software" }]} />
      <div className="eyebrow">SOFTWARE · FORWARD-ENGINEERED</div>
      <h1 className="display" style={{ fontSize: "clamp(48px, 7.2vw, 92px)" }}>
        Software, engineered forward<br/>from real <span className="grad-text">operating</span> problems.
      </h1>
      <p className="lede">We build where we have seen the problem up close. Our flagship is agentic finance software for UK businesses.</p>
    </div>
  </section>
);

// --------- The flagship line ---------
const FinanceLine = () => (
  <section className="ms-section ms-finline">
    <div className="ms-container">
      <div className="ms-finline__head">
        <div className="eyebrow">THE FLAGSHIP LINE · AGENTIC FINANCE</div>
        <p className="ms-finline__framing">One platform, one buyer, one finance team — two products that work the way a modern finance function should.</p>
      </div>

      {/* Pelvar — bold card */}
      <a href="pelvar.html" className="finline-card finline-card--lead">
        <div className="finline-card__pills">
          <Pill kind="soon">IN BUILD</Pill>
          <Pill kind="neutral-dark">DESIGN PARTNERS</Pill>
          <Pill kind="neutral-dark">FLAGSHIP</Pill>
        </div>
        <div className="finline-card__grid">
          <div>
            <div className="eyebrow eyebrow--accent">PELVAR · AGENTIC GROUP CLOSE</div>
            <h2 className="finline-card__title">Pelvar — the agentic month-end close for UK groups.</h2>
            <p className="finline-card__body">Groups with multiple companies and currencies spend days every month combining their books by hand. Pelvar runs that close with an AI agent — reconciles intercompany balances, gets the currency right, writes results back into the accounts. Audit-ready group accounts in a fraction of the time.</p>
            <ul className="finline-card__feats">
              <li><span className="dot"></span> Multi-currency intercompany that balances</li>
              <li><span className="dot"></span> Write-back into Xero (NetSuite to follow)</li>
              <li><span className="dot"></span> An agent that runs the close end to end</li>
            </ul>
            <span className="finline-card__cta">Explore Pelvar <span className="arrow-icon">→</span></span>
          </div>
          <div className="finline-card__viz">
            <PelvarFlow />
          </div>
        </div>
      </a>

      {/* Pipworth — sibling card */}
      <a href="pipworth.html" className="finline-card finline-card--sibling" id="pipworth">
        <div className="finline-card__pills">
          <Pill kind="soon">IN DEVELOPMENT</Pill>
          <Pill kind="neutral-dark">SIBLING IN THE LINE</Pill>
        </div>
        <div className="finline-card__grid finline-card__grid--sibling">
          <div>
            <div className="eyebrow eyebrow--accent">PIPWORTH · AGENTIC CASH APPLICATION</div>
            <h2 className="finline-card__title" style={{ fontSize: "clamp(28px, 3.4vw, 44px)" }}>Pipworth — agentic cash application for finance teams.</h2>
            <p className="finline-card__body">Matching incoming payments to the right customer, the right invoice, the right ledger line — at the speed your AR ledger actually moves. Pipworth applies cash with an AI agent so the finance team stops chasing receipts and starts closing books.</p>
            <span className="finline-card__cta">Explore Pipworth <span className="arrow-icon">→</span></span>
          </div>
          <div className="finline-card__viz finline-card__viz--small">
            <PipworthGlyph />
          </div>
        </div>
      </a>
    </div>
  </section>
);

const PipworthGlyph = () => (
  <div className="pipworth-glyph" aria-hidden="true">
    <svg viewBox="0 0 280 220">
      <defs>
        <linearGradient id="pw-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF8A00"/>
          <stop offset="100%" stopColor="#FFC107"/>
        </linearGradient>
      </defs>
      {/* payments on the left */}
      {[40, 80, 120, 160].map((y, i) => (
        <g key={`p-${i}`}>
          <rect x="20" y={y} width="80" height="22" rx="3" fill="none" stroke="rgba(203,213,225,0.4)" strokeWidth="1"/>
          <text x="30" y={y + 15} fontSize="10" fill="rgba(203,213,225,0.7)" fontFamily="ui-monospace, Menlo, monospace">£ {[1240, 4820, 320, 9580][i]}</text>
        </g>
      ))}
      {/* invoices on the right */}
      {[40, 80, 120, 160].map((y, i) => (
        <g key={`i-${i}`}>
          <rect x="180" y={y} width="80" height="22" rx="3" fill="none" stroke="rgba(255,193,7,0.45)" strokeWidth="1"/>
          <text x="190" y={y + 15} fontSize="10" fill="rgba(255,193,7,0.8)" fontFamily="ui-monospace, Menlo, monospace">INV-{1023 + i}</text>
        </g>
      ))}
      {/* match lines */}
      <path d="M 100 51 L 180 91" stroke="url(#pw-g)" strokeWidth="1.2" fill="none"/>
      <path d="M 100 91 L 180 51" stroke="url(#pw-g)" strokeWidth="1.2" fill="none"/>
      <path d="M 100 131 L 180 131" stroke="url(#pw-g)" strokeWidth="1.2" fill="none"/>
      <path d="M 100 171 L 180 171" stroke="url(#pw-g)" strokeWidth="1.2" fill="none"/>
      <text x="140" y="206" textAnchor="middle" fontSize="9" letterSpacing="2" fontFamily="ui-monospace, Menlo, monospace" fill="rgba(255,255,255,0.5)">AGENT MATCHES</text>
    </svg>
  </div>
);

// --------- Pelvar flow reused from home ---------
const PelvarFlow = () => (
  <div className="pflow pflow--compact">
    <div className="pflow__entities">
      <div className="pflow__ent" style={{ "--i": 0 }}>
        <div className="pflow__ent-tag">ENTITY 01</div>
        <div className="pflow__ent-amt">£ <span>GBP</span></div>
      </div>
      <div className="pflow__ent" style={{ "--i": 1 }}>
        <div className="pflow__ent-tag">ENTITY 02</div>
        <div className="pflow__ent-amt">€ <span>EUR</span></div>
      </div>
      <div className="pflow__ent" style={{ "--i": 2 }}>
        <div className="pflow__ent-tag">ENTITY 03</div>
        <div className="pflow__ent-amt">$ <span>USD</span></div>
      </div>
      <div className="pflow__ent" style={{ "--i": 3 }}>
        <div className="pflow__ent-tag">ENTITY 04</div>
        <div className="pflow__ent-amt">₦ <span>NGN</span></div>
      </div>
    </div>
    <div className="pflow__beams" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 5 12 Q 50 50 50 95" stroke="url(#pflow-g)" strokeWidth="0.6" fill="none"/>
        <path d="M 35 12 Q 50 50 50 95" stroke="url(#pflow-g)" strokeWidth="0.6" fill="none"/>
        <path d="M 65 12 Q 50 50 50 95" stroke="url(#pflow-g)" strokeWidth="0.6" fill="none"/>
        <path d="M 95 12 Q 50 50 50 95" stroke="url(#pflow-g)" strokeWidth="0.6" fill="none"/>
        <defs>
          <linearGradient id="pflow-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF8A00" stopOpacity="0.0"/>
            <stop offset="60%" stopColor="#FFC107" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#FF8A00" stopOpacity="1"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div className="pflow__agent">
      <div className="pflow__agent-ring"></div>
      <div className="pflow__agent-core">
        <div className="pflow__agent-lbl">PELVAR AGENT</div>
        <div className="pflow__agent-task">Reconcile · Translate · Write back</div>
      </div>
    </div>
    <div className="pflow__out">
      <div className="pflow__out-pill"><span className="pflow__out-dot"></span> GROUP ACCOUNTS · AUDIT-READY</div>
    </div>
  </div>
);

// --------- Also from the studio ---------
const AlsoFromStudio = () => (
  <section className="ms-section ms-section--alt">
    <div className="ms-container">
      <div className="eyebrow">ALSO FROM THE STUDIO</div>
      <h2 className="h1">Supporting products.</h2>
      <p className="lede">Two products outside the finance line — each tied to work we already do.</p>
      <div className="support-grid">
        <a href="workforce-atlas.html" className="support-card">
          <div className="support-card__pills"><Pill kind="soon">COMING SOON</Pill></div>
          <div className="eyebrow eyebrow--accent">AI WORKFORCE AUDIT</div>
          <h3 className="support-card__title">Workforce Atlas</h3>
          <p className="support-card__body">An AI workforce audit for professional firms — the productised method behind our AI embedment work. UK Accounting first.</p>
          <span className="support-card__cta">Explore Atlas <span className="arrow-icon">→</span></span>
        </a>
        <a href="ilr-calc.html" className="support-card">
          <div className="support-card__pills"><Pill kind="live">LIVE</Pill></div>
          <div className="eyebrow eyebrow--accent">UK IMMIGRATION READINESS</div>
          <h3 className="support-card__title">ILR-Calc</h3>
          <p className="support-card__body">A free UK settlement-eligibility tool, used by people preparing for ILR. No account, no email, no tracking.</p>
          <span className="support-card__cta">Open ILR-Calc <span className="arrow-icon">→</span></span>
        </a>
      </div>
    </div>
  </section>
);

const Closer = () => (
  <section className="ms-section ms-closer">
    <div className="ms-container">
      <p className="ms-closer__line">
        We ship software the way we run engagements:<br/>
        <span className="grad-text">senior-led, built from real problems, made to be genuinely useful.</span>
      </p>
    </div>
  </section>
);

const SwApp = () => (
  <>
    <Nav active="software" />
    <main>
      <SwHero />
      <FinanceLine />
      <AlsoFromStudio />
      <Closer />
      <FinalCTA cta="Talk to us about software →" />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<SwApp />);
