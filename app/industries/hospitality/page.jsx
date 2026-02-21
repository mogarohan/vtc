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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hospitality.png"
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
            Redefining Guest Experiences
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            Hospitality & Tourism
            <br />{" "}
            <span className="text-blue-600 italic">Insurance Solutions</span>
          </h1>
          <h3 className="text-xs md:text-xl font-light text-slate-600 mb-10 uppercase tracking-[0.3em]">
            Post-pandemic recovery surge, experiential travel boom, boutique
            hospitality growth, technology-enabled service, sustainability
            focus, and wellness tourism driving transformation.
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
