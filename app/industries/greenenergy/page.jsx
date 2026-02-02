import React from 'react';
import { 
  Droplets, Sun, Wind, Battery, Zap, 
  ArrowRight, Globe, BarChart3, ShieldCheck 
} from 'lucide-react';

const BlueEngineeringPage = () => {
  const stats = [
    { label: "Carbon Offset", value: "12.5k", unit: "Tons" },
    { label: "Energy Output", value: "450", unit: "MW" },
    { label: "Grid Stability", value: "99.9", unit: "%" },
    { label: "Active Nodes", value: "1.2k", unit: "Global" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* 1. HERO SECTION: Technical & Professional */}
      <section className="relative bg-[#020617] pt-32 pb-24 px-6 overflow-hidden">
        {/* Technical Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: `linear-gradient(#2563eb 0.5px, transparent 0.5px), linear-gradient(90deg, #2563eb 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}>
        </div>
        
        {/* Blue Glow Effect */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-8 border border-blue-400/20 uppercase tracking-widest">
            <Zap size={14} className="animate-pulse" /> Powering Global Infrastructure
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            Clean Energy. <br />
            <span className="text-blue-500 italic">Engineered.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            Providing high-precision renewable solutions through advanced hydro-integration, solar grid analytics, and carbon-neutral thermal systems.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-5">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-3 shadow-xl shadow-blue-900/40">
              Technical Consultation <ArrowRight size={18} />
            </button>
            <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm">
              Download Capabilities PDF
            </button>
          </div>
        </div>
      </section>

      {/* 2. LIVE METRICS STRIP: "The Glass Effect" */}
      <div className="relative z-20 -mt-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 text-center bg-white/95 hover:bg-blue-50 transition-colors duration-300">
              <div className="text-3xl font-black text-slate-900 italic">
                {stat.value}<span className="text-sm ml-1 text-blue-600 font-medium">{stat.unit}</span>
              </div>
              <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. TECHNOLOGY GRID: Blue Cards */}
      <section className="py-32 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Core Systems</h2>
              <p className="text-slate-500">Scalable renewable infrastructure designed for heavy industrial use.</p>
            </div>
            <div className="h-px flex-1 bg-slate-200 mb-4 mx-8 hidden md:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Droplets />, title: "Hydro Systems", desc: "Small to large scale hydroelectric turbine integration with smart flow control." },
              { icon: <Sun />, title: "Solar Analytics", desc: "Real-time photovoltaic monitoring and predictive maintenance algorithms." },
              { icon: <Battery />, title: "Storage Arrays", desc: "Liquid-cooled battery energy storage systems (BESS) for grid balancing." }
            ].map((tech, i) => (
              <div key={i} className="group p-10 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{tech.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">{tech.desc}</p>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm cursor-pointer group-hover:gap-4 transition-all">
                  View Case Study <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlueEngineeringPage;