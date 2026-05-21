// Discipline detail page template — used by strategic-advisory, transformation-leadership, operations-leadership
window.renderDiscipline = function renderDiscipline(cfg) {
  const Page = () => (
    <>
      <Nav active="stack" />
      <main>
        <section className="ms-hero">
          <div className="ms-hero__wash"></div>
          <div className="ms-container ms-hero__inner">
            <Breadcrumb items={[
              { label: "MangoStack", href: "index.html" },
              { label: "The Stack", href: "the-stack.html" },
              { label: cfg.title },
            ]} />
            <div className="eyebrow">THE STACK · {cfg.title.toUpperCase()}</div>
            <h1 className="display" style={{ fontSize: "clamp(44px, 5.6vw, 76px)" }}>{cfg.heroBefore}<span className="grad-text">{cfg.heroGrad}</span>{cfg.heroAfter}</h1>
            <p className="lede">{cfg.pitch1}</p>
            <p className="lede" style={{ marginBottom: 0 }}>{cfg.pitch2}</p>
          </div>
        </section>

        <section className="prose-section prose-section--alt">
          <div className="ms-container two-col">
            <div>
              <div className="eyebrow">WHAT WE LEAD</div>
              <h2>{cfg.leadHeading}</h2>
              <ul className="bulleted">{cfg.lead.map((l,i) => <li key={i}>{l}</li>)}</ul>
            </div>
            <div>
              <div className="eyebrow">AI IN {cfg.title.toUpperCase()}</div>
              <h2>{cfg.aiHeading}</h2>
              <p>{cfg.aiBody}</p>
              <div className="callout">{cfg.bestFor}</div>
            </div>
          </div>
        </section>

        <section className="prose-section">
          <div className="ms-container">
            <div className="eyebrow">ENGAGEMENT SHAPE</div>
            <h2>{cfg.shapeHeading}</h2>
            <div className="kv-list" style={{ maxWidth: 760, marginTop: 24 }}>
              {cfg.shape.map((s,i) => (
                <div className="kv" key={i}>
                  <div className="kv__lbl">{s.lbl}</div>
                  <div className="kv__val">{s.val}</div>
                </div>
              ))}
            </div>
            <a href="contact.html" className="btn-primary" style={{ marginTop: 32 }}>{cfg.cta} →</a>
          </div>
        </section>

        <section className="prose-section prose-section--alt">
          <div className="ms-container">
            <div className="eyebrow">OTHER LAYERS</div>
            <h2>The rest of the stack.</h2>
            <div className="other-layers">
              {cfg.others.map((o,i) => (
                <a className="disc-card is-in" key={i} style={{ "--i": i }} href={o.href}>
                  <div className="disc-card__num">{o.num}</div>
                  <h3 className="disc-card__title">{o.title}</h3>
                  <p className="disc-card__desc">{o.desc}</p>
                  <div className="disc-card__foot">
                    <span className="pill-mini">{o.shape}</span>
                    <span className="arrow">Learn more →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
  ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
};

// All three discipline configs, keyed by id so each html selects its own.
window.disciplineConfigs = {
  "strategic-advisory": {
    title: "Strategic Advisory",
    heroBefore: "Strategy that ends in a ",
    heroGrad: "shipped plan",
    heroAfter: ".",
    pitch1: "Most strategy decks die in a drawer. We do the strategy work — but we stay long enough to translate it into a roadmap, named owners, and the first 90 days of execution. Then we hand back.",
    pitch2: "We bring fifteen years of operating experience to the strategy table — meaning the plan we hand you is one we know how to execute, because we've executed plans like it before.",
    leadHeading: "What we lead.",
    lead: [
      "Diagnostic of where you are vs. where you want to be",
      "Prioritised initiative list with cost, effort, and expected outcome",
      "Innovation discovery sprints — from idea to first paying customer (where relevant)",
      "90-day execution plan with named owners and weekly cadence",
      "Optional: we run the first 90 days for you",
    ],
    aiHeading: "AI in Strategic Advisory.",
    aiBody: "We help leadership teams cut through AI hype and identify where AI actually moves the needle. Where AI is the answer, we can plug in Workforce Atlas — our AI workforce audit — to make the roadmap shippable rather than theoretical.",
    bestFor: "Best for: leadership teams who know they need to change direction but don't yet have the team — or the time — to execute it.",
    shapeHeading: "Engagement shape.",
    shape: [
      { lbl: "DURATION", val: "4–8 weeks" },
      { lbl: "SHAPE", val: "Fixed scope · fixed deliverables" },
      { lbl: "LEAD", val: "Senior-operator-led, end-to-end" },
      { lbl: "OPTIONAL", val: "We run the first 90 days for you" },
    ],
    cta: "Talk to us about your strategy challenge",
    others: [
      { num: "02 — TRANSFORMATION LEADERSHIP", title: "Run your transformation with someone who's done it.", desc: "Programme governance, multi-market rollouts, stakeholder management, vendor and partner orchestration.", shape: "Monthly retainer", href: "transformation-leadership.html" },
      { num: "03 — OPERATIONS LEADERSHIP", title: "The operating system of your business.", desc: "Operating models, tooling stacks, workflow automation, internal dashboards. AI-augmented where it earns its keep.", shape: "Project or fractional", href: "operations-leadership.html" },
    ],
  },
  "transformation-leadership": {
    title: "Transformation Leadership",
    heroBefore: "Run your transformation with someone who's ",
    heroGrad: "done it",
    heroAfter: " before.",
    pitch1: "Hire a senior Transformation Lead fractionally or full-time, embedded in your team. We run the programme, manage stakeholders, unblock delivery, and report up — so your existing leadership can keep the lights on.",
    pitch2: "We've led transformations across large, regulated, multi-stakeholder programmes where execution discipline determined the outcome.",
    leadHeading: "What we lead.",
    lead: [
      "Programme governance and stakeholder management",
      "Workstream design, sequencing, and dependency management",
      "Vendor and partner management",
      "Risk, change, and adoption planning",
      "Multi-market rollouts and post-funding scale-up",
      "Exec and board reporting",
    ],
    aiHeading: "AI in Transformation Leadership.",
    aiBody: "AI-augmented programme delivery — automated reporting, intelligent dependency tracking, AI-assisted communications and stakeholder updates. The transformation runs faster because the overhead does.",
    bestFor: "Best for: companies running a digital, operational, or organisational transformation that's stalling — or about to start, and needing a steady hand who has done it at scale.",
    shapeHeading: "Engagement shape.",
    shape: [
      { lbl: "CADENCE", val: "2–5 days/week" },
      { lbl: "DURATION", val: "3–12 months" },
      { lbl: "SHAPE", val: "Embedded · monthly retainer" },
      { lbl: "LEAD", val: "Senior-operator-led, supported by our vetted network" },
    ],
    cta: "See if a fractional Transformation Lead fits",
    others: [
      { num: "01 — STRATEGIC ADVISORY", title: "Strategy that ends in a shipped plan.", desc: "Diagnostics, prioritised initiatives, 90-day plans with named owners. Optional: we run the first 90 days.", shape: "Fixed scope", href: "strategic-advisory.html" },
      { num: "03 — OPERATIONS LEADERSHIP", title: "The operating system of your business.", desc: "Operating models, tooling stacks, workflow automation, internal dashboards. AI-augmented where it earns its keep.", shape: "Project or fractional", href: "operations-leadership.html" },
    ],
  },
  "operations-leadership": {
    title: "Operations Leadership",
    heroBefore: "The operating system of your business — ",
    heroGrad: "designed and led",
    heroAfter: ".",
    pitch1: "Most companies are held together by spreadsheets and goodwill. We design and lead the operations function that makes your business reliable, visible, and scalable — so your team stops firefighting and starts compounding.",
    pitch2: "This has been our experience over fifteen years: building operating structures, KPI frameworks, and execution dashboards used at Cellulant across 14 markets, ImaliClick across multiple countries, and most recently Finca International across Uganda and Malawi.",
    leadHeading: "What we lead.",
    lead: [
      "Operating model design and process architecture",
      "Operational tooling stack (CRM, ops, finance, comms)",
      "Workflow automation and integration",
      "Internal dashboards and reporting",
      "Vendor selection and operational governance",
      "AI-augmented operations and agent workflows",
    ],
    aiHeading: "AI in Operations Leadership.",
    aiBody: "This is where AI is most underused — and most valuable. We design ops functions where AI handles the repeatable work so humans lead, decide, and grow. Where the work is repeatable enough, we run Workforce Atlas. Where the work is judgement-heavy, HowCraft is the next layer (in build).",
    bestFor: "Best for: founders drowning in manual ops, scale-ups whose tools haven't kept up, or teams ready to embed AI into how their business actually runs.",
    shapeHeading: "Engagement shape.",
    shape: [
      { lbl: "OPTION A", val: "Project-based, 4–12 weeks · fixed scope" },
      { lbl: "OPTION B", val: "Fractional Ops Lead · 2–5 days/week" },
      { lbl: "LEAD", val: "Senior-operator-led, supported by our vetted network" },
    ],
    cta: "Make your ops boring (in a good way)",
    others: [
      { num: "01 — STRATEGIC ADVISORY", title: "Strategy that ends in a shipped plan.", desc: "Diagnostics, prioritised initiatives, 90-day plans with named owners. Optional: we run the first 90 days.", shape: "Fixed scope", href: "strategic-advisory.html" },
      { num: "02 — TRANSFORMATION LEADERSHIP", title: "Run your transformation with someone who's done it.", desc: "Programme governance, multi-market rollouts, stakeholder management, vendor and partner orchestration.", shape: "Monthly retainer", href: "transformation-leadership.html" },
    ],
  },
};
