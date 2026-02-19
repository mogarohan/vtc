"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  RefreshCw,
  Lock,
  Zap,
  ArrowRight,
  Smartphone,
  Building,
  Activity,
  PieChart,
  Sparkles,
   ShieldAlert,
  FileWarning,
  Users,
  Fingerprint,
  PauseCircle,
  ClipboardCheck,
  Shield,
  FileText,
} from "lucide-react";
import Link from "next/link";

const BfsisSuite = () => {
  const containerRef = useRef(null);

  // Parallax Effect Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Range restricted to 150 to prevent content from sliding out of the container
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

const modules = [
  {
    title: "Cyber & Data Breaches",
    desc: "Ransomware attacks, data theft, system compromises, and regulatory fines impacting digital and core banking environments.",
    icon: <ShieldAlert className="w-10 h-10 text-blue-600" />,
    tag: "Cyber Risk",
  },
  {
    title: "Professional Indemnity",
    desc: "Advisory errors, mis-selling incidents, and compliance failures leading to client claims and financial liabilities.",
    icon: <FileWarning className="w-10 h-10 text-blue-600" />,
    tag: "Advisory Risk",
  },
  {
    title: "Directors & Officers",
    desc: "Management decisions, shareholder disputes, and regulatory actions exposing leadership to personal liability.",
    icon: <Users className="w-10 h-10 text-blue-600" />,
    tag: "Management Risk",
  },
  {
    title: "Crime & Fidelity",
    desc: "Employee fraud, funds transfer fraud, and social engineering attacks causing direct financial losses.",
    icon: <Fingerprint className="w-10 h-10 text-blue-600" />,
    tag: "Financial Crime",
  },
  {
    title: "Business Interruption",
    desc: "System downtime, branch closures, and operational disruptions affecting service continuity and revenue.",
    icon: <PauseCircle className="w-10 h-10 text-blue-600" />,
    tag: "Operational Risk",
  },
  {
    title: "Regulatory & Compliance",
    desc: "Penalties, license revocation risks, and legal proceedings arising from regulatory non-compliance.",
    icon: <ClipboardCheck className="w-10 h-10 text-blue-600" />,
    tag: "Compliance",
  },
];

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-white font-sans text-slate-900 overflow-hidden"
    >
      {/* 1. PREMIUM DARK HERO SECTION - Fixed cutting with min-h and padding */}
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
            <Sparkles size={16} /> Digital Transformation of Finance
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
            Banking - {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Financial Services
            </span>{" "}
            <br />
            & Insurance Solutions
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
           Digital banking revolution, fintech disruption, regulatory evolution, open banking APIs, blockchain integration, and customer experience innovation reshaping financial services globally.
          </p>

          
        </motion.div>
      </section>

      {/* 2. BFSI MODULES GRID - Floating overlap */}
      <section className="relative z-20 -mt-24 py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">
              Core Financial Modules
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-xl border border-slate-200 bg-white hover:border-blue-600/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
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

      {/* 4. INTEGRATED ECOSYSTEM SECTION */}
<section className="w-full  bg-white py-10">
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* HEADING */}
    <h2 className="text-4xl lg:text-5xl font-black mb-16 text-slate-900 tracking-tighter uppercase leading-none">
      Financial Institution{" "}
      <span className="text-blue-600">Protection</span>
    </h2>

    {/* CARDS GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto text-left">
      
      {/* Card 1 */}
      <div className="flex gap-6 items-start">
        <div className="bg-blue-100 p-4 rounded-2xl">
          <Shield className="text-blue-600 w-6 h-6" />
        </div>
        <h4 className="font-bold text-xl text-slate-800">
          Cyber Liability & Data Breach
        </h4>
      </div>

      {/* Card 2 */}
      <div className="flex gap-6 items-start">
        <div className="bg-blue-100 p-4 rounded-2xl">
          <FileText className="text-blue-600 w-6 h-6" />
        </div>
        <h4 className="font-bold text-xl text-slate-800">
          Professional Indemnity
        </h4>
      </div>

      {/* Card 3 */}
      <div className="flex gap-6 items-start">
        <div className="bg-blue-100 p-4 rounded-2xl">
          <Users className="text-blue-600 w-6 h-6" />
        </div>
        <h4 className="font-bold text-xl text-slate-800">
          Directors & Officers Liability
        </h4>
      </div>

      {/* Card 4 */}
      <div className="flex gap-6 items-start">
        <div className="bg-blue-100 p-4 rounded-2xl">
          <Fingerprint className="text-blue-600 w-6 h-6" />
        </div>
        <h4 className="font-bold text-xl text-slate-800">
          Bankers Blanket Bond
        </h4>
      </div>

      {/* Card 5 – Centered Single */}
      <div className="flex gap-6 items-start sm:col-span-2 justify-center">
        <div className="flex gap-6">
          <div className="bg-blue-100 p-4 rounded-2xl">
            <PauseCircle className="text-blue-600 w-6 h-6" />
          </div>
          <h4 className="font-bold text-xl text-slate-800">
            Business Interruption
          </h4>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* 5. BFSI FOOTER CTA */}
      <section className="py-10 px-6 bg-slate-950 text-white text-center border-t border-blue-600/30">
        <h2 className="text-5xl font-black mb-6 italic tracking-tighter uppercase">
          Secure Your Digital Evolution
        </h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
          Transform your financial institution with industry-leading technology
          and military-grade security protocols.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-bold transition-all uppercase tracking-widest text-sm shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95">
          Contact Fintech Specialist
        </button>
      </section>
    </main>
  );
};

export default BfsisSuite;
