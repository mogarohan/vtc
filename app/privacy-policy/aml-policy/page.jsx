"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Target,
  Search,
  Mail,
  Scale,
  FileCheck,
  Fingerprint,
  Eye,
  AlertTriangle,
  Gavel,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

// ==========================================
// DATA ARRAYS
// ==========================================

const amlObjectives = [
  {
    title: "Detect & Prevent",
    desc: "Detect and prevent fraudulent insurance practices across all operations.",
    icon: <Search className="text-blue-400" />,
  },
  {
    title: "Identify Risks",
    desc: "Proactively identify suspicious transactions and illegal financial activities.",
    icon: <Eye className="text-blue-400" />,
  },
  {
    title: "KYC Compliance",
    desc: "Ensure strict compliance with AML and KYC regulatory requirements.",
    icon: <Fingerprint className="text-blue-400" />,
  },
  {
    title: "Stakeholder Protection",
    desc: "Protect the interests of our clients, insurers, and all business stakeholders.",
    icon: <ShieldCheck className="text-blue-400" />,
  },
];

const amlMeasures = [
  {
    id: "diligence",
    title: "Client Due Diligence",
    text: "Rigorous KYC verification processes for all individual and corporate clients.",
  },
  {
    id: "monitoring",
    title: "Transaction Monitoring",
    text: "Continuous oversight of unusual or suspicious financial patterns.",
  },
  {
    id: "reporting",
    title: "Regulatory Reporting",
    text: "Mandatory reporting of suspicious activities to insurers and relevant authorities.",
  },
  {
    id: "controls",
    title: "Internal Controls",
    text: "Regular employee awareness programs and internal audit safeguards.",
  },
];

export default function AMLPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      {/* 1. MASTER HERO SECTION - SPLIT LAYOUT */}
      <section className="relative bg-[#020617] text-white overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-16 md:py-24">
            {/* LEFT SIDE: IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-[2rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                <img
                  src="/policy/p3-hero.jpeg"
                  alt="Financial Integrity"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl" />
            </motion.div>

            {/* RIGHT SIDE: CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-[10px] md:text-xs font-bold uppercase mb-6 tracking-widest">
                <ShieldAlert size={14} /> Financial Integrity
              </div>
              <h1 className="text-3xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
                Anti-Fraud & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  AML Policy
                </span>
              </h1>
              <p className="text-sm md:text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-light">
                Vestigo is committed to maintaining the highest standards of
                financial conduct, preventing money laundering, and eliminating
                insurance fraud.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. REGULATORY FOUNDATION (OBJECTIVE) */}
      <section className="py-16 md:py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-blue-600">
                Objective
              </h2>
              <h3 className="text-3xl md:text-5xl font-black text-[#031154] tracking-tight leading-tight">
                Our Commitment to <br /> Legal Compliance
              </h3>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Vestigo Insurance Brokers Pvt. Ltd. is strictly committed to
                preventing fraud, money laundering, and financial crime in
                accordance with:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "IRDAI Regulations",
                  "Prevention of Money Laundering Act, 2002 (PMLA)",
                  "Applicable RBI Directives",
                  "Government Financial Mandates",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 md:p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-colors"
                  >
                    <FileCheck className="text-blue-500 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-[#031154] text-[11px] md:text-sm uppercase tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#031154] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/20 transition-colors" />
                <AlertTriangle
                  className="text-blue-400 mb-6 md:mb-8"
                  size={48}
                />
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Zero-Tolerance Framework
                </h4>
                <p className="text-blue-100/70 text-sm md:text-base leading-relaxed mb-8 font-light italic">
                  &quot;Vestigo adopts a zero-tolerance approach toward
                  fraudulent, suspicious, or illegal activities. Protection of
                  stakeholders is our absolute priority.&quot;
                </p>
                <div className="w-12 h-1 bg-blue-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POLICY FRAMEWORK (BENTO) */}
      <section className="py-12 md:py-16 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
              Framework
            </h2>
            <p className="text-3xl md:text-5xl font-black text-[#031154] tracking-tighter">
              Policy Aims
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amlObjectives.map((obj, i) => (
              <div
                key={i}
                className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <div className="shrink-0 scale-90 md:scale-100">
                    {obj.icon}
                  </div>
                </div>
                <h4 className="text-lg md:text-xl font-black text-slate-800 mb-4">
                  {obj.title}
                </h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. KEY MEASURES (LIST LAYOUT) */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {amlMeasures.map((measure) => (
                  <div
                    key={measure.id}
                    className="flex gap-4 md:gap-6 p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all border-l-4 border-l-blue-500"
                  >
                    <div className="flex-1">
                      <h4 className="text-base md:text-lg font-black text-[#031154] mb-2 uppercase tracking-wide">
                        {measure.title}
                      </h4>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                        {measure.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
              <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-blue-600">
                Key Measures
              </h2>
              <h3 className="text-3xl md:text-6xl font-black text-[#031154] tracking-tight leading-tight">
                Operational <br /> Safeguards
              </h3>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-md">
                We implement technical and organizational controls to ensure
                that every transaction is verified and monitored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. REPORTING SECTION (FINAL CTA) */}
      <section className="py-16 md:py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-[#031154] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div
              className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 md:mb-8 border border-blue-400/30 mx-auto lg:mx-0">
                  <Gavel
                    size={32}
                    className="text-blue-400 scale-75 md:scale-100"
                  />
                </div>
                <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 tracking-tight">
                  Reporting
                </h2>
                <p className="text-base md:text-xl text-blue-100/70 leading-relaxed font-light max-w-2xl">
                  Any suspected fraud, misrepresentation, or suspicious activity
                  must be reported immediately. Vestigo reserves the right to
                  cooperate with law enforcement agencies as mandated by law.
                </p>
              </div>

              <div className="w-full lg:w-auto">
                <a
                  href="mailto:compliance@vestigoinsurance.com"
                  className="group flex flex-col sm:flex-row items-center gap-4 md:gap-6 p-6 md:p-8 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 hover:bg-white hover:text-[#031154] transition-all"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0">
                    <Mail
                      size={28}
                      className="group-hover:scale-110 transition-transform scale-75 md:scale-100"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">
                      Compliance Desk
                    </p>
                    <p className="text-base md:text-2xl font-black break-all">
                      compliance@vestigoinsurance.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <footer className="py-12 bg-white text-center border-t border-slate-100 px-6">
        <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 leading-relaxed">
          <Scale size={16} className="hidden md:block shrink-0" />
          <span>Insurance is a subject matter of solicitation</span>
          <span className="hidden md:block">|</span>
          <span>
            IRDAI Broker License No. 1131 direct broker (General & Life)
          </span>
        </p>
      </footer>
    </div>
  );
}
