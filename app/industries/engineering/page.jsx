'use client';
import React from 'react';
import { motion } from 'framer-motion';  // Install: npm install framer-motion
import { 
  DraftingCompass, Cpu, Layers, HardHat, ArrowRight, 
  Ruler, ShieldCheck, Settings, PenTool, ChevronRight, Zap
} from 'lucide-react';

const EngineeringSuite = () => {
  const modules = [
    {
      title: "Design Automation",
      desc: "CAD aur BIM workflows ko automate karein taaki engineering cycle time 40% tak kam ho sake.",
      icon: <DraftingCompass className="w-8 h-8" />,
      tag: "Efficiency"
    },
    {
      title: "Structural Integrity",
      desc: "Real-time stress analysis aur structural health monitoring system for mega-projects.",
      icon: <ShieldCheck className="w-8 h-8" />,
      tag: "Reliability"
    },
    {
      title: "PLM Integration",
      desc: "Concept se lekar commissioning tak, Product Lifecycle Management ko digital environment mein manage karein.",
      icon: <Layers className="w-8 h-8" />,
      tag: "Lifecycle"
    },
    {
      title: "Smart Field Assets",
      desc: "IoT-enabled sensors jo field machinery aur on-site performance ka live data deliver karte hain.",
      icon: <Settings className="w-8 h-8" />,
      tag: "Operational"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. HERO SECTION - High Impact */}
      <section className="relative bg-[#020617] pt-32 pb-24 px-6 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{ backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }}></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-8 border border-blue-500/20 uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Industry 4.0 Standard
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Engineering <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-indigo-400 bg-clip-text text-transparent">
                Redefined.
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
              Vestigo delivers the precision of classical engineering with the speed of modern cloud computing. Deploy faster, build safer.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <button className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Start Integration <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold transition-all backdrop-blur-sm">
                View Blueprint
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS STRIP - Client Proof */}
      <div className="relative z-20 -mt-12 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-px bg-white rounded-2xl shadow-2xl shadow-blue-900/10 overflow-hidden border border-slate-100">
          {[
            { label: "Engineering Accuracy", value: "99.99%", sub: "ISO Certified" },
            { label: "Project Deployments", value: "450+", sub: "Global Reach" },
            { label: "Cost Reduction", value: "30%", sub: "Operational" },
            { label: "Uptime Support", value: "24/7", sub: "Live Desk" }
          ].map((stat, i) => (
            <div key={i} className="p-8 text-center bg-white border-r border-slate-50 last:border-0 hover:bg-blue-50/50 transition-colors">
              <div className="text-3xl font-black text-slate-900">{stat.value}</div>
              <div className="text-[10px] text-blue-600 font-black uppercase tracking-widest mt-1">{stat.label}</div>
              <div className="text-xs text-slate-400 mt-1 italic">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CORE MODULES - Modern Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Core Technology Stack</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((m, i) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={i} 
                className="group p-10 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500"
              >
                <div className="mb-8 relative">
                  <div className="absolute inset-0 bg-blue-600 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                    {m.icon}
                  </div>
                </div>
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest px-2 py-1 bg-blue-50 rounded-md">{m.tag}</span>
                <h3 className="text-xl font-bold mt-4 mb-3 group-hover:text-blue-600 transition-colors">{m.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ECOSYSTEM - High Tech Visualization */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-black mb-8 tracking-tight leading-tight">
              One Interface. <br />
              <span className="text-blue-600">Infinite Control.</span>
            </h2>
            
            <div className="space-y-6">
              {[
                { icon: <Zap size={18} />, title: "Real-time Telemetry", desc: "Immediate data sync across all project stakeholders." },
                { icon: <HardHat size={18} />, title: "Safety First Protocol", desc: "Automated compliance checks for on-site personnel." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
                  <div className="h-10 w-10 shrink-0 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* The "Control Panel" Card */}
            <div className="bg-[#0f172a] rounded-[3rem] p-8 shadow-3xl border border-slate-800 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="col-span-2 flex justify-between items-center mb-4">
                  <div className="text-white font-mono text-xs opacity-50 tracking-widest">SYSTEM_STATUS: ACTIVE</div>
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5">
                   <div className="text-xs text-blue-400 font-mono mb-1">Load Factor</div>
                   <div className="text-3xl font-black text-white italic">0.82 <span className="text-xs font-normal opacity-40">kN</span></div>
                </div>
                <div className="bg-blue-600 p-6 rounded-2xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                   <div className="text-xs text-blue-100 font-mono mb-1">Active Nodes</div>
                   <div className="text-3xl font-black text-white italic">14</div>
                </div>
                <div className="col-span-2 bg-slate-800/50 p-6 rounded-2xl border border-white/5 flex justify-between items-center">
                   <div>
                     <div className="text-xs text-blue-400 font-mono mb-1">Sync Progress</div>
                     <div className="w-48 h-1.5 bg-slate-700 rounded-full mt-2 overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        className="h-full bg-blue-500" 
                       />
                     </div>
                   </div>
                   <div className="text-right text-white font-black text-xl">85%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-10 text-slate-900 tracking-tighter italic">
            Build Bold. <br />Build with Vestigo.
          </h2>
          <button className="bg-slate-950 hover:bg-black text-white px-12 py-5 rounded-full font-bold transition-all flex items-center gap-3 mx-auto shadow-2xl">
            Request Enterprise Access <ArrowRight size={20} className="text-blue-500" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default EngineeringSuite;