"use client";
import React from "react";
import {
  Factory,
  Settings,
  ArrowRight,
  Flame,
  Leaf,
  Truck,
  ShieldAlert,
  ClipboardCheck,
  LockKeyhole,
  Waves,
  Ship,
  ShieldCheck,
  BadgeX,
} from "lucide-react";

export default function PaperMillPage() {
  const processes = [
    {
      title: "Fire & Explosion Risk",
      Icon: Flame,
      desc: "Flammable materials, adhesives, inks, and high-speed machinery create significant fire hazards.",
    },
    {
      title: "Machinery Breakdown",
      Icon: Settings,
      desc: "Presses, pulping equipment, and automated systems are prone to failures and downtime.",
    },
    {
      title: "Supply Chain Disruption",
      Icon: Truck,
      desc: "Dependence on raw material suppliers and logistics challenges threatens delivery timelines.",
    },
    {
      title: "Environmental Liability",
      Icon: Leaf,
      desc: "Pollution, emissions, spills, and waste management issues expose mills to penalties and cleanup costs.",
    },
    {
      title: "Quality Control Failures",
      Icon: BadgeX,
      desc: "Defects in paper grades and contamination may lead to rejected shipments and disputes.",
    },
    {
      title: "Intellectual Property",
      Icon: LockKeyhole,
      desc: "Innovative designs and proprietary processes require protection from infringement and theft.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="relative bg-[#020617] pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Texture */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-16 relative z-10">
          {/* TEXT */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-4 sm:mb-6 border border-blue-500/20">
              <Factory size={14} />
              Industrial Excellence
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-4 sm:mb-8 leading-tight">
              Paper Mills <br />
              <span className="text-blue-500 italic underline decoration-blue-900 decoration-4 sm:decoration-8 underline-offset-4">
                Industry Solutions
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-10 leading-relaxed">
              Paper mill manufacturers play a critical role in the circular
              economy, producing materials for packaging, construction,
              furniture, and consumer goods. Sustainability mandates, water and
              energy reduction targets, and regulatory compliance add
              operational complexity.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-5">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-md font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30">
                Technical Audit <ArrowRight size={18} />
              </button>

              <button className="border border-slate-700 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-md font-bold hover:bg-white/5 transition-all uppercase tracking-widest text-xs">
                View Mill Specs
              </button>
            </div>
          </div>

          {/* GRAPHIC */}
          <div className="flex-1 w-full h-[240px] sm:h-[380px] lg:h-[500px] bg-slate-900 rounded-2xl sm:rounded-[4rem] relative overflow-hidden shadow-xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>

            <Waves
              size={90}
              className="text-blue-500 opacity-10 absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10"
            />
          </div>
        </div>
      </section>

      {/* ---------------- KEY THREATS ---------------- */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-16 gap-4">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2 uppercase">
                Key Threats
              </h2>
              <p className="text-slate-500 text-sm sm:text-base">
                Advanced pulping technologies and sustainability mandates
                reshape operations while introducing new exposures.
              </p>
            </div>

            <div className="hidden md:block h-px flex-1 bg-slate-200 mb-2 mx-12"></div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10">
            {processes.map((proc, i) => {
              const Icon = proc.Icon;
              return (
                <div
                  key={i}
                  className="p-5 sm:p-10 bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl sm:rounded-2xl mb-4 sm:mb-8">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-4">
                    {proc.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- PROTECTION ---------------- */}
      <section className="py-10 sm:py-16 bg-white px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* FIXED: removed whitespace-nowrap */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 sm:mb-12 leading-tight">
            Comprehensive{" "}
            <span className="text-blue-600 italic underline decoration-blue-100 decoration-4 sm:decoration-8 underline-offset-4">
              Protection
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { icon: Waves, title: "Property & Business Interruption" },
              { icon: ShieldCheck, title: "Product Liability & Recall" },
              { icon: Leaf, title: "Environmental Impairment" },
              { icon: Ship, title: "Marine & Transit" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-200 hover:border-blue-400 transition"
                >
                  <div className="bg-blue-600 text-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow">
                    <Icon size={18} />
                  </div>
                  <h4 className="font-bold text-sm sm:text-lg text-left">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
