"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Sparkles,
  Mail,
  ArrowRight,
  CheckCircle2,
  Fingerprint,
  FileSearch,
  Gavel,
  Cookie,
  Users,
  Database,
  RefreshCcw,
  Clock,
  UserCheck,
  Scale,
  Eye,
  AlertOctagon,
  FileCheck,
  Search,
  ShieldAlert,
  Settings,
  AlertCircle,
  RefreshCw,
  Copyright,
  AlertTriangle,
  Globe,
  MapPin,
  MessageSquareWarning,
  HeartHandshake,
  FileText,
  
} from "lucide-react";

// ==========================================
// DATA ARRAYS
// ==========================================
const policySections = [
  {
    id: "data",
    title: "1. Personal Data We Collect",
    icon: <Fingerprint className="text-blue-500" />,
    list: [
      "Identity: Name, contact details, and professional email",
      "Organization: Business or entity-level data",
      "Policy Specifics: Insurance history voluntarily shared",
      "Digital Footprint: Technical data, IP addresses & logs",
    ],
  },
  {
    id: "purpose",
    title: "2. Purpose of Processing",
    icon: <FileSearch className="text-blue-500" />,
    list: [
      "Insurance placement and advisory services",
      "Claims coordination and policy servicing",
      "IRDAI regulatory compliance",
      "Communication and grievance redressal",
    ],
  },
  {
    id: "consent",
    title: "3. Consent",
    icon: <UserCheck className="text-blue-500" />,
    content:
      "By submitting personal data, you provide free, specific, informed, and unambiguous consent for its processing. You may withdraw consent at any time, subject to statutory, regulatory, and contractual obligations.",
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking",
    icon: <Cookie className="text-blue-500" />,
    content:
      "Vestigo uses cookies strictly for essential website functionality and limited analytics. Users may manage preferences through browser settings.",
  },
  {
    id: "sharing",
    title: "5. Data Sharing",
    icon: <Users className="text-blue-500" />,
    list: [
      "Insurance companies & reinsurers",
      "Third-party administrators, surveyors & service providers",
      "Regulatory or governmental authorities where required by law",
    ],
  },
  {
    id: "storage",
    title: "6. Data Storage",
    icon: <Database className="text-blue-500" />,
    content:
      "Data is processed and stored in India. Cross-border transfer for insurance placement is undertaken only in accordance with applicable laws and safeguards.",
  },
  {
    id: "retention",
    title: "7. Data Retention",
    icon: <Clock className="text-blue-500" />,
    list: [
      "Required IRDAI regulation periods",
      "Applicable statutory laws",
      "Audit, contractual, or dispute-resolution requirements",
    ],
  },
  {
    id: "rights",
    title: "8. Rights of Data Principals",
    icon: <ShieldCheck className="text-blue-500" />,
    list: [
      "Access your personal data",
      "Request correction or erasure",
      "Withdraw consent",
      "Seek grievance redressal",
    ],
  },
  {
    id: "updates",
    title: "9. Updates to Policy",
    icon: <RefreshCcw className="text-blue-500" />,
    content:
      "Vestigo reserves the right to amend this Privacy Policy to reflect legal, regulatory, or operational changes. Updates will be effective from the date of posting.",
  },
];

const amlFramework = [
  {
    id: "objectives",
    title: "Core Objectives",
    icon: <Target className="text-blue-500" />,
    list: [
      "Detect and prevent fraudulent insurance practices",
      "Identify suspicious transactions and activities",
      "Ensure compliance with AML and KYC requirements",
      "Protect clients, insurers, and stakeholders",
    ],
  },
  {
    id: "measures",
    title: "Key AML Measures",
    icon: <Search className="text-blue-500" />,
    list: [
      "Client due diligence and KYC verification",
      "Monitoring of unusual or suspicious transactions",
      "Reporting suspicious activities to authorities",
      "Employee awareness and internal controls",
    ],
  },
];

