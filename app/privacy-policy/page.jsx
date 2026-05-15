"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Sparkles,
  Mail,
  ArrowRight,
  CheckCircle2,
  Fingerprint,
  FileSearch,
  Gavel,
  Cookie,
  Users,
  Database,
  RefreshCcw,
  Clock,
  UserCheck,
  Scale,
  Eye,
  AlertOctagon,
  FileCheck,
  Search,
  ShieldAlert,
  Settings,
  AlertCircle,
  RefreshCw,
  Copyright,
  AlertTriangle,
  Globe,
  MapPin,
  MessageSquareWarning,
  HeartHandshake,
  FileText,
} from "lucide-react";

// ==========================================
// DATA ARRAYS (UPDATED WITH YOUR PROVIDED TEXT)
// ==========================================
const policySections = [
  {
    id: "data",
    title: "Personal Data We Collect",
    icon: <Fingerprint className="text-blue-500" />,
    content:
      "We collect only such personal data as is necessary, lawful, and proportionate, which may include:",
    list: [
      "Name, contact details, email address",
      "Business and organizational information",
      "Insurance-related information voluntarily provided",
      "Communications exchanged with us",
      "Technical data: IP address, browser type, and access logs",
    ],
  },
  {
    id: "purpose",
    title: "Purpose of Processing",
    icon: <FileSearch className="text-blue-500" />,
    content:
      "Vestigo does not sell, trade, or commercially exploit personal data, nor does it engage in intrusive profiling. Personal data is processed strictly for:",
    list: [
      "Providing insurance broking and advisory services",
      "Policy placement, servicing, and claims coordination",
      "Regulatory, audit, and compliance requirements",
      "Client communication and grievance redressal",
    ],
    footer:
      "Vestigo does not sell, trade, or commercially exploit personal data.",
  },
  {
    id: "consent",
    title: "5. Consent",
    icon: <UserCheck className="text-blue-500" />,
    content: (
      <>
        By submitting personal data, you provide{" "}
        <span className="font-bold text-slate-600">
          free, specific, informed, and unambiguous consent
        </span>{" "}
        for its processing for the stated purposes. You may withdraw consent at
        any time by writing to us, subject to statutory, regulatory, and
        contractual obligations.
      </>
    ),
  },
  {
    id: "sharing",
    title: "Data Sharing & Disclosure",
    icon: <Users className="text-blue-500" />,
    content: "Personal data may be shared only on a need-to-know basis with:",
    list: [
      "Insurance companies and reinsurers",
      "Third-party administrators, surveyors, and service providers",
      "Regulatory or governmental authorities where required by law",
    ],
  },
  {
    id: "storage",
    title: "Data Storage & Transfer",
    icon: <Database className="text-blue-500" />,
    content: (
      <>
        Personal data is processed and stored in India. Cross-border data
        transfer, if required for insurance placement, shall be undertaken{" "}
        <span className="font-bold text-slate-600">
          only in accordance with applicable law and safeguards.
        </span>{" "}
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    icon: <Clock className="text-blue-500" />,
    content: "Personal data is retained only for the period required under:",
    list: [
      "IRDAI regulations",
      "Applicable laws",
      "Audit, contractual, or dispute-resolution requirements",
    ],
  },
];

export default function ComprehensivePolicy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const videoRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-x-hidden">
      {/* MASTER HERO SECTION */}
      <section
        ref={containerRef}
        className="relative min-h-[85vh] bg-[#040a26] overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-[45vh] lg:h-full lg:w-1/2 lg:left-auto lg:right-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            preload="auto"
            muted
            loop
            className="w-full h-full object-cover"
          >
            <source src="/heropolicy.mp4" type="video/mp4" />
          </video>
          <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020617]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] px-6">
          <div className="flex pt-[45vh] lg:pt-0 items-end lg:items-center">
            <motion.div
              style={{ y, opacity }}
              className="max-w-xl pb-12 md:pb-0"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase">
                <Sparkles size={14} />
                DPDP Act, 2023 & IRDAI Compliant
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Privacy{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Policy
                </span>
              </h1>
              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed mb-8">
                Official governance framework for Vestigo Insurance Brokers Pvt.
                Ltd. ensuring free, specific, and informed data processing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1. INTRODUCTION & SCOPE */}
      <section className="relative z-20 py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600">
                  Introduction
                </h2>
                <h3 className="text-4xl md:text-5xl font-black text-[#031154] tracking-tight leading-tight">
                  Commitment to <br /> Digital Protection
                </h3>
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed max-w-[95%]">
                  <p>
                    Vestigo Insurance Brokers Pvt. Ltd. respects the privacy of
                    individuals and is committed to protecting personal data in
                    accordance with the
                    <span className="text-blue-600 font-semibold mx-1">
                      Digital Personal Data Protection Act, 2023 (DPDP Act)
                    </span>
                    , the Information Technology Act, 2000, and applicable
                    regulations issued by the Insurance Regulatory and
                    Development Authority of India (IRDAI).
                  </p>
                  <p className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 italic text-base">
                    &quot;By accessing or using this website or by sharing
                    personal data with us, you acknowledge that you have read
                    and understood this Privacy Policy and consent to the
                    processing of your personal data in accordance with its
                    terms. &quot; <br /> &quot;You must be at least{" "}
                    <b>18 years</b> of age and legally competent to provide
                    consent under applicable law to use this website and our
                    services.&quot;
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-[#031154] p-10 md:p-14 rounded-[40px] text-white shadow-2xl"
            >
              <Users className="text-blue-400 mb-8" size={48} />
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Scope</h3>
              <p className="text-blue-100/70 mb-6 font-light">
                This Privacy Policy applies to:
              </p>
              <ul className="space-y-6">
                {[
                  "Clients, prospective clients, and authorized representatives",
                  "Visitors to our website",
                  "Individuals interacting via broking and advisory services",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2
                      className="text-blue-400 mt-1 shrink-0"
                      size={24}
                    />
                    <span className="text-lg font-medium text-white/90 leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-10 pt-6 border-t border-white/10 text-xs text-blue-300/60 uppercase tracking-widest font-bold">
                Excludes employees (Governed by internal policies)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DETAILED GOVERNANCE GRID */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policySections.map((section) => (
              <motion.div
                key={section.id}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-sm flex flex-col min-h-[400px]"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shrink-0">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-6 tracking-tight leading-tight">
                  {section.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {section.content}
                </p>
                {section.list && (
                  <ul className="space-y-3 mt-auto">
                    {section.list.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-3 bg-slate-50/80 rounded-xl text-slate-700 text-sm font-medium border border-slate-100"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* SECURITY & BREACH (Sections 9 & 10) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-slate-900 to-[#031154] rounded-[50px] p-10 md:p-20 text-white relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <ShieldCheck className="text-blue-400 mb-8" size={64} />
                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
                  Data Security & Breach Response
                </h2>
                <p className="text-lg text-blue-100/70 leading-relaxed font-light max-w-2xl">
                  Vestigo implements reasonable technical and organizational
                  safeguards to protect personal data against unauthorized
                  access, loss, misuse, or alteration. In the event of a
                  Personal data breach, we take prompt remedial action and
                  notify affected individuals and authorities as required under
                  the DPDP Act and applicable laws.
                </p>
              </div>
              <div className="w-full lg:w-1/3 grid grid-cols-1 gap-4">
                <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <p className="text-sm font-bold uppercase tracking-widest">
                    Prompt Remedial Action
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <p className="text-sm font-bold uppercase tracking-widest">
                    Statutory Notifications
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 12 & 13. RIGHTS & GRIEVANCE */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100">
              <h3 className="text-2xl font-black text-[#031154] mb-8 uppercase tracking-widest">
                Rights of Data Principals
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Access your Personal Data",
                  "Request Correction or erasure",
                  "Withdraw Consent",
                  "Seek grievance Redressal",
                ].map((right, i) => (
                  <div
                    key={i}
                    className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/50 flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-blue-500" size={20} />
                    <span className="font-bold text-slate-700 text-sm">
                      {right}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 bg-blue-600 rounded-[40px] text-white shadow-xl shadow-blue-900/20">
              <h3 className="text-2xl font-black mb-8 uppercase tracking-widest">
                Updates to Policy
              </h3>
              <p className="text-blue-100 leading-relaxed text-lg mb-6">
                Vestigo reserves the right to amend this Privacy Policy to
                reflect legal, regulatory, or operational changes. Updates are
                effective from the date of posting.
              </p>
              <div className="flex items-center gap-3 text-blue-200 font-bold text-sm">
                <RefreshCw size={18} />
                Last Revised: March 2026
              </div>
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-[60px] p-10 md:p-24 flex flex-col lg:flex-row justify-between items-center gap-16">
            <div className="max-w-xl text-center lg:text-left space-y-8">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600">
                Grievance Officer
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-[#031154] tracking-tight">
                Redressal Matrix
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                All privacy-related concerns may be addressed to our officer. We
                acknowledge grievances within
                <span className="text-blue-600 font-bold mx-1">
                  3 working days
                </span>
                and resolve them within
                <span className="text-blue-600 font-bold mx-1">
                  15 working days
                </span>
                .
              </p>
            </div>
            <div className="flex flex-col items-center gap-10">
              <a
                href="mailto:gro@vestigoinsurance.com"
                className="flex items-center gap-6 px-12 py-8 bg-white rounded-[40px] shadow-2xl shadow-blue-900/10 hover:scale-[1.02] transition-transform group border border-blue-100"
              >
                <Mail size={32} className="text-blue-600" />
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                    Direct Redressal
                  </p>
                  <p className="text-xl md:text-2xl font-black text-[#031154]">
                    gro@vestigoinsurance.com
                  </p>
                </div>
              </a>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#020617] text-white px-14 py-6 rounded-full font-black text-lg flex items-center gap-4 shadow-xl"
                >
                  Connect with Compliance <ArrowRight size={24} />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <footer className="py-12 bg-slate-50 text-center border-t border-slate-200">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
          Insurance is a subject matter of solicitation | IRDAI Regn. No: 1131
          Direct Broker (General & Life)
        </p>
      </footer>
    </div>
  );
}

// Target SVG Icon helper...
function Target({ className, size = 24 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
