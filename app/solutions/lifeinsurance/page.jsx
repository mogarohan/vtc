"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Heart,
  Umbrella,
  Banknote,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const LifeInsurance = () => {
  const containerRef = useRef(null);

  // Parallax Effect for the Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform values ko thoda kam kiya hai taaki content screen se bahar na jaye
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const plans = [
    {
      title: "Term Life Insurance",
      desc: "Pure protection plans designed to secure income replacement and family needs over critical financial periods.",
      icon: <Umbrella className="w-10 h-10 text-blue-500" />,
      features: ["Pure Protection", "Tax Benefits", "High Sum Assured"],
    },
    {
      title: "Savings & Investment Plans",
      desc: "Long-term solutions combining protection with disciplined wealth creation and future planning..",
      icon: <Heart className="w-10 h-10 text-red-500" />,
      features: ["Lifetime Cover", "Cash Value", "Guaranteed Returns"],
    },
    {
      title: "Retirement & Legacy Planning",
      desc: "Structured cover to support retirement income and ensure a smooth transfer of wealth across generations.",
      icon: <Users className="w-10 h-10 text-purple-500" />,
      features: ["Wealth Creation", "Premium Waiver", "Fixed Milestones"],
    },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-white">
      {/* 1. PREMIUM DARK HERO SECTION - Fixed Height & Padding */}
      <section className="relative pt-10 min-h-[90vh] flex items-center overflow-hidden bg-[#0F172A]">
        <div className="container mx-auto px-6 md:px-12 z-20 relative py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 md:gap-16">
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
              <Sparkles size={16} /> LIFETIME PROTECTION
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
              Secure Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Family’s Future.
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Secure your family&apos;s financial future with comprehensive life
              insurance coverage designed to protect those who matter most.
              Beyond basic death benefits, we structure sophisticated protection
              strategies incorporating income replacement, estate planning, and
              wealth preservation objectives.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-30 w-full lg:w-auto"
          >
            <img
              src="/family.png"
              alt="Life Insurance"
              className="rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border-8 border-white/5 w-full max-w-md md:max-w-none mx-auto transition-all duration-700"
            />
          </motion.div>
        </div>

        {/* Diagonal HERO SHAPE */}
        <div
          className="absolute inset-0 bg-[#020617] z-10"
          style={{
            clipPath: "polygon(0 0, 58% 0, 42% 100%, 0% 100%)",
          }}
        />
      </section>

      {/* 2. PLANS GRID (Floating Effect) - Fixed Margin */}
      <section id="plans" className="relative z-20 -mt-10 px-6 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="flex flex-col p-8 rounded-[2.5rem] border border-slate-100 bg-white shadow-xl shadow-slate-200/50 hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="mb-6">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {plan.title}
                </h3>
                <p className="text-slate-500 mb-8 flex-grow leading-relaxed">
                  {plan.desc}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500" /> {feat}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 rounded-xl border border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2 group">
                  Plan Details{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. EXPERT CLAIMS ADVOCACY */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter"
          >
            Thoughtful Life Protection
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-50 h-1 bg-blue-600 mx-auto mb-12 rounded-full origin-center"
          />

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#0F2A6B] text-white rounded-[2.5rem] p-10 md:p-14 shadow-xl"
          >
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Life insurance is more than a policy. It is a promise of
              stability, income protection, and long-term security for your
              dependents in the event of unforeseen circumstances.
            </p>

            <p className="text-lg text-blue-100 leading-relaxed">
              We help individuals and families structure life cover that aligns
              with financial goals, liabilities, and future aspirations, while
              ensuring clarity, affordability, and certainty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. PREMIUM CTA SECTION */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase">
            Start Your Legacy Today
          </h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
            Don&apos;t leave your family&apos;s future to chance. Consult with
            our expert advisors to find a life cover that truly protects.
          </p>
          <div className="relative z-10">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
            >
              Consult an Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LifeInsurance;
