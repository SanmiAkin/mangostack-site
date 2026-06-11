import React from "react";
import { Pill, Nav, Footer, submitForm, FinalCTA, Breadcrumb } from "../shared.jsx";
import { PipworthUI } from "../product-mocks.jsx";
// Pipworth — agentic cash application detail page
// Voice: quietly competent, finance-credible, no hype. British spelling.
const { useState: useStatePw } = React;

const PwHero = () => (
  <section className="prod-hero prod-hero--pipworth">
    <div className="ms-hero__wash"></div>
    <div className="ms-container" style={{ position: "relative", zIndex: 2 }}>
      <Breadcrumb items={[{ label: "Software", href: "software.html" }, { label: "Pipworth" }]} />
      <div className="prod-hero__pills">
        <Pill kind="soon">IN DEVELOPMENT</Pill>
        <Pill kind="neutral-dark">SIBLING IN THE FINANCE LINE</Pill>
      </div>
      <div className="eyebrow">PRODUCT · BY MANGOSTACK</div>
      <h1 className="h1 prod-hero__title">
        Get paid faster — without hiring.
      </h1>
      <div className="prod-hero__divider"></div>
      <p className="lede" style={{ maxWidth: 820 }}>
        Pipworth matches incoming payments to your invoices in minutes, not hours — so your finance team stops doing detective work and your cash position stops lagging reality.
      </p>
      <div className="prod-hero__ctas">
        <a href="#demo" className="btn-primary">Book a 20-minute demo</a>
        <a href="mailto:hello@mangostack.co.uk?subject=Pipworth%20enquiry" className="btn-link">hello@mangostack.co.uk</a>
      </div>
      <p className="prod-hero__trust">Works with Sage. Live in two weeks. No IT project.</p>
      <div className="prod-hero__product">
        <PipworthUI />
        <p className="prod-hero__product-cap">Pipworth · Explain-this-match screen · in-development product UI</p>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section className="prose-section prose-section--alt">
    <div className="ms-container">
      <div className="eyebrow">THE PROBLEM</div>
      <h2>Cash arrives. The work begins.</h2>
      <p>Payments land in your bank account with bad references — or no reference at all. One transfer covers five invoices. A customer short-pays without explanation. Somebody on the finance team works through them line by line, matching incoming cash to open invoices, posting allocations, chasing what won't add up.</p>
      <p>The numbers behind it are well-rehearsed: UK businesses are owed an estimated £26 billion in late payments at any time, and chasing it eats roughly 86 hours per business a year. The cost is not just the hours — it is the cash position that always lags reality, the credit control work that doesn't happen because the team is reconciling, and the month-end that drags on because the AR ledger isn't clean.</p>
      <div className="callout"><strong>The pattern.</strong> A finance team that knows how to apply cash, doing it manually for the hundredth time this month.</div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="prose-section">
    <div className="ms-container">
      <div className="eyebrow">HOW PIPWORTH WORKS</div>
      <h2>Four steps. No IT project.</h2>
      <div className="pw-steps">
        {[
          {
            n: "01",
            t: "Connect your bank and Sage.",
            b: "Secure Open Banking on one side, read-only ledger access where it works on the other. Setup is a single afternoon — not a procurement cycle.",
          },
          {
            n: "02",
            t: "Pipworth reads the data.",
            b: "Incoming payments from your bank feed. Open invoices, customers, and history from your ledger. No data leaves your environment that doesn't need to.",
          },
          {
            n: "03",
            t: "It matches them.",
            b: "Exact references, combined invoices, partial payments, the patterns your customers actually use to settle. Every match comes with its reasoning.",
          },
          {
            n: "04",
            t: "You approve — or let it post.",
            b: "Your choice, per the mode you set. Pipworth handles the routine; your team handles the judgement calls.",
          },
        ].map(s => (
          <div className="pw-step" key={s.n}>
            <div className="pw-step__num">{s.n}</div>
            <h3 className="pw-step__t">{s.t}</h3>
            <p className="pw-step__b">{s.b}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Modes = () => (
  <section className="prose-section prose-section--alt">
    <div className="ms-container">
      <div className="eyebrow">THREE MODES</div>
      <h2>You decide how much to hand over.</h2>
      <p style={{ maxWidth: 640 }}>Start cautious, scale as you trust it. The mode is your call — and you can change it whenever you want, per customer or across the ledger.</p>
      <div className="pw-modes">
        <div className="pw-mode">
          <div className="pw-mode__h">
            <div className="pw-mode__name">Suggest</div>
            <div className="pw-mode__sub">Full control</div>
          </div>
          <p className="pw-mode__b">Pipworth proposes every match; your team approves each one. Nothing posts without an explicit nod.</p>
        </div>
        <div className="pw-mode pw-mode--default">
          <div className="pw-mode__flag">DEFAULT</div>
          <div className="pw-mode__h">
            <div className="pw-mode__name">Hybrid</div>
            <div className="pw-mode__sub">The sweet spot</div>
          </div>
          <p className="pw-mode__b">Confident matches auto-apply. Anything below your threshold escalates to a human. Most teams settle here.</p>
        </div>
        <div className="pw-mode">
          <div className="pw-mode__h">
            <div className="pw-mode__name">Auto</div>
            <div className="pw-mode__sub">Hands-free</div>
          </div>
          <p className="pw-mode__b">Pipworth runs end-to-end. Your team only handles genuine exceptions — the matches Pipworth doesn't trust itself to call.</p>
        </div>
      </div>
    </div>
  </section>
);

const Trust = () => (
  <section className="prose-section">
    <div className="ms-container">
      <div className="eyebrow">WHY FINANCE TEAMS TRUST IT</div>
      <h2>Reasoning, not magic.</h2>
      <p style={{ maxWidth: 760 }}>Pipworth is built for the FD's first instinct — to ask <em>why</em>. Every match comes with the evidence, the alternatives considered, and the trail an auditor can follow.</p>
      <ul className="bulleted">
        <li><strong style={{ color: "var(--white)" }}>Every match comes with its reasoning</strong> — the invoices considered, the evidence in their favour, the alternatives ruled out.</li>
        <li><strong style={{ color: "var(--white)" }}>Complete audit trail on every decision</strong> — export-ready for your auditors, retained as long as you need.</li>
        <li><strong style={{ color: "var(--white)" }}>Human-in-the-loop by default</strong> — nothing posts to your ledger that your rules haven't allowed.</li>
        <li><strong style={{ color: "var(--white)" }}>You set the confidence thresholds and escalation rules</strong> — not us. Tighten them when you want, loosen them when you trust it.</li>
      </ul>
      <div className="callout"><strong>The screenshot above is the point.</strong> Open any Pipworth match and that's what you see: the payment, the invoices, the reasoning, the rule that fired. Reasoning is the product.</div>
    </div>
  </section>
);

const Outcomes = () => (
  <section className="prose-section prose-section--alt">
    <div className="ms-container">
      <div className="eyebrow">WHAT YOU GET</div>
      <h2>For the FD.</h2>
      <div className="pw-outcomes">
        {[
          ["Lower DSO", "A cash position that reflects reality, not last week."],
          ["Capacity back to the team", "Hours freed up for credit control, customer conversations, and analysis."],
          ["Cleaner month-end", "Cash applied through the period, not in a frantic week-one push."],
          ["Fewer keying errors", "Misallocations and rework dropping as the work moves out of the spreadsheet."],
        ].map(([t, b]) => (
          <div className="pw-outcome" key={t}>
            <div className="pw-outcome__bar"></div>
            <h3 className="pw-outcome__t">{t}</h3>
            <p className="pw-outcome__b">{b}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Integrations = () => (
  <section className="prose-section">
    <div className="ms-container">
      <div className="eyebrow">INTEGRATIONS</div>
      <h2>Sits alongside what you already run.</h2>
      <div className="pw-int">
        <div className="pw-int__col">
          <div className="pw-int__lbl">LEDGER</div>
          <p>Sage 200 and Sage Intacct today. Xero coming next.</p>
        </div>
        <div className="pw-int__col">
          <div className="pw-int__lbl">BANK</div>
          <p>Every major UK bank through regulated Open Banking. Single-afternoon connect.</p>
        </div>
        <div className="pw-int__col">
          <div className="pw-int__lbl">STACK</div>
          <p>No rip-and-replace. Pipworth slots in beside the systems your team uses today.</p>
        </div>
      </div>
    </div>
  </section>
);

const Security = () => (
  <section className="prose-section prose-section--alt">
    <div className="ms-container">
      <div className="eyebrow">SECURITY & COMPLIANCE</div>
      <h2>Built for finance from day one.</h2>
      <ul className="bulleted">
        <li>Open Banking access is <strong style={{ color: "var(--white)" }}>FCA-regulated</strong>; Pipworth never sees or stores your banking credentials.</li>
        <li><strong style={{ color: "var(--white)" }}>UK data residency.</strong> Your data stays where it should.</li>
        <li><strong style={{ color: "var(--white)" }}>GDPR-compliant by design.</strong></li>
        <li><strong style={{ color: "var(--white)" }}>Read-only access</strong> to your ledger wherever the workflow allows it. Write-back only on approval, under rules you set.</li>
        <li><strong style={{ color: "var(--white)" }}>In progress:</strong> SOC 2 Type II and ISO 27001 — labelled as such until certified.</li>
      </ul>
    </div>
  </section>
);

const Pricing = () => (
  <section className="prose-section">
    <div className="ms-container">
      <div className="eyebrow">PRICING</div>
      <h2>Priced to the work Pipworth does.</h2>
      <p style={{ maxWidth: 720 }}>Simple monthly pricing tied to your payment volume — not per-user seat fees that punish you for involving the team. Book a demo and we'll size it to your ledger in the same call.</p>
      <a href="#demo" className="btn-secondary">Book a demo for a quote →</a>
    </div>
  </section>
);

const Faq = () => {
  const items = [
    {
      q: "Does it work with my version of Sage?",
      a: "Sage 200 and Sage Intacct are supported today. We'll confirm your specific version on the demo call — the answer is almost always yes.",
    },
    {
      q: "How long does setup take?",
      a: "A single afternoon to connect the bank and the ledger. Two weeks to be live in your preferred mode, with rules tuned to your customers' actual payment patterns.",
    },
    {
      q: "Is my financial data safe?",
      a: "Open Banking is FCA-regulated and credential-less — Pipworth never sees your bank login. Ledger access is read-only wherever possible, write-back is gated by your rules, and your data stays in UK residency.",
    },
    {
      q: "What happens when Pipworth isn't sure about a match?",
      a: "It tells you so. The match goes to your team's inbox with the reasoning and the alternatives. In Hybrid mode this is the whole point: confident work runs automatically, uncertain work stays under human judgement.",
    },
    {
      q: "Do I lose control of my ledger?",
      a: "No. You set the confidence thresholds. You choose the mode. You decide what posts and what escalates. Pipworth is built around the rule that the finance team owns the ledger.",
    },
    {
      q: "What size of business is this for?",
      a: "Mid-market finance teams running Sage, applying somewhere between hundreds and tens of thousands of payments a month. If you're in that band and your AR ledger is hurting, the demo will be fast.",
    },
  ];
  return (
    <section className="prose-section prose-section--alt">
      <div className="ms-container" style={{ maxWidth: 820 }}>
        <div className="eyebrow">FAQ</div>
        <h2>Questions FDs ask first.</h2>
        <div className="pw-faq">
          {items.map((it, i) => (
            <details className="pw-faq__item" key={i}>
              <summary>
                <span className="pw-faq__q">{it.q}</span>
                <span className="pw-faq__chev" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <p className="pw-faq__a">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const DemoForm = () => {
  const [sent, setSent] = useStatePw(false);
  return (
    <section className="prose-section" id="demo">
      <div className="ms-container" style={{ maxWidth: 720 }}>
        <div className="eyebrow">BOOK A DEMO</div>
        <h2>See Pipworth run on your own ledger.</h2>
        <p>No commitment. We'll show you matches on your real data in the first call. Tell us a bit about your finance team and we'll be in touch within one business day.</p>
        {!sent ? (
          <form className="contact-form" style={{ marginTop: 32 }} onSubmit={async (e) => { e.preventDefault(); await submitForm(e.currentTarget, { subject: "Pipworth — demo request" }); setSent(true); }}>
            <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
            <input type="hidden" name="source" value="Pipworth demo" />
            <div className="field-row">
              <label className="field"><span>Name *</span><input name="name" type="text" required placeholder="Your name" /></label>
              <label className="field"><span>Work email *</span><input name="email" type="email" required placeholder="you@company.com" /></label>
            </div>
            <div className="field-row">
              <label className="field"><span>Company *</span><input name="company" type="text" required placeholder="Company" /></label>
              <label className="field"><span>Your role</span><input name="role" type="text" placeholder="e.g. Financial Director" /></label>
            </div>
            <div className="field-row">
              <label className="field"><span>Ledger *</span>
                <select name="ledger" required defaultValue="">
                  <option value="" disabled>Choose one</option>
                  <option>Sage 200</option>
                  <option>Sage Intacct</option>
                  <option>Xero</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="field"><span>Payments per month</span>
                <select name="volume" defaultValue="">
                  <option value="" disabled>Optional</option>
                  <option>Under 500</option>
                  <option>500–2,000</option>
                  <option>2,000–10,000</option>
                  <option>10,000+</option>
                </select>
              </label>
            </div>
            <label className="field"><span>Where does cash application hurt today?</span><textarea name="context" rows="3" placeholder="Optional — a sentence on the manual work, the DSO, or the month-end pressure"></textarea></label>
            <p className="form-consent">By submitting, you agree we can contact you about Pipworth. We store your details per our <a href="privacy.html">Privacy notice</a> until you ask us to remove them.</p>
            <button className="btn-primary btn-full" type="submit">Book a demo</button>
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

const PipworthApp = () => (
  <>
    <Nav active="software" />
    <main>
      <PwHero />
      <Problem />
      <HowItWorks />
      <Modes />
      <Trust />
      <Outcomes />
      <Integrations />
      <Security />
      <Pricing />
      <Faq />
      <DemoForm />
      <FinalCTA
        heading="Pipworth."
        line="Your cash, applied automatically. With the reasoning, the audit trail, and the control your finance team needs."
        cta="Book a demo →"
        href="#demo"
      />
    </main>
    <Footer />
  </>
);

export default PipworthApp;
