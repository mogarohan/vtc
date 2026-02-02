'use client';
import React, { useState } from 'react';
import { 
  Cpu, Code2, Cloud, ShieldCheck, Terminal, 
  Database, Laptop, ArrowRight, Zap, Globe 
} from 'lucide-react';

export default function ITFieldPage() {
  const itSectors = [
    { 
      name: "Software Development", 
      Icon: Code2, 
      desc: "Custom enterprise applications and scalable microservices architecture." 
    },
    { 
      name: "Cloud Infrastructure", 
      Icon: Cloud, 
      desc: "Secure AWS/Azure migration and managed server-less deployments." 
    },
    { 
      name: "Cyber Security", 
      Icon: ShieldCheck, 
      desc: "Zero-trust security protocols and real-time threat detection systems." 
    }
  ];

  return (
    <div className="min-h-screen bg-white font-mono text-slate-900 selection:bg-cyan-100">
      
      {/* 1. HERO SECTION: The Digital Frontier */}
      <section className="relative bg-slate-950 pt-32 pb-24 px-6 overflow-hidden">
        {/* Binary/Matrix Style Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#06b6d4 1px, transparent 1px)`, backgroundSize: '20px 20px' }}>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-[10px] font-bold mb-6 border border-cyan-500/20 uppercase tracking-[0.3em]">
            <Terminal size={14} /> System.init();
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1] tracking-tighter">
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 italic">Digital Value.</span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed font-sans">
            We provide full-stack IT solutions designed for the modern era—from legacy system modernization to AI-driven automation.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <button className="bg-blue-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-sm font-bold transition-all flex items-center gap-3 shadow-lg shadow-blue-600/20">
              Start Project <ArrowRight size={18} />
            </button>
            <button className="border border-slate-700 text-white px-8 py-4 rounded-sm font-bold hover:bg-white/5 transition-all">
              Tech Stack
            </button>
          </div>
        </div>
      </section>

      {/* 2. TECH STACK STRIP */}
      <div className="bg-blue-600 py-6">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex justify-around items-center opacity-50 grayscale invert brightness-0 gap-8 animate-pulse">
             <span className="font-black text-white text-xl">DOCKER</span>
             <span className="font-black text-white text-xl">KUBERNETES</span>
             <span className="font-black text-white text-xl">PYTHON</span>
             <span className="font-black text-white text-xl">REACT</span>
             <span className="font-black text-white text-xl">NODE.JS</span>
          </div>
        </div>
      </div>

      {/* 3. IT VERTICALS: White Cards on Blue Shadow */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Core Capabilities</h2>
            <div className="h-1 w-16 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {itSectors.map((sector, i) => {
              const Icon = sector.Icon;
              return (
                <div key={i} className="group p-10 bg-white border-l-4 border-blue-600 shadow-sm hover:shadow-2xl transition-all duration-500">
                  <div className="w-14 h-14 bg-slate-950 text-cyan-400 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{sector.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 font-sans">{sector.desc}</p>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                    System Specs <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DATA VISUALIZATION SECTION */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="bg-slate-950 p-8 rounded-lg shadow-2xl border border-slate-800 font-mono text-sm overflow-hidden">
                <div className="flex gap-2 mb-4 border-b border-slate-800 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-cyan-400">root@vestigo:~$ <span className="text-white">deploy --cluster --prod</span></p>
                <p className="text-slate-500 mt-2">Checking system integrity...</p>
                <p className="text-green-500 mt-1">[OK] Firewall Active</p>
                <p className="text-green-500 mt-1">[OK] Database Synced</p>
                <p className="text-blue-400 mt-1 animate-pulse italic">Uploading assets to CDN...</p>
             </div>
             {/* Abstract Circuit Line */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="order-1 lg:order-2">
             <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight uppercase italic">
               High-Performance <br />
               <span className="text-blue-600 not-italic">Infrastructure.</span>
             </h2>
             <div className="space-y-6">
               <div className="flex gap-4">
                  <Database className="text-blue-600 shrink-0" />
                  <p className="text-slate-600"><span className="font-bold text-slate-900 underline decoration-blue-200">99.99% Uptime SLA:</span> Enterprise-grade reliability for mission-critical apps.</p>
               </div>
               <div className="flex gap-4">
                  <Globe className="text-blue-600 shrink-0" />
                  <p className="text-slate-600"><span className="font-bold text-slate-900 underline decoration-blue-200">Global Edge:</span> Content delivery networks that bring data closer to your users.</p>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}