"use client";
import { useRef, useEffect, useState } from "react";
import { useMemo } from "react";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import {
  faIndustry,
  faBolt,
  faBuilding,
  faLandmark,
  faUsers,
  faGlobe,
  faShieldHalved,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const featuredSectors = [
  {
    title: "Manufacturing",
    desc: "Industry 4.0 aur IoT integration.",
    icon: <FontAwesomeIcon icon={faIndustry} className="text-3xl" />,
  },
  {
    title: "Energy & Power",
    desc: "Smart grid aur resource management.",
    icon: <FontAwesomeIcon icon={faBolt} className="text-3xl" />,
  },
  {
    title: "Infrastructure",
    icon: <FontAwesomeIcon icon={faBuilding} className="text-3xl" />,
    desc: "Large-scale project tracking tools.",
  },
  {
    title: "BFSI",
    icon: <FontAwesomeIcon icon={faLandmark} className="text-3xl" />,
    desc: "High-security financial digital shields.",
  },
];

// 16 industries
const INDUSTRIES = [
  {
    name: "Automotive",
    href: "/industries/automobile",
    img: "/automotive.png",
  },
  { name: "BFSI", href: "/industries/BFSI", img: "/bfsi.png" },
  {
    name: "E-Commerce",
    href: "/industries/e-commerce",
    img: "/ecommerce.jpeg",
  },
  { name: "IT & Tech", href: "/industries/it", img: "/it-tech.png" },
  {
    name: "Engineering",
    href: "/industries/engineering",
    img: "/engineering.png",
  },
  {
    name: "Shipping",
    href: "/industries/shipping&odccargo",
    img: "/shipping.jpeg",
  },
  {
    name: "Chemical & Pharmacy",
    href: "/industries/chemical&pharmaceuticals",
    img: "/chemical-pharma.png",
  },
  {
    name: "Green Energy",
    href: "/industries/greenenergy",
    img: "/green-energy.png",
  },
  {
    name: "Hospital & Education",
    href: "/industries/hospital&education",
    img: "/hospital.jpeg",
  },
  {
    name: "Hospitality",
    href: "/industries/hospitality",
    img: "/hospitality.png",
  },
  { name: "Packaging", href: "/industries/packaging", img: "/packaging.png" },
  {
    name: "Paper Mills",
    href: "/industries/papermills",
    img: "/papermills.png",
  },
  { name: "Plastic", href: "/industries/plastic", img: "/plastic.jpeg" },
  { name: "Textile", href: "/industries/textile", img: "/texttile.jpeg" },
  { name: "SME & MSME", href: "/industries/SME&MSME", img: "/sme-msme.png" },
  {
    name: "Wood & Laminates",
    href: "/industries/wood&laminates",
    img: "/wood.jpeg",
  },
];

// Duplicate for seamless loop
const LOOP_INDUSTRIES = [...INDUSTRIES, ...INDUSTRIES];

export default function IndustriesHome() {
  const videoRef = useRef(null);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setHasPlayedOnce(true);

      video.muted = true; // ✅ mute after first play
      video.loop = true; // ✅ enable loop
      video.play(); // ✅ restart smoothly
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. Hero Section */}
      <section
        className="
    relative h-[120vh] flex items-center justify-center overflow-hidden
    
    max-md:h-[29svh]
    max-md:min-h-0          /* ✅ remove forced extra space */
  "
      >
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          preload="auto"
          muted={false} // ✅ allow audio first time
          loop={false} // ✅ no loop initially
          className="
        absolute inset-0 w-full h-full
        object-cover
        max-md:object-contain
        max-md:object-top
      "
        >
          <source src="/heroindustry.mp4" type="video/mp4" />
        </video>

        {/* Overlay Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </section>
      <br />

      {/* 2. Featured Sectors */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="container mx-auto px-12 text-center mb-20">
            <h2 className="text-[15px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
              Core Strengths
            </h2>
            <p className="text-4xl font-black uppercase tracking-tighter text-[#070B7F]">
              Precision
              <br /> & Protection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {featuredSectors.map((s, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl border border-slate-100 bg-white hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-600/20"
              >
                <div className="w-16 h-16 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm group-hover:text-blue-100 mb-6">
                  {s.desc}
                </p>
                <div className="h-1 w-0 group-hover:w-full bg-white/30 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 3. Industries Reel Slider */}
      <section className="section gallery-reel bg-slate-900 py-5">
        <div className="container mx-auto mb-8">
          <h2 className="text-xl md:text-3xl text-center font-bold text-white mb-4 uppercase tracking-widest">
            Safety Shields for Every Sector
          </h2>
          <p className="text-slate-300 text-xl md:text-1xl text-center">
            Explore our industries portfolio in a seamless scrolling carousel.
          </p>
        </div>

        <div className="overflow-hidden relative">
          <div className="film-track flex gap-6 animate-scroll">
            {LOOP_INDUSTRIES.map((ind, i) => (
              <Link
                key={i}
                href={ind.href}
                className="flex-shrink-0 w-64 bg-white rounded-2xl p-4 shadow hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
              >
                <div className="w-full h-36 mb-4">
                  <img
                    src={ind.img}
                    alt={ind.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h4 className="font-bold text-lg text-slate-900">{ind.name}</h4>
              </Link>
            ))}
          </div>
        </div>

        {/* CSS animation */}
        <style jsx>{`
          .film-track {
            display: flex;
            width: max-content;
          }
          .animate-scroll {
            animation: scroll 80s linear infinite;
          }
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>
      {/* 4. Global Reach / Stats Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Built for the <br />
                <span className="text-blue-600">Global Economy</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Our platform follows global standards (ISO, GDPR, NIST) to
                ensure your business can scale anywhere in the world.{" "}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg text-blue-600">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl">500+</h4>
                    <p className="text-xs text-slate-500 uppercase font-bold">
                      Clients
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg text-blue-600">
                    <FontAwesomeIcon icon={faGlobe} />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl">40+</h4>
                    <p className="text-xs text-slate-500 uppercase font-bold">
                      Countries
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="text-green-500"
                />{" "}
                Security & Compliance
              </h4>
              <ul className="space-y-4">
                {[
                  "End-to-end data encryption",
                  "24/7 Security Operations Center",
                  "Multi-region cloud hosting",
                  "Zero-trust architecture",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-slate-600 text-sm border-b border-slate-50 pb-3 last:border-0"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50 rounded-full blur-[120px] opacity-60 -z-10"></div>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">
            Ready to modernize your Industry?
          </h2>
          <p className="text-slate-500 text-lg mb-12">
            “Digitize your operations and take productivity to new heights.”
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full font-bold transition-all shadow-xl shadow-blue-600/20 text-center flex items-center justify-center gap-3"
            >
              Start Free Trial <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link
              href="/contact"
              className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-4 rounded-full font-bold transition-all text-center"
            >
              Talk to Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
