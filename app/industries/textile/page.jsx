'use client';
import React from 'react';
import { 
  Scissors, Layers, Recycle, Wind, ArrowRight, 
  Settings, CheckCircle2, ShieldCheck, Zap, Factory 
} from 'lucide-react';

export default function TextileIndustryPage() {
  const categories = [
    { 
      title: "Technical Fabrics", 
      Icon: Layers, 
      desc: "High-performance polymers and synthetic fibers for industrial and medical use." 
    },
    { 
      title: "Precision Weaving", 
      Icon: Settings, 
      desc: "High-speed air-jet and rapier loom technology for consistent fabric density." 
    },
    { 
      title: "Sustainable Dyeing", 
      Icon: Recycle, 
      desc: "Closed-loop water systems and eco-friendly dyes to minimize environmental impact." 
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. HERO SECTION: The Fabric of Innovation */}
      <section className="relative bg-[#0F172A] pt-32 pb-24 px-6 overflow-hidden">
        {/* Subtle Vertical Thread Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `repeating-linear-gradient(90deg, #3b82f6 0px, #3b82f6 1px, transparent 1px, transparent 20px)` }}>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Factory size={14} /> Global Textile Leader
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              Precision <br />
              <span className="text-blue-500 italic">Interwoven.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed font-light">
              We specialize in the engineering of advanced fibers and high-density fabrics. Our mills combine heritage craftsmanship with Industry 4.0 automation.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-full font-bold transition-all flex items-center gap-3 shadow-xl shadow-indigo-900/40">
                View Material Catalog <ArrowRight size={18} />
              </button>
              <button className="border border-slate-700 text-white px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-all">
                Our Process
              </button>
            </div>
          </div>
          
          {/* Abstract Thread Graphic */}
          <div className="flex-1 w-full max-w-md aspect-square bg-blue-900 rounded-[4rem] relative shadow-3xl overflow-hidden group border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-transparent"></div>
            <Wind size={160} className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 group-hover:scale-125 transition-transform duration-1000" />
            <div className="absolute bottom-12 left-12">
                <p className="text-4xl font-black text-white italic">240 <span className="text-lg">GSM</span></p>
                <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Premium Fabric Weight</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TEXTILE METRICS STRIP */}
      <div className="bg-indigo-600 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Tensile Strength", value: "95 N/cm" },
            { label: "Yarn Count", value: "80s-120s" },
            { label: "Eco-Efficiency", value: "100%" },
            { label: "Annual Output", value: "12M mtr" }
          ].map((stat, i) => (
            <div key={i} className="text-center border-r border-white/20 last:border-0">
              <div className="text-3xl font-black text-white italic tracking-tighter">{stat.value}</div>
              <div className="text-[10px] text-blue-100 font-bold uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. PRODUCT SEGMENTS */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-800 mb-4 tracking-tight uppercase">Specialized Verticals</h2>
            <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {categories.map((item, i) => {
              const Icon = item.Icon;
              return (
                <div key={i} className="group p-12 bg-white border border-slate-100 rounded-2xl hover:border-indigo-200 hover:shadow-2xl transition-all duration-500">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{item.desc}</p>
                  <div className="flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                    Fiber Specs <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTION FLOW SECTION */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="bg-slate-900 p-10 rounded-[3rem] shadow-2xl border border-slate-800">
                <h4 className="text-blue-400 font-bold uppercase text-xs tracking-[0.3em] mb-8">System Analytics</h4>
                <div className="space-y-6">
                   <div className="flex justify-between items-center text-white/50 text-xs border-b border-white/5 pb-4">
                      <span>Loom Speed</span>
                      <span className="text-white font-mono">1,200 RPM [OPTIMAL]</span>
                   </div>
                   <div className="flex justify-between items-center text-white/50 text-xs border-b border-white/5 pb-4">
                      <span>Thread Tension</span>
                      <span className="text-white font-mono">2.4 CN/TEX [STABLE]</span>
                   </div>
                   <div className="flex justify-between items-center text-white/50 text-xs">
                      <span>Humidity Control</span>
                      <span className="text-white font-mono">65% [ACTIVE]</span>
                   </div>
                </div>
             </div>
             {/* Abstract Circuit/Thread Line */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-indigo-500/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="order-1 lg:order-2">
             <h2 className="text-5xl font-black text-slate-800 mb-8 tracking-tighter italic">
               The Science of <br />
               <span className="text-indigo-600 not-italic">Textile Strength.</span>
             </h2>
             <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                   <ShieldCheck className="text-indigo-600 shrink-0" size={32} />
                   <div>
                      <h4 className="font-bold">Zero-Flaw Guarantee</h4>
                      <p className="text-sm text-slate-500 mt-1">Automated optical inspection systems scan every centimeter of fabric for weaving irregularities.</p>
                   </div>
                </div>
                <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                   <Zap className="text-indigo-600 shrink-0" size={32} />
                   <div>
                      <h4 className="font-bold">Rapid Prototyping</h4>
                      <p className="text-sm text-slate-500 mt-1">Go from fiber concept to physical sample in under 72 hours with our digital loom integration.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}