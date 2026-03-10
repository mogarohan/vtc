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
} from "lucide-react";

// --- Data ---
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

export default function PrivacyPolicy() {
  const containerRef = useRef(null);
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

      video.muted = true; // ✅ mute after first play
      video.loop = true; // ✅ enable loop
      video.play(); // ✅ restart smoothly
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-x-hidden">
      {/* 1. MASTER HERO SECTION */}
      <section
        ref={containerRef}
        className="relative min-h-[85vh] bg-[#040a26] overflow-hidden"
      >
        {/* ================= VIDEO ================= */}
        <div
          className="absolute top-0 left-0 w-full h-[45vh] 
                  lg:h-full lg:w-1/2 lg:left-auto lg:right-0 z-0"
        >
          <video
            ref={videoRef}
            autoPlay
            playsInline
            preload="auto"
            muted={false}
            loop={false}
            className="
                    w-full h-full
                    
                    object-cover
                    object-center
                    
                    max-md:object-cover
                    max-md:object-center
                  "
          >
            <source src="/heropolicy.mp4" type="video/mp4" />
          </video>

          {/* Desktop fade effect */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020617]/40 to-transparent" />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] px-6">
          {/* LEFT TEXT (Adjust as needed) */}
          <div
            className="flex pt-[45vh] lg:pt-0
                    items-end lg:items-center"
          >
            <motion.div
              style={{ y, opacity }}
              className="max-w-xl pb-12 md:pb-0"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-400 text-xs font-bold">
                <Sparkles size={14} />
                Secure Data Governance
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Trust &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Transparency
                </span>
              </h1>

              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed mb-8">
                Compliance-first frameworks protecting the digital interests of
                India&apos;s growing enterprises under the DPDP Act 2023.
              </p>
            </motion.div>
          </div>

          {/* RIGHT EMPTY COLUMN */}
          <div className="hidden md:block" />
        </div>

        {/* ================= OVERLAY PATTERN ================= */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </section>

      {/* 2. CORE COMMITMENT (Introduction & Scope) */}
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
                    Vestigo Insurance Advisory respects the privacy of
                    individuals and is committed to protecting personal data in
                    accordance with the{" "}
                    <span className="text-blue-600 font-semibold underline decoration-blue-200 underline-offset-4">
                      Digital Personal Data Protection Act, 2023 (DPDP Act),
                    </span>{" "}
                    the Information Technology Act, 2000, and applicable
                    regulations issued by the Insurance Regulatory and
                    Development Authority of India (IRDAI).
                  </p>
                  <p>
                    By accessing or using this website or by sharing personal
                    data with us, you acknowledge that you have read and
                    understood this Privacy Policy and consent to the processing
                    of your personal data in accordance with its terms.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-2xl shadow-blue-900/5 border border-slate-100 max-w-2xl">
                <h4 className="text-[#031154] font-black text-xl mb-4 uppercase tracking-tight">
                  Our Mandate
                </h4>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  Vestigo is an IRDAI Licensed Broker dedicated to designing
                  risk protection frameworks that safeguard Indian businesses at
                  every stage of growth.
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
              <h3 className="text-3xl font-bold mb-6 tracking-tight text-white">
                How This Policy Applies
              </h3>
              <ul className="space-y-6">
                {[
                  "Clients, prospective clients, and their authorized representatives",
                  "Visitors to our website",
                  "Individuals interacting with Vestigo in connection with insurance broking and advisory services",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2
                      className="text-blue-400 mt-1 shrink-0"
                      size={24}
                    />
                    <span className="text-lg md:text-xl font-medium text-white/90 leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. EXPANDED BENTO GRID (Detailed Governance Sections) */}
      <section className="py-10 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-left">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
              Architecture of Care
            </h2>
            <p className="text-4xl md:text-5xl font-black text-[#031154] tracking-tighter">
              Detailed Governance Sections
            </p>
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
                <h3 className="text-2xl font-black text-slate-800 mb-6 tracking-tight leading-tight">
                  {section.title}
                </h3>
                {section.content && (
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 font-normal">
                    {section.content}
                  </p>
                )}
                {section.list && (
                  <ul className="space-y-4 mt-auto">
                    {section.list.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 p-4 bg-slate-50/80 rounded-2xl text-slate-700 text-sm md:text-base font-medium border border-slate-100/50"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* 4. SECURITY & BREACH HIGHLIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 bg-gradient-to-br from-slate-900 to-[#031154] rounded-[50px] p-10 md:p-20 text-white relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <Gavel className="text-blue-400 mb-8" size={64} />
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
                  Security & Breach Response
                </h2>
                <p className="text-lg md:text-xl text-blue-100/70 leading-relaxed font-light max-w-2xl">
                  Vestigo implements technical safeguards and Zero-trust
                  architecture to protect against unauthorized access, loss, or
                  misuse. Prompt remedial action is taken for any data breaches
                  under DPDP Act requirements.
                </p>
              </div>
              <div className="w-full lg:w-1/3 grid grid-cols-2 gap-6 text-center">
                {[
                  { label: "Remedial", val: "Prompt Action" },
                  { label: "Notify", val: "Affected Parties" },
                  { label: "Safeguard", val: "Technical/Org" },
                  { label: "Compliance", val: "DPDP Response" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/10"
                  >
                    <p className="text-blue-400 font-black text-xl mb-1">
                      {stat.label}
                    </p>
                    <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest">
                      {stat.val}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. GRIEVANCE REDRESSAL */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-50/50 rounded-[60px] p-10 md:p-24 flex flex-col lg:flex-row justify-between items-center gap-16">
            <div className="max-w-xl text-center lg:text-left space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-[#031154] tracking-tight">
                Grievance Redressal
              </h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                You possess rights to access, correct, or erase data. We
                acknowledge grievances within{" "}
                <span className="text-blue-600 font-bold underline underline-offset-4 decoration-2">
                  3 working days
                </span>{" "}
                and aim to resolve them within{" "}
                <span className="text-blue-600 font-bold underline underline-offset-4 decoration-2">
                  15 working days
                </span>
                .
              </p>
            </div>
            <div className="flex flex-col items-center gap-10">
              <a
                href="mailto:gro@vestigoinsurance.com"
                className="flex items-center gap-6 px-12 py-8 bg-white rounded-[40px] shadow-2xl shadow-blue-900/10 hover:scale-[1.02] transition-transform group border border-blue-100/50"
              >
                <Mail size={32} className="text-blue-600" />
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                    Direct Redressal
                  </p>
                  <p className="text-xl md:text-2xl font-black text-[#031154]">
                    gro@vestigoinsurance.com
                  </p>
                </div>
              </a>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#020617] text-white px-14 py-8 rounded-full font-black text-lg flex items-center gap-4 shadow-2xl hover:bg-blue-600 transition-colors shadow-blue-900/20"
                >
                  Talk to specialist <ArrowRight size={24} />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
