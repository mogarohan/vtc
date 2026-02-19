'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Package,
  Truck,
  ShieldCheck,
  ArrowRight,
  Boxes,
  ChevronRight,
  Sparkles,
    ShieldAlert,
  

  PauseCircle,
  FileText
  
} from 'lucide-react';
import Link from 'next/link';
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,

      ease: 'easeOut',
    },
  },
};

const IndustrialMarketplace = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  
  return (
    <main
      ref={containerRef}
      className="bg-white text-slate-900 overflow-hidden"
    >
      {/* ================= HERO SECTION ================= */}
      <section className="relative  flex items-center justify-center bg-[#0F172A] pt-20 pb-20">
     

        <div className="relative z-10 text-center px-6 max-w-7xl">
          <motion.div style={{ y, opacity }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 border border-blue-400/20 rounded-full bg-blue-500/5 text-blue-400 text-xs font-black uppercase tracking-widest">
              <Sparkles size={14} />
              The Speed Commerce Era
            </div>

            <h1 className="text-6xl md:text-[5rem] font-black text-white leading-[1] uppercase">
              Revolutionizing 
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                Retail Delivery
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto mt-8 mb-12">
              10-minute delivery revolution, dark store networks, hyperlocal fulfillment, AI-powered personalization, social commerce explosion, and seamless omnichannel experiences redefining consumer expectations globally.
            </p>

          </motion.div>
        </div>
      </section>
<div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl lg:text-5xl font-black mt-8 text-slate-900 tracking-tighter uppercase leading-none">
      Digital Commerce  {" "}
      <span className="text-blue-600">Risks</span>
    </h2>
</div>
      {/* ================= PRODUCTS ================= */}
      <section className="bg-[#F7F8FC] py-10">
              <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-4xl font-black text-slate-900 mb-10"
                ></motion.h2>
      
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                  {[
  {
    title: "Cyber & Data Breaches",
    desc: "Customer data theft, payment fraud, ransomware, GDPR violations",
    image: "/ecommerce/1.png",
  },
  {
    title: "Product Liability",
    desc: "Defective products, counterfeit goods, safety violations, recall costs",
    image: "/ecommerce/2.png",
  },
  {
    title: "Logistics & Transit Risks",
    desc: "Last-mile delivery failures, goods damage, theft, vehicle accidents",
    image: "/ecommerce/3.png",
  },
  {
    title: "Business Interruption",
    desc: "Platform downtime, server crashes, payment gateway failures, peak season disruptions",
    image: "/ecommerce/4.png",
  },
  {
    title: "Professional Indemnity",
    desc: "Mis-selling, wrong product delivery, pricing errors, service failures",
    image: "/ecommerce/5.png",
  },
  {
    title: "Warehouse Operations",
    desc: "Fire, inventory loss, equipment breakdown, worker injuries ",
    image: "/ecommerce/6.png",
  },
]
.map((item) => (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 220, damping: 18 }}
                      className="group bg-white rounded-2xl overflow-hidden
                        flex flex-col
                        border border-[#1C2A7D]/10
                        shadow-[0_14px_35px_rgba(28,42,125,0.14)]
                        hover:shadow-[0_28px_60px_rgba(28,42,125,0.25)]
                        transition"
                    >
                      {/* IMAGE */}
                      <div
                        className="w-full min-h-[200px] bg-[#F7F8FC]
                      flex items-center justify-center p-4"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="
            max-h-[200px]
            w-auto
            object-contain
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
                        />
                      </div>
      
                      <div className="p-5 mt-auto">
                        <h3 className="text-lg font-semibold text-[#1C2A7D] text-center">
                          {item.title}
                        </h3>
                      </div>
                      <div className="p-1 mt-auto mb-2">
                        <h3 className="text-lg font-semibold text-black text-center">
                          {item.desc}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
<section className="w-full bg-white py-10">
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* HEADING */}
    <h2 className="text-4xl lg:text-5xl font-black mb-16 text-slate-900 tracking-tighter uppercase leading-none">
      E-Commerce Protection{" "}
      <span className="text-blue-600">Suite</span>
    </h2>

    {/* CARDS GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto text-left">

      {/* Card 1 */}
      <div className="flex gap-6 items-start">
        <div className="bg-blue-100 p-4 rounded-2xl">
          <ShieldAlert className="text-blue-600 w-6 h-6" />
        </div>
        <h4 className="font-bold text-xl text-slate-800">
          Cyber Liability & Data Breach
        </h4>
      </div>

      {/* Card 2 */}
      <div className="flex gap-6 items-start">
        <div className="bg-blue-100 p-4 rounded-2xl">
          <ShieldCheck className="text-blue-600 w-6 h-6" />
        </div>
        <h4 className="font-bold text-xl text-slate-800">
          Product Liability Insurance
        </h4>
      </div>

      {/* Card 3 */}
      <div className="flex gap-6 items-start">
        <div className="bg-blue-100 p-4 rounded-2xl">
          <Truck className="text-blue-600 w-6 h-6" />
        </div>
        <h4 className="font-bold text-xl text-slate-800">
          Marine & Transit Coverage
        </h4>
      </div>

      {/* Card 4 */}
      <div className="flex gap-6 items-start">
        <div className="bg-blue-100 p-4 rounded-2xl">
          <PauseCircle className="text-blue-600 w-6 h-6" />
        </div>
        <h4 className="font-bold text-xl text-slate-800">
          Business Interruption Insurance
        </h4>
      </div>

      {/* Card 5 */}
      <div className="flex gap-6 items-start">
        <div className="bg-blue-100 p-4 rounded-2xl">
          <FileText className="text-blue-600 w-6 h-6" />
        </div>
        <h4 className="font-bold text-xl text-slate-800">
          Professional Indemnity
        </h4>
      </div>

      {/* Card 6 */}
      <div className="flex gap-6 items-start">
        <div className="bg-blue-100 p-4 rounded-2xl">
          <Package className="text-blue-600 w-6 h-6" />
        </div>
        <h4 className="font-bold text-xl text-slate-800">
          Property & Stock Insurance
        </h4>
      </div>

    </div>
  </div>
</section>

      
    </main>
  );
};

export default IndustrialMarketplace;
