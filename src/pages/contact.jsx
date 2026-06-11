import React from "react";
import { Nav, Footer, submitForm, Breadcrumb } from "../shared.jsx";
// Contact page (v4)
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
                <h1 className="display" style={{ fontSize: "clamp(48px, 5.4vw, 76px)" }}>Tell us what you're <span className="grad-text">working on</span>.</h1>
                <p className="lede">One human reads every message and replies within one business day.</p>
                <ul className="contact-list">
                  <li><span className="contact-list__lbl">EMAIL</span><a href="mailto:hello@mangostack.co.uk">hello@mangostack.co.uk</a></li>
                  <li><span className="contact-list__lbl">CALENDAR</span><a href="https://calendly.com/sanmi-mangostack/30min" target="_blank" rel="noopener">Book a 30-min call →</a></li>
                  <li><span className="contact-list__lbl">REPLY</span><span>Within one business day</span></li>
                </ul>
                <p className="footnote">One human, one reply.<br/><span style={{ color: "var(--white)", fontWeight: 500 }}>— The MangoStack team</span></p>
              </div>
              {!sent ?
              <form className="contact-form" onSubmit={async (e) => {e.preventDefault(); await submitForm(e.currentTarget, { subject: "MangoStack — new enquiry" }); setSent(true);}}>
                  <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
                  <div className="field-row">
                    <label className="field"><span>Name *</span><input name="name" type="text" required /></label>
                    <label className="field"><span>Email *</span><input name="email" type="email" required /></label>
                  </div>
                  <label className="field"><span>Company *</span><input name="company" type="text" required /></label>
                  <label className="field"><span>What's the challenge? *</span><textarea name="situation" required rows="4" placeholder="What you're trying to do, what's getting in the way, and how soon it matters."></textarea></label>
                  <label className="field"><span>Interest *</span>
                    <select name="interest" required defaultValue=""><option value="" disabled>Choose one</option>
                      <option>Operating — senior embedded work</option>
                      <option>Pelvar — agentic group close</option>
                      <option>Pipworth — agentic cash application</option>
                      <option>Workforce Atlas</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="field"><span>Timeline</span>
                    <select name="timing" defaultValue=""><option value="" disabled>Optional</option>
                      <option>Now</option><option>1–3 months</option><option>Exploring</option>
                    </select>
                  </label>
                  <p className="form-consent">By sending this, you agree we can store your message to reply to you, in line with our <a href="privacy.html">Privacy notice</a>.</p>
                  <button className="btn-primary btn-full" type="submit">Send</button>
                </form> :

              <div className="form-thanks contact-form">
                  <div className="form-thanks__check">✓</div>
                  <h3>Thanks — one human will get back to you.</h3>
                  <p>Within one business day.</p>
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
export default ContactApp;
