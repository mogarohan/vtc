  'use client';

  import React, { useRef } from 'react';
  import { motion, useScroll, useTransform } from 'framer-motion';
  import {
    Target,
    Eye,
    TrendingUp,
    ShieldCheck,
    Zap,
    Headphones,
    Trophy,
    Users,
    ChevronRight,
    Sparkles,
    Building2,
    Globe,
    ArrowRight,
    Handshake
  } from 'lucide-react';
  import Link from 'next/link';

  export default function CompanyOverview() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    const stats = [
      { label: 'Years Experience', value: '15+', icon: <Trophy size={20} /> },
      { label: 'Clients Globally', value: '500+', icon: <Users size={20} /> },
      { label: 'Expert Advisors', value: '50+', icon: <Building2 size={20} /> },
      { label: 'Global Presence', value: '10+', icon: <Globe size={20} /> },
    ];

    return (
      <main ref={containerRef} className="bg-white overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0F172A]">
          <div className="absolute inset-0">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 12, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-600/20 rounded-full blur-[100px]"
            />
            <motion.div
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 16, repeat: Infinity }}
              className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-indigo-600/20 rounded-full blur-[100px]"
            />
          </div>

          <motion.div
            style={{ y, opacity }}
            className="relative z-10 text-center px-4 sm:px-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-xs sm:text-sm font-bold mb-6 backdrop-blur-md">
              <Sparkles size={14} />
              SECURING YOUR FUTURE
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              We Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Resilience
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Vestigo insurance nathi, pan tamara sapnao mate nu ek safety shield che.
              We turn uncertainty into opportunity through trust & technology.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/company/whoweare"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
              >
                Learn Who We Are <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ================= STATS ================= */}
        <section className="relative z-20 -mt-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-lg border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-blue-600 mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

      {/* WHY CHOOSE US – STRATEGIC ADVANTAGE */}
  <section className="py-28 px-6 bg-slate-50">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT CONTENT */}
      <div>
        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
          Why Choose Vestigo
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6 leading-tight">
          Strategic Risk Consulting <br />
          <span className="text-blue-600">That Actually Protects.</span>
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Insurance alone doesn’t secure a business.  
          <strong> Understanding risk does.</strong>  
          Vestigo helps organizations identify, reduce, and control risks
          before they turn into financial losses.
        </p>

        <ul className="space-y-4 text-slate-700 text-lg">
          <li className="flex gap-3">
            <ShieldCheck className="text-blue-600 mt-1" />
            Avoid crippling financial losses through proactive risk mapping
          </li>
          <li className="flex gap-3">
            <TrendingUp className="text-blue-600 mt-1" />
            Reduce claims frequency and severity by up to 30%
          </li>
          <li className="flex gap-3">
            <Target className="text-blue-600 mt-1" />
            Ensure uninterrupted business operations & continuity
          </li>
          <li className="flex gap-3">
            <Zap className="text-blue-600 mt-1" />
            Optimise coverage & premiums with expert policy audits
          </li>
        </ul>

        <Link
          href="/company/whyus"
          className="inline-flex items-center gap-2 mt-10 font-bold text-blue-600 group"
        >
          Discover Our Risk Approach
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* RIGHT VISUAL CARDS */}
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          {
            title: "Risk Identification",
            desc: "Uncover hidden operational & financial vulnerabilities",
            icon: <Eye />,
          },
          {
            title: "Risk Control",
            desc: "Implement practical loss-prevention strategies",
            icon: <ShieldCheck />,
          },
          {
            title: "Claims Advocacy",
            desc: "Faster, fairer and expert-led claim settlements",
            icon: <Handshake />,
          },
          {
            title: "Cost Optimisation",
            desc: "Save 10–20% through structured policy audits",
            icon: <TrendingUp />,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h4 className="font-bold text-lg text-slate-900 mb-2">
              {item.title}
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>

        {/* ================= MISSION / VISION ================= */}
        <section className="py-20 sm:py-28 bg-[#0F172A] px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white/5 border border-white/10">
              <Target className="text-blue-400 mb-5" size={36} />
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-slate-400 text-base sm:text-lg">
                To safeguard future growth by delivering intelligent insurance
                advisory with transparency, trust, and excellence.
              </p>
            </div>

            <div className="p-8 sm:p-12 rounded-[2.5rem] bg-blue-600">
              <Eye className="text-white mb-5" size={36} />
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-blue-100 text-base sm:text-lg">
                To be the most trusted partner in enterprise risk advisory across
                India and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-20 sm:py-32 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] sm:rounded-[4rem] p-10 sm:p-16 text-center text-white">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Start Your Journey With Us
            </h2>
            <p className="text-blue-100 text-base sm:text-lg mb-8">
              Discover why 500+ clients trust Vestigo for risk protection and
              long-term resilience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/company/whoweare"
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold"
              >
                Who We Are
              </Link>
              <Link
                href="/contacts"
                className="bg-white/10 border border-white/20 px-8 py-4 rounded-2xl font-bold"
              >
                Contact Specialists
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }
