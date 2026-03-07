"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  Mail,
  ArrowRight,
  Cookie,
  Clock,
  Settings,
  Scale,
  ExternalLink,
  CheckCircle2,
  FileText,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

export default function GrievanceCookiePolicy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section
        ref={containerRef}
        className="relative min-h-[60vh] bg-[#020617] overflow-hidden flex items-center pt-24 pb-20"
      >
        {/* Animated Glow */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, -40, 0] }}
            transition={{ duration: 14, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px]"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <Image
              src="/policy/p2-hero.jpeg"
              alt="Compliance Background"
              width={600}
              height={450}
              priority
              className="rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-white/10 w-full max-w-md lg:max-w-lg object-cover"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            style={{ y, opacity }}
            className="max-w-3xl text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-blue-400/20 bg-blue-500/10 backdrop-blur-md text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
              <ShieldCheck size={14} className="animate-pulse" />
              Transparent Resolution & Privacy
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
              Grievance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                REDRESSAL Policy
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
              Vestigo is committed to transparent and timely grievance
              resolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. GRIEVANCE REDRESSAL SECTION */}
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
                  Transparent <br /> Grievance Resolution
                </h2>
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-[95%]">
                  Vestigo is committed to a transparent and timely resolution
                  process. We ensure that every concern is addressed with
                  professional integrity and regulatory alignment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 flex flex-col justify-between">
                  <Clock className="text-blue-600 mb-4" size={32} />
                  <div>
                    <h4 className="text-[#031154] font-black text-xl mb-2">
                      3 Working Days
                    </h4>
                    <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">
                      Initial Acknowledgement
                    </p>
                  </div>
                </div>
                <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 flex flex-col justify-between">
                  <CheckCircle2 className="text-blue-600 mb-4" size={32} />
                  <div>
                    <h4 className="text-[#031154] font-black text-xl mb-2">
                      15 Working Days
                    </h4>
                    <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">
                      Targeted Resolution
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-[#031154] p-10 md:p-14 rounded-[40px] text-white shadow-2xl space-y-10"
            >
              <div>
                <Scale className="text-blue-400 mb-6" size={40} />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                  Escalation Matrix
                </h3>
                <p className="text-blue-100/70 mb-8 text-lg leading-relaxed">
                  If your grievance remains unresolved through our internal
                  process, you have the right to escalate the matter to the
                  regulator.
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
                  <AlertCircle className="text-blue-400 shrink-0" size={24} />
                  <p className="text-sm font-semibold tracking-wide uppercase">
                    Unresolved concerns may be escalated to IRDAI
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-4">
                  Direct Contact
                </p>
                <a
                  href="mailto:gro@vestigoinsurance.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <span className="text-xl font-bold border-b border-transparent group-hover:border-blue-400 transition-all">
                    gro@vestigoinsurance.com
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. COOKIE POLICY BENTO GRID */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-left border-l-4 border-blue-600 pl-8">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
              Digital Interaction
            </h2>
            <p className="text-4xl md:text-5xl font-black text-[#031154] tracking-tighter">
              Cookie Policy
            </p>
            <p className="text-slate-600 text-md md:text-lg leading-relaxed max-w-3xl mt-6">
              Cookies are small text files stored on your device when you visit
              a website. They help improve website functionality, user
              experience, and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Purpose Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shrink-0">
                <Cookie size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-6 tracking-tight">
                Purpose & Usage
              </h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
                This Cookie Policy explains how Vestigo Insurance Advisory uses
                cookies and similar technologies on its website.
              </p>
            </motion.div>

            {/* Cookie Types Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shrink-0">
                <FileText size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-6 tracking-tight">
                Types We Use
              </h3>
              <ul className="space-y-4 mt-auto">
                <li className="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
                  <p className="text-[#031154] font-bold text-lg mb-1">
                    Essential Cookies
                  </p>
                  <p className="text-slate-500 text-md">
                    Required for basic website functionality and security.
                  </p>
                </li>
                <li className="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
                  <p className="text-[#031154] font-bold text-lg mb-1">
                    Performance & Analytics
                  </p>
                  <p className="text-slate-500 text-md">
                    Used to improve navigation and understand usage patterns.
                  </p>
                </li>
              </ul>
            </motion.div>

            {/* Management Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shrink-0">
                <Settings size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-6 tracking-tight">
                Managing Cookies
              </h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                Most browsers allow control over cookies through settings.
                Disabling them may affect certain website functionalities.
              </p>
              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-blue-600 font-bold text-sm uppercase tracking-widest">
                <span>User Control Enabled</span>
                <Settings size={16} />
              </div>
            </motion.div>

            {/* Updates & Acceptance Full-Width */}
            <motion.div
              whileHover={{ y: -8 }}
              className="lg:col-span-3 bg-gradient-to-br from-slate-900 to-[#031154] rounded-[50px] p-10 md:p-16 text-white relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1">
                  <RefreshCw
                    className="text-blue-400 mb-8 animate-spin-slow"
                    size={56}
                  />
                  <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">
                    Policy Updates
                  </h2>
                  <p className="text-xl text-blue-100/70 leading-relaxed font-light max-w-3xl">
                    Our Cookie Policy is updated periodically. Continued use of
                    the website following any changes constitutes your
                    acceptance of the updated framework.
                  </p>
                </div>
                <div className="w-full lg:w-1/4 flex flex-col gap-4">
                  <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 text-center">
                    <p className="text-blue-400 font-black text-2xl mb-1">
                      March 2026
                    </p>
                    <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest">
                      Last Revised Date
                    </p>
                  </div>
                </div>
              </div>
              {/* Background Decor */}
              <div
                className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "32px 32px",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION */}
      <section className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-[#031154] tracking-tight">
              Need further clarity?
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              Our compliance team is available to discuss our grievance
              procedures or technical data interaction protocols in detail.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
