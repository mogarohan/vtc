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
  AlertTriangle,
  Mail,
  Users,
  ShieldAlert,
  MessageSquareWarning,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

// --- Data: Ethics Framework & Concerns ---
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

export default function WhistleblowerEthicsPolicy() {
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
        {/* Background glow */}
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

        {/* Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <Image
              src="/policy/p4-hero.jpeg"
              alt="Ethics Background"
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
              <HeartHandshake size={14} className="animate-pulse" />
              Transparency & Accountability
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              Ethics & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Whistleblower
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
              Fostering a culture of integrity through secure mechanisms for
              reporting misconduct and upholding the highest ethical standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE PURPOSE SECTION */}
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
                  Policy <br /> Objective
                </h2>
                <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed max-w-[95%] font-normal">
                  <p>
                    Vestigo Insurance Advisory encourages ethical conduct,
                    transparency, and accountability as the cornerstones of our
                    operational philosophy.
                  </p>
                  <p>
                    This policy provides a dedicated mechanism for reporting
                    concerns regarding
                    <span className="text-blue-600 font-bold px-1">
                      unethical behavior, misconduct, or regulatory violations
                    </span>
                    without fear of reprisal.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-blue-600" size={32} />
                </div>
                <div>
                  <h4 className="text-[#031154] font-black text-xl mb-2 tracking-tight">
                    Our Ethical Promise
                  </h4>
                  <p className="text-slate-500 text-base leading-relaxed">
                    We are committed to reviewing all reports objectively and
                    taking appropriate remedial action to preserve the trust of
                    our clients and partners.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-[#031154] p-10 md:p-14 rounded-[40px] text-white shadow-2xl space-y-10"
            >
              <div>
                <Lock className="text-blue-400 mb-6" size={40} />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                  Protection Policy
                </h3>
                <p className="text-blue-100/70 mb-8 text-lg leading-relaxed font-light">
                  Vestigo strictly prohibits retaliation against any individual
                  who reports concerns in good faith.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <CheckCircle2 className="text-blue-400" size={20} />
                    <span className="font-semibold text-sm md:text-base">
                      Guaranteed Confidentiality
                    </span>
                  </li>
                  <li className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <CheckCircle2 className="text-blue-400" size={20} />
                    <span className="font-semibold text-sm md:text-base">
                      Non-Retaliation Assurance
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-4">
                  Reporting Mechanism
                </p>
                <a
                  href="mailto:whistleblower@vestigoinsurance.com"
                  className="flex items-center gap-4 group"
                >
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

      {/* 3. BENTO GRID DATA SECTIONS */}
      <section className="py-10 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-left border-l-4 border-blue-600 pl-8">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
              Governance Matrix
            </h2>
            <p className="text-4xl md:text-5xl font-black text-[#031154] tracking-tighter">
              Operational Parameters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {ethicsFramework.map((section) => (
              <motion.div
                key={section.id}
                whileHover={{ y: -8 }}
                className="bg-white p-10 md:p-12 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[400px]"
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
                      className="flex items-start gap-4 p-5 bg-slate-50/80 rounded-2xl text-slate-700 text-base md:text-lg font-medium border border-slate-100/50"
                    >
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

      {/* 4. FINAL CTA SECTION */}
      <section className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-[#031154] tracking-tight">
              Protecting Integrity
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              Our compliance team ensures that every report is handled with the
              utmost sensitivity and objective scrutiny. Help us maintain the
              standard of excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
