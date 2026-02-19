"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
  Waves,
  MapPin,
  Utensils,
  Bed,
  Star,
  ArrowRight,
  Calendar,
  ShieldCheck,
  Compass,
  PhoneCall,
  Users,
  Wine,
  Globe,
  CheckCircle2,
  Clock,
  Activity,
  ShieldAlert,
  Lock,
  Building2,
  Briefcase,
  Siren,
  Shield,
  FileText,
  Fingerprint,
  PauseCircle,
  Hospital,
  UserRound,
  Scale,
  Stethoscope,
  Pill,
  FileWarning,
} from "lucide-react";

export default function InstitutionalSuite() {
  const [activeTab, setActiveTab] = useState("hospital");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 items-center text-center">
      <div className="hidden md:flex justify-center">
        <div className="bg-slate-100 p-1 rounded-full border border-slate-200 inline-flex">
          <button
            onClick={() => setActiveTab("hospital")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === "hospital" ? "bg-blue-600 text-white shadow-lg" : "text-slate-500 hover:text-blue-600"}`}
          >
            Hospital View
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === "education" ? "bg-[#1e3a8a] text-white shadow-lg" : "text-slate-500 hover:text-blue-900"}`}
          >
            Education View
          </button>
        </div>
      </div>

      {/* ----------------- CONTENT VIEWS ----------------- */}
      {activeTab === "hospital" && (
        <main className="animate-in fade-in duration-700">
          <section className="relative py-14 px-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 -z-10 rounded-l-[100px] hidden lg:block"></div>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-bold mb-6">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                  Advancing Patient Care
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]">
                  Healthcare & Medical <br />
                  <span className="text-blue-600">Insurance Solutions</span>
                </h1>
                <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                  Telemedicine expansion, AI diagnostics, personalized medicine,
                  aging populations, value-based care models, and medical
                  technology innovation transforming healthcare delivery
                  worldwide.
                </p>
              </div>

              <div className="relative h-[450px] bg-blue-600 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
                <Activity
                  size={120}
                  className="text-white opacity-20 animate-pulse"
                />
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">
                      Status
                    </p>
                    <p className="text-sm font-black text-slate-900">
                      Emergency Ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Heading */}
          <div className="text-center mt-5 mb-10">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Healthcare Industry Risks
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <section className="py-5 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: <Stethoscope className="w-8 h-8 stroke-[1.5]" />,
                  title: "Medical Malpractice",
                  desc: "Clinical negligence, surgical errors, misdiagnosis, treatment failures",
                },
                {
                  icon: <ShieldAlert className="w-8 h-8 stroke-[1.5]" />,
                  title: "Cyber & Data Breaches",
                  desc: "Patient records theft, HIPAA violations, ransomware attacks",
                },
                {
                  icon: <Pill className="w-8 h-8 stroke-[1.5]" />,
                  title: "Product Liability",
                  desc: "Medical device failures, pharmaceutical defects, equipment malfunctions",
                },
                {
                  icon: <Hospital className="w-8 h-8 stroke-[1.5]" />,
                  title: "Property & Equipment",
                  desc: "Facility damage, specialized equipment breakdown, sterilization failures",
                },
                {
                  icon: <UserRound className="w-8 h-8 stroke-[1.5]" />,
                  title: "Employment Practices",
                  desc: "Staff disputes, discrimination claims, workplace injuries",
                },
                {
                  icon: <Scale className="w-8 h-8 stroke-[1.5]" />,
                  title: "Regulatory Compliance",
                  desc: "License violations, accreditation issues, investigation costs",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group p-12 rounded-[2.5rem] bg-white 
                  border border-slate-200 shadow-sm
                  hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.12)]
                  transition-all duration-700"
                >
                  {/* ICON */}
                  <div className="mb-6 text-blue-600 justify-center flex">
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-black text-blue-900 mb-4 tracking-tight">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-slate-600 leading-relaxed font-light text-lg">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Heading */}
          <div className="text-center mt-10 mb-10">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Medical Practice Protection
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <section className="w-full  bg-white py-10">
            <div className="max-w-6xl mx-auto px-6 text-center">
              {/* CARDS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto text-left">
                {/* Card 1 */}
                <div className="flex gap-6 items-start">
                  <div className="bg-blue-100 p-4 rounded-2xl">
                    <Stethoscope className="text-blue-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xl text-slate-800">
                    Medical Malpractice Insurance
                  </h4>
                </div>

                {/* Card 2 */}
                <div className="flex gap-6 items-start">
                  <div className="bg-blue-100 p-4 rounded-2xl">
                    <Lock className="text-blue-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xl text-slate-800">
                    Cyber Liability & HIPAA Coverage
                  </h4>
                </div>

                {/* Card 3 */}
                <div className="flex gap-6 items-start">
                  <div className="bg-blue-100 p-4 rounded-2xl">
                    <ShieldCheck className="text-blue-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xl text-slate-800">
                    General & Product Liability
                  </h4>
                </div>

                {/* Card 4 */}
                <div className="flex gap-6 items-start">
                  <div className="bg-blue-100 p-4 rounded-2xl">
                    <Building2 className="text-blue-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xl text-slate-800">
                    Property & Business Interruption
                  </h4>
                </div>

                {/* Card 5 */}
                <div className="flex gap-6 items-start">
                  <div className="bg-blue-100 p-4 rounded-2xl">
                    <Briefcase className="text-blue-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xl text-slate-800">
                    Employment Practices Liability
                  </h4>
                </div>

                {/* Card 6 */}
                <div className="flex gap-6 items-start">
                  <div className="bg-blue-100 p-4 rounded-2xl">
                    <FileWarning className="text-blue-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xl text-slate-800">
                    Professional Indemnity
                  </h4>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ----------------- EDUCATION VIEW ----------------- */}
      {activeTab === "education" && (
        <main className="animate-in slide-in-from-bottom-5 duration-700">
          <section className="bg-[#1e3a8a] py-16 px-6 text-white relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            ></div>
            <div className="max-w-5xl mx-auto text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-bold mb-8 border border-white/20 uppercase tracking-widest">
                <Globe size={14} /> Shaping Future Generations
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-none">
                Education Sector <br />
                Insurance Solutions
              </h1>
              <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12 font-light">
                EdTech revolution, hybrid learning models, global student
                mobility, research commercialization, campus infrastructure
                expansion, and lifelong learning programs redefining education.
              </p>
            </div>
          </section>

          {/* Heading */}
          <div className="text-center mt-10 mb-10">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Educational Institution Risks
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <section className="py-5 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: <ShieldAlert className="w-8 h-8 stroke-[1.5]" />,
                  title: "Professional Indemnity",
                  desc: "Teaching negligence, educational malpractice, career counseling errors",
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 stroke-[1.5]" />,
                  title: "Student Safety",
                  desc: "Campus injuries, sports accidents, field trip incidents, bullying claims",
                },
                {
                  icon: <Lock className="w-8 h-8 stroke-[1.5]" />,
                  title: "Cyber & Data",
                  desc: "Student records breaches, online learning platform failures, research data theft",
                },
                {
                  icon: <Building2 className="w-8 h-8 stroke-[1.5]" />,
                  title: "Property Damage",
                  desc: "Building fires, lab accidents, equipment damage, natural disasters",
                },
                {
                  icon: <Briefcase className="w-8 h-8 stroke-[1.5]" />,
                  title: "Employment Practices",
                  desc: "Faculty disputes, discrimination claims, wrongful termination",
                },
                {
                  icon: <Siren className="w-8 h-8 stroke-[1.5]" />,
                  title: "Reputation & Crisis",
                  desc: "Enrollment decline, accreditation loss, scandal management",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group p-12 rounded-[2.5rem] bg-white 
                  border border-slate-200 shadow-sm
                  hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.12)]
                  transition-all duration-700"
                >
                  {/* ICON */}
                  <div className="mb-6 text-blue-600 justify-center flex">
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-black text-blue-900 mb-4 tracking-tight">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-slate-600 leading-relaxed font-light text-lg">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Heading */}
          <div className="text-center mt-10 mb-10">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Campus Protection Portfolio
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <section className="w-full  bg-white py-10">
            <div className="max-w-6xl mx-auto px-6 text-center">
              {/* CARDS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto text-left">
                {/* Card 1 */}
                <div className="flex gap-6 items-start">
                  <div className="bg-blue-100 p-4 rounded-2xl">
                    <ShieldAlert className="text-blue-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xl text-slate-800">
                    Professional Indemnity Insurance
                  </h4>
                </div>

                {/* Card 2 */}
                <div className="flex gap-6 items-start">
                  <div className="bg-blue-100 p-4 rounded-2xl">
                    <ShieldCheck className="text-blue-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xl text-slate-800">
                    General Liability & Student Accident
                  </h4>
                </div>

                {/* Card 3 */}
                <div className="flex gap-6 items-start">
                  <div className="bg-blue-100 p-4 rounded-2xl">
                    <Lock className="text-blue-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xl text-slate-800">
                    Cyber & Data Protection
                  </h4>
                </div>

                {/* Card 4 */}
                <div className="flex gap-6 items-start">
                  <div className="bg-blue-100 p-4 rounded-2xl">
                    <Building2 className="text-blue-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xl text-slate-800">
                    Property & Business Interruption
                  </h4>
                </div>

                {/* Card 5 – Centered Single */}
                <div className="flex gap-6 items-start sm:col-span-2 justify-center">
                  <div className="flex gap-6">
                    <div className="bg-blue-100 p-4 rounded-2xl">
                      <Briefcase className="text-blue-600 w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-xl text-slate-800">
                      Directors & Officers Liability
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}
