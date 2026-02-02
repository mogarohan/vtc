'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Package,
  Truck,
  ShieldCheck,
  ArrowRight,
  FileText,
  Boxes,
  ChevronRight,
  Sparkles,
  ShoppingCart
} from 'lucide-react';

const IndustrialMarketplace = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const products = [
    {
      id: 1,
      name: 'Variable Frequency Drive (VFD)',
      price: '₹45,000',
      spec: '5.5kW / 440V',
      tag: 'Electrical',
      image: '/products/vfd.jpg'
    },
    {
      id: 2,
      name: 'ISO Safety Harness Kit',
      price: '₹2,800',
      spec: 'Double Lanyard',
      tag: 'Safety',
      image: '/products/safety-harness.jpg'
    },
    {
      id: 3,
      name: 'Pneumatic Cylinder - 50mm',
      price: '₹5,200',
      spec: 'Stainless Steel',
      tag: 'Automation',
      image: '/products/pneumatic-cylinder.jpg'
    },
    {
      id: 4,
      name: 'Industrial Air Compressor',
      price: '₹1,25,000',
      spec: '10 HP / 300L',
      tag: 'Machinery',
      image: '/products/air-compressor.jpg'
    }
  ];

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-white text-slate-900 overflow-hidden"
    >
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0F172A] pt-32 pb-80">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px]"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-7xl">
          <motion.div style={{ y, opacity }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 border border-blue-400/20 rounded-full bg-blue-500/5 text-blue-400 text-xs font-black uppercase tracking-widest">
              <Sparkles size={14} />
              Global Industrial Marketplace
            </div>

            <h1 className="text-6xl md:text-[7.5rem] font-black text-white leading-[1] uppercase">
              Precision Parts.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                Supply Chain.
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto mt-8 mb-12">
              Factory-direct procurement with GST billing and global logistics.
            </p>

            <div className="flex justify-center gap-6 flex-wrap">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black uppercase flex items-center gap-3">
                Request Bulk Quote <ArrowRight size={20} />
              </button>
              <button className="bg-white/10 text-white px-10 py-5 rounded-2xl font-black uppercase">
                Partner Portal
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= VALUE CARDS ================= */}
      <section className="relative -mt-40 z-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <ShieldCheck />, label: 'ISO Certified' },
            { icon: <FileText />, label: 'GST Ready' },
            { icon: <Truck />, label: 'Fast Delivery' },
            { icon: <Boxes />, label: 'Bulk Stock' }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[2.5rem] p-8 text-center shadow-xl"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h4 className="font-black uppercase text-sm">{item.label}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase mb-16">
            Market Essentials
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ y: -10 }}
                className="border rounded-[2.5rem] p-7 bg-white shadow-sm hover:shadow-xl flex flex-col"
              >
                <div className="h-56 bg-slate-50 rounded-[2rem] mb-6 relative overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <h3 className="font-bold text-lg">{p.name}</h3>
                <p className="text-xs text-slate-400 uppercase mb-6">
                  {p.spec}
                </p>

                <div className="mt-auto flex justify-between items-center pt-6 border-t">
                  <span className="text-2xl font-black">{p.price}</span>
                  <button className="bg-blue-600 text-white p-4 rounded-2xl">
                    <ShoppingCart size={22} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RFQ ================= */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl font-black uppercase">
              Enterprise <span className="text-blue-600">Procurement</span>
            </h2>
            <p className="text-xl text-slate-600 mt-8">
              Upload BOM & get custom bulk pricing.
            </p>
          </div>

          <div className="bg-white p-12 rounded-[3rem] shadow-xl">
            <h4 className="font-black text-2xl mb-8 uppercase">
              Submit RFQ
            </h4>

            <form className="space-y-6">
              <input
                className="w-full p-5 rounded-2xl bg-slate-50 border"
                placeholder="Component Name"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  className="p-5 rounded-2xl bg-slate-50 border"
                  placeholder="Quantity"
                />
                <input
                  className="p-5 rounded-2xl bg-slate-50 border"
                  placeholder="Target Price"
                />
              </div>
              <button className="w-full bg-[#0F172A] text-white py-6 rounded-[2rem] font-black uppercase flex justify-center items-center gap-2">
                Request Quotation <ChevronRight />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndustrialMarketplace;
