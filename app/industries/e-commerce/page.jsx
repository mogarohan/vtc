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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/ecommerce.jpeg"
            className="w-full h-full object-cover opacity-20"
            alt="Hero Background"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <span className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block shadow-lg">
            The Speed Commerce Era
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            Revolutionizing
            <br /> <span className="text-blue-600 italic">Retail Delivery</span>
          </h1>
          <h3 className="text-xs md:text-xl font-light text-slate-600 mb-10 uppercase tracking-[0.3em]">
            10-minute delivery revolution, dark store networks, hyperlocal
            fulfillment, AI-powered personalization, and seamless omnichannel
            experiences.
          </h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:scale-105">
            Explore Solutions
          </button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-blue-600"
        ></motion.div>
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
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="w-full h-[320px] bg-[#F7F8FC] flex items-center justify-center ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                     w-full h-full
                     object-cover
                     transition-transform duration-500
                     group-hover:scale-100
                   "
                  />
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-xl  font-semibold text-[#1C2A7D]">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 mt-2">{item.desc}</p>
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
