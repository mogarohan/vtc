"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  ArrowRight,
  Database,
  Eye,
  Gavel,
  Scale,
  ExternalLink,
  Copyright,
  AlertTriangle,
  UserCheck,
  Globe,
  RefreshCcw,
  ShieldAlert,
  FileCheck,
  MapPin,
} from "lucide-react";

// --- Types ---
interface PolicySection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content?: string;
  list?: string[];
}

// --- Data: ISMS Commitments & Controls ---
const ismsCommitments: PolicySection[] = [
  {
    id: "commitments",
    title: "ISMS Commitments",
    icon: <ShieldCheck className="text-blue-500" />,
    list: [
      "Protection of client, insurer, and business information",
      "Prevention of unauthorized access or misuse",
      "Compliance with DPDP Act, IRDAI regulations, and IT laws",
      "Business continuity and resilience",
    ],
  },
  {
    id: "controls",
    title: "Key Controls",
    icon: <Lock className="text-blue-500" />,
    list: [
      "Role-based access control",
      "Secure authentication mechanisms",
      "Monitoring and incident reporting",
      "Vendor confidentiality obligations",
      "Periodic review and improvement of controls",
    ],
  },
];

// --- Data: Terms of Use Sections ---
const termsSections: PolicySection[] = [
  {
    id: "nature",
    title: "Purpose & Nature of Content",
    icon: <AlertTriangle className="text-blue-500" />,
    content:
      "Content is for informational purposes and does not constitute insurance, legal, or professional advice.",
    list: [
      "constitutes insurance advice, legal advice, financial advice, or professional advice of any kind",
      "constitutes an offer, solicitation, or recommendation to purchase or sell any insurance product",
      "takes into account the specific circumstances of any individual or entity",
    ],
  },
  {
    id: "regulatory",
    title: "Regulatory Disclosure",
    icon: <Gavel className="text-blue-500" />,
    list: [
      "Vestigo does not underwrite insurance risk",
      "Vestigo does not act as an insurer",
      "Contracts are between insurance companies and the insured",
    ],
  },
  {
    id: "property",
    title: "Intellectual Property",
    icon: <Copyright className="text-blue-500" />,
    content:
      "All content on this website, including text, logos, graphics, layout, and design, is the intellectual property of Vestigo or its licensors and is protected under applicable intellectual property laws. No part of this website may be copied, reproduced, distributed, or used without prior written permission. ",
  },
  {
    id: "prohibited",
    title: "Prohibited Use",
    icon: <UserCheck className="text-blue-500" />,
    list: [
      "No unlawful or fraudulent purposes",
      "No unauthorized access to data/systems",
      "No introduction of malicious code or viruses",
    ],
  },
  {
    id: "privacy-data",
    title: "Privacy and Data Protection",
    icon: <ShieldAlert className="text-blue-500" />,
    content:
      "Any personal data shared through this website shall be processed in accordance with the Digital Personal Data Protection Act, 2023 and Vestigo’s Privacy Policy.",
  },
  {
    id: "no-waiver",
    title: "No Waiver",
    icon: <FileCheck className="text-blue-500" />,
    content:
      "Failure by Vestigo to enforce any provision of these Terms shall not constitute a waiver of its rights.",
  },
  {
    id: "severability",
    title: "Severability",
    icon: <FileCheck className="text-blue-500" />,
    content:
      "If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall continue in full force and effect.",
  },
];

