import { useState, useEffect, useRef } from 'react';
import { useLang } from '../context/LangContext.jsx';
import logo from '../assets/logo.png';

export default function Navbar({ currentPage, onNav }) {
  const { t, lang, setLang, translations } = useLang(); // Fixed: useLang returns an object
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const ddRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) setDdOpen(false);
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navTo = (page) => {
    onNav(page);
    setMobileOpen(false);
    setDdOpen(false);
    setLangOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { key: 'pf', label: t.services?.items?.[0]?.title || 'Private Finance' },
    { key: 'pl', label: t.services?.items?.[1]?.title || 'Project Loan' },
    { key: 'nri', label: t.services?.items?.[2]?.title || 'NRI Loans' },
    { key: 'inv', label: t.services?.items?.[3]?.title || 'Investment Loan' },
    { key: 'cibil', label: t.services?.items?.[4]?.title || 'Low CIBIL Loan' },
    { key: 'cheq', label: t.services?.items?.[5]?.title || 'Cheque Basis Loan' },
    { key: 'rec', label: t.services?.items?.[6]?.title || 'Private Recovery' },
    { key: 'drt', label: t.services?.items?.[7]?.title || 'DRT Legal' },
  ];

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-main">
          <div className="logo" onClick={() => onNav('home')}>
            <img src={logo} alt="HelpLine Finance Logo" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
            <div className="logo-text">
              <div className="brand" style={{ color: '#1565C0', fontSize: '20px' }}>HelpLine</div>
              <div className="sub" style={{ color: '#666', fontSize: '14px', fontWeight: 600, marginTop: '-2px' }}>Finance</div>
            </div>
          </div>

          <div className="nav-links">
            <span className={`nav-link${currentPage === 'home' ? ' active-link' : ''}`} onClick={() => navTo('home')}>{t.nav?.home || 'Home'}</span>

            <div className="nav-dd" ref={ddRef}>
              <span className="nav-link" onClick={() => setDdOpen(!ddOpen)}>
                {t.nav?.services || 'Services'} <span style={{ fontSize: '10px', marginLeft: '3px' }}>▾</span>
              </span>
              {ddOpen && (
                <div className="dd-menu">
                  <div>
                    <div className="dd-col-head">Lending</div>
                    {services.slice(0, 6).map(s => (
                      <div key={s.key} className="dd-link" onClick={() => navTo(s.key)}>
                        <span className="dot" /> {s.label}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="dd-col-head">Recovery & Legal</div>
                    {services.slice(6).map(s => (
                      <div key={s.key} className="dd-link" onClick={() => navTo(s.key)}>
                        <span className="dot" /> {s.label}
                      </div>
                    ))}
                    <div className="dd-col-head" style={{ marginTop: '14px' }}>Resources</div>
                    <div className="dd-link" onClick={() => navTo('docs')}><span className="dot" />{t.nav?.documents || 'Documents'}</div>
                    <div className="dd-link" onClick={() => navTo('partner')}><span className="dot" />{t.nav?.partner || 'Partner With Us'}</div>
                  </div>
                </div>
              )}
            </div>

            <span className={`nav-link${currentPage === 'about' ? ' active-link' : ''}`} onClick={() => navTo('about')}>{t.nav?.about || 'About Us'}</span>
            <span className={`nav-link${currentPage === 'docs' ? ' active-link' : ''}`} onClick={() => navTo('docs')}>{t.nav?.documents || 'Documents'}</span>
            <span className={`nav-link${currentPage === 'contact' ? ' active-link' : ''}`} onClick={() => navTo('contact')}>{t.nav?.contact || 'Contact'}</span>

            <div className="lang-dd" ref={langRef}>
              <button className="lang-btn" onClick={() => setLangOpen(!langOpen)}>
                {translations?.[lang]?.flag || '🇬🇧'} <span className="lang-name">{translations?.[lang]?.name || 'English'}</span>
                <span style={{ fontSize: '10px', marginLeft: '4px' }}>▾</span>
              </button>
              {langOpen && (
                <div className="lang-menu">
                  {Object.entries(translations || {}).map(([code, val]) => (
                    <div
                      key={code}
                      className={`lang-option${lang === code ? ' active' : ''}`}
                      onClick={() => { setLang(code); setLangOpen(false); }}
                    >
                      {val.flag} {val.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="nav-actions">
            <button className="btn btn-gold btn-sm" onClick={() => navTo('partner')} style={{ marginRight: '8px' }}>🤝 {t.nav?.partner || 'Partner With Us'}</button>
            <button className="btn btn-primary" onClick={() => navTo('contact')} style={{ marginLeft: '12px' }}>{t.nav?.apply || 'Apply Now'}</button>
          </div>

          <button className="hamburger" onClick={() => setMobileOpen(true)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <div className={`mob-nav${mobileOpen ? ' open' : ''}`}>
        <button className="mob-close" onClick={() => setMobileOpen(false)}>✕</button>
        <div className="logo" style={{ marginBottom: '28px' }}>
          <div className="logo-icon">₹</div>
          <div className="logo-text">
            <div className="brand" style={{ color: 'white' }}>HelpLine Finance</div>
            <div className="sub" style={{ color: 'rgba(255,255,255,.45)' }}>Private Limited</div>
          </div>
        </div>
        {[
          { key: 'home', label: t.nav?.home || 'Home' },
          { key: 'about', label: t.nav?.about || 'About Us' },
          { key: 'docs', label: t.nav?.documents || 'Documents' },
          { key: 'partner', label: t.nav?.partner || 'Partner With Us' },
          { key: 'contact', label: t.nav?.contact || 'Contact' }
        ].map(item => (
          <div key={item.key} className="mob-link" onClick={() => navTo(item.key)}>{item.label}</div>
        ))}
        <div style={{ borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: '16px', marginTop: '8px' }}>
          <div className="mob-link" style={{ color: 'rgba(255,255,255,.5)', fontSize: '12px', textTransform: 'uppercase', cursor: 'default' }}>{t.nav?.services || 'Services'}</div>
          <div className="mob-sub">
            {services.map(s => (
              <div key={s.key} className="mob-link" onClick={() => navTo(s.key)}>{s.label}</div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '22px' }}>
          <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-block">💬 {t.nav?.whatsapp || 'WhatsApp'}</a>
          <button className="btn btn-gold btn-block" onClick={() => navTo('contact')}>{t.nav?.apply || 'Apply Now'}</button>
        </div>
        <div style={{ marginTop: '22px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {Object.entries(translations || {}).map(([code, val]) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              style={{
                padding: '6px 12px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer',
                background: lang === code ? 'var(--sky-600)' : 'rgba(255,255,255,.08)',
                color: lang === code ? 'white' : 'rgba(255,255,255,.55)',
                border: 'none', fontFamily: 'inherit', fontWeight: 600
              }}
            >
              {val.flag} {val.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}