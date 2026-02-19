"use client";
import React from "react";
import ReactElement from "react";
import { motion } from "framer-motion";
import {
  Waves,
  MapPin,
  Utensils,
  Bed,
  Star,
  ArrowRight,
  Calendar,
  ShieldCheck,
  Compass,
  PhoneCall,
  Users,
  Wine,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BlueHospitalityPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* 1. HERO SECTION: Serene & Inviting */}
      <section className="relative bg-[#020617] pt-14 pb-20 px-6 overflow-hidden">
        {/* Soft Wave Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#2563eb 0.5px, transparent 0.5px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Azure Glow Effect - Mimicking a pool/ocean glow */}
        <div className="absolute -bottom-48 -right-24 w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 text-xs font-bold mb-8 border border-blue-400/20 uppercase tracking-[0.2em]">
            <Star size={14} className="text-blue-400" /> Redefining Guest
            Experiences
          </div>

          <h1 className="text-6xl md:text-8xl font-bold italic text-white mb-8 ">
            Hospitality & Tourism <br />
            <span className="text-blue-500 font-black italic">
              Insurance Solutions
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Post-pandemic recovery surge, experiential travel boom, boutique
            hospitality growth, technology-enabled service, sustainability
            focus, and wellness tourism driving unprecedented transformation.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold transition-all flex items-center gap-3 shadow-2xl shadow-blue-900/40 transform hover:-translate-y-1">
              Reserve Your Stay <Calendar size={18} />
            </button>
            <button className="bg-white/5 border border-white/20 hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold transition-all backdrop-blur-md">
              Explore Amenities
            </button>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE GRID: Luxury Modules */}
      <section className="py-14 px-6 bg-[#FCFDFF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Hospitality <span className="text-blue-600">Sector Risks</span>
              </h2>
              <p className="text-slate-500 text-lg">
                Bespoke hospitality solutions for every vertical of luxury
                living.
              </p>
            </div>
            <button className="flex items-center gap-2 text-blue-600 font-bold group">
              View All Services{" "}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Bed className="w-8 h-8 stroke-[1.5]" />,
                title: "Property Damage",
                desc: "Fire, natural disasters, equipment breakdown, renovation risks",
              },
              {
                icon: <Utensils className="w-8 h-8 stroke-[1.5]" />,
                title: "Guest Liability",
                desc: "Slip and fall, food poisoning, injury claims, medical emergencies",
              },
              {
                icon: <Compass className="w-8 h-8 stroke-[1.5]" />,
                title: "Business Interruption",
                desc: "Seasonal disruptions, reputation damage, event cancellations",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 stroke-[1.5]" />,
                title: "Cyber & Data",
                desc: "Guest data breaches, booking system failures, payment fraud",
              },
              {
                icon: <Wine className="w-8 h-8 stroke-[1.5]" />,
                title: "Liquor Liability",
                desc: "Over-service incidents, intoxication-related claim",
              },
              {
                icon: <Users className="w-8 h-8 stroke-[1.5]" />,
                title: "Employee Practices",
                desc: "Staff injuries, employment disputes, workplace safety",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-12 rounded-[2.5rem] bg-white 
                  border border-slate-200 shadow-sm
                  hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.12)]
                  transition-all duration-700"
              >
                {/* ICON */}
                <div className="mb-6 text-blue-600">{item.icon}</div>

                {/* TITLE */}
                <h3 className="text-2xl font-black text-blue-900 mb-4 tracking-tight">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-600 leading-relaxed font-light text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-slate-900 mb-4">
          Complete Hospitality Coverage
        </h2>
        <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <section className="py-5 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Image Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
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
              {
                title: "Liquor Liability",
                image: "/hospitality/h4.jpeg",
              },
              {
                title: "Workers Compensation",
                image: "/hospitality/h5.jpeg",
              },
              {
                title: "Equipment Breakdown",
                image: "/hospitality/h6.jpeg",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group bg-white rounded-2xl overflow-hidden
                     border border-[#1C2A7D]/10
                     shadow-[0_18px_45px_rgba(28,42,125,0.14)]
                     hover:shadow-[0_30px_70px_rgba(28,42,125,0.25)]
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

                {/* CONTENT */}
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-[#1C2A7D] text-lg">
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
