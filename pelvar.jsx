// Pelvar — flagship detail page
const { useState: useStateP } = React;

// (The schematic PelvarFlow stays on home/software-index; on the detail
// page we show the real product UI — see <PelvarUI /> from product-mocks.jsx.)

const PelvarHero = () => (
  <section className="prod-hero prod-hero--pelvar">
    <div className="ms-hero__wash"></div>
    <div className="ms-container" style={{ position: "relative", zIndex: 2 }}>
      <Breadcrumb items={[{ label: "Software", href: "software.html" }, { label: "Pelvar" }]} />
      <div className="prod-hero__pills">
        <Pill kind="soon">IN BUILD</Pill>
        <Pill kind="neutral-dark">DESIGN PARTNERS</Pill>
        <Pill kind="neutral-dark">FLAGSHIP</Pill>
      </div>
      <div className="eyebrow">PRODUCT · BY MANGOSTACK</div>
      <h1 className="h1 prod-hero__title">
        Pelvar — the agentic month-end close for UK groups.
      </h1>
      <div className="prod-hero__divider"></div>
      <p className="lede" style={{ maxWidth: 820 }}>
        Groups with multiple companies and currencies spend days every month combining their books by hand. Pelvar runs that close with an AI agent — reconciles the balances between entities, gets the currency right, and writes the result back into the accounts. Audit-ready group accounts in a fraction of the time.
      </p>
      <div className="prod-hero__ctas">
        <a href="#partners" className="btn-primary">Talk to us about Pelvar →</a>
        <a href="mailto:hello@mangostack.co.uk?subject=Pelvar%20enquiry" className="btn-link">hello@mangostack.co.uk</a>
      </div>
      <div className="prod-hero__product">
        <PelvarUI />
        <p className="prod-hero__product-cap">Pelvar · Group Close screen · in-build product UI</p>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section className="prose-section prose-section--alt">
    <div className="ms-container">
      <div className="eyebrow">THE PROBLEM</div>
      <h2>Group close, by hand, every month.</h2>
      <p>If you operate a UK group with more than one entity, the month-end consolidation looks roughly the same everywhere. Each entity closes its own books. Someone exports those books into a spreadsheet. Intercompany balances are matched by hand. Currencies are translated by hand. Adjustments are journaled, then re-journaled when something doesn't tie. The result is a group P&L, balance sheet, and trial balance that an auditor can sign off on — produced days later than the underlying entity closes.</p>
      <p>The problem is not the accounting. It is the volume of repetitive, exact work needed to do that accounting reliably across entities, currencies, and books that don't sit in the same system.</p>
      <div className="callout"><strong>The pattern.</strong> Multi-entity, multi-currency, mostly-on-Xero. A finance team that knows the answer is right but spends days proving it.</div>
    </div>
  </section>
);

