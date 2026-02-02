'use client';
import React from 'react';
import { 
  Factory, Droplets, Recycle, Settings, ArrowRight, 
  Wind, ShieldCheck, BarChart3, Waves, Zap 
} from 'lucide-react';

export default function PaperMillPage() {
  const processes = [
    { 
      title: "Pulp Processing", 
      Icon: Droplets, 
      desc: "Advanced chemical and mechanical pulping with 90% water recovery rates." 
    },
    { 
      title: "High-Speed Press", 
      Icon: Settings, 
      desc: "Precision drying and pressing for consistent GSM and tensile strength." 
    },
    { 
      title: "Circular Fiber", 
      Icon: Recycle, 
      desc: "Post-consumer waste integration for sustainable high-grade paper output." 
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. HERO SECTION: The Industrial Core */}
      <section className="relative bg-[#020617] pt-32 pb-24 px-6 overflow-hidden">
        {/* Subtle Paper Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-blue-500/20">
              <Factory size={14} /> Industrial Excellence
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              Pulp & Paper <br />
              <span className="text-blue-500 italic underline decoration-blue-900 decoration-8 underline-offset-4">Redefined.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed font-light">
              Engineering the future of fiber. Our mills combine high-capacity output with zero-liquid discharge (ZLD) technologies for a cleaner, stronger tomorrow.
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
             <Waves size={150} className="text-blue-500 opacity-10 absolute -bottom-10 -left-10 group-hover:scale-110 transition-transform duration-1000" />
             <div className="absolute top-12 right-12 text-right">
                <p className="text-6xl font-black text-white italic opacity-50">98%</p>
                <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">Fiber Recovery</p>
             </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCTION METRICS STRIP */}
      <div className="bg-blue-600 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Daily Output", value: "850t" },
            { label: "Water Savings", value: "1.2M L" },
            { label: "Uptime", value: "99.8%" },
            { label: "Carbon Offset", value: "45%" }
          ].map((stat, i) => (
            <div key={i} className="text-center border-r border-white/20 last:border-0">
              <div className="text-3xl font-black text-white tracking-tighter italic">{stat.value}</div>
              <div className="text-[10px] text-blue-100 font-bold uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. PROCESS MODULES: White & Steel Blue */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase">Mill Engineering</h2>
              <p className="text-slate-500">End-to-end automation for sustainable pulp and paper manufacturing.</p>
            </div>
            <div className="h-px flex-1 bg-slate-200 mb-4 mx-12 hidden md:block"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {processes.map((proc, i) => {
              const Icon = proc.Icon;
              return (
                <div key={i} className="group p-12 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{proc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{proc.desc}</p>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                    Process Analytics <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ECO-MILL MONITORING SECTION */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 order-2 lg:order-1 relative">
             <div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 shadow-2xl relative z-10">
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                   <h4 className="text-white font-bold text-sm">Live Resource Monitor</h4>
                   <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                   </div>
                </div>
                <div className="space-y-6">
                   <div className="h-12 bg-white/5 rounded-lg flex items-center px-4 justify-between">
                      <span className="text-xs text-slate-400">Steam Pressure</span>
                      <span className="text-blue-400 font-mono text-xs italic">12.4 BAR [OK]</span>
                   </div>
                   <div className="h-12 bg-white/5 rounded-lg flex items-center px-4 justify-between">
                      <span className="text-xs text-slate-400">Pulp Consistency</span>
                      <span className="text-blue-400 font-mono text-xs italic">3.2% [NOMINAL]</span>
                   </div>
                   <div className="h-12 bg-blue-600 rounded-lg flex items-center px-4 justify-between shadow-lg">
                      <span className="text-xs text-white font-bold">ZLD Status</span>
                      <span className="text-white font-mono text-xs font-black">ACTIVE</span>
                   </div>
                </div>
             </div>
             {/* Circular Fluid Motion Decor */}
             <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -z-0"></div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
             <h2 className="text-5xl font-black text-slate-900 mb-8 leading-tight">
                Resource <br />
                <span className="text-blue-600 italic underline decoration-blue-100 decoration-8 underline-offset-8">Circularities.</span>
             </h2>
             <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 group hover:border-blue-400 transition-colors">
                   <div className="bg-blue-600 text-white p-3 rounded-xl h-fit shadow-lg shadow-blue-200"><Waves size={24}/></div>
                   <div>
                      <h4 className="font-bold text-lg">Zero-Liquid Discharge</h4>
                      <p className="text-sm text-slate-500 mt-1">Closed-loop water systems that eliminate chemical runoff into local ecosystems.</p>
                   </div>
                </div>
                <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 group hover:border-blue-400 transition-colors">
                   <div className="bg-blue-600 text-white p-3 rounded-xl h-fit shadow-lg shadow-blue-200"><Wind size={24}/></div>
                   <div>
                      <h4 className="font-bold text-lg">Heat Recovery (CHP)</h4>
                      <p className="text-sm text-slate-500 mt-1">Harnessing excess steam for co-generation of electrical power for mill operations.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}