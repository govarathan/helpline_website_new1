import { useState } from 'react';
import { useLang } from '../context/LangContext.jsx';

function PageHero({ title, subtitle, breadcrumbs, onNav }) {
  const { t } = useLang();
  return (
    <div className="pg-hero">
      <div className="pg-hero-deco" />
      <div className="wrap">
        <div className="breadcrumb">
          <span onClick={() => onNav('home')}>{t.nav?.home || 'Home'}</span>
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
  const docsByLang = {
    en: {
      sal: [
        { h: 'Identity & KYC', items: ['PAN Card', 'Passport / Voter ID / Driving License', '2 Photographs', 'Address proof (bank statement / utility bill)'] },
        { h: 'Income Documents', items: ['Last 3 months salary slips', 'Last 6 months bank statements', 'Form 16 / IT Returns (2 years)', 'Appointment / Increment letter'] },
        { h: 'Employment Documents', items: ['Employment confirmation letter', 'Appointment letter', 'Company ID card copy'] },
        { h: 'Property Documents', items: ['Sale deed / Title document (if applicable)', 'Encumbrance Certificate', 'Latest property tax receipt'] },
      ],
      self: [
        { h: 'Business Documents', items: ['Business registration certificate', 'GST registration (if applicable)', '2 Visiting Cards', 'Company profile / brochure'] },
        { h: 'Financial Documents', items: ['Last 3 years IT Returns + Balance Sheet', 'Last 3 years Profit & Loss statements', 'Bank statements (12 months — all accounts)', 'OD/CC limit sanction letter (if existing)'] },
        { h: 'Identity & Address', items: ['PAN Card', 'Passport / Voter ID / Driving License', '2 photographs', 'Business address proof'] },
        { h: 'For Cheque Basis Loans', items: ['Current Account statements (12 months)', 'Min ₹10L monthly turnover proof', 'Post-dated cheques as per schedule'] },
      ],
      prop: [
        { h: 'Title Documents', items: ['Original Title Deed / Sale Deed', 'Parent documents (chain of title)', 'Encumbrance Certificate — 30 years', 'Patta / Chitta (Tamil Nadu)'] },
        { h: 'Legal Documents', items: ['Property registration receipt', 'Khata certificate & extract', 'Approved building plan (if constructed)', 'Completion / Occupancy Certificate'] },
        { h: 'Tax & Utility', items: ['Latest property tax receipts (3 years)', 'Utility bills in property\'s name', 'Water tax / electricity connection receipts'] },
        { h: 'Additional', items: ['NOC from society (apartments)', 'Loan outstanding certificate (existing loans)', 'Power of Attorney (if POA transaction)'] },
      ],
      note: 'Note:',
    },
    ta: {
      sal: [
        { h: 'அடையாளம் & KYC', items: ['PAN அட்டை', 'பாஸ்போர்ட் / வாக்காளர் அட்டை / ஓட்டுநர் உரிமம்', '2 புகைப்படங்கள்', 'முகவரி சான்று (வங்கி அறிக்கை / பயன்பாட்டு பில்)'] },
        { h: 'வருமான ஆவணங்கள்', items: ['கடைசி 3 மாத சம்பள சீட்டுகள்', 'கடைசி 6 மாத வங்கி அறிக்கைகள்', 'Form 16 / IT Returns (2 ஆண்டுகள்)', 'நியமனம் / உயர்வு கடிதம்'] },
        { h: 'வேலை ஆவணங்கள்', items: ['வேலை உறுதிப்படுத்தல் கடிதம்', 'நியமனக் கடிதம்', 'நிறுவன ID அட்டை நகல்'] },
        { h: 'சொத்து ஆவணங்கள்', items: ['விற்பனை பத்திரம் / உரிமை ஆவணம்', 'Encumbrance Certificate', 'சமீபத்திய சொத்து வரி ரசீது'] },
      ],
      self: [
        { h: 'வணிக ஆவணங்கள்', items: ['வணிக பதிவு சான்று', 'GST பதிவு (தேவையெனில்)', '2 விசிட்டிங் கார்டுகள்', 'நிறுவன விவரம் / ப்ரோசர்'] },
        { h: 'நிதி ஆவணங்கள்', items: ['கடைசி 3 ஆண்டுகள் IT Returns + Balance Sheet', 'கடைசி 3 ஆண்டுகள் P&L அறிக்கைகள்', 'வங்கி அறிக்கைகள் (12 மாதங்கள்)', 'OD/CC ஒப்புதல் கடிதம் (இருந்தால்)'] },
        { h: 'அடையாளம் & முகவரி', items: ['PAN அட்டை', 'பாஸ்போர்ட் / வாக்காளர் அட்டை / ஓட்டுநர் உரிமம்', '2 புகைப்படங்கள்', 'வணிக முகவரி சான்று'] },
        { h: 'காசோலை அடிப்படை கடன்', items: ['Current Account அறிக்கைகள் (12 மாதங்கள்)', 'குறைந்தது ₹10L மாத வருவாய் சான்று', 'Post-dated cheques'] },
      ],
      prop: [
        { h: 'உரிமை ஆவணங்கள்', items: ['Original Title Deed / Sale Deed', 'Parent documents', 'Encumbrance Certificate — 30 years', 'Patta / Chitta'] },
        { h: 'சட்ட ஆவணங்கள்', items: ['பதிவு ரசீது', 'Khata certificate & extract', 'அங்கீகரிக்கப்பட்ட கட்டிட வரைபடம்', 'Completion / Occupancy Certificate'] },
        { h: 'வரி & பயன்பாடு', items: ['சொத்து வரி ரசீதுகள் (3 ஆண்டுகள்)', 'பயன்பாட்டு பில்கள்', 'தண்ணீர் / மின்சார ரசீதுகள்'] },
        { h: 'கூடுதல்', items: ['NOC (அபார்ட்மெண்ட்)', 'கடன் நிலுவைச் சான்று', 'Power of Attorney (தேவையெனில்)'] },
      ],
      note: 'குறிப்பு:',
    },
    hi: {
      sal: [
        { h: 'पहचान और KYC', items: ['PAN कार्ड', 'पासपोर्ट / वोटर आईडी / ड्राइविंग लाइसेंस', '2 फोटो', 'पता प्रमाण (बैंक स्टेटमेंट / यूटिलिटी बिल)'] },
        { h: 'आय दस्तावेज़', items: ['पिछले 3 महीने की सैलरी स्लिप', 'पिछले 6 महीने के बैंक स्टेटमेंट', 'Form 16 / IT Returns (2 वर्ष)', 'अपॉइंटमेंट / इन्क्रीमेंट लेटर'] },
        { h: 'रोजगार दस्तावेज़', items: ['एम्प्लॉयमेंट कन्फर्मेशन लेटर', 'अपॉइंटमेंट लेटर', 'कंपनी आईडी कार्ड कॉपी'] },
        { h: 'प्रॉपर्टी दस्तावेज़', items: ['सेल डीड / टाइटल डॉक्यूमेंट', 'Encumbrance Certificate', 'नवीनतम प्रॉपर्टी टैक्स रसीद'] },
      ],
      self: [
        { h: 'बिज़नेस दस्तावेज़', items: ['बिज़नेस रजिस्ट्रेशन सर्टिफिकेट', 'GST रजिस्ट्रेशन (यदि लागू)', '2 विजिटिंग कार्ड', 'कंपनी प्रोफाइल / ब्रोशर'] },
        { h: 'वित्तीय दस्तावेज़', items: ['पिछले 3 वर्षों के IT Returns + Balance Sheet', 'पिछले 3 वर्षों के P&L स्टेटमेंट', 'बैंक स्टेटमेंट (12 महीने)', 'OD/CC सैंक्शन लेटर (यदि मौजूद)'] },
        { h: 'पहचान और पता', items: ['PAN कार्ड', 'पासपोर्ट / वोटर आईडी / ड्राइविंग लाइसेंस', '2 फोटो', 'बिज़नेस एड्रेस प्रूफ'] },
        { h: 'चेक बेसिस लोन हेतु', items: ['Current Account स्टेटमेंट (12 महीने)', 'कम से कम ₹10L मासिक टर्नओवर प्रूफ', 'पोस्ट-डेटेड चेक'] },
      ],
      prop: [
        { h: 'टाइटल दस्तावेज़', items: ['Original Title Deed / Sale Deed', 'Parent documents', 'Encumbrance Certificate — 30 years', 'Patta / Chitta'] },
        { h: 'कानूनी दस्तावेज़', items: ['रजिस्ट्रेशन रसीद', 'Khata certificate & extract', 'स्वीकृत बिल्डिंग प्लान', 'Completion / Occupancy Certificate'] },
        { h: 'टैक्स और यूटिलिटी', items: ['प्रॉपर्टी टैक्स रसीद (3 वर्ष)', 'यूटिलिटी बिल', 'पानी / बिजली रसीद'] },
        { h: 'अतिरिक्त', items: ['सोसायटी NOC', 'लोन आउटस्टैंडिंग सर्टिफिकेट', 'Power of Attorney (यदि आवश्यक)'] },
      ],
      note: 'नोट:',
    },
  };
  const docText = docsByLang[lang] || docsByLang.en;
  const selected = tab === 'sal' ? docText.sal : tab === 'self' ? docText.self : docText.prop;
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
            {selected.map((section) => (
              <div key={section.h} className="doc-section">
                <h3>{section.h}</h3>
                <div className="checklist">
                  {section.items.map((it) => <div key={it} className="check-item">{it}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: '44px', padding: '26px', background: 'var(--sky-50)', border: '1px solid var(--sky-100)', borderRadius: 'var(--r-xl)' }}>
          <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.75 }}><strong style={{ color: 'var(--sky-900)' }}>{docText.note}</strong> {t.docs.note}</p>
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
  const faqByLang = {
    en: [
      ['Is HelpLine Finance a bank or NBFC?', 'No. HelpLine Finance Private Limited is a financial intermediary / loan broker. We connect borrowers with suitable lenders and are not a direct lender.'],
      ['How quickly can I get a loan?', 'For standard unsecured private finance, we typically process within 48 working hours once documents are complete. Property-backed loans may take up to 15 working days.'],
      ['What is the minimum loan amount?', 'For Private Finance (unsecured), the minimum is generally ₹9 Lakhs. For other products, contact us for product-specific minimums.'],
      ['Do you work with low CIBIL scores?', 'Yes. We support low CIBIL cases through our lender network based on business and asset profile, not only credit score.'],
      ['Is my data safe with HelpLine Finance?', 'Yes. We follow DPDP Act 2023 principles. Data is used only for enquiry processing and not sold to third parties.'],
    ],
    ta: [
      ['HelpLine Finance வங்கி அல்லது NBFC ஆகுமா?', 'இல்லை. HelpLine Finance ஒரு நிதி இடைநிலை நிறுவனம். பொருத்தமான கடன் வழங்குநர்களுடன் உங்களை இணைக்கிறோம்.'],
      ['கடன் எவ்வளவு விரைவாக கிடைக்கும்?', 'தேவையான ஆவணங்கள் முழுமையாக இருந்தால், பாதுகாப்பில்லா கடன்களுக்கு பொதுவாக 48 வேலைநேரத்தில் செயலாக்கம் நடக்கும்.'],
      ['குறைந்தபட்ச கடன் தொகை என்ன?', 'Private Finance க்கு பொதுவாக குறைந்தபட்சம் ₹9 லட்சம். மற்ற தயாரிப்புகளுக்கு எங்களை தொடர்பு கொள்ளுங்கள்.'],
      ['குறைந்த CIBIL இருந்தாலும் உதவுவீர்களா?', 'ஆம். வணிக வருவாய் மற்றும் சொத்து விவரங்களை அடிப்படையாக வைத்து பொருத்தமான விருப்பங்களை வழங்குகிறோம்.'],
      ['என் தரவு பாதுகாப்பாக இருக்குமா?', 'ஆம். DPDP Act 2023 விதிமுறைகளை பின்பற்றுகிறோம். உங்கள் தரவு enquiry செயலாக்கத்திற்காக மட்டுமே பயன்படுத்தப்படும்.'],
    ],
    hi: [
      ['क्या HelpLine Finance बैंक या NBFC है?', 'नहीं। HelpLine Finance एक वित्तीय मध्यस्थ संस्था है। हम आपको उपयुक्त लेंडर्स से जोड़ते हैं।'],
      ['लोन कितनी जल्दी मिल सकता है?', 'दस्तावेज़ पूरे होने पर unsecured private finance मामलों में आमतौर पर 48 कार्य घंटों में प्रोसेस होता है।'],
      ['न्यूनतम लोन राशि क्या है?', 'Private Finance के लिए सामान्यतः न्यूनतम ₹9 लाख है। अन्य उत्पादों के लिए हमसे संपर्क करें।'],
      ['क्या कम CIBIL पर भी मदद मिलती है?', 'हाँ। हम केवल CIBIL नहीं, बल्कि बिज़नेस और एसेट प्रोफाइल के आधार पर विकल्प देते हैं।'],
      ['क्या मेरा डेटा सुरक्षित है?', 'हाँ। हम DPDP Act 2023 के सिद्धांतों का पालन करते हैं। डेटा केवल enquiry प्रोसेसिंग के लिए उपयोग होता है।'],
    ],
  };
  const faqs = faqByLang[lang] || faqByLang.en;
  const stateOptions = lang === 'ta'
    ? ['தமிழ்நாடு', 'புதுச்சேரி', 'கர்நாடகா', 'கேரளா']
    : lang === 'hi'
      ? ['तमिलनाडु', 'पुडुचेरी', 'कर्नाटक', 'केरल']
      : ['Tamil Nadu', 'Pondicherry', 'Karnataka', 'Kerala'];
  return (
    <div>
      <PageHero title={t.contact.title} subtitle={t.contact.desc} breadcrumbs={[{ label: t.contact.label || 'Contact' }]} onNav={onNav} />
      <div className="contact-page-layout">
        <div>
          <h3>{t.contact.title}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group"><label className="form-label">{lang === 'ta' ? 'பெயர்' : lang === 'hi' ? 'नाम' : 'Name'} *</label><input className="form-ctrl" type="text" placeholder={t.contact.namePH} required /></div>
              <div className="form-group"><label className="form-label">{lang === 'ta' ? 'தொலைபேசி' : lang === 'hi' ? 'फ़ोन' : 'Phone'} *</label><input className="form-ctrl" type="tel" placeholder={t.contact.phonePH} pattern="[6-9][0-9]{9}" required /></div>
            </div>
            <div className="form-group"><label className="form-label">{lang === 'ta' ? 'மின்னஞ்சல்' : lang === 'hi' ? 'ईमेल' : 'Email'}</label><input className="form-ctrl" type="email" placeholder="your@email.com" /></div>
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
                <select className="form-ctrl"><option value="">{t.contact.selectAmount}</option><option>{lang === 'ta' ? '₹10L க்குக் கீழ்' : lang === 'hi' ? '₹10L से कम' : 'Below ₹10L'}</option><option>₹10L – ₹50L</option><option>₹50L – ₹1Cr</option><option>₹1Cr – ₹5Cr</option><option>{lang === 'ta' ? '₹5Cr மேல்' : lang === 'hi' ? '₹5Cr से ऊपर' : 'Above ₹5Cr'}</option></select>
              </div>
              <div className="form-group">
                <label className="form-label">{t.contact.state}</label>
                <select className="form-ctrl"><option value="">{t.contact.selectState}</option>{stateOptions.map((s) => <option key={s}>{s}</option>)}</select>
              </div>
            </div>
            <div className="form-group"><label className="form-label">{lang === 'ta' ? 'செய்தி' : lang === 'hi' ? 'संदेश' : 'Message'}</label><textarea className="form-ctrl" placeholder={lang === 'ta' ? 'உங்கள் தேவையைப் பற்றி கூடுதல் தகவல்…' : lang === 'hi' ? 'अपनी आवश्यकता के बारे में अतिरिक्त जानकारी…' : 'Any specific details about your requirement…'} /></div>
            <div className="form-notice">{t.contact.notice}</div>
            <button type="submit" className="btn btn-primary btn-lg" style={{ padding: '14px 36px' }}>{t.contact.submit}</button>
          </form>
        </div>
        <div>
          <div className="info-card">
            <div className="info-card-head">{t.contact.office}</div>
            <div className="info-item"><div className="info-icon">📍</div><div><div className="info-lbl">{lang === 'ta' ? 'முகவரி' : lang === 'hi' ? 'पता' : 'Address'}</div><div className="info-val">{t.contact.addr.split('\n').map((l, i) => <span key={i}>{l}{i < 2 ? <br/> : ''}</span>)}</div></div></div>
            <div className="info-item"><div className="info-icon">📞</div><div><div className="info-lbl">{lang === 'ta' ? 'தொலைபேசி' : lang === 'hi' ? 'फ़ोन' : 'Phone'}</div><div className="info-val"><a href="tel:8098096666">+91 809 809 6666</a></div></div></div>
            <div className="info-item"><div className="info-icon">✉️</div><div><div className="info-lbl">{lang === 'ta' ? 'மின்னஞ்சல்' : lang === 'hi' ? 'ईमेल' : 'Email'}</div><div className="info-val"><a href="mailto:helplineprivatefinance@gmail.com">helplineprivatefinance@gmail.com</a></div></div></div>
            <div className="info-item"><div className="info-icon">🕐</div><div><div className="info-lbl">{lang === 'ta' ? 'நேரம்' : lang === 'hi' ? 'समय' : 'Hours'}</div><div className="info-val">{t.contact.hours}</div></div></div>
            <a href="https://maps.google.com/?q=AKR+Corniche+Center+Second+Line+Beach+George+Town+Chennai" target="_blank" rel="noopener noreferrer" className="map-box" style={{ display: 'flex' }}>
              <span>{lang === 'ta' ? '📍 Google Maps-ல் பார்க்க →' : lang === 'hi' ? '📍 Google Maps पर देखें →' : '📍 View on Google Maps →'}</span>
            </a>
            <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-block" style={{ marginTop: '14px' }}>{t.contact.waBtn}</a>
          </div>
        </div>
      </div>
      <div className="faq-wrap section" style={{ paddingTop: '0' }}>
        <div className="wrap">
          <h3>{lang === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : lang === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}</h3>
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
  const { lang } = useLang();
  const privacyText = {
    en: { title: 'Privacy Policy', sub: 'How we collect, use, and protect your personal information.', updated: 'Last updated: January 2025. This policy may be updated periodically.' },
    ta: { title: 'தனியுரிமைக் கொள்கை', sub: 'உங்கள் தனிப்பட்ட தகவலை எவ்வாறு சேகரித்து, பயன்படுத்தி, பாதுகாக்கிறோம்.', updated: 'கடைசியாக புதுப்பிப்பு: ஜனவரி 2025.' },
    hi: { title: 'गोपनीयता नीति', sub: 'हम आपकी व्यक्तिगत जानकारी को कैसे एकत्र, उपयोग और सुरक्षित रखते हैं।', updated: 'अंतिम अपडेट: जनवरी 2025।' },
  };
  const x = privacyText[lang] || privacyText.en;
  return (
    <div>
      <PageHero title={x.title} subtitle={x.sub} breadcrumbs={[{ label: x.title }]} onNav={onNav} />
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
        <p style={{ fontSize: '12px', color: 'var(--grey-400)', marginTop: '32px' }}>{x.updated}</p>
      </div></section>
    </div>
  );
}

export function TermsPage({ onNav }) {
  const { lang } = useLang();
  const termsText = {
    en: { title: 'Terms of Service', sub: 'Terms and conditions for using HelpLine Finance services.', updated: 'Last updated: January 2025.' },
    ta: { title: 'சேவை விதிமுறைகள்', sub: 'HelpLine Finance சேவைகளைப் பயன்படுத்தும் விதிமுறைகள்.', updated: 'கடைசியாக புதுப்பிப்பு: ஜனவரி 2025.' },
    hi: { title: 'सेवा की शर्तें', sub: 'HelpLine Finance सेवाओं के उपयोग की शर्तें।', updated: 'अंतिम अपडेट: जनवरी 2025।' },
  };
  const x = termsText[lang] || termsText.en;
  return (
    <div>
      <PageHero title={x.title} subtitle={x.sub} breadcrumbs={[{ label: x.title }]} onNav={onNav} />
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
        <p style={{ fontSize: '12px', color: 'var(--grey-400)', marginTop: '32px' }}>{x.updated}</p>
      </div></section>
    </div>
  );
}
