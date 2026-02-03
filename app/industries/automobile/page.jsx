'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Car, 
  Lock, 
  AlertTriangle,
  Zap,
  Anchor,
  UserCheck,
  ChevronDown,
  Info
} from 'lucide-react';

const AutomobileInsurancePage = () => {
  const brandBlue = "#070B7F";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const threats = [
    { title: "Production Disruption", desc: "Fire, machinery breakdown, and assembly line failures can halt operations, leading to significant financial losses." },
    { title: "Supply Chain Vulnerability", desc: "Component shortages and logistics delays expose businesses to significant risks, impacting production schedules." },
    { title: "Product Liability", desc: "Defects in vehicles or engineered components and product recall costs pose major financial and legal challenges." },
    { title: "Cyber & Technology", desc: "Connectivity introduces vulnerabilities including data breaches, intellectual property theft, and operational cyberattacks." },
    { title: "Environmental Compliance", desc: "Evolving emissions regulations and complex waste management demand strict adherence and robust risk management." },
    { title: "Intellectual Property", desc: "Protecting innovative designs and proprietary technologies from theft and patent infringement is paramount." }
  ];

  const protections = [
    { title: "Property & Business Interruption", icon: <ShieldCheck size={24} /> },
    { title: "Product Liability & Recall", icon: <Car size={24} /> },
    { title: "Professional Indemnity", icon: <UserCheck size={24} /> },
    { title: "Cyber Insurance", icon: <Lock size={24} /> },
    { title: "Marine & Transit", icon: <Anchor size={24} /> },
  ];

  return (
    /* Main wrapper with a high z-index to stay above background but below potential overlays */
    <div className="relative w-full bg-transparent">
      
      {/* 1. VISIBLE FIXED BACKGROUND - Increased visibility via lower overlay opacity */}
      <div 
        className="fixed inset-0 z-[-1]" 
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(7, 11, 127, 0.2)), url('/automotive.png')`,
          backgroundSize: 'fit',
          backgroundPosition: 'top center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* 2. HERO SECTION - Massive spacing */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase drop-shadow-sm">
            Automobile & <br />Engineering Solutions
          </h1>
          <div className="h-2 w-32 bg-[#070B7F] mx-auto mb-10 rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-12 uppercase tracking-[0.25em]">
            Driving Into an Electric Future
          </h2>
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2.5 }} className="mt-12 ml-100 text-[#070B7F]">
            <ChevronDown size={50} strokeWidth={3} />
          </motion.div>
        </motion.div>
      </section>

      {/* 3. CORE CONTENT - Important Notice / Intro */}
      <section className="py-60 px-6">
        <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md border-l-8 border-[#070B7F] p-12 shadow-2xl">
          <div className="flex items-center gap-4 mb-6 text-[#070B7F]">
            <Info size={32} />
            <span className="font-black uppercase tracking-widest text-lg">Important Industry Transformation</span>
          </div>
          <p className="text-2xl md:text-4xl text-slate-900 leading-tight font-medium">
            The automobile and engineering sectors are undergoing <span className="text-[#070B7F] underline decoration-4">unprecedented transformation</span>. Global supply chains are being re-engineered while sustainability mandates reshape every aspect of design.
          </p>
        </div>
      </section>

      {/* 4. KEY THREATS - Large Gaps between sections */}
      <section className="py-60 px-6 max-w-7xl mx-auto">
        <div className="mb-24">
          <h3 className="text-5xl md:text-6xl font-black text-slate-900 uppercase italic mb-4">Key Threats</h3>
          <p className="text-xl text-[#070B7F] font-bold">CRITICAL RISK ASSESSMENT 2026</p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
        >
          {threats.map((threat, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-[#070B7F] p-10 rounded-2xl shadow-2xl group transition-all"
            >
              <AlertTriangle className="text-white mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="text-2xl font-black text-white mb-6 border-b border-white/20 pb-4">{threat.title}</h4>
              <p className="text-blue-100 leading-relaxed text-lg font-normal italic">
                {threat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. PROTECTION - High Visibility Grid */}
      <section className="py-60 px-6 bg-slate-900/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <Zap className="text-[#070B7F] mb-6" size={48} />
            <h3 className="text-5xl font-black text-[#070B7F] uppercase tracking-tight">Comprehensive Protection</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {protections.map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ backgroundColor: "#070B7F", color: "#ffffff" }}
                className="bg-white p-12 flex flex-col justify-between h-72 border-2 border-[#070B7F] group cursor-pointer shadow-lg transition-colors duration-300"
              >
                <div className="text-[#070B7F] group-hover:text-white transition-colors">{item.icon}</div>
                <span className="text-2xl font-black uppercase leading-none">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION - Final Push */}
      <section className="py-72 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-white/80 p-16 rounded-[3rem] shadow-2xl border-4 border-[#070B7F]">
          <h2 className="text-5xl font-black text-slate-900 mb-12 tracking-tighter uppercase italic">Secure the Future</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <button className="bg-[#070B7F] hover:bg-blue-800 text-white px-14 py-6 rounded-xl font-black text-xl transition-all shadow-xl">
              GET A QUOTE
            </button>
            <button className="bg-transparent border-4 border-[#070B7F] text-[#070B7F] hover:bg-[#070B7F] hover:text-white px-14 py-6 rounded-xl font-black text-xl transition-all">
              EXPLORE SOLUTIONS
            </button>
          </div>
        </div>
      </section>

      {/* Your Footer will naturally follow here without being overridden */}
    </div>
  );
};

export default AutomobileInsurancePage;