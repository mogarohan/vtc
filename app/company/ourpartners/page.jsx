'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Handshake,
  ArrowUpRight,
  Globe,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

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
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#0F172A]">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 60, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, -60, 0] }}
            transition={{ duration: 16, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"
          />
        </div>

        <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6">
            <Handshake size={16} />
            OUR COMMITMENT
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter max-w-5xl mx-auto leading-tight">
            Trusted by Leading Organizations <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Across Industries
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            At Vestigo, we pride ourselves on forging strong, lasting partnerships 
            with our clients through excellence and collaboration.
          </p>

          <div className="mt-10">
            <Link
              href="#network"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition"
            >
              Explore Our Network <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT SECTION (NEW TEXT ADDED) ================= */}
      <section id="network" className="py-24 max-w-7xl mx-auto px-6">
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
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-6 bg-white rounded-3xl shadow-sm">
                <div className="text-4xl font-black text-blue-600 mb-2">11+</div>
                <div className="text-sm font-bold text-slate-500 uppercase">Key Partners</div>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-sm">
                <div className="text-4xl font-black text-blue-600 mb-2">100%</div>
                <div className="text-sm font-bold text-slate-500 uppercase">Commitment</div>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-sm">
                <div className="text-4xl font-black text-blue-600 mb-2">95%</div>
                <div className="text-sm font-bold text-slate-500 uppercase">Retention</div>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-sm">
                <div className="text-4xl font-black text-blue-600 mb-2">24/7</div>
                <div className="text-sm font-bold text-slate-500 uppercase">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARTNER MARQUEE ================= */}
      <section
        className="relative py-24 bg-[#F0F7FF] border-y border-blue-100 overflow-hidden"
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
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            Categories of Collaboration
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Insurance Providers',
              desc: 'Direct partnerships with leading insurers for faster onboarding.',
              icon: <ShieldCheck />,
            },
            {
              title: 'Technology Partners',
              desc: 'Cloud, security & data partners powering our digital stack.',
              icon: <Globe />,
            },
            {
              title: 'Audit Partners',
              desc: 'Independent firms ensuring compliance & transparency.',
              icon: <ArrowUpRight />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-32 px-6">
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