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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0F172A] pt-32 pb-40">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]"
          />
        </div>

        <motion.div
          style={{ y, opacity }}
          className="relative z-10 text-center px-6 max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 backdrop-blur-md"
          >
            <Sparkles size={16} />Innovating Life Sciences
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
           
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Chemistry & Pharmaceutical 
            </span>{" "}
            <br />
            Insurance Solutions
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Biopharmaceutical breakthroughs, personalized medicine, green chemistry initiatives, regulatory harmonization, contract manufacturing growth, and specialty chemicals demand driving sector evolution.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20"
            >
              Talk to a Consultant <ArrowRight size={18} />
            </Link>
           
          </div>
        </motion.div>
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
         Comprehensive protection including Product Liability, Business Interruption, Professional Indemnity, and Regulatory Defense coverage.
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
