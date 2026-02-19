"use client";
import React from "react";
import {
  Layers,
  Maximize,
  ShieldCheck,
  Droplets,
  ArrowRight,
  Hammer,
  CheckCircle2,
  Zap,
  Trees,
  HardHat,
    Flame,
  Settings,
  Truck,
  Leaf,
  BadgeX,
  ClipboardCheck,
} from "lucide-react";

export default function WoodLaminationPage() {
  const products = [
  {
    title: "Fire & Explosion Risk",
    Icon: Flame,
    desc: "Plastic extrusion heat, wood dust accumulation, chemical additives, and flammable materials create significant fire and explosion hazards throughout facilities.",
  },
  {
    title: "Machinery Breakdown",
    Icon: Settings,
    desc: "Injection molding machines, extrusion lines, CNC woodworking equipment, and drying kilns represent major capital investments vulnerable to mechanical failures.",
  },
  {
    title: "Supply Chain Disruption",
    Icon: Truck,
    desc: "Dependence on petroleum-based resins, recycled plastic feedstock, timber supplies, and chemical additives exposes operations to price volatility and availability issues.",
  },
  {
    title: "Environmental Liability",
    Icon: Leaf,
    desc: "Plastic waste management, microplastic concerns, VOC emissions from wood processing, and chemical handling create regulatory and reputational risks.",
  },
  {
    title: "Product Quality Issues",
    Icon: BadgeX,
    desc: "Defects in plastic components, wood warping, contamination, and structural failures can lead to customer claims, recalls, and contract disputes.",
  },
  {
    title: "Regulatory Compliance",
    Icon: ClipboardCheck,
    desc: "Extended producer responsibility, recycling targets, forest certification standards, and emissions regulations require ongoing compliance investments.",
  },
];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      {/* 1. HERO SECTION: The Core of Quality */}
      <section className="relative bg-[#0F172A] pt-32 pb-24 px-6 overflow-hidden">
        {/* Subtle Horizontal Grain Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #3b82f6 0px, #3b82f6 1px, transparent 1px, transparent 30px)`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg shadow-blue-900/40">
              <HardHat size={14} /> Industrial Timber Solutions
            </div>
            <h1 className="text-3x2 md:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tighter uppercase">
             Wood Industry <br />
              <span className="text-blue-500 italic">Insurance Solutions</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed font-bold">
             The plastic and wood industries are undergoing significant transformation as they balance traditional manufacturing with sustainability imperatives. From bio-based plastics and recycled polymers to certified sustainable timber and engineered wood products, these sectors are innovating to meet environmental standards while maintaining performance and cost-effectiveness. 
            </p>
            
          </div>

          {/* Abstract Layered Graphic */}
          <div className="flex-1 w-full max-w-md aspect-video bg-blue-900 rounded-3xl relative shadow-3xl overflow-hidden group border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
              {/* Simulating Lamination Layers */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-4 bg-white/10 rounded-full w-4/5 group-hover:bg-blue-500/40 transition-all duration-700"
                  style={{ opacity: i * 0.2 }}
                ></div>
              ))}
            </div>
            <div className="absolute bottom-8 left-8">
              <p className="text-3xl font-black text-white italic">
                0.8 <span className="text-sm">mm</span>
              </p>
              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest text-left">
                Precision Micron Layer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-blue-950 mb-4 tracking-tight uppercase">
              Specialized Solutions
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {products.map((item, i) => {
              const Icon = item.Icon;
              return (
                <div
                  key={i}
                  className="group p-12 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-blue-200 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:-translate-y-2 transition-transform shadow-lg shadow-blue-200">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 font-bold">
                    {item.desc}
                  </p>
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL ADHESION SECTION */}
      <section className="py-10 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl border border-slate-800">
              <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-8">
                Bonding Analysis
              </h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center text-white/50 text-xs border-b border-white/5 pb-4">
                  <span>Adhesive Viscosity</span>
                  <span className="text-white font-mono uppercase">
                    Optimal
                  </span>
                </div>
                <div className="flex justify-between items-center text-white/50 text-xs border-b border-white/5 pb-4">
                  <span>Curing Temperature</span>
                  <span className="text-white font-mono">140°C</span>
                </div>
                <div className="flex justify-between items-center text-white/50 text-xs">
                  <span>Shear Strength</span>
                  <span className="text-blue-400 font-mono font-bold tracking-widest">
                    PASSED
                  </span>
                </div>
              </div>
            </div>
            {/* Abstract Blue Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter italic uppercase">
              Advanced <br />
              <span className="text-blue-600 not-italic">Lamination.</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200 group hover:border-blue-400 transition-colors">
                <ShieldCheck className="text-blue-600 shrink-0" size={32} />
                <div>
                  <h4 className="font-bold">Scratch & Wear Resistance</h4>
                  <p className="text-sm text-slate-500 mt-1">
                    Diamond-infused top layers providing unparalleled protection
                    against daily abrasions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200 group hover:border-blue-400 transition-colors">
                <Zap className="text-blue-600 shrink-0" size={32} />
                <div>
                  <h4 className="font-bold">Precision Calibration</h4>
                  <p className="text-sm text-slate-500 mt-1">
                    Laser-guided thickness control ensuring absolute uniformity
                    across 10,000+ sheets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
