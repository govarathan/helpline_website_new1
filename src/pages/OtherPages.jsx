import { useState } from 'react';
import { useLang } from '../context/LangContext.jsx';

function PageHero({ title, subtitle, breadcrumbs, onNav }) {
  return (
    <div className="pg-hero">
      <div className="pg-hero-deco" />
      <div className="wrap">
        <div className="breadcrumb">
          <span onClick={() => onNav('home')}>Home</span>
          {breadcrumbs.map((bc, i) => (
            <span key={i}><span className="sep">›</span><span>{bc.label}</span></span>
          ))}
        </div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}

export function AboutPage({ onNav }) {
  const { t } = useLang();
  return (
    <div>
      <PageHero title={t.about.title} subtitle={t.hero.desc} breadcrumbs={[{ label: t.nav?.about || 'About Us' }]} onNav={onNav} />

      <section className="section">
        <div className="wrap grid-2">
          <div data-sr>
            <div className="label-tag">{t.about.label}</div>
            <h2 className="section-title">{t.about.title}</h2>
            <div className="about-text">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </div>
          <div data-sr data-sr-d="2">
            <div className="about-panel">
              <div className="panel-head">{t.about.panelTitle || 'Key Facts'}</div>
              {[[t.about.f1t, t.about.f1d], [t.about.f2t, t.about.f2d], [t.about.f3t, t.about.f3d], [t.about.f4t, t.about.f4d]].map(([l, v]) => (
                <div key={l} className="loan-list-item">
                  <span style={{ color: 'var(--gold)', marginRight: '8px', fontWeight: 700 }}>▸</span>
                  <span style={{ color: 'rgba(255,255,255,.5)', minWidth: '100px', display: 'inline-block' }}>{l}:</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stats-inner">
          {[[t.stats.s1, t.stats.l1], [t.stats.s2, t.stats.l2], [t.stats.s3, t.stats.l3], [t.stats.s4, t.stats.l4]].map(([s, l]) => (
            <div key={l} className="stat-box" data-sr>
              <div className="stat-num">{s}</div>
              <div className="stat-lbl">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div data-sr style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 0' }}>
            <div className="label-tag" style={{ justifyContent: 'center' }}>{t.about.foundation}</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>{t.about.vmv}</h2>
          </div>
          <div className="val-grid">
            {[
              { ico: '🔭', title: t.about.vTitle, text: t.about.vision },
              { ico: '🎯', title: t.about.mTitle, text: t.about.mission },
              { ico: '⚖️', title: t.about.valTitle, text: t.about.values },
            ].map(v => (
              <div key={v.title} className="val-card" data-sr>
                <div className="ico">{v.ico}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--grey-50)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="label-tag" style={{ justifyContent: 'center' }}>{t.about.office}</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>{t.about.location}</h2>
          <div style={{ maxWidth: '500px', margin: '24px auto 0' }}>
            <div className="info-card" style={{ textAlign: 'left' }}>
              <div className="info-card-head">HelpLine Finance Private Limited</div>
              <div className="info-item"><div className="info-icon">📍</div><div><div className="info-lbl">Address</div><div className="info-val">{t.contact.addr.split('\n').map((l, i) => <span key={i}>{l}{i < 2 ? <br/> : ''}</span>)}</div></div></div>
              <div className="info-item"><div className="info-icon">📞</div><div><div className="info-lbl">Phone</div><div className="info-val"><a href="tel:8098096666">+91 809 809 6666</a></div></div></div>
              <div className="info-item"><div className="info-icon">✉️</div><div><div className="info-lbl">Email</div><div className="info-val"><a href="mailto:helplineprivatefinance@gmail.com">helplineprivatefinance@gmail.com</a></div></div></div>
              <button className="btn btn-gold btn-block" onClick={() => onNav('contact')} style={{ marginTop: '14px' }}>{t.about.panelCta}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function DocumentsPage({ onNav }) {
  const { t } = useLang();
  const [tab, setTab] = useState('sal');
  const tabs = [['sal', t.docs.tabs.sal], ['self', t.docs.tabs.self], ['prop', t.docs.tabs.prop]];
  return (
    <div>
      <PageHero title={t.docs.title} subtitle={t.docs.subtitle} breadcrumbs={[{ label: t.nav?.documents || 'Documents' }]} onNav={onNav} />
      <section className="section"><div className="wrap">
        <div className="doc-tabs">
          {tabs.map(([k, l]) => (
            <div key={k} className={`doc-tab${tab === k ? ' on' : ''}`} onClick={() => setTab(k)}>{l}</div>
          ))}
        </div>
        {tab === 'sal' && (
          <div className="doc-panel on">
            <div className="doc-2col">
              <div className="doc-section"><h3>Identity & KYC</h3><div className="checklist"><div className="check-item">PAN Card</div><div className="check-item">Passport / Voter ID / Driving License</div><div className="check-item">2 Photographs</div><div className="check-item">Address proof (bank statement / utility bill)</div></div></div>
              <div className="doc-section"><h3>Income Documents</h3><div className="checklist"><div className="check-item">Last 3 months salary slips</div><div className="check-item">Last 6 months bank statements</div><div className="check-item">Form 16 / IT Returns (2 years)</div><div className="check-item">Appointment / Increment letter</div></div></div>
              <div className="doc-section"><h3>Employment Documents</h3><div className="checklist"><div className="check-item">Employment confirmation letter</div><div className="check-item">Appointment letter</div><div className="check-item">Company ID card copy</div></div></div>
              <div className="doc-section"><h3>Property Documents</h3><div className="checklist"><div className="check-item">Sale deed / Title document (if applicable)</div><div className="check-item">Encumbrance Certificate</div><div className="check-item">Latest property tax receipt</div></div></div>
            </div>
          </div>
        )}
        {tab === 'self' && (
          <div className="doc-panel on">
            <div className="doc-2col">
              <div className="doc-section"><h3>Business Documents</h3><div className="checklist"><div className="check-item">Business registration certificate</div><div className="check-item">GST registration (if applicable)</div><div className="check-item">2 Visiting Cards</div><div className="check-item">Company profile / brochure</div></div></div>
              <div className="doc-section"><h3>Financial Documents</h3><div className="checklist"><div className="check-item">Last 3 years IT Returns + Balance Sheet</div><div className="check-item">Last 3 years Profit & Loss statements</div><div className="check-item">Bank statements (12 months — all accounts)</div><div className="check-item">OD/CC limit sanction letter (if existing)</div></div></div>
              <div className="doc-section"><h3>Identity & Address</h3><div className="checklist"><div className="check-item">PAN Card</div><div className="check-item">Passport / Voter ID / Driving License</div><div className="check-item">2 photographs</div><div className="check-item">Business address proof</div></div></div>
              <div className="doc-section"><h3>For Cheque Basis Loans</h3><div className="checklist"><div className="check-item">Current Account statements (12 months)</div><div className="check-item">Min ₹10L monthly turnover proof</div><div className="check-item">Post-dated cheques as per schedule</div></div></div>
            </div>
          </div>
        )}
        {tab === 'prop' && (
          <div className="doc-panel on">
            <div className="doc-2col">
              <div className="doc-section"><h3>Title Documents</h3><div className="checklist"><div className="check-item">Original Title Deed / Sale Deed</div><div className="check-item">Parent documents (chain of title)</div><div className="check-item">Encumbrance Certificate — 30 years</div><div className="check-item">Patta / Chitta (Tamil Nadu)</div></div></div>
              <div className="doc-section"><h3>Legal Documents</h3><div className="checklist"><div className="check-item">Property registration receipt</div><div className="check-item">Khata certificate & extract</div><div className="check-item">Approved building plan (if constructed)</div><div className="check-item">Completion / Occupancy Certificate</div></div></div>
              <div className="doc-section"><h3>Tax & Utility</h3><div className="checklist"><div className="check-item">Latest property tax receipts (3 years)</div><div className="check-item">Utility bills in property's name</div><div className="check-item">Water tax / electricity connection receipts</div></div></div>
              <div className="doc-section"><h3>Additional</h3><div className="checklist"><div className="check-item">NOC from society (apartments)</div><div className="check-item">Loan outstanding certificate (existing loans)</div><div className="check-item">Power of Attorney (if POA transaction)</div></div></div>
            </div>
          </div>
        )}
        <div style={{ marginTop: '44px', padding: '26px', background: 'var(--sky-50)', border: '1px solid var(--sky-100)', borderRadius: 'var(--r-xl)' }}>
          <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.75 }}><strong style={{ color: 'var(--sky-900)' }}>Note:</strong> {t.docs.note}</p>
          <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => onNav('contact')}>{t.docs.cta}</button>
            <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="btn btn-wa">💬 {t.nav?.whatsapp || 'WhatsApp Us'}</a>
          </div>
        </div>
      </div></section>
    </div>
  );
}

export function PartnerPage({ onNav }) {
  const { t } = useLang();
  const [toast, setToast] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setToast(true); e.target.reset(); setTimeout(() => setToast(false), 3600); };
  return (
    <div>
      <PageHero title={t.partner.title} subtitle={t.partner.subtitle} breadcrumbs={[{ label: t.nav?.partner || 'Partner With Us' }]} onNav={onNav} />
      <section className="section"><div className="wrap">
        <div className="partner-grid">
          <div data-sr>
            <div className="label-tag">{t.partner.label}</div>
            <h2 className="section-title">{t.partner.secTitle}</h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>{t.partner.desc}</p>
            <div className="partner-benefits">
              {t.partner.benefits.map((b, i) => (
                <div key={i} className="pb-item">
                  <div className="pb-icon">{b.icon}</div>
                  <div><h4>{b.title}</h4><p>{b.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div data-sr data-sr-d="2">
            <div className="partner-form-wrap">
              <h3>{t.partner.formTitle}</h3>
              <form onSubmit={handleSubmit}>
                {[
                  [t.partner.form.name, 'text', t.partner.form.namePH, true],
                  [t.partner.form.company, 'text', t.partner.form.compPH, false],
                  [t.partner.form.email, 'email', t.partner.form.emailPH, true],
                  [t.partner.form.phone, 'tel', t.partner.form.phonePH, true],
                  [t.partner.form.loc, 'text', t.partner.form.locPH, true]
                ].map(([l, t_field, ph, req]) => (
                  <div key={l} className="form-group">
                    <label className="form-label">{l}{req ? ' *' : ''}</label>
                    <input className="form-ctrl" type={t_field} placeholder={ph} required={req} pattern={t_field === 'tel' ? '[6-9][0-9]{9}' : undefined} />
                  </div>
                ))}
                <button type="submit" className="btn btn-primary btn-block" style={{ padding: '14px', marginTop: '8px' }}>{t.partner.submit}</button>
              </form>
              {toast && <div className="toast-inline" style={{ marginTop: '16px', padding: '12px', background: 'var(--sky-50)', borderRadius: '8px', color: 'var(--sky-800)', fontWeight: 600, fontSize: '13px' }}>{t.partner.success}</div>}
            </div>
          </div>
        </div>
      </section>
      <div id="toast" className={toast ? 'show' : ''}>{t.partner.success}</div>
    </div>
  );
}

export function ContactPage({ onNav }) {
  const { t } = useLang();
  const [toast, setToast] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const handleSubmit = (e) => { e.preventDefault(); setToast(true); e.target.reset(); setTimeout(() => setToast(false), 3600); };
  const faqs = [
    ['Is HelpLine Finance a bank or NBFC?', 'No. HelpLine Finance Private Limited is a financial intermediary / loan broker. We connect borrowers with the right lenders in our network of private financiers, banks, and NBFCs. We are not a direct lender.'],
    ['How quickly can I get a loan?', 'For standard unsecured private finance, we typically process within 48 working hours once all documents are in order. Property-backed loans may take up to 15 working days.'],
    ['What is the minimum loan amount?', 'For Private Finance (unsecured), the minimum is ₹9 Lakhs. For other products, contact us for specific minimums based on your requirement.'],
    ['Do you work with low CIBIL scores?', 'Yes. We specialise in cases where traditional banks have declined due to CIBIL issues. Our private financier network assesses based on business performance and assets, not just credit scores.'],
    ['Is my data safe with HelpLine Finance?', 'Yes. We comply with the DPDP Act 2023. Your data is used only to process your loan enquiry and is never sold to third parties. Contact us to request data deletion.'],
  ];
  return (
    <div>
      <PageHero title={t.contact.title} subtitle={t.contact.desc} breadcrumbs={[{ label: t.contact.label || 'Contact' }]} onNav={onNav} />
      <div className="contact-page-layout">
        <div>
          <h3>{t.contact.title}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group"><label className="form-label">Name *</label><input className="form-ctrl" type="text" placeholder={t.contact.namePH} required /></div>
              <div className="form-group"><label className="form-label">Phone *</label><input className="form-ctrl" type="tel" placeholder={t.contact.phonePH} pattern="[6-9][0-9]{9}" required /></div>
            </div>
            <div className="form-group"><label className="form-label">Email</label><input className="form-ctrl" type="email" placeholder="your@email.com" /></div>
            <div className="form-group">
              <label className="form-label">{t.contact.loanType} *</label>
              <select className="form-ctrl" required>
                <option value="">{t.contact.selectLoan}</option>
                {t.loanItems && t.loanItems.map((item, i) => <option key={i} value={item}>{item}</option>)}
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">{t.contact.amountRange}</label>
                <select className="form-ctrl"><option value="">{t.contact.selectAmount}</option><option>Below ₹10L</option><option>₹10L – ₹50L</option><option>₹50L – ₹1Cr</option><option>₹1Cr – ₹5Cr</option><option>Above ₹5Cr</option></select>
              </div>
              <div className="form-group">
                <label className="form-label">{t.contact.state}</label>
                <select className="form-ctrl"><option value="">{t.contact.selectState}</option><option>Tamil Nadu</option><option>Pondicherry</option><option>Karnataka</option><option>Kerala</option></select>
              </div>
            </div>
            <div className="form-group"><label className="form-label">Message</label><textarea className="form-ctrl" placeholder="Any specific details about your requirement…" /></div>
            <div className="form-notice">{t.contact.notice}</div>
            <button type="submit" className="btn btn-primary btn-lg" style={{ padding: '14px 36px' }}>{t.contact.submit}</button>
          </form>
        </div>
        <div>
          <div className="info-card">
            <div className="info-card-head">{t.contact.office}</div>
            <div className="info-item"><div className="info-icon">📍</div><div><div className="info-lbl">Address</div><div className="info-val">{t.contact.addr.split('\n').map((l, i) => <span key={i}>{l}{i < 2 ? <br/> : ''}</span>)}</div></div></div>
            <div className="info-item"><div className="info-icon">📞</div><div><div className="info-lbl">Phone</div><div className="info-val"><a href="tel:8098096666">+91 809 809 6666</a></div></div></div>
            <div className="info-item"><div className="info-icon">✉️</div><div><div className="info-lbl">Email</div><div className="info-val"><a href="mailto:helplineprivatefinance@gmail.com">helplineprivatefinance@gmail.com</a></div></div></div>
            <div className="info-item"><div className="info-icon">🕐</div><div><div className="info-lbl">Hours</div><div className="info-val">{t.contact.hours}</div></div></div>
            <a href="https://maps.google.com/?q=AKR+Corniche+Center+Second+Line+Beach+George+Town+Chennai" target="_blank" rel="noopener noreferrer" className="map-box" style={{ display: 'flex' }}>
              <span>📍 View on Google Maps →</span>
            </a>
            <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-block" style={{ marginTop: '14px' }}>{t.contact.waBtn}</a>
          </div>
        </div>
      </div>
      <div className="faq-wrap section" style={{ paddingTop: '0' }}>
        <div className="wrap">
          <h3>Frequently Asked Questions</h3>
          {faqs.map(([q, a], i) => (
            <div key={i} className="acc-item">
              <div className={`acc-head${openFaq === i ? ' open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {q}<span className="ico">+</span>
              </div>
              {openFaq === i && <div className="acc-body open">{a}</div>}
            </div>
          ))}
        </div>
      </div>
      <div id="toast" className={toast ? 'show' : ''}>{t.contact.toast}</div>
    </div>
  );
}

export function PrivacyPage({ onNav }) {
  return (
    <div>
      <PageHero title="Privacy Policy" subtitle="How we collect, use, and protect your personal information." breadcrumbs={[{ label: 'Privacy Policy' }]} onNav={onNav} />
      <section className="section"><div className="wrap" style={{ maxWidth: '760px' }}>
        {[['What Data We Collect', 'We collect name, phone number, email address, loan type preference, and loan amount range when you submit an enquiry through our website. We do not collect Aadhaar numbers. We do not collect PAN numbers through our website enquiry forms.'],
          ['How We Use Your Data', 'Your data is used solely to process your loan enquiry — to contact you, match you with appropriate financiers, and provide the services you requested. We do not use your data for unrelated marketing without your consent.'],
          ['DPDP Act 2023 Compliance', 'HelpLine Finance Private Limited complies with the Digital Personal Data Protection (DPDP) Act 2023. You have the right to access, correct, and request deletion of your personal data. Contact us at helplineprivatefinance@gmail.com to exercise these rights.'],
          ['Data Sharing', 'We share your information with our network of financial institutions and private financiers solely for the purpose of processing your loan enquiry. We do not sell your data to third parties. We do not share your data for advertising or profiling purposes.'],
          ['Data Retention', 'We retain your data for as long as necessary to process your enquiry and comply with legal obligations. You may request deletion of your data at any time by emailing helplineprivatefinance@gmail.com.'],
          ['Cookies & Analytics', 'Our website uses no third-party advertising cookies. We may use basic analytics to understand site usage. No personal data is shared with analytics providers.'],
          ['Contact for Privacy Matters', 'For any privacy-related concerns, data access requests, or deletion requests, please contact: helplineprivatefinance@gmail.com | +91 809 809 6666']
        ].map(([h, b]) => (
          <div key={h} style={{ marginBottom: '32px' }}>
            <h2 style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'var(--sky-900)', marginBottom: '10px', fontWeight: 700 }}>{h}</h2>
            <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: 1.8 }}>{b}</p>
          </div>
        ))}
        <p style={{ fontSize: '12px', color: 'var(--grey-400)', marginTop: '32px' }}>Last updated: January 2025. This policy may be updated periodically.</p>
      </div></section>
    </div>
  );
}

export function TermsPage({ onNav }) {
  return (
    <div>
      <PageHero title="Terms of Service" subtitle="Terms and conditions for using HelpLine Finance services." breadcrumbs={[{ label: 'Terms of Service' }]} onNav={onNav} />
      <section className="section"><div className="wrap" style={{ maxWidth: '760px' }}>
        {[['Nature of Service', 'HelpLine Finance Private Limited is a financial intermediary and loan broker. We are NOT a bank, NBFC, or direct lender. We connect borrowers with our network of private financiers, banks, and NBFCs. Submitting an enquiry is not an application for credit and does not guarantee loan approval.'],
          ['No Guarantee of Approval', 'Submitting a lead form or enquiry on our website does not constitute a loan application or guarantee of approval. All credit decisions are made solely by the lending institution or private financier. HelpLine Finance facilitates the connection; we do not approve or reject loans.'],
          ['Indicative Rates', 'All interest rates, processing fees, and other financial figures mentioned on this website are indicative and for reference purposes only. Actual rates will vary based on loan type, collateral, creditworthiness, lender policies, and prevailing market conditions.'],
          ['Jurisdiction', 'These terms are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of courts in Chennai, Tamil Nadu.'],
          ['Amendments', 'HelpLine Finance reserves the right to modify these terms at any time. Continued use of our services constitutes acceptance of revised terms.'],
          ['Contact', 'For queries regarding these terms: helplineprivatefinance@gmail.com | +91 809 809 6666 | AKR Corniche Center No.30/11, Second Line Beach, George Town, Chennai – 600 001.']
        ].map(([h, b]) => (
          <div key={h} style={{ marginBottom: '32px' }}>
            <h2 style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'var(--sky-900)', marginBottom: '10px', fontWeight: 700 }}>{h}</h2>
            <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: 1.8 }}>{b}</p>
          </div>
        ))}
        <p style={{ fontSize: '12px', color: 'var(--grey-400)', marginTop: '32px' }}>Last updated: January 2025.</p>
      </div></section>
    </div>
  );
}
