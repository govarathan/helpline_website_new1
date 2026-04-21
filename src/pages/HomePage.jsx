import { useState, useEffect, useRef } from 'react';
import { useLang } from '../context/LangContext.jsx';
import RupeeCoin3D from '../components/RupeeCoin3D.jsx';

function useCountUp(target, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

function StatBox({ value, label }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const num = useCountUp(parseInt(value.replace(/\D/g, '')) || 0, 1800, started);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const formatted = value.includes('+') ? num.toLocaleString('en-IN') + '+' :
    value.includes('%') ? num + '%' : num.toString();

  return (
    <div className="stat-box" ref={ref}>
      <div className="stat-num">{started ? formatted : '0'}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  );
}

function EmiCalculator({ t }) {
  const [amt, setAmt] = useState(5000000);
  const [rate, setRate] = useState(8.4);
  const [tenure, setTenure] = useState(20);

  const calcEmi = () => {
    const r = rate / 12 / 100;
    const n = tenure * 12;
    if (r === 0) return amt / n;
    return (amt * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  };

  const emi = calcEmi();
  const totalPay = emi * tenure * 12;
  const totalInt = totalPay - amt;
  const fmt = (v) => '₹' + Math.round(v).toLocaleString('en-IN');

  return (
    <div className="emi-grid">
      <div>
        <div className="slider-block">
          <div className="slider-label">{t.emi.amount} <span className="slider-val">{fmt(amt)}</span></div>
          <input type="range" min="100000" max="20000000" step="100000" value={amt} onChange={e => setAmt(+e.target.value)} />
        </div>
        <div className="slider-block">
          <div className="slider-label">{t.emi.rate} <span className="slider-val">{rate}%</span></div>
          <input type="range" min="1" max="24" step="0.1" value={rate} onChange={e => setRate(+e.target.value)} />
        </div>
        <div className="slider-block">
          <div className="slider-label">{t.emi.tenure} <span className="slider-val">{tenure} {t.common.years}</span></div>
          <input type="range" min="1" max="30" step="1" value={tenure} onChange={e => setTenure(+e.target.value)} />
        </div>
        <div className="emi-disclaimer">* {t.emi.disclaimer}</div>
      </div>
      <div className="emi-result">
        <div className="emi-res-label">{t.emi.monthlyEmi}</div>
        <div className="emi-big">{fmt(emi)}</div>
        <div className="emi-per">{t.emi.perMonth}</div>
        <div className="emi-rows">
          <div className="emi-row"><span className="k">{t.emi.principal}</span><span className="v">{fmt(amt)}</span></div>
          <div className="emi-row"><span className="k">{t.emi.totalInterest}</span><span className="v">{fmt(totalInt)}</span></div>
          <div className="emi-row"><span className="k">{t.emi.totalPayment}</span><span className="v">{fmt(totalPay)}</span></div>
        </div>
        <div className="emi-note">{t.emi.note}</div>
      </div>
    </div>
  );
}

function ContactForm({ t }) {
  const [toast, setToast] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(true);
    e.target.reset();
    setTimeout(() => setToast(false), 3600);
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="home-contact-form">
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">{t.contact.name} *</label>
            <input className="form-ctrl" type="text" placeholder={t.contact.namePH} required />
          </div>
          <div className="form-group">
            <label className="form-label">{t.contact.phone} *</label>
            <input className="form-ctrl" type="tel" placeholder={t.contact.phonePH} pattern="[6-9][0-9]{9}" required />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">{t.contact.loanType} *</label>
          <select className="form-ctrl" required>
            <option value="">{t.contact.selectLoan}</option>
            {t.services.items.map((svc, i) => (
              <option key={i} value={svc.title}>{svc.title}</option>
            ))}
            <option value="Other">{t.common.other}</option>
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
            <select className="form-ctrl">
              <option value="">{t.contact.selectState}</option>
              {t.common.states.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div className="form-notice">{t.contact.notice}</div>
        <button type="submit" className="btn btn-primary btn-block" style={{ padding: '14px' }}>{t.contact.submit}</button>
      </form>
      <div id="toast" className={toast ? 'show' : ''}>{t.contact.toast}</div>
    </>
  );
}

export default function HomePage({ onNav }) {
  const { t, lang } = useLang();
  const [coin3DReady, setCoin3DReady] = useState(false);

  useEffect(() => {
    if (window.THREE) {
      setCoin3DReady(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = () => setCoin3DReady(true);
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left" data-sr>
            <div className="hero-eyebrow">
              <span className="pulse" />
              {t.hero.eyebrow}
            </div>
            <h1 className="hero-h1">
              {t.hero.h1_1}<br />
              <em>{t.hero.h1_2}</em>
            </h1>
            <p className="hero-desc">{t.hero.desc}</p>
            <div className="hero-btns">
              <button className="btn btn-gold btn-xl" onClick={() => onNav('contact')}>{t.hero.cta1}</button>
              <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-xl">{t.hero.cta2}</a>
            </div>
            <div className="hero-trust">
              {[t.hero.trust1, t.hero.trust2, t.hero.trust3, t.hero.trust4].map((item, i) => (
                <span key={i} className="trust-pill"><span className="icon">{item.split(' ')[0]}</span>{item.slice(item.indexOf(' ') + 1)}</span>
              ))}
            </div>
          </div>

          <div className="hero-right">
            <div className="coin-wrap">
              <div className="coin-rings">
                <div className="c-ring cr1"></div>
                <div className="c-ring cr2"></div>
                <div className="c-ring cr3"></div>
              </div>
              {coin3DReady ? (
                <RupeeCoin3D />
              ) : (
                <div style={{ width: 380, height: 380, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: '60px', color: 'var(--gold)', animation: 'spin 1s linear infinite' }}>₹</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <div className="scroll-track"><div className="scroll-thumb" /></div>
          <span>{t.common.scroll}</span>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="section about-snap">
        <div className="wrap grid-2">
          <div data-sr>
            <div className="label-tag">{t.about.label}</div>
            <h2 className="section-title">{t.about.title}</h2>
            <div className="about-text">
              <p>{t.about.p1}</p>
              <p dangerouslySetInnerHTML={{ __html: t.about.p2.replace('85%', '<strong>85%</strong>') }} />
            </div>
            <div className="feature-grid">
              {[[t.about.f1t, t.about.f1d, '⚡'], [t.about.f2t, t.about.f2d, '🔗'], [t.about.f3t, t.about.f3d, '📍'], [t.about.f4t, t.about.f4d, '🤝']].map(([h, d, ico]) => (
                <div key={h} className="feature-item">
                  <div className="fi-icon">{ico}</div>
                  <div className="fi-text"><h4>{h}</h4><p>{d}</p></div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '28px' }}>
              <button className="btn btn-primary btn-lg" onClick={() => onNav('about')}>{t.about.btn}</button>
            </div>
          </div>
          <div data-sr data-sr-d="2">
            <div className="about-panel">
              <div className="panel-head">{t.about.panelTitle}</div>
              {t.services?.items?.map((item, i) => (
                <div key={i} className="loan-list-item" onClick={() => onNav(item.page)}>
                  <span className="loan-arrow">▸</span>{item.title}
                </div>
              ))}
              <button className="btn btn-gold" style={{ marginTop: '20px', width: '100%' }} onClick={() => onNav('contact')}>{t.about.panelCta}</button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          <StatBox value={t.stats.s1} label={t.stats.l1} />
          <StatBox value={t.stats.s2} label={t.stats.l2} />
          <StatBox value={t.stats.s3} label={t.stats.l3} />
          <StatBox value={t.stats.s4} label={t.stats.l4} />
        </div>
      </div>

      {/* SERVICES */}
      <section className="section services-sec">
        <div className="wrap">
          <div data-sr style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
            <div className="label-tag" style={{ justifyContent: 'center' }}>{t.services.label}</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>{t.services.title}</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>{t.services.desc}</p>
          </div>
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
            {t.services.items.map((svc, i) => (
              <div 
                key={i} 
                className="svc-card" 
                onClick={() => onNav(svc.page)} 
                data-sr 
                data-sr-d={String((i % 3) + 1)}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: '100%',
                  backgroundColor: '#F5F3FF',
                  padding: '24px',
                  borderRadius: '12px',
                  border: '1px solid #DDD6FE',
                  cursor: 'pointer'
                }}
              >
                <div className="svc-icon" style={{ fontSize: '24px', marginBottom: '16px' }}>{svc.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{svc.title}</h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6, flex: 1 }}>{svc.desc}</p>
                <div className="svc-tags" style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {svc.tags.map((tag, j) => (
                    <span key={j} className={`tag ${j === 0 ? 'tag-blue' : 'tag-gold'}`} style={{ fontSize: '12px', padding: '2px 8px', borderRadius: '4px', background: j === 0 ? '#e3f2fd' : '#fff3e0', color: j === 0 ? '#1976d2' : '#e65100', border: '1px solid currentColor' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI CALCULATOR */}
      <section className="section emi-sec">
        <div className="wrap">
          <div data-sr style={{ maxWidth: '560px' }}>
            <div className="label-tag">{t.emi.label}</div>
            <h2 className="section-title">{t.emi.title}</h2>
            <p className="section-desc">{t.emi.desc}</p>
          </div>
          <EmiCalculator t={t} />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testi-sec">
        <div className="wrap">
          <div data-sr style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 48px' }}>
            <div className="label-tag" style={{ justifyContent: 'center' }}>{t.testimonials.label}</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>{t.testimonials.title}</h2>
          </div>
          <div className="testi-grid">
            {t.testimonials.items.map((item, i) => (
              <div key={i} className="testi-card" data-sr data-sr-d={String(i + 1)}>
                <div className="testi-author" style={{ marginBottom: '16px' }}>
                  <div className="testi-avatar">{item.initial}</div>
                  <div>
                    <div className="testi-name">{item.name}</div>
                    <div className="testi-badge">{t.testimonials.badge}</div>
                  </div>
                </div>
                <div className="testi-quote" style={{ marginBottom: '8px' }}>"</div>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="cta-banner">
        <div className="cta-inner">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.desc}</p>
          <div className="cta-btns">
            <button className="btn btn-white btn-lg" onClick={() => onNav('contact')}>{t.cta.btn1}</button>
            <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg">{t.cta.btn2}</a>
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="section contact-sec">
        <div className="wrap">
          <div data-sr>
            <div className="label-tag">{t.contact.label}</div>
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="section-desc">{t.contact.desc}</p>
          </div>
          <div className="contact-grid">
            <div data-sr>
              <ContactForm t={t} />
            </div>
            <div data-sr data-sr-d="2">
              <div className="info-card">
                <div className="info-card-head">{t.contact.office}</div>
                <div className="info-item"><div className="info-icon">📍</div><div><div className="info-lbl">{t.contact.addrLbl}</div><div className="info-val">{t.contact.addr.split('\n').map((l, i) => <span key={i}>{l}{i < 2 ? <br/> : ''}</span>)}</div></div></div>
                <div className="info-item"><div className="info-icon">📞</div><div><div className="info-lbl">{t.contact.phoneLbl}</div><div className="info-val"><a href="tel:8098096666">+91 809 809 6666</a></div></div></div>
                <div className="info-item"><div className="info-icon">✉️</div><div><div className="info-lbl">{t.contact.emailLbl}</div><div className="info-val"><a href="mailto:helplineprivatefinance@gmail.com">helplineprivatefinance@gmail.com</a></div></div></div>
                <div className="info-item"><div className="info-icon">🕐</div><div><div className="info-lbl">{t.contact.hoursLbl}</div><div className="info-val">{t.contact.hours.split('\n').map((l, i) => <span key={i}>{l}{i === 0 ? <br/> : ''}</span>)}</div></div></div>
                <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-block" style={{ marginTop: '8px' }}>{t.contact.waBtn}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
