export const translations = {
  en: {
    name: "English",
    flag: "🇬🇧",
    nav: { home: "Home", services: "Services", about: "About Us", documents: "Documents", partner: "Partner With Us", contact: "Contact", apply: "Apply Now", whatsapp: "WhatsApp", language: "Language" },
    hero: { eyebrow: "Trusted Since 2017", h1_1: "Your Dream.", h1_2: "Our Finance.", desc: "HelpLine Finance helps micro, small and medium enterprises across Tamil Nadu, Pondicherry, Karnataka and Kerala access credit with minimal procedures and competitive interest rates.", cta1: "Apply Now →", cta2: "💬 WhatsApp Us Now", trust1: "🔒 Secure & Safe", trust2: "⚡ 48hr Approval", trust3: "✅ No Hidden Charges", trust4: "🏛 RBI Compliant" },
    about: { 
      label: "About HelpLine Finance", 
      title: "Serving MSME India Since 2017", 
      p1: "Help Line Finance started in 2017 and is focused on meeting the financial needs of micro, small, and medium enterprises (MSME) in India. It is run by experts with rich experience in the financial services industry, aiming to make credit accessible and create a positive impact on the lives of millions of Indians.", 
      p2: "We are committed to providing sustainable financing solutions through our extensive network of private financiers, ensuring fairness and service quality in every transaction.", 
      f1t: "Minimal Procedures", f1d: "Fast disbursement, minimal paperwork", 
      f2t: "No Security", f2d: "Loans without any security requirement", 
      f3t: "Best Rates", f3d: "Captivating and competitive interest rates", 
      f4t: "Fast Processing", f4d: "Less processing time for quick credit", 
      vision: "To be recognized by fairness, a responsible approach, and service quality as the most admired company in the inclusive financing space by all stakeholders.",
      mission: "To make a difference and create a positive impact in the lives of millions of informal customers of micro, small, and medium enterprises in India through sustainable financing solutions.",
      values: "Empowerment: Providing finance to the underserved. Transparency: At all levels with all stakeholders. Fairness: Focus on alignment of long-term interests.",
      vTitle: "Vision", mTitle: "Mission", valTitle: "Values",
      foundation: "Our Foundation", vmv: "Vision, Mission & Values",
      office: "Registered Office", location: "Where We Are",
      btn: "Know More →", panelTitle: "Key Features", panelCta: "Get Free Consultation →" 
    },
    partner: {
      title: "Partner With HelpLine Finance",
      subtitle: "Join our Organiser / DSA network and earn attractive commissions.",
      label: "Become an Organiser",
      secTitle: "Grow Together",
      desc: "HelpLine Finance partners with DSAs (Direct Selling Agents) and Organisers across Tamil Nadu, Pondicherry, Karnataka, and Kerala. Earn commissions by referring clients who need financial solutions.",
      benefits: [
        { icon: '💰', title: 'Attractive Commissions', desc: 'Earn competitive referral commissions on every successful loan disbursement through your referrals.' },
        { icon: '🤝', title: 'Strong Support', desc: 'Full support from our team — from client application to final loan disbursement.' },
        { icon: '🌐', title: 'Wide Product Range', desc: 'Offer clients 8+ loan products covering all their financial needs — lending, recovery, and legal.' },
        { icon: '⚡', title: 'Fast Processing', desc: '48-hour loan processing keeps your clients happy and strengthens your referral business.' }
      ],
      formTitle: "Organiser Registration",
      form: { name: "Full Name", company: "Company Name", email: "Email Address", phone: "Contact Number", loc: "Location", namePH: "Your full name", compPH: "Your company / organisation", emailPH: "your@email.com", phonePH: "10-digit mobile", locPH: "City, State" },
      submit: "Register as Organiser →",
      success: "✓ Registration received! We'll contact you shortly."
    },
    docs: {
      title: "Bank-NBFC Document Checklist",
      subtitle: "Complete document requirements for salaried, self-employed, and property-backed loans.",
      tabs: { sal: "Salaried", self: "Self-Employed", prop: "Property" },
      sections: {
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
        ]
      },
      note: "Document requirements may vary based on lender, loan type, and individual circumstances. Our team will provide a specific checklist for your exact requirement.",
      cta: "Get Personalised Checklist →"
    },
    stats: { s1: "20,000+", l1: "Families Helped", s2: "8+", l2: "Years of Experience", s3: "85%", l3: "Private Financier Network", s4: "4", l4: "States Served" },
    services: {
      label: "What We Offer", title: "Our Financial Services", desc: "Comprehensive solutions for MSMEs, NRIs, and individuals seeking credit across South India.",
      items: [
        { icon: "🏠", title: "Private Finance", desc: "Unsecured & secured loans for MSME businesses. Min ₹9L to ₹10Cr.", tags: ["48hr Disbursement", "From ₹3/lakh/month*"], page: "pf" },
        { icon: "🏗️", title: "Project Loan Specialist", desc: "Structured financing for large-scale infrastructure projects.", tags: ["Custom Structuring"], page: "pl" },
        { icon: "✈️", title: "NRI Loans", desc: "Tailored loan solutions for Non-Resident Indians.", tags: ["From 8.40% p.a.*", "NRI Specialist"], page: "nri" },
        { icon: "📈", title: "Investment Loans", desc: "Capital financing for commercial property investments.", tags: ["Wealth Building"], page: "inv" },
        { icon: "📊", title: "Low CIBIL Score Loan", desc: "Specialised loans for individuals with low credit scores.", tags: ["CIBIL Issues? We Help"], page: "cibil" },
        { icon: "📋", title: "Cheque Basis Loan", desc: "Business loans on post-dated cheques.", tags: ["Current Account Req."], page: "cheq" },
        { icon: "⚖️", title: "Private Recovery Work", desc: "Professional assistance in recovering loans.", tags: ["Expert Team"], page: "rec" },
        { icon: "🏛️", title: "DRT Legal Services", desc: "Expert guidance through Debt Recovery Tribunal.", tags: ["Legal Advisory"], page: "drt" }
      ]
    },
    emi: { label: "Plan Your Loan", title: "EMI Calculator", desc: "Estimate your monthly repayment.", amount: "Loan Amount", rate: "Interest Rate (p.a.)", tenure: "Loan Tenure", disclaimer: "* Interest rates are indicative.", cta: "Get Exact Quote →", monthlyEmi: "Monthly EMI", perMonth: "per month", principal: "Principal Amount", totalInterest: "Total Interest", totalPayment: "Total Payment", note: "Rates are indicative. Contact us for exact figures." },
    testimonials: {
      label: "Customer Voices", title: "What Our Clients Say", badge: "Verified Client",
      items: [
        { name: "Loga Chandran", initial: "L", text: "Your helpline services completely solved all my financial needs and doubts." },
        { name: "Stephen Raj", initial: "S", text: "They made the whole process smooth and completely hassle-free." },
        { name: "Kanniyappan N", initial: "K", text: "I got a decision within a few minutes. Truly outstanding service." }
      ]
    },
    cta: { title: "CIBIL Issues? No Worries — We Can Help.", desc: "We specialise in finding financial solutions when traditional banks say no.", btn1: "Get Free Consultation →", btn2: "💬 WhatsApp Now" },
    contact: { label: "Reach Out", title: "Get in Touch", desc: "Fill the form and our team will call you within 2 business hours.", name: "Full Name", phone: "Phone Number", email: "Email Address", msg: "Message", namePH: "Your full name", phonePH: "10-digit mobile", emailPH: "your@email.com", loanType: "Loan Type", selectLoan: "Select loan type…", amountRange: "Amount Range", selectAmount: "Select range…", state: "State", selectState: "Select state…", notice: "By submitting, you consent to HelpLine Finance using your data. DPDP Act 2023 compliant.", submit: "Submit Enquiry →", office: "Contact Information", addr: "AKR Corniche Center No.30/11\nSecond Line Beach, George Town\nChennai – 600 001", hours: "Mon–Sat: 9:00 AM – 6:00 PM", waBtn: "💬 WhatsApp Us Now", toast: "✓ Enquiry submitted! We'll call you within 2 hours.", addrLbl: "Address", phoneLbl: "Phone", emailLbl: "Email", hoursLbl: "Hours", msgPH: "Any specific details about your requirement…", viewMap: "📍 View on Google Maps →", below10L: "Below ₹10L", above5Cr: "Above ₹5Cr" },
    chatbot: {
      welcome: "Hi! 👋 I'm your HelpLine assistant. Ask me about loans, interest rates, or documents.",
      suggestions: ["Private Finance", "Cheque Loan", "Low CIBIL", "NRI Loans", "Interest Rates", "Documents", "Contact Support"],
      placeholder: "Type your question...",
      replies: {
        private: "We provide Private Finance from ₹1Cr to ₹5Cr for businesses with 24-hour processing.",
        cheque: "Cheque Basis Loans start from ₹1Cr for businesses with min ₹10L monthly turnover.",
        cibil: "Yes, we support Low CIBIL cases based on business performance or property assets.",
        docs: "Basic docs: PAN, ID proof, 12-month bank statements, and business registration proof.",
        nri: "NRI Loans are available starting from 8.40% p.a.* for property investments in India.",
        rates: "Interest rates start from as low as ₹3/lakh/month* depending on loan type and profile.",
        contact: "You can call or WhatsApp us at +91 8098096666. We're here to help!",
        default: "I'm sorry, I didn't quite get that. Try asking about loan types, rates, or documents."
      }
    },
    nav_cat: { lending: "Lending", recovery: "Recovery & Legal", resources: "Resources" },
    footer: { tagline: "Trusted financial intermediary since 2017", quickLinks: "Quick Links", services2: "Services", contactInfo: "Contact", copy: "© 2017–2026 HelpLine Finance Private Limited. All Rights Reserved.", privacy: "Privacy Policy", terms: "Terms of Service" },
    common: { home: "Home", services: "Services", enquire: "Enquire Now →", wa: "💬 WhatsApp Us", note: "Note:", scroll: "Scroll", years: "Years", other: "Other", states: ["Tamil Nadu", "Pondicherry", "Karnataka", "Kerala"] },
    pf: {
      subtitle: "Unsecured and secured loans for MSME businesses with fast processing.",
      s1: "Without Security (Unsecured)",
      s1d: "Unsecured business loans for MSMEs based on business performance, bank turnover, and cash flow — no collateral required.",
      s2: "Against Property (Secured)",
      s2d: "Secured loans against residential or commercial property. Higher limits with competitive rates and extended repayment periods.",
      noteBody: "All interest rates are indicative and for reference only. Actual rates vary based on loan type, security provided, applicant's credit profile, and prevailing market conditions. Contact us for a personalised quote.",
      ctaTitle: "Private Finance Enquiry",
      ctaDesc: "Fast disbursement within 48 hours. Speak to our specialists today.",
      docTitle1: "Documents — Without Security",
      docs1: ['PAN Card', '2 Photographs', 'Voter ID / Passport / Driving License', 'Business Registration Certificate', '2 Visiting Cards', 'Company Profile / Brochure', 'Bank Statement (12 Months — All Accounts)', 'Last 3 Years IT Returns + Balance Sheet', 'Last 3 Years P&L Statements', 'OD/CC Sanction Letter (if existing)', 'GST Registration (if applicable)', 'Annual Turnover, Tax Paid, Net Profit details'],
      docTitle2: "Documents — Against Property",
      docs2: ['All documents from Without Security category', 'Original Title Deed / Sale Deed', 'Parent documents (chain of title)', 'Encumbrance Certificate — 30 years', 'Patta / Chitta (Tamil Nadu)', 'Approved Building Plan', 'Completion / Occupancy Certificate', 'Property Tax receipts (3 years)', 'Utility bills in property name', 'NOC from society (for apartments)'],
      rateLabel: "From ₹3/lakh/month (indicative)",
      procLabel: "48 Hour Processing",
      rangeLabel: "Min ₹9 Lakhs – Max ₹10 Crores",
      procLabel2: "Processing: 15 Working Days",
      rateLabel2: "Competitive Rates (indicative)",
      indicative: "(indicative)"
    },
    pl: {
      subtitle: "Structured financing for large-scale infrastructure and real estate projects.",
      t1: "Project Loan Financing",
      d1: "HelpLine Finance specialises in structuring large-ticket project financing for infrastructure, real estate development, and business expansion. We work with our private financier network to match your project with the right funding structure.",
      t2: "Eligible Projects",
      items2: ['Infrastructure development projects', 'Real estate construction & development', 'Large MSME expansion & modernisation', 'Commercial complex development', 'Industrial project financing', 'Business acquisition financing'],
      t3: "Key Features",
      features: [
        { h: 'Custom Structure', d: 'Tailored repayment schedules to match project cash flows' },
        { h: 'Large Ticket', d: 'High-value financing for significant capital requirements' },
        { h: 'Network Access', d: 'Connect with our curated private financier network' },
        { h: 'Expert Guidance', d: 'End-to-end project loan processing support' }
      ],
      ctaTitle: "Project Loan Enquiry",
      ctaDesc: "Contact us for a personalised consultation on your project financing needs."
    },
    nri: {
      subtitle: "Tailored loan solutions for Non-Resident Indians investing in India.",
      tabs: { docs: "NRI Documents", personal: "Personal", property: "Property", fees: "Fees", mod: "MOD" },
      t1: "NRI Documents Required",
      items1a: ['Valid Passport (NRI)', 'Visa / Resident Permit copy', 'Overseas address proof', 'PAN Card (Indian)', 'Power of Attorney (attested by Indian consulate/embassy)'],
      items1b: ['Last 6 months overseas bank statements', 'Salary slips / Employment contract', 'NRE / NRO account statements', 'Income Tax Returns (if filed in India)', '2 Photographs'],
      t2: "Personal Loan Details",
      d2: "NRI personal loans are available for Indian citizens residing abroad who need funds for personal requirements in India. Power of Attorney is accepted for loan processing.",
      items2: ['Available for Indian citizens abroad', 'Property purchase & construction eligible', 'Power of Attorney accepted', 'NRE/NRO accounts accepted for repayment', 'Co-applicant (Indian resident) may be required'],
      t3: "Property Documents",
      items3a: ['Original Title Deed / Sale Deed', 'Parent documents (chain of title)', 'Encumbrance Certificate — 30 years', 'Patta / Chitta (Tamil Nadu)'],
      items3b: ['Approved Building Plan', 'Completion / Occupancy Certificate', 'NOC from builder/society (if applicable)', 'Property Tax receipts (3 years)'],
      t4: "Fee Structure",
      items4: [
        { l: 'Legal Fees', v: '₹5,500' },
        { l: 'Processing Fee', v: '0.40% + GST' },
        { l: 'Stamp Duty (MOD)', v: '₹280' },
        { l: 'CERSAI Charges', v: '₹180' }
      ],
      rates: ["8.40% p.a. women (indicative)", "8.45% p.a. others (indicative)"],
      t5: "MOD (Memorandum of Deposit)",
      d5: "For NRI loans, a Memorandum of Deposit of Title Deed (MODT) creates a charge on the property in favour of the lending institution — a legal requirement for property-backed NRI loans.",
      items5: ['Original title deed deposited with lender', 'MOD stamp paper (₹280 — indicative)', 'CERSAI registration (₹180 — indicative)', 'Attestation by Indian consulate/embassy if executed abroad'],
      sideTitle: "NRI Loan Enquiry",
      sideDesc: "Reach out to our NRI loan specialists for a personalised consultation.",
      sideH: "NRI Loan Highlights",
      sideItems: ['Available for Indian citizens abroad', 'Property purchase & construction', 'From 8.40% p.a. (indicative)', 'Power of Attorney accepted']
    },
    inv: {
      subtitle: "Capital financing for investment opportunities and wealth creation.",
      t1: "Investment Loan Financing",
      d1: "HelpLine Finance helps clients access capital for investment purposes — commercial property, portfolio expansion, or business acquisition. Our team matches you with the best financiers in our extensive network.",
      t2: "Eligible Uses",
      items2: ['Commercial property investment', 'Land purchase for development', 'Business acquisition financing', 'Investment portfolio expansion', 'Capital equipment investment'],
      ctaTitle: "Investment Loan Enquiry",
      ctaDesc: "Contact us for details tailored to your investment plan."
    },
    cibil: {
      subtitle: "CIBIL issues? No worries — we find solutions when banks say no.",
      t1: "Understanding CIBIL Scores",
      d1: "Your CIBIL score (300–900) represents your creditworthiness. Most banks require 700+ for standard approvals — but our private financier network looks beyond just the score.",
      excellent: "Excellent", good: "Good", fair: "Fair", poor: "Poor", below: "Below 550",
      t2: "How We Help",
      d2: "HelpLine Finance works with private financiers who assess loans based on actual business performance, property assets, and cash flows — not just CIBIL score alone.",
      items2: ['Assessment based on business performance, not just credit score', 'Property-backed loan options available', 'Flexible documentation requirements', 'Quick assessment and same-day response'],
      ctaTitle: "CIBIL Issues? Talk to Us",
      ctaDesc: "Don't let your credit score stop you. Our specialists find solutions."
    },
    cheq: {
      subtitle: "Business loans sanctioned on the basis of post-dated cheques.",
      t1: "About Cheque Basis Loans",
      d1: "A Cheque Basis Loan is a short-term business financing product where the loan is sanctioned and secured on post-dated cheques — ideal for businesses with consistent cash flows but limited traditional collateral.",
      t2: "Eligibility Requirements",
      items2: ['Minimum ₹10 Lakhs monthly business turnover', 'Current Account with a scheduled bank (mandatory)', 'Minimum 1 year of business operation', 'Clean cheque history (no dishonoured cheques)'],
      t3: "Documents Required",
      items3: ['Current Account bank statements (12 months)', 'Business registration documents', 'GST returns (if applicable)', 'Company profile and visiting cards', 'PAN Card and identity proof', 'Post-dated cheques as per schedule'],
      ctaTitle: "Cheque Basis Loan Enquiry",
      ctaDesc: "Quick processing for businesses with consistent turnover."
    },
    rec: {
      subtitle: "Professional assistance in recovering loans and resolving financial disputes.",
      t1: "Our Recovery Services",
      d1: "HelpLine Finance provides expert assistance in private financial recovery — from fraud recovery to property rescue — handled with complete professionalism and discretion.",
      cases: [
        { title: 'Private Fraud Recovery', desc: 'Recovery of funds from fraudulent transactions, breach of contract, or unauthorised financial dealings through legal and professional channels.' },
        { title: 'Property Rescue (Bridge Loan)', desc: 'Short-term bridge financing to rescue stressed properties from foreclosure or auction, buying time for restructuring.' },
        { title: 'Private Property Takeover', desc: 'Facilitation of legal property takeover processes for lenders with defaulted borrowers, handled with complete discretion.' }
      ],
      ctaTitle: "Recovery Consultation",
      ctaDesc: "Confidential. Professional. Effective. Speak to our recovery specialists."
    },
    drt: {
      subtitle: "Expert guidance through Debt Recovery Tribunal proceedings and NPA management.",
      t1: "About DRT Legal Services",
      d1: "HelpLine Finance provides expert guidance through the complex world of Debt Recovery Tribunal proceedings, NPA management, SARFAESI actions, and bank auction navigation.",
      t2: "Service Areas",
      items2: [
        { title: 'Pre-NPA Stage', body: 'Early intervention before an account becomes Non-Performing Asset. We help borrowers and lenders restructure debt, negotiate settlements, and explore OTS (One-Time Settlement) options.' },
        { title: 'Post-NPA Stage', body: 'After classification as NPA, we guide clients through SARFAESI Act proceedings, assist with asset reconstruction, and negotiate with ARCs (Asset Reconstruction Companies).' },
        { title: 'NPA Legal Process', body: 'Filing and defending cases under SARFAESI Act 2002, DRT Act 1993. We navigate the complex legal processes including filing of Original Applications (OA) and Recovery Certificates (RC).' },
        { title: 'DRT / DRAT Proceedings', body: 'Representation guidance for Debt Recovery Tribunal (DRT) and Debt Recovery Appellate Tribunal (DRAT) proceedings. Understanding your rights and legal options at each stage.' },
        { title: 'Auction Guidance', body: 'Expert guidance through bank e-auction processes. Understanding auction notices, E-DRT procedures, bid requirements, and post-auction transfer processes under SARFAESI Act.' }
      ],
      legalTitle: "Legal Disclaimer:",
      legalDesc: "The information provided is for general guidance only and does not constitute legal advice. For specific legal matters, please consult a qualified advocate.",
      ctaTitle: "DRT Legal Consultation",
      ctaDesc: "Navigate complex legal proceedings with expert financial guidance."
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        ['Is HelpLine Finance a bank or NBFC?', 'No. HelpLine Finance Private Limited is a financial intermediary / loan broker. We connect borrowers with suitable lenders and are not a direct lender.'],
        ['How quickly can I get a loan?', 'For standard unsecured private finance, we typically process within 48 working hours once documents are complete. Property-backed loans may take up to 15 working days.'],
        ['What is the minimum loan amount?', 'For Private Finance (unsecured), the minimum is generally ₹9 Lakhs. For other products, contact us for product-specific minimums.'],
        ['Do you work with low CIBIL scores?', 'Yes. We support low CIBIL cases through our lender network based on business and asset profile, not only credit score.'],
        ['Is my data safe with HelpLine Finance?', 'Yes. We follow DPDP Act 2023 principles. Data is used only for enquiry processing and not sold to third parties.']
      ]
    },
    privacy: {
      title: "Privacy Policy",
      sub: "How we collect, use, and protect your personal information.",
      updated: "Last updated: January 2025.",
      items: [
        ['What Data We Collect', 'We collect name, phone number, email address, loan type preference, and loan amount range when you submit an enquiry through our website.'],
        ['How We Use Your Data', 'Your data is used solely to process your loan enquiry — to contact you and match you with appropriate financiers.'],
        ['DPDP Act 2023 Compliance', 'HelpLine Finance Private Limited complies with the Digital Personal Data Protection (DPDP) Act 2023.'],
        ['Data Sharing', 'We share your information with our network of financial institutions solely for processing your loan enquiry.'],
        ['Data Retention', 'We retain your data for as long as necessary to process your enquiry and comply with legal obligations.'],
        ['Cookies & Analytics', 'Our website uses no third-party advertising cookies.'],
        ['Contact', 'For any privacy-related concerns, please contact: helplineprivatefinance@gmail.com']
      ]
    },
    terms: {
      title: "Terms of Service",
      sub: "Terms and conditions for using HelpLine Finance services.",
      updated: "Last updated: January 2025.",
      items: [
        ['Nature of Service', 'HelpLine Finance Private Limited is a financial intermediary and loan broker. We are NOT a bank, NBFC, or direct lender.'],
        ['No Guarantee of Approval', 'Submitting a lead form on our website does not constitute a loan application or guarantee of approval.'],
        ['Indicative Rates', 'All interest rates and fees mentioned on this website are indicative and for reference purposes only.'],
        ['Jurisdiction', 'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Chennai.'],
        ['Amendments', 'HelpLine Finance reserves the right to modify these terms at any time.'],
        ['Contact', 'For queries regarding these terms: helplineprivatefinance@gmail.com']
      ]
    }
  },
  ta: {
    name: "தமிழ்", flag: "🇮🇳",
    nav: { home: "முகப்பு", services: "சேவைகள்", about: "எங்களைப் பற்றி", documents: "ஆவணங்கள்", partner: "பங்காளியாகுங்கள்", contact: "தொடர்பு", apply: "விண்ணப்பி", whatsapp: "WhatsApp", language: "மொழி" },
    hero: { eyebrow: "2017 முதல் நம்பகமான", h1_1: "உங்கள் கனவு.", h1_2: "எங்கள் நிதி.", desc: "HelpLine Finance தமிழ்நாடு, புதுச்சேரி, கர்நாடகா மற்றும் கேரளாவில் உள்ள MSME நிறுவனங்களுக்கு கடன் வழங்குகிறது.", cta1: "இப்போது விண்ணப்பி →", cta2: "💬 WhatsApp செய்யுங்கள்", trust1: "🔒 பாதுகாப்பானது", trust2: "⚡ 48 மணி நேரத்தில்", trust3: "✅ மறைக்கப்பட்ட கட்டணம் இல்லை", trust4: "🏛 RBI இணக்கமான" },
    about: { 
      label: "எங்களைப் பற்றி", 
      title: "2017 முதல் MSME இந்தியாவிற்கு சேவை", 
      p1: "ஹெல்ப் லைன் ஃபைனான்ஸ் 2017 இல் தொடங்கப்பட்டது மற்றும் இந்தியாவின் குறு, சிறு மற்றும் நடுத்தர நிறுவனங்களின் (MSME) நிதித் தேவைகளைப் பூர்த்தி செய்வதில் கவனம் செலுத்துகிறது.", 
      p2: "நிதிச் சேவைத் துறையில் சிறந்த அனுபவம் வாய்ந்த நிபுணர்களால் நடத்தப்படும் நாங்கள், கடனை அணுகக்கூடியதாக மாற்றுவதையும் மில்லியன் கணக்கான இந்தியர்களின் வாழ்க்கையில் நேர்மறையான தாக்கத்தை ஏற்படுத்துவதையும் நோக்கமாகக் கொண்டுள்ளோம்.", 
      f1t: "குறைந்த நடைமுறைகள்", f1d: "விரைவான விநியோகம், குறைந்த ஆவணங்கள்", 
      f2t: "பிணையம் தேவையில்லை", f2d: "எந்த பாதுகாப்பும் இல்லாமல் கடன்கள்", 
      f3t: "சிறந்த வட்டி", f3d: "கவர்ச்சிகரமான மற்றும் போட்டி வட்டி விகிதங்கள்", 
      f4t: "விரைவான செயலாக்கம்", f4d: "குறுகிய நேரத்தில் கடன் வசதி", 
      vision: "அனைத்து பங்குதாரர்களாலும் உள்ளடக்கிய நிதித் துறையில் மிகவும் போற்றப்படும் நிறுவனமாக நேர்மை, பொறுப்பான அணுகுமுறை மற்றும் சேவைத் தரம் ஆகியவற்றால் அங்கீகரிக்கப்பட வேண்டும்.",
      mission: "நிலையான நிதித் தீர்வுகள் மூலம் இந்தியாவின் குறு, சிறு மற்றும் நடுத்தர நிறுவனங்களின் மில்லியன் கணக்கான முறைசாரா வாடிக்கையாளர்களின் வாழ்க்கையில் மாற்றத்தை ஏற்படுத்தவும் நேர்மறையான தாக்கத்தை உருவாக்கவும் பாடுபடுகிறோம்.",
      values: "அதிகாரம் அளித்தல்: பின்தங்கியவர்களுக்கு நிதி வழங்குதல். வெளிப்படைத்தன்மை: அனைத்து நிலைகளிலும் வெளிப்படைத்தன்மை. நேர்மை: நீண்ட கால நலன்களில் கவனம் செலுத்துதல்.",
      foundation: "எங்கள் அடித்தளம்", vmv: "தொலைநோக்கு, பணி & மதிப்புகள்",
      office: "பதிவு செய்யப்பட்ட அலுவலகம்", location: "நாங்கள் எங்கே இருக்கிறோம்",
      btn: "மேலும் அறிய →", panelTitle: "முக்கிய அம்சங்கள்", panelCta: "இலவச ஆலோசனை பெறுங்கள் →" 
    },
    partner: {
      title: "HelpLine Finance உடன் இணையுங்கள்",
      subtitle: "எங்கள் அமைப்பாளர் / DSA நெட்வொர்க்கில் சேர்ந்து கவர்ச்சிகரமான கமிஷன்களைப் பெறுங்கள்.",
      label: "அமைப்பாளராகுங்கள்",
      secTitle: "ஒன்றாக வளர்வோம்",
      desc: "HelpLine Finance தமிழ்நாடு, புதுச்சேரி, கர்நாடகா மற்றும் கேரளாவில் உள்ள DSAக்கள் மற்றும் அமைப்பாளர்களுடன் கூட்டாளியாக உள்ளது.",
      benefits: [
        { icon: '💰', title: 'கவர்ச்சிகரமான கமிஷன்கள்', desc: 'ஒவ்வொரு வெற்றிகரமான கடன் விநியோகத்திற்கும் போட்டி கமிஷன்களைப் பெறுங்கள்.' },
        { icon: '🤝', title: 'வலுவான ஆதரவு', desc: 'எங்கள் குழுவிடமிருந்து முழு ஆதரவு — விண்ணப்பம் முதல் விநியோகம் வரை.' },
        { icon: '🌐', title: 'பரந்த தயாரிப்பு வரம்பு', desc: 'வாடிக்கையாளர்களுக்கு 8+ கடன் தயாரிப்புகளை வழங்குங்கள்.' },
        { icon: '⚡', title: 'விரைவான செயலாக்கம்', desc: '48 மணிநேர கடன் செயலாக்கம் உங்கள் வாடிக்கையாளர்களை மகிழ்ச்சியாக வைத்திருக்கும்.' }
      ],
      formTitle: "அமைப்பாளர் பதிவு",
      form: { name: "முழுப்பெயர்", company: "நிறுவன பெயர்", email: "மின்னஞ்சல் முகவரி", phone: "தொடர்பு எண்", loc: "இருப்பிடம்", namePH: "உங்கள் முழுப்பெயர்", compPH: "உங்கள் நிறுவனம் / அமைப்பு", emailPH: "your@email.com", phonePH: "10 இலக்க மொபைல்", locPH: "நகர், மாநிலம்" },
      submit: "அமைப்பாளராக பதிவு செய்யுங்கள் →",
      success: "✓ பதிவு பெறப்பட்டது! நாங்கள் விரைவில் உங்களைத் தொடர்புகொள்வோம்."
    },
    docs: {
      title: "ஆவண சரிபார்ப்பு பட்டியல்",
      subtitle: "பல்வேறு கடன் பிரிவுகள் மற்றும் விண்ணப்பதாரர் விவரங்களுக்கான தேவையான ஆவணங்களை மதிப்பாய்வு செய்யவும்.",
      tabs: { sal: "சம்பளம் பெறுபவர்", self: "சுய தொழில்", prop: "சொத்து ஆவணங்கள்" },
      sections: {
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
        ]
      },
      note: "இறுதி கட்டத்தில் சரிபார்ப்புக்கு அசல் ஆவணங்கள் தேவைப்படலாம். குறிப்பிட்ட வழக்குத் தேவைகளின் அடிப்படையில் கூடுதல் ஆவணங்கள் கோரப்படலாம்.",
      cta: "ஆவணங்கள் குறித்து விசாரிக்கவும்"
    },
    stats: { s1: "20,000+", l1: "குடும்பங்கள் உதவியது", s2: "8+", l2: "ஆண்டுகள் அனுபவம்", s3: "85%", l3: "தனியார் நிதியாளர் நெட்வொர்க்", s4: "4", l4: "மாநிலங்கள் சேவை" },
    services: {
      label: "நாங்கள் வழங்குவது", title: "எங்கள் நிதி சேவைகள்", desc: "தென்னிந்தியாவில் MSME, NRI மற்றும் தனியார்களுக்கான விரிவான தீர்வுகள்.",
      items: [
        { icon: "🏠", title: "தனியார் நிதி", desc: "MSME வணிகங்களுக்கு கடன்கள்.", tags: ["48 மணி நேரம்"], page: "pf" },
        { icon: "🏗️", title: "திட்ட கடன்", desc: "பெரிய அளவிலான திட்டங்களுக்கான நிதி.", tags: ["தனிப்பயன் கட்டமைப்பு"], page: "pl" },
        { icon: "✈️", title: "NRI கடன்கள்", desc: "இந்தியாவில் முதலீடு செய்யும் NRI களுக்கான கடன்கள்.", tags: ["NRI நிபுணர்"], page: "nri" },
        { icon: "📈", title: "முதலீட்டு கடன்கள்", desc: "வணிக சொத்து முதலீட்டிற்கான நிதி.", tags: ["செல்வம் உருவாக்கம்"], page: "inv" },
        { icon: "📊", title: "குறைந்த CIBIL கடன்", desc: "குறைந்த கடன் மதிப்பெண் உள்ளவர்களுக்கான கடன்கள்.", tags: ["CIBIL பிரச்சனையா?"], page: "cibil" },
        { icon: "📋", title: "காசோலை அடிப்படை கடன்", desc: "பட்டுவாடா காசோலைகளின் அடிப்படையில் வணிக கடன்கள்.", tags: ["நடப்பு கணக்கு"], page: "cheq" },
        { icon: "⚖️", title: "தனியார் மீட்பு", desc: "கடன் மீட்பில் தொழில்முறை உதவி.", tags: ["நிபுணர் குழு"], page: "rec" },
        { icon: "🏛️", title: "DRT சட்ட சேவைகள்", desc: "கடன் மீட்பு நீதிமன்ற நடவடிக்கைகளில் வழிகாட்டுதல்.", tags: ["சட்ட ஆலோசனை"], page: "drt" }
      ]
    },
    emi: { label: "கடன் திட்டமிடுங்கள்", title: "EMI கால்குலேட்டர்", desc: "உங்கள் மாதாந்திர திரும்பச் செலுத்தலை மதிப்பிடுங்கள்.", amount: "கடன் தொகை", rate: "வட்டி விகிதம்", tenure: "கடன் காலம்", disclaimer: "வட்டி விகிதங்கள் சுட்டிக்காட்டும் நோக்கத்திற்காக மட்டுமே.", cta: "சரியான மேற்கோளை பெறுங்கள் →", monthlyEmi: "மாதாந்திர EMI", perMonth: "மாதத்திற்கு", principal: "அசல் தொகை", totalInterest: "மொத்த வட்டி", totalPayment: "மொத்த கட்டணம்", note: "விகிதங்கள் சுட்டிக்காட்டும் நோக்கத்திற்காக மட்டுமே." },
    testimonials: {
      label: "வாடிக்கையாளர் குரல்கள்", title: "எங்கள் வாடிக்கையாளர்கள் சொல்வது", badge: "சரிபார்க்கப்பட்ட வாடிக்கையாளர்",
      items: [
        { name: "லோகா சந்திரன்", initial: "ல", text: "உங்கள் helpline சேவைகள் என்னுடைய அனைத்து நிதி தேவைகளையும் தீர்த்தது." },
        { name: "ஸ்டீபன் ராஜ்", initial: "ஸ்", text: "முழு செயல்முறையும் மென்மையாகவும் தொந்தரவு இல்லாமலும் இருந்தது." },
        { name: "கண்ணியப்பன் N", initial: "க", text: "சில நிமிடங்களில் முடிவு வந்தது. உண்மையிலேயே சிறந்த சேவை." }
      ]
    },
    cta: { title: "CIBIL பிரச்சனையா? கவலை வேண்டாம் — நாங்கள் உதவுவோம்.", desc: "வங்கிகள் மறுக்கும்போது நிதி தீர்வுகளை கண்டறிவதில் நாங்கள் நிபுணர்கள்.", btn1: "இலவச ஆலோசனை பெறுங்கள் →", btn2: "💬 WhatsApp இப்போதே" },
    contact: { label: "தொடர்பு கொள்ளுங்கள்", title: "தொடர்பு கொள்ளுங்கள்", desc: "படிவத்தை நிரப்புங்கள், எங்கள் குழு 2 மணி நேரத்தில் அழைக்கும்.", name: "முழுப்பெயர்", phone: "தொலைபேசி எண்", email: "மின்னஞ்சல் முகவரி", msg: "செய்தி", namePH: "உங்கள் முழு பெயர்", phonePH: "10 இலக்க மொபைல்", emailPH: "your@email.com", loanType: "கடன் வகை", selectLoan: "கடன் வகையை தேர்ந்தெடுக்கவும்…", amountRange: "கடன் தொகை வரம்பு", selectAmount: "வரம்பை தேர்ந்தெடுக்கவும்…", state: "மாநிலம்", selectState: "மாநிலம் தேர்ந்தெடுக்கவும்…", notice: "உங்கள் தரவை பயன்படுத்த ஒப்புக்கொள்கிறீர்கள்.", submit: "விசாரணை சமர்ப்பி →", office: "தொடர்பு தகவல்", addr: "AKR Corniche Center No.30/11\nSecond Line Beach, George Town\nசென்னை – 600 001", hours: "திங்கள்–சனி: காலை 9:00 – மாலை 6:00", waBtn: "💬 WhatsApp செய்யுங்கள்", toast: "✓ விசாரணை சமர்ப்பிக்கப்பட்டது!", addrLbl: "முகவரி", phoneLbl: "தொலைபேசி", emailLbl: "மின்னஞ்சல்", hoursLbl: "நேரம்", msgPH: "உங்கள் தேவையைப் பற்றி கூடுதல் தகவல்…", viewMap: "📍 Google Maps-ல் பார்க்க →", below10L: "₹10L க்குக் கீழ்", above5Cr: "₹5Cr மேல்" },
    chatbot: {
      welcome: "வணக்கம்! 👋 நான் ஹெல்ப்லைன் உதவியாளர். கடன், வட்டி அல்லது ஆவணங்கள் குறித்து கேளுங்கள்.",
      suggestions: ["தனியார் நிதி", "காசோலை கடன்", "குறைந்த CIBIL", "NRI கடன்கள்", "வட்டி விகிதம்", "ஆவணங்கள்", "தொடர்பு"],
      placeholder: "கேள்வியைத் தட்டச்சு செய்க...",
      replies: {
        private: "நாங்கள் ₹1 கோடி முதல் ₹5 கோடி வரை வணிகங்களுக்கு வழங்குகிறோம். 24 மணி நேர செயலாக்கம்!",
        cheque: "₹10 லட்சம் விற்றுமுதல் உள்ளவர்களுக்கு ₹1 கோடி முதல் காசோலை அடிப்படையில் கடன் வழங்கப்படுகிறது.",
        cibil: "ஆம், குறைந்த CIBIL இருந்தாலும் சொத்து அல்லது வணிக வருவாய் அடிப்படையில் நாங்கள் கடன் வழங்குகிறோம்.",
        docs: "தேவையானவை: PAN, ID சான்று, வங்கி அறிக்கை (12 மாதங்கள்) மற்றும் வணிக பதிவு சான்று.",
        nri: "NRI-களுக்கு 8.40% முதல்* வட்டி விகிதத்தில் சொத்து சார்ந்த கடன்கள் வழங்கப்படுகின்றன.",
        rates: "வட்டி விகிதங்கள் கடனின் வகையைப் பொறுத்தது. லட்சத்திற்கு ₹3/மாதம்* முதல் தொடங்குகிறது.",
        contact: "எங்களை +91 8098096666 என்ற எண்ணில் அழைக்கலாம் அல்லது WhatsApp செய்யலாம்.",
        default: "மன்னிக்கவும், புரியவில்லை. கடன் வகைகள், வட்டி அல்லது ஆவணங்கள் குறித்து கேளுங்கள்."
      }
    },
    nav_cat: { lending: "கடன் சேவைகள்", recovery: "மீட்பு மற்றும் சட்டம்", resources: "ஆதாரங்கள்" },
    loanItems: ["தனியார் நிதி", "திட்ட கடன்", "NRI கடன்", "முதலீட்டு கடன்", "குறைந்த CIBIL கடன்", "காசோலை அடிப்படை கடன்", "தனியார் மீட்பு", "DRT சட்ட சேவை", "மற்றவை"],
    footer: { tagline: "2017 முதல் நம்பகமான நிதி மத்தியஸ்தர்", quickLinks: "விரைவு இணைப்புகள்", services2: "சேவைகள்", contactInfo: "தொடர்பு", copy: "© 2017–2026 HelpLine Finance. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.", privacy: "தனியுரிமை கொள்கை", terms: "சேவை விதிமுறைகள்" },
    common: { home: "முகப்பு", services: "சேவைகள்", enquire: "இப்போது கேளுங்கள் →", wa: "💬 WhatsApp", note: "குறிப்பு:", scroll: "ஸ்க்ரோல்", years: "ஆண்டுகள்", other: "மற்றவை", states: ["தமிழ்நாடு", "புதுச்சேரி", "கர்நாடகா", "கேரளா"] },
    pf: {
      subtitle: "MSME வணிகங்களுக்கு பாதுகாப்பில்லா மற்றும் பாதுகாப்பு கடன்கள்.",
      s1: "பிணையமின்றி (Unsecured)",
      s1d: "வணிக செயல்திறன் மற்றும் cash flow அடிப்படையில் பிணையமின்றி கடன்.",
      s2: "சொத்து அடமானம் (Secured)",
      s2d: "வீடு/வணிக சொத்து அடிப்படையில் அதிக கடன் வரம்பு.",
      noteBody: "வட்டி விகிதங்கள் சுட்டிக்காட்டும் நோக்கத்திற்காக மட்டுமே. உண்மையான விகிதங்கள் விண்ணப்பதாரர் சுயவிவரத்தைப் பொறுத்து மாறும்.",
      ctaTitle: "தனியார் நிதி விசாரணை",
      ctaDesc: "48 மணி நேரத்தில் விரைவு செயலாக்கம். நிபுணர்களை தொடர்பு கொள்ளுங்கள்.",
      docTitle1: "ஆவணங்கள் — பிணையமின்றி",
      docs1: ['PAN அட்டை', '2 புகைப்படங்கள்', 'வாக்காளர் அட்டை / பாஸ்போர்ட் / ஓட்டுநர் உரிமம்', 'வணிக பதிவு சான்று', '2 விசிட்டிங் கார்டுகள்', 'நிறுவன விவரம்', 'வங்கி அறிக்கை (12 மாதங்கள்)', 'கடைசி 3 ஆண்டுகள் IT Returns + Balance Sheet', 'கடைசி 3 ஆண்டுகள் P&L அறிக்கைகள்', 'OD/CC ஒப்புதல் கடிதம்', 'GST பதிவு', 'வருவாய் மற்றும் வரி விவரங்கள்'],
      docTitle2: "ஆவணங்கள் — சொத்து அடமானம்",
      docs2: ['மேலே உள்ள அனைத்து ஆவணங்கள்', 'அசல் விற்பனை பத்திரம்', 'தாய் ஆவணங்கள்', 'வில்லங்க சான்று (30 ஆண்டுகள்)', 'பட்டா / சிட்டா', 'அங்கீகரிக்கப்பட்ட வரைபடம்', 'Completion Certificate', 'சொத்து வரி ரசீது (3 ஆண்டுகள்)', 'மின்சார பில்', 'NOC (தேவையெனில்)'],
      rateLabel: "லட்சத்திற்கு ₹3/மாதம்* முதல் (தோராயமாக)",
      procLabel: "48 மணி நேரத்தில் விநியோகம்",
      rangeLabel: "குறைந்தபட்சம் ₹9 லட்சம் – ₹10 கோடி வரை",
      procLabel2: "செயலாக்க நேரம்: 15 வேலை நாட்கள்",
      rateLabel2: "போட்டி வட்டி விகிதங்கள் (தோராயமாக)",
      indicative: "(தோராயமாக)"
    },
    pl: {
      subtitle: "பெரிய திட்டங்கள் மற்றும் கட்டுமானங்களுக்கு அமைப்பு நிதி.",
      t1: "திட்ட கடன் நிதியமைப்பு",
      d1: "அமைப்பு திட்ட நிதியில் நாங்கள் நிபுணத்துவம் பெற்றவர்கள். உள்கட்டமைப்பு மற்றும் ரியல் எஸ்டேட் திட்டங்களுக்கு நிதி வசதி செய்து தருகிறோம்.",
      t2: "தகுதியான திட்டங்கள்",
      items2: ['உள்கட்டமைப்பு திட்டங்கள்', 'ரியல் எஸ்டேட் கட்டுமானம்', 'பெரிய MSME விரிவாக்கம்', 'வணிக வளாக மேம்பாடு', 'தொழில்துறை நிதியமைப்பு', 'வணிக கையகப்படுத்தல் நிதி'],
      t3: "முக்கிய அம்சங்கள்",
      features: [
        { h: 'தனிப்பயன் கட்டமைப்பு', d: 'திட்டத்தின் பணப்புழக்கத்திற்கு ஏற்ப திருப்பிச் செலுத்தும் முறை' },
        { h: 'பெரிய தொகை', d: 'பெரிய மூலதனத் தேவைகளுக்கான நிதி' },
        { h: 'நெட்வொர்க் வசதி', d: 'எங்கள் தனியார் நிதியாளர் நெட்வொர்க்குடன் இணைப்பு' },
        { h: 'நிபுணர் வழிகாட்டல்', d: 'முழுமையான திட்ட கடன் செயலாக்க ஆதரவு' }
      ],
      ctaTitle: "திட்ட கடன் விசாரணை",
      ctaDesc: "உங்கள் திட்ட நிதியுதவி குறித்து தனிப்பயன் ஆலோசனை பெற எங்களை அணுகவும்."
    },
    nri: {
      subtitle: "இந்தியாவில் முதலீடு செய்யும் NRI களுக்கான தனிப்பயன் கடன் தீர்வுகள்.",
      tabs: { docs: "NRI ஆவணங்கள்", personal: "தனிப்பட்ட", property: "சொத்து", fees: "கட்டணம்", mod: "MOD" },
      t1: "NRI தேவையான ஆவணங்கள்",
      items1a: ['செல்லுபடியாகும் பாஸ்போர்ட்', 'விசா / குடியிருப்பு அனுமதி நகல்', 'வெளிநாட்டு முகவரி சான்று', 'PAN அட்டை (இந்தியா)', 'Power of Attorney'],
      items1b: ['கடைசி 6 மாத வெளிநாட்டு வங்கி அறிக்கைகள்', 'சம்பள சீட்டு / ஒப்பந்தம்', 'NRE / NRO வங்கி அறிக்கைகள்', 'IT Returns (இந்தியாவில் தாக்கல் செய்திருந்தால்)', '2 புகைப்படங்கள்'],
      t2: "தனிப்பட்ட கடன் விவரங்கள்",
      d2: "வெளிநாட்டில் வசிக்கும் இந்திய குடிமக்களுக்கு இந்தியாவில் தனிப்பட்ட தேவைகளுக்காக கடன்கள் கிடைக்கின்றன.",
      items2: ['வெளிநாட்டில் உள்ள இந்திய குடிமக்களுக்கு', 'சொத்து வாங்குதல் மற்றும் கட்டுமானத்திற்கு', 'Power of Attorney ஏற்றுக்கொள்ளப்படும்', 'NRE/NRO கணக்குகள் மூலம் திருப்பிச் செலுத்தலாம்', 'உடன் விண்ணப்பதாரர் தேவைப்படலாம்'],
      t3: "சொத்து ஆவணங்கள்",
      items3a: ['அசல் விற்பனை பத்திரம்', 'தாய் ஆவணங்கள்', 'வில்லங்க சான்று (30 ஆண்டுகள்)', 'பட்டா / சிட்டா'],
      items3b: ['அங்கீகரிக்கப்பட்ட கட்டிட வரைபடம்', 'Completion / Occupancy Certificate', 'NOC (தேவையெனில்)', 'சொத்து வரி ரசீது (3 ஆண்டுகள்)'],
      t4: "கட்டண அமைப்பு",
      items4: [
        { l: 'சட்ட கட்டணம்', v: '₹5,500' },
        { l: 'செயலாக்க கட்டணம்', v: '0.40% + GST' },
        { l: 'முத்திரை வரி (MOD)', v: '₹280' },
        { l: 'CERSAI கட்டணம்', v: '₹180' }
      ],
      rates: ["பெண்களுக்கு: 8.40% (சுட்டிக்காட்டுதல்)", "மற்றவர்களுக்கு: 8.45% (சுட்டிக்காட்டுதல்)"],
      t5: "MOD (Memorandum of Deposit)",
      d5: "NRI கடன்களுக்கு, சொத்து மீதான உரிமையை நிதிய நிறுவனத்திற்கு வழங்கும் சட்டப்பூர்வ தேவை MOD ஆகும்.",
      items5: ['அசல் பத்திரம் கடனளிப்பவரிடம் ஒப்படைக்கப்படும்', 'MOD முத்திரை தாள் (₹280)', 'CERSAI பதிவு (₹180)', 'வெளிநாட்டில் செயல்படுத்தப்பட்டால் தூதரக சான்று'],
      sideTitle: "NRI கடன் விசாரணை",
      sideDesc: "தனிப்பயன் ஆலோசனைக்கு எங்கள் NRI கடன் நிபுணர்களை அணுகவும்.",
      sideH: "NRI கடன் சிறப்பம்சங்கள்",
      sideItems: ['வெளிநாட்டில் உள்ள இந்தியர்களுக்கு', 'சொத்து வாங்குதல் மற்றும் கட்டுமானம்', '8.40% முதல் (சுட்டிக்காட்டுதல்)', 'Power of Attorney ஏற்றுக்கொள்ளப்படும்']
    },
    inv: {
      subtitle: "முதலீட்டு வாய்ப்புகள் மற்றும் செல்வம் உருவாக்கத்திற்கான மூலதன நிதி.",
      t1: "முதலீட்டு கடன் நிதியமைப்பு",
      d1: "வணிக சொத்து, போர்ட்ஃபோலியோ விரிவாக்கம் அல்லது வணிக கையகப்படுத்தல் ஆகியவற்றிற்கான மூலதனத்தை அணுக உதவுகிறோம்.",
      t2: "தகுதியான பயன்பாடுகள்",
      items2: ['வணிக சொத்து முதலீடு', 'மேம்பாட்டிற்கான நிலம் வாங்குதல்', 'வணிக கையகப்படுத்தல் நிதி', 'முதலீட்டு விரிவாக்கம்', 'மூலதன உபகரண முதலீடு'],
      ctaTitle: "முதலீட்டு கடன் விசாரணை",
      ctaDesc: "உங்கள் முதலீட்டு திட்டத்திற்கு ஏற்ப விவரங்களுக்கு எங்களை அணுகவும்."
    },
    cibil: {
      subtitle: "CIBIL பிரச்சனையா? கவலை வேண்டாம் — வங்கிகள் மறுக்கும் போது நாங்கள் தீர்வு தருகிறோம்.",
      t1: "CIBIL மதிப்பெண் புரிதல்",
      d1: "உங்கள் CIBIL மதிப்பெண் (300–900) உங்கள் கடன் தகுதியை காட்டும். எங்கள் நெட்வொர்க் score-ஐ மட்டும் பார்க்காது.",
      excellent: "மிகச் சிறந்தது", good: "நன்று", fair: "சராசரி", poor: "குறைவு", below: "550 க்குக் கீழ்",
      t2: "எப்படி உதவுகிறோம்",
      d2: "வணிக வருவாய், சொத்து, cash flow அடிப்படையில் விருப்பங்கள் வழங்குகிறோம்.",
      items2: ['வணிக செயல்திறன் அடிப்படையில் மதிப்பீடு', 'சொத்து அடிப்படையிலான கடன் வாய்ப்புகள்', 'நெகிழ்வான ஆவணத் தேவைகள்', 'விரைவான மதிப்பீடு மற்றும் பதில்'],
      ctaTitle: "CIBIL பிரச்சனை? எங்களை தொடர்பு கொள்ளுங்கள்",
      ctaDesc: "உங்கள் credit score காரணமாக நிற்க வேண்டாம். நிபுணர்கள் உதவுவார்கள்."
    },
    cheq: {
      subtitle: "பட்டுவாடா காசோலைகளின் அடிப்படையில் வழங்கப்படும் வணிக கடன்கள்.",
      t1: "காசோலை அடிப்படை கடன் பற்றி",
      d1: "நிலையான பணப்புழக்கம் உள்ள வணிகங்களுக்கு பிணையமின்றி காசோலை அடிப்படையில் வழங்கப்படும் குறுகிய கால கடன்.",
      t2: "தகுதித் தேவைகள்",
      items2: ['குறைந்தபட்சம் ₹10 லட்சம் மாத வருவாய்', 'நடப்பு கணக்கு கட்டாயம்', 'குறைந்தபட்சம் 1 ஆண்டு வணிக செயல்பாடு', 'சுத்தமான காசோலை வரலாறு'],
      t3: "தேவையான ஆவணங்கள்",
      items3: ['நடப்பு கணக்கு வங்கி அறிக்கைகள் (12 மாதங்கள்)', 'வணிக பதிவு ஆவணங்கள்', 'GST தாக்கல் (தேவையெனில்)', 'நிறுவன விவரம்', 'PAN மற்றும் அடையாளச் சான்று', 'காசோலைகள்'],
      ctaTitle: "காசோலை அடிப்படை கடன் விசாரணை",
      ctaDesc: "நிலையான வருவாய் உள்ள வணிகங்களுக்கு விரைவான செயலாக்கம்."
    },
    rec: {
      subtitle: "கடன் மீட்பு மற்றும் நிதி தகராறுகளை தீர்க்க தொழில்முறை உதவி.",
      t1: "எங்கள் மீட்பு சேவைகள்",
      d1: "மோசடி மீட்பு முதல் சொத்து மீட்பு வரை, தனியார் நிதி மீட்பில் நிபுணத்துவ உதவியை முழு ரகசியத்துடன் வழங்குகிறோம்.",
      cases: [
        { title: 'தனியார் மோசடி மீட்பு', desc: 'மோசடி பரிவர்த்தனைகள், ஒப்பந்த மீறல் மற்றும் அனுமதியற்ற நிதி பரிவர்த்தனைகளில் இருந்து தொகை மீட்பு.' },
        { title: 'சொத்து மீட்பு (Bridge Loan)', desc: 'ஏலம் அல்லது பறிமுதல் நிலைக்கு சென்ற சொத்துகளை காப்பாற்ற குறுகியகால bridge நிதி.' },
        { title: 'தனியார் சொத்து takeover உதவி', desc: 'default நிலை கடனாளர்களின் சொத்து takeover செயல்முறைகளில் சட்டப்படி வழிகாட்டுதல்.' }
      ],
      ctaTitle: "மீட்பு ஆலோசனை",
      ctaDesc: "ரகசியம். தொழில்முறை. பயனுள்ளது. எங்கள் நிபுணர்களை தொடர்பு கொள்ளுங்கள்."
    },
    drt: {
      subtitle: "DRT நடவடிக்கைகள் மற்றும் NPA மேலாண்மைக்கு நிபுணர் வழிகாட்டல்.",
      t1: "DRT சட்ட சேவைகள் பற்றி",
      d1: "Debt Recovery Tribunal வழக்குகள், NPA மேலாண்மை, SARFAESI நடவடிக்கைகள் மற்றும் ஏலம் தொடர்பான செயல்முறைகளில் நாங்கள் வழிகாட்டுகிறோம்.",
      t2: "சேவை பகுதிகள்",
      items2: [
        { title: 'Pre-NPA நிலை', body: 'கணக்கு NPA ஆகும் முன் மறுசீரமைப்பு, பேச்சுவார்த்தை மற்றும் OTS வாய்ப்புகளை ஆய்வு செய்வதில் உதவுகிறோம்.' },
        { title: 'Post-NPA நிலை', body: 'NPA வகைப்பாட்டிற்குப் பிறகு SARFAESI செயல்முறை மற்றும் ARC தொடர்பான வழிகாட்டலை வழங்குகிறோம்.' },
        { title: 'NPA சட்ட செயல்முறை', body: 'SARFAESI Act 2002 மற்றும் DRT Act 1993 கீழ் தேவையான நடைமுறைகளில் வழிகாட்டுகிறோம்.' },
        { title: 'DRT / DRAT செயல்முறைகள்', body: 'DRT மற்றும் DRAT நிலைகளில் உங்கள் உரிமைகள் மற்றும் நடைமுறைகள் குறித்து தெளிவான உதவி.' },
        { title: 'ஏலம் வழிகாட்டல்', body: 'வங்கி e-auction செயல்முறை, அறிவிப்பு, bid விதிமுறைகள் உள்ளிட்ட முழு வழிகாட்டல்.' }
      ],
      legalTitle: "சட்ட விளக்கம்:",
      legalDesc: "இந்த தகவல் பொதுவான வழிகாட்டலுக்காக மட்டுமே. இது சட்ட ஆலோசனை அல்ல. தகுதியான வக்கீலை அணுகவும்.",
      ctaTitle: "DRT சட்ட ஆலோசனை",
      ctaDesc: "சிக்கலான சட்ட செயல்முறைகளை நிபுணர் நிதி வழிகாட்டலுடன் அணுகுங்கள்."
    },
    faq: {
      title: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
      items: [
        ['HelpLine Finance வங்கி அல்லது NBFC ஆகுமா?', 'இல்லை. HelpLine Finance ஒரு நிதி இடைநிலை நிறுவனம். பொருத்தமான கடன் வழங்குநர்களுடன் உங்களை இணைக்கிறோம்.'],
        ['கடன் எவ்வளவு விரைவாக கிடைக்கும்?', 'ஆவணங்கள் முழுமையாக இருந்தால், பொதுவாக 48 வேலைநேரத்தில் செயலாக்கம் நடக்கும்.'],
        ['குறைந்தபட்ச கடன் தொகை என்ன?', 'Private Finance க்கு பொதுவாக குறைந்தபட்சம் ₹9 லட்சம்.'],
        ['குறைந்த CIBIL இருந்தாலும் உதவுவீர்களா?', 'ஆம். வணிக வருவாய் மற்றும் சொத்து விவரங்களை அடிப்படையாக வைத்து உதவுகிறோம்.'],
        ['என் தரவு பாதுகாப்பாக இருக்குமா?', 'ஆம். DPDP Act 2023 விதிமுறைகளை பின்பற்றுகிறோம்.']
      ]
    },
    privacy: {
      title: "தனியுரிமைக் கொள்கை",
      sub: "உங்கள் தனிப்பட்ட தகவலை எவ்வாறு சேகரித்து, பயன்படுத்தி, பாதுகாக்கிறோம்.",
      updated: "கடைசியாக புதுப்பிப்பு: ஜனவரி 2025.",
      items: [
        ['நாங்கள் சேகரிக்கும் தரவு', 'பெயர், தொலைபேசி எண், மின்னஞ்சல், கடன் வகை மற்றும் தொகை வரம்பு ஆகியவற்றைச் சேகரிக்கிறோம்.'],
        ['பயன்பாடு', 'உங்கள் கடன் விசாரணையைச் செயலாக்க மட்டுமே தரவு பயன்படுத்தப்படுகிறது.'],
        ['DPDP சட்டம்', 'HelpLine Finance டிஜிட்டல் தனிப்பட்ட தரவு பாதுகாப்பு சட்டத்திற்கு (DPDP) இணங்குகிறது.'],
        ['தரவு பகிர்வு', 'கடன் செயலாக்கத்திற்காக மட்டுமே எங்கள் நிதியாளர் நெட்வொர்க்குடன் பகிர்கிறோம்.'],
        ['தரவு சேமிப்பு', 'சட்டப்பூர்வ கடமைகளுக்குத் தேவையான காலம் வரை மட்டுமே தரவைச் சேமிக்கிறோம்.'],
        ['குக்கீகள்', 'எங்கள் இணையதளம் விளம்பர குக்கீகளைப் பயன்படுத்தாது.'],
        ['தொடர்பு', 'தனியுரிமை தொடர்பான கேள்விகளுக்கு: helplineprivatefinance@gmail.com']
      ]
    },
    terms: {
      title: "சேவை விதிமுறைகள்",
      sub: "HelpLine Finance சேவைகளைப் பயன்படுத்தும் விதிமுறைகள்.",
      updated: "கடைசியாக புதுப்பிப்பு: ஜனவரி 2025.",
      items: [
        ['சேவையின் தன்மை', 'HelpLine Finance ஒரு நிதி இடைநிலை நிறுவனம். நாங்கள் வங்கி அல்லது NBFC அல்ல.'],
        ['உத்தரவாதம்', 'விசாரணை சமர்ப்பிப்பது கடன் ஒப்புதலுக்கான உத்தரவாதம் அல்ல.'],
        ['விகிதங்கள்', 'இணையதளத்தில் உள்ள விகிதங்கள் அனைத்தும் சுட்டிக்காட்டுதலுக்காக மட்டுமே.'],
        ['அதிகார வரம்பு', 'இந்த விதிமுறைகள் இந்திய சட்டங்களுக்கு உட்பட்டவை. சென்னை நீதிமன்றங்களுக்கு உட்பட்டது.'],
        ['திருத்தங்கள்', 'இந்த விதிமுறைகளை மாற்ற எங்களுக்கு உரிமை உண்டு.'],
        ['தொடர்பு', 'கேள்விகளுக்கு: helplineprivatefinance@gmail.com']
      ]
    }
  },
  hi: {
    name: "हिंदी", flag: "🇮🇳",
    nav: { home: "होम", services: "सेवाएं", about: "हमारे बारे में", documents: "दस्तावेज़", partner: "साझेदार बनें", contact: "संपर्क", apply: "आवेदन करें", whatsapp: "WhatsApp", language: "भाषा" },
    hero: { eyebrow: "2017 से विश्वसनीय", h1_1: "आपका सपना।", h1_2: "हमारा वित्त।", desc: "HelpLine Finance तमिलनाडु, पुदुच्चेरी, कर्नाटक और केरल में MSME उद्यमों को ऋण प्रदान करता है।", cta1: "अभी आवेदन करें →", cta2: "💬 WhatsApp करें", trust1: "🔒 सुरक्षित", trust2: "⚡ 48 घंटे में", trust3: "✅ कोई छिपे शुल्क नहीं", trust4: "🏛 RBI अनुपालित" },
    about: { 
      label: "हमारे बारे में", 
      title: "2017 से MSME भारत की सेवा", 
      p1: "हेल्प लाइन फाइनेंस 2017 में शुरू हुआ और भारत में सूक्ष्म, लघु और मध्यम उद्यमों (MSME) की वित्तीय जरूरतों को पूरा करने पर केंद्रित है।", 
      p2: "वित्तीय सेवा उद्योग में समृद्ध अनुभव वाले विशेषज्ञों द्वारा संचालित, हमारा उद्देश्य ऋण को सुलभ बनाना और लाखों भारतीयों के जीवन पर सकारात्मक प्रभाव डालना है।", 
      f1t: "न्यूनतम प्रक्रियाएं", f1d: "तेज़ वितरण, न्यूनतम कागजी कार्रवाई", 
      f2t: "कोई सुरक्षा नहीं", f2d: "बिना किसी सुरक्षा आवश्यकता के ऋण", 
      f3t: "सर्वश्रेष्ठ दरें", f3d: "आकर्षक और प्रतिस्पर्धी ब्याज दरें", 
      f4t: "त्वरित प्रसंस्करण", f4d: "त्वरित ऋण के लिए कम प्रसंस्करण समय", 
      vision: "सभी हितधारकों द्वारा समावेशी वित्तपोषण क्षेत्र में निष्पक्षता, जिम्मेदार दृष्टिकोण और सेवा गुणवत्ता के लिए सबसे प्रशंसित कंपनी के रूप में पहचाना जाना।",
      mission: "स्थायी वित्तपोषण समाधानों के माध्यम से भारत में सूक्ष्म, लघु और मध्यम उद्यमों के लाखों अनौपचारिक ग्राहकों के जीवन में बदलाव लाना और सकारात्मक प्रभाव डालना।",
      values: "सशक्तिकরণ: वंचितों को वित्त प्रदान करना। पारदर्शिता: सभी हितधारकों के साथ सभी स्तरों पर। निष्पक्षता: दीर्घकालिक हितों के संरेखण पर ध्यान।",
      foundation: "हमारी नींव", vmv: "दृष्टि, मिशन और मूल्य",
      office: "पंजीकृत कार्यालय", location: "हम कहाँ हैं",
      btn: "और जानें →", panelTitle: "प्रमुख विशेषताएं", panelCta: "मुफ्त परामर्श पाएं →" 
    },
    partner: {
      title: "HelpLine Finance के साथ भागीदार बनें",
      subtitle: "हमारे ऑर्गनाइज़र / DSA नेटवर्क में शामिल हों और आकर्षक कमीशन कमाएं।",
      label: "ऑर्गनाइज़र बनें",
      secTitle: "साथ मिलकर बढ़ें",
      desc: "HelpLine Finance तमिलनाडु, पुदुच्चेरी, कर्नाटक और केरल में DSA और ऑर्गनाइज़र्स के साथ भागीदार है।",
      benefits: [
        { icon: '💰', title: 'आकर्षक कमीशन', desc: 'हर सफल ऋण वितरण पर प्रतिस्पर्धी रेफरल कमीशन कमाएं।' },
        { icon: '🤝', title: 'मजबूत समर्थन', desc: 'हमारी टीम से पूर्ण समर्थन — आवेदन से लेकर वितरण तक।' },
        { icon: '🌐', title: 'विस्तृत उत्पाद श्रृंखला', desc: 'ग्राहकों को 8+ ऋण उत्पाद प्रदान करें।' },
        { icon: '⚡', title: 'त्वरित प्रसंस्करण', desc: '48 घंटे का ऋण प्रसंस्करण आपके ग्राहकों को खुश रखता है।' }
      ],
      formTitle: "ऑर्गनाइज़र पंजीकरण",
      form: { name: "पूरा नाम", company: "कंपनी का नाम", email: "ईमेल पता", phone: "संपर्क नंबर", loc: "स्थान", namePH: "आपका पूरा नाम", compPH: "आपकी कंपनी / संगठन", emailPH: "your@email.com", phonePH: "10 अंकों का मोबाइल", locPH: "शहर, राज्य" },
      submit: "ऑर्गनाइज़र के रूप में पंजीकरण करें →",
      success: "✓ पंजीकरण प्राप्त हुआ! हम जल्द ही आपसे संपर्क करेंगे।"
    },
    docs: {
      title: "दस्तावेज़ चेकलिस्ट",
      subtitle: "विभिन्न ऋण श्रेणियों और आवेदक प्रोफाइल के लिए आवश्यक दस्तावेजों की समीक्षा करें।",
      tabs: { sal: "वेतनभोगी", self: "स्व-नियोजित", prop: "प्रॉपर्टी दस्तावेज़" },
      sections: {
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
        ]
      },
      note: "अंतिम चरण में सत्यापन के लिए मूल दस्तावेजों की आवश्यकता हो सकती है। विशिष्ट मामले की आवश्यकताओं के आधार पर अतिरिक्त दस्तावेज मांगे जा सकते हैं।",
      cta: "दस्तावेजों के बारे में पूछताछ करें"
    },
    stats: { s1: "20,000+", l1: "परिवारों की मदद", s2: "8+", l2: "साल का अनुभव", s3: "85%", l3: "निजी वित्तपोषक नेटवर्क", s4: "4", l4: "राज्यों में सेवा" },
    services: {
      label: "हम क्या प्रदान करते हैं", title: "हमारी वित्तीय सेवाएं", desc: "दक्षिण भारत में MSME, NRI और व्यक्तियों के लिए व्यापक समाधान।",
      items: [
        { icon: "🏠", title: "निजी वित्त", desc: "MSME व्यवसायों के लिए ऋण।", tags: ["48 घंटे"], page: "pf" },
        { icon: "🏗️", title: "परियोजना ऋण", desc: "बड़े पैमाने पर परियोजनाओं के लिए वित्तपोषण।", tags: ["कस्टम संरचना"], page: "pl" },
        { icon: "✈️", title: "NRI ऋण", desc: "भारत में निवेश करने वाले NRI के लिए ऋण।", tags: ["NRI विशेषज्ञ"], page: "nri" },
        { icon: "📈", title: "निवेश ऋण", desc: "वाणिज्यिक संपत्ति निवेश के लिए पूंजी।", tags: ["संपदा निर्माण"], page: "inv" },
        { icon: "📊", title: "कम CIBIL ऋण", desc: "कम क्रेडिट स्कोर वालों के लिए ऋण।", tags: ["CIBIL समस्या?"], page: "cibil" },
        { icon: "📋", title: "चेक आधार ऋण", desc: "पोस्ट-डेटेड चेक पर व्यावसायिक ऋण।", tags: ["चालू खाता"], page: "cheq" },
        { icon: "⚖️", title: "निजी वसूली", desc: "ऋण वसूली में पेशेवर सहायता।", tags: ["विशेषज्ञ टीम"], page: "rec" },
        { icon: "🏛️", title: "DRT कानूनी सेवाएं", desc: "ऋण वसूली न्यायाधिकरण में मार्गदर्शन।", tags: ["कानूनी सलाह"], page: "drt" }
      ]
    },
    emi: { label: "ऋण की योजना बनाएं", title: "EMI कैलकुलेटर", desc: "अपनी मासिक पुनर्भुगतान का अनुमान लगाएं।", amount: "ऋण राशि", rate: "ब्याज दर", tenure: "ऋण अवधि", disclaimer: "ब्याज दरें केवल सांकेतिक हैं।", cta: "सटीक उद्धरण पाएं →", monthlyEmi: "मासिक EMI", perMonth: "प्रति माह", principal: "मूल राशि", totalInterest: "कुल ब्याज", totalPayment: "कुल भुगतान", note: "दरें सांकेतिक हैं।" },
    testimonials: {
      label: "ग्राहक की आवाज़", title: "हमारे ग्राहक क्या कहते हैं", badge: "सत्यापित ग्राहक",
      items: [
        { name: "लोगा चंद्रन", initial: "ल", text: "आपकी सेवाओं ने मेरी सभी वित्तीय जरूरतें पूरी कीं।" },
        { name: "स्टीफन राज", initial: "स्", text: "पूरी प्रक्रिया सुचारू और परेशानी मुक्त थी।" },
        { name: "कण्णियप्पन N", initial: "क", text: "कुछ ही मिनटों में निर्णय मिला। उत्कृष्ट सेवा।" }
      ]
    },
    cta: { title: "CIBIL समस्या? चिंता मत करें — हम मदद कर सकते हैं।", desc: "जब बैंक मना करते हैं तो वित्तीय समाधान खोजने में हम विशेषज्ञ हैं।", btn1: "मुफ्त परामर्श पाएं →", btn2: "💬 WhatsApp अभी" },
    contact: { label: "संपर्क करें", title: "संपर्क करें", desc: "फ़ॉर्म भरें, हमारी टीम 2 घंटे में कॉल करेगी।", name: "पूरा नाम", phone: "फोन नंबर", email: "ईमेल पता", msg: "संदेश", namePH: "आपका पूरा नाम", phonePH: "10 अंकों का मोबाइल", emailPH: "your@email.com", loanType: "ऋण प्रकार", selectLoan: "ऋण प्रकार चुनें…", amountRange: "ऋण राशि सीमा", selectAmount: "सीमा चुनें…", state: "राज्य", selectState: "राज्य चुनें…", notice: "अपना डेटा उपयोग करने की सहमति दें।", submit: "पूछताछ सबमिट करें →", office: "संपर्क जानकारी", addr: "AKR Corniche Center No.30/11\nSecond Line Beach, George Town\nचेन्नई – 600 001", hours: "सोमवार–शनिवार: सुबह 9:00 – शाम 6:00", waBtn: "💬 WhatsApp करें", toast: "✓ पूछताछ सबमिट हुई!", addrLbl: "पता", phoneLbl: "फ़ोन", emailLbl: "ईमेल", hoursLbl: "समय", msgPH: "अपनी आवश्यकता के बारे में अतिरिक्त जानकारी…", viewMap: "📍 Google Maps पर देखें →", below10L: "₹10L से कम", above5Cr: "₹5Cr से ऊपर" },
    chatbot: {
      welcome: "नमस्ते! 👋 मैं हेल्पलाईन सहायक हूँ। लोन, ब्याज या दस्तावेज़ों के बारे में पूछें।",
      suggestions: ["निजी वित्त", "चेक लोन", "लो CIBIL", "NRI लोन", "ब्याज दर", "दस्तावेज़", "संपर्क"],
      placeholder: "अपना सवाल लिखें...",
      replies: {
        private: "हम ₹1 करोड़ से ₹5 करोड़ तक बिज़नेस लोन देते हैं। 24 घंटे में प्रोसेसिंग!",
        cheque: "₹10 लाख टर्नओवर वालों को ₹1 करोड़ से चेक आधार पर लोन मिलता है।",
        cibil: "हाँ, कम CIBIL होने पर भी हम संपत्ति या बिज़नेस टर्नओवर के आधार पर लोन देते हैं।",
        docs: "ज़रूरी दस्तावेज़: PAN, ID प्रूफ, 12 महीने का बैंक स्टेटमेंट और बिज़नेस प्रूफ।",
        nri: "NRI के लिए 8.40%* से ब्याज दर पर प्रॉपर्टी लोन उपलब्ध हैं।",
        rates: "ब्याज दरें लोन के प्रकार पर निर्भर करती हैं। ₹3/लाख/माह* से शुरू।",
        contact: "आप हमें +91 8098096666 पर कॉल या WhatsApp कर सकते हैं।",
        default: "क्षमा करें, मैं समझ नहीं पाया। लोन प्रकार, ब्याज या दस्तावेज़ों के बारे में पूछें।"
      }
    },
    nav_cat: { lending: "ऋण सेवाएं", recovery: "वसूली और कानूनी", resources: "संसाधन" },
    loanItems: ["प्राइवेट फाइनेंस", "प्रोजेक्ट लोन", "NRI लोन", "इन्वेस्टमेंट लोन", "लो CIBIL लोन", "चेक बेसिस लोन", "प्राइवेट रिकवरी", "DRT लीगल सर्विस", "अन्य"],
    footer: { tagline: "2017 से विश्वसनीय वित्तीय मध्यस्थ", quickLinks: "त्वरित लिंक", services2: "सेवाएं", contactInfo: "संपर्क", copy: "© 2017–2026 HelpLine Finance. सर्वाधिकार सुरक्षित।", privacy: "गोपनीयता नीति", terms: "सेवा की शर्तें" },
    common: { home: "होम", services: "सेवाएं", enquire: "अभी पूछें →", wa: "💬 WhatsApp", note: "नोट:", scroll: "स्क्रॉल", years: "वर्ष", other: "अन्य", states: ["तमिलनाडु", "पुडुचेरी", "कर्नाटक", "केरल"] },
    pf: {
      subtitle: "MSME व्यवसायों के लिए unsecured और secured लोन।",
      s1: "बिना सिक्योरिटी (Unsecured)",
      s1d: "बिज़नेस परफॉर्मेंस और कैशफ्लो के आधार पर unsecured लोन।",
      s2: "प्रॉपर्टी के खिलाफ (Secured)",
      s2d: "रेज़िडेंशियल/कमर्शियल प्रॉपर्टी के खिलाफ अधिक लोन सीमा।",
      noteBody: "ब्याज दरें केवल संकेतात्मक हैं। वास्तविक दरें प्रोफाइल और लोन प्रकार के अनुसार बदलती हैं।",
      ctaTitle: "प्राइवेट फाइनेंस पूछताछ",
      ctaDesc: "48 घंटे में तेज प्रोसेसिंग। हमारे विशेषज्ञों से बात करें।",
      docTitle1: "दस्तावेज़ — बिना सिक्योरिटी",
      docs1: ['PAN कार्ड', '2 फोटो', 'वोटर आईडी / पासपोर्ट / ड्राइविंग लाइसेंस', 'बिज़नेस रजिस्ट्रेशन सर्टिफिकेट', '2 विजिटिंग कार्ड', 'कंपनी प्रोफाइल', 'बैंक स्टेटमेंट (12 महीने)', 'पिछले 3 साल के IT Returns', 'पिछले 3 साल के P&L स्टेटमेंट', 'OD/CC सैंक्शन लेटर', 'GST रजिस्ट्रेशन', 'टर्नओवर और टैक्स विवरण'],
      docTitle2: "दस्तावेज़ — प्रॉपर्टी के खिलाफ",
      docs2: ['उपरोक्त सभी दस्तावेज़', 'ओरिजनल सेल डीड', 'पैरेंट डॉक्यूमेंट्स', 'एन्कम्ब्रेन्स सर्टिफिकेट (30 वर्ष)', 'पट्टा / चिट्टा', 'स्वीकृत बिल्डिंग प्लान', 'कॉम्पलीशन सर्टिफिकेट', 'प्रॉपर्टी टैक्स रसीद (3 वर्ष)', 'यूटिलिटी बिल', 'NOC (यदि आवश्यक)'],
      rateLabel: "₹3/लाख/माह* से शुरू (सांकेतिक)",
      procLabel: "48 घंटे में प्रोसेसिंग",
      rangeLabel: "न्यूनतम ₹9 लाख – ₹10 करोड़",
      procLabel2: "प्रसंस्करण समय: 15 कार्य दिवस",
      rateLabel2: "प्रतिस्पर्धी दरें (सांकेतिक)",
      indicative: "(सांकेतिक)"
    },
    pl: {
      subtitle: "बड़े इंफ्रास्ट्रक्चर और रियल एस्टेट प्रोजेक्ट्स के लिए स्ट्रक्चर्ड फाइनेंस।",
      t1: "प्रोजेक्ट लोन फाइनेंसिंग",
      d1: "हम बड़े प्रोजेक्ट फाइनेंस स्ट्रक्चरिंग में विशेषज्ञ हैं। इंफ्रास्ट्रक्चर और रियल एस्टेट के लिए फंडिंग की सुविधा प्रदान करते हैं।",
      t2: "योग्य प्रोजेक्ट्स",
      items2: ['इंफ्रास्ट्रक्चर विकास प्रोजेक्ट्स', 'रियल एस्टेट निर्माण', 'बड़े MSME विस्तार', 'कमर्शियल कॉम्प्लेक्स विकास', 'औद्योगिक प्रोजेक्ट फाइनेंस', 'बिज़नेस एक्विजिशन फाइनेंस'],
      t3: "प्रमुख विशेषताएं",
      features: [
        { h: 'कस्टम संरचना', d: 'प्रोजेक्ट कैश फ्लो के अनुसार पुनर्भुगतान' },
        { h: 'बड़ी राशि', d: 'बड़ी पूंजी आवश्यकताओं के लिए वित्तपोषण' },
        { h: 'नेटवर्क एक्सेस', d: 'हमारे निजी वित्तपोषक नेटवर्क से जुड़ें' },
        { h: 'विशेषज्ञ मार्गदर्शन', d: 'एंड-टू-एंड प्रोजेक्ट लोन प्रोसेसिंग' }
      ],
      ctaTitle: "प्रोजेक्ट लोन पूछताछ",
      ctaDesc: "अपनी वित्तीय जरूरतों के लिए विशेषज्ञ परामर्श प्राप्त करें।"
    },
    nri: {
      subtitle: "भारत में निवेश करने वाले NRI के लिए अनुकूलित ऋण समाधान।",
      tabs: { docs: "NRI दस्तावेज़", personal: "व्यक्तिगत", property: "प्रॉपर्टी", fees: "शुल्क", mod: "MOD" },
      t1: "NRI आवश्यक दस्तावेज़",
      items1a: ['वैध पासपोर्ट', 'वीजा / रेजिडेंट परमिट कॉपी', 'विदेशी पता प्रमाण', 'PAN कार्ड (भारत)', 'Power of Attorney'],
      items1b: ['पिछले 6 महीने के विदेशी बैंक स्टेटमेंट', 'सैलरी स्लिप / कॉन्ट्रैक्ट', 'NRE / NRO बैंक स्टेटमेंट', 'IT Returns (यदि भारत में भरा है)', '2 फोटो'],
      t2: "व्यक्तिगत ऋण विवरण",
      d2: "विदेश में रहने वाले भारतीय नागरिकों के लिए भारत में व्यक्तिगत जरूरतों हेतु ऋण उपलब्ध हैं।",
      items2: ['विदेश में भारतीय नागरिकों हेतु', 'प्रॉपर्टी खरीद और निर्माण योग्य', 'Power of Attorney स्वीकार्य', 'NRE/NRO खाते से पुनर्भुगतान', 'सह-आवेदक आवश्यक हो सकता है'],
      t3: "प्रॉपर्टी दस्तावेज़",
      items3a: ['ओरिजनल सेल डीड', 'पैरेंट डॉक्यूमेंट्स', 'एन्कम्ब्रेन्स सर्टिफिकेट (30 वर्ष)', 'पट्टा / चिट्टा'],
      items3b: ['स्वीकृत बिल्डिंग प्लान', 'कॉम्पलीशन / ऑक्यूपेंसी सर्टिफिकेट', 'NOC (यदि लागू)', 'प्रॉपर्टी टैक्स रसीद (3 वर्ष)'],
      t4: "शुल्क संरचना",
      items4: [
        { l: 'कानूनी शुल्क', v: '₹5,500' },
        { l: 'प्रोसेसिंग शुल्क', v: '0.40% + GST' },
        { l: 'स्टाम्प ड्यूटी (MOD)', v: '₹280' },
        { l: 'CERSAI शुल्क', v: '₹180' }
      ],
      rates: ["महिलाओं के लिए: 8.40% (सांकेतिक)", "अन्य के लिए: 8.45% (सांकेतिक)"],
      t5: "MOD (Memorandum of Deposit)",
      d5: "NRI लोन के लिए प्रॉपर्टी पर बैंक का अधिकार बनाने हेतु MOD एक कानूनी आवश्यकता है।",
      items5: ['ओरिजनल सेल डीड बैंक के पास जमा', 'MOD स्टाम्प पेपर (₹280)', 'CERSAI रजिस्ट्रेशन (₹180)', 'विदेश में होने पर दूतावास सत्यापन'],
      sideTitle: "NRI लोन पूछताछ",
      sideDesc: "विशेषज्ञ परामर्श के लिए हमारे NRI विशेषज्ञों से संपर्क करें।",
      sideH: "NRI लोन की मुख्य विशेषताएं",
      sideItems: ['विदेश में भारतीयों हेतु', 'प्रॉपर्टी खरीद और निर्माण', '8.40% से (सांकेतिक)', 'Power of Attorney स्वीकार्य']
    },
    inv: {
      subtitle: "निवेश के अवसरों और संपत्ति निर्माण के लिए पूंजीगत वित्तपोषण।",
      t1: "निवेश ऋण वित्तपोषण",
      d1: "हम कमर्शियल प्रॉपर्टी, पोर्टफोलियो विस्तार या बिज़नेस एक्विजिशन के लिए पूंजी प्राप्त करने में मदद करते हैं।",
      t2: "योग्य उपयोग",
      items2: ['कमर्शियल प्रॉपर्टी निवेश', 'विकास हेतु भूमि खरीद', 'बिज़नेस एक्विजिशन फाइनेंस', 'निवेश पोर्टफोलियो विस्तार', 'पूंजीगत उपकरण निवेश'],
      ctaTitle: "निवेश ऋण पूछताछ",
      ctaDesc: "अपनी निवेश योजना के अनुसार विवरण हेतु संपर्क करें।"
    },
    cibil: {
      subtitle: "CIBIL समस्या? बैंक मना करें तो भी हम समाधान देते हैं।",
      t1: "CIBIL स्कोर समझें",
      d1: "CIBIL स्कोर आपकी क्रेडिट प्रोफाइल दिखाता है। हमारा नेटवर्क केवल स्कोर नहीं देखता।",
      excellent: "उत्कृष्ट", good: "अच्छा", fair: "मध्यम", poor: "कमज़ोर", below: "550 से कम",
      t2: "हम कैसे मदद करते हैं",
      d2: "हम बिज़नेस परफॉर्मेंस, एसेट और कैशफ्लो के आधार पर विकल्प देते हैं।",
      items2: ['बिज़नेस परफॉर्मेंस आधारित मूल्यांकन', 'प्रॉपर्टी आधारित लोन विकल्प', 'लचीली दस्तावेज़ आवश्यकताएं', 'त्वरित मूल्यांकन और जवाब'],
      ctaTitle: "CIBIL समस्या? हमसे बात करें",
      ctaDesc: "क्रेडिट स्कोर के कारण न रुकें। हमारे विशेषज्ञ समाधान देंगे।"
    },
    cheq: {
      subtitle: "पोस्ट-डेटेड चेक के आधार पर स्वीकृत व्यावसायिक ऋण।",
      t1: "चेक आधार ऋण के बारे में",
      d1: "निरंतर कैश फ्लो वाले व्यवसायों के लिए चेक आधारित शॉर्ट-टर्म लोन एक आदर्श उत्पाद है।",
      t2: "पात्रता आवश्यकताएं",
      items2: ['न्यूनतम ₹10 लाख मासिक टर्नओवर', 'चालू खाता (Current Account) अनिवार्य', 'न्यूनतम 1 वर्ष का बिज़नेस', 'साफ चेक हिस्ट्री'],
      t3: "आवश्यक दस्तावेज़",
      items3: ['चालू खाता बैंक स्टेटमेंट (12 महीने)', 'बिज़नेस रजिस्ट्रेशन दस्तावेज़', 'GST रिटर्न', 'कंपनी प्रोफाइल', 'PAN और पहचान प्रमाण', 'चेक'],
      ctaTitle: "चेक आधार ऋण पूछताछ",
      ctaDesc: "बेहतर टर्नओवर वाले बिज़नेस हेतु तेज़ प्रोसेसिंग।"
    },
    rec: {
      subtitle: "ऋण वसूली और वित्तीय विवाद समाधान के लिए पेशेवर सहायता।",
      t1: "हमारी रिकवरी सेवाएं",
      d1: "फ्रॉड रिकवरी से प्रॉपर्टी रेस्क्यू तक, निजी वित्तीय रिकवरी में विशेषज्ञ सहायता पूरी प्रोफेशनल गोपनीयता के साथ दी जाती है।",
      cases: [
        { title: 'प्राइवेट फ्रॉड रिकवरी', desc: 'धोखाधड़ी लेनदेन, कॉन्ट्रैक्ट उल्लंघन और अनधिकृत वित्तीय मामलों से धन की रिकवरी।' },
        { title: 'प्रॉपर्टी रेस्क्यू (Bridge Loan)', desc: 'नीलामी/फोरक्लोजर से तनावग्रस्त प्रॉपर्टी बचाने के लिए शॉर्ट-टर्म ब्रिज फाइनेंस।' },
        { title: 'प्राइवेट प्रॉपर्टी टेकओवर सहायता', desc: 'डिफॉल्ट मामलों में कानूनी प्रक्रिया के अनुसार प्रॉपर्टी टेकओवर मार्गदर्शन।' }
      ],
      ctaTitle: "रिकवरी कंसल्टेशन",
      ctaDesc: "गोपनीय। प्रोफेशनल। प्रभावी। हमारे रिकवरी विशेषज्ञों से बात करें।"
    },
    drt: {
      subtitle: "DRT कार्यवाही और NPA प्रबंधन के लिए विशेषज्ञ मार्गदर्शन।",
      t1: "DRT कानूनी सेवाओं के बारे में",
      d1: "हम Debt Recovery Tribunal प्रक्रियाओं, NPA प्रबंधन, SARFAESI कार्यवाही और बैंक नीलामी नेविगेशन में विशेषज्ञ सहायता देते हैं।",
      t2: "सेवा क्षेत्र",
      items2: [
        { title: 'Pre-NPA चरण', body: 'खाता NPA बनने से पहले पुनर्गठन, सेटलमेंट और OTS विकल्पों पर मार्गदर्शन।' },
        { title: 'Post-NPA चरण', body: 'NPA वर्गीकरण के बाद SARFAESI प्रक्रिया और ARC बातचीत में सहायता।' },
        { title: 'NPA कानूनी प्रक्रिया', body: 'SARFAESI Act 2002 और DRT Act 1993 के अंतर्गत प्रक्रियाओं पर सहायता।' },
        { title: 'DRT / DRAT कार्यवाही', body: 'DRT/DRAT चरणों में अधिकारों और प्रक्रिया पर स्पष्ट मार्गदर्शन।' },
        { title: 'नीलामी मार्गदर्शन', body: 'बैंक e-auction प्रक्रिया, नोटिस, बोली और पोस्ट-ऑक्शन चरणों में सहायता।' }
      ],
      legalTitle: "कानूनी अस्वीकरण:",
      legalDesc: "यह जानकारी केवल सामान्य मार्गदर्शन हेतु है, कानूनी सलाह नहीं। योग्य वकील से संपर्क करें।",
      ctaTitle: "DRT लीगल कंसल्टेशन",
      ctaDesc: "जटिल कानूनी प्रक्रियाओं को विशेषज्ञ वित्तीय मार्गदर्शन के साथ संभालें।"
    },
    faq: {
      title: "अक्सर पूछे जाने वाले प्रश्न",
      items: [
        ['क्या HelpLine Finance बैंक या NBFC है?', 'नहीं। हम एक वित्तीय मध्यस्थ संस्था हैं। हम आपको उपयुक्त लेंडर्स से जोड़ते हैं।'],
        ['लोन कितनी जल्दी मिल सकता है?', 'दस्तावेज़ पूरे होने पर आमतौर पर 48 कार्य घंटों में प्रोसेस होता है।'],
        ['न्यूनतम लोन राशि क्या है?', 'Private Finance के लिए सामान्यतः न्यूनतम ₹9 लाख है।'],
        ['क्या कम CIBIL पर भी मदद मिलती है?', 'हाँ। हम बिज़नेस और एसेट प्रोफाइल के आधार पर विकल्प देते हैं।'],
        ['क्या मेरा डेटा सुरक्षित है?', 'हाँ। हम DPDP Act 2023 के सिद्धांतों का पालन करते हैं।']
      ]
    },
    privacy: {
      title: "गोपनीयता नीति",
      sub: "हम आपकी व्यक्तिगत जानकारी को कैसे एकत्र, उपयोग और सुरक्षित रखते हैं।",
      updated: "अंतिम अपडेट: जनवरी 2025।",
      items: [
        ['डेटा संग्रह', 'हम नाम, फोन, ईमेल, लोन प्रकार और राशि सीमा एकत्र करते हैं।'],
        ['उपयोग', 'डेटा का उपयोग केवल आपकी पूछताछ को प्रोसेस करने के लिए किया जाता है।'],
        ['DPDP अनुपालन', 'HelpLine Finance DPDP Act 2023 का पालन करता है।'],
        ['डेटा साझा करना', 'हम केवल लोन प्रोसेसिंग हेतु अपने नेटवर्क के साथ जानकारी साझा करते हैं।'],
        ['डेटा प्रतिधारण', 'हम केवल आवश्यक कानूनी अवधि तक डेटा सुरक्षित रखते हैं।'],
        ['कुकीज़', 'हमारी साइट विज्ञापन कुकीज़ का उपयोग नहीं करती है।'],
        ['संपर्क', 'गोपनीयता हेतु संपर्क: helplineprivatefinance@gmail.com']
      ]
    },
    terms: {
      title: "सेवा की शर्तें",
      sub: "HelpLine Finance सेवाओं के उपयोग की शर्तें।",
      updated: "अंतिम अपडेट: जनवरी 2025।",
      items: [
        ['सेवा की प्रकृति', 'HelpLine Finance एक वित्तीय मध्यस्थ है। हम बैंक या NBFC नहीं हैं।'],
        ['स्वीकृति गारंटी', 'पूछताछ सबमिट करना लोन स्वीकृति की गारंटी नहीं है।'],
        ['सांकेतिक दरें', 'साइट पर दी गई सभी दरें केवल संदर्भ हेतु हैं।'],
        ['न्यायाधिकार', 'ये शर्तें भारतीय कानूनों के अधीन हैं। चेन्नई न्यायालय क्षेत्राधिकार।'],
        ['संशोधन', 'हम इन शर्तों को कभी भी बदलने का अधिकार रखते हैं।'],
        ['संपर्क', 'शर्तों हेतु संपर्क: helplineprivatefinance@gmail.com']
      ]
    }
  }

};