// 404 — not found
const NotFoundApp = () => (
  <>
    <Nav active="" />
    <main>
      <section className="ms-hero">
        <div className="ms-hero__wash"></div>
        <div className="ms-container ms-hero__inner" style={{ textAlign: "left" }}>
          <div className="eyebrow">404 — PAGE NOT FOUND</div>
          <h1 className="display">
            That page<br/>didn't <span className="grad-text">ship</span>.
          </h1>
          <p className="lede">The URL you came in on doesn't match anything we have. It may have moved, been retired, or you may have followed a link from elsewhere that's now out of date.</p>
          <div className="ms-hero__ctas">
            <a href="index.html" className="btn-primary">Back to home</a>
            <a href="contact.html" className="btn-link">Tell us what you were looking for →</a>
          </div>
          <div className="four04-grid">
            <a href="the-stack.html" className="four04-card">
              <div className="four04-card__num">01</div>
              <div className="four04-card__title">The Stack</div>
              <div className="four04-card__desc">Embedded senior operators — strategy, transformation, operations.</div>
            </a>
            <a href="products.html" className="four04-card">
              <div className="four04-card__num">02</div>
              <div className="four04-card__title">Products</div>
              <div className="four04-card__desc">Software we've shipped or are shipping: Atlas, ILR-Calc, HowCraft.</div>
            </a>
            <a href="how-we-work.html" className="four04-card">
              <div className="four04-card__num">03</div>
              <div className="four04-card__title">How We Work</div>
              <div className="four04-card__desc">Fast, focused, outcome-shaped. Weekly demos. Built to hand back.</div>
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);
ReactDOM.createRoot(document.getElementById("root")).render(<NotFoundApp />);