const ismsCommitments = [
  {
    id: "commitments",
    title: "ISMS Commitments",
    icon: <ShieldCheck className="text-blue-500" />,
    list: [
      "Protection of client, insurer, and business information",
      "Prevention of unauthorized access or misuse",
      "Compliance with DPDP Act, IRDAI regulations, and IT laws",
      "Business continuity and resilience",
    ],
  },
  {
    id: "controls",
    title: "Key Controls",
    icon: <Lock className="text-blue-500" />,
    list: [
      "Role-based access control",
      "Secure authentication mechanisms",
      "Monitoring and incident reporting",
      "Vendor confidentiality obligations",
      "Periodic review and improvement of controls",
    ],
  },
];

const termsSections = [
  {
    id: "nature",
    title: "Purpose & Nature of Content",
    icon: <AlertTriangle className="text-blue-500" />,
    content:
      "Content is for informational purposes and does not constitute insurance, legal, or professional advice.",
    list: [
      "constitutes insurance advice, legal advice, financial advice, or professional advice of any kind",
      "constitutes an offer, solicitation, or recommendation to purchase or sell any insurance product",
      "takes into account the specific circumstances of any individual or entity",
    ],
  },
  {
    id: "regulatory",
    title: "Regulatory Disclosure",
    icon: <Gavel className="text-blue-500" />,
    list: [
      "Vestigo does not underwrite insurance risk",
      "Vestigo does not act as an insurer",
      "Contracts are between insurance companies and the insured",
    ],
  },
  {
    id: "property",
    title: "Intellectual Property",
    icon: <Copyright className="text-blue-500" />,
    content:
      "All content on this website, including text, logos, graphics, layout, and design, is the intellectual property of Vestigo or its licensors and is protected under applicable intellectual property laws. No part of this website may be copied, reproduced, distributed, or used without prior written permission. ",
  },
  {
    id: "prohibited",
    title: "Prohibited Use",
    icon: <UserCheck className="text-blue-500" />,
    list: [
      "No unlawful or fraudulent purposes",
      "No unauthorized access to data/systems",
      "No introduction of malicious code or viruses",
    ],
  },
  {
    id: "privacy-data",
    title: "Privacy and Data Protection",
    icon: <ShieldAlert className="text-blue-500" />,
    content:
      "Any personal data shared through this website shall be processed in accordance with the Digital Personal Data Protection Act, 2023 and Vestigo’s Privacy Policy.",
  },
  {
    id: "no-waiver",
    title: "No Waiver",
    icon: <FileCheck className="text-blue-500" />,
    content:
      "Failure by Vestigo to enforce any provision of these Terms shall not constitute a waiver of its rights.",
  },
  {
    id: "severability",
    title: "Severability",
    icon: <FileCheck className="text-blue-500" />,
    content:
      "If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall continue in full force and effect.",
  },
];

