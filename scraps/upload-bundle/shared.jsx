// MangoStack — shared components (Nav, Footer, Wordmark, Pills, etc.)
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
    background: kind === "live" ? "#22C55E" : "#FF8A00",
    flexShrink: 0,
    boxShadow: kind === "live" ? "0 0 0 2px rgba(34,197,94,0.18)" : "none",
  }} />
);

const Nav = ({ active = "home" }) => {
  const [stackOpen, setStackOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
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
          <div
            className="ms-nav__dropdown"
            onMouseEnter={() => setStackOpen(true)}
            onMouseLeave={() => setStackOpen(false)}
          >
            <a href="the-stack.html" className={active === "stack" ? "is-active" : ""}>The Stack ▾</a>
            {stackOpen && (
              <div className="ms-nav__menu">
                <a href="strategic-advisory.html"><strong>Strategic Advisory</strong><span>Strategy that ships</span></a>
                <a href="transformation-leadership.html"><strong>Transformation Leadership</strong><span>Run your transformation</span></a>
                <a href="operations-leadership.html"><strong>Operations Leadership</strong><span>Your operating system</span></a>
                <a href="forward-deployed-engineering.html"><strong>Forward-Deployed AI Engineering</strong><span>Engineer-operators who build the AI</span></a>
              </div>
            )}
          </div>
          <div
            className="ms-nav__dropdown"
            onMouseEnter={() => setProdOpen(true)}
            onMouseLeave={() => setProdOpen(false)}
          >
            <a href="products.html" className={active === "products" ? "is-active" : ""}>Products ▾</a>
            {prodOpen && (
              <div className="ms-nav__menu">
                <a href="ilr-calc.html">
                  <strong><StatusDot kind="live" />ILR-Calc</strong>
                  <span>UK ILR readiness — live</span>
                </a>
                <a href="workforce-atlas.html">
                  <strong><StatusDot kind="soon" />Workforce Atlas</strong>
                  <span>AI workforce audit — coming soon</span>
                </a>
                <a href="howcraft.html">
                  <strong><StatusDot kind="soon" />HowCraft</strong>
                  <span>Decision engine — coming soon</span>
                </a>
              </div>
            )}
          </div>
          <a href="ai-transformation.html" className={active === "ai" ? "is-active" : ""}>AI Transformation</a>
          <a href="how-we-work.html" className={active === "how" ? "is-active" : ""}>How We Work</a>
          <a href="about.html" className={active === "about" ? "is-active" : ""}>About</a>
          <a href="contact.html" className={active === "contact" ? "is-active" : ""}>Contact</a>
        </nav>
        <a href="contact.html" className="btn-primary btn-sm ms-nav__cta">Book a discovery call</a>
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

      {/* Mobile drawer — sibling of .ms-nav-wrap (NOT child) so backdrop-filter on the wrap doesn't trap it in a 77px containing block */}
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
          <div className="ms-mobile-nav__group">
            <a href="the-stack.html" className="ms-mobile-nav__group-head">The Stack</a>
            <a href="strategic-advisory.html">Strategic Advisory</a>
            <a href="transformation-leadership.html">Transformation Leadership</a>
            <a href="operations-leadership.html">Operations Leadership</a>
            <a href="forward-deployed-engineering.html">Forward-Deployed AI Engineering</a>
          </div>
          <div className="ms-mobile-nav__group">
            <a href="products.html" className="ms-mobile-nav__group-head">Products</a>
            <a href="ilr-calc.html"><StatusDot kind="live" />ILR-Calc</a>
            <a href="workforce-atlas.html"><StatusDot kind="soon" />Workforce Atlas</a>
            <a href="howcraft.html"><StatusDot kind="soon" />HowCraft</a>
          </div>
          <a href="ai-transformation.html" className="ms-mobile-nav__top">AI Transformation</a>
          <a href="how-we-work.html" className="ms-mobile-nav__top">How We Work</a>
          <a href="about.html" className="ms-mobile-nav__top">About</a>
          <a href="contact.html" className="ms-mobile-nav__top">Contact</a>
        </nav>
        <div className="ms-mobile-nav__foot">
          <a href="contact.html" className="btn-primary btn-full">Book a discovery call</a>
          <a href="https://calendly.com/sanmi-mangostack/30min" target="_blank" rel="noopener" className="ms-mobile-nav__email">Or book directly via Calendly →</a>
          <a href="mailto:info@mangostack.co.uk" className="ms-mobile-nav__email">info@mangostack.co.uk</a>
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
        <div className="ms-footer__h">The Stack</div>
        <ul>
          <li><a href="strategic-advisory.html">Strategic Advisory</a></li>
          <li><a href="transformation-leadership.html">Transformation Leadership</a></li>
          <li><a href="operations-leadership.html">Operations Leadership</a></li>
          <li><a href="forward-deployed-engineering.html">Forward-Deployed AI Engineering</a></li>
        </ul>
      </div>
      <div>
        <div className="ms-footer__h">Products</div>
        <ul>
          <li><a href="ilr-calc.html"><StatusDot kind="live" />ILR-Calc</a></li>
          <li><a href="workforce-atlas.html"><StatusDot kind="soon" />Workforce Atlas</a></li>
          <li><a href="howcraft.html"><StatusDot kind="soon" />HowCraft</a></li>
        </ul>
      </div>
      <div>
        <div className="ms-footer__h">Company</div>
        <ul>
          <li><a href="ai-transformation.html">AI Transformation</a></li>
          <li><a href="how-we-work.html">How We Work</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <div className="ms-footer__h">Connect</div>
        <ul>
          <li><a href="mailto:info@mangostack.co.uk">info@mangostack.co.uk</a></li>
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
// Uses Web3Forms — submissions forward to info@mangostack.co.uk.
// To swap providers later, change MS_FORM_ENDPOINT + adjust the
// access_key injection below.
// ============================================================
const MS_FORM_ENDPOINT = "https://api.web3forms.com/submit";
const MS_FORM_ACCESS_KEY = "4626c02e-d57a-476e-a0e1-8630dd9050aa";

const submitForm = async (formEl, { subject = "MangoStack enquiry" } = {}) => {
  const data = new FormData(formEl);
  if (MS_FORM_ENDPOINT && MS_FORM_ACCESS_KEY) {
    // Web3Forms required + recommended fields
    data.append("access_key", MS_FORM_ACCESS_KEY);
    data.append("subject", subject);
    data.append("from_name", "MangoStack website");
    // Honeypot — Web3Forms drops submissions where this is non-empty
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
  window.location.href = `mailto:info@mangostack.co.uk?subject=${subj}&body=${body}`;
  return true;
};

const FinalCTA = ({ heading = "Let's talk", line = "Tell us what you're working on.", cta = "Start the conversation →", href = "contact.html" }) => (
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

Object.assign(window, { Wordmark, Pill, StatusDot, Nav, Footer, FinalCTA, useReveal, Breadcrumb, submitForm });
