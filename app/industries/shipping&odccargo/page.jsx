"use client";
import React from "react";
import {
  Ship,
  Anchor,
  Truck,
  Box,
  ArrowRight,
  Maximize,
  ShieldCheck,
  Globe,
  Compass,
  Gauge,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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

export default function ShippingODCPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. HERO SECTION: The Global Fleet */}
      <section className="relative bg-[#020617] pt-32 pb-24 px-6 overflow-hidden">
        {/* World Map Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Anchor size={14} />
              Maritime Infrastructure Expansion
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1] tracking-tighter">
              Powering Global <br />
              <span className="text-blue-500 italic">Trade & Energy</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed font-bold">
              Global trade growth driving mega-port development, offshore
              renewable energy boom, deep-sea exploration, automated port
              operations, green shipping initiatives, and offshore wind farm
              installations transforming maritime and energy sectors.
            </p>
          </div>

          {/* Ship Visualization */}
          <div className="flex-1 w-full bg-slate-900 h-[500px] rounded-[3rem] relative overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent"></div>
            <Ship size={120} className="text-white opacity-20" />
            <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <div className="flex justify-between items-center text-xs text-blue-400 font-bold uppercase tracking-widest">
                <span>Vessel Status</span>
                <span className="text-green-500 italic">On Schedule</span>
              </div>
              <div className="mt-2 h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Heading */}
      <div className="text-center mb-10 mt-5">
        <h2 className="text-4xl font-black text-slate-900 mb-4">
          Marine & Offshore Risk Solutions
        </h2>
        <div className="h-1.5 w-55 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      {/* 3. CARGO VERTICALS */}
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
                title: "Port Operators Liability",
                desc: "Coverage for cargo handling damage, vessel collisions, stevedore injuries, and liabilities arising from terminal and port operations.",
                image: "/shipping/s1.jpeg",
              },
              {
                title: "Offshore Energy Risks",
                desc: "Protection against offshore platform damage, blowouts, equipment failure, and environmental incidents in oil, gas, and wind projects.",
                image: "/shipping/s2.jpeg",
              },
              {
                title: "Marine Cargo Insurance",
                desc: "Insurance for goods in transit covering loading and unloading damage, theft, weather-related losses, and transit risks.",
                image: "/shipping/s3.jpeg",
              },
              {
                title: "Marine Pollution Liability",
                desc: "Coverage for oil spills, environmental cleanup costs, regulatory penalties, and ecological damage caused by marine operations.",
                image: "/shipping/s4.jpeg",
              },
              {
                title: "Offshore Construction Risks",
                desc: "Protection for offshore installation projects against weather delays, subsea operation risks, vessel damage, and construction losses.",
                image: "/shipping/s5.jpeg",
              },
              {
                title: "Loss of Hire",
                desc: "Financial protection against revenue loss due to vessel downtime, port closures, accidents, or operational disruptions.",
                image: "/shipping/s6.jpeg",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition"
              >
                {/* ✅ Image Top */}
                <div className="w-full h-[320px] overflow-hidden">
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

                {/* ✅ Text Bottom */}
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-[#1C2A7D]">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. ODC TECHNICAL SPEC SECTION */}
    </div>
  );
}
