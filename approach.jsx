// Approach — Forward Engineering, studio model, why us
const ApHero = () => (
  <section className="ms-hero ms-hero--short-mid">
    <div className="ms-hero__wash"></div>
    <div className="ms-container ms-hero__inner">
      <Breadcrumb items={[{ label: "MangoStack", href: "index.html" }, { label: "Approach" }]} />
      <div className="eyebrow">APPROACH</div>
      <h1 className="display" style={{ fontSize: "clamp(56px, 9vw, 124px)" }}>
        Forward<br/><span className="grad-text">Engineering</span>.
      </h1>
      <p className="lede">How a studio that operates and a studio that builds are the same studio.</p>
    </div>
  </section>
);

const TheIdea = () => (
  <section className="ms-section" id="forward-engineering">
    <div className="ms-container">
      <div className="approach-grid">
        <div className="approach-grid__text">
          <div className="eyebrow">THE IDEA</div>
          <h2 className="h1" style={{ fontSize: "clamp(36px, 4.6vw, 56px)" }}>Two motions, one studio.</h2>
          <div className="approach-prose">
            <p><strong style={{ color: "var(--white)" }}>We deploy forward.</strong> Senior operators go inside the operation, onto the front line, where the real problems live — not advice from a distance. Forward-deployed leadership.</p>
            <p><strong style={{ color: "var(--white)" }}>We engineer forward.</strong> What the front line reveals, we engineer forward into production software. Building from the real problem to the shipped system.</p>
            <p>The flywheel: deploy forward → see the real problem → engineer it forward into software → deploy the software back into the front line. Each turn compounds.</p>
            <p>Pelvar is Forward Engineering made visible: a group-finance problem we saw up close, engineered forward into a product.</p>
          </div>
        </div>
        <div className="approach-grid__viz">
          <FlywheelLg/>
        </div>
      </div>
    </div>
  </section>
);

const FlywheelLg = () => (
  <div className="flywheel-svg flywheel-svg--lg" aria-hidden="true">
    <svg viewBox="0 0 400 400">
      <defs>
        <linearGradient id="fwa-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF8A00"/>
          <stop offset="100%" stopColor="#FFC107"/>
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(255,138,0,0.15)" strokeWidth="1" strokeDasharray="2 6"/>
      <circle cx="200" cy="200" r="150" fill="none" stroke="url(#fwa-g)" strokeWidth="1.6" strokeDasharray="240 700" strokeLinecap="round" className="flywheel-svg__rotate"/>
      {[
        { x: 200, y: 50, l1: "DEPLOY", l2: "Senior operator", l3: "→ embedded on the front line" },
        { x: 350, y: 200, l1: "SEE", l2: "The real problem", l3: "→ up close, in context" },
        { x: 200, y: 350, l1: "ENGINEER", l2: "Into software", l3: "→ forward from the problem" },
        { x: 50, y: 200, l1: "RETURN", l2: "To the front line", l3: "→ software back into ops" },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="10" fill="#0D1117" stroke="url(#fwa-g)" strokeWidth="2.2"/>
          <circle cx={n.x} cy={n.y} r="4" fill="url(#fwa-g)"/>
          <text x={n.x} y={n.y - 22} textAnchor="middle" fontSize="11" letterSpacing="2" fontFamily="ui-monospace, Menlo, monospace" fill="#FFC107">{n.l1}</text>
          <text x={n.x} y={n.y + 30} textAnchor="middle" fontSize="13" fill="#F5F5F5" fontWeight="500">{n.l2}</text>
          <text x={n.x} y={n.y + 46} textAnchor="middle" fontSize="10.5" fill="#94A3B8">{n.l3}</text>
        </g>
      ))}
      <text x="200" y="194" textAnchor="middle" fontSize="11" letterSpacing="2" fontFamily="ui-monospace, Menlo, monospace" fill="rgba(255,255,255,0.55)">FORWARD</text>
      <text x="200" y="212" textAnchor="middle" fontSize="11" letterSpacing="2" fontFamily="ui-monospace, Menlo, monospace" fill="rgba(255,255,255,0.55)">ENGINEERING</text>
    </svg>
  </div>
);

const WhyStudio = () => (
  <section className="ms-section ms-section--alt">
    <div className="ms-container">
      <div className="eyebrow">WHY A STUDIO</div>
      <h2 className="h1">It compounds.</h2>
      <div className="why-grid">
        {[
          {
            n: "01",
            t: "Services fund the build.",
            b: "Senior embedded operating work generates real revenue. It funds a software product line without the dilution of a typical seed round.",
          },
          {
            n: "02",
            t: "Services de-risk the build.",
            b: "We don't guess at what to build. We build software for problems we've seen inside a real operation — and we can deploy it inside that operation to see if it works.",
          },
          {
            n: "03",
            t: "A shared engineering and AI foundation.",
            b: "Every product shares an engineering, agentic, and operating spine. The second product ships faster than the first; the third faster than the second.",
          },
          {
            n: "04",
            t: "The finance line is the first flagship.",
            b: "Pelvar and Pipworth share one buyer, one platform, one story. The studio model has produced a product line, not a one-off.",
          },
        ].map(s => (
          <div className="why-item" key={s.n}>
            <div className="why-item__num">{s.n}</div>
            <h3 className="why-item__title">{s.t}</h3>
            <p className="why-item__body">{s.b}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Operating = () => (
  <section className="ms-section">
    <div className="ms-container">
      <div className="eyebrow">HOW THE STUDIO SHOWS UP</div>
      <h2 className="h1">Company-voiced.<br/>Institution-shaped.</h2>
      <p className="lede">MangoStack reads as a business with room to join — not a finished, closed shop. The work is led by senior operators who have run the operations and shipped the systems before. The credibility lives in the engagements and the products, and over time in named outcomes.</p>
      <figure className="op-quote">
        <blockquote>Deploy forward. Engineer forward. The same studio, two motions.</blockquote>
        <figcaption>— The MangoStack approach</figcaption>
      </figure>
    </div>
  </section>
);

const ApApp = () => (
  <>
    <Nav active="approach" />
    <main>
      <ApHero />
      <TheIdea />
      <WhyStudio />
      <Operating />
      <FinalCTA
        heading="Work with us."
        line="Two motions, one studio. Tell us where you'd like us to start."
        cta="Start a conversation →"
      />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<ApApp />);
