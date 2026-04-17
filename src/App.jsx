import { useState, useEffect } from 'react';
import { LangProvider } from '/src/context/LangContext.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import {
  PrivateFinancePage, ProjectLoanPage, NriLoansPage, InvestmentLoanPage,
  LowCibilPage, ChequeBasicPage, PrivateRecoveryPage, DrtLegalPage
} from './pages/ServicePages.jsx';
import { AboutPage, DocumentsPage, PartnerPage, ContactPage, PrivacyPage, TermsPage } from './pages/OtherPages.jsx';

const PAGES = {
  home: HomePage, about: AboutPage, docs: DocumentsPage, partner: PartnerPage,
  contact: ContactPage, privacy: PrivacyPage, terms: TermsPage,
  pf: PrivateFinancePage, pl: ProjectLoanPage, nri: NriLoansPage, inv: InvestmentLoanPage,
  cibil: LowCibilPage, cheq: ChequeBasicPage, rec: PrivateRecoveryPage, drt: DrtLegalPage,
};

export default function App() {
  const [page, setPage] = useState('home');
  const [bttVisible, setBttVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setBttVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const PageComponent = PAGES[page] || HomePage;

  return (
    <LangProvider>
      <style>{`
        /* ===== RESET & BASE ===== */
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;outline:none!important;}
        *:focus{outline:none!important;box-shadow:none!important;}
        *:focus-visible{outline:2px solid var(--sky-400)!important;outline-offset:2px!important;}
        input:focus,select:focus,textarea:focus,button:focus{outline:none!important;-webkit-tap-highlight-color:transparent;}
        :root{
          --sky-900:#0C2340;--sky-800:#0D3B6E;--sky-700:#1565C0;--sky-600:#1976D2;
          --sky-500:#2196F3;--sky-400:#42A5F5;--sky-300:#90CAF9;--sky-200:#BBDEFB;
          --sky-100:#E3F2FD;--sky-50:#F0F8FF;
          --gold:#D4AF37;--gold-lt:#F0C84A;--gold-dk:#A8880A;
          --white:#FFFFFF;--grey-50:#F8FAFC;--grey-100:#F1F5F9;--grey-200:#E2E8F0;
          --grey-400:#94A3B8;--grey-600:#475569;--grey-800:#1E293B;
          --text:var(--grey-800);--text-muted:var(--grey-600);--text-light:var(--grey-400);
          --border:var(--grey-200);--surface:var(--grey-50);--wa:#25D366;
          --r-sm:8px;--r-md:12px;--r-lg:16px;--r-xl:24px;--r-2xl:32px;
          --ease:cubic-bezier(.4,0,.2,1);
        }
        html{scroll-behavior:smooth;font-size:16px;-webkit-text-size-adjust:100%;}
        body{font-family:'Plus Jakarta Sans',sans-serif;color:var(--text);background:var(--white);overflow-x:hidden;line-height:1.6;}
        a{text-decoration:none;color:inherit;}
        ul{list-style:none;}
        img{max-width:100%;display:block;}
        button{border:none;background:none;font-family:inherit;cursor:pointer;}
        input,select,textarea{font-family:inherit;}
        /* Remove blue flash on mobile tap */
        *{-webkit-tap-highlight-color:transparent;}

        /* ===== NAVBAR ===== */
        #navbar{position:fixed;top:0;left:0;right:0;z-index:1000;}
        .nav-topbar{background:var(--sky-900);padding:7px 6%;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;}
        .nav-topbar-left,.nav-topbar-right{display:flex;align-items:center;gap:16px;}
        .nav-topbar-item{display:flex;align-items:center;gap:7px;font-size:11.5px;color:rgba(255,255,255,.55);font-weight:500;}
        .nav-topbar-item a{color:var(--gold-lt);transition:color .2s;}
        .nav-topbar-item a:hover{color:white;}
        .nav-topbar-divider{width:1px;height:14px;background:rgba(255,255,255,.15);}
        .nav-main{background:rgba(255,255,255,.97);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);padding:0 6%;display:flex;align-items:center;justify-content:space-between;height:68px;border-bottom:1px solid rgba(33,150,243,.12);box-shadow:0 2px 20px rgba(12,35,64,.07);transition:box-shadow .3s;gap:16px;}
        #navbar.scrolled .nav-main{box-shadow:0 4px 40px rgba(12,35,64,.12);}
        .logo{display:flex;align-items:center;gap:11px;cursor:pointer;text-decoration:none;}
        .logo-icon{width:42px;height:42px;background:linear-gradient(135deg,var(--sky-800),var(--sky-600));border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:21px;color:var(--gold);font-family:'Playfair Display',serif;font-weight:700;box-shadow:0 4px 12px rgba(21,101,192,.25);flex-shrink:0;}
        .logo-text .brand{font-family:'Playfair Display',serif;font-size:16px;font-weight:700;color:var(--sky-900);line-height:1;}
        .logo-text .sub{font-size:10px;color:var(--text-muted);margin-top:2px;letter-spacing:.02em;}
        .nav-links{display:flex;align-items:center;gap:2px;flex-wrap:nowrap;}
        .nav-link{padding:7px 11px;border-radius:var(--r-sm);font-size:13px;font-weight:600;color:var(--text-muted);transition:all .2s;cursor:pointer;white-space:nowrap;position:relative;user-select:none;}
        .nav-link:hover{color:var(--sky-700);background:var(--sky-50);}
        .nav-link.active-link{color:var(--sky-700);}
        .nav-dd{position:relative;}
        .dd-menu{position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%);width:520px;margin-left:-80px;background:white;border-radius:var(--r-xl);box-shadow:0 20px 60px rgba(12,35,64,.14),0 0 0 1px rgba(33,150,243,.08);padding:20px;display:grid;grid-template-columns:1fr 1fr;gap:16px;z-index:200;}
        .dd-col-head{font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:var(--sky-600);margin-bottom:10px;padding-bottom:7px;border-bottom:1px solid var(--sky-100);}
        .dd-link{display:flex;align-items:center;gap:7px;padding:6px 8px;border-radius:var(--r-sm);font-size:12.5px;color:var(--grey-600);transition:all .15s;cursor:pointer;}
        .dd-link:hover{background:var(--sky-50);color:var(--sky-700);}
        .dd-link .dot{width:5px;height:5px;border-radius:50%;background:var(--sky-300);flex-shrink:0;}
        .lang-dd{position:relative;}
        .lang-btn{display:flex;align-items:center;gap:5px;padding:6px 10px;border-radius:var(--r-sm);font-size:12.5px;font-weight:600;color:var(--text-muted);cursor:pointer;border:1.5px solid var(--border);background:white;transition:.2s;white-space:nowrap;}
        .lang-btn:hover{color:var(--sky-700);border-color:var(--sky-300);background:var(--sky-50);}
        .lang-name{display:none;}
        .lang-menu{position:absolute;top:calc(100% + 6px);right:0;background:white;border-radius:var(--r-lg);box-shadow:0 16px 50px rgba(12,35,64,.14),0 0 0 1px rgba(33,150,243,.08);padding:8px;z-index:300;min-width:140px;}
        .lang-option{padding:9px 13px;border-radius:var(--r-sm);font-size:13px;font-weight:600;cursor:pointer;color:var(--grey-600);transition:.15s;}
        .lang-option:hover{background:var(--sky-50);color:var(--sky-700);}
        .lang-option.active{background:var(--sky-100);color:var(--sky-700);}
        .nav-actions{display:flex;align-items:center;gap:8px;flex-shrink:0;}
        .btn-sm{padding:7px 14px!important;font-size:12px!important;}
        .hamburger{display:none;flex-direction:column;gap:5px;padding:8px;cursor:pointer;background:none;border:none;}
        .hamburger span{width:22px;height:2px;background:var(--sky-800);border-radius:2px;transition:.3s;display:block;}

        /* ===== BUTTONS ===== */
        .btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;padding:9px 20px;border-radius:var(--r-md);font-size:13px;font-weight:600;cursor:pointer;transition:all .22s var(--ease);white-space:nowrap;font-family:'Plus Jakarta Sans',sans-serif;border:none;text-decoration:none;}
        .btn-primary{background:linear-gradient(135deg,var(--sky-700),var(--sky-600));color:white;box-shadow:0 4px 14px rgba(21,101,192,.3);}
        .btn-primary:hover{background:linear-gradient(135deg,var(--sky-800),var(--sky-700));transform:translateY(-2px);box-shadow:0 8px 24px rgba(21,101,192,.4);}
        .btn-gold{background:linear-gradient(135deg,var(--gold),var(--gold-lt));color:var(--sky-900);box-shadow:0 4px 14px rgba(212,175,55,.3);font-weight:700;}
        .btn-gold:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(212,175,55,.45);}
        .btn-wa{background:var(--wa);color:white;box-shadow:0 4px 14px rgba(37,211,102,.3);}
        .btn-wa:hover{background:#1da750;transform:translateY(-2px);box-shadow:0 8px 24px rgba(37,211,102,.4);}
        .btn-outline{border:1.5px solid var(--sky-200);color:var(--sky-700);background:transparent;}
        .btn-outline:hover{background:var(--sky-50);border-color:var(--sky-300);}
        .btn-white{background:white;color:var(--sky-900);font-weight:700;}
        .btn-white:hover{background:var(--sky-50);transform:translateY(-2px);}
        .btn-lg{padding:14px 32px!important;font-size:15px!important;border-radius:var(--r-lg)!important;}
        .btn-xl{padding:16px 38px!important;font-size:16px!important;border-radius:var(--r-lg)!important;}
        .btn-block{width:100%;justify-content:center;}

        /* ===== MOBILE NAV ===== */
        .mob-nav{display:none;position:fixed;inset:0;z-index:998;background:var(--sky-900);flex-direction:column;overflow-y:auto;padding:80px 28px 40px;}
        .mob-nav.open{display:flex;}
        .mob-close{position:absolute;top:18px;right:22px;width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;color:white;font-size:20px;cursor:pointer;transition:.2s;border:none;}
        .mob-close:hover{background:rgba(255,255,255,.15);}
        .mob-link{padding:14px 0;border-bottom:1px solid rgba(255,255,255,.07);font-size:17px;font-weight:600;color:rgba(255,255,255,.85);cursor:pointer;transition:.2s;display:flex;align-items:center;justify-content:space-between;}
        .mob-link:hover{color:var(--gold-lt);}
        .mob-sub{padding-left:16px;}
        .mob-sub .mob-link{font-size:14px;color:rgba(255,255,255,.55);border-bottom-color:rgba(255,255,255,.04);}

        /* ===== HERO ===== */
        .hero{min-height:100vh;background:var(--sky-900);display:flex;align-items:center;padding-top:110px;position:relative;overflow:hidden;}
        .hero-mesh{position:absolute;inset:0;background:radial-gradient(ellipse 70% 70% at 65% 40%,rgba(33,150,243,.15) 0%,transparent 65%),radial-gradient(ellipse 50% 60% at 10% 80%,rgba(21,101,192,.1) 0%,transparent 60%),radial-gradient(ellipse 40% 40% at 90% 10%,rgba(212,175,55,.06) 0%,transparent 50%);}
        .hero-grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(33,150,243,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(33,150,243,.04) 1px,transparent 1px);background-size:50px 50px;}
        .hero-inner{position:relative;z-index:2;max-width:1380px;margin:0 auto;padding:40px 6% 80px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:60px;width:100%;}
        .hero-eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(33,150,243,.12);border:1px solid rgba(33,150,243,.25);color:var(--sky-300);font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;padding:6px 14px;border-radius:100px;margin-bottom:22px;}
        .hero-eyebrow .pulse{width:7px;height:7px;border-radius:50%;background:var(--sky-400);animation:eyePulse 2s infinite;}
        @keyframes eyePulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.8)}}
        .hero-h1{font-family:'Playfair Display',serif;font-size:clamp(40px,5vw,68px);font-weight:900;line-height:1.06;color:white;margin-bottom:22px;letter-spacing:-.01em;}
        .hero-h1 em{font-style:normal;background:linear-gradient(135deg,var(--gold) 0%,var(--gold-lt) 50%,var(--gold) 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 3.5s linear infinite;}
        @keyframes shimmer{to{background-position:200% center}}
        .hero-desc{font-size:clamp(14px,1.4vw,17px);color:rgba(255,255,255,.58);line-height:1.75;max-width:480px;margin-bottom:36px;}
        .hero-btns{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:44px;}
        .hero-trust{display:flex;flex-wrap:wrap;gap:22px;padding-top:22px;border-top:1px solid rgba(255,255,255,.08);}
        .trust-pill{display:flex;align-items:center;gap:7px;font-size:12px;color:rgba(255,255,255,.45);font-weight:500;}
        .trust-pill .icon{font-size:15px;}
        .hero-right{display:flex;align-items:center;justify-content:center;position:relative;}
        .coin-container{position:relative;display:flex;align-items:center;justify-content:center;}
        .coin-rings{position:absolute;inset:-40px;z-index:0;pointer-events:none;}
        .coin-ring{position:absolute;border-radius:50%;border:1px solid rgba(33,150,243,.15);}
        .coin-ring.r1{inset:0;animation:ringBreath 4s ease-in-out infinite;}
        .coin-ring.r2{inset:-24px;border-color:rgba(33,150,243,.08);animation:ringBreath 4s ease-in-out infinite .8s;}
        .coin-ring.r3{inset:-54px;border-color:rgba(33,150,243,.04);animation:ringBreath 4s ease-in-out infinite 1.6s;}
        @keyframes ringBreath{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:1;transform:scale(1.015)}}
        .coin-placeholder{width:420px;height:420px;display:flex;align-items:center;justify-content:center;}
        .coin-spinner{font-size:80px;color:var(--gold);animation:coinSpin 2s linear infinite;}
        @keyframes coinSpin{from{transform:rotateY(0deg)}to{transform:rotateY(360deg)}}
        .hero-scroll{position:absolute;bottom:40px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;color:rgba(255,255,255,.3);font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;}
        .scroll-track{width:22px;height:34px;border:1.5px solid rgba(255,255,255,.18);border-radius:11px;display:flex;justify-content:center;padding-top:5px;}
        .scroll-thumb{width:4px;height:7px;background:var(--gold);border-radius:2px;animation:scrollSlide 1.6s ease-in-out infinite;}
        @keyframes scrollSlide{0%,100%{transform:translateY(0);opacity:1}50%{transform:translateY(9px);opacity:.3}}

        /* ===== SECTION HELPERS ===== */
        .section{padding:96px 6%;}
        .section-sm{padding:70px 6%;}
        .wrap{max-width:1380px;margin:0 auto;}
        .label-tag{display:inline-flex;align-items:center;gap:9px;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:var(--sky-600);margin-bottom:12px;}
        .label-tag::after{content:'';display:block;width:28px;height:2px;background:linear-gradient(90deg,var(--sky-500),transparent);border-radius:1px;}
        .section-title{font-family:'Playfair Display',serif;font-size:clamp(30px,3.2vw,46px);font-weight:700;color:var(--sky-900);line-height:1.13;margin-bottom:14px;letter-spacing:-.01em;}
        .section-desc{font-size:16px;color:var(--text-muted);max-width:550px;line-height:1.75;}
        .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;}
        .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}

        /* ===== TRUST STRIP ===== */
        .trust-strip{background:white;border-bottom:1px solid var(--border);padding:18px 6%;}
        .trust-inner{max-width:1380px;margin:0 auto;display:flex;justify-content:center;flex-wrap:wrap;gap:32px;}
        .ti{display:flex;align-items:center;gap:9px;font-size:12.5px;font-weight:600;color:var(--grey-600);}
        .ti .ico{width:30px;height:30px;border-radius:var(--r-sm);background:var(--sky-50);display:flex;align-items:center;justify-content:center;font-size:15px;}

        /* ===== ABOUT SNAP ===== */
        .about-snap{background:var(--grey-50);}
        .about-text p{font-size:15px;color:var(--text-muted);line-height:1.8;margin-bottom:16px;}
        .feature-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:30px;}
        .feature-item{display:flex;align-items:flex-start;gap:12px;padding:16px;background:white;border-radius:var(--r-lg);border:1px solid var(--border);box-shadow:0 2px 8px rgba(12,35,64,.04);transition:all .25s var(--ease);}
        .feature-item:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(12,35,64,.08);border-color:var(--sky-200);}
        .fi-icon{width:38px;height:38px;flex-shrink:0;border-radius:10px;background:linear-gradient(135deg,var(--sky-100),var(--sky-50));display:flex;align-items:center;justify-content:center;font-size:18px;}
        .fi-text h4{font-size:13px;font-weight:700;color:var(--sky-900);margin-bottom:2px;}
        .fi-text p{font-size:12px;color:var(--text-muted);}
        .about-panel{background:linear-gradient(155deg,var(--sky-800) 0%,var(--sky-900) 100%);border-radius:var(--r-2xl);padding:38px;color:white;border:1px solid rgba(33,150,243,.15);box-shadow:0 20px 60px rgba(12,35,64,.2);position:relative;overflow:hidden;}
        .about-panel::before{content:'';position:absolute;top:-60px;right:-60px;width:220px;height:220px;background:radial-gradient(circle,rgba(33,150,243,.15) 0%,transparent 70%);border-radius:50%;}
        .panel-head{font-family:'Playfair Display',serif;font-size:20px;color:var(--gold-lt);margin-bottom:22px;font-weight:700;position:relative;z-index:1;}
        .loan-list-item{display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.06);font-size:13.5px;color:rgba(255,255,255,.75);position:relative;z-index:1;cursor:pointer;transition:.2s;}
        .loan-list-item:hover{color:white;}
        .loan-list-item:last-of-type{border-bottom:none;}
        .loan-arrow{color:var(--gold);font-weight:700;font-size:15px;}

        /* ===== STATS ===== */
        .stats-bar{background:linear-gradient(135deg,var(--sky-800) 0%,var(--sky-900) 100%);padding:56px 6%;position:relative;overflow:hidden;}
        .stats-inner{max-width:1380px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:32px;position:relative;z-index:1;}
        .stat-box{text-align:center;padding:16px;}
        .stat-box+.stat-box{border-left:1px solid rgba(255,255,255,.08);}
        .stat-num{font-family:'Playfair Display',serif;font-size:clamp(38px,4.5vw,58px);font-weight:900;color:var(--gold-lt);line-height:1;margin-bottom:8px;}
        .stat-lbl{font-size:13px;color:rgba(255,255,255,.5);font-weight:500;}

        /* ===== SERVICES ===== */
        .services-sec{background:white;}
        .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:52px;}
        .svc-card{background:white;border-radius:var(--r-xl);border:1px solid var(--border);padding:30px;cursor:pointer;transition:all .3s var(--ease);position:relative;overflow:hidden;}
        .svc-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--sky-300);transition:all .3s;}
        .svc-card:hover::before{background:linear-gradient(180deg,var(--sky-500),var(--sky-700));width:4px;}
        .svc-card:hover{transform:translateY(-5px);box-shadow:0 20px 50px rgba(12,35,64,.1);border-color:var(--sky-200);}
        .svc-icon{width:50px;height:50px;border-radius:14px;background:linear-gradient(135deg,var(--sky-100),var(--sky-50));display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:18px;transition:.3s;}
        .svc-card:hover .svc-icon{background:linear-gradient(135deg,var(--sky-200),var(--sky-100));}
        .svc-card h3{font-family:'Playfair Display',serif;font-size:17.5px;font-weight:700;color:var(--sky-900);margin-bottom:9px;line-height:1.3;}
        .svc-card p{font-size:13px;color:var(--text-muted);line-height:1.7;margin-bottom:18px;}
        .svc-tags{display:flex;gap:7px;flex-wrap:wrap;}
        .tag{padding:3px 10px;border-radius:6px;font-size:11px;font-weight:600;}
        .tag-blue{background:var(--sky-50);color:var(--sky-700);border:1px solid var(--sky-100);}
        .tag-gold{background:rgba(212,175,55,.08);color:var(--gold-dk);border:1px solid rgba(212,175,55,.18);}
        .svc-cta{position:absolute;right:22px;top:50%;transform:translateY(-50%) translateX(8px);opacity:0;color:var(--sky-500);font-size:20px;transition:.3s;}
        .svc-card:hover .svc-cta{opacity:1;transform:translateY(-50%) translateX(0);}

        /* ===== EMI ===== */
        .emi-sec{background:var(--grey-50);}
        .emi-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start;margin-top:48px;}
        .slider-block{margin-bottom:26px;}
        .slider-label{display:flex;justify-content:space-between;align-items:center;font-size:13px;font-weight:600;color:var(--grey-600);margin-bottom:10px;}
        .slider-val{color:var(--sky-800);font-weight:700;}
        input[type=range]{width:100%;-webkit-appearance:none;appearance:none;height:4px;background:var(--sky-100);border-radius:2px;cursor:pointer;}
        input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:19px;height:19px;background:linear-gradient(135deg,var(--sky-600),var(--sky-500));border-radius:50%;cursor:pointer;box-shadow:0 2px 8px rgba(21,101,192,.35);}
        .emi-disclaimer{background:var(--sky-50);border:1px solid var(--sky-100);border-radius:var(--r-md);padding:14px 16px;font-size:12px;color:var(--text-muted);line-height:1.6;margin-top:20px;}
        .emi-result{background:linear-gradient(155deg,var(--sky-800),var(--sky-900));border-radius:var(--r-2xl);padding:38px;color:white;box-shadow:0 20px 60px rgba(12,35,64,.2);border:1px solid rgba(33,150,243,.12);}
        .emi-res-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.4);margin-bottom:8px;}
        .emi-big{font-family:'Playfair Display',serif;font-size:clamp(36px,4vw,52px);font-weight:900;color:var(--gold-lt);line-height:1.1;margin-bottom:4px;}
        .emi-per{font-size:12px;color:rgba(255,255,255,.4);margin-bottom:28px;}
        .emi-rows{border-top:1px solid rgba(255,255,255,.08);padding-top:20px;}
        .emi-row{display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.06);font-size:13px;}
        .emi-row .k{color:rgba(255,255,255,.5);}
        .emi-row .v{color:white;font-weight:700;}
        .emi-note{font-size:11px;color:rgba(255,255,255,.3);margin-top:20px;line-height:1.6;}

        /* ===== TESTIMONIALS ===== */
        .testi-sec{background:white;}
        .testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .testi-card{background:white;border-radius:var(--r-xl);border:1px solid var(--border);padding:32px;box-shadow:0 4px 20px rgba(12,35,64,.05);transition:all .3s var(--ease);}
        .testi-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(12,35,64,.1);border-color:var(--sky-200);}
        .testi-quote{font-size:56px;color:var(--sky-100);font-family:'Playfair Display',serif;line-height:.8;margin-bottom:12px;}
        .testi-stars{color:var(--gold);font-size:16px;margin-bottom:14px;letter-spacing:2px;}
        .testi-text{font-size:13.5px;color:var(--text-muted);line-height:1.75;margin-bottom:24px;}
        .testi-author{display:flex;align-items:center;gap:12px;}
        .testi-avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--sky-700),var(--sky-500));color:white;font-family:'Playfair Display',serif;font-size:19px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .testi-name{font-size:14px;font-weight:700;color:var(--sky-900);}
        .testi-badge{font-size:11px;color:var(--sky-500);margin-top:2px;}

        /* ===== CTA BANNER ===== */
        .cta-banner{background:linear-gradient(135deg,var(--sky-700),var(--sky-900));padding:72px 6%;}
        .cta-inner{max-width:900px;margin:0 auto;text-align:center;}
        .cta-inner h2{font-family:'Playfair Display',serif;font-size:clamp(24px,3vw,38px);color:white;margin-bottom:14px;font-weight:700;}
        .cta-inner p{font-size:16px;color:rgba(255,255,255,.65);margin-bottom:32px;line-height:1.7;}
        .cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;}

        /* ===== CONTACT ===== */
        .contact-sec{background:var(--grey-50);}
        .contact-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:64px;margin-top:48px;}
        .form-group{margin-bottom:18px;}
        .form-label{display:block;font-size:12.5px;font-weight:700;color:var(--grey-600);margin-bottom:7px;letter-spacing:.01em;}
        .form-ctrl{width:100%;padding:11px 15px;border:1.5px solid var(--border);border-radius:var(--r-md);font-size:13.5px;color:var(--text);background:white;transition:all .2s;-webkit-appearance:none;appearance:none;}
        .form-ctrl:focus{border-color:var(--sky-400);}
        .form-ctrl::placeholder{color:var(--grey-400);}
        textarea.form-ctrl{height:110px;resize:vertical;}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
        .form-notice{font-size:11.5px;color:var(--text-muted);line-height:1.6;margin-bottom:18px;padding:12px 14px;background:var(--sky-50);border:1px solid var(--sky-100);border-radius:var(--r-sm);}
        .info-card{background:linear-gradient(155deg,var(--sky-800),var(--sky-900));border-radius:var(--r-2xl);padding:36px;color:white;box-shadow:0 16px 50px rgba(12,35,64,.18);height:fit-content;}
        .info-card-head{font-family:'Playfair Display',serif;font-size:20px;color:var(--gold-lt);font-weight:700;margin-bottom:24px;}
        .info-item{display:flex;gap:14px;align-items:flex-start;margin-bottom:22px;}
        .info-icon{width:40px;height:40px;flex-shrink:0;border-radius:10px;background:rgba(33,150,243,.12);display:flex;align-items:center;justify-content:center;font-size:17px;}
        .info-lbl{font-size:10.5px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.1em;margin-bottom:3px;}
        .info-val{font-size:13.5px;color:rgba(255,255,255,.82);}
        .info-val a{color:var(--gold-lt);transition:.2s;}
        .info-val a:hover{color:white;}

        /* ===== FOOTER ===== */
        footer{background:var(--sky-900);padding:68px 6% 28px;}
        .footer-grid{max-width:1380px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1.4fr;gap:48px;padding-bottom:48px;border-bottom:1px solid rgba(255,255,255,.06);}
        .footer-brand p{font-size:13px;color:rgba(255,255,255,.45);line-height:1.8;max-width:270px;margin:14px 0 16px;}
        .footer-col h5{font-family:'Playfair Display',serif;font-size:13.5px;font-weight:700;color:var(--gold-lt);margin-bottom:18px;letter-spacing:.01em;}
        .footer-col li{margin-bottom:9px;}
        .footer-col a,.footer-col span{font-size:12.5px;color:rgba(255,255,255,.45);cursor:pointer;transition:.2s;display:block;}
        .footer-col a:hover,.footer-col span:hover{color:rgba(255,255,255,.85);}
        .footer-addr{font-size:12.5px;color:rgba(255,255,255,.45);line-height:1.8;}
        .footer-addr a{color:var(--gold-lt);display:inline;font-size:inherit;}
        .footer-bottom{max-width:1380px;margin:0 auto;padding-top:22px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;}
        .footer-copy{font-size:12px;color:rgba(255,255,255,.3);}
        .footer-legal{display:flex;gap:20px;}
        .footer-legal a{font-size:12px;color:rgba(255,255,255,.3);cursor:pointer;transition:.2s;}
        .footer-legal a:hover{color:rgba(255,255,255,.6);}

        /* ===== FLOATS ===== */
        .float-wa{position:fixed;bottom:26px;right:26px;z-index:900;width:56px;height:56px;border-radius:50%;background:var(--wa);color:white;font-size:26px;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 28px rgba(37,211,102,.45);cursor:pointer;animation:waFloat 3s ease-in-out infinite;transition:transform .3s;text-decoration:none;}
        .float-wa:hover{transform:scale(1.1);}
        @keyframes waFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        #btt{position:fixed;bottom:26px;left:26px;z-index:900;width:42px;height:42px;border-radius:50%;background:var(--sky-800);color:var(--gold-lt);font-size:17px;display:none;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(12,35,64,.3);cursor:pointer;transition:.3s;border:none;}
        #btt.vis{display:flex;}
        #btt:hover{transform:translateY(-3px);background:var(--sky-700);}

        /* ===== TOAST ===== */
        #toast{position:fixed;bottom:90px;left:50%;transform:translateX(-50%) translateY(16px);background:var(--sky-800);color:white;padding:13px 26px;border-radius:var(--r-lg);font-size:13px;font-weight:600;z-index:9000;opacity:0;transition:all .4s var(--ease);pointer-events:none;white-space:nowrap;border:1px solid rgba(33,150,243,.2);box-shadow:0 8px 30px rgba(12,35,64,.25);}
        #toast.show{opacity:1;transform:translateX(-50%) translateY(0);}

        /* ===== PAGE HERO ===== */
        .pg-hero{background:linear-gradient(135deg,var(--sky-900) 0%,var(--sky-800) 60%,var(--sky-700) 100%);padding:150px 6% 72px;position:relative;overflow:hidden;}
        .pg-hero::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--gold),transparent);}
        .pg-hero-deco{position:absolute;top:0;right:0;bottom:0;width:35%;opacity:.04;background:repeating-linear-gradient(45deg,var(--sky-400) 0,var(--sky-400) 1px,transparent 0,transparent 50%) 0/18px 18px;}
        .breadcrumb{display:flex;align-items:center;gap:7px;font-size:12px;color:rgba(255,255,255,.4);margin-bottom:14px;flex-wrap:wrap;}
        .breadcrumb span{cursor:pointer;transition:.2s;}
        .breadcrumb span:hover{color:var(--gold-lt);}
        .breadcrumb .sep{color:rgba(255,255,255,.2);font-size:10px;}
        .pg-hero h1{font-family:'Playfair Display',serif;font-size:clamp(34px,4.5vw,54px);font-weight:900;color:white;max-width:650px;line-height:1.1;letter-spacing:-.01em;}
        .pg-hero p{font-size:16px;color:rgba(255,255,255,.55);max-width:520px;margin-top:14px;line-height:1.75;}

        /* ===== SERVICE DETAIL ===== */
        .svc-layout{max-width:1380px;margin:0 auto;padding:70px 6%;display:grid;grid-template-columns:1fr 360px;gap:52px;align-items:start;}
        .svc-main h2{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:var(--sky-900);margin-bottom:18px;padding-bottom:12px;border-bottom:2px solid var(--sky-100);position:relative;}
        .svc-main h2::after{content:'';position:absolute;bottom:-2px;left:0;width:48px;height:2px;background:var(--sky-500);}
        .svc-main p{font-size:14.5px;color:var(--text-muted);line-height:1.8;margin-bottom:14px;}
        .svc-block{margin-bottom:44px;}
        .rate-pill{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:20px;font-size:11.5px;font-weight:700;margin:4px 4px 4px 0;}
        .rate-pill-blue{background:var(--sky-50);color:var(--sky-700);border:1px solid var(--sky-100);}
        .rate-pill-gold{background:rgba(212,175,55,.09);color:var(--gold-dk);border:1px solid rgba(212,175,55,.2);}
        .info-box{background:var(--sky-50);border:1px solid var(--sky-100);border-radius:var(--r-md);padding:18px 20px;font-size:13.5px;color:var(--text-muted);line-height:1.75;margin-bottom:18px;}
        .checklist{background:white;border-radius:var(--r-xl);border:1px solid var(--border);border-left:4px solid var(--gold);padding:24px;box-shadow:0 4px 16px rgba(12,35,64,.05);margin-bottom:18px;}
        .checklist h4{font-family:'Playfair Display',serif;font-size:16px;color:var(--sky-900);margin-bottom:14px;font-weight:700;}
        .check-item{display:flex;align-items:flex-start;gap:9px;font-size:13px;color:var(--text-muted);margin-bottom:9px;line-height:1.55;}
        .check-item::before{content:'✓';color:var(--sky-600);font-weight:800;flex-shrink:0;margin-top:1px;font-size:12px;}
        .s-card{background:white;border-radius:var(--r-xl);border:1px solid var(--border);padding:26px;box-shadow:0 4px 16px rgba(12,35,64,.05);margin-bottom:18px;}
        .s-cta-card{background:linear-gradient(155deg,var(--sky-800),var(--sky-900));border-radius:var(--r-xl);padding:28px;color:white;margin-bottom:18px;box-shadow:0 12px 36px rgba(12,35,64,.2);}
        .s-cta-card h4{font-family:'Playfair Display',serif;font-size:18px;color:var(--gold-lt);margin-bottom:7px;font-weight:700;}
        .s-cta-card p{font-size:13px;color:rgba(255,255,255,.6);margin-bottom:20px;line-height:1.65;}
        .s-card h4{font-family:'Playfair Display',serif;font-size:16px;color:var(--sky-900);margin-bottom:14px;font-weight:700;}

        /* ===== TABS ===== */
        .tabs{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:24px;}
        .tab-btn{padding:8px 15px;border-radius:var(--r-sm);cursor:pointer;font-size:12.5px;font-weight:600;border:1.5px solid var(--border);color:var(--text-muted);background:white;transition:all .2s;}
        .tab-btn.on{background:var(--sky-700);color:white;border-color:var(--sky-700);}

        /* ===== ACCORDION ===== */
        .acc-item{border-bottom:1px solid var(--border);}
        .acc-head{padding:16px 0;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:600;color:var(--sky-900);user-select:none;}
        .acc-head .ico{color:var(--sky-500);font-size:19px;transition:transform .3s;flex-shrink:0;margin-left:12px;}
        .acc-head.open .ico{transform:rotate(45deg);}
        .acc-body{padding:0 0 16px;font-size:13.5px;color:var(--text-muted);line-height:1.8;}

        /* ===== CIBIL ===== */
        .cibil-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:18px;}
        .cibil-card{padding:14px 16px;border-radius:var(--r-md);font-size:13px;font-weight:600;}
        .legal-disc{background:rgba(212,175,55,.05);border:1px solid rgba(212,175,55,.2);border-radius:var(--r-md);padding:18px 20px;font-size:13px;color:var(--text-muted);line-height:1.75;margin-top:22px;}

        /* ===== ABOUT PAGE ===== */
        .val-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:38px;}
        .val-card{background:linear-gradient(155deg,var(--sky-800),var(--sky-900));border-radius:var(--r-xl);padding:34px;color:white;border-top:3px solid var(--sky-500);transition:transform .3s;}
        .val-card:hover{transform:translateY(-4px);}
        .val-card .ico{font-size:30px;margin-bottom:14px;}
        .val-card h3{font-family:'Playfair Display',serif;font-size:19px;color:var(--gold-lt);margin-bottom:12px;font-weight:700;}
        .val-card p{font-size:13px;color:rgba(255,255,255,.6);line-height:1.7;}

        /* ===== DOCUMENTS PAGE ===== */
        .doc-tabs{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:38px;}
        .doc-tab{padding:11px 22px;border-radius:10px;cursor:pointer;font-size:13.5px;font-weight:600;border:1.5px solid var(--border);color:var(--text-muted);background:white;transition:all .2s;}
        .doc-tab.on{background:var(--sky-700);color:white;border-color:var(--sky-700);}
        .doc-panel{display:none;}
        .doc-panel.on{display:block;}
        .doc-2col{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
        .doc-section{margin-bottom:18px;}
        .doc-section h3{font-family:'Playfair Display',serif;font-size:17px;color:var(--sky-900);font-weight:700;margin-bottom:14px;}

        /* ===== PARTNER PAGE ===== */
        .partner-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;margin-top:48px;}
        .partner-benefits{margin-top:30px;display:grid;gap:20px;}
        .pb-item{display:flex;gap:14px;align-items:flex-start;}
        .pb-icon{width:44px;height:44px;flex-shrink:0;border-radius:12px;background:var(--sky-50);border:1px solid var(--sky-100);display:flex;align-items:center;justify-content:center;font-size:20px;}
        .pb-item h4{font-size:14px;font-weight:700;color:var(--sky-900);margin-bottom:4px;}
        .pb-item p{font-size:12.5px;color:var(--text-muted);line-height:1.65;}
        .partner-form-wrap{background:white;border-radius:var(--r-2xl);padding:40px;border:1px solid var(--border);box-shadow:0 8px 36px rgba(12,35,64,.06);}
        .partner-form-wrap h3{font-family:'Playfair Display',serif;font-size:22px;color:var(--sky-900);font-weight:700;margin-bottom:26px;}

        /* ===== CONTACT PAGE ===== */
        .contact-page-layout{max-width:1380px;margin:0 auto;padding:70px 6%;display:grid;grid-template-columns:1.2fr 1fr;gap:64px;}
        .contact-page-layout h3{font-family:'Playfair Display',serif;font-size:22px;color:var(--sky-900);font-weight:700;margin-bottom:26px;}
        .map-box{margin-top:22px;border-radius:var(--r-xl);overflow:hidden;height:60px;background:linear-gradient(135deg,var(--sky-700),var(--sky-800));display:flex;align-items:center;justify-content:center;cursor:pointer;transition:.2s;text-decoration:none;}
        .map-box:hover{opacity:.88;}
        .map-box span{color:white;font-size:14px;font-weight:600;}
        .faq-wrap{margin-top:0;}
        .faq-wrap h3{font-family:'Playfair Display',serif;font-size:24px;color:var(--sky-900);font-weight:700;margin-bottom:28px;}

        /* ===== SCROLL REVEAL ===== */
        [data-sr]{opacity:0;transform:translateY(28px);transition:opacity .65s var(--ease),transform .65s var(--ease);}
        [data-sr].vis{opacity:1;transform:translateY(0);}
        [data-sr-d="1"]{transition-delay:.1s;}
        [data-sr-d="2"]{transition-delay:.2s;}
        [data-sr-d="3"]{transition-delay:.3s;}
        [data-sr-d="4"]{transition-delay:.4s;}

        /* ===== RESPONSIVE ===== */
        @media(max-width:1100px){
          .services-grid{grid-template-columns:repeat(2,1fr);}
          .stats-inner{grid-template-columns:repeat(2,1fr);}
          .footer-grid{grid-template-columns:1fr 1fr;}
          .svc-layout{grid-template-columns:1fr;}
          .testi-grid{grid-template-columns:repeat(2,1fr);}
          .val-grid{grid-template-columns:1fr 1fr;}
          .dd-menu{width:440px;margin-left:-80px;}
          .lang-name{display:inline;}
        }
        @media(max-width:900px){
          .hero-inner{grid-template-columns:1fr;text-align:center;gap:40px;}
          .hero-desc{margin:0 auto 36px;}
          .hero-btns,.hero-trust{justify-content:center;}
          .hero-right{order:-1;}
          .coin-placeholder,.coin-container{width:280px;height:280px;}
          .coin-placeholder{width:280px;height:280px;}
          .grid-2{grid-template-columns:1fr;gap:40px;}
          .emi-grid{grid-template-columns:1fr;}
          .contact-grid{grid-template-columns:1fr;}
          .contact-page-layout{grid-template-columns:1fr;}
          .partner-grid{grid-template-columns:1fr;}
          .nav-links,.nav-actions{display:none;}
          .hamburger{display:flex;}
          .doc-2col{grid-template-columns:1fr;}
          .form-row{grid-template-columns:1fr;}
          .services-grid{grid-template-columns:1fr;}
          .testi-grid{grid-template-columns:1fr;}
          .val-grid{grid-template-columns:1fr;}
          .stats-inner{grid-template-columns:1fr 1fr;}
          .stat-box+.stat-box{border-left:none;border-top:1px solid rgba(255,255,255,.08);}
          .footer-grid{grid-template-columns:1fr;}
          .cibil-grid{grid-template-columns:1fr 1fr;}
        }
        @media(max-width:600px){
          .section{padding:60px 5%;}
          .stats-inner{grid-template-columns:1fr 1fr;}
          .cta-btns{flex-direction:column;align-items:center;}
          .nav-topbar-right{display:none;}
          .pg-hero{padding:130px 5% 52px;}
          .svc-layout{padding:50px 5%;}
        }
        @media(min-width:1100px){
          .lang-name{display:inline;}
        }
      `}</style>

      <Navbar currentPage={page} onNav={nav} />

      <main style={{ paddingTop: '110px' }}>
        <PageComponent onNav={nav} />
      </main>

      <Footer onNav={nav} />

      {/* WhatsApp float */}
      <a href="https://wa.me/918098096666" target="_blank" rel="noopener noreferrer" className="float-wa" aria-label="Chat with us on WhatsApp">💬</a>

      {/* Back to top */}
      <button
        id="btt"
        className={bttVisible ? 'vis' : ''}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >↑</button>
    </LangProvider>
  );
}
