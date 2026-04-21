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
      {items && items.map((item, i) => (
        <div key={i} className="check-item">{item}</div>
      ))}
    </div>
  );
}

function SidebarCta({ title, subtitle, onNav }) {
  const { t } = useLang();
  return (
    <div className="svc-sidebar">
      <div className="s-cta-card">
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <button className="btn btn-gold btn-block" onClick={() => onNav('contact')}>{t.common.enquire}</button>
        <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-block" style={{ marginTop: '10px' }}>{t.common.wa}</a>
      </div>
    </div>
  );
}

export function PrivateFinancePage({ onNav }) {
  const { t } = useLang();
  const d = t.pf;
  return (
    <div>
      <PageHero title={t.services.items[0].title} subtitle={d.subtitle} breadcrumbs={[{ label: t.common.services }, { label: t.services.items[0].title }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>{d.s1}</h2>
            <p>{d.s1d}</p>
            <div style={{ marginBottom: '14px' }}>
              <span className="rate-pill rate-pill-gold">{d.rateLabel}</span>
              <span className="rate-pill rate-pill-blue">{d.procLabel}</span>
              <span className="rate-pill rate-pill-blue">{d.rangeLabel}</span>
            </div>
            <Checklist title={d.docTitle1} items={d.docs1} />
          </div>
          <div className="svc-block">
            <h2>{d.s2}</h2>
            <p>{d.s2d}</p>
            <div style={{ marginBottom: '14px' }}>
              <span className="rate-pill rate-pill-blue">{d.procLabel2}</span>
              <span className="rate-pill rate-pill-gold">{d.rateLabel2}</span>
            </div>
            <Checklist title={d.docTitle2} items={d.docs2} />
          </div>
          <div className="info-box" style={{ marginTop: '22px' }}>
            <strong>{t.common.note}</strong> {d.noteBody}
          </div>
        </div>
        <SidebarCta title={d.ctaTitle} subtitle={d.ctaDesc} onNav={onNav} />
      </div>
    </div>
  );
}

export function ProjectLoanPage({ onNav }) {
  const { t } = useLang();
  const d = t.pl;
  return (
    <div>
      <PageHero title={t.services.items[1].title} subtitle={d.subtitle} breadcrumbs={[{ label: t.common.services }, { label: t.services.items[1].title }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>{d.t1}</h2>
            <p>{d.d1}</p>
          </div>
          <div className="svc-block">
            <h2>{d.t2}</h2>
            <Checklist items={d.items2} />
          </div>
          <div className="svc-block">
            <h2>{d.t3}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '16px' }}>
              {d.features.map((f, i) => (
                <div key={i} className="feature-item">
                  <div className="fi-icon">✦</div>
                  <div className="fi-text"><h4>{f.h}</h4><p>{f.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <SidebarCta title={d.ctaTitle} subtitle={d.ctaDesc} onNav={onNav} />
      </div>
    </div>
  );
}

export function NriLoansPage({ onNav }) {
  const { t } = useLang();
  const d = t.nri;
  const [tab, setTab] = useState('docs');
  const tabs = [['docs', d.tabs.docs], ['personal', d.tabs.personal], ['property', d.tabs.property], ['fees', d.tabs.fees], ['mod', d.tabs.mod]];

  return (
    <div>
      <PageHero title={t.services.items[2].title} subtitle={d.subtitle} breadcrumbs={[{ label: t.common.services }, { label: t.services.items[2].title }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="tabs">
            {tabs.map(([key, label]) => (
              <button key={key} className={`tab-btn${tab === key ? ' on' : ''}`} onClick={() => setTab(key)}>{label}</button>
            ))}
          </div>
          {tab === 'docs' && (
            <div className="svc-block">
              <h2>{d.t1}</h2>
              <Checklist items={d.items1a} />
              <Checklist items={d.items1b} />
            </div>
          )}
          {tab === 'personal' && (
            <div className="svc-block">
              <h2>{d.t2}</h2>
              <p>{d.d2}</p>
              <Checklist items={d.items2} />
            </div>
          )}
          {tab === 'property' && (
            <div className="svc-block">
              <h2>{d.t3}</h2>
              <Checklist items={d.items3a} />
              <Checklist items={d.items3b} />
            </div>
          )}
          {tab === 'fees' && (
            <div className="svc-block">
              <h2>{d.t4} <small style={{ fontWeight: 400, color: 'var(--text-muted)' }}>{d.indicative}</small></h2>
              <div className="info-box">
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px' }}>
                  <tbody>
                    {d.items4.map((item, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '10px 0', color: 'var(--text-muted)' }}>{item.l}</td>
                        <td style={{ padding: '10px 0', color: 'var(--sky-900)', fontWeight: 700, textAlign: 'right' }}>{item.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {d.rates.map((r, i) => <span key={i} className="rate-pill rate-pill-gold">{r}</span>)}
            </div>
          )}
          {tab === 'mod' && (
            <div className="svc-block">
              <h2>{d.t5}</h2>
              <p>{d.d5}</p>
              <Checklist items={d.items5} />
            </div>
          )}
        </div>
        <div className="svc-sidebar">
          <div className="s-cta-card">
            <h4>{d.sideTitle}</h4>
            <p>{d.sideDesc}</p>
            <button className="btn btn-gold btn-block" onClick={() => onNav('contact')}>{t.common.enquire}</button>
            <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-block" style={{ marginTop: '10px' }}>{t.common.wa}</a>
          </div>
          <div className="s-card">
            <h4>{d.sideH}</h4>
            {d.sideItems.map((it, i) => <div key={i} className="check-item">{it}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export function InvestmentLoanPage({ onNav }) {
  const { t } = useLang();
  const d = t.inv;
  return (
    <div>
      <PageHero title={t.services.items[3].title} subtitle={d.subtitle} breadcrumbs={[{ label: t.common.services }, { label: t.services.items[3].title }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>{d.t1}</h2>
            <p>{d.d1}</p>
          </div>
          <div className="svc-block">
            <h2>{d.t2}</h2>
            <Checklist items={d.items2} />
          </div>
        </div>
        <SidebarCta title={d.ctaTitle} subtitle={d.ctaDesc} onNav={onNav} />
      </div>
    </div>
  );
}

export function LowCibilPage({ onNav }) {
  const { t } = useLang();
  const d = t.cibil;
  return (
    <div>
      <PageHero title={t.services.items[4].title} subtitle={d.subtitle} breadcrumbs={[{ label: t.common.services }, { label: t.services.items[4].title }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>{d.t1}</h2>
            <p>{d.d1}</p>
            <div className="cibil-grid">
              <div className="cibil-card" style={{ background: 'rgba(34,197,94,.1)', borderLeft: '3px solid #22c55e', color: '#15803d' }}>🟢 750–900<br /><strong>{d.excellent}</strong></div>
              <div className="cibil-card" style={{ background: 'rgba(234,179,8,.1)', borderLeft: '3px solid #eab308', color: '#92400e' }}>🟡 650–749<br /><strong>{d.good}</strong></div>
              <div className="cibil-card" style={{ background: 'rgba(249,115,22,.1)', borderLeft: '3px solid #f97316', color: '#9a3412' }}>🟠 550–649<br /><strong>{d.fair}</strong></div>
              <div className="cibil-card" style={{ background: 'rgba(239,68,68,.1)', borderLeft: '3px solid #ef4444', color: '#991b1b' }}>🔴 {d.below}<br /><strong>{d.poor}</strong></div>
            </div>
          </div>
          <div className="svc-block">
            <h2>{d.t2}</h2>
            <p>{d.d2}</p>
            <Checklist items={d.items2} />
          </div>
        </div>
        <SidebarCta title={d.ctaTitle} subtitle={d.ctaDesc} onNav={onNav} />
      </div>
    </div>
  );
}

export function ChequeBasicPage({ onNav }) {
  const { t } = useLang();
  const d = t.cheq;
  return (
    <div>
      <PageHero title={t.services.items[5].title} subtitle={d.subtitle} breadcrumbs={[{ label: t.common.services }, { label: t.services.items[5].title }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>{d.t1}</h2>
            <p>{d.d1}</p>
          </div>
          <div className="svc-block">
            <h2>{d.t2}</h2>
            <Checklist items={d.items2} />
          </div>
          <div className="svc-block">
            <h2>{d.t3}</h2>
            <Checklist items={d.items3} />
          </div>
        </div>
        <SidebarCta title={d.ctaTitle} subtitle={d.ctaDesc} onNav={onNav} />
      </div>
    </div>
  );
}

export function PrivateRecoveryPage({ onNav }) {
  const { t } = useLang();
  const d = t.rec;
  return (
    <div>
      <PageHero title={t.services.items[6].title} subtitle={d.subtitle} breadcrumbs={[{ label: t.common.services }, { label: t.services.items[6].title }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>{d.t1}</h2>
            <p>{d.d1}</p>
          </div>
          {d.cases.map((c, i) => (
            <div key={i} className="svc-block">
              <h2>{c.title}</h2>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <SidebarCta title={d.ctaTitle} subtitle={d.ctaDesc} onNav={onNav} />
      </div>
    </div>
  );
}

export function DrtLegalPage({ onNav }) {
  const { t } = useLang();
  const d = t.drt;
  const [open, setOpen] = useState(null);
  return (
    <div>
      <PageHero title={t.services.items[7].title} subtitle={d.subtitle} breadcrumbs={[{ label: t.common.services }, { label: t.services.items[7].title }]} onNav={onNav} />
      <div className="svc-layout">
        <div className="svc-main">
          <div className="svc-block">
            <h2>{d.t1}</h2>
            <p>{d.d1}</p>
          </div>
          <div className="svc-block">
            <h2>{d.t2}</h2>
            <div>
              {d.items2.map((item, i) => (
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
