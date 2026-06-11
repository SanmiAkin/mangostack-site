import React from "react";
// MangoStack — shared components (Nav, Footer, Wordmark, Pills, etc.)
// v4 — new IA: Home / Operating / Software / Approach / Contact
const { useState, useEffect, useRef } = React;

const Wordmark = ({ height = 36 }) => (
  <img
    src="assets/mangostack-logo-reversed.png"
    alt="MangoStack"
    style={{ height, width: "auto", display: "block" }}
  />
);

const Pill = ({ kind = "neutral", children }) => (
  <span className={`pill pill--${kind}`}>{children}</span>
);

// Status dot for nav menu items
const StatusDot = ({ kind }) => (
  <span style={{
    width: 7, height: 7, borderRadius: "50%",
    background: kind === "live" ? "#22C55E" : kind === "build" ? "#FF8A00" : "#94A3B8",
    flexShrink: 0,
    boxShadow: kind === "live" ? "0 0 0 2px rgba(34,197,94,0.18)" : "none",
  }} />
);

const Nav = ({ active = "home" }) => {
  const [softOpen, setSoftOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Body scroll lock + Escape close while drawer is open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <>
    <div className="ms-nav-wrap">
      <header className="ms-nav">
        <a href="index.html" className="ms-nav__brand"><Wordmark height={34} /></a>
        <nav className="ms-nav__links">
          <a href="operating.html" className={active === "operating" ? "is-active" : ""}>Operating</a>
          <div
            className="ms-nav__dropdown"
            onMouseEnter={() => setSoftOpen(true)}
            onMouseLeave={() => setSoftOpen(false)}
          >
            <a href="software.html" className={active === "software" ? "is-active" : ""}>Software ▾</a>
            {softOpen && (
              <div className="ms-nav__menu">
                <a href="pelvar.html">
                  <strong><StatusDot kind="build" />Pelvar</strong>
                  <span>Agentic group close — in build</span>
                </a>
                <a href="pipworth.html">
                  <strong><StatusDot kind="build" />Pipworth</strong>
                  <span>Agentic cash application — in development</span>
                </a>
                <a href="workforce-atlas.html">
                  <strong><StatusDot kind="soon" />Workforce Atlas</strong>
                  <span>AI workforce audit — coming soon</span>
                </a>
                <a href="ilr-calc.html">
                  <strong><StatusDot kind="live" />ILR-Calc</strong>
                  <span>UK ILR readiness — live</span>
                </a>
              </div>
            )}
          </div>
          <a href="approach.html" className={active === "approach" ? "is-active" : ""}>Approach</a>
          <a href="contact.html" className={active === "contact" ? "is-active" : ""}>Contact</a>
        </nav>
        <a href="contact.html" className="btn-primary btn-sm ms-nav__cta">Start a conversation</a>
        <button
          className={`ms-nav__burger ${mobileOpen ? "is-open" : ""}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="ms-mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </header>
    </div>

      {/* Mobile drawer */}
      <div
        className={`ms-mobile-scrim ${mobileOpen ? "is-open" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      ></div>
      <aside
        id="ms-mobile-nav"
        className={`ms-mobile-nav ${mobileOpen ? "is-open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className="ms-mobile-nav__head">
          <a href="index.html" className="ms-nav__brand" onClick={() => setMobileOpen(false)}><Wordmark height={30} /></a>
          <button className="ms-mobile-nav__close" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
          </button>
        </div>
        <nav className="ms-mobile-nav__links">
          <a href="operating.html" className="ms-mobile-nav__top">Operating</a>
          <div className="ms-mobile-nav__group">
            <a href="software.html" className="ms-mobile-nav__group-head">Software</a>
            <a href="pelvar.html"><StatusDot kind="build" />Pelvar</a>
            <a href="pipworth.html"><StatusDot kind="build" />Pipworth</a>
            <a href="workforce-atlas.html"><StatusDot kind="soon" />Workforce Atlas</a>
            <a href="ilr-calc.html"><StatusDot kind="live" />ILR-Calc</a>
          </div>
          <a href="approach.html" className="ms-mobile-nav__top">Approach</a>
          <a href="contact.html" className="ms-mobile-nav__top">Contact</a>
        </nav>
        <div className="ms-mobile-nav__foot">
          <a href="contact.html" className="btn-primary btn-full">Start a conversation</a>
          <a href="mailto:hello@mangostack.co.uk" className="ms-mobile-nav__email">hello@mangostack.co.uk</a>
        </div>
      </aside>
    </>
  );
};

const Footer = () => (
  <footer className="ms-footer">
    <div className="ms-container ms-footer__grid">
      <div className="ms-footer__brand">
        <Wordmark height={30} />
        <p className="ms-footer__tag">Senior operators, embedded.<br/>Software, shipped.</p>
        <p className="ms-footer__addr">Registered in England & Wales · Company No. 17196444<br/>Office — London, UK</p>
      </div>
      <div>
        <div className="ms-footer__h">Operating</div>
        <ul>
          <li><a href="operating.html">Transformation programmes</a></li>
          <li><a href="operating.html#operations">Operations leadership</a></li>
          <li><a href="operating.html#ai">AI embedment</a></li>
          <li><a href="operating.html#how">How we deploy</a></li>
        </ul>
      </div>
      <div>
        <div className="ms-footer__h">Software</div>
        <ul>
          <li><a href="pelvar.html"><StatusDot kind="build" />Pelvar</a></li>
          <li><a href="pipworth.html"><StatusDot kind="build" />Pipworth</a></li>
          <li><a href="workforce-atlas.html"><StatusDot kind="soon" />Workforce Atlas</a></li>
          <li><a href="ilr-calc.html"><StatusDot kind="live" />ILR-Calc</a></li>
        </ul>
      </div>
      <div>
        <div className="ms-footer__h">Studio</div>
        <ul>
          <li><a href="approach.html">Approach</a></li>
          <li><a href="approach.html#forward-engineering">Forward Engineering</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <div className="ms-footer__h">Connect</div>
        <ul>
          <li><a href="mailto:hello@mangostack.co.uk">hello@mangostack.co.uk</a></li>
          <li><a href="https://calendly.com/sanmi-mangostack/30min" target="_blank" rel="noopener">Book a 30-min call</a></li>
        </ul>
      </div>
    </div>
    <div className="ms-container ms-footer__bottom">
      <span>© 2026 MangoStack Ltd.</span>
      <span><a href="privacy.html">Privacy</a> · <a href="terms.html">Terms</a> · <a href="cookies.html">Cookies</a></span>
    </div>
  </footer>
);

// ============================================================
// Form submission helper.
// Uses Web3Forms — submissions forward to hello@mangostack.co.uk.
// ============================================================
const MS_FORM_ENDPOINT = "https://api.web3forms.com/submit";
const MS_FORM_ACCESS_KEY = "4626c02e-d57a-476e-a0e1-8630dd9050aa";

const submitForm = async (formEl, { subject = "MangoStack enquiry" } = {}) => {
  const data = new FormData(formEl);
  if (MS_FORM_ENDPOINT && MS_FORM_ACCESS_KEY) {
    data.append("access_key", MS_FORM_ACCESS_KEY);
    data.append("subject", subject);
    data.append("from_name", "MangoStack website");
    if (!data.has("botcheck")) data.append("botcheck", "");
    try {
      const res = await fetch(MS_FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await res.json().catch(() => ({}));
      return res.ok && json.success !== false;
    } catch (e) {
      return mailtoFallback(data, subject);
    }
  }
  return mailtoFallback(data, subject);
};

const mailtoFallback = (data, subject) => {
  const lines = [];
  for (const [k, v] of data.entries()) {
    if (v && String(v).trim()) lines.push(`${k}: ${v}`);
  }
  const body = encodeURIComponent(lines.join("\n\n"));
  const subj = encodeURIComponent(subject);
  window.location.href = `mailto:hello@mangostack.co.uk?subject=${subj}&body=${body}`;
  return true;
};

const FinalCTA = ({ heading = "Tell us what you're working on.", line = "One human reads every message and replies within one business day.", cta = "Start a conversation →", href = "contact.html" }) => (
  <section className="ms-section ms-finalcta">
    <div className="ms-container ms-finalcta__inner">
      <h2 className="h1">{heading}</h2>
      <p className="lede lede--narrow">{line}</p>
      <a href={href} className="btn-primary">{cta}</a>
    </div>
  </section>
);

const useReveal = (threshold = 0.18) => {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true); return;
    }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setRevealed(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, revealed];
};

const Breadcrumb = ({ items }) => (
  <div className="breadcrumb">
    {items.map((it, i) => (
      <React.Fragment key={i}>
        {i > 0 && <span className="breadcrumb__sep">/</span>}
        {it.href ? <a href={it.href}>{it.label}</a> : <span>{it.label}</span>}
      </React.Fragment>
    ))}
  </div>
);

// ============================================================
// Forward Engineering visual — recurring brand motif.
// Renders the two-motion flywheel: deploy forward → engineer forward → loop.
// Used on the home hero and the Approach page.
// ============================================================
const ForwardEngine = ({ variant = "hero" }) => {
  // variant: 'hero' (animated, large) or 'static' (small, decorative)
  return (
    <div className={`fwd-engine fwd-engine--${variant}`} aria-hidden="true">
      <svg viewBox="0 0 520 360" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="fwd-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF8A00"/>
            <stop offset="100%" stopColor="#FFC107"/>
          </linearGradient>
          <linearGradient id="fwd-grad-soft" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF8A00" stopOpacity="0"/>
            <stop offset="50%" stopColor="#FF8A00" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#FFC107" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="fwd-grad-rev" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#FF8A00" stopOpacity="0"/>
            <stop offset="50%" stopColor="#FFC107" stopOpacity="0.45"/>
            <stop offset="100%" stopColor="#FF8A00" stopOpacity="0"/>
          </linearGradient>
        </defs>

        {/* The "front line" — vertical edge between operation and software */}
        <line x1="260" y1="40" x2="260" y2="320" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="2 6"/>
        <text x="260" y="28" fill="rgba(203,213,225,0.7)" fontSize="9" fontFamily="ui-monospace, Menlo, monospace" letterSpacing="2" textAnchor="middle">THE FRONT LINE</text>

        {/* LEFT — operation (dots clustered + people-line) */}
        <text x="40" y="62" fill="rgba(255,138,0,0.85)" fontSize="9" fontFamily="ui-monospace, Menlo, monospace" letterSpacing="2">OPERATION</text>
        <g className="fwd-engine__op" stroke="rgba(203,213,225,0.55)" strokeWidth="1.2" fill="none">
          {/* nine dots in a 3x3 lattice on the left */}
          {[80, 120, 160].map((x, xi) =>
            [120, 170, 220].map((y, yi) => (
              <circle key={`d-${xi}-${yi}`} cx={x} cy={y} r="3" fill="rgba(255,138,0,0.55)" stroke="none"/>
            ))
          )}
          {/* connective lines between dots */}
          <path d="M 80 120 L 160 120 M 80 170 L 160 170 M 80 220 L 160 220 M 80 120 L 80 220 M 120 120 L 120 220 M 160 120 L 160 220" stroke="rgba(255,138,0,0.18)" />
        </g>

        {/* RIGHT — software (stacked blocks being assembled) */}
        <text x="360" y="62" fill="rgba(255,193,7,0.85)" fontSize="9" fontFamily="ui-monospace, Menlo, monospace" letterSpacing="2">SOFTWARE</text>
        <g className="fwd-engine__sw">
          <rect x="350" y="190" width="120" height="34" rx="3" fill="none" stroke="rgba(255,193,7,0.7)" strokeWidth="1.4"/>
          <rect x="350" y="148" width="120" height="34" rx="3" fill="none" stroke="rgba(255,193,7,0.55)" strokeWidth="1.4"/>
          <rect x="350" y="106" width="120" height="34" rx="3" fill="none" stroke="rgba(255,193,7,0.4)" strokeWidth="1.4"/>
          <line x1="370" y1="207" x2="450" y2="207" stroke="rgba(255,193,7,0.7)" strokeWidth="1"/>
          <line x1="370" y1="165" x2="430" y2="165" stroke="rgba(255,193,7,0.55)" strokeWidth="1"/>
          <line x1="370" y1="123" x2="420" y2="123" stroke="rgba(255,193,7,0.4)" strokeWidth="1"/>
        </g>

        {/* TOP — deploy forward arrow (left to right, crossing the front line) */}
        <g className="fwd-engine__deploy">
          <text x="170" y="85" fill="rgba(255,255,255,0.7)" fontSize="10" fontFamily="ui-monospace, Menlo, monospace" letterSpacing="1.5">DEPLOY FORWARD</text>
          <line x1="40" y1="98" x2="500" y2="98" stroke="url(#fwd-grad-soft)" strokeWidth="1.5"/>
          <polygon points="500,98 492,94 492,102" fill="#FFC107"/>
        </g>

        {/* BOTTOM — engineer forward arrow (right to left, the flywheel return) */}
        <g className="fwd-engine__engineer">
          <text x="160" y="280" fill="rgba(255,255,255,0.7)" fontSize="10" fontFamily="ui-monospace, Menlo, monospace" letterSpacing="1.5">ENGINEER FORWARD</text>
          <line x1="500" y1="295" x2="40" y2="295" stroke="url(#fwd-grad-rev)" strokeWidth="1.5"/>
          <polygon points="40,295 48,291 48,299" fill="#FF8A00"/>
        </g>

        {/* Pulse markers travelling along each track */}
        <circle className="fwd-engine__pulse fwd-engine__pulse--top" r="3.5" fill="#FFC107"/>
        <circle className="fwd-engine__pulse fwd-engine__pulse--bottom" r="3.5" fill="#FF8A00"/>
      </svg>
    </div>
  );
};


export { Wordmark, Pill, StatusDot, Nav, Footer, submitForm, mailtoFallback, FinalCTA, useReveal, Breadcrumb, ForwardEngine };

// ---- v5 glass interactions (client only; SSR-safe) ----
if (typeof document !== "undefined") {
  const boot = () => {
    // Scroll reveal
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
      document.body.classList.add("v5-js");
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      document.querySelectorAll(".ms-section, .prose-section").forEach((s) => io.observe(s));
    }
    // Cursor spotlight on glass cards
    const CARD_SEL = ".motion-card, .proof-item, .finline-card, .stack-card, .engine-item";
    document.addEventListener("pointermove", (ev) => {
      const card = ev.target.closest && ev.target.closest(CARD_SEL);
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${ev.clientX - r.left}px`);
      card.style.setProperty("--my", `${ev.clientY - r.top}px`);
    }, { passive: true });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else setTimeout(boot, 0);
}
