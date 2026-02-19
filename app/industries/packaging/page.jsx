"use client";
import React from "react";
import {
  Package,
  Truck,
  Layers,
  ArrowRight,
  ShieldCheck,
  Flame,
  Settings,
  ShieldAlert,
  ClipboardCheck,
  LockKeyhole,
  CheckCircle2,
  Users,
  Wine,
  Compass,
  Utensils,
  Bed,
} from "lucide-react";

export default function PackagingPage() {
  const services = [
    {
      title: "Fire & Explosion Risk",
      Icon: Flame,
      desc: "Flammable materials, adhesives, inks, and high-speed machinery create serious fire hazards.",
    },
    {
      title: "Machinery Breakdown",
      Icon: Settings,
      desc: "Presses, die-cutting machines, and automated systems are prone to failures and downtime.",
    },
    {
      title: "Supply Chain Disruption",
      Icon: Truck,
      desc: "Dependence on raw material suppliers and logistics delays threaten delivery timelines.",
    },
    {
      title: "Product Contamination",
      Icon: ShieldAlert,
      desc: "Defective packaging may cause spoilage, contamination, recalls, and reputational damage.",
    },
    {
      title: "Regulatory Compliance",
      Icon: ClipboardCheck,
      desc: "Food-contact laws, recycling mandates, and labeling rules require constant adaptation.",
    },
    {
      title: "Intellectual Property",
      Icon: LockKeyhole,
      desc: "Designs and innovations need protection from counterfeiting and infringement.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 overflow-x-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="relative bg-slate-50 pt-16 sm:pt-24 lg:pt-32 pb-14 sm:pb-20 lg:pb-24 px-4 sm:px-6 overflow-hidden">
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%232563eb' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-16 relative z-10">
          {/* TEXT */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] sm:text-xs font-black uppercase tracking-widest mb-4 sm:mb-6 shadow">
              <Package size={14} />
              Material Engineering 4.0
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-blue-900 mb-5 sm:mb-8 leading-tight">
              Packaging Industry <br />
              <span className="text-blue-600 italic">Insurance Solutions</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 mb-4 sm:mb-6 font-bold">
              Protecting the Backbone of Global Commerce.
            </p>

            <p className="text-sm sm:text-lg text-slate-600 mb-6 sm:mb-10 leading-relaxed">
              The packaging industry is essential to modern supply chains,
              ensuring product safety, shelf appeal, and logistics efficiency
              across food, pharmaceuticals, consumer goods, and e-commerce.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-lg sm:rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg">
                Get Custom Specs <ArrowRight size={18} />
              </button>

              <button className="bg-white border-2 border-blue-100 text-blue-600 px-6 sm:px-10 py-3 sm:py-5 rounded-lg sm:rounded-xl font-bold hover:bg-blue-50 transition-all">
                Material Catalog
              </button>
            </div>
          </div>

          {/* GRAPHIC */}
          <div className="flex-1 w-full max-w-[240px] sm:max-w-md aspect-square bg-blue-900 rounded-3xl sm:rounded-[3.5rem] relative shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent"></div>

            <Layers
              size={90}
              className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
            />

            <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 text-white text-left">
              <p className="text-xl sm:text-4xl font-black italic">ISO 14001</p>
              <p className="text-[10px] sm:text-sm font-bold text-blue-300 uppercase tracking-widest">
                Certified Sustainability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- KEY THREATS ---------------- */}
      <section className="py-10 sm:py-20 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16 lg:mb-24">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-blue-900 mb-3">
              Key Threats
            </h2>
            <div className="h-1.5 sm:h-2 w-16 sm:w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10">
            {services.map((service, i) => {
              const Icon = service.Icon;
              return (
                <div
                  key={i}
                  className="group p-5 sm:p-10 bg-white border border-slate-100 rounded-2xl sm:rounded-[2.5rem] hover:border-blue-200 hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl sm:rounded-2xl mb-4 sm:mb-8 group-hover:bg-blue-600 group-hover:text-white transition">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-blue-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-lg text-slate-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- PROTECTION ---------------- */}
      <section className="py-10 sm:py-16 lg:py-24 bg-blue-50/50 px-4 sm:px-6 border-y border-blue-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-20 items-center">
          {/* LEFT CARD */}
          <div className="relative">
            <div className="bg-white p-5 sm:p-10 rounded-3xl sm:rounded-[4rem] shadow-xl border border-blue-100 relative z-10">
              <ShieldCheck size={42} className="text-blue-600 mb-4 sm:mb-8" />

              <p className="text-lg sm:text-3xl font-black text-blue-900 mb-4 sm:mb-8 leading-snug italic">
                Packaging is no longer just a box; it is a statement of
                environmental accountability.
              </p>

              <div className="flex items-center gap-3 sm:gap-4 border-t border-slate-100 pt-4 sm:pt-8">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold italic">
                  VE
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm sm:text-base">
                    Vestigo Materials Lab
                  </p>
                  <p className="text-[10px] sm:text-xs text-blue-600 font-bold uppercase">
                    R&D Division
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Ring (smaller & safe) */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-40 h-40 border-[12px] border-blue-100 rounded-full"></div>
          </div>

          {/* RIGHT LIST */}
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-blue-900 mb-4 sm:mb-8 leading-tight">
              Comprehensive <br />
              <span className="text-blue-600 underline decoration-blue-200 underline-offset-4">
                Protection
              </span>
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {[
                "Property & Business Interruption",
                "Product Liability & Recall",
                "Environmental Impairment",
                "Marine & Transit",
                "Machinery Breakdown",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 sm:gap-4 items-center bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-blue-100 shadow-sm"
                >
                  <CheckCircle2 size={18} className="text-blue-500" />
                  <p className="font-bold text-slate-700 text-sm sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
