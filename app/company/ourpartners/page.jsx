'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Handshake,
  ArrowUpRight,
  Globe,
  ShieldCheck,Users,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

/* ================= IMAGE PARTNERS (NO CHANGE) ================= */
const imagePartners = [
  { src: "/p1.jpeg", alt: "Infra Market" },
  { src: "/p2.jpeg", alt: "Shiva" },
  { src: "/p3.jpeg", alt: "Nitco Limited" },
  { src: "/p4.png", alt: "Satishbel" },
  { src: "/p5.png", alt: "Jayant Agro Organics" },
  { src: "/p6.jpeg", alt: "Royal Castor Products" },
  { src: "/p7.png", alt: "Shalimar Paints" },
  { src: "/p8.png", alt: "Apicore" },
  { src: "/p9.png", alt: "Finecure Pharmaceuticals" },
  { src: "/p10.jpeg", alt: "Airolam" },
  { src: "/p11.png", alt: "Chemco" },
];

/* infinite scroll */
const LOOP_PARTNERS = [...imagePartners, ...imagePartners];

export default function Partners() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={containerRef} className="min-h-screen bg-white overflow-hidden">

      {/* ================= HERO ================= */}
     <section className="relative w-full flex items-center justify-center overflow-hidden">
  
  {/* 1. Removed fixed height on mobile (h-[85vh]) 
    2. Added 'aspect-auto' to let the image define the space
  */}
  <div className="relative z-0 w-full h-auto">
    <img 
      src="/our.jpeg" 
      alt="About Us Background"
      /* 'w-full h-auto' ensures the image scales perfectly 
         to the width of the phone without cutting anything.
      */
      className="w-full h-auto md:h-[85vh] md:object-cover brightness-[0.9]" 
    />
    
    {/* Overlay: ensures it stays pinned to the image area */}
    <div className="absolute  bg-slate-950/40 backdrop-blur-[10px]" />
  </div>

</section>
      {/* ================= ABOUT SECTION (NEW TEXT ADDED) ================= */}
      <section id="network" className="py-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-snug">
              Strategic Guidance & <br />
              <span className="text-blue-600">Bespoke Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Our collaborative approach and unwavering commitment to excellence have earned 
              the trust of a diverse portfolio of industry leaders, enabling them to navigate 
              complex challenges with confidence.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our proven track record and deep expertise ensure that clients receive 
              unparalleled service, empowering them to achieve their objectives and 
              sustain long-term growth.
            </p>
          </div>
          <div className="relative group">
  {/* Decorative Sky Background Elements */}
  <div className="absolute -inset-4 bg-gradient-to-tr from-sky-400/20 to-blue-600/10 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
  
  <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-xl"
>
  {/* Image Container */}
  <div className="relative h-[450px] w-full">
    <Image
      src="/handshake.jpg" // Replace with your actual image path
      alt="Our Partners Meet"
      fill
      className="object-cover"
      sizes="(max-width: 1280px) 100vw, 1280px"
      priority
    />
    
    {/* Clean Dark Overlay for Text Legibility */}
    <div className="absolute inset-0 bg-black/40" />
    
    {/* Simple Content Overlay */}
    <div className="absolute bottom-10 left-10 right-10">
      <h4 className="text-white text-3xl font-bold mb-2">Our Partner Ecosystem</h4>
      <p className="text-white/90 text-lg max-w-xl">
        Building long-term value through strategic collaboration and shared vision.
      </p>
    </div>
  </div>
</motion.div>

  {/* Floating Badge Effect */}
  <motion.div 
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl shadow-sky-200 border border-sky-50 z-20 hidden md:block"
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white">
        <Users size={20} />
      </div>
      <div>
        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Trusted By</div>
        <div className="text-lg font-black text-slate-900">Industry Leaders</div>
      </div>
    </div>
  </motion.div>
</div>
        </div>
      </section>

      {/* ================= PARTNER MARQUEE ================= */}
      <section
        className="relative py-10 bg-[#F0F7FF] border-y border-blue-100 overflow-hidden"
      >
        <motion.div
          animate={{ x: [0, -1800] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="flex gap-24 items-center"
        >
          {LOOP_PARTNERS.map((partner, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="bg-white rounded-xl border border-blue-100 shadow-sm h-[90px] w-[180px] flex items-center justify-center px-6">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-h-[60px] w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                {partner.alt}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ================= PARTNERSHIP TYPES ================= */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-black text-slate-900 tracking-tight">
      Proven Expertise: Major Claims Managed
    </h2>
    <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
      Our partners possess extensive experience in navigating complex claim scenarios, ensuring effective resolution and minimal disruption for clients across industries.
    </p>
    <div className="w-60 h-1 bg-sky-500 mx-auto mt-6 rounded-full" />
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        id: "1",
        title: "Mega Risk Policy: Turbine Breakdown",
        desc: "Successfully processed a turbine breakdown claim of INR 6 Cr under a comprehensive mega risk policy.",
        amount: "INR 6 Cr"
      },
      {
        id: "2",
        title: "IAR Policy: Explosion & Business Interruption",
        desc: "Managed an explosion claim with INR 50 Cr material damage and INR 25 Cr business interruption under an Industrial All Risk (IAR) policy.",
        amount: "INR 75 Cr"
      },
      {
        id: "3",
        title: "Crime Policy: Payment Related Fraud",
        desc: "Resolved a payment-related fraud claim of INR 3 Cr, providing crucial protection under a Crime Policy.",
        amount: "INR 3 Cr"
      },
      {
        id: "4",
        title: "Contractors All Risk: Flood Damage",
        desc: "Handled a road damage claim of INR 1.25 Cr due to severe flooding under a Contractors All Risk (CAR) policy.",
        amount: "INR 1.25 Cr"
      },
      {
        id: "5",
        title: "Marine Insurance: Forwarding Charges",
        desc: "Successfully secured a forwarding charges claim of INR 1 Cr under marine insurance due to a shipping line’s bankruptcy.",
        amount: "INR 1 Cr"
      },
      {
        id: "6",
        title: "Product Recall: Contamination Issue",
        desc: "Managed a product recall claim worth INR 3 Cr, triggered by contamination found in a cargo of psyllium husk.",
        amount: "INR 3 Cr"
      }
    ].map((item, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -8 }}
        className="p-10 bg-sky-100 rounded-[2.5rem] border border-sky-200 transition-all duration-300 flex flex-col h-full"
      >
        {/* Number Badge */}
        <div className="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-md font-bold text-lg">
          {item.id}
        </div>
        
        <h3 className="text-xl font-bold text-sky-900 mb-4 leading-tight">
          {item.title}
        </h3>
        
        <p className="text-sky-800/80 font-medium leading-relaxed mb-6 flex-grow">
          {item.desc}
        </p>

        {/* Amount Tag */}
        <div className="pt-4 border-t border-sky-200/50">
          <span className="text-sky-600 font-black text-2xl tracking-tight">
            {item.amount}
          </span>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* ================= CTA ================= */}
      <section className="pb-10 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]" />
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Partner With Us
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Join our growing ecosystem and build the future together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition shadow-xl"
          >
            Request Partnership
          </Link>
        </div>
      </section>

    </main>
  );
}