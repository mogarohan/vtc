"use client";
import React from "react";
import {
  Scissors,
  Layers,
  Recycle,
  Wind,
  ArrowRight,
  Settings,
  CheckCircle2,
  ShieldCheck,
    Flame,
  Truck,
  ShieldAlert,
  PauseCircle,
  Leaf,
  Users,
  Zap,
  Factory,
  Waves,
  Ship,
} from "lucide-react";

export default function TextileIndustryPage() {
  const categories = [
  {
    title: "Fire & Property Damage",
    Icon: Flame,
    desc: "Fabric combustibility, machinery fires, warehouse blazes, and inventory losses impacting manufacturing facilities.",
  },
  {
    title: "Supply Chain Disruption",
    Icon: Truck,
    desc: "Raw material shortages, shipping delays, and vendor failures affecting production continuity and delivery timelines.",
  },
  {
    title: "Product Liability",
    Icon: ShieldAlert,
    desc: "Fabric defects, chemical reactions, safety standard violations, and product recalls impacting brand trust.",
  },
  {
    title: "Business Interruption",
    Icon: PauseCircle,
    desc: "Production stoppages, seasonal demand fluctuations, and order cancellations leading to revenue loss.",
  },
  {
    title: "Environmental Compliance",
    Icon: Leaf,
    desc: "Dye discharge, water pollution, waste handling, and adherence to chemical and environmental regulations.",
  },
  {
    title: "Labor & Employment",
    Icon: Users,
    desc: "Worker safety, factory conditions, compliance audits, and wage or employment-related disputes.",
  },
];
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. HERO SECTION: The Fabric of Innovation */}
      <section className="relative bg-[#0F172A] pt-32 pb-24 px-6 overflow-hidden">
        {/* Subtle Vertical Thread Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, #3b82f6 0px, #3b82f6 1px, transparent 1px, transparent 20px)`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Factory size={14} /> Weaving Sustainable Fashion
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              Textile <br />
              <span className="text-blue-500 italic"> Insurance Solutions</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed font-bold">
              Fast fashion evolution, sustainable materials innovation, automation in manufacturing, direct-to-consumer models, circular economy adoption, and ethical sourcing reshaping global textile industry.
            </p>
            
          </div>

          {/* Abstract Thread Graphic */}
          <div className="flex-1 w-full max-w-md aspect-square bg-blue-900 rounded-[4rem] relative shadow-3xl overflow-hidden group border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-transparent"></div>
            <Wind
              size={160}
              className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 group-hover:scale-125 transition-transform duration-1000"
            />
            <div className="absolute bottom-12 left-12">
              <p className="text-4xl font-black text-white italic">
                240 <span className="text-lg">GSM</span>
              </p>
              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">
                Premium Fabric Weight
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT SEGMENTS */}
      <section className="py-14 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-800 mb-4 tracking-tight uppercase">
              Specialized Verticals
            </h2>
            <div className="h-1.5 w-50 bg-sky-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {categories.map((item, i) => {
              const Icon = item.Icon;
              return (
                <div
                  key={i}
                  className="group p-12 bg-white border border-slate-100 rounded-2xl hover:border-indigo-200 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {item.desc}
                  </p>
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTION FLOW SECTION */}
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
