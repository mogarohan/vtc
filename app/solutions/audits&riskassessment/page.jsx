"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  AlertTriangle,
  BarChart3,
  Wrench,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function IndustryRiskPage() {

  const processSteps = [
    {
      num: "01",
      title: "Industry Analysis",
      icon: <Search size={22} />,
      desc: "Studying sector dependencies and regulations.",
      ghostImg: "/steps/analysis-ghost.png",
    },
    {
      num: "02",
      title: "Risk Identification",
      icon: <AlertTriangle size={22} />,
      desc: "Spotting operational and cyber threats.",
      ghostImg: "/steps/risk-ghost.png",
    },
    {
      num: "03",
      title: "Risk Evaluation",
      icon: <BarChart3 size={22} />,
      desc: "Classifying financial and legal impacts.",
      ghostImg: "/steps/f.png",
    },
    {
      num: "04",
      title: "Risk Reduction",
      icon: <Wrench size={22} />,
      desc: "Implementing tech-driven safety controls.",
      ghostImg: "/steps/reduction-ghost.png",
    },
    {
      num: "05",
      title: "Protection Mapping",
      icon: <ShieldCheck size={22} />,
      desc: "Optimizing insurance and financial coverage.",
      ghostImg: "/steps/protection-ghost.png",
    },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* ================= METHODOLOGY SECTION ================= */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">

        {/* HEADER */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-600 mb-4"
          >
            The Methodology
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-[#070B7F]"
          >
            Our Structured <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
              Approach
            </span>
          </motion.p>
        </div>

        <div className="container mx-auto px-6 relative">

          {/* CENTER LINE */}
          <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-[2px]
            bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent
            shadow-[0_0_20px_rgba(34,211,238,0.6)] -translate-x-1/2" />

          <div className="flex flex-col gap-24 relative z-10">

            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`flex items-center justify-between w-full
                ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                flex-col gap-10`}
              >

                {/* LEFT CARD */}
                <div className="w-full md:w-[45%]">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 relative group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-blue-600 bg-blue-50 p-3 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition">
                        {step.icon}
                      </div>
                      <span className="text-4xl font-black text-slate-100">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#070B7F] mb-4">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      {step.desc}
                    </p>

                    <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 w-0 group-hover:w-full transition-all duration-500" />
                  </motion.div>
                </div>

                {/* CENTER NODE (UNCHANGED) */}
                <div className="relative flex items-center justify-center">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-[#070B7F] rounded-[1.25rem]
                    flex items-center justify-center text-white
                    shadow-[0_0_30px_rgba(7,11,127,0.4)]
                    border-4 border-white z-20"
                  >
                    <span className="text-lg font-black">{step.num}</span>
                  </motion.div>

                  <div className="absolute w-20 h-20 bg-cyan-400/30 rounded-full animate-ping -z-10" />
                </div>

                {/* RIGHT GHOST IMAGE */}
               {/* RIGHT GHOST IMAGE AREA */}
<div className="hidden md:block w-[45%]">
  <div
    className={`flex ${
      i % 2 === 0 ? "justify-start" : "justify-end"
    } px-16`}
  >
    <div className="relative group">
      
      {/* Glow Background */}
      <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

      {/* Image Card */}
      <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 
                      transform transition-all duration-700 
                      group-hover:-translate-y-4 group-hover:scale-[1.03]">

        {/* Image */}
        <img
          src={step.ghostImg}
          alt={step.title}
          className="w-[280px] h-[200px] object-cover select-none"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B7F]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 w-0 group-hover:w-full transition-all duration-700" />
      </div>
    </div>
  </div>
</div>


              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}
