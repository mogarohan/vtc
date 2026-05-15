"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageSquareWarning,
  Cookie,
  HeartHandshake,
  Clock,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Users,
  AlertCircle,
  Settings,
  Scale,
  RefreshCcw,
  ShieldAlert,
  Info,
  FileText,
  Gavel,
  ShieldX,
} from "lucide-react";

export default function OtherPoliciesPage() {
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
                {/* Ensure you have this image in your public folder or update the path */}
                <img
                  src="/policy/p4-hero.jpeg"
                  alt="Ethics and Governance"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/40 to-transparent" />
              </div>
              {/* Decorative element */}
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
                <HeartHandshake size={14} /> Operational Ethics
              </div>
              <h1 className="text-3xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
                Governance & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Ethics Framework
                </span>
              </h1>
              <p className="text-sm md:text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-light">
                Detailed protocols for grievance resolution, data tracking
                transparency, and whistleblower protection ensuring a safe and
                compliant digital ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. GRIEVANCE REDRESSAL POLICY SECTION */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 border-l-4 border-blue-600 pl-4 md:pl-6">
            <h2 className="text-2xl md:text-4xl font-black text-[#031154] uppercase tracking-tight">
              Grievance Redressal Policy
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-medium mt-2">
              Transparent and timely resolution protocols.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-start">
            <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
              <h3 className="text-3xl md:text-4xl font-black text-[#031154] mb-6 leading-tight">
                Resolution <br />
                Commitment
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                Vestigo is committed to addressing every concern with
                professional integrity and regulatory alignment.
              </p>
              <div className="p-6 bg-slate-900 rounded-3xl text-white">
                <p className="text-[10px] uppercase text-blue-400 font-bold mb-2">
                  Contact Officer
                </p>
                <a
                  href="mailto:gro@vestigoinsurance.com"
                  className="text-base md:text-lg font-bold flex items-center gap-2 hover:text-blue-400 transition-colors break-all"
                >
                  <Mail size={18} className="shrink-0" />{" "}
                  gro@vestigoinsurance.com
                </a>
              </div>
            </div>

            <div className="w-full md:w-2/3 space-y-12 relative border-l-2 border-slate-100 ml-2 md:ml-0 pl-8 md:pl-16">
              {[
                {
                  title: "Initial Acknowledgement",
                  time: "Within 3 Working Days",
                  icon: <Clock />,
                  desc: "Every formal concern is registered and a tracking reference is provided.",
                },
                {
                  title: "Detailed Investigation",
                  time: "Ongoing Process",
                  icon: <FileText />,
                  desc: "Our compliance team reviews relevant data and policy frameworks.",
                },
                {
                  title: "Final Resolution",
                  time: "Within 15 Working Days",
                  icon: <CheckCircle2 />,
                  desc: "A formal response is issued. If unresolved, matters may be escalated to IRDAI.",
                },
              ].map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[41px] md:-left-[73px] top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white group-hover:scale-125 transition-transform" />
                  <div className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                      <div className="p-3 bg-blue-600 rounded-xl text-white">
                        {step.icon}
                      </div>
                      <span className="text-blue-600 font-bold text-[10px] md:text-xs uppercase bg-blue-50 px-3 py-1 rounded-full">
                        {step.time}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-[#031154] mb-2">
                      {step.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. COOKIE POLICY SECTION */}
      <section className="py-16 md:py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-4xl font-black text-[#031154] uppercase tracking-tight inline-block relative">
              Cookie Policy
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-slate-500 font-medium mt-4">
              Understanding how we use digital identifiers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1">
                  <h4 className="text-xl font-black text-[#031154] flex items-center gap-3 mb-4">
                    <Info className="text-blue-600" /> Purpose & Definition
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Cookies are small text files stored on your device. Vestigo
                    uses these to ensure website functionality, improve user
                    experience, and maintain security protocols.
                  </p>
                </div>
                <div className="flex-1 border-t-3 md:border-t-0 md:border-l-3 border-slate-100 pt-6 md:pt-0 md:pl-10">
                  <h4 className="text-xl font-black text-[#031154] flex items-center gap-3 mb-4">
                    <Settings className="text-blue-600" /> Managing Controls
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Users maintain full control. Most browsers allow you to
                    disable cookies through settings, though this may affect
                    certain features.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#031154] p-10 rounded-[3rem] text-white">
              <h4 className="text-xl font-black mb-6">Types We Use</h4>
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-blue-400 text-[15px] uppercase mb-1">
                    Essential
                  </p>
                  <p className="text-blue-100/70 text-[14px]">
                    Required for core functionality and security.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-blue-400 text-[15px] uppercase mb-1">
                    Analytics
                  </p>
                  <p className="text-blue-100/70 text-[14px]">
                    Understanding usage patterns to improve navigation.
                  </p>
                </div>
                <p className="text-[13px] text-blue-300/50 italic pt-4 border-t-2 border-white/15">
                  No behavioral advertising or intrusive profiling is used.
                </p>
              </div>
            </div>

            <div className="md:col-span-12 bg-gradient-to-r from-blue-600 to-blue-500 p-10 rounded-[3rem] text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-xl">
                  <RefreshCcw size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-black">Policy Updates</h4>
                  <p className="text-blue-100 text-sm">
                    This policy is updated periodically. Continued use
                    constitutes acceptance.
                  </p>
                </div>
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] bg-slate-900 px-6 py-3 rounded-full">
                Last Verified: March 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHISTLEBLOWER & ETHICS POLICY SECTION */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 border-r-4 border-red-500 pr-4 md:pr-6 text-right">
            <h2 className="text-2xl md:text-4xl font-black text-[#031154] uppercase tracking-tight">
              Whistleblower & Ethics Policy
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-medium mt-2">
              Upholding integrity through secure reporting.
            </p>
          </div>

          <div className="bg-[#020617] rounded-[3rem] md:rounded-[4rem] p-8 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-[10px] md:text-xs font-bold mb-8 uppercase tracking-widest">
                  <ShieldAlert size={14} /> Sensitive Reporting
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                  Ethics Protection <br /> Framework
                </h2>
                <p className="text-sm md:text-lg text-slate-400 font-light mb-10 md:mb-12 max-w-xl leading-relaxed">
                  Vestigo encourages transparency and provides a secure
                  mechanism for reporting concerns regarding unethical behavior
                  or misconduct.
                </p>

                <div className="p-6 md:p-8 bg-white/5 backdrop-blur-xl border border-blue-500/30 rounded-[2rem] md:rounded-[2.5rem] mb-10 md:mb-12">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <ShieldX className="text-red-400 shrink-0" size={32} />
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                        Anti-Retaliation Assurance
                      </h4>
                      <p className="text-slate-400 text-xs md:text-md italic leading-relaxed">
                        Vestigo strictly prohibits retaliation against any
                        individual who reports concerns in good faith.
                        Confidentiality shall be maintained to the extent
                        possible.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-blue-400">
                    Secure Submission
                  </p>
                  <a
                    href="mailto:whistleblower@vestigoinsurance.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shrink-0">
                      <Mail size={24} />
                    </div>
                    <span className="text-sm md:text-xl font-bold border-b-2 border-transparent group-hover:border-blue-500 transition-all break-all">
                      whistleblower@vestigoinsurance.com
                    </span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 md:p-8 bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-[2rem] text-white">
                  <h4 className="text-base md:text-lg font-black uppercase mb-6 flex items-center gap-3">
                    <Users className="text-blue-600" size={20} /> Scope
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Employees",
                      "Directors",
                      "Consultants",
                      "Vendors",
                      "Associates",
                    ].map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white/10 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 md:p-8 bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-[2rem] text-white">
                  <h4 className="text-base md:text-lg font-black uppercase mb-6 flex items-center gap-3">
                    <AlertCircle className="text-red-600" size={20} />{" "}
                    Reportable Matters
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Fraud & Irregularities",
                      "Regulatory Breach",
                      "Security & Data Misuse",
                      "Unethical Conduct",
                      "Conflict of Interest",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-xs md:text-sm font-bold text-slate-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <footer className="py-12 bg-white text-center border-t border-slate-100">
        <div className="px-6">
          <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <Scale size={16} className="hidden md:block" />
            <span>Insurance is a subject matter of solicitation</span>
            <span className="hidden md:block">|</span>
            <span>IRDAI Regn. No. 1131 Direct Broker (General & Life)</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
