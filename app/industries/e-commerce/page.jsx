"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Package,
  Truck,
  ShieldCheck,
  Sparkles,
  ShieldAlert,
  PauseCircle,
  FileText,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const IndustrialMarketplace = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const threats = [
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
      desc: "Platform downtime, server crashes, payment gateway failures",
      image: "/ecommerce/4.png",
    },
    {
      title: "Professional Indemnity",
      desc: "Mis-selling, wrong product delivery, pricing errors",
      image: "/ecommerce/5.png",
    },
    {
      title: "Warehouse Operations",
      desc: "Fire, inventory loss, equipment breakdown, worker injuries",
      image: "/ecommerce/6.png",
    },
  ];

  return (
    <main
      ref={containerRef}
      className="bg-white text-slate-900 overflow-hidden"
    >
      {/* ================= HERO ================= */}
      <section className="relative flex items-center justify-center bg-[#0F172A] pt-24 pb-24">
        <div className="relative z-10 text-center px-6 max-w-6xl">
          <motion.div style={{ y, opacity }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 border border-blue-400/20 rounded-full bg-blue-500/5 text-blue-400 text-xs font-black uppercase tracking-widest">
              <Sparkles size={14} />
              The Speed Commerce Era
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-black text-white leading-tight uppercase">
              Revolutionizing
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                Retail Delivery
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mt-6">
              10-minute delivery revolution, dark store networks, hyperlocal
              fulfillment, AI-powered personalization, and seamless omnichannel
              experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION TITLE ================= */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase">
            Digital Commerce <span className="text-blue-600">Risks</span>
          </h2>
        </div>
      </section>

      {/* ================= THREATS GRID ================= */}
      <section className="bg-[#F7F8FC] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {threats.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition"
              >
                <div className="w-full h-[180px] bg-[#F7F8FC] flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-[160px] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-[#1C2A7D]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PROTECTION SUITE ================= */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-12 text-slate-900 tracking-tighter uppercase">
            E-Commerce Protection <span className="text-blue-600">Suite</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <CoverageItem
              icon={<ShieldAlert />}
              title="Cyber Liability & Data Breach"
            />
            <CoverageItem
              icon={<ShieldCheck />}
              title="Product Liability Insurance"
            />
            <CoverageItem icon={<Truck />} title="Marine & Transit Coverage" />
            <CoverageItem
              icon={<PauseCircle />}
              title="Business Interruption Insurance"
            />
            <CoverageItem icon={<FileText />} title="Professional Indemnity" />
            <CoverageItem
              icon={<Package />}
              title="Property & Stock Insurance"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const CoverageItem = ({ icon, title }) => (
  <div className="flex gap-4 items-start">
    <div className="bg-blue-100 p-3 rounded-xl">
      {React.cloneElement(icon, {
        className: "text-blue-600 w-5 h-5",
      })}
    </div>
    <h4 className="font-bold text-lg text-slate-800">{title}</h4>
  </div>
);

export default IndustrialMarketplace;
