'use client';
import React from 'react';
import { 
  Ship, Anchor, Truck, Box, ArrowRight, 
  Maximize, ShieldCheck, Globe, Compass, Gauge 
} from 'lucide-react';

export default function ShippingODCPage() {
  const cargoTypes = [
    { 
      title: "Ocean Freight", 
      Icon: Ship, 
      desc: "Full Container Load (FCL) and LCL shipments with global port coverage." 
    },
    { 
      title: "ODC & Heavy Lift", 
      Icon: Maximize, 
      desc: "Specialized transport for oversized machinery, turbines, and industrial boilers." 
    },
    { 
      title: "Intermodal Logistics", 
      Icon: Truck, 
      desc: "Seamless transition between sea, rail, and road for door-to-door delivery." 
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. HERO SECTION: The Global Fleet */}
      <section className="relative bg-[#020617] pt-32 pb-24 px-6 overflow-hidden">
        {/* World Map Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='%23ffffff'/%3E%3C/svg%3E")` }}>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Anchor size={14} /> Global Supply Chain 
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1] tracking-tighter">
              Bigger Cargo. <br />
              <span className="text-blue-500 italic">Broader Reach.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed font-light">
              Specializing in the impossible. From standard containers to complex Over Dimensional Cargo (ODC), we move the world's infrastructure.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-sm font-bold transition-all flex items-center gap-3 shadow-xl shadow-blue-900/40">
                Request Freight Quote <ArrowRight size={18} />
              </button>
              <button className="border border-slate-700 text-white px-10 py-4 rounded-sm font-bold hover:bg-white/5 transition-all">
                Track Shipment
              </button>
            </div>
          </div>
          
          {/* Ship Visualization */}
          <div className="flex-1 w-full bg-slate-900 h-[500px] rounded-[3rem] relative overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent"></div>
             <Ship size={120} className="text-white opacity-20" />
             <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="flex justify-between items-center text-xs text-blue-400 font-bold uppercase tracking-widest">
                   <span>Vessel Status</span>
                   <span className="text-green-500 italic">On Schedule</span>
                </div>
                <div className="mt-2 h-1 bg-slate-800 rounded-full overflow-hidden">
                   <div className="w-2/3 h-full bg-blue-500"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. LOGISTICS STATS: Blue Ribbon Quality */}
      <div className="bg-blue-600 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Transit Accuracy", value: "99.4%" },
            { label: "ODC Capacity", value: "500t+" },
            { label: "Global Ports", value: "180+" },
            { label: "Live Support", value: "24/7" }
          ].map((stat, i) => (
            <div key={i} className="text-center border-r border-white/20 last:border-0">
              <div className="text-3xl font-black text-white italic">{stat.value}</div>
              <div className="text-[10px] text-blue-100 font-bold uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CARGO VERTICALS */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase">Specialized Solutions</h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {cargoTypes.map((cargo, i) => {
              const Icon = cargo.Icon;
              return (
                <div key={i} className="group p-10 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-2xl transition-all duration-500">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{cargo.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{cargo.desc}</p>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                    View Case Study <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ODC TECHNICAL SPEC SECTION */}
      <section className="py-24 bg-white px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-5xl font-black text-slate-900 mb-8 leading-tight italic uppercase">
              Heavy Lift <br />
              <span className="text-blue-600 not-italic tracking-tighter">Engineering.</span>
            </h2>
            <div className="space-y-6">
               <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 group hover:border-blue-400 transition-colors">
                  <div className="bg-blue-900 text-white p-3 rounded-xl h-fit"><Maximize size={24}/></div>
                  <div>
                    <h4 className="font-bold">Project Cargo Planning</h4>
                    <p className="text-sm text-slate-500 mt-1">Route surveys and feasibility studies for oversized equipment transport.</p>
                  </div>
               </div>
               <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200 group hover:border-blue-400 transition-colors">
                  <div className="bg-blue-900 text-white p-3 rounded-xl h-fit"><ShieldCheck size={24}/></div>
                  <div>
                    <h4 className="font-bold">Risk Management</h4>
                    <p className="text-sm text-slate-500 mt-1">Comprehensive insurance and real-time GPS tracking for high-value assets.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* ODC Visual Placeholder */}
          <div className="flex-1 bg-slate-900 p-12 rounded-[4rem] relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-10 opacity-5 text-white"><Gauge size={120}/></div>
             <div className="relative z-10 border-l-4 border-blue-500 pl-8">
                <p className="text-white text-4xl font-black italic">500 <span className="text-xl">Metric Tons</span></p>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mt-2">Single Lift Capacity</p>
                <div className="mt-8 flex gap-4">
                   <div className="h-2 w-16 bg-blue-600 rounded-full"></div>
                   <div className="h-2 w-16 bg-white/20 rounded-full"></div>
                   <div className="h-2 w-16 bg-white/20 rounded-full"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}