const ethicsFramework = [
  {
    id: "scope",
    title: "Policy Scope",
    icon: <Users className="text-blue-500" />,
    list: [
      "Employees and Directors",
      "Consultants and Advisors",
      "Vendors and Third-party Associates",
      "Business Partners and Stakeholders",
    ],
  },
  {
    id: "concerns",
    title: "Reportable Concerns",
    icon: <MessageSquareWarning className="text-blue-500" />,
    list: [
      "Fraud or financial irregularities",
      "Regulatory non-compliance",
      "Data misuse or security breaches",
      "Unethical or improper conduct",
    ],
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function ComprehensivePolicy() {
  const containerRef = useRef(null);
  
  // Parallax for the very top Master Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setHasPlayedOnce(true);
      video.muted = true;
      video.loop = true;
      video.play();
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* PART 1: MAIN PRIVACY POLICY                                               */}
      {/* ========================================================================= */}
      
      {/* MASTER HERO SECTION */}
      <section ref={containerRef} className="relative min-h-[85vh] bg-[#040a26] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[45vh] lg:h-full lg:w-1/2 lg:left-auto lg:right-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            preload="auto"
            muted={false}
            loop={false}
            className="w-full h-full object-cover object-center max-md:object-cover max-md:object-center"
          >
            <source src="/heropolicy.mp4" type="video/mp4" />
          </video>
          <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020617]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] px-6">
          <div className="flex pt-[45vh] lg:pt-0 items-end lg:items-center">
            <motion.div style={{ y, opacity }} className="max-w-xl pb-12 md:pb-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-400 text-xs font-bold">
                <Sparkles size={14} />
                Secure Data Governance
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Trust & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Transparency</span>
              </h1>
              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed mb-8">
                Compliance-first frameworks protecting the digital interests of
                India&apos;s growing enterprises under the DPDP Act 2023.
              </p>
            </motion.div>
          </div>
          <div className="hidden md:block" />
        </div>

        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
      </section>

      {/* CORE COMMITMENT */}
      <section className="relative z-20 py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black text-[#031154] tracking-tight leading-tight">
                  Protecting Your <br /> Operational Integrity
                </h2>
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed max-w-[95%]">
                  <p>
                    Vestigo Insurance Advisory respects the privacy of individuals and is committed to protecting personal data in accordance with the{" "}
                    <span className="text-blue-600 font-semibold underline decoration-blue-200 underline-offset-4">
                      Digital Personal Data Protection Act, 2023 (DPDP Act),
                    </span>{" "}
                    the Information Technology Act, 2000, and applicable regulations issued by the Insurance Regulatory and Development Authority of India (IRDAI).
                  </p>
                  <p>
                    By accessing or using this website or by sharing personal data with us, you acknowledge that you have read and understood this Privacy Policy and consent to the processing of your personal data in accordance with its terms.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-2xl shadow-blue-900/5 border border-slate-100 max-w-2xl">
                <h4 className="text-[#031154] font-black text-xl mb-4 uppercase tracking-tight">Our Mandate</h4>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  Vestigo is an IRDAI Licensed Broker dedicated to designing risk protection frameworks that safeguard Indian businesses at every stage of growth.
                </p>
                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <p>Age Requirement: 18+ years</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-[#031154] p-10 md:p-14 rounded-[40px] text-white shadow-2xl sticky top-10"
            >
              <Sparkles className="text-blue-400 mb-8" size={48} />
              <h3 className="text-3xl font-bold mb-6 tracking-tight text-white">How This Policy Applies</h3>
              <ul className="space-y-6">
                {[
                  "Clients, prospective clients, and their authorized representatives",
                  "Visitors to our website",
                  "Individuals interacting with Vestigo in connection with insurance broking and advisory services",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="text-blue-400 mt-1 shrink-0" size={24} />
                    <span className="text-lg md:text-xl font-medium text-white/90 leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRIVACY BENTO GRID */}
      <section className="py-10 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-left">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-4">Architecture of Care</h2>
            <p className="text-4xl md:text-5xl font-black text-[#031154] tracking-tighter">Detailed Governance Sections</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policySections.map((section) => (
              <motion.div
                key={section.id}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[380px]"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shrink-0">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-6 tracking-tight leading-tight">{section.title}</h3>
                {section.content && <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 font-normal">{section.content}</p>}
                {section.list && (
                  <ul className="space-y-4 mt-auto">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 p-4 bg-slate-50/80 rounded-2xl text-slate-700 text-sm md:text-base font-medium border border-slate-100/50">
                        <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* SECURITY & BREACH HIGHLIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-slate-900 to-[#031154] rounded-[50px] p-10 md:p-20 text-white relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <Gavel className="text-blue-400 mb-8" size={64} />
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Security & Breach Response</h2>
                <p className="text-lg md:text-xl text-blue-100/70 leading-relaxed font-light max-w-2xl">
                  Vestigo implements technical safeguards and Zero-trust architecture to protect against unauthorized access, loss, or misuse. Prompt remedial action is taken for any data breaches under DPDP Act requirements.
                </p>
              </div>
              <div className="w-full lg:w-1/3 grid grid-cols-2 gap-6 text-center">
                {[
                  { label: "Remedial", val: "Prompt Action" },
                  { label: "Notify", val: "Affected Parties" },
                  { label: "Safeguard", val: "Technical/Org" },
                  { label: "Compliance", val: "DPDP Response" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/10">
                    <p className="text-blue-400 font-black text-xl mb-1">{stat.label}</p>
                    <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest">{stat.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GRIEVANCE REDRESSAL (MAIN) */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-50/50 rounded-[60px] p-10 md:p-24 flex flex-col lg:flex-row justify-between items-center gap-16">
            <div className="max-w-xl text-center lg:text-left space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-[#031154] tracking-tight">Grievance Redressal</h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                You possess rights to access, correct, or erase data. We acknowledge grievances within{" "}
                <span className="text-blue-600 font-bold underline underline-offset-4 decoration-2">3 working days</span>{" "}
                and aim to resolve them within{" "}
                <span className="text-blue-600 font-bold underline underline-offset-4 decoration-2">15 working days</span>.
              </p>
            </div>
            <div className="flex flex-col items-center gap-10">
              <a href="mailto:gro@vestigoinsurance.com" className="flex items-center gap-6 px-12 py-8 bg-white rounded-[40px] shadow-2xl shadow-blue-900/10 hover:scale-[1.02] transition-transform group border border-blue-100/50">
                <Mail size={32} className="text-blue-600" />
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Direct Redressal</p>
                  <p className="text-xl md:text-2xl font-black text-[#031154]">gro@vestigoinsurance.com</p>
                </div>
              </a>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05 }} className="bg-[#020617] text-white px-14 py-8 rounded-full font-black text-lg flex items-center gap-4 shadow-2xl hover:bg-blue-600 transition-colors shadow-blue-900/20">
                  Talk to specialist <ArrowRight size={24} />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* PART 2: AML POLICY                                                        */}
      {/* ========================================================================= */}

      {/* AML SECTION HEADER */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] bg-[#020617] overflow-hidden flex items-center py-20 mt-10">
        <div className="absolute inset-0 z-0">
          <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full lg:w-1/2 flex justify-center">
            <Image src="/policy/p3-hero.jpeg" alt="Financial Security Background" width={600} height={450} priority className="rounded-[2rem] shadow-2xl border border-white/10 w-full max-w-md lg:max-w-lg object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-blue-400/20 bg-blue-500/10 backdrop-blur-md text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
              <ShieldAlert size={14} className="animate-pulse" />
              Financial Integrity & Compliance
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
              Anti-Fraud & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">AML Policy</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
              Zero-tolerance frameworks preventing money laundering and financial crime to safeguard the integrity of our insurance ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AML REGULATORY FOUNDATION */}
      <section className="relative z-20 py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black text-[#031154] tracking-tight leading-tight">Objective & <br /> Regulatory Commitment</h2>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-[95%]">
                  Vestigo Insurance Advisory is committed to preventing fraud and money laundering in strict accordance with national financial regulations.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "IRDAI", desc: "Industry Regulations" },
                  { title: "PMLA 2002", desc: "Anti-Money Laundering" },
                  { title: "RBI", desc: "Government Directives" },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <FileCheck className="text-blue-600 mb-3" size={24} />
                    <h4 className="text-[#031154] font-black text-lg">{item.title}</h4>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-5 bg-[#031154] p-10 md:p-14 rounded-[40px] text-white shadow-2xl space-y-10">
              <div>
                <AlertOctagon className="text-blue-400 mb-6" size={40} />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Zero-Tolerance Approach</h3>
                <p className="text-blue-100/70 mb-8 text-lg leading-relaxed font-light">
                  We adopt an uncompromising stance toward fraudulent, suspicious, or illegal activities. Protection of stakeholders is our primary mandate.
                </p>
                <div className="pt-8 border-t border-white/10">
                  <p className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-4">Integrity Hotline</p>
                  <a href="mailto:compliance@vestigoinsurance.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <span className="text-xl font-bold border-b border-transparent group-hover:border-blue-400 transition-all">compliance@vestigoinsurance.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AML BENTO GRID */}
      <section className="py-10 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-left border-l-4 border-blue-600 pl-8">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-4">Operational Safeguards</h2>
            <p className="text-4xl md:text-5xl font-black text-[#031154] tracking-tighter">Policy Framework</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {amlFramework.map((section) => (
              <motion.div key={section.id} whileHover={{ y: -8 }} className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[400px]">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shrink-0">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-8 tracking-tight leading-tight">{section.title}</h3>
                <ul className="space-y-4 mt-auto">
                  {section.list?.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 p-5 bg-slate-50/80 rounded-2xl text-slate-700 text-sm md:text-base font-medium border border-slate-100/50">
                      <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          {/* REPORTING & COOPERATION */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-gradient-to-br from-slate-900 to-[#031154] rounded-[50px] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <Scale className="text-blue-400 mb-8" size={56} />
                <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight text-white">Reporting & Cooperation</h2>
                <p className="text-xl text-blue-100/70 leading-relaxed font-light max-w-3xl">
                  Vestigo reserves the right to cooperate fully with insurers, regulators, and law enforcement agencies. Suspicious activity reporting is mandated as per legal requirements.
                </p>
              </div>
              <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 text-center">
                  <p className="text-blue-400 font-black text-2xl mb-1">Direct Liaison</p>
                  <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest text-white">Law Enforcement Agencies</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PART 3: GRIEVANCE & COOKIE POLICY                                         */}
      {/* ========================================================================= */}

      {/* GRIEVANCE HEADER */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] bg-[#020617] overflow-hidden flex items-center py-20 mt-10">
        <div className="absolute inset-0 z-0">
          <motion.div animate={{ scale: [1, 1.3, 1], x: [0, -40, 0] }} transition={{ duration: 14, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full lg:w-1/2 flex justify-center">
            <Image src="/policy/p2-hero.jpeg" alt="Compliance Background" width={600} height={450} priority className="rounded-[2rem] shadow-2xl border border-white/10 w-full max-w-md lg:max-w-lg object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-blue-400/20 bg-blue-500/10 backdrop-blur-md text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
              <ShieldCheck size={14} className="animate-pulse" />
              Transparent Resolution & Privacy
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
              Grievance <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">REDRESSAL Policy</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
              Vestigo is committed to transparent and timely grievance resolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TRANSPARENT RESOLUTION */}
      <section className="relative z-20 py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black text-[#031154] tracking-tight leading-tight">Transparent <br /> Grievance Resolution</h2>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-[95%]">
                  Vestigo is committed to a transparent and timely resolution process. We ensure that every concern is addressed with professional integrity and regulatory alignment.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 flex flex-col justify-between">
                  <Clock className="text-blue-600 mb-4" size={32} />
                  <div>
                    <h4 className="text-[#031154] font-black text-xl mb-2">3 Working Days</h4>
                    <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Initial Acknowledgement</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 flex flex-col justify-between">
                  <CheckCircle2 className="text-blue-600 mb-4" size={32} />
                  <div>
                    <h4 className="text-[#031154] font-black text-xl mb-2">15 Working Days</h4>
                    <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Targeted Resolution</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-5 bg-[#031154] p-10 md:p-14 rounded-[40px] text-white shadow-2xl space-y-10">
              <div>
                <Scale className="text-blue-400 mb-6" size={40} />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Escalation Matrix</h3>
                <p className="text-blue-100/70 mb-8 text-lg leading-relaxed">
                  If your grievance remains unresolved through our internal process, you have the right to escalate the matter to the regulator.
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
                  <AlertCircle className="text-blue-400 shrink-0" size={24} />
                  <p className="text-sm font-semibold tracking-wide uppercase">Unresolved concerns may be escalated to IRDAI</p>
                </div>
              </div>
              <div className="pt-8 border-t border-white/10">
                <p className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-4">Direct Contact</p>
                <a href="mailto:gro@vestigoinsurance.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <span className="text-xl font-bold border-b border-transparent group-hover:border-blue-400 transition-all">gro@vestigoinsurance.com</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COOKIE POLICY BENTO GRID */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-left border-l-4 border-blue-600 pl-8">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-4">Digital Interaction</h2>
            <p className="text-4xl md:text-5xl font-black text-[#031154] tracking-tighter">Cookie Policy</p>
            <p className="text-slate-600 text-md md:text-lg leading-relaxed max-w-3xl mt-6">
              Cookies are small text files stored on your device when you visit a website. They help improve website functionality, user experience, and security.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -8 }} className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shrink-0">
                <Cookie size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-6 tracking-tight">Purpose & Usage</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
                This Cookie Policy explains how Vestigo Insurance Advisory uses cookies and similar technologies on its website.
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -8 }} className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shrink-0">
                <FileText size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-6 tracking-tight">Types We Use</h3>
              <ul className="space-y-4 mt-auto">
                <li className="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
                  <p className="text-[#031154] font-bold text-lg mb-1">Essential Cookies</p>
                  <p className="text-slate-500 text-md">Required for basic website functionality and security.</p>
                </li>
                <li className="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
                  <p className="text-[#031154] font-bold text-lg mb-1">Performance & Analytics</p>
                  <p className="text-slate-500 text-md">Used to improve navigation and understand usage patterns.</p>
                </li>
              </ul>
            </motion.div>
            <motion.div whileHover={{ y: -8 }} className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shrink-0">
                <Settings size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-6 tracking-tight">Managing Cookies</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                Most browsers allow control over cookies through settings. Disabling them may affect certain website functionalities.
              </p>
              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-blue-600 font-bold text-sm uppercase tracking-widest">
                <span>User Control Enabled</span>
                <Settings size={16} />
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -8 }} className="lg:col-span-3 bg-gradient-to-br from-slate-900 to-[#031154] rounded-[50px] p-10 md:p-16 text-white relative overflow-hidden">
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1">
                  <RefreshCw className="text-blue-400 mb-8 animate-spin-slow" size={56} />
                  <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Policy Updates</h2>
                  <p className="text-xl text-blue-100/70 leading-relaxed font-light max-w-3xl">
                    Our Cookie Policy is updated periodically. Continued use of the website following any changes constitutes your acceptance of the updated framework.
                  </p>
                </div>
                <div className="w-full lg:w-1/4 flex flex-col gap-4">
                  <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 text-center">
                    <p className="text-blue-400 font-black text-2xl mb-1">March 2026</p>
                    <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Last Revised Date</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PART 4: ISMS & TERMS OF USE                                               */}
      {/* ========================================================================= */}

      {/* ISMS HEADER */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] bg-[#0F172A] overflow-hidden flex items-center py-20 mt-10">
        <div className="absolute inset-0 z-0">
          <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full lg:w-1/2 flex justify-center">
            <img src="/policy/p1-hero.jpeg" alt="Risk Assessment" className="rounded-[2rem] shadow-2xl border-8 border-white/5 w-full max-w-sm md:max-w-md lg:max-w-lg" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl text-white text-center lg:text-left">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 backdrop-blur-md">
              <Database size={16} />
              Information Security & Governance
            </motion.div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-6">
              ISMS & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Terms of Use</span>
            </h2>
            <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Our commitment to safeguarding information assets and defining the standard of engagement for our digital ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ISMS CORE SECTION */}
      <section className="relative z-20 py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black text-[#031154] tracking-tight leading-tight">Information Security <br /> Management System</h2>
                <p className="text-slate-600 text-lg leading-relaxed max-w-[95%]">
                  Vestigo is committed to safeguarding information assets and ensuring the
                  <span className="text-blue-600 font-bold px-1">Confidentiality, Integrity, and Availability</span>
                  of information across all business operations.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                <h4 className="text-[#031154] font-black text-xl mb-4">Mandatory Compliance</h4>
                <p className="text-slate-500 leading-relaxed text-base italic">
                  &quot;All employees, associates, and third-party vendors are strictly required to comply with this policy to ensure a zero-trust security environment.&quot;
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-5 space-y-8">
              {ismsCommitments.map((sec) => (
                <div key={sec.id} className="bg-[#031154] p-10 rounded-[40px] text-white shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400">
                      {sec.icon}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">{sec.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {sec.list?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-blue-100/80 text-sm md:text-base font-medium">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TERMS OF USE BENTO GRID */}
      <section className="py-10 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-left border-l-4 border-blue-600 pl-8">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-4">Legal Framework</h2>
            <p className="text-4xl md:text-5xl font-black text-[#031154] tracking-tighter">Terms of Use</p>
            <p className="mt-4 text-slate-500 font-medium tracking-wide">Insurance is a subject matter of solicitation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -5 }} className="lg:col-span-2 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm">
              <Globe className="text-blue-500 mb-6" size={40} />
              <h3 className="text-2xl font-black text-slate-800 mb-6 tracking-tight">1. General Terms</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                This website is owned and operated by Vestigo Insurance Advisory, a company incorporated under the Companies Act, 2013 and licensed by the
                <span className="font-bold text-blue-600 ml-1">Insurance Regulatory and Development Authority of India (IRDAI)</span>. <br /> <br />
                By accessing, browsing, or using this website, you agree to be bound by these Terms of Use, along with our Privacy Policy, Cookie Policy, Disclaimer, and other policies published on this website. If you do not agree, you must refrain from using the website.
              </p>
            </motion.div>
            {termsSections.map((section) => (
              <motion.div key={section.id} whileHover={{ y: -8 }} className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shrink-0">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-6 tracking-tight leading-tight">{section.title}</h3>
                {section.content && <p className="text-slate-500 text-base leading-relaxed mb-6">{section.content}</p>}
                {section.list && (
                  <ul className="space-y-4 mt-auto">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 p-4 bg-slate-50/80 rounded-2xl text-slate-700 text-sm font-medium border border-slate-100/50">
                        <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
            <motion.div whileHover={{ y: -8 }} className="lg:col-span-3 bg-gradient-to-br from-slate-900 to-[#031154] rounded-[50px] p-10 md:p-16 text-white relative overflow-hidden">
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1">
                  <Scale className="text-blue-400 mb-8" size={56} />
                  <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Limitation of Liability</h2>
                  <p className="text-xl text-blue-100/70 leading-relaxed font-light max-w-3xl">
                    To the maximum extent permitted by law, Vestigo shall not be liable for any direct, indirect, incidental, consequential, or special loss or damage, including loss of profits, data, goodwill, or business, arising out of:
                  </p>
                </div>
                <div className="w-full lg:w-1/4 grid grid-cols-1 gap-4">
                  {[{ label: "use or inability to use the website" }, { label: "reliance on website content" }, { label: "technical interruptions or errors" }].map((stat, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 text-center">
                      <p className="text-blue-400 font-black text-xl mb-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -8 }} className="lg:col-span-3 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8">
                  <MapPin size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-6 tracking-tight">Governing Law and Jurisdiction</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  These Terms shall be governed by and construed in accordance with the laws of India. Courts at Vadodara, Gujarat, shall have exclusive jurisdiction.
                </p>
              </div>
              <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                  <p className="text-blue-600 font-black text-xl">India</p>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Governing Law</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                  <p className="text-blue-600 font-black text-xl">Vadodara, Gujarat</p>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Exclusive Jurisdiction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* PART 5: WHISTLEBLOWER & ETHICS POLICY                                     */}
      {/* ========================================================================= */}

      {/* WHISTLEBLOWER HEADER */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] bg-[#020617] overflow-hidden flex items-center py-20 mt-10">
        <div className="absolute inset-0 z-0">
          <motion.div animate={{ scale: [1, 1.3, 1], x: [0, -40, 0] }} transition={{ duration: 14, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full lg:w-1/2 flex justify-center">
            <Image src="/policy/p4-hero.jpeg" alt="Ethics Background" width={600} height={450} priority className="rounded-[2rem] shadow-2xl border border-white/10 w-full max-w-md lg:max-w-lg object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-blue-400/20 bg-blue-500/10 backdrop-blur-md text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
              <HeartHandshake size={14} className="animate-pulse" />
              Transparency & Accountability
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
              Ethics & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Whistleblower</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
              Fostering a culture of integrity through secure mechanisms for reporting misconduct and upholding the highest ethical standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE PURPOSE */}
      <section className="relative z-20 py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black text-[#031154] tracking-tight leading-tight">Policy <br /> Objective</h2>
                <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed max-w-[95%] font-normal">
                  <p>Vestigo Insurance Advisory encourages ethical conduct, transparency, and accountability as the cornerstones of our operational philosophy.</p>
                  <p>
                    This policy provides a dedicated mechanism for reporting concerns regarding
                    <span className="text-blue-600 font-bold px-1">unethical behavior, misconduct, or regulatory violations</span>
                    without fear of reprisal.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-blue-600" size={32} />
                </div>
                <div>
                  <h4 className="text-[#031154] font-black text-xl mb-2 tracking-tight">Our Ethical Promise</h4>
                  <p className="text-slate-500 text-base leading-relaxed">
                    We are committed to reviewing all reports objectively and taking appropriate remedial action to preserve the trust of our clients and partners.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-5 bg-[#031154] p-10 md:p-14 rounded-[40px] text-white shadow-2xl space-y-10">
              <div>
                <Lock className="text-blue-400 mb-6" size={40} />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Protection Policy</h3>
                <p className="text-blue-100/70 mb-8 text-lg leading-relaxed font-light">
                  Vestigo strictly prohibits retaliation against any individual who reports concerns in good faith.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <CheckCircle2 className="text-blue-400" size={20} />
                    <span className="font-semibold text-sm md:text-base">Guaranteed Confidentiality</span>
                  </li>
                  <li className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <CheckCircle2 className="text-blue-400" size={20} />
                    <span className="font-semibold text-sm md:text-base">Non-Retaliation Assurance</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8 border-t border-white/10">
                <p className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-4">Reporting Mechanism</p>
                <a href="mailto:whistleblower@vestigoinsurance.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                    <Mail size={24} />
                  </div>
                  <span className="text-lg md:text-xl font-bold border-b-2 border-transparent group-hover:border-blue-400 transition-all break-all md:break-normal">
                    whistleblower@vestigoinsurance.com
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ETHICS GOVERNANCE BENTO GRID */}
      <section className="py-10 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-left border-l-4 border-blue-600 pl-8">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-4">Governance Matrix</h2>
            <p className="text-4xl md:text-5xl font-black text-[#031154] tracking-tighter">Operational Parameters</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {ethicsFramework.map((section) => (
              <motion.div key={section.id} whileHover={{ y: -8 }} className="bg-white p-10 md:p-12 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[400px]">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shrink-0">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-8 tracking-tight leading-tight">{section.title}</h3>
                <ul className="space-y-4 mt-auto">
                  {section.list?.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 p-5 bg-slate-50/80 rounded-2xl text-slate-700 text-base md:text-lg font-medium border border-slate-100/50">
                      <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-2" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION (COMBINED) */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-[#031154] tracking-tight">Need further clarity?</h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              Our compliance team ensures that every report, inquiry, and grievance is handled with the utmost sensitivity and objective scrutiny. Help us maintain the standard of excellence.
            </p>
            <div className="flex justify-center pt-8">
               <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05 }} className="bg-blue-600 text-white px-14 py-6 rounded-full font-black text-lg flex items-center gap-4 shadow-2xl hover:bg-[#020617] transition-colors shadow-blue-900/20">
                  Contact Compliance Team <ArrowRight size={24} />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

// ==========================================
// TARGET SVG ICON (Used in AML Array)
// ==========================================
function Target({ className, size = 24 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}