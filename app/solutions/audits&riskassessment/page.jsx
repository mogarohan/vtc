"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  AlertTriangle,
  BarChart3,
  Wrench,
  ShieldCheck,
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
      <section className="relative overflow-hidden py-20 md:py-24">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#EEF4FF] via-white to-[#0F172A]" />

        {/* HEADER */}
        <div className="text-center mb-16 md:mb-28 px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-[#070B7F]"
          >
            Audits <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
              & <br /> Risk Assessment
            </span>
          </motion.p>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          {/* DESKTOP TIMELINE */}
          <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-20 md:gap-24">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col items-center gap-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* LEFT SECTION */}
                <div className="w-full md:w-[45%] flex flex-col items-center">
                  
                  {/* MOBILE NUMBER – TOP CENTER WITH GAP */}
                  <div className="md:hidden mb-6 relative">
                    <div className="w-14 h-14 bg-[#070B7F] rounded-2xl flex items-center justify-center text-white font-black shadow-xl">
                      {step.num}
                    </div>
                    <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-xl -z-10" />
                  </div>

                  {/* CARD */}
                  <div className="bg-white w-full p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-slate-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-blue-600 bg-blue-50 p-3 rounded-2xl">
                        {step.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-black uppercase text-[#070B7F]">
                        {step.title}
                      </h3>
                    </div>

                    {/* DESKTOP NUMBER */}
                    <span className="hidden md:block absolute top-8 right-10 text-4xl font-black text-slate-100">
                      {step.num}
                    </span>

                    <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* MOBILE IMAGE */}
                  <div className="md:hidden mt-6 w-full">
                    <div className="bg-white rounded-[1.75rem] overflow-hidden shadow-lg border border-slate-100">
                      <img
                        src={step.ghostImg}
                        alt={step.title}
                        className="w-full h-[180px] object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* DESKTOP CENTER NODE */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#070B7F] rounded-[1.25rem] flex items-center justify-center text-white shadow-xl border-4 border-white z-10">
                      <span className="text-lg font-black">{step.num}</span>
                    </div>
                    <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-xl -z-10" />
                  </div>
                </div>

                {/* DESKTOP IMAGE */}
                <div className="hidden md:block w-[45%]">
                  <div
                    className={`flex ${
                      i % 2 === 0 ? "justify-start" : "justify-end"
                    } px-16`}
                  >
                    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                      <img
                        src={step.ghostImg}
                        alt={step.title}
                        className="w-[280px] h-[200px] object-cover"
                      />
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
