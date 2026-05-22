// The Stack overview page
const StackHero = () =>
<section className="ms-hero">
    <div className="ms-hero__wash"></div>
    <div className="ms-container ms-hero__inner">
      <Breadcrumb items={[{ label: "MangoStack", href: "index.html" }, { label: "The Stack" }]} />
      <div className="eyebrow">THE LEADERSHIP STACK</div>
      <h1 className="display" style={{ fontSize: "clamp(48px, 6.4vw, 88px)" }}>
        Four disciplines.<br />One <span className="grad-text">stack</span>.
      </h1>
      <p className="lede">Pick a layer, pick a few, or pick all four. Every engagement is led with high expertise — and AI runs through how we work.</p>
    </div>
  </section>;


const DiscBlock = ({ num, eyebrow, title, p1, p2, shape, href, reverse }) =>
<section className="ms-section" style={{ paddingTop: 48, paddingBottom: 48 }}>
    <div className="ms-container" style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 60, alignItems: "center",
    direction: reverse ? "rtl" : "ltr"
  }}>
      <div style={{ direction: "ltr" }}>
        <div style={{ fontSize: 13, color: "var(--orange)", fontWeight: 600, letterSpacing: "0.14em", marginBottom: 20 }}>{num}</div>
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="h1" style={{ fontSize: "clamp(32px,3.6vw,48px)" }}>{title}</h2>
        <p className="body-text" style={{ fontSize: 17, marginBottom: 14 }}>{p1}</p>
        <p className="body-text" style={{ fontSize: 17 }}>{p2}</p>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 28, flexWrap: "wrap" }}>
          <a href={href} className="btn-primary">Read more →</a>
          <span className="pill-mini">{shape}</span>
        </div>
      </div>
      <div style={{ direction: "ltr" }}>
        <DiscArt num={num} />
      </div>
    </div>
  </section>;


