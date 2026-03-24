"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cpu,
  Code2,
  Cloud,
  ShieldCheck,
  ShieldAlert,
  Terminal,
  Laptop,
  ArrowRight,
  Zap,
  Globe,
  Database,
  Clock,
  Scale,
  FileWarning,
  ChevronDown,
  Lock,
  Building2,
  Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ITFieldPage() {
  const itSectors = [
    {
      name: "Cyber Attacks",
      Icon: ShieldAlert,
      desc: "Ransomware, phishing, malware, and advanced persistent threats pose severe operational, financial, and reputational risks.",
    },
    {
      name: "Data Breach",
      Icon: Database,
      desc: "Unauthorized access, data leaks, and privacy violations can trigger regulatory penalties and client litigation..",
    },
    {
      name: "System Downtime",
      Icon: Clock,
      desc: "Outages of critical systems, cloud services, or data centres disrupt operations and client delivery commitments.",
    },
    {
      name: "Professional Liability",
      Icon: FileWarning,
      desc: "Errors, omissions, or service failures can result in contractual disputes and claims from clients.",
    },
    {
      name: "Regulatory Exposure",
      Icon: Scale,
      desc: "Compliance with evolving Indian and global data protection laws requires constant oversight and risk management.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-cyan-100">
      {/* 1. HERO SECTION: The Digital Frontier */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/it-tech.png"
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
            IT Expert
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            Navigating Risk in India’s
            <br />{" "}
            <span className="text-blue-600 italic">IT & Technology Sector</span>
          </h1>
          <h3 className="text-xl md:text-2xl font-light text-slate-600 mb-10 uppercase tracking-[0.3em]">
            India’s IT and technology sector is a global powerhouse,
            contributing significantly to GDP and employing millions.
          </h3>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-blue-600"
        >
          <ChevronDown size={40} />
        </motion.div>
      </section>

      {/* 3. IT VERTICALS: White Cards on Blue Shadow */}
      <section className="py-10 sm:py-14 px-5 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">
              Key Risks & Hazards Facing Indian Tech Companies
            </h2>
            <div className="h-1 w-16 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {/* First Row → 3 Cards */}
            {itSectors.slice(0, 3).map((sector, i) => {
              const Icon = sector.Icon;
              return (
                <div
                  key={i}
                  className="group p-10 bg-white border-l-4 border-blue-600 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-slate-950 text-cyan-400 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                    {sector.name}
                  </h3>
                  <p className="text-slate-500 text-md leading-relaxed mb-8 font-sans">
                    {sector.desc}
                  </p>
                </div>
              );
            })}

            {/* Second Row → Centered 2 Cards */}
            <div className="md:col-span-3 flex flex-col sm:flex-row justify-center gap-6 sm:gap-10">
              {itSectors.slice(3).map((sector, i) => {
                const Icon = sector.Icon;
                return (
                  <div
                    key={i + 3}
                    className="group p-10 bg-white border-l-4 border-blue-600 shadow-sm hover:shadow-2xl transition-all duration-500 w-full max-w-md"
                  >
                    <div className="w-14 h-14 bg-slate-950 text-cyan-400 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                      {sector.name}
                    </h3>
                    <p className="text-slate-500 text-md leading-relaxed mb-8 font-sans">
                      {sector.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= INSURANCE FRAMEWORK ================= */}
      <section className="relative z-20 py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Heading Section - Left Aligned */}
          <div className="mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">
              Comprehensive Insurance Protection Framework
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
          </div>

          {/* Flex Layout - Automatically centers leftovers in the last row */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                title: "Cyber Risk Insurance",
                desc: "Protection against data breaches, cyber attacks, recovery costs, legal fees, and reputational damage.",
                icon: <ShieldAlert size={24} />,
                tag: "CYBER",
              },
              {
                title: "Professional Indemnity",
                desc: "Covers claims arising from professional errors, omissions, or negligence in services rendered. Essential for IT firms providing advisory or software development services.",
                icon: <Scale size={24} />,
                tag: "LIABILITY",
              },
              {
                title: "Crime & Fidelity",
                desc: "Guards against financial losses due to employee fraud, theft, or other dishonest acts. Protects company assets from internal and external criminal activities.",
                icon: <Lock size={24} />,
                tag: "FRAUD",
              },
              {
                title: "Property & Business Interruption",
                desc: "Coverage for physical offices, data centres, critical equipment, and revenue loss following property damage or operational disruption events.",
                icon: <Building2 size={24} />,
                tag: "PROPERTY",
              },
              {
                title: "Employee-Related Covers",
                desc: "Group health insurance, personal accident coverage, workmen's compensation, and statutory protection for your workforce across locations.",
                icon: <Users size={24} />,
                tag: "WORKFORCE",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="
            group p-8 rounded-xl border border-slate-200 bg-white 
            hover:border-blue-600/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden
            w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
          "
              >
                {/* Icon Box */}
                <div className="mb-8 p-3 rounded-lg bg-blue-50 inline-block text-blue-600">
                  {item.icon}
                </div>

                {/* Small Blue Tag */}
                <p className="text-[11px] font-bold text-blue-600 uppercase mb-2 tracking-widest">
                  {item.tag}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-md leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* NOTE Section */}
          <div className="mt-12 bg-[#0F172A] border-l-4 border-blue-600 px-6 py-5 text-white font-medium rounded-r-lg">
            Protecting your technology business requires more than standard
            policies — it demands specialist insurance solutions designed for
            the digital age and India&apos;s unique regulatory landscape.
          </div>
        </div>
      </section>
    </div>
  );
}
