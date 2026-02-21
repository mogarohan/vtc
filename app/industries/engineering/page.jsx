"use client";
import React from "react";
import { motion } from "framer-motion"; // Install: npm install framer-motion
import {
  DraftingCompass,
  Cpu,
  Layers,
  HardHat,
  ArrowRight,
  Ruler,
  ShieldCheck,
  Settings,
  PenTool,
  ChevronRight,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const EngineeringSuite = () => {
  const modules = [
    {
      title: "Design Automation",
      desc: "CAD aur BIM workflows ko automate karein taaki engineering cycle time 40% tak kam ho sake.",
      icon: <DraftingCompass className="w-8 h-8" />,
      tag: "Efficiency",
    },
    {
      title: "Structural Integrity",
      desc: "Real-time stress analysis aur structural health monitoring system for mega-projects.",
      icon: <ShieldCheck className="w-8 h-8" />,
      tag: "Reliability",
    },
    {
      title: "PLM Integration",
      desc: "Concept se lekar commissioning tak, Product Lifecycle Management ko digital environment mein manage karein.",
      icon: <Layers className="w-8 h-8" />,
      tag: "Lifecycle",
    },
    {
      title: "Smart Field Assets",
      desc: "IoT-enabled sensors jo field machinery aur on-site performance ka live data deliver karte hain.",
      icon: <Settings className="w-8 h-8" />,
      tag: "Operational",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* 1. HERO SECTION - High Impact */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/engineering.png"
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
            Industry 4.0 Standard
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            Building Tomorrow’s
            <br /> <span className="text-blue-600 italic">Infrastructure</span>
          </h1>
          <h3 className="text-xs md:text-xl font-light text-slate-600 mb-10 uppercase tracking-[0.3em]">
            Mega infrastructure boom - highways, bridges, tunnels, metro rail
            networks, hydroelectric plants, smart cities, green buildings,
            PropTech revolution, and sustainable construction practices
            transforming how we build nations.
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

      {/* 2. STATS STRIP - Client Proof */}
      <div className="relative z-20 -mt-12 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-px bg-white rounded-2xl shadow-2xl shadow-blue-900/10 overflow-hidden border border-slate-100">
          {[
            {
              label: "Average Project Value",
              value: "$12B",
              sub: "Mega infrastructure and long-duration construction programs",
            },
            {
              label: "Delay Risk – DSU Critical",
              value: "156 Days",
              sub: "Projects exposed to weather, approvals, and contractor risks",
            },
            {
              label: "Completion Rate",
              value: "99.8%",
              sub: "Achieved with structured surety bond programs",
            },
            {
              label: "Defect Claims Covered",
              value: "$890M",
              sub: "Post-completion structural and warranty claims",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-8 text-center bg-white border-r border-slate-50 last:border-0 hover:bg-blue-50/50 transition-colors"
            >
              <div className="text-3xl font-black text-slate-900">
                {stat.value}
              </div>
              <div className="text-[10px] text-blue-600 font-black uppercase tracking-widest mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-1 italic">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CORE MODULES - Modern Grid */}
      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Construction & Infrastructure Risks
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>

            <div className="mt-14"></div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {[
                {
                  title: "Contractor’s All Risk",
                  desc: "Structural collapse, equipment damage, third-party injury, and construction defects.",
                  image: "/engineering/e1.jpeg",
                },
                {
                  title: "Professional Indemnity",
                  desc: "Design errors, engineering failures, specification mistakes, and project management negligence.",
                  image: "/engineering/e2.jpeg",
                },
                {
                  title: "Delay in Start-Up",
                  desc: "Weather disruptions, contractor default, supply chain failures, and permit delays.",
                  image: "/engineering/e3.jpeg",
                },
                {
                  title: "Structural Warranty",
                  desc: "Post-completion defects, foundation failures, envelope issues, and latent defects.",
                  image: "/engineering/e4.jpeg",
                },
                {
                  title: "Environmental Liability",
                  desc: "Soil contamination, hazardous materials, pollution incidents, and remediation costs.",
                  image: "/engineering/e5.jpeg",
                },
                {
                  title: "Surety Bonds",
                  desc: "Performance bonds, payment bonds, bid bonds, and contract completion guarantees.",
                  image: "/engineering/e6.jpeg",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="bg-white rounded-2xl overflow-hidden
                        border border-[#1C2A7D]/10
                        shadow-[0_12px_35px_rgba(28,42,125,0.15)]
                        hover:shadow-[0_28px_60px_rgba(28,42,125,0.3)]
                        transition"
                >
                  {/* IMAGE */}
                  <div className="relative w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#1C2A7D] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* ACCENT BAR */}
                  <div className="h-1 w-full bg-[#1C2A7D]" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. ECOSYSTEM - High Tech Visualization */}
      <section className="py-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          {/* The "Control Panel" Card */}
          <div className="bg-[#0f172a] rounded-[3rem] p-8 shadow-3xl border border-slate-800 relative overflow-hidden group text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

            <div className="flex items-center justify-center relative z-10 text-xl text-blue-400 font-mono mt-10 mb-10">
              Complete protection including Contractor&apos;s All Risk,
              Professional Indemnity, Delay in Start-Up, Structural Warranty,
              Environmental Liability, Surety Bonds, and Equipment Breakdown
              coverage for roads, bridges, dams, power plants, and real estate
              projects.
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-10 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-10 text-slate-900 tracking-tighter italic">
            Build Bold. <br />
            Build with Vestigo.
          </h2>
          <button className="bg-slate-950 hover:bg-black text-white px-12 py-5 rounded-full font-bold transition-all flex items-center gap-3 mx-auto shadow-2xl">
            Request Enterprise Access{" "}
            <ArrowRight size={20} className="text-blue-500" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default EngineeringSuite;
