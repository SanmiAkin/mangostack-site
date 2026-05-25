// MangoStack — Home (v4 — Forward Engineering)
const HomeHero = () => (
  <section className="ms-hero ms-hero--fwd">
    <div className="ms-hero__wash"></div>
    <div className="ms-container ms-hero__inner ms-hero__inner--split">
      <div className="ms-hero__text">
        <div className="eyebrow">FORWARD ENGINEERING</div>
        <h1 className="display">
          We deploy senior operators<br/>
          into your hardest problems —<br/>
          and <span className="grad-text">engineer</span> what we learn<br/>
          into software.
        </h1>
        <p className="lede">
          MangoStack is an operating studio. We run transformation, operations, and AI work from inside your business, and we build the software those problems demand. <strong style={{ color: "var(--white)", fontWeight: 500 }}>Senior operators, embedded. Software, shipped.</strong>
        </p>
        <div className="ms-hero__ctas">
          <a href="contact.html" className="btn-primary">Start a conversation</a>
          <a href="pelvar.html" className="btn-link">See Pelvar →</a>
        </div>
      </div>
      <div className="ms-hero__viz">
        <ForwardEngine variant="hero" />
      </div>
    </div>
  </section>
);

const TwoMotions = () => {
  const [ref, on] = useReveal();
  return (
    <section className="ms-section ms-motions" ref={ref}>
      <div className="ms-container">
        <div className="eyebrow">THE TWO MOTIONS</div>
        <h2 className="h1">We <span className="grad-text">operate</span>.<br/>We <span className="grad-text">build</span>.</h2>
        <p className="lede">The two feed each other. The front line shows us what to build; the software makes the front line faster.</p>
        <div className="motions-grid">
          <a href="operating.html" className={`motion-card ${on ? "is-in" : ""}`}>
            <div className="motion-card__tag">
              <span className="motion-card__chev">←</span>
              <span>DEPLOY FORWARD</span>
            </div>
            <h3 className="motion-card__title">We operate.</h3>
            <p className="motion-card__body">Senior operators embedded on your front line to lead transformation, operations, and AI to a result, then hand back.</p>
            <span className="motion-card__cta">Operating <span className="arrow-icon">→</span></span>
          </a>
          <div className="motions-joiner" aria-hidden="true">
            <div className="motions-joiner__line"></div>
            <div className="motions-joiner__dot"></div>
            <div className="motions-joiner__line"></div>
          </div>
          <a href="software.html" className={`motion-card motion-card--build ${on ? "is-in" : ""}`}>
            <div className="motion-card__tag motion-card__tag--right">
              <span>ENGINEER FORWARD</span>
              <span className="motion-card__chev">→</span>
            </div>
            <h3 className="motion-card__title">We build.</h3>
            <p className="motion-card__body">We turn the problems we see on the front line into production software. Our flagship is agentic finance.</p>
            <span className="motion-card__cta">Software <span className="arrow-icon">→</span></span>
          </a>
        </div>
      </div>
    </section>
  );
};

// ---------- FLAGSHIP — Pelvar full-bleed band ----------
const FlagshipBand = () => (
  <section className="ms-section ms-flagship">
    <div className="ms-flagship__bg" aria-hidden="true"></div>
    <div className="ms-container ms-flagship__inner">
      <div className="ms-flagship__head">
        <div className="eyebrow eyebrow--on-flagship">THE FLAGSHIP · AGENTIC FINANCE</div>
        <div className="ms-flagship__pills">
          <Pill kind="soon">IN BUILD</Pill>
          <Pill kind="neutral-dark">DESIGN PARTNERS</Pill>
        </div>
      </div>
      <div className="ms-flagship__grid">
        <div className="ms-flagship__text">
          <h2 className="h1">Pelvar — the agentic month-end close for UK groups.</h2>
          <p className="lede">Groups with multiple companies and currencies spend days every month combining their books by hand. Pelvar runs that close with an AI agent — reconciles the balances between entities, gets the currency right, and writes the result back into the accounts.</p>
          <p className="ms-flagship__line">Audit-ready group accounts in a fraction of the time.</p>
          <div className="ms-flagship__ctas">
            <a href="pelvar.html" className="btn-primary">Explore Pelvar →</a>
            <a href="software.html" className="btn-link">All software →</a>
          </div>
          <div className="ms-flagship__sibling">
            Part of MangoStack's agentic finance line, alongside <a href="pipworth.html">Pipworth</a>.
          </div>
        </div>
        <div className="ms-flagship__diagram">
          <PelvarFlow />
        </div>
      </div>
    </div>
  </section>
);

// Pelvar close-flow schematic — used on home + Pelvar page
const PelvarFlow = ({ compact = false }) => (
  <div className={`pflow ${compact ? "pflow--compact" : ""}`}>
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
        <div className="pflow__agent-task">Reconciling · Translating · Writing back</div>
      </div>
    </div>
    <div className="pflow__out">
      <div className="pflow__out-pill"><span className="pflow__out-dot"></span> GROUP ACCOUNTS · AUDIT-READY</div>
    </div>
  </div>
);

