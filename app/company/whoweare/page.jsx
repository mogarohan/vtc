'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Target, Eye, ShieldCheck, Zap, 
  Headphones, Trophy, Users, ChevronRight, 
  Sparkles, Building2, Globe, ArrowRight, Handshake
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CompanyOverview() {
  const containerRef = useRef(null);
  
  // Parallax Effect for Hero Content
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Stats Data with Image Paths
  const stats = [
    { 
      label: "Proven Success", 
      description: "Award-winning services trusted by top corporations", 
      image: "/04.png" 
    },
    { 
      label: "Client-Centric", 
      description: "Tailored solutions and dedicated support.", 
      image: "/p.png" 
    },
    { 
      label: "Asset Guard", 
      description: "Insurance protection for physical and financial assets.", 
      image: "/02.png" 
    },
    { 
      label: "Global Reach", 
      description: "Worldwide presence and local expertise.", 
      image: "/03.png" 
    },
  ];

  return (
    <main ref={containerRef} className="bg-white overflow-hidden font-sans">
      
      {/* 1. HERO SECTION (Dark Premium with Animated Orbs) */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#0F172A]">
       
    {/* Dark Overlay - Text visibility ke liye zaroori hai */}
    <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[0px]" />
 

  {/* Content */}
  <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }} 
      className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 backdrop-blur-md"
    >
      <Sparkles size={16} /> SECURING YOUR FUTURE SINCE 2010
    </motion.div>
    
    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
      We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Resilience.</span>
    </h1>
    
    <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
      Vestigo is not just insurance its a safety shield for your dreams. 
      We turn uncertainty into opportunity through trust and technology.
    </p>
    
    <div className="mt-10 flex flex-wrap justify-center gap-4">
       <Link href="/company/whoweare" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
          Learn Who We Are <ArrowRight size={18} />
       </Link>
    </div>
  </motion.div>
</section>

      {/* 2. STATS/FEATURES GRID (Floating Image Cards) */}
      <section className="relative z-20 -mt-24 px-6 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 flex flex-col items-center text-center group hover:-translate-y-4 transition-all duration-500"
            >
              {/* Image Rendering */}
              <div className="w-30 h-30 relative mb-8 transition-transform group-hover:scale-110 duration-500">
                <Image 
                  src={stat.image} 
                  alt={stat.label}
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
                {stat.label}
              </h3>
              <p className="text-sm font-semibold text-slate-500 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. WHY US SECTION */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-blue-600 font-black tracking-[0.2em] uppercase text-xs">The Advantage</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 mt-4 leading-none uppercase tracking-tighter">
              Securing <br /> <span className="text-blue-600 italic font-serif lowercase">everything</span> you build.
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              Our unique approach combines data-driven risk mapping with a human-centric perspective, 
              ensuring your enterprise is protected by industry-leading standards.
            </p>
            <Link href="/company/whyus" className="inline-flex items-center gap-3 font-black text-sm uppercase tracking-widest text-slate-900 group">
              Explore Our Values <ChevronRight className="group-hover:translate-x-2 transition-transform text-blue-600" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {[
              { title: "Fast Claims", icon: <Zap />, color: "bg-amber-50 text-amber-600" },
              { title: "Expert Support", icon: <Headphones />, color: "bg-blue-50 text-blue-600" },
              { title: "Global Trust", icon: <ShieldCheck />, color: "bg-emerald-50 text-emerald-600" },
              { title: "Proven Track", icon: <Trophy />, color: "bg-purple-50 text-purple-600" }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                  {item.icon}
                </div>
                <h4 className="font-black text-slate-900 uppercase tracking-tighter text-sm">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full" />
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            <div className="p-14 rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors">
               <Target className="text-blue-400 mb-8" size={48} />
               <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">Our Mission</h3>
               <p className="text-slate-400 text-lg leading-relaxed font-medium">
                 To build a protective future for global enterprises. We deliver excellence in every claim through transparent and expedited settlements.
               </p>
            </div>
            <div className="p-14 rounded-[4rem] bg-blue-600 shadow-3xl shadow-blue-900/50 hover:bg-blue-500 transition-colors">
               <Eye className="text-white mb-8" size={48} />
               <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">Our Vision</h3>
               <p className="text-blue-50 text-lg leading-relaxed font-medium">
                 To set the global benchmark for digital insurance. We aim to be the most trusted partner in navigating high-stakes business risks.
               </p>
            </div>
         </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[5rem] p-20 text-center text-white relative overflow-hidden shadow-3xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          <h2 className="text-5xl md:text-7xl font-black mb-8 relative z-10 tracking-tighter uppercase leading-none">
            Ready to <span className="text-cyan-400">Fortify</span> <br /> Your Business?
          </h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto relative z-10 font-medium">
            Discover why over 500+ corporations rely on Vestigo for strategic risk management and global insurance solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link href="/contacts" className="bg-white text-blue-700 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-blue-50 transition-all">
              Consult a Specialist
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}