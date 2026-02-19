"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Utensils,
  Bed,
  Star,
  ArrowRight,
  Calendar,
  ShieldCheck,
  Compass,
  Users,
  Wine,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BlueHospitalityPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="relative bg-[#020617] pt-10 sm:pt-14 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#2563eb 0.5px, transparent 0.5px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow (FIXED) */}
        <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] sm:bottom-[-180px] sm:right-[-140px] w-[280px] sm:w-[520px] h-[280px] sm:h-[520px] bg-blue-500/20 blur-[80px] sm:blur-[140px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 text-blue-300 text-[10px] sm:text-xs font-bold mb-6 sm:mb-8 border border-blue-400/20 uppercase tracking-widest">
            <Star size={12} className="text-blue-400" />
            Redefining Guest Experiences
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold italic text-white mb-5 sm:mb-8 leading-tight">
            Hospitality & Tourism <br />
            <span className="text-blue-500 font-black italic">
              Insurance Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light">
            Post-pandemic recovery surge, experiential travel boom, boutique
            hospitality growth, technology-enabled service, sustainability
            focus, and wellness tourism driving transformation.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full text-sm sm:text-base font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-900/40">
              Reserve Your Stay <Calendar size={16} />
            </button>

            <button className="bg-white/5 border border-white/20 hover:bg-white/10 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full text-sm sm:text-base font-bold transition-all backdrop-blur-md">
              Explore Amenities
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- RISKS ---------------- */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-[#FCFDFF]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 sm:mb-16 gap-4 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 sm:mb-4">
                Hospitality <span className="text-blue-600">Sector Risks</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-lg">
                Bespoke hospitality solutions for every vertical.
              </p>
            </div>

            <button className="flex items-center gap-2 text-blue-600 font-bold text-sm sm:text-base group">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
            {[
              {
                icon: <Bed className="w-7 h-7" />,
                title: "Property Damage",
                desc: "Fire, natural disasters, equipment breakdown",
              },
              {
                icon: <Utensils className="w-7 h-7" />,
                title: "Guest Liability",
                desc: "Slip and fall, food poisoning, injury claims",
              },
              {
                icon: <Compass className="w-7 h-7" />,
                title: "Business Interruption",
                desc: "Seasonal disruptions, cancellations",
              },
              {
                icon: <ShieldCheck className="w-7 h-7" />,
                title: "Cyber & Data",
                desc: "Guest data breaches, booking failures",
              },
              {
                icon: <Wine className="w-7 h-7" />,
                title: "Liquor Liability",
                desc: "Over-service incidents, intoxication claims",
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "Employee Practices",
                desc: "Staff injuries, employment disputes",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-lg transition"
              >
                <div className="mb-3 sm:mb-5 text-blue-600">{item.icon}</div>

                <h3 className="text-lg sm:text-xl font-black text-blue-900 mb-1 sm:mb-3">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- COVERAGE ---------------- */}
      <div className="text-center mt-8 sm:mt-10 mb-5 sm:mb-10 px-4">
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">
          Complete Hospitality Coverage
        </h2>
        <div className="h-1.5 w-16 sm:w-20 bg-blue-600 mx-auto rounded-full" />
      </div>

      <section className="py-2 sm:py-5 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
          >
            {[
              {
                title: "Property & Business Interruption",
                image: "/hospitality/h1.jpeg",
              },
              {
                title: "General & Product Liability",
                image: "/hospitality/h2.jpeg",
              },
              {
                title: "Cyber & Data Protection",
                image: "/hospitality/h3.jpeg",
              },
              { title: "Liquor Liability", image: "/hospitality/h4.jpeg" },
              { title: "Workers Compensation", image: "/hospitality/h5.jpeg" },
              { title: "Equipment Breakdown", image: "/hospitality/h6.jpeg" },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#1C2A7D]/10 shadow-md hover:shadow-xl transition"
              >
                <div className="w-full h-[150px] sm:h-[200px] bg-[#F7F8FC] flex items-center justify-center p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                <div className="p-3 sm:p-5 text-center">
                  <h3 className="font-semibold text-[#1C2A7D] text-sm sm:text-lg">
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

export default BlueHospitalityPage;
