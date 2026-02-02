import React from 'react';
import ReactElement from 'react';
import { 
  Waves, 
  MapPin, 
  Utensils, 
  Bed, 
  Star, 
  ArrowRight, 
  Calendar, 
  ShieldCheck,
  Compass,
  PhoneCall
} from 'lucide-react';

const BlueHospitalityPage = () => {
  const highlights = [
    { label: "Guest Satisfaction", value: "98", unit: "%" },
    { label: "Luxury Suites", value: "120", unit: "Rooms" },
    { label: "Private Beaches", value: "03", unit: "Sites" },
    { label: "Global Awards", value: "15", unit: "Wins" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      
      {/* 1. HERO SECTION: Serene & Inviting */}
      <section className="relative bg-[#020617] pt-32 pb-40 px-6 overflow-hidden">
        {/* Soft Wave Pattern Overlay */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: `radial-gradient(#2563eb 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }}>
        </div>
        
        {/* Azure Glow Effect - Mimicking a pool/ocean glow */}
        <div className="absolute -bottom-48 -right-24 w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 text-xs font-bold mb-8 border border-blue-400/20 uppercase tracking-[0.2em]">
            <Star size={14} className="text-blue-400" /> Five-Star Blue Label Experience
          </div>
          
          <h1 className="text-6xl md:text-9xl font-extralight text-white mb-8 leading-tight tracking-tighter">
            The Art of <br />
            <span className="text-blue-500 font-black italic">Serenity.</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Discover a sanctuary where architectural precision meets the calming essence of the ocean. Your journey into refined luxury begins here.
          </p>
          
          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold transition-all flex items-center gap-3 shadow-2xl shadow-blue-900/40 transform hover:-translate-y-1">
              Reserve Your Stay <Calendar size={18} />
            </button>
            <button className="bg-white/5 border border-white/20 hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold transition-all backdrop-blur-md">
              Explore Amenities
            </button>
          </div>
        </div>
      </section>

      {/* 2. BOOKING STRIP: "The Floating Concierge" */}
      <div className="relative z-20 -mt-16 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100">
          {highlights.map((stat, i) => (
            <div key={i} className="p-10 text-center bg-white hover:bg-blue-50/50 transition-colors duration-500 border-r border-slate-50 last:border-0">
              <div className="text-4xl font-black text-slate-900 italic">
                {stat.value}<span className="text-lg ml-1 text-blue-600 font-medium">{stat.unit}</span>
              </div>
              <div className="text-[10px] text-blue-500 font-bold uppercase tracking-[0.2em] mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. EXPERIENCE GRID: Luxury Modules */}
      <section className="py-32 px-6 bg-[#FCFDFF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Curated <span className="text-blue-600">Industries.</span></h2>
              <p className="text-slate-500 text-lg">Bespoke hospitality solutions for every vertical of luxury living.</p>
            </div>
            <button className="flex items-center gap-2 text-blue-600 font-bold group">
              View All Services <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Bed />, title: "Resort & Spa", desc: "Ocean-front suites designed with minimalist aesthetics and maximum comfort." },
              { icon: <Utensils />, title: "Fine Dining", desc: "Blue-ribbon culinary experiences curated by world-renowned chefs." },
              { icon: <Compass />, title: "Travel & Tours", desc: "Private excursions and maritime journeys across the blue horizon." }
            ].map((item, i) => (
              <div key={i} className="group p-12 rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-100 hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.1)] transition-all duration-700">
                
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8 font-light text-lg">{item.desc}</p>
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm cursor-pointer border-b-2 border-transparent hover:border-blue-600 pb-1 transition-all uppercase tracking-widest">
                  Discover <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOSPITALITY SUB-INDUSTRIES SECTION */}
      <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
        {/* Subtle grid for a technical touch to hospitality */}
        <div className="absolute inset-0 opacity-5 border-t border-blue-500 border-dashed"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Integrated <br />
              <span className="text-blue-500 underline decoration-white/10 underline-offset-8 italic">Verticals.</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start border-b border-white/5 pb-8">
                <div className="bg-blue-600 p-3 rounded-2xl text-white">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl">Wellness & Medi-Spa</h4>
                  <p className="text-slate-400 mt-2 leading-relaxed">Combining medical precision with hospitality for ultimate recovery.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start border-b border-white/5 pb-8">
                <div className="bg-blue-600 p-3 rounded-2xl text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl">Urban Business Hubs</h4>
                  <p className="text-slate-400 mt-2 leading-relaxed">High-tech meeting environments within five-star urban settings.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full bg-blue-600 h-[500px] rounded-[3rem] relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>
            <div className="absolute bottom-12 left-12">
               <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-white fill-white" />)}
               </div>
               <p className="text-white text-3xl font-black italic uppercase tracking-tighter">The Blue Suite</p>
               <p className="text-blue-200 mt-2 font-light">Available for Corporate Bookings</p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default BlueHospitalityPage;