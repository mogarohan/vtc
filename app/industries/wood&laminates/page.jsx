'use client';
import React from 'react';
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
  HardHat
} from 'lucide-react';

export default function WoodLaminationPage() {
  const products = [
    { 
      title: "High-Pressure Laminates", 
      Icon: Layers, 
      desc: "Multi-layered decorative surfaces with superior wear and impact resistance." 
    },
    { 
      title: "Marine Grade Plywood", 
      Icon: Droplets, 
      desc: "Water-resistant core technology engineered for high-moisture environments." 
    },
    { 
      title: "Acoustic Wood Panels", 
      Icon: Maximize, 
      desc: "Perforated lamination designs optimized for sound absorption and structural aesthetics." 
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      
      {/* 1. HERO SECTION: The Core of Quality */}
      <section className="relative bg-[#0F172A] pt-32 pb-24 px-6 overflow-hidden">
        {/* Subtle Horizontal Grain Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: `repeating-linear-gradient(0deg, #3b82f6 0px, #3b82f6 1px, transparent 1px, transparent 30px)` }}>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg shadow-blue-900/40">
              <HardHat size={14} /> Industrial Timber Solutions
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter uppercase">
              Surfaces <br />
              <span className="text-blue-500 italic">Engineered.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed font-light">
              We redefine timber through advanced lamination. Our boards combine the natural strength of wood with the impenetrable durability of high-tech polymers.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-sm font-bold transition-all flex items-center gap-3 shadow-xl">
                Technical Data Sheets <ArrowRight size={18} />
              </button>
              <button className="border border-slate-700 text-white px-10 py-4 rounded-sm font-bold hover:bg-white/5 transition-all">
                Sample Request
              </button>
            </div>
          </div>
          
          {/* Abstract Layered Graphic */}
          <div className="flex-1 w-full max-w-md aspect-video bg-blue-900 rounded-3xl relative shadow-3xl overflow-hidden group border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
               {/* Simulating Lamination Layers */}
               {[1,2,3,4].map(i => (
                 <div key={i} className="h-4 bg-white/10 rounded-full w-4/5 group-hover:bg-blue-500/40 transition-all duration-700" style={{ opacity: i * 0.2 }}></div>
               ))}
            </div>
            <div className="absolute bottom-8 left-8">
                <p className="text-3xl font-black text-white italic">0.8 <span className="text-sm">mm</span></p>
                <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest text-left">Precision Micron Layer</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DURABILITY METRICS STRIP */}
      <div className="bg-blue-600 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Bending Strength", value: "45 N/mm²" },
            { label: "Moisture Resistance", value: "ASTM-D1037" },
            { label: "Formaldehyde", value: "E1 Grade" },
            { label: "Density", value: "750 kg/m³" }
          ].map((stat, i) => (
            <div key={i} className="text-center border-r border-white/20 last:border-0">
              <div className="text-3xl font-black text-white italic tracking-tighter">{stat.value}</div>
              <div className="text-[10px] text-blue-100 font-bold uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. PRODUCT CATEGORIES */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-blue-950 mb-4 tracking-tight uppercase">Specialized Solutions</h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {products.map((item, i) => {
              const Icon = item.Icon;
              return (
                <div key={i} className="group p-12 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-blue-200 hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:-translate-y-2 transition-transform shadow-lg shadow-blue-200">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light">{item.desc}</p>
                  <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                    View Certifications <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL ADHESION SECTION */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl border border-slate-800">
                <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-8">Bonding Analysis</h4>
                <div className="space-y-6">
                   <div className="flex justify-between items-center text-white/50 text-xs border-b border-white/5 pb-4">
                      <span>Adhesive Viscosity</span>
                      <span className="text-white font-mono uppercase">Optimal</span>
                   </div>
                   <div className="flex justify-between items-center text-white/50 text-xs border-b border-white/5 pb-4">
                      <span>Curing Temperature</span>
                      <span className="text-white font-mono">140°C</span>
                   </div>
                   <div className="flex justify-between items-center text-white/50 text-xs">
                      <span>Shear Strength</span>
                      <span className="text-blue-400 font-mono font-bold tracking-widest">PASSED</span>
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
                      <p className="text-sm text-slate-500 mt-1">Diamond-infused top layers providing unparalleled protection against daily abrasions.</p>
                   </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200 group hover:border-blue-400 transition-colors">
                   <Zap className="text-blue-600 shrink-0" size={32} />
                   <div>
                      <h4 className="font-bold">Precision Calibration</h4>
                      <p className="text-sm text-slate-500 mt-1">Laser-guided thickness control ensuring absolute uniformity across 10,000+ sheets.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>


    </div>
  );
}