'use client';
import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  ArrowRight, 
  HandCoins, 
  BarChart4, 
  Globe2, 
  Rocket,
  CheckCircle2
} from 'lucide-react';

export default function MSMEPage() {
  const supportSectors = [
    { 
      title: "Business Scaling", 
      Icon: Rocket, 
      desc: "Strategic consulting and digital tools to help small businesses transition into medium enterprises." 
    },
    { 
      title: "MSME Financing", 
      Icon: HandCoins, 
      desc: "Collateral-free loan assistance and government subsidy guidance for micro-units." 
    },
    { 
      title: "Compliance Support", 
      Icon: ShieldCheck, 
      desc: "Automated tax, GST, and regulatory filing systems designed specifically for SMEs." 
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. HERO SECTION: Empowering Growth */}
      <section className="relative bg-white pt-32 pb-24 px-6 overflow-hidden">
        {/* Subtle Decorative Circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-6 border border-blue-200 uppercase tracking-widest">
              <Briefcase size={14} /> Supporting Local Economy
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-blue-900 mb-8 leading-[1.1] tracking-tight">
              Small Business. <br />
              <span className="text-blue-500 italic">Big Potential.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-xl mb-10 leading-relaxed font-light">
              We provide the digital infrastructure and financial expertise that MSMEs need to compete in a global marketplace.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 shadow-xl shadow-blue-200">
                Start Growing <ArrowRight size={18} />
              </button>
              <button className="border-2 border-blue-100 text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all">
                Check Eligibility
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md bg-blue-800 rounded-[3rem] p-12 relative shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
            <TrendingUp size={120} className="text-white absolute -top-10 -right-10 opacity-10 group-hover:scale-110 transition-transform" />
            
            <div className="relative z-10 text-white">
               <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-300 mb-2">Impact Score</h4>
               <p className="text-6xl font-black italic">84%</p>
               <p className="mt-4 text-blue-100 font-light leading-relaxed text-sm">Average revenue growth for MSMEs after 12 months of integration.</p>
               <div className="mt-8 flex -space-x-3">
                  {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-800 bg-blue-400"></div>)}
                  <div className="w-10 h-10 rounded-full border-2 border-blue-800 bg-white flex items-center justify-center text-blue-800 text-xs font-bold">+2k</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SME TRUST STRIP */}
      <div className="bg-blue-50 py-12 border-y border-blue-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center gap-8 opacity-60">
           <div className="flex items-center gap-2 font-bold text-blue-900"><ShieldCheck /> ISO Certified</div>
           <div className="flex items-center gap-2 font-bold text-blue-900"><Globe2 /> Global Standards</div>
           <div className="flex items-center gap-2 font-bold text-blue-900"><HandCoins /> Trusted Finance</div>
           <div className="flex items-center gap-2 font-bold text-blue-900"><Users /> Community Driven</div>
        </div>
      </div>

      {/* 3. CORE SUPPORT GRID */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-blue-900 mb-4 tracking-tighter">Growth Ecosystem</h2>
            <p className="text-slate-500">Specialized tools for micro and small enterprises.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {supportSectors.map((sector, i) => {
              const Icon = sector.Icon;
              return (
                <div key={i} className="group p-10 bg-white border border-slate-100 rounded-3xl hover:border-blue-300 hover:shadow-[0_20px_50px_rgba(30,58,138,0.1)] transition-all duration-500">
                  <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-2xl mb-8 group-hover:rotate-6 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{sector.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{sector.desc}</p>
                  <button className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SME SUCCESS ROADMAP */}
      <section className="py-24 bg-blue-900 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-white mb-8 tracking-tighter italic">From Micro <br /> To Massive.</h2>
            <div className="space-y-4">
              {[
                "Digital Onboarding in 24 Hours",
                "Access to Regional Hub Networks",
                "Direct Market Linkage Programs",
                "Continuous Mentorship Support"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md">
                  <CheckCircle2 className="text-blue-400" />
                  <p className="text-white font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-[3rem] shadow-3xl">
             <div className="mb-8">
                <h4 className="font-black text-blue-900 text-xl mb-1 uppercase tracking-tighter underline decoration-blue-500 decoration-4">Expansion Roadmap</h4>
                <p className="text-slate-400 text-sm">Typical 5-Year MSME Growth Curve</p>
             </div>
             <div className="h-64 flex items-end gap-2 border-b-2 border-slate-100 pb-1">
                {[30, 45, 40, 65, 95].map((h, i) => (
                   <div key={i} className="flex-1 bg-blue-600 rounded-t-lg transition-all hover:bg-blue-400 cursor-help relative group" style={{ height: `${h}%` }}>
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-[10px] p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                         Year {i + 1}: +{h}% ROI
                      </div>
                   </div>
                ))}
             </div>
             <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Start</span>
                <span>Scale</span>
                <span>Leader</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}