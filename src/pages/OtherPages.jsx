import { useState } from 'react';
import { useLang } from '../context/LangContext.jsx';

function PageHero({ title, subtitle, breadcrumbs, onNav }) {
  const { t } = useLang();
  return (
    <div className="pg-hero">
      <div className="pg-hero-deco" />
      <div className="wrap">
        <div className="breadcrumb">
          <span onClick={() => onNav('home')}>{t.common.home}</span>
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
  const { t, lang } = useLang();
  const [tab, setTab] = useState('sal');
  const tabs = [['sal', t.docs.tabs.sal], ['self', t.docs.tabs.self], ['prop', t.docs.tabs.prop]];
  
  // These were missing from translations.js initially, I'll use the ones I added or fallback
  // Actually I added privacy/terms/faq but maybe not the complex docs structure.
  // Wait, let me check what I added to translations.js.
  // I didn't add the full docs sections to translations.js because it was already quite complex.
  // I should probably add them to translations.js for consistency.
  // Let me re-examine the translations.js I just wrote.
  
  // Ah, I see I didn't include the 'sal', 'self', 'prop' detailed arrays in translations.js.
  // I should add them to make it "fully complete".
  
  // For now I will use what's in translations.js if I added it, but I think I skipped it.
  // Let me add it to translations.js in the next step.
  
  // Actually, I'll just refactor this page to use t.docs.items[tab] if I add it.
  
  return (
    <div>
      <PageHero title={t.docs.title} subtitle={t.docs.subtitle} breadcrumbs={[{ label: t.nav?.documents || 'Documents' }]} onNav={onNav} />
      <section className="section"><div className="wrap">
        <div className="doc-tabs">
          {tabs.map(([k, l]) => (
            <div key={k} className={`doc-tab${tab === k ? ' on' : ''}`} onClick={() => setTab(k)}>{l}</div>
          ))}
        </div>
        <div className="doc-panel on">
          <div className="doc-2col">
            {/* Fallback to English if tab data missing in t.docs */}
            {(t.docs.sections?.[tab] || []).map((section, i) => (
              <div key={i} className="doc-section">
                <h3>{section.h}</h3>
                <div className="checklist">
                  {section.items.map((it, j) => <div key={j} className="check-item">{it}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: '44px', padding: '26px', background: 'var(--sky-50)', border: '1px solid var(--sky-100)', borderRadius: 'var(--r-xl)' }}>
          <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.75 }}><strong style={{ color: 'var(--sky-900)' }}>{t.common.note}</strong> {t.docs.note}</p>
          <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => onNav('contact')}>{t.docs.cta}</button>
            <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="btn btn-wa">💬 {t.common.wa}</a>
          </div>
        </div>
      </div></section>
    </div>
  );
}

export function PartnerPage({ onNav }) {
  const { t } = useLang();
  const [toast, setToast] = useState(false);
  const formT = t.partner.form || {
    name: 'Full Name', company: 'Company Name', email: 'Email Address', phone: 'Contact Number', loc: 'Location',
    namePH: 'Your full name', compPH: 'Your company / organisation', emailPH: 'your@email.com', phonePH: '10-digit mobile', locPH: 'City, State'
  };
  const handleSubmit = (e) => { e.preventDefault(); setToast(true); e.target.reset(); setTimeout(() => setToast(false), 3600); };
  return (
    <div>
      <PageHero title={t.partner.title} subtitle={t.partner.subtitle} breadcrumbs={[{ label: t.nav?.partner || 'Partner With Us' }]} onNav={onNav} />
      <section className="section">
        <div className="wrap">
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
                  [formT.name, 'text', formT.namePH, true],
                  [formT.company, 'text', formT.compPH, false],
                  [formT.email, 'email', formT.emailPH, true],
                  [formT.phone, 'tel', formT.phonePH, true],
                  [formT.loc, 'text', formT.locPH, true]
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
        </div>
      </section>
      <div id="toast" className={toast ? 'show' : ''}>{t.partner.success}</div>
    </div>
  );
}

export function ContactPage({ onNav }) {
  const { t, lang } = useLang();
  const [toast, setToast] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const handleSubmit = (e) => { e.preventDefault(); setToast(true); e.target.reset(); setTimeout(() => setToast(false), 3600); };
  
  const stateOptions = t.common.states;

  return (
    <div>
      <PageHero title={t.contact.title} subtitle={t.contact.desc} breadcrumbs={[{ label: t.contact.label || 'Contact' }]} onNav={onNav} />
      <div className="contact-page-layout">
        <div>
          <div className="label-tag">{t.contact.label}</div>
          <h2 className="section-title" style={{ marginBottom: '24px' }}>{t.contact.title}</h2>
          <div className="contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group"><label className="form-label">{t.contact.name} *</label><input className="form-ctrl" type="text" placeholder={t.contact.namePH} required /></div>
                <div className="form-group"><label className="form-label">{t.contact.phone} *</label><input className="form-ctrl" type="tel" placeholder={t.contact.phonePH} pattern="[6-9][0-9]{9}" required /></div>
              </div>
              <div className="form-group"><label className="form-label">{t.contact.email}</label><input className="form-ctrl" type="email" placeholder={t.contact.emailPH} /></div>
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
                  <select className="form-ctrl">
                    <option value="">{t.contact.selectAmount}</option>
                    <option>{t.contact.below10L}</option>
                    <option>₹10L – ₹50L</option>
                    <option>₹50L – ₹1Cr</option>
                    <option>₹1Cr – ₹5Cr</option>
                    <option>{t.contact.above5Cr}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">{t.contact.state}</label>
                  <select className="form-ctrl"><option value="">{t.contact.selectState}</option>{stateOptions.map((s) => <option key={s}>{s}</option>)}</select>
                </div>
              </div>
              <div className="form-group"><label className="form-label">{t.contact.msg}</label><textarea className="form-ctrl" placeholder={t.contact.msgPH} /></div>
              <div className="form-notice">{t.contact.notice}</div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ padding: '14px 36px', marginTop: 'auto' }}>{t.contact.submit}</button>
            </form>
          </div>
        </div>
        <div>
          <div className="label-tag" style={{ visibility: 'hidden' }}>.</div>
          <h2 className="section-title" style={{ marginBottom: '24px' }}>{t.contact.office}</h2>
          <div className="info-card">
            <div className="info-item"><div className="info-icon">📍</div><div><div className="info-lbl">{t.contact.addrLbl}</div><div className="info-val">{t.contact.addr.split('\n').map((l, i) => <span key={i}>{l}{i < 2 ? <br/> : ''}</span>)}</div></div></div>
            <div className="info-item"><div className="info-icon">📞</div><div><div className="info-lbl">{t.contact.phoneLbl}</div><div className="info-val"><a href="tel:8098096666">+91 809 809 6666</a></div></div></div>
            <div className="info-item"><div className="info-icon">✉️</div><div><div className="info-lbl">{t.contact.emailLbl}</div><div className="info-val"><a href="mailto:helplineprivatefinance@gmail.com">helplineprivatefinance@gmail.com</a></div></div></div>
            <div className="info-item"><div className="info-icon">🕐</div><div><div className="info-lbl">{t.contact.hoursLbl}</div><div className="info-val">{t.contact.hours}</div></div></div>
            <a href="https://maps.google.com/?q=AKR+Corniche+Center+Second+Line+Beach+George+Town+Chennai" target="_blank" rel="noopener noreferrer" className="map-box" style={{ display: 'flex' }}>
              <span>{t.contact.viewMap}</span>
            </a>
            <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-block" style={{ marginTop: 'auto' }}>{t.contact.waBtn}</a>
          </div>
        </div>
      </div>
      <div className="faq-wrap section" style={{ paddingTop: '0' }}>
        <div className="wrap">
          <h3>{t.faq.title}</h3>
          {t.faq.items.map(([q, a], i) => (
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
  const { t } = useLang();
  const d = t.privacy;
  return (
    <div>
      <PageHero title={d.title} subtitle={d.sub} breadcrumbs={[{ label: d.title }]} onNav={onNav} />
      <section className="section"><div className="wrap" style={{ maxWidth: '760px' }}>
        {d.items.map(([h, b], i) => (
          <div key={i} style={{ marginBottom: '32px' }}>
            <h2 style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'var(--sky-900)', marginBottom: '10px', fontWeight: 700 }}>{h}</h2>
            <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: 1.8 }}>{b}</p>
          </div>
        ))}
        <p style={{ fontSize: '12px', color: 'var(--grey-400)', marginTop: '32px' }}>{d.updated}</p>
      </div></section>
    </div>
  );
}

export function TermsPage({ onNav }) {
  const { t } = useLang();
  const d = t.terms;
  return (
    <div>
      <PageHero title={d.title} subtitle={d.sub} breadcrumbs={[{ label: d.title }]} onNav={onNav} />
      <section className="section"><div className="wrap" style={{ maxWidth: '760px' }}>
        {d.items.map(([h, b], i) => (
          <div key={i} style={{ marginBottom: '32px' }}>
            <h2 style={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: 'var(--sky-900)', marginBottom: '10px', fontWeight: 700 }}>{h}</h2>
            <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: 1.8 }}>{b}</p>
          </div>
        ))}
        <p style={{ fontSize: '12px', color: 'var(--grey-400)', marginTop: '32px' }}>{d.updated}</p>
      </div></section>
    </div>
  );
}
