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
      <section className="relative h-[80vh] -mt-20 flex items-center justify-center overflow-hidden bg-[#0F172A]">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]"
          />
        </div>

        <motion.div
          style={{ y, opacity }}
          className="relative z-10 text-center px-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 backdrop-blur-md"
          >
            <Sparkles size={16} /> FAST & TRANSPARENT
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            Commercial{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Insurance
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Protect your business assets, operations, and people with
            comprehensive commercial coverage designed for today&apos;s complex
            risk landscape. We understand that your enterprise faces unique
            challenges—from property damage and liability claims to business
            interruption and cyber threats.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20"
            >
              Initiate a Claim <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
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
