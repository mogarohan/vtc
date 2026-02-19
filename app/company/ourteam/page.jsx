"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Instagram,
  Mail,
  Target,
  Heart,
  Users,
  Ear,
  Handshake,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function OurTeam() {
  const containerRef = useRef(null);

  const values = [
    {
      title: "Transparency",
      desc: "Clear, honest, and jargon-free communication at every stage.",
      icon: <Target className="w-5 h-5" />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Empathy",
      desc: "Standing by clients with care and responsibility when outcomes matter.",
      icon: <Heart className="w-5 h-5" />,
      color: "bg-red-50 text-red-600",
    },
    {
      title: "Discipline",
      desc: "Preparedness, consistency, and structured execution across engagements.",
      icon: <Users className="w-5 h-5" />,
      color: "bg-green-50 text-green-600",
    },
  ];

  return (
    <main ref={containerRef} className="bg-white overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[85vh]">
        <img
          src="/team.jpeg"
          alt="About Us Background"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
        />

        <div className="relative z-10 flex items-center h-full">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Guided by <span className="text-blue-300">Responsibility</span>
              </h1>

              <p className="text-white/90 text-sm sm:text-lg md:text-xl leading-relaxed border-l-4 border-blue-500 pl-4">
                Vestigo is guided by leadership that combines deep insurance
                expertise, disciplined judgment, and genuine responsibility
                toward clients. Our founders remain closely involved in advisory
                and client engagements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <motion.h3
                {...fadeInUp}
                className="text-5xl font-bold text-slate-900 mb-8"
              >
                Our Team
                <div className="w-30 h-1.5 bg-blue-600 mb-5 mt-2 ml-8 rounded-full" />
              </motion.h3>
              <motion.p
                {...fadeInUp}
                className="text-gray-600 text-xl leading-relaxed"
              >
                At Vestigo, our team works with a clear sense of
                responsibility—because insurance is not about paperwork, it is
                about standing by clients when outcomes matter most.
              </motion.p>
            </div>

            <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-blue-600 p-12 text-white rounded-[2rem] shadow-2xl shadow-blue-900/20"
              >
                <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
                <p className="leading-relaxed text-blue-50/80 text-lg">
                  We take the time to understand each client&apos;s business,
                  risks, and expectations, ensuring our advice is thoughtful,
                  practical, and dependable.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-slate-300 p-12   border border-slate-200 rounded-[2rem]"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Continuous Partnership
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our teams remain engaged across the entire insurance journey,
                  providing continuity, clarity, and support—not just at
                  placement, but through claims and critical moments.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        {/* Optional: Decorative "Cloud" blobs for the background */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-100/50 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Ear,
                title: "We Listen Carefully",
                text: "Understanding your unique challenges through genuine dialogue and attention to detail.",
              },
              {
                icon: Handshake,
                title: "We Act Responsibly",
                text: "Every recommendation is guided by discipline, transparency, and unwavering professional care.",
              },
              {
                icon: ShieldCheck,
                title: "We Remain Present",
                text: "When certainty is needed most, Vestigo stands ready—dependable, accessible, and committed.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-10 rounded-[2.5rem] bg-white/70 backdrop-blur-md border border-sky-100 shadow-xl shadow-sky-900/5 overflow-hidden"
              >
                {/* Animated Sky Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-sky-500 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-sky-200 group-hover:rotate-6 transition-transform">
                    <item.icon size={28} strokeWidth={2} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote Card with "Sky" Border Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-1 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 rounded-[2rem] shadow-2xl shadow-sky-200"
          >
            <div className="bg-white p-12 rounded-[1.9rem] flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sky-600 text-5xl font-serif">“</span>
              </div>
              <p className="italic text-slate-800 text-2xl md:text-3xl font-medium leading-tight text-center md:text-left">
                Clients rely on Vestigo because we understand that true
                partnership means being there when it matters—with expertise,
                integrity, and genuine care.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="py-5 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-900">
              Our Leadership
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full" />
          </div>

          <div className="space-y-30">
            {/* Bhavit Acharya */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative w-full lg:w-1/3 aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <Image
                  src="/member1.jpg"
                  alt="Bhavit Acharya"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="lg:w-2/3">
                <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
                  Director & Principal Officer
                </span>
                <h3 className="text-4xl font-bold text-slate-900 mt-2 mb-4">
                  Bhavit Acharya
                </h3>
                <p className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-bold mb-6">
                  16+ years in insurance advisory & claims
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Bhavit Acharya brings over 16 years of hands-on experience
                  across insurance advisory, policy interpretation, and claims
                  coordination. His approach is firmly policy-first and
                  client-centric, ensuring that insurance solutions are aligned
                  with regulatory requirements as well as real-world loss
                  scenarios.
                  <br />
                  <br />
                  Known for his technical depth across insurance products and
                  industry risk structures, Bhavit brings clarity to complex
                  coverage decisions. His understanding of policy intent and
                  operational realities enables clients to structure protection
                  that is practical, defensible, and effective at the time of a
                  claim.
                  <br />
                  <br />
                  He remains closely involved in complex advisory matters and
                  critical claim engagements, providing clients with dependable
                  guidance when outcomes matter most.
                </p>
                <div className="flex gap-4">
                  {[Linkedin, Instagram, Mail].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Riya Shah */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative w-full lg:w-1/3 aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <Image
                  src="/member2.png"
                  alt="Riya Shah"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="lg:w-2/3 lg:text-right">
                <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
                  Director
                </span>
                <h3 className="text-4xl font-bold text-slate-900 mt-2 mb-4">
                  Riya Shah
                </h3>
                <p className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-bold mb-6">
                  10+ years in client acquisition & relationship management
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Riya Shah brings over 10 years of experience in client
                  acquisition and relationship development, with a strong focus
                  on building long-term partnerships rooted in trust and
                  clarity. She works closely with organizations to understand
                  their business context and expectations, ensuring engagements
                  begin with alignment and confidence.
                  <br />
                  <br />
                  Riya remains actively involved beyond the initial
                  relationship, emphasizing clear communication, responsiveness,
                  and continuity of care—so clients feel supported, informed,
                  and assured throughout their association with Vestigo.
                </p>
                <div className="flex gap-4 lg:justify-end">
                  {[Linkedin, Instagram, Mail].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="bg-slate-950 py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Experienced in judgment. Disciplined in execution.
            <br />
            <span className="text-blue-500">
              Committed to standing with clients.
            </span>
          </motion.h3>
        </div>
      </section>

      {/* ================= CORE VALUES GRID ================= */}
      <section className="py-24 px-6 relative bg-white">
        {/* Subtle background ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-50 via-transparent to-transparent opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              What Drives Us
            </h2>
            <div className="w-35 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -15,
                  transition: { duration: 0.3 },
                }}
                className="group relative bg-gradient-to-br from-white to-sky-300 p-10 rounded-[2.5rem] border border-sky-100 shadow-2xl shadow-sky-900/5 overflow-hidden"
              >
                {/* Sky-glow effect on hover */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-sky-400/10 blur-3xl group-hover:bg-sky-400/20 transition-colors duration-500 rounded-full" />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner ${val.color} bg-white group-hover:scale-110 transition-transform duration-500`}
                  >
                    {val.icon}
                  </div>

                  <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-sky-700 transition-colors">
                    {val.title}
                  </h4>

                  <p className="text-slate-600 text-lg leading-relaxed">
                    {val.desc}
                  </p>
                </div>

                {/* Bottom sky-line accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAREERS CTA ================= */}
      <section className="pb-10 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-6xl mx-auto bg-slate-900 p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden shadow-3xl"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Want to join our mission?
            </h2>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
              We are always looking for thoughtful professionals who value
              clarity, responsibility, and long-term trust.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/30"
            >
              View Openings <ChevronRight size={22} />
            </Link>
          </div>
          {/* Subtle Background Graphic */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
