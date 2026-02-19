"use client";
import React from "react";
import {
  Zap,
  Recycle,
  ShieldCheck,
  ArrowRight,
  Layers,
  Settings,
  Thermometer,
  FlaskConical,
  Box,
  Info,
  Truck,
  Leaf,
  BadgeX,
  LockKeyhole,
  Flame,
  Waves,
  Ship,
} from "lucide-react";

export default function PlasticIndustryPage() {
  const sectors = [
    {
    title: "Fire & Explosion Risk",
    Icon: Flame, // 🔥 fire, explosion, flammable hazard
    desc: "Flammable materials, chemical adhesives, printing inks, and high-speed machinery create significant fire hazards that can devastate production facilities.",
  },
  {
    title: "Machinery Breakdown",
    Icon: Settings, // ⚙️ machines, mechanical failure
    desc: "Printing presses, die-cutting machines, filling lines, and automated packaging systems are prone to mechanical failures causing production delays and revenue loss.",
  },
  {
    title: "Supply Chain Disruption",
    Icon: Truck, // 🚚 logistics, transport, delivery
    desc: "Dependence on paper, plastic resin, aluminum, and glass suppliers, combined with logistics challenges, threatens timely delivery and customer commitments.",
  },
  {
  title: "Environmental Liability",
  Icon: Leaf, // 🌱 environment, sustainability, environmental risk
  desc: "Water pollution, air emissions, chemical spills, and waste management issues expose businesses to regulatory penalties, cleanup costs, and reputational damage.",
},
  {
    title: "Quality Control Failures",
  Icon: BadgeX, // ❌ failed quality, defects, rejection
  desc: "Defects in paper grades, laminate bonding failures, and contamination can lead to customer complaints, rejected shipments, and contract disputes.",
},
  {
    title: "Intellectual Property",
    Icon: LockKeyhole, // 🔐 protection, IP security
    desc: "Proprietary designs, printing techniques, and innovative packaging solutions require protection from counterfeiting, patent infringement, and trade secret theft.",
  },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. HERO SECTION: Synthetic Excellence */}
      <section className="relative bg-slate-800 pt-32 pb-24 px-6 overflow-hidden">
        {/* Hexagonal Molecular Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0l21.65 12.5v25L25 50 3.35 37.5v-25z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Layers size={14} />Innovating for a Sustainable Tomorrow
            </div>
            <h1 className="text-5xl md:text-6x2 font-black text-white mb-8 leading-[1.1] tracking-tighter">
              Plastic <br />
              <span className="text-blue-500 italic">Industry Insurance Solutions</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl mb-12 leading-relaxed font-bold">
              The plastic and wood industries are undergoing significant transformation as they balance traditional manufacturing with sustainability imperatives. From bio-based plastics and recycled polymers to certified sustainable timber and engineered wood products, these sectors are innovating to meet environmental standards while maintaining performance and cost-effectiveness. Advanced extrusion technologies, precision woodworking machinery, and automated production systems are driving efficiency, but raw material price volatility, regulatory pressures, and fire risks remain critical challenges.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold transition-all flex items-center gap-3 shadow-xl shadow-blue-900/40">
                Get Material Specs <ArrowRight size={18} />
              </button>
              <button className="border border-slate-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">
                Sample Catalog
              </button>
            </div>
          </div>

          {/* Abstract Injection Mold Graphic */}
          <div className="flex-1 w-full max-w-md aspect-square bg-blue-600 rounded-full relative shadow-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent"></div>
            <Settings
              size={160}
              className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:rotate-180 transition-transform duration-[3s]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Box size={100} className="text-white drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY VERTICALS */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-800 mb-4 tracking-tight uppercase">
              Material Segments
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {sectors.map((sector, i) => {
              const Icon = sector.Icon;
              return (
                <div
                  key={i}
                  className="group p-10 bg-sky-100 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    {sector.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {sector.desc}
                  </p>
                
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PROCESS MONITORING SECTION */}
      <section className="mb-5 bg-white overflow-hidden flex items-center justify-center">
  <div className="w-full flex flex-col items-center text-center">
    
    {/* HEADING */}
    <h2 className="text-5xl font-black text-slate-900 mb-12 leading-tight whitespace-nowrap">
  Comprehensive{" "}
  <span className="text-blue-600 italic underline decoration-blue-100 decoration-8 underline-offset-8">
    Protection
  </span>
</h2>


    {/* GRID CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
      
      {/* Card 1 */}
      <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-400 transition">
        <div className="bg-blue-600 text-white p-3 rounded-xl shadow-lg shadow-blue-200">
          <Waves size={24} />
        </div>
        <h4 className="font-bold text-lg text-left">
          Property & Business Interruption
        </h4>
      </div>

      {/* Card 2 */}
      <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-400 transition">
        <div className="bg-blue-600 text-white p-3 rounded-xl shadow-lg shadow-blue-200">
          <ShieldCheck size={24} />
        </div>
        <h4 className="font-bold text-lg text-left">
          Product Liability & Recall
        </h4>
      </div>

      {/* Card 3 */}
      <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-400 transition">
        <div className="bg-blue-600 text-white p-3 rounded-xl shadow-lg shadow-blue-200">
          <Leaf size={24} />
        </div>
        <h4 className="font-bold text-lg text-left">
          Environmental Impairment
        </h4>
      </div>

      {/* Card 4 */}
      <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-400 transition">
        <div className="bg-blue-600 text-white p-3 rounded-xl shadow-lg shadow-blue-200">
          <Ship size={24} />
        </div>
        <h4 className="font-bold text-lg text-left">
          Marine & Transit
        </h4>
      </div>

      {/* Card 5 – Full Width */}
      

    </div>
  </div>
</section>
    </div>
  );
}