export default function ISMSPolicy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-x-hidden"
    >
      {/* 1. HERO SECTION */}
      <section className="relative pt-10 min-h-[60vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-[#0F172A]">
        {/* Background Shape (Desktop Only) */}
        <div
          className="hidden lg:block absolute inset-0 bg-[#0F172A] z-10"
          style={{ clipPath: "polygon(0 0, 60% 0, 40% 100%, 0% 100%)" }}
        />

        {/* Animated Background Glow */}
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

        {/* Content Container */}
        <div className="container mx-auto px-6 md:px-12 relative z-20 py-12 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              src="/policy/p1-hero.jpeg"
              alt="Risk Assessment"
              className="rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] shadow-2xl border-8 border-white/5 w-full max-w-sm md:max-w-md lg:max-w-lg"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            style={{ y, opacity }}
            className="max-w-2xl text-white text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6 backdrop-blur-md"
            >
              <Database size={16} />
              Information Security & Governance
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              ISMS &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Terms of Use
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Our commitment to safeguarding information assets and defining the
              standard of engagement for our digital ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. ISMS CORE SECTION */}
      <section className="relative z-20 py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black text-[#031154] tracking-tight leading-tight">
                  Information Security <br /> Management System
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed max-w-[95%]">
                  Vestigo is committed to safeguarding information assets and
                  ensuring the
                  <span className="text-blue-600 font-bold px-1">
                    Confidentiality, Integrity, and Availability
                  </span>
                  of information across all business operations.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                <h4 className="text-[#031154] font-black text-xl mb-4">
                  Mandatory Compliance
                </h4>
                <p className="text-slate-500 leading-relaxed text-base italic">
                  &quot;All employees, associates, and third-party vendors are
                  strictly required to comply with this policy to ensure a
                  zero-trust security environment.&quot;
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              {ismsCommitments.map((sec) => (
                <div
                  key={sec.id}
                  className="bg-[#031154] p-10 rounded-[40px] text-white shadow-xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400">
                      {sec.icon}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">
                      {sec.title}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {sec.list?.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-blue-100/80 text-sm md:text-base font-medium"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. TERMS OF USE BENTO GRID */}
      <section className="py-10 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-left border-l-4 border-blue-600 pl-8">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
              Legal Framework
            </h2>
            <p className="text-4xl md:text-5xl font-black text-[#031154] tracking-tighter">
              Terms of Use
            </p>
            <p className="mt-4 text-slate-500 font-medium tracking-wide">
              Insurance is a subject matter of solicitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* General Intro Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="lg:col-span-2 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm"
            >
              <Globe className="text-blue-500 mb-6" size={40} />
              <h3 className="text-2xl font-black text-slate-800 mb-6 tracking-tight">
                1. General Terms
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                This website is owned and operated by Vestigo Insurance
                Advisory, a company incorporated under the Companies Act, 2013
                and licensed by the
                <span className="font-bold text-blue-600 ml-1">
                  Insurance Regulatory and Development Authority of India
                  (IRDAI)
                </span>
                . <br /> <br />
                By accessing, browsing, or using this website, you agree to be
                bound by these Terms of Use, along with our Privacy Policy,
                Cookie Policy, Disclaimer, and other policies published on this
                website. If you do not agree, you must refrain from using the
                website.
              </p>
            </motion.div>

            {termsSections.map((section) => (
              <motion.div
                key={section.id}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shrink-0">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-6 tracking-tight leading-tight">
                  {section.title}
                </h3>
                {section.content && (
                  <p className="text-slate-500 text-base leading-relaxed mb-6">
                    {section.content}
                  </p>
                )}
                {section.list && (
                  <ul className="space-y-4 mt-auto">
                    {section.list.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-4 bg-slate-50/80 rounded-2xl text-slate-700 text-sm font-medium border border-slate-100/50"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}

            {/* Liability Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="lg:col-span-3 bg-gradient-to-br from-slate-900 to-[#031154] rounded-[50px] p-10 md:p-16 text-white relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1">
                  <Scale className="text-blue-400 mb-8" size={56} />
                  <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">
                    Limitation of Liability
                  </h2>
                  <p className="text-xl text-blue-100/70 leading-relaxed font-light max-w-3xl">
                    To the maximum extent permitted by law, Vestigo shall not be
                    liable for any direct, indirect, incidental, consequential,
                    or special loss or damage, including loss of profits, data,
                    goodwill, or business, arising out of:
                  </p>
                </div>
                <div className="w-full lg:w-1/4 grid grid-cols-1 gap-4">
                  {[
                    {
                      label: "use or inability to use the website",
                    },
                    {
                      label: "reliance on website content",
                    },
                    {
                      label: "technical interruptions or errors",
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 text-center"
                    >
                      <p className="text-blue-400 font-black text-xl mb-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Governing Law & Jurisdiction Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="lg:col-span-3 bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm flex flex-col lg:flex-row gap-12 items-center"
            >
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8">
                  <MapPin size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-6 tracking-tight">
                  Governing Law and Jurisdiction
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  These Terms shall be governed by and construed in accordance
                  with the laws of India. Courts at Vadodara, Gujarat, shall
                  have exclusive jurisdiction.
                </p>
              </div>
              <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                  <p className="text-blue-600 font-black text-xl">India</p>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                    Governing Law
                  </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                  <p className="text-blue-600 font-black text-xl">
                    Vadodara, Gujarat
                  </p>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                    Exclusive Jurisdiction
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CLAUSES SECTION */}
      <section className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-50/50 rounded-[60px] p-10 md:p-24 flex flex-col lg:flex-row justify-between items-center gap-16">
            <div className="max-w-xl text-center lg:text-left space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-[#031154] tracking-tight">
                External Links & Accuracy
              </h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                This website may contain links to third-party websites for
                convenience. Vestigo does not control, endorse, or assume
                responsibility for the content, policies, or practices of such
                websites.
              </p>
            </div>
            <div className="flex flex-col items-center gap-10">
              <div className="flex items-center gap-6 px-12 py-8 bg-white rounded-[40px] shadow-2xl shadow-blue-900/10 border border-blue-100/50">
                <RefreshCcw
                  size={32}
                  className="text-blue-600 animate-spin-slow"
                />
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                    Periodic Update
                  </p>
                  <p className="text-xl md:text-2xl font-black text-[#031154]">
                    Last Revised: March 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
