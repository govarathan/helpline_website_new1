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
              <div className="logo-icon">₹</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '15px', fontWeight: 700, color: 'white' }}>HelpLine Finance</div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,.4)' }}>Private Limited</div>
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
            {[['pf','Private Finance'],['nri','NRI Loans'],['cibil','Low CIBIL Loan'],['cheq','Cheque Basis'],['rec','Private Recovery'],['drt','DRT Legal']].map(([key, label]) => (
              <li key={key}><span onClick={() => go(key)}>{label}</span></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>{t.footer.contactInfo}</h5>
          <p className="footer-addr">
            AKR Corniche Center No.30/11<br/>
            Second Line Beach, George Town<br/>
            Chennai – 600 001<br/><br/>
            <a href="tel:8098096666">+91 809 809 6666</a><br/>
            Mon–Sat: 9:00 AM – 6:00 PM
          </p>
          <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ marginTop: '14px', display: 'inline-flex', fontSize: '12.5px', padding: '8px 16px' }}>
            💬 WhatsApp Us
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
