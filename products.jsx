// Products overview page
const ProdHero = () => (
  <section className="ms-hero">
    <div className="ms-hero__wash"></div>
    <div className="ms-container ms-hero__inner">
      <Breadcrumb items={[{ label: "MangoStack", href: "index.html" }, { label: "Products" }]} />
      <div className="eyebrow">PRODUCTS</div>
      <h1 className="display" style={{ fontSize: "clamp(48px, 6.2vw, 88px)" }}>
        Software we ship from<br/>the <span className="grad-text">patterns we see</span>.
      </h1>
      <p className="lede">Three products in market or in build. Three different bets. Each one is a real piece of software solving an operational problem we kept running into.</p>
    </div>
  </section>
);

const ProductBlock = ({ status, status2, eyebrow, title, body, cta, href, target, reverse, ix }) => (
  <div className="ms-section" style={{ paddingTop: 48, paddingBottom: 48 }}>
    <div className="ms-container" style={{
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 60,
      alignItems: "center",
      direction: reverse ? "rtl" : "ltr",
    }}>
      <div style={{ direction: "ltr" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
          <Pill kind={status.kind}>{status.label}</Pill>
          {status2 && <Pill kind="neutral-dark">{status2}</Pill>}
        </div>
        <div className="eyebrow" style={{ marginBottom: 12 }}>{eyebrow}</div>
        <h2 className="h1" style={{ fontSize: "clamp(32px,3.6vw,48px)", marginBottom: 24 }}>{title}</h2>
        <p className="lede" style={{ marginBottom: 28 }}>{body}</p>
        <a href={href} target={target} rel={target === "_blank" ? "noopener" : undefined} className="btn-primary">{cta} →</a>
      </div>
      <div style={{ direction: "ltr" }}>
        <ProductCardArt status={status} title={title} ix={ix} />
      </div>
    </div>
  </div>
);

// Decorative product card art (no real screenshot — placeholder visual)
const ProductCardArt = ({ status, title, ix }) => {
  const isLive = status.kind === "live";
  const palettes = [
    { bg: "linear-gradient(135deg, #0a0e13 0%, #1a2230 50%, #0a0e13 100%)", glow: "rgba(34,197,94,0.18)" },
    { bg: "linear-gradient(135deg, #1a0d05 0%, #2d1a08 50%, #0a0e13 100%)", glow: "rgba(255,138,0,0.25)" },
    { bg: "linear-gradient(135deg, #0a0e13 0%, #1c1407 50%, #0a0e13 100%)", glow: "rgba(255,193,7,0.18)" },
  ];
  const pal = palettes[ix % 3];
  return (
    <div style={{
      aspectRatio: "1.2 / 1",
      borderRadius: 18,
      background: pal.bg,
      border: "1px solid rgba(255,255,255,0.08)",
      padding: 28,
      position: "relative",
      overflow: "hidden",
      boxShadow: `0 28px 80px -30px ${pal.glow}, inset 0 0 60px ${pal.glow}`,
    }}>
      <div style={{
        position: "absolute", inset: "auto -30% -30% auto",
        width: "70%", height: "70%",
        background: `radial-gradient(circle, ${pal.glow}, transparent 70%)`,
        filter: "blur(40px)",
      }}></div>
      <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start" }}>
          <div style={{ display: "flex", gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.15)" }}></span>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.15)" }}></span>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.15)" }}></span>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>by MangoStack</div>
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.0 }}>{title}</div>
          <div style={{ height: 3, width: 72, background: "linear-gradient(90deg,#FF8A00,#FFC107)", marginTop: 18, borderRadius: 2 }}></div>
        </div>
      </div>
    </div>
  );
};

const ProductsApp = () => (
  <>
    <Nav active="products" />
    <main>
      <ProdHero />
      <ProductBlock
        ix={0}
        status={{ kind: "live", label: "LIVE" }}
        status2="ZERO DATA COLLECTED"
        eyebrow="UK IMMIGRATION READINESS"
        title="Check your UK ILR readiness in minutes."
        body="A free readiness calculator for people preparing to apply for UK Indefinite Leave to Remain. Free, no account, no email, no tracking — your answers stay in your browser."
        cta="Open ILR-Calc"
        href="https://www.ilr-calc.co.uk"
        target="_blank"
      />
      <div style={{ borderTop: "1px solid var(--line)" }}></div>
      <ProductBlock
        ix={1}
        reverse
        status={{ kind: "soon", label: "COMING SOON" }}
        status2="PRODUCT + SERVICE"
        eyebrow="AI WORKFORCE AUDIT"
        title="Find the work AI should be doing in your firm."
        body="Atlas is both a productised audit methodology and the service that delivers it. UK Accounting available first; more industries throughout 2026."
        cta="Learn more"
        href="workforce-atlas.html"
      />
      <div style={{ borderTop: "1px solid var(--line)" }}></div>
      <ProductBlock
        ix={2}
        status={{ kind: "soon", label: "COMING SOON" }}
        eyebrow="DECISION ENGINE"
        title="Instant decisions for revenue teams."
        body="HowCraft turns tribal knowledge into instant, consistent decisions inside Slack and Teams. Launching first for deal desks and revenue operations."
        cta="Join the waitlist"
        href="howcraft.html"
      />
      <section className="ms-section" style={{ paddingTop: 64 }}>
        <div className="ms-container">
          <div className="products-closer" style={{ background: "rgba(255,138,0,0.06)", color: "#CBD5E1", maxWidth: 920 }}>
            MangoStack ships software the same way we run engagements: senior-led, real working artefacts, built to be useful. If you're working on a similar problem, we'd like to hear from you.
          </div>
        </div>
      </section>
      <FinalCTA heading="Talk to us about your product" line="Tell us what you're working on." cta="Start the conversation →" />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<ProductsApp />);