const WhatItDoes = () => (
  <section className="prose-section">
    <div className="ms-container">
      <div className="eyebrow">WHAT PELVAR DOES</div>
      <h2>Three things, in the right order.</h2>
      <div className="pelvar-three">
        {[
          {
            n: "01",
            t: "Multi-currency intercompany that balances.",
            b: "Pelvar reconciles intercompany transactions across entities, translates between functional currencies, and surfaces the differences that actually need a human — not the ones that resolve themselves.",
          },
          {
            n: "02",
            t: "Write-back into the books.",
            b: "Adjustments don't sit in a spreadsheet. Pelvar posts elimination, translation, and consolidation entries back into the source accounting system, so the books and the consolidation never disagree.",
          },
          {
            n: "03",
            t: "An agent that runs the close.",
            b: "An AI agent runs the workflow end-to-end on a schedule, asks the team only for the judgement calls a human should make, and produces audit-ready group accounts at the end.",
          },
        ].map(s => (
          <div className="pelvar-three__item" key={s.n}>
            <div className="pelvar-three__num">{s.n}</div>
            <h3 className="pelvar-three__title">{s.t}</h3>
            <p className="pelvar-three__body">{s.b}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhoFor = () => (
  <section className="prose-section prose-section--alt">
    <div className="ms-container">
      <div className="eyebrow">WHO IT'S FOR</div>
      <h2>UK groups, on Xero.</h2>
      <div className="who-grid">
        <div className="who-grid__col">
          <h3 className="who-grid__h">Designed for</h3>
          <ul className="bulleted">
            <li>UK-headquartered groups with two or more operating entities</li>
            <li>Multi-currency books — typically GBP plus at least one of EUR, USD, NGN</li>
            <li>Finance teams running on Xero today (NetSuite to follow)</li>
            <li>A monthly close cadence with an external auditor signing off the result</li>
          </ul>
        </div>
        <div className="who-grid__col">
          <h3 className="who-grid__h">Adjacent, not yet</h3>
          <ul className="bulleted">
            <li>Single-entity businesses (the work is just close, not consolidation)</li>
            <li>Groups on a single mid-market ERP (less of a hand-stitched problem)</li>
            <li>Pure intra-region single-currency groups (lower-value first version)</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const StoryBlock = () => (
  <section className="prose-section">
    <div className="ms-container">
      <div className="eyebrow">WHY WE BUILT IT</div>
      <h2>Forward Engineering, made visible.</h2>
      <p>Pelvar started as a problem we saw up close — inside operating engagements, in finance teams losing the first week of every month to a manual group close. We engineered it forward into a product: an agent for the close, built by people who have run the close.</p>
      <p>It is the first place the studio's flywheel has produced a flagship.</p>
      <div className="callout"><strong>The line continues.</strong> Pelvar sits alongside <a href="pipworth.html" style={{ color: "var(--white)" }}>Pipworth</a>, agentic cash application — one platform, one buyer, one finance team.</div>
    </div>
  </section>
);

const PartnerForm = () => {
  const [sent, setSent] = useStateP(false);
  return (
    <section className="prose-section prose-section--alt" id="partners">
      <div className="ms-container" style={{ maxWidth: 720 }}>
        <div className="eyebrow">TALK TO US</div>
        <h2>Design partner enquiries.</h2>
        <p>Pelvar is in build with a small number of design partners. If you run a UK multi-entity group, close monthly, and want to be part of shaping the product — get in touch and we'll be in contact within one business day.</p>
        {!sent ? (
          <form className="contact-form" style={{ marginTop: 32 }} onSubmit={async (e) => { e.preventDefault(); await submitForm(e.currentTarget, { subject: "Pelvar — design partner enquiry" }); setSent(true); }}>
            <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
            <input type="hidden" name="source" value="Pelvar design partner" />
            <div className="field-row">
              <label className="field"><span>Name *</span><input name="name" type="text" required placeholder="Your name" /></label>
              <label className="field"><span>Work email *</span><input name="email" type="email" required placeholder="you@group.com" /></label>
            </div>
            <div className="field-row">
              <label className="field"><span>Group *</span><input name="company" type="text" required placeholder="Group / company" /></label>
              <label className="field"><span>Your role</span><input name="role" type="text" placeholder="e.g. Group Financial Controller" /></label>
            </div>
            <div className="field-row">
              <label className="field"><span>Entities in the group *</span>
                <select name="entities" required defaultValue="">
                  <option value="" disabled>Choose one</option>
                  <option>2–3</option>
                  <option>4–6</option>
                  <option>7–12</option>
                  <option>13+</option>
                </select>
              </label>
              <label className="field"><span>Accounting system *</span>
                <select name="system" required defaultValue="">
                  <option value="" disabled>Choose one</option>
                  <option>Xero (all entities)</option>
                  <option>Xero (some entities)</option>
                  <option>NetSuite</option>
                  <option>Mixed / other</option>
                </select>
              </label>
            </div>
            <label className="field"><span>What does close look like today?</span><textarea name="context" rows="3" placeholder="Optional — a sentence or two on how you close, where it hurts, and what you'd like Pelvar to do"></textarea></label>
            <p className="form-consent">By submitting, you agree we can contact you about Pelvar. We store your details per our <a href="privacy.html">Privacy notice</a> until you ask us to remove them.</p>
            <button className="btn-primary btn-full" type="submit">Send</button>
          </form>
        ) : (
          <div className="form-thanks" style={{ background: "var(--navy-2)", border: "1px solid var(--line)", borderRadius: 16, padding: 32 }}>
            <div className="form-thanks__check">✓</div>
            <h3>Thanks — we'll be in touch within one business day.</h3>
            <p>— The MangoStack team</p>
          </div>
        )}
      </div>
    </section>
  );
};

const PelvarApp = () => (
  <>
    <Nav active="software" />
    <main>
      <PelvarHero />
      <Problem />
      <WhatItDoes />
      <WhoFor />
      <StoryBlock />
      <PartnerForm />
      <FinalCTA
        heading="Pelvar."
        line="Audit-ready group accounts in a fraction of the time."
        cta="Talk to us about Pelvar →"
        href="#partners"
      />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<PelvarApp />);
