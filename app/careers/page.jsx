"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Rocket,
  Heart,
  TrendingUp,
  FlaskConical,
  Coffee,
  Handshake,
  Star,
  ArrowRight,
  MapPin,
  Clock,
} from "lucide-react";

const CareersPage = () => {
  const jobs = [
    {
      title: "Senior Risk Analyst",
      dept: "Insurance Strategy",
      type: "Full-Time",
      location: "Ahmedabad / Remote",
    },
    {
      title: "Customer Success Manager",
      dept: "Operations",
      type: "Full-Time",
      location: "Ahmedabad",
    },
    {
      title: "Full Stack Developer",
      dept: "Tech - Ability Suite",
      type: "Full-Time",
      location: "Remote",
    },
  ];

  const benefits = [
    {
      title: "Dynamic Leadership",
      icon: <Rocket className="text-rose-500" />,
      desc: "Young entrepreneurs driving innovation",
    },
    {
      title: "Career Growth",
      icon: <TrendingUp className="text-blue-500" />,
      desc: "Fast-track progression in a growing company",
    },
    {
      title: "Cutting-Edge Work",
      icon: <FlaskConical className="text-amber-500" />,
      desc: "Tomorrow’s insurance solutions, built today",
    },
    {
      title: "Ownership Culture",
      icon: <Handshake className="text-purple-500" />,
      desc: "Your voice, your impact, your success",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6"
          >
            <Briefcase size={16} /> Join the Vestigo Team
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-6">
            Join Our Team:{" "}
            <span className="text-blue-600">
              Shape the Future of Insurance Broking
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-6 leading-relaxed">
            Led by visionary entrepreneurs, we’re redefining insurance broking
            with future-focused risk solutions. Join a dynamic team where
            innovation meets opportunity and your ideas help shape tomorrow’s
            insurance landscape.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Life at Vestigo
            </h2>
            <p className="text-slate-500 text-xl leading-relaxed">
              “We invest in our people, so they can deliver exceptional care to
              our clients.”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, i) => (
              <div
                key={i}
                // Yahan flex, items-center, aur text-center classes add ki gayi hain
                className="p-8 rounded-3xl bg-white border border-slate-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all group flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-md leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings List */}
      <section className="py-10 px-6 bg-slate-50 rounded-[3rem] mx-4 md:mx-10 mb-24">
        <div className="mt-16 text-center p-12 bg-white rounded-[2rem] border border-dashed border-slate-300">
          <h4 className="text-xl font-bold text-slate-800 mb-2">
            Don&apos;t see a perfect fit?
          </h4>
          <p className="text-slate-500 mb-6">
            “Send us your CV, and we’ll get in touch when a relevant opportunity
            opens up.”
          </p>
          <a
            href="mailto:info@vestigoinsurance.com"
            className="text-blue-600 font-bold hover:underline underline-offset-4"
          >
            info@vestigoinsurance.com
          </a>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
