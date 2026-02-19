"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Facebook,
  Instagram,
  Linkedin,
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook size={18} />,
      href: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: <Instagram size={18} />,
      href: "https://instagram.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      href: "https://linkedin.com",
    },
  ];

  return (
    <div className="w-full">
      {/* Footer height ko min-h-[400px] ya content ke hisaab se auto rakha hai */}
      <footer className="relative w-full text-slate-300 overflow-hidden min-h-[300px] flex flex-col justify-end">
        {/* --- BACKGROUND LAYER FIX --- */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(min-width: 768px)" srcSet="/f3.jpeg" />
            <img
              src="/m.jpeg"
              alt="Footer Background"
              /* CHANGE: Yahan object-cover aur h-full w-full lagaya hai */
              className="w-full h-full object-cover brightness-[0.7]"
            />
          </picture>
        </div>
        {/* Aapka Content Yahan */}
        <div className="relative z-10">{/* Text or Logo */}</div>
        {/* --- DARK OVERLAY + BOTTOM GRADIENT --- */}
        {/* <div className="absolute inset-0 z-0 bg-black/20 backdrop-blur-[1px]" /> */}

        {/* Niche wala gradient layer */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0B1120] to-transparent opacity-100" />

        {/* --- 1. CTA SECTION --- */}
        <div className="relative z-10 w-full min-h-[100px] py-5 flex items-center justify-center text-center px-6 "></div>

        {/* --- TAGLINE (CENTERED) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 text-center py-6"
        ></motion.div>

        {/* --- 2. MAIN LINKS CONTENT --- */}
        <div className="relative z-5 mt-0 pl-15 max-w-7xl mx-auto  py-10 px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5   items-start">
            {/* Company Section */}
            <div className="lg:col-span-1">
              <Link href="/company" className="lg:pointer-events-none">
                <h3 className="text-white font-bold text-[20px] uppercase tracking-[0.2em] mb-5 relative inline-block">
                  Company
                  <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-[#4169E1]"></span>
                </h3>
              </Link>
              {/* Desktop par dikhega, Mobile par hidden */}
              <ul className="hidden lg:block space-y-2 text-[15px]">
                <li>
                  <Link
                    href="/company/whoweare"
                    className="hover:text-white transition-all hover:translate-x-1 block"
                  >
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/whyus"
                    className="hover:text-white transition-all hover:translate-x-1 block"
                  >
                    Why Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/ourteam"
                    className="hover:text-white transition-all hover:translate-x-1 block"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/ourpartners"
                    className="hover:text-white transition-all hover:translate-x-1 block"
                  >
                    Our Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* Industries Works Section */}
            <div className="lg:col-span-2">
              <Link href="/industries" className="lg:pointer-events-none">
                <h3 className="text-white font-bold text-[20px] uppercase tracking-[0.2em] mb-5 lg:ml-20 relative inline-block">
                  Industries Works
                  <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-[#4169E1]"></span>
                </h3>
              </Link>
              {/* Desktop par grid dikhega, Mobile par hidden */}
              <div className="hidden lg:grid grid-cols-4 gap-x-2 text-[11px]">
                <ul className="space-y-2 text-[15px]">
                  <li>
                    <Link
                      href="/industries/automobile"
                      className="hover:text-white transition-all hover:translate-x-1 block truncate"
                    >
                      Auto Mobile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/BFSI"
                      className="hover:text-white transition-all hover:translate-x-1 block"
                    >
                      BFSI
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/chemical&pharmaceuticals"
                      className="hover:text-white transition-all hover:translate-x-1 block truncate"
                    >
                      Chemical
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/e-commerce"
                      className="hover:text-white transition-all hover:translate-x-1 block"
                    >
                      E-Commerce
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2 text-[15px]">
                  <li>
                    <Link
                      href="/industries/engineering"
                      className="hover:text-white transition-all hover:translate-x-1 block"
                    >
                      Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/greenenergy"
                      className="hover:text-white transition-all hover:translate-x-1 block truncate"
                    >
                      Green Energy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/hospital&education"
                      className="hover:text-white transition-all hover:translate-x-1 block"
                    >
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/hospitality"
                      className="hover:text-white transition-all hover:translate-x-1 block"
                    >
                      Hospitality
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2 text-[15px]">
                  <li>
                    <Link
                      href="/industries/it"
                      className="hover:text-white transition-all hover:translate-x-1 block"
                    >
                      IT & TECH
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/packaging"
                      className="hover:text-white transition-all hover:translate-x-1 block"
                    >
                      Packaging
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/shipping&odccargo"
                      className="hover:text-white transition-all hover:translate-x-1 block truncate"
                    >
                      Shipping
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/SME&MSME"
                      className="hover:text-white transition-all hover:translate-x-1 block"
                    >
                      SME
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2 text-[15px]">
                  <li>
                    <Link
                      href="/industries/papermills"
                      className="hover:text-white transition-all hover:translate-x-1 block truncate"
                    >
                      Paper Mills
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/plastic"
                      className="hover:text-white transition-all hover:translate-x-1 block"
                    >
                      Plastic
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/texttile"
                      className="hover:text-white transition-all hover:translate-x-1 block"
                    >
                      TextTile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/wood&laminates"
                      className="hover:text-white transition-all hover:translate-x-1 block truncate"
                    >
                      Wood
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services / Solutions Section */}
            <div className="lg:col-span-1">
              <Link href="/solutions" className="lg:pointer-events-none">
                <h3 className="text-white font-bold text-[20px] uppercase tracking-[0.2em] mb-5 relative inline-block">
                  Services
                  <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-[#4169E1]"></span>
                </h3>
              </Link>
              {/* Desktop par dikhega, Mobile par hidden */}
              <ul className="hidden lg:block space-y-1 text-[15px]">
                <li>
                  <Link
                    href="/solutions"
                    className="hover:text-white transition-all hover:translate-x-1 block"
                  >
                    Risk Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="hover:text-white transition-all hover:translate-x-1 block"
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="hover:text-white transition-all hover:translate-x-1 block"
                  >
                    Latest Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white transition-all hover:translate-x-1 block"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-bold text-[20px] uppercase tracking-[0.2em] mb-5 relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-white hover:text-white"></span>
              </h3>
              <ul className="space-y-3 text-[13px]">
                <li>
                  <a
                    href="tel:+91 97261 60360"
                    className="group flex items-center gap-2 hover:text-white transition-all"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#4169E1] flex items-center justify-center group-hover:bg-white transition-all border border-[#4169E1] flex-shrink-0">
                      <Phone
                        size={10}
                        className="text-white group-hover:text-[#4169E1]"
                      />
                    </div>
                    <span className="font-medium">+91 97261 60360</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@vestigoinsurance.com"
                    className="group flex items-center gap-2 hover:text-white transition-all"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#4169E1] flex items-center justify-center group-hover:bg-white transition-all border border-[#4169E1] flex-shrink-0">
                      <Mail
                        size={10}
                        className="text-white group-hover:text-[#4169E1]"
                      />
                    </div>
                    <span className="font-medium truncate ">
                      info@vestigoinsurance.com
                    </span>
                  </a>
                </li>
                <li className="group flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#4169E1] flex items-center justify-center group-hover:bg-white transition-all border border-[#4169E1] flex-shrink-0">
                    <MapPin
                      size={10}
                      className="text-white group-hover:text-[#4169E1]"
                    />
                  </div>
                  <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
                    Ahemdabad Vadodara Surendranagar Siddhpur | Mumbai
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar with Gradient Background */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white text-[10px] uppercase tracking-widest relative">
            {/* Left Section: Copyright - Added text-center for mobile */}
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Vestigo Insurance Advisor.
              <br className="md:hidden" />
              <span className="md:ml-2">CREATED BY TECHSTROTA</span>
            </p>

            {/* Center Section: Social Links - Already centered by flex-col items-center on parent */}
            <div className="flex gap-5 items-center justify-center">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Right Section: Links - Changed to justify-center for mobile */}
            <div className="flex justify-center md:justify-end gap-4">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
