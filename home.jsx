// MangoStack — Homepage (v3 studio model)
const HomeHero = () => (
  <section className="ms-hero">
    <div className="ms-hero__wash"></div>
    <div className="ms-container ms-hero__inner">
      <div className="eyebrow">AI-NATIVE OPERATING STUDIO</div>
      <h1 className="display">
        We embed.<br/>
        We <span className="grad-text">ship</span>.
      </h1>
      <p className="lede">
        MangoStack is an AI-native operating studio. We embed senior operators into companies to run transformation, operations, and AI work — and we build software products from what we learn doing it.
      </p>
      <div className="ms-hero__ctas">
        <a href="contact.html" className="btn-primary">Book a discovery call</a>
        <a href="#products" className="btn-link">See what we ship →</a>
      </div>
      <div className="ms-hero__stats">
        <div className="stat__line">15 years operating financial services at scale.</div>
        <div className="stat__line">Multi-country fintech, banking, microfinance — built and delivered.</div>
        <div className="stat__line">3 products in market or in build.</div>
      </div>
    </div>
  </section>
);

const TwoTrack = () => {
  const [ref, on] = useReveal();
  return (
    <section className="ms-section" ref={ref} id="what-we-do">
      <div className="ms-container">
        <div className="eyebrow">WHAT WE DO</div>
        <h2 className="h1">We do two things, and they<br/>reinforce each other.</h2>
        <p className="lede">Consulting work tells us where the patterns are. Software products are how we scale them. Same operator brain across both.</p>
        <div className="two-track">
          <div className={`track ${on ? "is-in" : ""}`}>
            <div className="eyebrow track__eyebrow">THE STACK</div>
            <h3 className="track__title">Senior operators, embedded into your team</h3>
            <p className="track__body">We embed a senior operator into your business — fractionally, full-time, or as a project lead — across transformation, operations, and strategy. Fifteen years of senior operating experience across regulated industries. AI runs through how we work.</p>
            <a href="the-stack.html" className="btn-link">Explore the Stack →</a>
          </div>
          <div className={`track track--ship ${on ? "is-in" : ""}`}>
            <div className="eyebrow track__eyebrow">PRODUCTS</div>
            <h3 className="track__title">Software we ship from what we learn</h3>
            <p className="track__body">Three products in market or in build. Atlas is our AI workforce audit. ILR-Calc is a free, zero-data UK immigration readiness tool. HowCraft turns tribal knowledge into instant decisions.</p>
            <a href="products.html" className="btn-link">See the products →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const DiscCard = ({ i, num, title, desc, shape, href }) => {
  const [ref, on] = useReveal();
  return (
    <a href={href} ref={ref} className={`disc-card ${on ? "is-in" : ""}`} style={{ "--i": i }}>
      <div className="disc-card__num">{num}</div>
      <h3 className="disc-card__title">{title}</h3>
      <p className="disc-card__desc">{desc}</p>
      <div className="disc-card__foot">
        <span className="pill-mini">{shape}</span>
        <span className="arrow">Learn more →</span>
      </div>
    </a>
  );
};

const StackSection = () => (
  <section className="ms-section" style={{ paddingTop: 64 }}>
    <div className="ms-container">
      <div className="eyebrow">THE STACK</div>
      <h2 className="h1">Three disciplines.<br/>One operating stack.</h2>
      <p className="lede">Pick a layer, pick a few, or pick all three. Every engagement is led by a senior operator — supported by our vetted network across the UK and Africa. AI runs through how we work.</p>
      <div className="stack-grid">
        <DiscCard i={0} num="01 — STRATEGIC ADVISORY" title="Strategy that ends in a shipped plan, not a 60-page deck." desc="Diagnostics, prioritised initiatives, 90-day execution plans with named owners. Optional: we run the first 90 days for you." shape="4–8 weeks · fixed scope" href="strategic-advisory.html" />
        <DiscCard i={1} num="02 — TRANSFORMATION LEADERSHIP" title="Embedded senior leaders for org, process, or tech transformation programmes." desc="Programme governance, multi-market rollouts, stakeholder management, vendor and partner orchestration. Run by someone who's done it at scale." shape="2–5 days/wk · monthly retainer" href="transformation-leadership.html" />
        <DiscCard i={2} num="03 — OPERATIONS LEADERSHIP" title="The operating system of your business — designed, automated, AI-augmented." desc="Operating models, ops tooling stacks, workflow automation, internal dashboards. AI-augmented operations where it earns its keep." shape="Project-based · or fractional" href="operations-leadership.html" />
      </div>
    </div>
  </section>
);

// ---------- PRODUCTS (cream backdrop) ----------
const ProdCard = ({ status, status2, eyebrow, title, tagline, body, cta, href, target, meta }) => (
  <a href={href} target={target} rel={target === "_blank" ? "noopener" : undefined} className="prod-card">
    <div className="prod-card__pills">
      <Pill kind={status.kind}>{status.label}</Pill>
      {status2 && <Pill kind="neutral">{status2}</Pill>}
    </div>
    <div className="prod-card__eyebrow">{eyebrow}</div>
    <h3 className="prod-card__title">{title}</h3>
    <div className="prod-card__divider"></div>
    <p className="prod-card__tagline">{tagline}</p>
    <p className="prod-card__body">{body}</p>
    <div className="prod-card__cta">
      <span className="prod-card__cta-link">{cta} <span className="arrow-icon">→</span></span>
      {meta && <span className="prod-card__cta-meta">{meta}</span>}
    </div>
  </a>
);

const ProductsSection = () => (
  <section className="ms-section ms-products" id="products">
    <div className="ms-container">
      <div className="eyebrow eyebrow--cream">PRODUCTS</div>
      <h2 className="h1 h1--dark">What we ship.</h2>
      <p className="lede lede--dark">Three products, three different bets. Each is a real piece of software we've built or are building — solving an operational problem we kept seeing.</p>
      <div className="product-grid">
        <ProdCard
          status={{ kind: "live", label: "LIVE" }}
          status2="ZERO DATA COLLECTED"
          eyebrow="UK IMMIGRATION READINESS"
          title="ILR-Calc"
          tagline="Check your UK ILR readiness in minutes."
          body="A free readiness calculator for people preparing to apply for UK Indefinite Leave to Remain. No sign-up, no email, no tracking — your answers stay in your browser."
          cta="Open ILR-Calc"
          href="https://www.ilr-calc.co.uk"
          target="_blank"
          meta="ilr-calc.co.uk · new tab"
        />
        <ProdCard
          status={{ kind: "soon", label: "COMING SOON" }}
          status2="PRODUCT + SERVICE"
          eyebrow="AI WORKFORCE AUDIT"
          title="Workforce Atlas"
          tagline="Find the work AI should be doing in your firm."
          body="An AI workforce audit for high-performing firms — productised methodology plus the service to deploy it. UK Accounting first; more industries throughout 2026."
          cta="Learn more"
          href="workforce-atlas.html"
        />
        <ProdCard
          status={{ kind: "soon", label: "COMING SOON" }}
          eyebrow="DECISION ENGINE"
          title="HowCraft"
          tagline="Instant decisions for revenue teams."
          body="HowCraft turns tribal knowledge into instant, consistent decisions inside Slack and Teams. Launching first for deal desks and revenue operations."
          cta="Join the waitlist"
          href="howcraft.html"
        />
      </div>
      <div className="products-closer">
        MangoStack ships software the same way we run engagements: senior-led, no junior padding, built to be useful. If you're working on a similar problem, we'd like to hear from you.
      </div>
    </div>
  </section>
);

// ---------- AI BAND ----------
const AIBand = () => (
  <section className="ms-section ms-ai">
    <div className="ms-ai__wash"></div>
    <div className="ms-container ms-ai__inner">
      <div className="eyebrow eyebrow--on-grad">AI TRANSFORMATION</div>
      <h2 className="h1">Turn AI from a hype topic<br/>into a working part of your business.</h2>
      <p className="lede">Most AI strategies are written by people who've never run an operation. Ours isn't. We've deployed financial services across 14 markets, processed millions of transactions, and built operating systems for businesses that couldn't afford to break. We bring that operating discipline to AI.</p>
      <div className="pillars">
        <div className="pillar">
          <div className="pillar__num">01 — STRATEGY</div>
          <h3>Where AI moves the needle, and where it doesn't</h3>
          <p>Pragmatic identification of where AI actually creates leverage in your business — and the courage to say where it doesn't.</p>
        </div>
        <div className="pillar">
          <div className="pillar__num">02 — INTEGRATION</div>
          <h3>Getting AI into product and operations, in production</h3>
          <p>Pilot to production. Agents and models wrapped in a working operating model — built and shipped, not slidewared.</p>
        </div>
        <div className="pillar">
          <div className="pillar__num">03 — ADOPTION</div>
          <h3>Governance, team uplift, and AI literacy that sticks</h3>
          <p>Compliance designed in. Literacy programmes that change how the team actually works. Stickiness over launch hype.</p>
        </div>
      </div>
      <a href="ai-transformation.html" className="btn-primary">Explore AI Transformation →</a>
    </div>
  </section>
);

// ---------- HOW WE WORK preview ----------
const HowSection = () => (
  <section className="ms-section ms-light">
    <div className="ms-container">
      <div className="eyebrow eyebrow--cream">HOW WE WORK</div>
      <h2 className="h1 h1--dark">Fast, focused,<br/>outcome-shaped.</h2>
      <p className="lede lede--dark">We don't do open-ended retainers or 200-page strategies. Every engagement runs the same way — fast, focused, and outcome-shaped.</p>
      <div className="phase-row">
        {[
          ["01","WEEK 1","Discover","Listen, read, ask the hard questions."],
          ["02","WEEKS 2–3","Design","Map the path. You sign off before we build."],
          ["03","WEEKS 4+","Deliver","Weekly demos, weekly notes, no surprises."],
          ["04","WEEK n","Hand back","Document, train your team, exit cleanly."],
        ].map(([num, when, title, body], i) => (
          <div className="phase" key={i}>
            <div className="phase__head">
              <span className="phase__num">{num}</span>
              <span className="phase__when">{when}</span>
            </div>
            <h3 className="phase__title">{title}</h3>
            <p className="phase__body">{body}</p>
            {i < 3 && <div className="phase__connector"></div>}
          </div>
        ))}
      </div>
      <a href="how-we-work.html" className="btn-secondary btn-secondary--dark">See our full approach →</a>
    </div>
  </section>
);

// ---------- INDUSTRIES ----------
const IndustriesSection = () => (
  <section className="ms-section">
    <div className="ms-container">
      <div className="eyebrow">INDUSTRIES</div>
      <h2 className="h1">Where we go deep.</h2>
      <p className="lede">Fifteen years operating inside regulated industries where the cost of getting it wrong is high — and the reward for getting it right is durable.</p>
      <div className="ind-pills">
        {["Fintech & Embedded Finance","Banking & Financial Services","InsureTech","RegTech","Telecommunications","Microfinance & Inclusive Finance"].map(p => (
          <span className="ind-pill" key={p}>{p}</span>
        ))}
      </div>
      <p className="ind-thread"><span className="ind-thread__lbl">Common thread:</span> regulated, complex, high-stakes. We thrive where execution discipline matters more than ideas.</p>
    </div>
  </section>
);

// ---------- (Insights section removed — articles not yet published) ----------

const App = () => (
  <>
    <Nav active="home" />
    <main>
      <HomeHero />
      <TwoTrack />
      <StackSection />
      <ProductsSection />
      <AIBand />
      <HowSection />
      <IndustriesSection />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
