'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Linkedin,
  Instagram,
  Mail,
  Target,
  Heart,
  Users,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function OurTeam() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  /* ================= LEADERSHIP DATA ================= */
  const leadership = [
    {
      name: 'Bhavit Acharya',
      role: 'Director & Principal Officer',
      experience: 'Over 16 years of experience in insurance advisory and claims',
      desc: `Bhavit Acharya brings over 16 years of hands-on experience across insurance advisory, 
      policy interpretation, and claims coordination. His policy-first and client-centric approach 
      ensures solutions are practical, defensible, and effective at the time of a claim.`,
      image: '/member1.jpg',
      linkedin: '#'
    },
    {
      name: 'Riya Shah',
      role: 'Director',
      experience: 'Over 10 years of experience in client acquisition and relationship management',
      desc: `Riya Shah focuses on building long-term partnerships rooted in trust and clarity. 
      She remains actively involved beyond onboarding, ensuring continuity, responsiveness, 
      and confidence throughout the client journey.`,
      image: '/member2.png',
      linkedin: '#'
    }
  ];

  /* ================= CORE VALUES ================= */
    const values = [
    {
      title: 'Transparency',
      desc: 'Clear, honest, and jargon-free communication at every stage.',
      icon: <Target className="w-6 h-6" />,
      color: 'text-blue-600'
    },
    {
      title: 'Empathy',
      desc: 'Standing by clients with care and responsibility when outcomes matter.',
      icon: <Heart className="w-6 h-6" />,
      color: 'text-red-600'
    },
    {
      title: 'Discipline',
      desc: 'Preparedness, consistency, and structured execution across engagements.',
      icon: <Users className="w-6 h-6" />,
      color: 'text-green-600'
    }
  ];

  return (
    <main ref={containerRef} className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/ourteam.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/30" />

        <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6">
          <p className="text-xl md:text-2xl mt-80 mr-170 text-white max-w-3xl mx-auto leading-relaxed">
            Insurance is not about paperwork — it is about standing by clients
            when outcomes matter.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/contacts"
              className="bg-blue-600 hover:bg-blue-500 mr-170 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2"
            >
              Connect with Us <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= OUR TEAM INTRO ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Team</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
          At Vestigo, our team works with a clear sense of responsibility—because
          insurance is not about paperwork, it is about standing by clients when
          outcomes matter. We remain engaged across the entire insurance journey,
          ensuring continuity, clarity, and dependable support.
        </p>
      </section>

      {/* ================= LEADERSHIP ================= */}
        <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-slate-200" />

          {/* ===== MEMBER 1 (Image | Intro) ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-28">

            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative h-[320px] w-[240px] rounded-[1.75rem] overflow-hidden shadow-md">
                <Image
                  src="/member1.jpg"
                  alt="Bhavit Acharya"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Intro */}
            <div className="md:pl-14">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Bhavit Acharya
              </h3>
              <p className="text-blue-600 font-medium mb-1">
                Director & Principal Officer
              </p>
              <p className="text-sm text-gray-500 mb-5">
                16+ years in insurance advisory & claims
              </p>

              <p className="text-gray-600 leading-relaxed mb-5">
                Bhavit brings deep experience in insurance advisory, policy
                interpretation, and claims coordination. His disciplined
                approach ensures clients are protected when it matters most.
              </p>

              <div className="flex gap-3">
                <a href="#" className="p-2 bg-slate-100 rounded-full">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                </a>
                <a href="#" className="p-2 bg-slate-100 rounded-full">
                  <Instagram className="w-4 h-4 text-pink-600" />
                </a>
                <a href="#" className="p-2 bg-slate-100 rounded-full">
                  <Mail className="w-4 h-4 text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* ===== MEMBER 2 (Intro | Image) ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

            {/* Intro */}
            <div className="md:pr-14 md:text-right">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Riya Shah
              </h3>
              <p className="text-blue-600 font-medium mb-1">
                Director
              </p>
              <p className="text-sm text-gray-500 mb-5">
                10+ years in client acquisition & relationship management
              </p>

              <p className="text-gray-600 leading-relaxed mb-5">
                Riya focuses on building long-term partnerships rooted in
                clarity and trust. She stays involved beyond onboarding to
                ensure confidence and continuity for every client.
              </p>

              <div className="flex gap-3 justify-end">
                <a href="#" className="p-2 bg-slate-100 rounded-full">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                </a>
                <a href="#" className="p-2 bg-slate-100 rounded-full">
                  <Instagram className="w-4 h-4 text-pink-600" />
                </a>
                <a href="#" className="p-2 bg-slate-100 rounded-full">
                  <Mail className="w-4 h-4 text-blue-600" />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative h-[320px] w-[240px] rounded-[1.75rem] overflow-hidden shadow-md">
                <Image
                  src="/member2.png"
                  alt="Riya Shah"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ================= LEADERSHIP PHILOSOPHY ================= */}
      <section className="bg-slate-900 text-white py-24 px-6 text-center">
        <h3 className="text-3xl font-semibold max-w-4xl mx-auto leading-relaxed">
          Experienced in judgment. Disciplined in execution.
          <br /> Committed to standing with clients.
        </h3>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">What Drives Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((val, i) => (
              <div key={i} className="text-center">
                <div
                  className={`mx-auto mb-6 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center ${val.color}`}
                >
                  {val.icon}
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">
                  {val.title}
                </h4>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAREERS CTA ================= */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto bg-slate-900 text-white p-16 rounded-[3rem]">
          <h2 className="text-4xl font-bold mb-6">Want to join our mission?</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            We are always looking for thoughtful professionals who value clarity,
            responsibility, and long-term trust.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-10 py-5 rounded-2xl font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            View Openings <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
