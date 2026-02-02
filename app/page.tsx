'use client';

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";

import Hero from "./components/Hero";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* ================= SERVICES ================= */

const SERVICES = [
  {
    id: "01",
    title: "Risk Assessment",
    desc: "Identify, analyze, and reduce financial risks before they impact your business growth.",
    img: "risk.png",
    href: "/solutions/audits&riskassessment",
  },
  {
    id: "02",
    title: "Claims Management",
    desc: "Fast, transparent, and efficient claims handling with complete client confidence.",
    img: "clamis.png",
    href: "/solutions/claimsmanagement",
  },
  {
    id: "03",
    title: "Employee Benefits",
    desc: "Custom benefit programs that improve retention and enhance workforce satisfaction.",
    img: "benefits.png",
    href: "/solutions/employeebenifits",
  },
  {
    id: "04",
    title: "Life Insurance",
    desc: "Protect your family and business with long-term financial security solutions.",
    img: "family.png",
    href: "/solutions/lifeinsurance",
  },
];

/* ================= INDUSTRIES ================= */

const INDUSTRIES = [
  { num: "01", title: "Automotive", text: "Insurance solutions for automotive businesses.", img: "automotive.png", href: "/industries/automobile" },
  { num: "02", title: "BFSI", text: "Banking, financial services and insurance advisory.", img: "bfsi.png", href: "/industries/BFSI" },
  { num: "03", title: "IT & Tech", text: "Protecting digital and technology businesses.", img: "it-tech.png", href: "/industries/it" },
  { num: "04", title: "Engineering", text: "Coverage for engineering and manufacturing firms.", img: "engineering.png", href: "/industries/engineering" },
  { num: "05", title: "Green Energy", text: "Risk solutions for renewable energy projects.", img: "green-energy.png", href: "/industries/greenenergy" },
  { num: "06", title: "Chemical & Pharma", text: "Insurance for chemical and pharmaceutical sectors.", img: "chemical-pharma.png", href: "/industries/chemical&pharmaceuticals" },
  { num: "07", title: "Hospitality", text: "Protecting hotels, resorts and restaurants.", img: "hospitality.png", href: "/industries/hospitality" },
  { num: "08", title: "SME & MSME", text: "Tailored solutions for small and medium enterprises.", img: "sme-msme.png", href: "/industries/SME&MSME" },
];

export default function HomePage() {
  const [activeService, setActiveService] = useState(0);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  return (
    <main className={poppins.className}>

      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= STATS ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-5xl font-bold mb-3 leading-tight">
              Thoughtful Risk Advisory <br />
              <span className="text-blue-600 underline underline-offset-8">
                for Growing Businesses
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-10">
              We empower organizations with intelligent, technology-driven insurance
              and risk advisory solutions—helping businesses stay protected,
              confident, and ready for sustainable growth.
            </p>

            <div className="grid grid-cols-2 gap-6" ref={statsRef}>
              {[
                { label: "Industry Experience", value: "15+ Years" },
                { label: "Businesses Served", value: "500+" },
                { label: "Claims Success Rate", value: "99.2%" },
                { label: "Risk Experts", value: "50+" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-3xl bg-slate-50 hover:bg-blue-600 transition-all text-center group"
                >
                  <div className="text-3xl font-black text-blue-600 group-hover:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 group-hover:text-blue-100">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div className="p-10 bg-slate-900 rounded-3xl text-white relative">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-300">
                To transform the insurance experience for organizations by delivering
                intelligent, technology-driven solutions backed by expert advisory.
              </p>
              <ShieldCheck className="absolute -bottom-8 -right-8 w-32 h-32 opacity-10" />
            </div>

            <div className="p-10 bg-blue-600 rounded-3xl text-white relative">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100">
                To pioneer India’s risk advisory landscape through innovation,
                expertise, and trust.
              </p>
              <BarChart3 className="absolute -bottom-3 -right-8 w-32 h-32 opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="pt-1 py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <h4 className="text-blue-600 tracking-widest mb-3 font-semibold">
              WHAT WE OFFER
            </h4>
            <h2 className="text-slate-900 text-5xl font-bold">
              Financial Expertise
            </h2>
          </div>

          <div className="flex h-[520px] gap-4">
            {SERVICES.map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => setActiveService(index)}
                className={`relative overflow-hidden rounded-3xl cursor-pointer 
                transition-all duration-700 shadow-lg
                ${activeService === index ? "flex-[4]" : "flex-[1]"}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="relative z-10 h-full flex flex-col justify-end p-10 text-white">
                  <span className="text-blue-300 text-5xl font-bold mb-4">
                    {item.id}
                  </span>
                  <h3 className="text-3xl font-bold mb-3">
                    {item.title}
                  </h3>
                  {activeService === index && (
                    <p className="text-gray-100 max-w-md">
                      {item.desc}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="pt-1 py-32 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="lg:flex lg:gap-20 items-start">

      {/* LEFT: Sticky */}
      <div className="lg:w-1/2 lg:sticky lg:top-32 self-start space-y-6">
        <span className="text-blue-600 tracking-widest font-semibold uppercase">
          Industries We Serve
        </span>

        <h2 className="text-5xl font-bold text-slate-900">
          Safety Shields for <br /> Every Sector
        </h2>

        <p className="text-slate-600 max-w-md">
          Tailored insurance strategies across diverse industries.
        </p>

        <div className="w-full rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/ecosystem.jpeg"
            alt="Business Ecosystem Illustration"
            className="w-full h-auto object-cover rounded-2xl block scale-[1.01]"
          />
        </div>
      </div>

      {/* RIGHT: Scrolls normally with page */}
      <div className="lg:w-1/2 space-y-10">
        {INDUSTRIES.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="flex gap-8 bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all"
          >
            <div className="w-40 h-40 rounded-2xl overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
            </div>

            <div>
              <span className="text-blue-600 font-bold text-xl">{item.num}</span>
              <h3 className="text-2xl font-bold mt-2 mb-3">{item.title}</h3>
              <p className="text-slate-600 mb-4">{item.text}</p>
              <span className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                Learn More <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[4rem] p-24 text-center text-white">
          <h2 className="text-5xl font-bold mb-10">
            Ready to secure your journey?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold"
          >
            Contact Our Experts <ArrowRight />
          </Link>
        </div>
      </section>

    </main>
  );
}
