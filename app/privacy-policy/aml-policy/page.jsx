"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  ArrowRight,
  Gavel,
  Scale,
  UserCheck,
  Eye,
  AlertOctagon,
  Mail,
  FileCheck,
  Search,
  ShieldAlert,
} from "lucide-react";

// --- Data: AML Framework & Measures ---
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

export default function AMLPolicy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section
        ref={containerRef}
        className="relative min-h-[60vh] bg-[#020617] overflow-hidden flex items-center pt-24 pb-20"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, -40, 0] }}
            transition={{ duration: 14, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px]"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <Image
              src="/policy/p3-hero.jpeg"
              alt="Financial Security Background"
              width={600}
              height={450}
              priority
              className="rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-white/10 w-full max-w-md lg:max-w-lg object-cover"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            style={{ y, opacity }}
            className="max-w-3xl text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-blue-400/20 bg-blue-500/10 backdrop-blur-md text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
              <ShieldAlert size={14} className="animate-pulse" />
              Financial Integrity & Compliance
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              Anti-Fraud & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                AML Policy
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
              Zero-tolerance frameworks preventing money laundering and
              financial crime to safeguard the integrity of our insurance
              ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. REGULATORY FOUNDATION SECTION */}
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
                  Objective & <br /> Regulatory Commitment
                </h2>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-[95%]">
                  Vestigo Insurance Advisory is committed to preventing fraud
                  and money laundering in strict accordance with national
                  financial regulations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "IRDAI", desc: "Industry Regulations" },
                  { title: "PMLA 2002", desc: "Anti-Money Laundering" },
                  { title: "RBI", desc: "Government Directives" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 p-6 rounded-3xl border border-slate-100"
                  >
                    <FileCheck className="text-blue-600 mb-3" size={24} />
                    <h4 className="text-[#031154] font-black text-lg">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-[#031154] p-10 md:p-14 rounded-[40px] text-white shadow-2xl space-y-10"
            >
              <div>
                <AlertOctagon className="text-blue-400 mb-6" size={40} />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                  Zero-Tolerance Approach
                </h3>
                <p className="text-blue-100/70 mb-8 text-lg leading-relaxed font-light">
                  We adopt an uncompromising stance toward fraudulent,
                  suspicious, or illegal activities. Protection of stakeholders
                  is our primary mandate.
                </p>
                <div className="pt-8 border-t border-white/10">
                  <p className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-4">
                    Integrity Hotline
                  </p>
                  <a
                    href="mailto:compliance@vestigoinsurance.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <span className="text-xl font-bold border-b border-transparent group-hover:border-blue-400 transition-all">
                      compliance@vestigoinsurance.com
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID DATA SECTIONS */}
      <section className="py-10 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-left border-l-4 border-blue-600 pl-8">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
              Operational Safeguards
            </h2>
            <p className="text-4xl md:text-5xl font-black text-[#031154] tracking-tighter">
              Policy Framework
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {amlFramework.map((section) => (
              <motion.div
                key={section.id}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[400px]"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shrink-0">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-8 tracking-tight leading-tight">
                  {section.title}
                </h3>
                <ul className="space-y-4 mt-auto">
                  {section.list?.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 p-5 bg-slate-50/80 rounded-2xl text-slate-700 text-sm md:text-base font-medium border border-slate-100/50"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* 4. REPORTING & COOPERATION FULL-WIDTH */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 bg-gradient-to-br from-slate-900 to-[#031154] rounded-[50px] p-10 md:p-16 text-white relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <Scale className="text-blue-400 mb-8" size={56} />
                <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight text-white">
                  Reporting & Cooperation
                </h2>
                <p className="text-xl text-blue-100/70 leading-relaxed font-light max-w-3xl">
                  Vestigo reserves the right to cooperate fully with insurers,
                  regulators, and law enforcement agencies. Suspicious activity
                  reporting is mandated as per legal requirements.
                </p>
              </div>
              <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 text-center">
                  <p className="text-blue-400 font-black text-2xl mb-1">
                    Direct Liaison
                  </p>
                  <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest text-white">
                    Law Enforcement Agencies
                  </p>
                </div>
              </div>
            </div>
            {/* Background Decor */}
            <div
              className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-[#031154] tracking-tight">
              Need to report activity?
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              Any suspected fraud or misrepresentation must be reported
              immediately to our compliance officer for formal investigation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Re-using Lucide's Target icon which was missing in the import
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
