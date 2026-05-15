"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Gavel,
  UserCheck,
  Eye,
  AlertOctagon,
  FileCheck,
  Search,
  ShieldAlert,
  Copyright,
  AlertTriangle,
  Globe,
  Database,
  Clock,
  RefreshCw,
  Scale,
} from "lucide-react";

// ==========================================
// UPDATED DATA ARRAYS
// ==========================================

const ismsCommitments = [
  {
    id: "commitments",
    title: "ISMS Commitments",
    icon: <ShieldCheck size={20} />,
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
    icon: <Lock size={20} />,
    list: [
      "Role-based access control",
      "Secure authentication mechanisms",
      "Monitoring and incident reporting",
      "Vendor confidentiality obligations",
      "Periodic review and improvement of security controls",
    ],
  },
];

const termsSections = [
  {
    id: "nature",
    title: "Purpose & Nature of Website Content",
    icon: <AlertTriangle className="text-blue-500" />,
    content: (
      <>
        All information, material, and content provided on this website are of a{" "}
        <span className="font-bold text-slate-900">
          general and informational nature only
        </span>
        . Nothing on this website:
      </>
    ),
    list: [
      "Constitutes insurance, legal, financial, or professional advice of any kind",
      "Constitutes an offer, solicitation, or recommendation to purchase/sell products",
      "Takes into account the specific circumstances of any individual or entity",
    ],
  },
  {
    id: "regulatory",
    title: "Regulatory Disclosure",
    icon: <Gavel className="text-blue-500" />,
    content:
      "Vestigo Insurance Brokers Pvt. Ltd. is a licensed broker registered with IRDAI.",
    list: [
      "Vestigo does not underwrite insurance risk",
      "Vestigo does not act as an insurer",
      "Contracts are entered into directly between the insurer and the insured",
    ],
  },
  {
    id: "accuracy",
    title: "Accuracy and Updates",
    icon: <RefreshCw className="text-blue-500" />,
    content: (
      <>
        While reasonable efforts are made to ensure that the information on this
        website is{" "}
        <span className="font-bold text-slate-900">accurate and current</span>,
        Vestigo makes no representation or warranty, express or implied,
        regarding accuracy, completeness, reliability, suitability, or
        availability of the content. Information may be updated, modified, or
        withdrawn at any time without notice.
      </>
    ),
    list: [],
  },
  {
    id: "responsibility",
    title: "User Responsibility",
    icon: <UserCheck className="text-blue-500" />,
    content:
      "Use of this website is entirely at the user’s own risk. Users are responsible for:",
    list: [
      "Ensuring information relied upon is appropriate for their circumstances",
      "understanding that insurance products are governed by policy terms, conditions, exclusions, and limitations",
      "Reviewing official policy documents issued by insurers",
    ],
  },
  {
    id: "property",
    title: "Intellectual Property",
    icon: <Copyright className="text-blue-500" />,
    content: (
      <>
        All content on this website, including text, logos, graphics, and
        design, is the{" "}
        <span className="font-bold text-slate-900">
          intellectual property of Vestigo
        </span>{" "}
        or its licensors and is protected under applicable intellectual property
        laws. No part of this website may be copied, reproduced, distributed, or
        used without prior written permission.
      </>
    ),
  },
  {
    id: "prohibited",
    title: "Prohibited Use",
    icon: <AlertOctagon className="text-blue-500" />,
    list: [
      "No unlawful, misleading, or fraudulent purposes",
      "No unauthorized access to systems or data",
      "No introduction of malicious code or viruses",
      "No misrepresentation of identity",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    icon: <ShieldAlert className="text-blue-500" />,
    content:
      "To the maximum extent permitted by law, Vestigo shall not be liable for loss arising out of:",
    list: [
      "Use or inability to use the website",
      "Reliance on website content",
      "Technical interruptions or errors",
    ],
  },
];

export default function ISMSPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      {/* 1. ISMS HERO SECTION */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-16 md:py-24">
            {/* LEFT SIDE: IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                <img
                  src="/policy/p1-hero.jpeg"
                  alt="Security Framework"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient to blend with the dark theme */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A]/40 to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl" />
            </motion.div>

            {/* RIGHT SIDE: CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-[10px] md:text-xs font-bold uppercase mb-6">
                <Lock size={14} /> Security Framework
              </div>
              <h1 className="text-3xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
                Information Security <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Management System
                </span>
              </h1>
              <p className="text-sm md:text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Vestigo is committed to safeguarding information assets and
                ensuring the{" "}
                <span className="text-white font-semibold">
                  Confidentiality, Integrity, and Availability
                </span>{" "}
                of information.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. ISMS COMMITMENTS & CONTROLS */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {ismsCommitments.map((sec) => (
            <div
              key={sec.id}
              className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] md:rounded-[40px] border border-slate-300 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200">
                  {sec.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[#031154] tracking-tight">
                  {sec.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {sec.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-600 text-md md:text-base font-medium"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lg:col-span-2 p-6 bg-blue-50 rounded-2xl border border-blue-200 italic text-center text-slate-600 text-lg md:text-lg">
            &quot;All employees and associates are required to comply with this
            policy.&quot;
          </div>
        </div>
      </section>

      {/* 3. TERMS OF USE GRID */}
      <section className="py-12 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 border-l-4 border-blue-600 pl-4 md:pl-8">
            <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
              Legal Notice
            </h2>
            <p className="text-3xl md:text-5xl font-black text-[#031154] tracking-tighter">
              Terms of Use
            </p>
            <p className="mt-4 text-slate-500 font-bold tracking-widest text-[10px] md:text-xs uppercase italic">
              Insurance is a subject matter of solicitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* General Section */}
            <div className="md:col-span-2 lg:col-span-2 bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[40px] border border-slate-200 shadow-sm">
              <Globe className="text-blue-500 mb-6" size={40} />
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-6 tracking-tight">
                General
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                This website is owned and operated by{" "}
                <span className="font-bold text-slate-900">
                  Vestigo Insurance Brokers Pvt. Ltd, a company incorporated
                  under the Companies Act, 2013 and
                </span>{" "}
                licensed by the{" "}
                <span className="font-bold text-slate-900">
                  Insurance Regulatory and Development Authority of India
                  (IRDAI)
                </span>
                . By accessing, browsing, or using this website, you agree to be
                bound by these Terms of Use, along with our Privacy Policy,
                Cookie Policy, Disclaimer, and other policies published on this
                website. If you do not agree, you must refrain from using the
                website.
              </p>
            </div>

            {/* Dynamic Terms Sections */}
            {termsSections.map((section) => (
              <div
                key={section.id}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[40px] border border-slate-200 shadow-sm flex flex-col"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 md:mb-8 shrink-0">
                  {section.icon}
                </div>
                <h3 className="text-lg md:text-xl font-black text-slate-800 mb-4 tracking-tight leading-tight">
                  {section.title}
                </h3>
                {section.content && (
                  <div className="text-slate-500 text-md md:text-md leading-relaxed mb-6">
                    {section.content}
                  </div>
                )}
                {section.list && section.list.length > 0 && (
                  <ul className="space-y-3 mt-auto">
                    {section.list.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-3 bg-slate-50/80 rounded-xl text-slate-700 text-[11px] md:text-[14px] font-semibold border border-slate-100"
                      >
                        <div className="w-1 h-1 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Compliance Points & Governing Law Layout */}
            <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8 md:mt-12">
              {/* Left Side: Compliance Points */}
              <div className="lg:col-span-4 space-y-4">
                {[
                  {
                    title: "External Links",
                    desc: "This website may contain links to third-party websites for convenience. Vestigo does not control, endorse, or assume responsibility for the content, policies, or practices of such websites. ",
                  },
                  {
                    title: "Privacy and Data Protection",
                    desc: "Any personal data shared through this website shall be processed in accordance with the Digital Personal Data Protection Act, 2023 and Vestigo’s Privacy Policy. ",
                  },
                  {
                    title: "No Waiver",
                    desc: "Failure by Vestigo to enforce any provision of these Terms shall not constitute a waiver of its rights.",
                  },
                  {
                    title: "Severability",
                    desc: "If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall continue in full force and effect.",
                  },
                ].map((p, index) => (
                  <div
                    key={index}
                    className="p-5 bg-blue-50/50 rounded-2xl border-l-4 border border-blue-500 shadow-sm"
                  >
                    <h5 className="text-[#031154] font-bold text-[15px] md:text-[15px] uppercase mb-1">
                      {p.title}
                    </h5>
                    <p className="text-slate-500 text-[14px] md:text-[14px] leading-tight font-medium">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Side: Governing Law Box */}
              <div className="lg:col-span-8 bg-gradient-to-br from-slate-900 to-[#031154] rounded-[2.5rem] md:rounded-[40px] p-8 md:p-12 text-white flex flex-col justify-center text-center shadow-xl">
                <h3 className="text-2xl md:text-3xl font-black mb-8 md:mb-10 tracking-tight leading-tight">
                  Governing Law & Jurisdiction
                </h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16">
                  <div className="flex flex-col items-center">
                    <p className="text-blue-400 font-black text-2xl md:text-3xl mb-1">
                      India
                    </p>
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
                      Legal Framework
                    </p>
                  </div>
                  <div className="w-px h-12 bg-white/10 hidden sm:block" />
                  <div className="flex flex-col items-center">
                    <p className="text-blue-400 font-black text-2xl md:text-3xl mb-1">
                      Vadodara
                    </p>
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
                      Jurisdiction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <footer className="py-12 bg-white text-center border-t border-slate-100 px-6">
        <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 leading-relaxed">
          <Scale size={16} className="hidden md:block shrink-0" />
          <span>Insurance is a subject matter of solicitation</span>
          <span className="hidden md:block">|</span>
          <span>IRDAI Regn. No. 1131 direct broker (General & Life)</span>
        </p>
      </footer>
    </div>
  );
}
