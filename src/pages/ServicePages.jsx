import { useState } from 'react';
import { useLang } from '../context/LangContext.jsx';

const uiText = {
  en: { home: 'Home', enquire: 'Enquire Now →', wa: '💬 WhatsApp Us', services: 'Services', note: 'Note:' },
  ta: { home: 'முகப்பு', enquire: 'இப்போது கேளுங்கள் →', wa: '💬 WhatsApp', services: 'சேவைகள்', note: 'குறிப்பு:' },
  hi: { home: 'होम', enquire: 'अभी पूछें →', wa: '💬 WhatsApp', services: 'सेवाएं', note: 'नोट:' },
};
const pick = (lang, en, ta, hi) => (lang === 'ta' ? ta : lang === 'hi' ? hi : en);

function PageHero({ title, subtitle, breadcrumbs, onNav }) {
  const { lang } = useLang();
  const x = uiText[lang] || uiText.en;
  return (
    <div className="pg-hero">
      <div className="pg-hero-deco" />
      <div className="wrap">
        <div className="breadcrumb">
          <span onClick={() => onNav('home')}>{x.home}</span>
          {breadcrumbs.map((bc, i) => (
            <span key={i}>
              <span className="sep">›</span>
              {bc.page ? <span onClick={() => onNav(bc.page)}>{bc.label}</span> : <span>{bc.label}</span>}
            </span>
          ))}
        </div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}

function Checklist({ title, items }) {
  return (
    <div className="checklist">
      {title && <h4>{title}</h4>}
      {items.map((item, i) => (
        <div key={i} className="check-item">{item}</div>
      ))}
    </div>
  );
}

function SidebarCta({ title, subtitle, onNav, waLabel = '💬 WhatsApp Us' }) {
  const { lang } = useLang();
  const x = uiText[lang] || uiText.en;
  return (
    <div className="svc-sidebar">
      <div className="s-cta-card">
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <button className="btn btn-gold btn-block" onClick={() => onNav('contact')}>{x.enquire}</button>
        <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-block" style={{ marginTop: '10px' }}>{waLabel || x.wa}</a>
      </div>
    </div>
  );
}

export function PrivateFinancePage({ onNav }) {
  const { t, lang } = useLang();
  const x = uiText[lang] || uiText.en;
  const txt = {
    subtitle: pick(lang, 'Unsecured and secured loans for MSME businesses with fast processing.', 'MSME வணிகங்களுக்கு பாதுகாப்பில்லா மற்றும் பாதுகாப்பு கடன்கள்.', 'MSME व्यवसायों के लिए unsecured और secured लोन।'),
    s1: pick(lang, 'Without Security (Unsecured)', 'பிணையமின்றி (Unsecured)', 'बिना सिक्योरिटी (Unsecured)'),
    s1d: pick(lang, 'Unsecured business loans for MSMEs based on business performance, bank turnover, and cash flow — no collateral required.', 'வணிக செயல்திறன் மற்றும் cash flow அடிப்படையில் பிணையமின்றி கடன்.', 'बिज़नेस परफॉर्मेंस और कैशफ्लो के आधार पर unsecured लोन।'),
    s2: pick(lang, 'Against Property (Secured)', 'சொத்து அடமானம் (Secured)', 'प्रॉपर्टी के खिलाफ (Secured)'),
    s2d: pick(lang, 'Secured loans against residential or commercial property. Higher limits with competitive rates and extended repayment periods.', 'வீடு/வணிக சொத்து அடிப்படையில் அதிக கடன் வரம்பு.', 'रेज़िडेंशियल/कमर्शियल प्रॉपर्टी के खिलाफ अधिक लोन सीमा।'),
    noteBody: pick(lang, 'All interest rates are indicative and for reference only. Actual rates vary based on loan type, security provided, applicant\'s credit profile, and prevailing market conditions. Contact us for a personalised quote.', 'வட்டி விகிதங்கள் சுட்டிக்காட்டும் நோக்கத்திற்காக மட்டுமே. உண்மையான விகிதங்கள் விண்ணப்பதாரர் சுயவிவரத்தைப் பொறுத்து மாறும்.', 'ब्याज दरें केवल संकेतात्मक हैं। वास्तविक दरें प्रोफाइल और लोन प्रकार के अनुसार बदलती हैं।'),
    ctaTitle: pick(lang, 'Private Finance Enquiry', 'தனியார் நிதி விசாரணை', 'प्राइवेट फाइनेंस पूछताछ'),
    ctaDesc: pick(lang, 'Fast disbursement within 48 hours. Speak to our specialists today.', '48 மணி நேரத்தில் விரைவு செயலாக்கம். நிபுணர்களை தொடர்பு கொள்ளுங்கள்.', '48 घंटे में तेज प्रोसेसिंग। हमारे विशेषज्ञों से बात करें।'),
  };
  return (
    <div>
      <PageHero title={t.services?.items?.[0]?.title || 'Private Finance'} subtitle={txt.subtitle} breadcrumbs={[{ label: x.services }, { label: t.services?.items?.[0]?.title || 'Private Finance' }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>{txt.s1}</h2>
            <p>{txt.s1d}</p>
            <div style={{ marginBottom: '14px' }}>
              <span className="rate-pill rate-pill-gold">From ₹3/lakh/month (indicative)</span>
              <span className="rate-pill rate-pill-blue">48 Hour Processing</span>
              <span className="rate-pill rate-pill-blue">Min ₹9 Lakhs – Max ₹10 Crores</span>
            </div>
            <Checklist title="Documents — Without Security" items={['PAN Card', '2 Photographs', 'Voter ID / Passport / Driving License', 'Business Registration Certificate', '2 Visiting Cards', 'Company Profile / Brochure', 'Bank Statement (12 Months — All Accounts)', 'Last 3 Years IT Returns + Balance Sheet', 'Last 3 Years P&L Statements', 'OD/CC Sanction Letter (if existing)', 'GST Registration (if applicable)', 'Annual Turnover, Tax Paid, Net Profit details']} />
          </div>
          <div className="svc-block">
            <h2>{txt.s2}</h2>
            <p>{txt.s2d}</p>
            <div style={{ marginBottom: '14px' }}>
              <span className="rate-pill rate-pill-blue">Processing: 15 Working Days</span>
              <span className="rate-pill rate-pill-gold">Competitive Rates (indicative)</span>
            </div>
            <Checklist title="Documents — Against Property" items={['All documents from Without Security category', 'Original Title Deed / Sale Deed', 'Parent documents (chain of title)', 'Encumbrance Certificate — 30 years', 'Patta / Chitta (Tamil Nadu)', 'Approved Building Plan', 'Completion / Occupancy Certificate', 'Property Tax receipts (3 years)', 'Utility bills in property name', 'NOC from society (for apartments)']} />
          </div>
          <div className="info-box" style={{ marginTop: '22px' }}>
            <strong>{x.note}</strong> {txt.noteBody}
          </div>
        </div>
        <SidebarCta title={txt.ctaTitle} subtitle={txt.ctaDesc} onNav={onNav} />
      </div>
    </div>
  );
}

export function ProjectLoanPage({ onNav }) {
  const { t, lang } = useLang();
  const x = uiText[lang] || uiText.en;
  const txt = {
    subtitle: pick(lang, 'Structured financing for large-scale infrastructure and real estate projects.', 'பெரிய திட்டங்கள் மற்றும் கட்டுமானங்களுக்கு அமைப்பு நிதி.', 'बड़े इंफ्रास्ट्रक्चर और रियल एस्टेट प्रोजेक्ट्स के लिए स्ट्रक्चर्ड फाइनेंस।'),
    t1: pick(lang, 'Project Loan Financing', 'திட்ட கடன் நிதியமைப்பு', 'प्रोजेक्ट लोन फाइनेंसिंग'),
    d1: pick(lang, 'HelpLine Finance specialises in structuring large-ticket project financing for infrastructure, real estate development, and business expansion. We work with our private financier network to match your project with the right funding structure.', 'அமைப்பு திட்ட நிதியில் நாங்கள் நிபுணத்துவம் பெற்றவர்கள்.', 'हम बड़े प्रोजेक्ट फाइनेंस स्ट्रक्चरिंग में विशेषज्ञ हैं।'),
    t2: pick(lang, 'Eligible Projects', 'தகுதியான திட்டங்கள்', 'योग्य प्रोजेक्ट्स'),
    ctaTitle: pick(lang, 'Project Loan Enquiry', 'திட்ட கடன் விசாரணை', 'प्रोजेक्ट लोन पूछताछ'),
    ctaDesc: pick(lang, 'Contact us for a personalised consultation on your project financing needs.', 'உங்கள் திட்டத்திற்கு தனிப்பயன் ஆலோசனை பெறுங்கள்.', 'अपने प्रोजेक्ट के लिए पर्सनलाइज्ड कंसल्टेशन लें।')
  };
  return (
    <div>
      <PageHero title={t.services?.items?.[1]?.title || 'Project Loan'} subtitle={txt.subtitle} breadcrumbs={[{ label: x.services }, { label: t.services?.items?.[1]?.title || 'Project Loan' }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>{txt.t1}</h2>
            <p>{txt.d1}</p>
          </div>
          <div className="svc-block">
            <h2>{txt.t2}</h2>
            <Checklist title="We facilitate project loans for:" items={['Infrastructure development projects', 'Real estate construction & development', 'Large MSME expansion & modernisation', 'Commercial complex development', 'Industrial project financing', 'Business acquisition financing']} />
          </div>
          <div className="svc-block">
            <h2>Key Features</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '16px' }}>
              {[['Custom Structure', 'Tailored repayment schedules to match project cash flows'], ['Large Ticket', 'High-value financing for significant capital requirements'], ['Network Access', 'Connect with our curated private financier network'], ['Expert Guidance', 'End-to-end project loan processing support']].map(([h, d]) => (
                <div key={h} className="feature-item">
                  <div className="fi-icon">✦</div>
                  <div className="fi-text"><h4>{h}</h4><p>{d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <SidebarCta title={txt.ctaTitle} subtitle={txt.ctaDesc} onNav={onNav} />
      </div>
    </div>
  );
}

export function NriLoansPage({ onNav }) {
  const { t, lang } = useLang();
  const x = uiText[lang] || uiText.en;
  const [tab, setTab] = useState('docs');
  const tabs = [['docs', 'NRI Documents'], ['personal', 'Personal'], ['property', 'Property'], ['fees', 'Fees'], ['mod', 'MOD']];

  return (
    <div>
      <PageHero title={t.services?.items?.[2]?.title || 'NRI Loans'} subtitle="Tailored loan solutions for Non-Resident Indians investing in India." breadcrumbs={[{ label: x.services }, { label: t.services?.items?.[2]?.title || 'NRI Loans' }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="tabs">
            {tabs.map(([key, label]) => (
              <button key={key} className={`tab-btn${tab === key ? ' on' : ''}`} onClick={() => setTab(key)}>{label}</button>
            ))}
          </div>
          {tab === 'docs' && (
            <div className="svc-block">
              <h2>NRI Documents Required</h2>
              <Checklist title="Identity & NRI Status" items={['Valid Passport (NRI)', 'Visa / Resident Permit copy', 'Overseas address proof', 'PAN Card (Indian)', 'Power of Attorney (attested by Indian consulate/embassy)']} />
              <Checklist title="Income & Financial" items={['Last 6 months overseas bank statements', 'Salary slips / Employment contract', 'NRE / NRO account statements', 'Income Tax Returns (if filed in India)', '2 Photographs']} />
            </div>
          )}
          {tab === 'personal' && (
            <div className="svc-block">
              <h2>Personal Loan Details</h2>
              <p>NRI personal loans are available for Indian citizens residing abroad who need funds for personal requirements in India. Power of Attorney is accepted for loan processing.</p>
              <Checklist items={['Available for Indian citizens abroad', 'Property purchase & construction eligible', 'Power of Attorney accepted', 'NRE/NRO accounts accepted for repayment', 'Co-applicant (Indian resident) may be required']} />
            </div>
          )}
          {tab === 'property' && (
            <div className="svc-block">
              <h2>Property Documents</h2>
              <Checklist title="Title Documents" items={['Original Title Deed / Sale Deed', 'Parent documents (chain of title)', 'Encumbrance Certificate — 30 years', 'Patta / Chitta (Tamil Nadu)']} />
              <Checklist title="Legal & Compliance" items={['Approved Building Plan', 'Completion / Occupancy Certificate', 'NOC from builder/society (if applicable)', 'Property Tax receipts (3 years)']} />
            </div>
          )}
          {tab === 'fees' && (
            <div className="svc-block">
              <h2>Fee Structure <small style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(indicative)</small></h2>
              <div className="info-box">
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px' }}>
                  {[['Legal Fees', '₹5,500'], ['Processing Fee', '0.40% + GST'], ['Stamp Duty (MOD)', '₹280'], ['CERSAI Charges', '₹180']].map(([l, v]) => (
                    <tr key={l} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '10px 0', color: 'var(--text-muted)' }}>{l}</td>
                      <td style={{ padding: '10px 0', color: 'var(--sky-900)', fontWeight: 700, textAlign: 'right' }}>{v}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <span className="rate-pill rate-pill-gold">8.40% p.a. women (indicative)</span>
              <span className="rate-pill rate-pill-gold">8.45% p.a. others (indicative)</span>
            </div>
          )}
          {tab === 'mod' && (
            <div className="svc-block">
              <h2>MOD (Memorandum of Deposit)</h2>
              <p>For NRI loans, a Memorandum of Deposit of Title Deed (MODT) creates a charge on the property in favour of the lending institution — a legal requirement for property-backed NRI loans.</p>
              <Checklist items={['Original title deed deposited with lender', 'MOD stamp paper (₹280 — indicative)', 'CERSAI registration (₹180 — indicative)', 'Attestation by Indian consulate/embassy if executed abroad']} />
            </div>
          )}
        </div>
        <div className="svc-sidebar">
          <div className="s-cta-card">
            <h4>NRI Loan Enquiry</h4>
            <p>Reach out to our NRI loan specialists for a personalised consultation.</p>
            <button className="btn btn-gold btn-block" onClick={() => onNav('contact')}>{x.enquire}</button>
            <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-block" style={{ marginTop: '10px' }}>{x.wa}</a>
          </div>
          <div className="s-card">
            <h4>NRI Loan Highlights</h4>
            <div className="check-item">Available for Indian citizens abroad</div>
            <div className="check-item">Property purchase & construction</div>
            <div className="check-item">From 8.40% p.a. (indicative)</div>
            <div className="check-item">Power of Attorney accepted</div>
          </div>
        </div>
      </div>
    </div>
  );
}



export function InvestmentLoanPage({ onNav }) {
  const { t, lang } = useLang();
  const x = uiText[lang] || uiText.en;
  return (
    <div>
      <PageHero title={t.services?.items?.[3]?.title || 'Investment Loans'} subtitle="Capital financing for investment opportunities and wealth creation." breadcrumbs={[{ label: x.services }, { label: t.services?.items?.[3]?.title || 'Investment Loan' }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>Investment Loan Financing</h2>
            <p>HelpLine Finance helps clients access capital for investment purposes — commercial property, portfolio expansion, or business acquisition. Our team matches you with the best financiers in our extensive network.</p>
          </div>
          <div className="svc-block">
            <h2>Eligible Uses</h2>
            <Checklist title="We facilitate investment loans for:" items={['Commercial property investment', 'Land purchase for development', 'Business acquisition financing', 'Investment portfolio expansion', 'Capital equipment investment']} />
          </div>
        </div>
        <SidebarCta title="Investment Loan Enquiry" subtitle="Contact us for details tailored to your investment plan." onNav={onNav} />
      </div>
    </div>
  );
}

export function LowCibilPage({ onNav }) {
  const { t, lang } = useLang();
  const x = uiText[lang] || uiText.en;
  const txt = {
    subtitle: pick(lang, 'CIBIL issues? No worries — we find solutions when banks say no.', 'CIBIL பிரச்சனையா? வங்கிகள் மறுக்கும் போது நாங்கள் தீர்வு வழங்குகிறோம்.', 'CIBIL समस्या? बैंक मना करें तो भी हम समाधान देते हैं।'),
    t1: pick(lang, 'Understanding CIBIL Scores', 'CIBIL மதிப்பெண் புரிதல்', 'CIBIL स्कोर समझें'),
    d1: pick(lang, 'Your CIBIL score (300–900) represents your creditworthiness. Most banks require 700+ for standard approvals — but our private financier network looks beyond just the score.', 'CIBIL மதிப்பெண் உங்கள் கடன் தகுதியை காட்டும். எங்கள் நெட்வொர்க் score-ஐ மட்டும் பார்க்காது.', 'CIBIL स्कोर आपकी क्रेडिट प्रोफाइल दिखाता है। हमारा नेटवर्क केवल स्कोर नहीं देखता।'),
    excellent: pick(lang, 'Excellent', 'மிகச் சிறந்தது', 'उत्कृष्ट'),
    good: pick(lang, 'Good', 'நன்று', 'अच्छा'),
    fair: pick(lang, 'Fair', 'சராசரி', 'मध्यम'),
    poor: pick(lang, 'Poor', 'குறைவு', 'कमज़ोर'),
    t2: pick(lang, 'How We Help', 'எப்படி உதவுகிறோம்', 'हम कैसे मदद करते हैं'),
    d2: pick(lang, 'HelpLine Finance works with private financiers who assess loans based on actual business performance, property assets, and cash flows — not just CIBIL score alone.', 'வணிக வருவாய், சொத்து, cash flow அடிப்படையில் விருப்பங்கள் வழங்குகிறோம்.', 'हम बिज़नेस परफॉर्मेंस, एसेट और कैशफ्लो के आधार पर विकल्प देते हैं।'),
    ctaTitle: pick(lang, 'CIBIL Issues? Talk to Us', 'CIBIL பிரச்சனை? எங்களை தொடர்பு கொள்ளுங்கள்', 'CIBIL समस्या? हमसे बात करें'),
    ctaDesc: pick(lang, "Don't let your credit score stop you. Our specialists find solutions.", 'உங்கள் credit score காரணமாக நிற்க வேண்டாம். நிபுணர்கள் உதவுவார்கள்.', 'क्रेडिट स्कोर के कारण न रुकें। हमारे विशेषज्ञ समाधान देंगे।'),
  };
  return (
    <div>
      <PageHero title={t.services?.items?.[4]?.title || 'Low CIBIL Loan'} subtitle={txt.subtitle} breadcrumbs={[{ label: x.services }, { label: t.services?.items?.[4]?.title || 'Low CIBIL Loan' }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>{txt.t1}</h2>
            <p>{txt.d1}</p>
            <div className="cibil-grid">
              <div className="cibil-card" style={{ background: 'rgba(34,197,94,.1)', borderLeft: '3px solid #22c55e', color: '#15803d' }}>🟢 750–900<br /><strong>{txt.excellent}</strong></div>
              <div className="cibil-card" style={{ background: 'rgba(234,179,8,.1)', borderLeft: '3px solid #eab308', color: '#92400e' }}>🟡 650–749<br /><strong>{txt.good}</strong></div>
              <div className="cibil-card" style={{ background: 'rgba(249,115,22,.1)', borderLeft: '3px solid #f97316', color: '#9a3412' }}>🟠 550–649<br /><strong>{txt.fair}</strong></div>
              <div className="cibil-card" style={{ background: 'rgba(239,68,68,.1)', borderLeft: '3px solid #ef4444', color: '#991b1b' }}>{pick(lang, '🔴 Below 550', '🔴 550 க்குக் கீழ்', '🔴 550 से कम')}<br /><strong>{txt.poor}</strong></div>
            </div>
          </div>
          <div className="svc-block">
            <h2>{txt.t2}</h2>
            <p>{txt.d2}</p>
            <Checklist items={['Assessment based on business performance, not just credit score', 'Property-backed loan options available', 'Flexible documentation requirements', 'Quick assessment and same-day response']} />
          </div>
        </div>
        <SidebarCta title={txt.ctaTitle} subtitle={txt.ctaDesc} onNav={onNav} />
      </div>
    </div>
  );
}

export function ChequeBasicPage({ onNav }) {
  const { t, lang } = useLang();
  const x = uiText[lang] || uiText.en;
  return (
    <div>
      <PageHero title={t.services?.items?.[5]?.title || 'Cheque Basis Loan'} subtitle="Business loans sanctioned on the basis of post-dated cheques." breadcrumbs={[{ label: x.services }, { label: t.services?.items?.[5]?.title || 'Cheque Basis Loan' }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>About Cheque Basis Loans</h2>
            <p>A Cheque Basis Loan is a short-term business financing product where the loan is sanctioned and secured on post-dated cheques — ideal for businesses with consistent cash flows but limited traditional collateral.</p>
          </div>
          <div className="svc-block">
            <h2>Eligibility Requirements</h2>
            <Checklist title="Minimum Requirements" items={['Minimum ₹10 Lakhs monthly business turnover', 'Current Account with a scheduled bank (mandatory)', 'Minimum 1 year of business operation', 'Clean cheque history (no dishonoured cheques)']} />
          </div>
          <div className="svc-block">
            <h2>Documents Required</h2>
            <Checklist items={['Current Account bank statements (12 months)', 'Business registration documents', 'GST returns (if applicable)', 'Company profile and visiting cards', 'PAN Card and identity proof', 'Post-dated cheques as per schedule']} />
          </div>
        </div>
        <SidebarCta title="Cheque Basis Loan Enquiry" subtitle="Quick processing for businesses with consistent turnover." onNav={onNav} />
      </div>
    </div>
  );
}

export function PrivateRecoveryPage({ onNav }) {
  const { t, lang } = useLang();
  const x = uiText[lang] || uiText.en;
  const recoveryByLang = {
    en: {
      subtitle: 'Professional assistance in recovering loans and resolving financial disputes.',
      mainTitle: 'Our Recovery Services',
      mainDesc: 'HelpLine Finance provides expert assistance in private financial recovery — from fraud recovery to property rescue — handled with complete professionalism and discretion.',
      ctaTitle: 'Recovery Consultation',
      ctaDesc: 'Confidential. Professional. Effective. Speak to our recovery specialists.',
      cases: [
        { title: 'Private Fraud Recovery', desc: 'Recovery of funds from fraudulent transactions, breach of contract, or unauthorised financial dealings through legal and professional channels.' },
        { title: 'Property Rescue (Bridge Loan)', desc: 'Short-term bridge financing to rescue stressed properties from foreclosure or auction, buying time for restructuring.' },
        { title: 'Private Property Takeover', desc: 'Facilitation of legal property takeover processes for lenders with defaulted borrowers, handled with complete discretion.' },
      ],
    },
    ta: {
      subtitle: 'கடன் மீட்பு மற்றும் நிதி தகராறுகளை தீர்க்க தொழில்முறை உதவி.',
      mainTitle: 'எங்கள் மீட்பு சேவைகள்',
      mainDesc: 'மோசடி மீட்பு முதல் சொத்து மீட்பு வரை, தனியார் நிதி மீட்பில் நிபுணத்துவ உதவியை முழு ரகசியத்துடன் வழங்குகிறோம்.',
      ctaTitle: 'மீட்பு ஆலோசனை',
      ctaDesc: 'ரகசியம். தொழில்முறை. பயனுள்ளது. எங்கள் நிபுணர்களை தொடர்பு கொள்ளுங்கள்.',
      cases: [
        { title: 'தனியார் மோசடி மீட்பு', desc: 'மோசடி பரிவர்த்தனைகள், ஒப்பந்த மீறல் மற்றும் அனுமதியற்ற நிதி பரிவர்த்தனைகளில் இருந்து தொகை மீட்பு.' },
        { title: 'சொத்து மீட்பு (Bridge Loan)', desc: 'ஏலம் அல்லது பறிமுதல் நிலைக்கு சென்ற சொத்துகளை காப்பாற்ற குறுகியகால bridge நிதி.' },
        { title: 'தனியார் சொத்து takeover உதவி', desc: 'default நிலை கடனாளர்களின் சொத்து takeover செயல்முறைகளில் சட்டப்படி வழிகாட்டுதல்.' },
      ],
    },
    hi: {
      subtitle: 'ऋण वसूली और वित्तीय विवाद समाधान के लिए पेशेवर सहायता।',
      mainTitle: 'हमारी रिकवरी सेवाएं',
      mainDesc: 'फ्रॉड रिकवरी से प्रॉपर्टी रेस्क्यू तक, निजी वित्तीय रिकवरी में विशेषज्ञ सहायता पूरी प्रोफेशनल गोपनीयता के साथ दी जाती है।',
      ctaTitle: 'रिकवरी कंसल्टेशन',
      ctaDesc: 'गोपनीय। प्रोफेशनल। प्रभावी। हमारे रिकवरी विशेषज्ञों से बात करें।',
      cases: [
        { title: 'प्राइवेट फ्रॉड रिकवरी', desc: 'धोखाधड़ी लेनदेन, कॉन्ट्रैक्ट उल्लंघन और अनधिकृत वित्तीय मामलों से धन की रिकवरी।' },
        { title: 'प्रॉपर्टी रेस्क्यू (Bridge Loan)', desc: 'नीलामी/फोरक्लोजर से तनावग्रस्त प्रॉपर्टी बचाने के लिए शॉर्ट-टर्म ब्रिज फाइनेंस।' },
        { title: 'प्राइवेट प्रॉपर्टी टेकओवर सहायता', desc: 'डिफॉल्ट मामलों में कानूनी प्रक्रिया के अनुसार प्रॉपर्टी टेकओवर मार्गदर्शन।' },
      ],
    },
  };
  const r = recoveryByLang[lang] || recoveryByLang.en;
  return (
    <div>
      <PageHero title={t.services?.items?.[6]?.title || 'Private Recovery'} subtitle={r.subtitle} breadcrumbs={[{ label: x.services }, { label: t.services?.items?.[6]?.title || 'Private Recovery' }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>{r.mainTitle}</h2>
            <p>{r.mainDesc}</p>
          </div>
          {r.cases.map((c, i) => (
            <div key={i} className="svc-block">
              <h2>{c.title}</h2>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <SidebarCta title={r.ctaTitle} subtitle={r.ctaDesc} onNav={onNav} />
      </div>
    </div>
  );
}

export function DrtLegalPage({ onNav }) {
  const { t, lang } = useLang();
  const x = uiText[lang] || uiText.en;
  const [open, setOpen] = useState(null);
  const drtByLang = {
    en: {
      subtitle: 'Expert guidance through Debt Recovery Tribunal proceedings and NPA management.',
      aboutTitle: 'About DRT Legal Services',
      aboutDesc: 'HelpLine Finance provides expert guidance through the complex world of Debt Recovery Tribunal proceedings, NPA management, SARFAESI actions, and bank auction navigation.',
      serviceTitle: 'Service Areas',
      legalTitle: 'Legal Disclaimer:',
      legalDesc: 'The information provided is for general guidance only and does not constitute legal advice. For specific legal matters, please consult a qualified advocate. HelpLine Finance assists with the financial aspects of DRT proceedings, not legal representation.',
      ctaTitle: 'DRT Legal Consultation',
      ctaDesc: 'Navigate complex legal proceedings with expert financial guidance.',
      items: [
        { title: 'Pre-NPA Stage', body: 'Early intervention before an account becomes Non-Performing Asset. We help borrowers and lenders restructure debt, negotiate settlements, and explore OTS (One-Time Settlement) options.' },
        { title: 'Post-NPA Stage', body: 'After classification as NPA, we guide clients through SARFAESI Act proceedings, assist with asset reconstruction, and negotiate with ARCs (Asset Reconstruction Companies).' },
        { title: 'NPA Legal Process', body: 'Filing and defending cases under SARFAESI Act 2002, DRT Act 1993. We navigate the complex legal processes including filing of Original Applications (OA) and Recovery Certificates (RC).' },
        { title: 'DRT / DRAT Proceedings', body: 'Representation guidance for Debt Recovery Tribunal (DRT) and Debt Recovery Appellate Tribunal (DRAT) proceedings. Understanding your rights and legal options at each stage.' },
        { title: 'Auction Guidance', body: 'Expert guidance through bank e-auction processes. Understanding auction notices, E-DRT procedures, bid requirements, and post-auction transfer processes under SARFAESI Act.' },
      ],
    },
    ta: {
      subtitle: 'DRT நடவடிக்கைகள் மற்றும் NPA மேலாண்மைக்கு நிபுணர் வழிகாட்டல்.',
      aboutTitle: 'DRT சட்ட சேவைகள் பற்றி',
      aboutDesc: 'Debt Recovery Tribunal வழக்குகள், NPA மேலாண்மை, SARFAESI நடவடிக்கைகள் மற்றும் ஏலம் தொடர்பான செயல்முறைகளில் நாங்கள் வழிகாட்டுகிறோம்.',
      serviceTitle: 'சேவை பகுதிகள்',
      legalTitle: 'சட்ட விளக்கம்:',
      legalDesc: 'இந்த தகவல் பொதுவான வழிகாட்டலுக்காக மட்டுமே. இது சட்ட ஆலோசனை அல்ல. குறிப்பிட்ட வழக்குகளுக்கு தகுதியான வக்கீலை அணுகவும்.',
      ctaTitle: 'DRT சட்ட ஆலோசனை',
      ctaDesc: 'சிக்கலான சட்ட செயல்முறைகளை நிபுணர் நிதி வழிகாட்டலுடன் அணுகுங்கள்.',
      items: [
        { title: 'Pre-NPA நிலை', body: 'கணக்கு NPA ஆகும் முன் மறுசீரமைப்பு, பேச்சுவார்த்தை மற்றும் OTS வாய்ப்புகளை ஆய்வு செய்வதில் உதவுகிறோம்.' },
        { title: 'Post-NPA நிலை', body: 'NPA வகைப்பாட்டிற்குப் பிறகு SARFAESI செயல்முறை மற்றும் ARC தொடர்பான வழிகாட்டலை வழங்குகிறோம்.' },
        { title: 'NPA சட்ட செயல்முறை', body: 'SARFAESI Act 2002 மற்றும் DRT Act 1993 கீழ் தேவையான மனுக்கள் மற்றும் சட்ட நடைமுறைகளில் வழிகாட்டுகிறோம்.' },
        { title: 'DRT / DRAT செயல்முறைகள்', body: 'DRT மற்றும் DRAT நிலைகளில் உங்கள் உரிமைகள், விருப்பங்கள் மற்றும் நடைமுறைகள் குறித்து தெளிவான உதவி.' },
        { title: 'ஏலம் வழிகாட்டல்', body: 'வங்கி e-auction செயல்முறை, அறிவிப்பு, பதிவு, bid விதிமுறைகள் உள்ளிட்ட முழு வழிகாட்டல்.' },
      ],
    },
    hi: {
      subtitle: 'DRT कार्यवाही और NPA प्रबंधन के लिए विशेषज्ञ मार्गदर्शन।',
      aboutTitle: 'DRT कानूनी सेवाओं के बारे में',
      aboutDesc: 'हम Debt Recovery Tribunal प्रक्रियाओं, NPA प्रबंधन, SARFAESI कार्यवाही और बैंक नीलामी नेविगेशन में विशेषज्ञ सहायता देते हैं।',
      serviceTitle: 'सेवा क्षेत्र',
      legalTitle: 'कानूनी अस्वीकरण:',
      legalDesc: 'यह जानकारी केवल सामान्य मार्गदर्शन हेतु है, कानूनी सलाह नहीं। विशेष मामलों के लिए योग्य वकील से संपर्क करें।',
      ctaTitle: 'DRT लीगल कंसल्टेशन',
      ctaDesc: 'जटिल कानूनी प्रक्रियाओं को विशेषज्ञ वित्तीय मार्गदर्शन के साथ संभालें।',
      items: [
        { title: 'Pre-NPA चरण', body: 'खाता NPA बनने से पहले पुनर्गठन, सेटलमेंट और OTS विकल्पों पर मार्गदर्शन।' },
        { title: 'Post-NPA चरण', body: 'NPA वर्गीकरण के बाद SARFAESI प्रक्रिया और ARC बातचीत में सहायता।' },
        { title: 'NPA कानूनी प्रक्रिया', body: 'SARFAESI Act 2002 और DRT Act 1993 के अंतर्गत आवश्यक प्रक्रियाओं पर सहायता।' },
        { title: 'DRT / DRAT कार्यवाही', body: 'DRT/DRAT चरणों में अधिकारों, विकल्पों और प्रक्रिया पर स्पष्ट मार्गदर्शन।' },
        { title: 'नीलामी मार्गदर्शन', body: 'बैंक e-auction प्रक्रिया, नोटिस, बोली और पोस्ट-ऑक्शन चरणों में सहायता।' },
      ],
    },
  };
  const d = drtByLang[lang] || drtByLang.en;
  return (
    <div>
      <PageHero title={t.services?.items?.[7]?.title || 'DRT Legal Services'} subtitle={d.subtitle} breadcrumbs={[{ label: x.services }, { label: t.services?.items?.[7]?.title || 'DRT Legal' }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>{d.aboutTitle}</h2>
            <p>{d.aboutDesc}</p>
          </div>
          <div className="svc-block">
            <h2>{d.serviceTitle}</h2>
            <div>
              {d.items.map((item, i) => (
                <div key={i} className="acc-item">
                  <div className={`acc-head${open === i ? ' open' : ''}`} onClick={() => setOpen(open === i ? null : i)}>
                    {item.title}
                    <span className="ico">+</span>
                  </div>
                  {open === i && <div className="acc-body open">{item.body}</div>}
                </div>
              ))}
            </div>
          </div>
          <div className="legal-disc">
            <strong>{d.legalTitle}</strong> {d.legalDesc}
          </div>
        </div>
        <SidebarCta title={d.ctaTitle} subtitle={d.ctaDesc} onNav={onNav} />
      </div>
    </div>
  );
}
