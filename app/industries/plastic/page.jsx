'use client';
import React from 'react';
import { 
  Zap, Recycle, ShieldCheck, ArrowRight, Layers, 
  Settings, Thermometer, FlaskConical, Box, Info 
} from 'lucide-react';

export default function PlasticIndustryPage() {
  const sectors = [
    { 
      title: "Injection Molding", 
      Icon: Box, 
      desc: "High-precision mold design for complex automotive and medical components." 
    },
    { 
      title: "Polymer Research", 
      Icon: FlaskConical, 
      desc: "Advanced R&D for biodegradable resins and high-tensile thermoplastic polymers." 
    },
    { 
      title: "Circular Economy", 
      Icon: Recycle, 
      desc: "Closed-loop recycling systems that transform waste into high-grade raw materials." 
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. HERO SECTION: Synthetic Excellence */}
      <section className="relative bg-slate-800 pt-32 pb-24 px-6 overflow-hidden">
        {/* Hexagonal Molecular Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0l21.65 12.5v25L25 50 3.35 37.5v-25z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")` }}>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Layers size={14} /> Advanced Polymer Science
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              Precision <br />
              <span className="text-blue-500 italic">Synthetics.</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl mb-12 leading-relaxed font-light">
              From high-performance engineering resins to sustainable bio-plastics, we provide the molecular foundation for modern manufacturing.
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
            <Settings size={160} className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:rotate-180 transition-transform duration-[3s]" />
            <div className="absolute inset-0 flex items-center justify-center">
                <Box size={100} className="text-white drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. MATERIAL PROPERTIES STRIP */}
      <div className="bg-blue-600 py-12 px-6 shadow-inner">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Heat Resistance", value: "280°C", icon: <Thermometer size={16}/> },
            { label: "Tensile Strength", value: "85 MPa", icon: <Zap size={16}/> },
            { label: "Recyclability", value: "100%", icon: <Recycle size={16}/> },
            { label: "SLA Delivery", value: "48 Hrs", icon: <Info size={16}/> }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center text-blue-200 mb-2">{stat.icon}</div>
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="text-[10px] text-blue-100 font-bold uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. INDUSTRY VERTICALS */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-800 mb-4 tracking-tight uppercase">Material Segments</h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {sectors.map((sector, i) => {
              const Icon = sector.Icon;
              return (
                <div key={i} className="group p-10 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500">
                  <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{sector.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{sector.desc}</p>
                  <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest cursor-pointer">
                    View Case Study <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PROCESS MONITORING SECTION */}
      <section className="py-24 bg-slate-50 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="text-5xl font-black text-slate-800 leading-tight tracking-tighter uppercase italic">
              Injection <br />
              <span className="text-blue-600 not-italic">Integrity.</span>
            </h2>
            <div className="space-y-6">
               <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <ShieldCheck className="text-blue-600 shrink-0" size={32} />
                  <div>
                    <h4 className="font-bold">Zero-Defect Quality</h4>
                    <p className="text-sm text-slate-500 mt-1">Real-time pressure and temperature sensors ensure every part meets the blueprint exactly.</p>
                  </div>
               </div>
               <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <Recycle className="text-blue-600 shrink-0" size={32} />
                  <div>
                    <h4 className="font-bold">Bio-Resin Compatibility</h4>
                    <p className="text-sm text-slate-500 mt-1">Our machinery is optimized for the latest biodegradable and plant-based polymers.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="flex-1 bg-white p-10 rounded-[3rem] shadow-2xl border border-blue-50 relative overflow-hidden">
             {/* Molecular Graphic Background */}
             <div className="absolute top-0 right-0 p-10 opacity-5 text-blue-900"><FlaskConical size={120}/></div>
             <h4 className="font-bold text-blue-900 mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span> Live Mold Analysis
             </h4>
             <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center text-sm font-bold border-b border-slate-100 pb-2">
                   <span>Clamp Force</span>
                   <span className="text-blue-600">450 Tons [ACTIVE]</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold border-b border-slate-100 pb-2">
                   <span>Melt Temp</span>
                   <span className="text-blue-600">245°C [STABLE]</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold">
                   <span>Cycle Time</span>
                   <span className="text-blue-600">14.2s [OPTIMAL]</span>
                </div>
                <div className="pt-4">
                   <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-blue-600 animate-pulse"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}