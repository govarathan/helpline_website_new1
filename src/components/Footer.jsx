import { useLang } from '../context/LangContext.jsx';

export default function Footer({ onNav }) {
  const { t } = useLang();
  const go = (p) => { onNav(p); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <footer>
      <div className="footer-grid wrap">
        <div className="footer-brand">
          <div className="footer-brand-logo">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/src/assets/logo.png" alt="HelpLine Finance Logo" style={{ width: '42px', height: '42px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              <div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: '15px', fontWeight: 700, color: 'white' }}>HelpLine</div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,.4)', fontWeight: 600 }}>Finance</div>
              </div>
            </div>
          </div>
          <p>{t.footer.tagline}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="tel:8098096666" style={{ color: 'var(--gold-lt)', fontSize: '13px' }}>📞 +91 809 809 6666</a>
            <a href="mailto:helplineprivatefinance@gmail.com" style={{ color: 'var(--gold-lt)', fontSize: '12px' }}>✉️ helplineprivatefinance@gmail.com</a>
          </div>
        </div>

        <div className="footer-col">
          <h5>{t.footer.quickLinks}</h5>
          <ul>
            {[['home', t.nav.home], ['about', t.nav.about], ['docs', t.nav.documents], ['partner', t.nav.partner], ['contact', t.nav.contact]].map(([key, label]) => (
              <li key={key}><span onClick={() => go(key)}>{label}</span></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>{t.footer.services2}</h5>
          <ul>
            {t.services.items.map((item, i) => (
              <li key={i}><span onClick={() => go(item.page)}>{item.title}</span></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>{t.footer.contactInfo}</h5>
          <p className="footer-addr">
            {t.contact.addr.split('\n').map((l, i) => <span key={i}>{l}<br/></span>)}
            <br/>
            <a href="tel:8098096666">+91 809 809 6666</a><br/>
            {t.contact.hours}
          </p>
          <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ marginTop: '14px', display: 'inline-flex', fontSize: '12.5px', padding: '8px 16px' }}>
            💬 {t.nav.whatsapp || 'WhatsApp Us'}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">{t.footer.copy}</span>
        <div className="footer-legal">
          <a href="#" onClick={(e) => { e.preventDefault(); go('privacy'); }}>{t.footer.privacy}</a>
          <a href="#" onClick={(e) => { e.preventDefault(); go('terms'); }}>{t.footer.terms}</a>
        </div>
      </div>
    </footer>
  );
}
