"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
  CheckCircle2,
  Activity,
  ShieldAlert,
  Lock,
  Building2,
  Briefcase,
  Siren,
  ShieldCheck,
  Globe,
  Stethoscope,
  Pill,
  Hospital,
  UserRound,
  Scale,
  FileWarning,
} from "lucide-react";

export default function InstitutionalSuite() {
  const [activeTab, setActiveTab] = useState("hospital");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* ----------------- TAB SWITCHER ----------------- */}
      <div className="flex justify-center px-4 pt-6">
        <div className="bg-slate-100 p-1 rounded-full border border-slate-200 flex flex-wrap sm:flex-nowrap gap-2">
          <button
            onClick={() => setActiveTab("hospital")}
            className={`px-5 sm:px-6 py-2 rounded-full text-sm font-bold transition-all ${
              activeTab === "hospital"
                ? "bg-blue-600 text-white shadow-lg"
                : "text-slate-500 hover:text-blue-600"
            }`}
          >
            Hospital View
          </button>

          <button
            onClick={() => setActiveTab("education")}
            className={`px-5 sm:px-6 py-2 rounded-full text-sm font-bold transition-all ${
              activeTab === "education"
                ? "bg-[#1e3a8a] text-white shadow-lg"
                : "text-slate-500 hover:text-blue-900"
            }`}
          >
            Education View
          </button>
        </div>
      </div>

      {/* ----------------- HOSPITAL VIEW ----------------- */}
      {activeTab === "hospital" && (
        <main className="animate-in fade-in duration-700">
          {/* HERO */}
          <section className="relative py-10 sm:py-14 px-4 sm:px-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 -z-10 rounded-l-[100px] hidden lg:block"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
              {/* TEXT */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-bold mb-5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                  Advancing Patient Care
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-5 leading-tight">
                  Healthcare & Medical <br />
                  <span className="text-blue-600">Insurance Solutions</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Telemedicine expansion, AI diagnostics, personalized medicine,
                  aging populations, value-based care models, and medical
                  technology innovation transforming healthcare delivery
                  worldwide.
                </p>
              </div>

              {/* IMAGE CARD */}
              <div className="relative h-[260px] sm:h-[380px] lg:h-[450px] bg-blue-600 rounded-3xl sm:rounded-[3rem] overflow-hidden shadow-2xl border-8 sm:border-[12px] border-white flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>

                <Activity
                  size={90}
                  className="text-white opacity-20 animate-pulse"
                />

                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-white/90 backdrop-blur p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase">
                      Status
                    </p>
                    <p className="text-xs sm:text-sm font-black text-slate-900">
                      Emergency Ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION TITLE */}
          <SectionHeading title="Healthcare Industry Risks" />

          {/* RISKS GRID */}
          <section className="py-4 px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
              {[
                {
                  icon: <Stethoscope className="w-7 h-7" />,
                  title: "Medical Malpractice",
                  desc: "Clinical negligence, surgical errors, misdiagnosis, treatment failures",
                },
                {
                  icon: <ShieldAlert className="w-7 h-7" />,
                  title: "Cyber & Data Breaches",
                  desc: "Patient records theft, HIPAA violations, ransomware attacks",
                },
                {
                  icon: <Pill className="w-7 h-7" />,
                  title: "Product Liability",
                  desc: "Medical device failures, pharmaceutical defects, equipment malfunctions",
                },
                {
                  icon: <Hospital className="w-7 h-7" />,
                  title: "Property & Equipment",
                  desc: "Facility damage, specialized equipment breakdown",
                },
                {
                  icon: <UserRound className="w-7 h-7" />,
                  title: "Employment Practices",
                  desc: "Staff disputes, discrimination claims",
                },
                {
                  icon: <Scale className="w-7 h-7" />,
                  title: "Regulatory Compliance",
                  desc: "License violations, accreditation issues",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-500 text-center"
                >
                  <div className="mb-4 text-blue-600 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black text-blue-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <SectionHeading title="Medical Practice Protection" />

          {/* PORTFOLIO */}
          <section className="py-6 px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 max-w-4xl mx-auto">
              {[
                "Medical Malpractice Insurance",
                "Cyber Liability & HIPAA Coverage",
                "General & Product Liability",
                "Property & Business Interruption",
                "Employment Practices Liability",
                "Professional Indemnity",
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <ShieldCheck className="text-blue-600 w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base sm:text-xl text-slate-800">
                    {text}
                  </h4>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* ----------------- EDUCATION VIEW ----------------- */}
      {activeTab === "education" && (
        <main className="animate-in fade-in duration-700">
          {/* HERO */}
          <section className="bg-[#1e3a8a] py-10 sm:py-16 px-4 sm:px-6 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-bold mb-6 uppercase">
                <Globe size={14} /> Shaping Future Generations
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
                Education Sector <br /> Insurance Solutions
              </h1>

              <p className="text-blue-100 text-base sm:text-xl font-light">
                EdTech revolution, hybrid learning models, global student
                mobility, research commercialization, and campus expansion.
              </p>
            </div>
          </section>

          <SectionHeading title="Educational Institution Risks" />

          {/* GRID */}
          <section className="py-4 px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
              {[
                "Professional Indemnity",
                "Student Safety",
                "Cyber & Data",
                "Property Damage",
                "Employment Practices",
                "Reputation & Crisis",
              ].map((title, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] bg-white border border-slate-200 shadow-sm text-center"
                >
                  <h3 className="text-lg sm:text-2xl font-black text-blue-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-sm sm:text-lg text-slate-600">
                    Coverage designed to protect institutions from modern risks.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <SectionHeading title="Campus Protection Portfolio" />

          <section className="py-6 px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 max-w-4xl mx-auto">
              {[
                "Professional Indemnity Insurance",
                "General Liability & Student Accident",
                "Cyber & Data Protection",
                "Property & Business Interruption",
                "Directors & Officers Liability",
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <ShieldCheck className="text-blue-600 w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base sm:text-xl text-slate-800">
                    {text}
                  </h4>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

/* ----------------- REUSABLE HEADING ----------------- */
function SectionHeading({ title }) {
  return (
    <div className="text-center mt-10 mb-6 px-4">
      <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">
        {title}
      </h2>
      <div className="h-1.5 w-16 sm:w-20 bg-blue-600 mx-auto rounded-full"></div>
    </div>
  );
}
