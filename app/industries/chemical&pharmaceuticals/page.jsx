"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Beaker,
  TestTube,
  ClipboardCheck,
  FlaskConical,
  ShieldAlert,
  Database,
  ArrowRight,
  Layers,
  Sparkles,
  Leaf,
  PauseCircle,
  Activity,
  LockKeyhole,
} from "lucide-react";
import Link from "next/link";

const PharmaChemicalSuite = () => {
  const containerRef = useRef(null);

  // Parallax Effect for the Hero Section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Range restricted to 150 to prevent content from cutting off
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const modules = [
    {
      title: "Product Recall",
      desc: "End-to-end batch tracking and automated genealogy providing complete production transparency.",
      icon: <Layers className="w-10 h-10 text-blue-600" />, // batch, traceability
      tag: "Production",
    },
    {
      title: "Environmental Liability",
      desc: "Laboratory Information Management System for real-time tracking of quality control samples.",
      icon: <Leaf className="w-10 h-10 text-blue-600" />, // environment, pollution, ESG
      tag: "Quality Lab",
    },
    {
      title: "Product Liability",
      desc: "FDA 21 CFR Part 11 compliant digital signatures and audit trails for validation readiness.",
      icon: <ShieldAlert className="w-10 h-10 text-blue-600" />, // liability, claims, legal risk
      tag: "Regulatory",
    },
    {
      title: "Business Interruption",
      desc: "Advanced tools for formulation management and stability testing data analysis.",
      icon: <PauseCircle className="w-10 h-10 text-blue-600" />, // downtime, interruption
      tag: "Operations",
    },
    {
      title: "Clinical Trial Risks",
      desc: "Advanced tools for formulation management and stability testing data analysis.",
      icon: <Activity className="w-10 h-10 text-blue-600" />, // clinical, trials, monitoring
      tag: "Research",
    },
    {
      title: "Cyber & IP Theft",
      desc: "Advanced tools for formulation management and stability testing data analysis.",
      icon: <LockKeyhole className="w-10 h-10 text-blue-600" />, // cybersecurity, IP protection
      tag: "Security",
    },
  ];

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-white font-sans text-slate-900 overflow-hidden"
    >
      {/* 1. PREMIUM DARK HERO SECTION (Matched to Company Style) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/chemical-pharma.png"
            className="w-full h-full object-cover opacity-20"
            alt="Hero Background"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <span className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block shadow-lg">
            Innovating Life Sciences
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            Chemical & Pharmaceutical
            <br />{" "}
            <span className="text-blue-600 italic">Insurance Solutions</span>
          </h1>
          <h3 className="text-xs md:text-xl font-light text-slate-600 mb-10 uppercase tracking-[0.3em]">
            Biopharmaceutical breakthroughs, personalized medicine, green
            chemistry initiatives, regulatory harmonization, contract
            manufacturing growth, and specialty chemicals demand driving sector
            evolution.
          </h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:scale-105">
            Explore Solutions
          </button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-blue-600"
        ></motion.div>
      </section>

      {/* 2. SPECIALIZED MODULES GRID (Floating Overlap) */}
      <section className="relative z-20 -mt-24 py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">
              Pharma & Chemical Risks
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-600/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                <div className="mb-8 p-3 rounded-lg bg-blue-50 inline-block text-blue-600">
                  {m.icon}
                </div>
                <p className="text-[11px] font-bold text-blue-600 uppercase mb-2 tracking-widest">
                  {m.tag}
                </p>
                <h3 className="text-xl font-bold mb-3 tracking-tight">
                  {m.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SAFETY & PERFORMANCE METRICS */}
      <section className="py-20 bg-blue-50/50 border-y border-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Average Recall Cost", value: "$3.2B" },
              { label: "Cyber Target Rate", value: "87%" },
              { label: "Cleanup Costs", value: "$450M" },
              { label: "Development", value: "12-Year" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-black text-blue-900">
                  {stat.value}
                </div>
                <div className="text-xs text-blue-600 font-bold mt-1 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTEGRATED ECOSYSTEM SECTION */}

      {/* 5. PHARMA FOOTER CTA */}
      <section className="py-24 px-6 bg-slate-950 text-white text-center border-t border-blue-600/30">
        <h2 className="text-5xl font-black mb-6 italic tracking-tighter uppercase">
          Secure Your Digital Molecule
        </h2>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
          Comprehensive protection including Product Liability, Business
          Interruption, Professional Indemnity, and Regulatory Defense coverage.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20"
          >
            Talk to a Consultant <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PharmaChemicalSuite;
