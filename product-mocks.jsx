// Product mocks — Pelvar UI & Pipworth UI, rendered as React.
// Visual styles are in product-mocks.css, scoped under .product-mock.
// Both share the same Pelvar product brand: paper/cream surfaces, brass
// accent, Fraunces display, Hanken Grotesk body, IBM Plex Mono numbers.

// ---------- Shared atoms ----------
const PmChrome = ({ url }) => (
  <div className="pm-chrome">
    <span className="pm-dot r"></span>
    <span className="pm-dot y"></span>
    <span className="pm-dot g"></span>
    <span className="pm-url">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      {url}
    </span>
  </div>
);

// ---------- PELVAR UI ----------
const PelvarUI = () => (
  <div className="product-mock" aria-label="Pelvar product interface — group close screen">
    <div className="pm-window">
      <PmChrome url="app.pelvar.ai/groups/meridian/close" />
      <div className="pm-app">
        <aside className="pm-side">
          <div className="pm-brand">
            <span className="pm-mark">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 19V5l7 5 7-5v14" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="pm-word">Pelvar</span>
          </div>
          <div className="pm-navlabel">Group</div>
          <nav className="pm-nav">
            <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>Overview</a>
            <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01"/></svg>Entities</a>
            <a href="#" className="is-active"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>Close<span className="pm-badge">1</span></a>
            <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18M7 14l4-4 3 3 5-6"/></svg>Consolidation</a>
            <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M9 13h6 M9 17h6"/></svg>Reports</a>
            <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 17l6-6 4 4 8-8M21 7h-5M21 7v5"/></svg>Forecasting</a>
            <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.78.66 1.65 1.65 0 0 0-1.06 1.51V22a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 20.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3.6 15a1.65 1.65 0 0 0-1.51-1.06H2a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 3.6 8.6"/></svg>Settings</a>
          </nav>
          <div className="pm-side-foot">
            <div className="pm-grp">
              <span className="pm-av">MG</span>
              <span className="pm-meta"><span className="n">Meridian Group</span><span className="s">4 entities · GBP</span></span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 9l4-4 4 4M8 15l4 4 4-4"/></svg>
            </div>
          </div>
        </aside>

        <div className="pm-main">
          <div className="pm-topbar">
            <span className="pm-crumb">Meridian Group&nbsp; / &nbsp;<b>Group Close</b></span>
            <div className="pm-search">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>
              Search entities, accounts, journals…
            </div>
            <div className="pm-top-actions">
              <span className="pm-pill-cur">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 7c0-1.7-2.7-3-6-3S6 5.3 6 7m12 0c0 1.7-2.7 3-6 3S6 8.7 6 7m12 0v10c0 1.7-2.7 3-6 3s-6-1.3-6-3V7"/></svg>
                GBP · Group
              </span>
              <span className="pm-icobtn"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg><span className="pm-ping"></span></span>
              <span className="pm-me">SA</span>
            </div>
          </div>

          <div className="pm-scroll">
            <div className="pm-pagehead">
              <div>
                <h1>Group Close — May 2026</h1>
                <div className="pm-sub"><span className="pm-live"><i></i>Close in progress</span> &nbsp;·&nbsp; Period 31 May 2026 &nbsp;·&nbsp; Last sync 09:14 BST</div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button className="pm-btn ghost"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>Export pack</button>
                <button className="pm-btn primary"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 3l14 9-14 9V3z"/></svg>Resume close</button>
              </div>
            </div>

            <div className="pm-agent">
              <div className="pm-ah">
                <span className="pm-ai">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2a3 3 0 0 1 3 3v1h1a3 3 0 0 1 3 3 3 3 0 0 1 0 6 3 3 0 0 1-3 3h-1v1a3 3 0 0 1-6 0v-1H8a3 3 0 0 1-3-3 3 3 0 0 1 0-6 3 3 0 0 1 3-3h1V5a3 3 0 0 1 3-3z"/><circle cx="9.5" cy="11" r="1" fill="currentColor"/><circle cx="14.5" cy="11" r="1" fill="currentColor"/></svg>
                </span>
                <div>
                  <div className="pm-t">Close Agent</div>
                  <div className="pm-d">Orchestrating the May close across 4 entities</div>
                </div>
                <div className="pm-status"><b>6 of 7</b> steps complete</div>
              </div>
              <div className="pm-steps">
                {[
                  ["done", "Synced entities"],
                  ["done", "Reconciled IC"],
                  ["done", "FX translation"],
                  ["done", "CTA computed"],
                  ["done", "Eliminations drafted"],
                  ["warn", "Anomaly flagged"],
                  ["", "Post to Xero"],
                ].map(([state, label], i) => (
                  <div className={`pm-step ${state}`} key={i}>
                    <div className="pm-bar"></div>
                    <div className="pm-lab">
                      {state === "done" && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
                      {state === "warn" && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>}
                      {label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pm-anom">
                <span className="pm-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg></span>
                <div className="pm-body">
                  <div className="pm-h">New intercompany balance needs review</div>
                  <div className="pm-p">Meridian US → Holdings of <b>£318,400</b> appeared this period with no matching entry in April. Eliminations can't finalise until this is explained or matched.</div>
                </div>
                <div className="pm-act">
                  <button className="pm-a1">Review</button>
                  <button className="pm-a2">Assign</button>
                </div>
              </div>
            </div>

            <div className="pm-kpis">
              {[
                { k: "Group revenue · YTD", v: "£42.8", u: "m", c: { dir: "up", val: "14.2%", vs: "vs prior year" } },
                { k: "EBITDA", v: "£6.9", u: "m", c: { dir: "up", val: "16.1%", vs: "margin" } },
                { k: "Profit before tax", v: "£4.2", u: "m", c: { dir: "up", val: "8.6%", vs: "vs prior year" } },
                { k: "Net debt / EBITDA", v: "1.2", u: "×", c: { dir: "dn", val: "0.3×", vs: "£8.3m net debt" } },
              ].map((kpi, i) => (
                <div className="pm-kpi" key={i}>
                  <div className="pm-k"><span className="pm-d"></span>{kpi.k}</div>
                  <div className="pm-v">{kpi.v}<small>{kpi.u}</small></div>
                  <div className="pm-f">
                    <span className={`pm-chg ${kpi.c.dir}`}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        {kpi.c.dir === "up"
                          ? <path d="M7 17L17 7M17 7H8M17 7v9"/>
                          : <path d="M7 7l10 10M17 17H8M17 17V8"/>}
                      </svg>
                      {kpi.c.val}
                    </span>
                    <span className="pm-vs">{kpi.c.vs}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pm-grid2">
              <div className="pm-card">
                <div className="pm-ch">
                  <div><div className="pm-ct">Intercompany reconciliation</div><div className="pm-cs">4 relationships · both sides matched in group currency</div></div>
                  <span className="pm-tag warnt">1 to review</span>
                </div>
                <table className="pm-ictab">
                  <thead><tr><th>Relationship</th><th className="r">Entity A</th><th className="r">Entity B</th><th className="r">Status</th></tr></thead>
                  <tbody>
                    <tr>
                      <td><div className="pm-pair">
                        <span className="pm-flag" style={{ background: "linear-gradient(180deg,#000 33%,#D00 33%,#D00 66%,#FFCE00 66%)" }}></span>
                        <span className="pm-flag" style={{ background: "#012169" }}></span>
                        <div><div className="pm-ent">Holdings → Deutschland</div><div className="pm-reltype">Loan</div></div>
                      </div></td>
                      <td className="r pm-amt">€4,200,000</td>
                      <td className="r pm-amt">€4,200,000</td>
                      <td className="r"><span className="pm-st m"><i></i>Matched</span></td>
                    </tr>
                    <tr>
                      <td><div className="pm-pair">
                        <span className="pm-flag" style={{ background: "linear-gradient(90deg,#B22 0 8%,#fff 8% 16%,#B22 16% 24%,#fff 24% 32%,#B22 32% 40%,#fff 40% 48%,#3C3B6E 48%)" }}></span>
                        <span className="pm-flag" style={{ background: "#012169" }}></span>
                        <div><div className="pm-ent">Holdings → US</div><div className="pm-reltype">Loan</div></div>
                      </div></td>
                      <td className="r pm-amt">$2,800,000</td>
                      <td className="r"><div className="pm-amt">$2,797,140</div><div className="pm-gap">FX gap £2,140</div></td>
                      <td className="r"><span className="pm-st w"><i></i>Review</span></td>
                    </tr>
                    <tr>
                      <td><div className="pm-pair">
                        <span className="pm-flag" style={{ background: "linear-gradient(90deg,#169B62 33%,#fff 33% 66%,#FF883E 66%)" }}></span>
                        <span className="pm-flag" style={{ background: "#012169" }}></span>
                        <div><div className="pm-ent">Holdings → Ireland</div><div className="pm-reltype">Loan</div></div>
                      </div></td>
                      <td className="r pm-amt">€1,500,000</td>
                      <td className="r pm-amt">€1,500,000</td>
                      <td className="r"><span className="pm-st m"><i></i>Matched</span></td>
                    </tr>
                    <tr>
                      <td><div className="pm-pair">
                        <span className="pm-flag" style={{ background: "linear-gradient(180deg,#000 33%,#D00 33%,#D00 66%,#FFCE00 66%)" }}></span>
                        <span className="pm-flag" style={{ background: "linear-gradient(90deg,#169B62 33%,#fff 33% 66%,#FF883E 66%)" }}></span>
                        <div><div className="pm-ent">Deutschland ↔ Ireland</div><div className="pm-reltype">Trading recharge</div></div>
                      </div></td>
                      <td className="r pm-amt">€240,000</td>
                      <td className="r pm-amt">€240,000</td>
                      <td className="r"><span className="pm-st m"><i></i>Matched</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pm-card">
                <div className="pm-ch">
                  <div><div className="pm-ct">Translation & group adjustments</div><div className="pm-cs">IAS 21 · GBP presentation</div></div>
                  <span className="pm-tag ok">Balanced</span>
                </div>
                <div className="pm-rate">
                  <div className="pm-rr">GBP / EUR closing<b>1.1820</b></div>
                  <div className="pm-rr">GBP / USD closing<b>1.2640</b></div>
                  <div className="pm-rr">EUR avg (period)<b>1.1765</b></div>
                </div>
                <div className="pm-stat"><div className="pm-l"><div className="pm-ll">Cumulative translation adjustment</div><div className="pm-ls">Movement to translation reserve (OCI)</div></div><div className="pm-rv neg">£(184)k</div></div>
                <div className="pm-stat"><div className="pm-l"><div className="pm-ll">Goodwill on consolidation</div><div className="pm-ls">3 acquisitions · FRS 102 carrying value</div></div><div className="pm-rv">£12.4m</div></div>
                <div className="pm-stat"><div className="pm-l"><div className="pm-ll">Goodwill amortisation</div><div className="pm-ls">Charge to P&L this period</div></div><div className="pm-rv neg">£(103)k</div></div>
                <div className="pm-stat"><div className="pm-l"><div className="pm-ll">Elimination journals</div><div className="pm-ls">Drafted · net to zero · ready to post</div></div><div className="pm-rv">8</div></div>
              </div>
            </div>

            <div className="pm-card">
              <div className="pm-ch">
                <div><div className="pm-ct">Consolidated income statement</div><div className="pm-cs">Year to date · 31 May 2026 · GBP · post-elimination</div></div>
                <span className="pm-tag ok">Ties to consolidation run</span>
              </div>
              <table className="pm-pl">
                <tbody>
                  <tr><td>Revenue</td><td className="r">42,804,000</td></tr>
                  <tr><td className="ind">Cost of sales</td><td className="r neg">(26,118,000)</td></tr>
                  <tr className="sum"><td>Gross profit</td><td className="r">16,686,000</td></tr>
                  <tr><td className="ind">Operating expenses</td><td className="r neg">(9,795,000)</td></tr>
                  <tr className="sum"><td>EBITDA</td><td className="r">6,891,000</td></tr>
                  <tr><td className="ind">Depreciation &amp; amortisation</td><td className="r neg">(1,401,000)</td></tr>
                  <tr className="sum"><td>Operating profit</td><td className="r">5,490,000</td></tr>
                  <tr><td className="ind">Net finance costs</td><td className="r neg">(1,284,000)</td></tr>
                  <tr className="tot"><td>Profit before tax</td><td className="r">4,206,000</td></tr>
                </tbody>
              </table>
            </div>

            <div className="pm-foot">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>
              Audit-ready · every figure traceable to source ledger · written back to Xero on approval
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ---------- PIPWORTH UI ----------
const PipworthUI = () => (
  <div className="product-mock product-mock--pipworth" aria-label="Pipworth product interface — explain this match">
    <div className="pm-window">
      <PmChrome url="app.pipworth.ai/inbox/payment-2491" />
      <div className="pm-app">
        <aside className="pm-side">
          <div className="pm-brand">
            <span className="pm-mark">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 7h12l4 5-4 5H4z M4 12h12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="pm-word">Pipworth</span>
          </div>
          <div className="pm-navlabel">Cash application</div>
          <nav className="pm-nav">
            <a href="#" className="is-active">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
              Inbox<span className="pm-badge">12</span>
            </a>
            <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M9 13h6 M9 17h6"/></svg>Invoices</a>
            <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 8v8"/></svg>Payments</a>
            <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>Customers</a>
            <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18M7 14l4-4 3 3 5-6"/></svg>Reports</a>
            <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5"/></svg>Rules</a>
            <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.78.66 1.65 1.65 0 0 0-1.06 1.51V22a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 20.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3.6 15a1.65 1.65 0 0 0-1.51-1.06H2a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 3.6 8.6"/></svg>Settings</a>
          </nav>
          <div className="pm-side-foot">
            <div className="pm-grp">
              <span className="pm-av">CB</span>
              <span className="pm-meta"><span className="n">Castlebrook Ltd</span><span className="s">Sage 200 · Hybrid mode</span></span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 9l4-4 4 4M8 15l4 4 4-4"/></svg>
            </div>
          </div>
        </aside>

        <div className="pm-main">
          <div className="pm-topbar">
            <span className="pm-crumb">Inbox &nbsp; / &nbsp;<b>Payment 2491</b></span>
            <div className="pm-search">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>
              Search payments, customers, invoices…
            </div>
            <div className="pm-top-actions">
              <span className="pm-pill-cur">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Hybrid mode
              </span>
              <span className="pm-icobtn"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg><span className="pm-ping"></span></span>
              <span className="pm-me">LK</span>
            </div>
          </div>

          <div className="pm-scroll">
            <div className="pm-pagehead">
              <div>
                <h1>Explain this match</h1>
                <div className="pm-sub"><span className="pm-live"><i></i>Awaiting your approval</span> &nbsp;·&nbsp; Open Banking · 24 May 2026 &nbsp;·&nbsp; Read-only ledger access</div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button className="pm-btn ghost">Suggest different match</button>
                <button className="pm-btn primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5"/></svg>
                  Apply to ledger
                </button>
              </div>
            </div>

            {/* Payment header */}
            <div className="pw-payment">
              <span className="pw-payment__ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </span>
              <div className="pw-payment__meta">
                <div className="pw-payment__lbl">Incoming payment · BACS</div>
                <div className="pw-payment__amt">£12,480.00</div>
                <div className="pw-payment__from">from <b>Alpha Investments Ltd</b> · ref "INV-1041, 1042" · cleared 09:14 BST</div>
              </div>
              <div className="pw-payment__conf">
                <div className="pw-conf__ring">
                  <svg viewBox="0 0 56 56">
                    <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="4"/>
                    <circle cx="28" cy="28" r="24" fill="none" stroke="#B0853A" strokeWidth="4" strokeDasharray="148" strokeDashoffset="3" strokeLinecap="round" transform="rotate(-90 28 28)"/>
                  </svg>
                  98%
                </div>
                <div>
                  <div className="pw-conf__lbl">Confidence</div>
                  <div className="pw-conf__mode">Above your <b>90% threshold</b></div>
                </div>
              </div>
            </div>

            {/* Reasoning grid */}
            <div className="pw-grid">
              <div className="pw-reason">
                <div className="pw-reason__h">
                  <div>
                    <div className="pw-reason__t">Three open invoices considered</div>
                    <div className="pw-reason__d">Alpha Investments Ltd · sorted by likelihood</div>
                  </div>
                  <span className="pm-tag ok">2 matched</span>
                </div>
                <div className="pw-invoice matched">
                  <span className="pw-invoice__check">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </span>
                  <div>
                    <div className="pw-invoice__ref">INV-1041</div>
                    <div className="pw-invoice__cust">Q2 advisory retainer · Alpha Investments Ltd</div>
                  </div>
                  <div className="pw-invoice__date">03 May 2026</div>
                  <div className="pw-invoice__amt">£8,200.00</div>
                </div>
                <div className="pw-invoice matched">
                  <span className="pw-invoice__check">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </span>
                  <div>
                    <div className="pw-invoice__ref">INV-1042</div>
                    <div className="pw-invoice__cust">Compliance review · Alpha Investments Ltd</div>
                  </div>
                  <div className="pw-invoice__date">10 May 2026</div>
                  <div className="pw-invoice__amt">£4,280.00</div>
                </div>
                <div className="pw-invoice">
                  <span className="pw-invoice__check"></span>
                  <div>
                    <div className="pw-invoice__ref">INV-1058</div>
                    <div className="pw-invoice__cust">Travel disbursement · Alpha Investments Ltd</div>
                  </div>
                  <div className="pw-invoice__date">21 May 2026</div>
                  <div className="pw-invoice__amt">£1,940.00</div>
                </div>
                <div className="pw-rsum">
                  <div className="pw-rsum__l">Matched total</div>
                  <div className="pw-rsum__v">£12,480.00</div>
                </div>
              </div>

              <div className="pw-evidence">
                <div className="pw-ev__h">
                  Why these two
                  <div className="pm-cs">Evidence Pipworth weighed</div>
                </div>
                <div className="pw-ev__list">
                  <div className="pw-ev__item">
                    <span className="pw-ev__dot"></span>
                    <div className="pw-ev__txt">Remittance reference reads <b>"INV-1041, 1042"</b> — exact reference match on both invoices.</div>
                  </div>
                  <div className="pw-ev__item">
                    <span className="pw-ev__dot"></span>
                    <div className="pw-ev__txt">Amount <b>£12,480.00</b> equals the sum of <b>INV-1041 (£8,200) + INV-1042 (£4,280)</b> to the penny.</div>
                  </div>
                  <div className="pw-ev__item">
                    <span className="pw-ev__dot"></span>
                    <div className="pw-ev__txt">Customer <b>Alpha Investments Ltd</b> typically settles invoices in <b>batches of 2</b> (last 6 payments).</div>
                  </div>
                  <div className="pw-ev__item">
                    <span className="pw-ev__dot dim"></span>
                    <div className="pw-ev__txt"><span className="strike">INV-1058 considered</span> — not in remittance reference; would leave £1,940 unallocated.</div>
                  </div>
                </div>
                <div className="pw-ev__foot">
                  Rule applied: <b>Auto-suggest above 90% · Hybrid mode</b>
                </div>
              </div>
            </div>

            {/* Audit trail */}
            <div className="pw-trail">
              <div className="pw-trail__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>
                Read-only to ledger
              </div>
              <div className="pw-trail__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                FCA-regulated Open Banking
              </div>
              <div className="pw-trail__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                Audit trail · <b>4 decisions logged</b>
              </div>
              <button className="pw-trail__cta">
                Export to Sage
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Object.assign(window, { PelvarUI, PipworthUI });
