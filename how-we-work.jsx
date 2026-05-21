// How We Work
const HowApp = () => (
  <>
    <Nav active="how" />
    <main>
      <section className="ms-hero">
        <div className="ms-hero__wash"></div>
        <div className="ms-container ms-hero__inner">
          <Breadcrumb items={[{ label: "MangoStack", href: "index.html" }, { label: "How We Work" }]} />
          <div className="eyebrow">HOW WE WORK</div>
          <h1 className="display" style={{ fontSize: "clamp(48px, 6.2vw, 88px)" }}>
            Fast, focused,<br/><span className="grad-text">outcome-shaped</span>.
          </h1>
          <p className="lede">We don't do open-ended retainers or 200-page strategies. Every engagement runs the same way.</p>
        </div>
      </section>

      <section className="ms-section ms-light">
        <div className="ms-container">
          <div className="eyebrow eyebrow--cream">THE FOUR PHASES</div>
          <h2 className="h1 h1--dark">A predictable rhythm.</h2>
          <div className="phase-row">
            {[
              ["01","WEEK 1","Discover","We listen, read, and ask hard questions. By end of week one, we agree the goal, the constraints, and how success is measured."],
              ["02","WEEKS 2–3","Design","We map the path. A short plan with named outcomes, owners, milestones, and a working budget. You sign off before we build."],
              ["03","WEEKS 4+","Deliver","We embed and execute. Weekly demos, weekly progress notes, no surprises. We unblock as fast as we ship."],
              ["04","WEEK n","Hand back","We document, train your team, and exit cleanly. No retainer creep, no dependency. We're successful when you don't need us anymore."],
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

      <section className="prose-section">
        <div className="ms-container">
          <div className="eyebrow">PRINCIPLES</div>
          <h2>How we operate.</h2>
          <ul className="bulleted">
            <li><strong style={{ color: "var(--white)" }}>Senior, hands-on</strong> — every engagement is led by a senior operator with 15 years in the seat, supported by our vetted network</li>
            <li><strong style={{ color: "var(--white)" }}>Outcomes over hours</strong> — success is measured by what changed in your business</li>
            <li><strong style={{ color: "var(--white)" }}>Fixed scope</strong> (where we can) — predictable engagements, no scope drift</li>
            <li><strong style={{ color: "var(--white)" }}>Weekly demos</strong> — visible progress every Friday</li>
            <li><strong style={{ color: "var(--white)" }}>Built to hand back</strong> — every artefact is documented for your team to own</li>
            <li><strong style={{ color: "var(--white)" }}>AI used where it earns its keep</strong> — agents and automation where they create real leverage</li>
          </ul>
        </div>
      </section>

      <section className="prose-section prose-section--alt">
        <div className="ms-container">
          <div className="eyebrow">HOW WE'D WORK WITH YOU</div>
          <h2>Illustrative scenarios.</h2>
          <p style={{ maxWidth: 720, marginBottom: 0 }}>The scenarios below are illustrative — the kinds of engagements we run. We'll publish full case studies as client work clears for sharing.</p>
          <div className="scen-grid">
            {[
              {
                tag: "SERIES B FINTECH",
                title: "Post-funding operations scale-up",
                ctx: "Just closed Series B. Headcount about to double. Existing operations held together by founder energy and spreadsheets.",
                lead: "Embedded Director of Operations 3 days/week for six months. Design the operating model for the next 18 months of growth, build the tooling stack, hire and onboard the permanent COO, hand back.",
                out: "Operating model documented and adopted, tooling stack live, permanent COO in seat by month six.",
              },
              {
                tag: "SCALE-UP ACCOUNTING",
                title: "AI under board pressure",
                ctx: "Mid-market accounting firm. Board wants an \"AI strategy.\" Multiple proofs of concept across the firm, none in production.",
                lead: "Atlas audit (productised methodology) followed by an AI Embedment programme. Map current workflows, design the AI workforce, run the first two automations to production.",
                out: "Audit report and 90-day roadmap delivered, two AI employees live in production, internal AI lead identified.",
              },
              {
                tag: "INSURETECH",
                title: "Expanding into a new market",
                ctx: "UK InsureTech entering two new markets in twelve months. Operating model in home market doesn't translate.",
                lead: "Twelve-week Transformation Programme. Diagnostic of home-market operating model, design for new markets, build the deployment plan, support go-live in market one.",
                out: "Two-market operating model signed off, market one live on schedule, country lead in seat for market two.",
              },
            ].map((s, i) => (
              <div className="scen-card" key={i}>
                <div className="scen-card__tag">{s.tag}</div>
                <h3 className="scen-card__title">{s.title}</h3>
                <div className="scen-card__row">
                  <div className="scen-card__lbl">CONTEXT</div>
                  <p>{s.ctx}</p>
                </div>
                <div className="scen-card__row">
                  <div className="scen-card__lbl">WHAT WE'D LEAD</div>
                  <p>{s.lead}</p>
                </div>
                <div className="scen-card__row scen-card__row--out">
                  <div className="scen-card__lbl scen-card__lbl--green">OUTCOME SHAPE</div>
                  <p>{s.out}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<HowApp />);
