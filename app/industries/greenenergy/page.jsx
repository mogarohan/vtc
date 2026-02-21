"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Sun,
  Wind,
  Battery,
  Zap,
  ArrowRight,
  Globe,
  BarChart3,
  ShieldCheck,
  Flame,
  Leaf,
  HardHat,
  ShieldAlert,
  ClipboardCheck,
} from "lucide-react";
import Link from "next/link";
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
      ease: "easeOut",
    },
  },
};
const BlueEngineeringPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* 1. HERO SECTION: Technical & Professional */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/green-energy.png"
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
            Energizing Sustainable Futures
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            Clean Energy.
            <br /> <span className="text-blue-600 italic">Transition</span>
          </h1>
          <h3 className="text-xs md:text-xl font-light text-slate-600 mb-10 uppercase tracking-[0.3em]">
            Renewable energy integration accelerating, grid modernization
            critical, energy storage solutions emerging, regulatory pressures
            increasing, decarbonization commitments driving massive
            infrastructure investments globally.
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

      {/* 3. TECHNOLOGY GRID: Blue Cards */}
      <section className="py-14 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-slate-900 mb-4">
                Energy Sector Risks
              </h2>
              <p className="text-slate-500">
                Scalable renewable infrastructure designed for heavy industrial
                use.
              </p>
            </div>
            <div className="h-px flex-1 bg-slate-200 mb-4 mx-8 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Property Damage & BI",
                icon: <Flame className="w-10 h-10 " />,
                desc: "Power plant fires, equipment failure, natural disasters, grid failures",
              },
              {
                title: "Environmental Liability",
                icon: <Leaf className="w-10 h-10 " />,
                desc: "Pollution incidents, contamination, cleanup costs, regulatory fines",
              },
              {
                title: "Construction All Risk",
                icon: <HardHat className="w-10 h-10 " />,
                desc: "Renewable project delays, installation damage, weather disruptions",
              },
              {
                title: "Cyber & Smart Grid",
                icon: <ShieldAlert className="w-10 h-10 " />,
                desc: "System breaches, SCADA attacks, grid disruptions, data theft",
              },
              {
                title: "Renewable Energy Risks",
                icon: <Zap className="w-10 h-10 " />,
                desc: "Solar panel damage, wind turbine failure, performance guarantees",
              },
              {
                title: "Regulatory & Compliance",
                icon: <ClipboardCheck className="w-10 h-10 " />,
                desc: " License violations, safety breaches, investigation costs",
              },
            ].map((tech, i) => (
              <div
                key={i}
                className="group p-10 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {tech.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {tech.desc}
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm cursor-pointer group-hover:gap-4 transition-all">
                  View Case Study <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-slate-900 mb-4">
          Power Sector Protection
        </h2>
        <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      <section className="bg-[#F7F8FC] py-8">
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
                title: "Property & Business Interruption",
                image: "/energy/e1.jpeg",
              },
              {
                title: "Environmental Liability",
                image: "/energy/e2.jpeg",
              },
              {
                title: "CAR for Renewable Projects",
                image: "/energy/e3.jpeg",
              },
              {
                title: "Cyber & Smart Grid Protection",
                image: "/energy/e4.jpeg",
              },
              {
                title: "Renewable Energy Insurance",
                image: "/energy/e5.jpeg",
              },
              {
                title: "Regulatory Defense",
                image: "/energy/e6.jpeg",
              },
            ].map((item) => (
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

                <div className="p-6 mt-auto">
                  <h3 className="text-lg font-semibold text-[#1C2A7D] text-center">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlueEngineeringPage;
