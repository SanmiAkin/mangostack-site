// MangoStack — Operating page (the services / forward-deployed)
const OpHero = () => (
  <section className="ms-hero ms-hero--short-mid">
    <div className="ms-hero__wash"></div>
    <div className="ms-container ms-hero__inner">
      <Breadcrumb items={[{ label: "MangoStack", href: "index.html" }, { label: "Operating" }]} />
      <div className="eyebrow">OPERATING · FORWARD-DEPLOYED</div>
      <h1 className="display" style={{ fontSize: "clamp(48px, 7.2vw, 96px)" }}>
        We lead the work<br/>from <span className="grad-text">inside</span> your business.
      </h1>
      <p className="lede">Senior operators embedded into your team to run transformation, operations, and AI — to a result, then handed back.</p>
      <div className="ms-hero__ctas">
        <a href="contact.html" className="btn-primary">Start a conversation</a>
        <a href="#how" className="btn-link">How an engagement runs →</a>
      </div>
    </div>
  </section>
);

const HowWeDeploy = () => {
  const [ref, on] = useReveal();
  const items = [
    {
      tag: "01 / TRANSFORMATION PROGRAMMES",
      title: "Take a function from where it is to a defined future state.",
      body: "Embedded senior leadership for org, process, or technology transformation. Programme governance, multi-market rollouts, stakeholder management, vendor and partner orchestration — with accountability for the outcome.",
      shape: "2–5 days/wk · monthly retainer",
    },
    {
      tag: "02 / OPERATIONS LEADERSHIP",
      title: "Run or rebuild an operation so it scales.",
      body: "The operating system of the business — designed, instrumented, and AI-augmented where it earns its keep. Model, tooling, process, team. Built to run after we leave.",
      shape: "Project-based · or fractional",
    },
    {
      tag: "03 / AI EMBEDMENT",
      title: "Move AI from intention to production.",
      body: "Strategy that ends in something shipped. Integration with compliance designed in. Adoption that lasts after the launch demo. A senior engineer-operator can be embedded to build the actual software where it's needed.",
      shape: "3–5 days/wk · 3–6 months",
    },
  ];
  return (
    <section className="ms-section" ref={ref} id="how-we-deploy">
      <div className="ms-container">
        <div className="eyebrow">HOW WE DEPLOY</div>
        <h2 className="h1">Three engagement shapes.<br/>One operating brain.</h2>
        <p className="lede">Pick one; combine a few. Every engagement is led by a senior operator who has done the job before.</p>
        <div className="op-grid">
          {items.map((it, i) => (
            <div className={`op-item ${on ? "is-in" : ""}`} key={i} style={{ "--i": i }} id={i === 1 ? "operations" : i === 2 ? "ai" : undefined}>
              <div className="op-item__tag">{it.tag}</div>
              <h3 className="op-item__title">{it.title}</h3>
              <p className="op-item__body">{it.body}</p>
              <div className="op-item__shape">{it.shape}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItRuns = () => (
  <section className="ms-section ms-light" id="how">
    <div className="ms-container">
      <div className="eyebrow eyebrow--cream">HOW AN ENGAGEMENT RUNS</div>
      <h2 className="h1 h1--dark">Discover. Design.<br/>Deliver. Hand back.</h2>
      <p className="lede lede--dark">Every engagement runs the same way — fast, focused, outcome-shaped. The team holds the capability when we step out.</p>
      <div className="phase-row">
        {[
          ["01","WEEK 1","Discover","Listen, read, sit with the team, ask the hard questions."],
          ["02","WEEKS 2–3","Design","Map the path. You sign off before we build."],
          ["03","WEEKS 4+","Deliver","Weekly demos, weekly notes, no surprises."],
          ["04","HAND BACK","Hand back","Document, train your team, exit cleanly. The team holds the capability."],
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
    </div>
  </section>
);

const AtlasBridge = () => (
  <section className="ms-section ms-section--alt">
    <div className="ms-container">
      <div className="eyebrow">THE METHOD, PRODUCTISED</div>
      <div className="atlas-bridge">
        <div className="atlas-bridge__text">
          <Pill kind="soon">COMING SOON</Pill>
          <h2 className="h1" style={{ marginTop: 18 }}>Workforce Atlas.</h2>
          <p className="lede">Atlas is how we map where a team's time goes, find the repetitive work, and design the small set of AI employees that take it on. The method behind our AI embedment work — productised, so a firm can engage it on its own.</p>
          <div className="ms-hero__ctas">
            <a href="workforce-atlas.html" className="btn-primary">Explore Workforce Atlas →</a>
          </div>
        </div>
        <div className="atlas-bridge__viz" aria-hidden="true">
          <div className="atlas-bridge__lattice">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="atlas-bridge__cell" style={{ "--i": i, opacity: i % 5 === 0 ? 1 : i % 3 === 0 ? 0.55 : 0.18 }}></span>
            ))}
          </div>
          <div className="atlas-bridge__label">A WORKFORCE MAP</div>
        </div>
      </div>
    </div>
  </section>
);

const Industries = () => (
  <section className="ms-section">
    <div className="ms-container">
      <div className="eyebrow">WHERE WE GO DEEP</div>
      <h2 className="h1">Regulated, complex,<br/>high-stakes.</h2>
      <p className="lede">Fifteen years operating inside industries where the cost of getting it wrong is high — and the reward for getting it right is durable.</p>
      <div className="ind-pills">
        {["Fintech & Embedded Finance","Banking & Financial Services","InsureTech","RegTech","Telecommunications","Microfinance & Inclusive Finance"].map(p => (
          <span className="ind-pill" key={p}>{p}</span>
        ))}
      </div>
      <p className="ind-thread"><span className="ind-thread__lbl">Common thread:</span> execution discipline matters more than ideas.</p>
    </div>
  </section>
);

const OpApp = () => (
  <>
    <Nav active="operating" />
    <main>
      <OpHero />
      <HowWeDeploy />
      <HowItRuns />
      <AtlasBridge />
      <Industries />
      <FinalCTA
        heading="Tell us what you're working on."
        line="One human reads every message and replies within one business day."
        cta="Start a conversation →"
      />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<OpApp />);
