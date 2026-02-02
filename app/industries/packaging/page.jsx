'use client';
import React from 'react';
import { 
  Package, Truck, Recycle, Layers, ArrowRight, 
  Box, ShieldCheck, Zap, BarChart, CheckCircle2 
} from 'lucide-react';

export default function PackagingPage() {
  const services = [
    { 
      title: "Eco-Friendly Solutions", 
      Icon: Recycle, 
      desc: "100% biodegradable and recyclable materials that meet global sustainability standards." 
    },
    { 
      title: "Precision Corrugated", 
      Icon: Box, 
      desc: "Structural engineering tailored to maximize product protection while minimizing material waste." 
    },
    { 
      title: "Logistics Intelligence", 
      Icon: Truck, 
      desc: "Packaging designed to optimize palletization and significantly reduce freight costs." 
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      
      {/* 1. HERO SECTION: The Structural Core */}
      <section className="relative bg-slate-50 pt-32 pb-24 px-6 overflow-hidden">
        {/* Subtle Box Mesh Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%232563eb' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest mb-6 shadow-[0_10px_20px_rgba(37,99,235,0.3)]">
              <Package size={14} /> Material Engineering 4.0
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-blue-900 mb-8 leading-[1.05] tracking-tighter">
              Structural <br />
              <span className="text-blue-600 italic">Protection.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-xl mb-10 leading-relaxed font-light">
              We bridge the gap between high-strength durability and environmental responsibility. Your product deserves a shell that reflects your quality.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold transition-all flex items-center gap-2 shadow-2xl shadow-blue-200">
                Get Custom Specs <ArrowRight size={18} />
              </button>
              <button className="bg-white border-2 border-blue-100 text-blue-600 px-10 py-5 rounded-xl font-bold hover:bg-blue-50 transition-all">
                Material Catalog
              </button>
            </div>
          </div>
          
          {/* Abstract 3D Layer Graphic */}
          <div className="flex-1 w-full max-w-md aspect-square bg-blue-900 rounded-[3.5rem] relative shadow-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent"></div>
            <Layers size={140} className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute bottom-12 left-12 text-white">
              <p className="text-4xl font-black tracking-tighter italic">ISO 14001</p>
              <p className="text-sm font-bold text-blue-400 uppercase tracking-widest">Certified Sustainablity</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR: Industrial Reliability */}
      <div className="bg-blue-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Strength Retention", value: "98.5%", sub: "Compression Test" },
            { label: "Biodegradable", value: "100%", sub: "Certified Green" },
            { label: "Annual Capacity", value: "2.4B+", sub: "Units Delivered" },
            { label: "Logistics Savings", value: "22%", sub: "Volume Optimized" }
          ].map((stat, i) => (
            <div key={i} className="text-center border-r border-white/10 last:border-0">
              <div className="text-4xl font-black text-white italic">{stat.value}</div>
              <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mt-2">{stat.label}</div>
              <div className="text-[10px] text-white/40 mt-1 uppercase italic">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. VERTICALS: White Grid on Clean Base */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight">Our Core Framework</h2>
            <div className="h-2 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, i) => {
              const Icon = service.Icon;
              return (
                <div key={i} className="group p-12 bg-white border border-slate-100 rounded-[2.5rem] hover:border-blue-200 hover:shadow-[0_40px_80px_-20px_rgba(30,58,138,0.1)] transition-all duration-700">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 flex items-center justify-center rounded-2xl mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed mb-8 font-light">{service.desc}</p>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all underline underline-offset-8">
                    Review Specifications <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SUSTAINABILITY: Blue Accent Section */}
      <section className="py-24 bg-blue-50/50 px-6 border-y border-blue-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-blue-100 relative z-10">
               <ShieldCheck size={64} className="text-blue-600 mb-8" />
               <p className="text-3xl font-black text-blue-900 mb-8 leading-tight italic">
                 Packaging is no longer just a box; it s a statement of environmental accountability.
               </p>
               <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
                  <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold italic">VE</div>
                  <div>
                     <p className="font-bold text-slate-900">Vestigo Materials Lab</p>
                     <p className="text-xs text-blue-600 font-bold uppercase">R&D Division</p>
                  </div>
               </div>
            </div>
            {/* Decorative Blue Ring */}
            <div className="absolute -top-10 -right-10 w-64 h-64 border-[20px] border-blue-100 rounded-full -z-0"></div>
          </div>
          
          <div>
            <h2 className="text-5xl font-black text-blue-900 mb-8 leading-[1.1]">
              Engineered for <br />
              <span className="text-blue-600 underline decoration-blue-200 underline-offset-[12px]">Circularity.</span>
            </h2>
            <div className="space-y-4">
              {[
                "100% Post-Consumer Recycled Fiber",
                "Water-Based Non-Toxic Adhesives",
                "Stack-Weight Optimization Algorithms",
                "Zero-Waste Production Facilities"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center bg-white p-5 rounded-2xl border border-blue-100 shadow-sm hover:translate-x-2 transition-transform">
                  <CheckCircle2 size={24} className="text-blue-500" />
                  <p className="font-bold text-slate-700 tracking-tight">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}