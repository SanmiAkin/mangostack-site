// Contact page
const { useState: useStateC } = React;
const ContactApp = () => {
  const [sent, setSent] = useStateC(false);
  return (
    <>
      <Nav active="contact" />
      <main>
        <section className="ms-section ms-contact">
          <div className="ms-container">
            <Breadcrumb items={[{ label: "MangoStack", href: "index.html" }, { label: "Contact" }]} />
            <div className="ms-contact__grid">
              <div>
                <div className="eyebrow">CONTACT</div>
                <h1 className="display" style={{ fontSize: "clamp(48px, 5.4vw, 76px)" }}>Let's <span className="grad-text">talk</span>.</h1>
                <p className="lede">Tell us what you're working on. Someone on our team will get back to you within one business day.</p>
                <ul className="contact-list">
                  <li><span className="contact-list__lbl">EMAIL</span><a href="mailto:info@mangostack.co.uk">info@mangostack.co.uk</a></li>
                  <li><span className="contact-list__lbl">CALENDAR</span><a href="https://calendly.com/sanmi-mangostack/30min" target="_blank" rel="noopener">Book a 30-min discovery call →</a></li>
                  <li><span className="contact-list__lbl">REPLY</span><span>Within one business day</span></li>
                </ul>
                <p className="footnote">No sales sequences. No drip campaigns.<br/><span style={{ color: "var(--white)", fontWeight: 500 }}>— The MangoStack team</span></p>
              </div>
              {!sent ?
              <form className="contact-form" onSubmit={async (e) => {e.preventDefault(); await submitForm(e.currentTarget, { subject: "MangoStack — new enquiry" }); setSent(true);}}>
                  <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
                  <div className="field-row">
                    <label className="field"><span>Name *</span><input name="name" type="text" required /></label>
                    <label className="field"><span>Email *</span><input name="email" type="email" required /></label>
                  </div>
                  <label className="field"><span>Company *</span><input name="company" type="text" required /></label>
                  <label className="field"><span>What's the situation? *</span><textarea name="situation" required rows="4" placeholder="What you're trying to do, what's getting in the way, and how soon it matters."></textarea></label>
                  <label className="field"><span>What brought you here? *</span>
                    <select name="enquiry_type" required defaultValue=""><option value="" disabled>Choose one</option>
                      <option>Consulting engagement</option>
                      <option>Workforce Atlas audit</option>
                      <option>HowCraft waitlist</option>
                      <option>ILR-Calc question</option>
                      <option>General enquiry</option>
                      <option>Not sure</option>
                    </select>
                  </label>
                  <div className="field-row">
                    <label className="field"><span>Timing *</span>
                      <select name="timing" required defaultValue=""><option value="" disabled>Choose one</option>
                        <option>Now</option><option>1–3 months</option><option>Exploring</option>
                      </select>
                    </label>
                    <label className="field"><span>Engagement size</span>
                      <select name="engagement_size" defaultValue=""><option value="" disabled>Optional</option>
                        <option>Discovery sprint</option>
                        <option>Programme</option>
                        <option>Embedded leadership</option>
                        <option>Product enquiry</option>
                        <option>Not sure yet</option>
                      </select>
                    </label>
                  </div>
                  <p className="form-consent">By sending this, you agree we can store your message to reply to you, in line with our <a href="privacy.html">Privacy notice</a>.</p>
                  <button className="btn-primary btn-full" type="submit">Send</button>
                </form> :

              <div className="form-thanks contact-form">
                  <div className="form-thanks__check">✓</div>
                  <h3>Thanks — someone on our team will get back to you.</h3>
                  <p>We aim to reply within one business day.</p>
                  <p style={{ color: "var(--white)", fontWeight: 500, marginTop: 8 }}>— The MangoStack team</p>
                </div>
              }
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>);

};
ReactDOM.createRoot(document.getElementById("root")).render(<ContactApp />);