"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  Truck,
  Briefcase,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const CommercialInsuranceClient = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  const services = [
    {
      title: "Property & Liability",
      desc: "Comprehensive protection for physical assets and third-party liabilities.",
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Business Interruption",
      desc: "Revenue continuity coverage to protect cash flow during unexpected disruptions.",
      icon: <Building2 className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Cyber Risk",
      desc: "Protection against data breaches, cyber extortion, and digital operational threats.",
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-10 min-h-[85vh] flex items-center overflow-hidden bg-[#0F172A]">
        <div className="container mx-auto px-6 md:px-12 z-20 relative py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* TEXT */}
          <motion.div
            style={{ y, opacity }}
            className="max-w-2xl text-white text-center md:text-left"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 backdrop-blur-md"
            >
              <Sparkles size={16} /> FAST & TRANSPARENT
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              Commercial{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Insurance
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Protect your business assets, operations, and people with
              comprehensive commercial coverage designed for today&apos;s
              complex risk landscape. We understand that your enterprise faces
              unique challenges—from property damage and liability claims to
              business interruption and cyber threats.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-30 w-full md:w-auto"
          >
            <img
              src="/commercial.png" // ← use your image
              alt="Commercial Insurance"
              className="rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border-8 border-white/5 w-full max-w-md md:max-w-none mx-auto transition-all duration-700"
            />
          </motion.div>
        </div>

        {/* HERO SHAPE (Diagonal Layer) */}
        <div
          className="absolute inset-0 bg-[#020617] z-10"
          style={{ clipPath: "polygon(0 0, 58% 0, 42% 100%, 0% 100%)" }}
        />
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="group p-8 border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-10 px-6 border-t border-slate-50">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-slate-400 mb-10">
            Our commercial insurance specialists work directly with leading
            underwriters to secure competitive terms whilst ensuring
            comprehensive protection. We analyse your specific exposures,
            negotiate favourable policy conditions, and provide ongoing risk
            management support to minimise vulnerabilities.
          </p>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all">
            Get a Free Consultation
          </button>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default CommercialInsuranceClient;
