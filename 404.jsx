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
            <a href="operating.html" className="four04-card">
              <div className="four04-card__num">01</div>
              <div className="four04-card__title">Operating</div>
              <div className="four04-card__desc">Senior operators embedded into your team — transformation, operations, AI.</div>
            </a>
            <a href="software.html" className="four04-card">
              <div className="four04-card__num">02</div>
              <div className="four04-card__title">Software</div>
              <div className="four04-card__desc">Forward-engineered software. Flagship: agentic finance — Pelvar and Pipworth.</div>
            </a>
            <a href="approach.html" className="four04-card">
              <div className="four04-card__num">03</div>
              <div className="four04-card__title">Approach</div>
              <div className="four04-card__desc">Forward Engineering — how the operating studio and the software studio are the same studio.</div>
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);
ReactDOM.createRoot(document.getElementById("root")).render(<NotFoundApp />);
