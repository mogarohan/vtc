"use client";
import React from "react";
import {
  Factory,
  Droplets,
  Recycle,
  Settings,
  ArrowRight,
  Wind,
  ShieldCheck,
  BarChart3,
  Flame,
 Leaf,
  Truck,
  ShieldAlert,
  ClipboardCheck,
  LockKeyhole,
  Waves,
  Ship,
  Zap,
  BadgeX,
} from "lucide-react";

export default function PaperMillPage() {
  const processes = [
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
      {/* 1. HERO SECTION: The Industrial Core */}
      <section className="relative bg-[#020617] pt-32 pb-24 px-6 overflow-hidden">
        {/* Subtle Paper Grain Texture Overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-blue-500/20">
              <Factory size={14} /> Industrial Excellence
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              Paper Mills <br />
              <span className="text-blue-500 italic underline decoration-blue-900 decoration-8 underline-offset-4">
                 Industry Solutions
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed font-bold">
               Paper mills manufacturers are at the forefront of the circular economy, producing essential materials for packaging, construction, furniture, and consumer products. The industry faces mounting pressure to adopt sustainable forestry practices, reduce water and energy consumption, and meet stringent environmental standards. Advanced pulping technologies, digital printing capabilities, and innovative laminate composites are transforming production, while raw material volatility and regulatory compliance add operational complexity.
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-sm font-bold transition-all flex items-center gap-3 shadow-xl shadow-blue-900/40">
                Technical Audit <ArrowRight size={18} />
              </button>
              <button className="border border-slate-700 text-white px-10 py-4 rounded-sm font-bold hover:bg-white/5 transition-all uppercase tracking-widest text-xs">
                View Mill Specs
              </button>
            </div>
          </div>

          {/* Abstract Machine Visualization */}
          <div className="flex-1 w-full bg-slate-900 h-[500px] rounded-[4rem] relative overflow-hidden shadow-2xl border border-white/5 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            <Waves
              size={150}
              className="text-blue-500 opacity-10 absolute -bottom-10 -left-10 group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute top-12 right-12 text-right"></div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS MODULES: White & Steel Blue */}
      <section className="py-14 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                Key Threats
              </h2>
              <p className="text-slate-500">
                 Advanced pulping technologies, digital printing capabilities, and innovative laminate composites are transforming production, while raw material volatility and regulatory compliance add operational complexity.
              </p>
            </div>
            <div className="h-px flex-1 bg-slate-200 mb-4 mx-12 hidden md:block"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {processes.map((proc, i) => {
              const Icon = proc.Icon;
              return (
                <div
                  key={i}
                  className="group p-12 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {proc.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {proc.desc}
                  </p>
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ECO-MILL MONITORING SECTION */}
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
