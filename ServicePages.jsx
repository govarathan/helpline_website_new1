import { useLang } from '/src/context/LangContext.jsx';

function PageHero({ title, subtitle, breadcrumbs, onNav }) {
  return (
    <div className="pg-hero">
      <div className="pg-hero-deco" />
      <div className="wrap">
        <div className="breadcrumb">
          <span onClick={() => onNav('home')}>Home</span>
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
  return (
    <div className="svc-sidebar">
      <div className="s-cta-card">
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <button className="btn btn-gold btn-block" onClick={() => onNav('contact')}>Enquire Now →</button>
        <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-block" style={{ marginTop: '10px' }}>{waLabel}</a>
      </div>
    </div>
  );
}

export function PrivateFinancePage({ onNav }) {
  return (
    <div>
      <PageHero title="Private Finance" subtitle="Unsecured and secured loans for MSME businesses with fast processing." breadcrumbs={[{ label: 'Services' }, { label: 'Private Finance' }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>Without Security (Unsecured)</h2>
            <p>Unsecured business loans for MSMEs based on business performance, bank turnover, and cash flow — no collateral required.</p>
            <div style={{ marginBottom: '14px' }}>
              <span className="rate-pill rate-pill-gold">From ₹3/lakh/month (indicative)</span>
              <span className="rate-pill rate-pill-blue">48 Hour Processing</span>
              <span className="rate-pill rate-pill-blue">Min ₹9 Lakhs – Max ₹10 Crores</span>
            </div>
            <Checklist title="Documents — Without Security" items={['PAN Card', '2 Photographs', 'Voter ID / Passport / Driving License', 'Business Registration Certificate', '2 Visiting Cards', 'Company Profile / Brochure', 'Bank Statement (12 Months — All Accounts)', 'Last 3 Years IT Returns + Balance Sheet', 'Last 3 Years P&L Statements', 'OD/CC Sanction Letter (if existing)', 'GST Registration (if applicable)', 'Annual Turnover, Tax Paid, Net Profit details']} />
          </div>
          <div className="svc-block">
            <h2>Against Property (Secured)</h2>
            <p>Secured loans against residential or commercial property. Higher limits with competitive rates and extended repayment periods.</p>
            <div style={{ marginBottom: '14px' }}>
              <span className="rate-pill rate-pill-blue">Processing: 15 Working Days</span>
              <span className="rate-pill rate-pill-gold">Competitive Rates (indicative)</span>
            </div>
            <Checklist title="Documents — Against Property" items={['All documents from Without Security category', 'Original Title Deed / Sale Deed', 'Parent documents (chain of title)', 'Encumbrance Certificate — 30 years', 'Patta / Chitta (Tamil Nadu)', 'Approved Building Plan', 'Completion / Occupancy Certificate', 'Property Tax receipts (3 years)', 'Utility bills in property name', 'NOC from society (for apartments)']} />
          </div>
          <div className="info-box" style={{ marginTop: '22px' }}>
            <strong>Note:</strong> All interest rates are indicative and for reference only. Actual rates vary based on loan type, security provided, applicant's credit profile, and prevailing market conditions. Contact us for a personalised quote.
          </div>
        </div>
        <SidebarCta title="Private Finance Enquiry" subtitle="Fast disbursement within 48 hours. Speak to our specialists today." onNav={onNav} />
      </div>
    </div>
  );
}

export function ProjectLoanPage({ onNav }) {
  return (
    <div>
      <PageHero title="Project Loan Specialist" subtitle="Structured financing for large-scale infrastructure and real estate projects." breadcrumbs={[{ label: 'Services' }, { label: 'Project Loan' }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>Project Loan Financing</h2>
            <p>HelpLine Finance specialises in structuring large-ticket project financing for infrastructure, real estate development, and business expansion. We work with our private financier network to match your project with the right funding structure.</p>
          </div>
          <div className="svc-block">
            <h2>Eligible Projects</h2>
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
        <SidebarCta title="Project Loan Enquiry" subtitle="Contact us for a personalised consultation on your project financing needs." onNav={onNav} />
      </div>
    </div>
  );
}

export function NriLoansPage({ onNav }) {
  const [tab, setTab] = useState('docs');
  const tabs = [['docs', 'NRI Documents'], ['personal', 'Personal'], ['property', 'Property'], ['fees', 'Fees'], ['mod', 'MOD']];

  return (
    <div>
      <PageHero title="NRI Loans" subtitle="Tailored loan solutions for Non-Resident Indians investing in India." breadcrumbs={[{ label: 'Services' }, { label: 'NRI Loans' }]} onNav={onNav} />
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
            <button className="btn btn-gold btn-block" onClick={() => onNav('contact')}>Enquire Now →</button>
            <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-block" style={{ marginTop: '10px' }}>💬 WhatsApp Us</a>
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

// NRI needs useState
import { useState } from 'react';

export function InvestmentLoanPage({ onNav }) {
  return (
    <div>
      <PageHero title="Investment Loans" subtitle="Capital financing for investment opportunities and wealth creation." breadcrumbs={[{ label: 'Services' }, { label: 'Investment Loan' }]} onNav={onNav} />
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
  return (
    <div>
      <PageHero title="Low CIBIL Score Loan" subtitle="CIBIL issues? No worries — we find solutions when banks say no." breadcrumbs={[{ label: 'Services' }, { label: 'Low CIBIL Loan' }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>Understanding CIBIL Scores</h2>
            <p>Your CIBIL score (300–900) represents your creditworthiness. Most banks require 700+ for standard approvals — but our private financier network looks beyond just the score.</p>
            <div className="cibil-grid">
              <div className="cibil-card" style={{ background: 'rgba(34,197,94,.1)', borderLeft: '3px solid #22c55e', color: '#15803d' }}>🟢 750–900<br /><strong>Excellent</strong></div>
              <div className="cibil-card" style={{ background: 'rgba(234,179,8,.1)', borderLeft: '3px solid #eab308', color: '#92400e' }}>🟡 650–749<br /><strong>Good</strong></div>
              <div className="cibil-card" style={{ background: 'rgba(249,115,22,.1)', borderLeft: '3px solid #f97316', color: '#9a3412' }}>🟠 550–649<br /><strong>Fair</strong></div>
              <div className="cibil-card" style={{ background: 'rgba(239,68,68,.1)', borderLeft: '3px solid #ef4444', color: '#991b1b' }}>🔴 Below 550<br /><strong>Poor</strong></div>
            </div>
          </div>
          <div className="svc-block">
            <h2>How We Help</h2>
            <p>HelpLine Finance works with private financiers who assess loans based on actual business performance, property assets, and cash flows — not just CIBIL score alone.</p>
            <Checklist items={['Assessment based on business performance, not just credit score', 'Property-backed loan options available', 'Flexible documentation requirements', 'Quick assessment and same-day response']} />
          </div>
        </div>
        <SidebarCta title="CIBIL Issues? Talk to Us" subtitle="Don't let your credit score stop you. Our specialists find solutions." onNav={onNav} />
      </div>
    </div>
  );
}

export function ChequeBasicPage({ onNav }) {
  return (
    <div>
      <PageHero title="Cheque Basis Loan" subtitle="Business loans sanctioned on the basis of post-dated cheques." breadcrumbs={[{ label: 'Services' }, { label: 'Cheque Basis Loan' }]} onNav={onNav} />
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
  const cases = [
    { title: 'Private Fraud Recovery', desc: 'Recovery of funds from fraudulent transactions, breach of contract, or unauthorised financial dealings through legal and professional channels.' },
    { title: 'Property Rescue (Bridge Loan)', desc: 'Short-term bridge financing to rescue stressed properties from foreclosure or auction, buying time for restructuring.' },
    { title: 'Private Property Takeover', desc: 'Facilitation of legal property takeover processes for lenders with defaulted borrowers, handled with complete discretion.' },
  ];
  return (
    <div>
      <PageHero title="Private Recovery Work" subtitle="Professional assistance in recovering loans and resolving financial disputes." breadcrumbs={[{ label: 'Services' }, { label: 'Private Recovery' }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>Our Recovery Services</h2>
            <p>HelpLine Finance provides expert assistance in private financial recovery — from fraud recovery to property rescue — handled with complete professionalism and discretion.</p>
          </div>
          {cases.map((c, i) => (
            <div key={i} className="svc-block">
              <h2>{c.title}</h2>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <SidebarCta title="Recovery Consultation" subtitle="Confidential. Professional. Effective. Speak to our recovery specialists." onNav={onNav} />
      </div>
    </div>
  );
}

export function DrtLegalPage({ onNav }) {
  const [open, setOpen] = useState(null);
  const items = [
    { title: 'Pre-NPA Stage', body: 'Early intervention before an account becomes Non-Performing Asset. We help borrowers and lenders restructure debt, negotiate settlements, and explore OTS (One-Time Settlement) options.' },
    { title: 'Post-NPA Stage', body: 'After classification as NPA, we guide clients through SARFAESI Act proceedings, assist with asset reconstruction, and negotiate with ARCs (Asset Reconstruction Companies).' },
    { title: 'NPA Legal Process', body: 'Filing and defending cases under SARFAESI Act 2002, DRT Act 1993. We navigate the complex legal processes including filing of Original Applications (OA) and Recovery Certificates (RC).' },
    { title: 'DRT / DRAT Proceedings', body: 'Representation guidance for Debt Recovery Tribunal (DRT) and Debt Recovery Appellate Tribunal (DRAT) proceedings. Understanding your rights and legal options at each stage.' },
    { title: 'Auction Guidance', body: 'Expert guidance through bank e-auction processes. Understanding auction notices, E-DRT procedures, bid requirements, and post-auction transfer processes under SARFAESI Act.' },
  ];
  return (
    <div>
      <PageHero title="DRT Legal Services" subtitle="Expert guidance through Debt Recovery Tribunal proceedings and NPA management." breadcrumbs={[{ label: 'Services' }, { label: 'DRT Legal' }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>About DRT Legal Services</h2>
            <p>HelpLine Finance provides expert guidance through the complex world of Debt Recovery Tribunal proceedings, NPA management, SARFAESI actions, and bank auction navigation.</p>
          </div>
          <div className="svc-block">
            <h2>Service Areas</h2>
            <div>
              {items.map((item, i) => (
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
            <strong>Legal Disclaimer:</strong> The information provided is for general guidance only and does not constitute legal advice. For specific legal matters, please consult a qualified advocate. HelpLine Finance assists with the financial aspects of DRT proceedings, not legal representation.
          </div>
        </div>
        <SidebarCta title="DRT Legal Consultation" subtitle="Navigate complex legal proceedings with expert financial guidance." onNav={onNav} />
      </div>
    </div>
  );
}