// ---------- PROOF STRIP ----------
const ProofStrip = () => (
  <section className="ms-section ms-proof">
    <div className="ms-container">
      <div className="eyebrow">WHAT'S SHIPPING</div>
      <h2 className="h2">The studio, on the ground.</h2>
      <div className="proof-row">
        <a href="pelvar.html" className="proof-item">
          <div className="proof-item__head">
            <Pill kind="soon">IN BUILD</Pill>
            <span className="proof-item__name">Pelvar</span>
          </div>
          <p className="proof-item__body">Agentic group close and consolidation. In development with design partners.</p>
          <span className="proof-item__cta">Read more →</span>
        </a>
        <a href="pipworth.html" className="proof-item">
          <div className="proof-item__head">
            <Pill kind="soon">IN DEVELOPMENT</Pill>
            <span className="proof-item__name">Pipworth</span>
          </div>
          <p className="proof-item__body">Agentic cash application and AR automation. Sibling product in the finance line.</p>
          <span className="proof-item__cta">Read more →</span>
        </a>
        <a href="https://www.ilr-calc.co.uk" target="_blank" rel="noopener" className="proof-item">
          <div className="proof-item__head">
            <Pill kind="live">LIVE</Pill>
            <span className="proof-item__name">ILR-Calc</span>
          </div>
          <p className="proof-item__body">A free UK settlement-eligibility tool, used by people navigating UK immigration.</p>
          <span className="proof-item__cta">Open tool →</span>
        </a>
      </div>
      <p className="proof-foot">
        Workforce Atlas — the productised method behind our AI work — sits under Operating and <a href="workforce-atlas.html">on its own page</a>.
      </p>
    </div>
  </section>
);

// ---------- THE ENGINE (services) ----------
const EngineSection = () => (
  <section className="ms-section ms-engine">
    <div className="ms-container">
      <div className="eyebrow">OPERATING · THE ENGINE</div>
      <h2 className="h1">Senior operators,<br/>on your front line.</h2>
      <p className="lede">When a transformation has stalled, an operation will not scale, or AI is stuck in planning, we put a senior operator inside the team to lead it to a result and hand back.</p>
      <div className="engine-grid">
        {[
          ["Transformation programmes", "Take a function from where it is to a defined future state, with accountability for the outcome."],
          ["Operations leadership", "Run or rebuild an operation so it scales: model, tooling, process, team."],
          ["AI embedment", "Move AI from intention to production: strategy, integration with compliance designed in, and adoption that lasts."],
        ].map(([t, d]) => (
          <div className="engine-item" key={t}>
            <div className="engine-item__bar"></div>
            <h3 className="engine-item__title">{t}</h3>
            <p className="engine-item__body">{d}</p>
          </div>
        ))}
      </div>
      <a href="operating.html" className="btn-secondary">How we operate →</a>
    </div>
  </section>
);

// ---------- WHY IT COMPOUNDS (the flywheel) ----------
const FlywheelSection = () => (
  <section className="ms-section ms-flywheel">
    <div className="ms-container ms-flywheel__inner">
      <div className="eyebrow">WHY IT COMPOUNDS</div>
      <h2 className="h1">The flywheel.</h2>
      <div className="flywheel-grid">
        <div className="flywheel-text">
          <p>Deploy forward. See the real problem. Engineer it forward into software. Deploy the software back into the front line. Each turn compounds.</p>
          <p>Pelvar is Forward Engineering made visible — a group-finance problem we saw up close, engineered forward into a product. Services fund and inform the build; the software turns what we learn into something that scales.</p>
          <a href="approach.html" className="btn-link">The studio model →</a>
        </div>
        <div className="flywheel-viz">
          <FlywheelSvg/>
        </div>
      </div>
    </div>
  </section>
);

const FlywheelSvg = () => (
  <div className="flywheel-svg" aria-hidden="true">
    <svg viewBox="0 0 320 320">
      <defs>
        <linearGradient id="fw-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF8A00"/>
          <stop offset="100%" stopColor="#FFC107"/>
        </linearGradient>
      </defs>
      <circle cx="160" cy="160" r="120" fill="none" stroke="rgba(255,138,0,0.15)" strokeWidth="1" strokeDasharray="2 6"/>
      <circle cx="160" cy="160" r="120" fill="none" stroke="url(#fw-g)" strokeWidth="1.4" strokeDasharray="200 580" strokeLinecap="round" className="flywheel-svg__rotate"/>
      {/* four nodes */}
      {[
        { x: 160, y: 40, label1: "DEPLOY", label2: "Senior operator", id: 1 },
        { x: 280, y: 160, label1: "SEE", label2: "The real problem", id: 2 },
        { x: 160, y: 280, label1: "ENGINEER", label2: "Into software", id: 3 },
        { x: 40, y: 160, label1: "RETURN", label2: "To the front line", id: 4 },
      ].map(n => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="8" fill="#0D1117" stroke="url(#fw-g)" strokeWidth="2"/>
          <circle cx={n.x} cy={n.y} r="3" fill="url(#fw-g)"/>
          <text x={n.x} y={n.y - 18} textAnchor="middle" fontSize="10" letterSpacing="1.5" fontFamily="ui-monospace, Menlo, monospace" fill="#FFC107">{n.label1}</text>
          <text x={n.x} y={n.y + 26} textAnchor="middle" fontSize="11" fill="#CBD5E1">{n.label2}</text>
        </g>
      ))}
      {/* centre */}
      <text x="160" y="156" textAnchor="middle" fontSize="11" letterSpacing="2" fontFamily="ui-monospace, Menlo, monospace" fill="rgba(255,255,255,0.5)">FORWARD</text>
      <text x="160" y="172" textAnchor="middle" fontSize="11" letterSpacing="2" fontFamily="ui-monospace, Menlo, monospace" fill="rgba(255,255,255,0.5)">ENGINEERING</text>
    </svg>
  </div>
);

const App = () => (
  <>
    <Nav active="home" />
    <main>
      <HomeHero />
      <TwoMotions />
      <FlagshipBand />
      <ProofStrip />
      <EngineSection />
      <FlywheelSection />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