const DiscArt = ({ num }) => {
  const i = parseInt(num) - 1;
  const visuals = [
  // 01 — Strategic Advisory: stacked plan rectangles
  <svg viewBox="0 0 400 320" width="100%" style={{ display: "block" }}>
      <defs>
        <linearGradient id={`g1${num}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF8A00" /><stop offset="100%" stopColor="#FFC107" />
        </linearGradient>
      </defs>
      <rect x="60" y="40" width="280" height="48" rx="8" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
      <rect x="60" y="100" width="220" height="48" rx="8" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
      <rect x="60" y="160" width="260" height="48" rx="8" fill={`url(#g1${num})`} opacity="0.18" stroke={`url(#g1${num})`} strokeWidth="1.5" />
      <rect x="60" y="220" width="180" height="48" rx="8" fill={`url(#g1${num})`} />
      <text x="80" y="251" fontSize="14" fontWeight="600" fontFamily="Poppins" fill="#0D1117">SHIPPED →</text>
    </svg>,
  // 02 — Transformation: connected nodes (programme governance)
  <svg viewBox="0 0 400 320" width="100%" style={{ display: "block" }}>
      <defs>
        <linearGradient id={`g2${num}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF8A00" /><stop offset="100%" stopColor="#FFC107" />
        </linearGradient>
      </defs>
      <line x1="200" y1="160" x2="80" y2="80" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
      <line x1="200" y1="160" x2="320" y2="80" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
      <line x1="200" y1="160" x2="80" y2="240" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
      <line x1="200" y1="160" x2="320" y2="240" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
      <circle cx="80" cy="80" r="14" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      <circle cx="320" cy="80" r="14" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      <circle cx="80" cy="240" r="14" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      <circle cx="320" cy="240" r="14" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      <circle cx="200" cy="160" r="36" fill={`url(#g2${num})`} />
      <text x="200" y="166" fontSize="13" fontWeight="600" fontFamily="Poppins" textAnchor="middle" fill="#0D1117">LEAD</text>
    </svg>,
  // 03 — Ops: grid + automation flow
  <svg viewBox="0 0 400 320" width="100%" style={{ display: "block" }}>
      <defs>
        <linearGradient id={`g3${num}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF8A00" /><stop offset="100%" stopColor="#FFC107" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3].map((c) => [0, 1, 2].map((r) =>
    <rect key={`${c}-${r}`} x={60 + c * 70} y={50 + r * 70} width="56" height="56" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
    ))}
      <rect x="60" y="50" width="56" height="56" rx="8" fill={`url(#g3${num})`} opacity="0.2" />
      <rect x="130" y="120" width="56" height="56" rx="8" fill={`url(#g3${num})`} opacity="0.5" />
      <rect x="200" y="120" width="56" height="56" rx="8" fill={`url(#g3${num})`} />
      <rect x="270" y="190" width="56" height="56" rx="8" fill={`url(#g3${num})`} opacity="0.7" />
      <path d="M88 78 Q 130 100 158 148 T 228 148 Q 270 170 298 218" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" strokeDasharray="3 4" />
    </svg>,
  // 04 — FDE: terminal/code window with deployed line
  <svg viewBox="0 0 400 320" width="100%" style={{ display: "block" }}>
      <defs>
        <linearGradient id={`g4${num}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF8A00" /><stop offset="100%" stopColor="#FFC107" />
        </linearGradient>
      </defs>
      <rect x="40" y="40" width="320" height="240" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
      <circle cx="60" cy="62" r="4" fill="rgba(255,255,255,0.3)" />
      <circle cx="76" cy="62" r="4" fill="rgba(255,255,255,0.3)" />
      <circle cx="92" cy="62" r="4" fill="rgba(255,255,255,0.3)" />
      <line x1="40" y1="84" x2="360" y2="84" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <rect x="60" y="104" width="200" height="6" rx="3" fill="rgba(255,255,255,0.22)" />
      <rect x="60" y="122" width="240" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <rect x="80" y="140" width="170" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <rect x="80" y="158" width="210" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <rect x="60" y="180" width="160" height="6" rx="3" fill={`url(#g4${num})`} />
      <rect x="60" y="198" width="120" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <rect x="60" y="230" width="148" height="32" rx="8" fill={`url(#g4${num})`} />
      <text x="82" y="251" fontSize="13" fontWeight="600" fontFamily="Poppins" fill="#0D1117">DEPLOYED →</text>
    </svg>];

  return (
    <div style={{
      borderRadius: 18,
      background: "linear-gradient(135deg, #0a0e13 0%, #161B22 50%, #0a0e13 100%)",
      border: "1px solid var(--line)",
      padding: 28,
      position: "relative", overflow: "hidden"
    }}>
      <div style={{ position: "absolute", inset: "auto -20% -20% auto", width: 240, height: 240, background: "radial-gradient(circle, rgba(255,138,0,0.20), transparent 70%)", filter: "blur(30px)" }}></div>
      <div style={{ position: "relative", zIndex: 1 }}>{visuals[i]}</div>
    </div>);

};

const StackApp = () =>
<>
    <Nav active="stack" />
    <main>
      <StackHero />
      <DiscBlock
      num="01"
      eyebrow="STRATEGIC ADVISORY"
      title="Strategy that ends in a shipped plan."
      p1="Most strategy decks die in a drawer. We do the strategy work — but we stay long enough to translate it into a roadmap, named owners, and the first 90 days of execution."
      p2="We bring fifteen years of operating experience to the strategy table — meaning the plan we hand you is one we know how to execute, because we've executed plans like it before."
      shape="4–8 weeks · fixed scope"
      href="strategic-advisory.html" />
    
      <div style={{ borderTop: "1px solid var(--line)" }}></div>
      <DiscBlock
      num="02"
      reverse
      eyebrow="TRANSFORMATION LEADERSHIP"
      title="Run your transformation with someone who's done it before."
      p1="Hire a senior Transformation Lead fractionally or full-time, embedded in your team. We run the programme, manage stakeholders, unblock delivery, and report up — so your existing leadership can keep the lights on."
      p2="We've led transformations across large, regulated, multi-stakeholder programmes where execution discipline determined the outcome."
      shape="2–5 days/wk · monthly retainer"
      href="transformation-leadership.html" />
    
      <div style={{ borderTop: "1px solid var(--line)" }}></div>
      <DiscBlock
      num="03"
      eyebrow="OPERATIONS LEADERSHIP"
      title="The operating system of your business — designed and led."
      p1="Most companies are held together by spreadsheets and goodwill. We design and lead the operations function that makes your business reliable, visible, and scalable — so your team stops firefighting and starts compounding."
      p2="This has been our experience over fifteen years: building operating structures, KPI frameworks, and execution dashboards used at Cellulant across 14 markets, ImaliClick across multiple countries, and most recently Finca International across Uganda and Malawi."
      shape="Project-based · or fractional"
      href="operations-leadership.html" />
    
      <div style={{ borderTop: "1px solid var(--line)" }}></div>
      <DiscBlock
      num="04"
      reverse
      eyebrow="FORWARD-DEPLOYED AI ENGINEERING"
      title="Engineer-operators who build the AI inside your business."
      p1="Hire one senior engineer-operator into your team. We build the AI software your business actually needs — and operate alongside it, so the thing we ship is the thing your team uses."
      p2="Most AI engineers ship code. Ours ship outcomes — because they've operated the business too. Workforce Atlas is what this engagement looks like, productised; where the work doesn't yet have a product, we run it directly."
      shape="3–5 days/wk · 3–6 months"
      href="forward-deployed-engineering.html" />
    
      <FinalCTA />
    </main>
    <Footer />
  </>;


ReactDOM.createRoot(document.getElementById("root")).render(<StackApp />);