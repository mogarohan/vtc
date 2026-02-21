"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  Users,
  Briefcase,
  ArrowRight,
  HandCoins,
  BarChart4,
  Globe2,
  Layers,
  Rocket,
  CheckCircle2,
  FileText,
} from "lucide-react";

export default function MSMEPage() {
  const supportSectors = [
    {
      title: "Package Policies",
      Icon: Layers,
      desc: "Bundled coverage solutions combining property, liability, and business interruption at competitive premiums designed for operational efficiency.",
    },
    {
      title: "Professional Indemnity",
      Icon: ShieldCheck,
      desc: "Protect against claims arising from professional advice, errors, or omissions with tailored coverage for service-based businesses.",
    },
    {
      title: "Trade Credit Insurance",
      Icon: FileText,
      desc: "Safeguard your cash flow against customer payment defaults and insolvency risks in challenging economic conditions.",
    },
    {
      title: "Key Person Cover",
      Icon: Users,
      desc: "Financial protection if critical team members become unable to work, ensuring business continuity during unexpected challenges.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. HERO SECTION: Empowering Growth */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/sme-msme.png"
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
            Tailored Protection for Growing Businesses
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-[#070B7F] mb-6 tracking-tighter uppercase leading-tight">
            SME & MSME
            <br />{" "}
            <span className="text-blue-600 italic">Insurance Solution</span>
          </h1>
          <h3 className="text-xs md:text-xl font-light text-slate-600 mb-10 uppercase tracking-[0.3em]">
            Small and medium enterprises form the backbone of our economy, yet
            often face disproportionate insurance challenges. We specialise in
            delivering cost-effective, comprehensive coverage that scales with
            your business ambitions.
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

      {/* 3. CORE SUPPORT GRID */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-blue-900 mb-4 tracking-tighter">
              Growth Ecosystem
            </h2>
            <p className="text-slate-500">
              Specialized tools for micro and small enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {supportSectors.map((sector, i) => {
              const Icon = sector.Icon;
              return (
                <div
                  key={i}
                  className="group p-10 bg-white border border-slate-100 rounded-3xl hover:border-blue-300 hover:shadow-[0_20px_50px_rgba(30,58,138,0.1)] transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-2xl mb-8 group-hover:rotate-6 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    {sector.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {sector.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SME SUCCESS ROADMAP */}
      <section className="py-24 bg-blue-900 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-black mb-8 tracking-tighter italic">
              From Micro , To Massive.
            </h2>
            <p className="font-black text-white mb-8 tracking-tighter bold">
              Our SME insurance programmes are specifically designed to address
              the unique vulnerabilities of smaller operations. Whether
              you&apos;re a retail establishment, professional service firm, or
              manufacturing unit, we structure policies that provide maximum
              protection without unnecessary complexity or expense. We negotiate
              with insurers who understand the SME sector, securing favourable
              terms and flexible payment structures. Our approach includes
              regular policy reviews to ensure your cover evolves alongside your
              business growth and changing risk profile.
            </p>
            {/* <div className="space-y-4">
              {[
                "Digital Onboarding in 24 Hours",
                "Access to Regional Hub Networks",
                "Direct Market Linkage Programs",
                "Continuous Mentorship Support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-center bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md"
                >
                  <CheckCircle2 className="text-blue-400" />
                  <p className="text-white font-medium">{item}</p>
                </div>
              ))}
            </div> */}
          </div>

          <div className="bg-white p-10 rounded-[3rem] shadow-3xl">
            <div className="mb-8">
              <h4 className="font-black text-blue-900 text-xl mb-1 uppercase tracking-tighter underline decoration-blue-500 decoration-4">
                Expansion Roadmap
              </h4>
              <p className="text-slate-400 text-sm">
                Typical 5-Year MSME Growth Curve
              </p>
            </div>
            <div className="h-64 flex items-end gap-2 border-b-2 border-slate-100 pb-1">
              {[30, 45, 40, 65, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-blue-600 rounded-t-lg transition-all hover:bg-blue-400 cursor-help relative group"
                  style={{ height: `${h}%` }}
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-[10px] p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Year {i + 1}: +{h}% ROI
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Start</span>
              <span>Scale</span>
              <span>Leader</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
