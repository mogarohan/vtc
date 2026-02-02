'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { 
  Stethoscope, Activity, UserRound, PhoneCall, Zap, GraduationCap, 
  BookOpen, Microscope, Globe, Clock, Award, ArrowRight, Menu, X,
  CheckCircle2, Users, Library, Lightbulb, ChevronRight, Home
} from 'lucide-react';

export default function InstitutionalSuite() {
  const [activeTab, setActiveTab] = useState('hospital');

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. MAIN NAVIGATION (TOP STICKY) */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-[100] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={140}
              height={80}
              priority
              className="object-contain"
            />
          </Link>
          
          <div className="hidden md:flex bg-slate-100 p-1 rounded-full border border-slate-200">
            <button 
              onClick={() => setActiveTab('hospital')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'hospital' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-blue-600'}`}
            >
              Hospital View
            </button>
            <button 
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'education' ? 'bg-[#1e3a8a] text-white shadow-lg' : 'text-slate-500 hover:text-blue-900'}`}
            >
              Education View
            </button>
          </div>

          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-600 transition-all">
            Contact Us
          </button>
        </div>
      </nav>

      {/* 2. PAGE HEADER (Header ke theek neeche vala section) */}
      <header className="pt-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
              <Home size={14} />
              <ChevronRight size={14} />
              <span>Industries</span>
              <ChevronRight size={14} />
              <span className="text-blue-600 font-medium capitalize">{activeTab}</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">
              {activeTab === 'hospital' ? 'Healthcare Services' : 'Academic Excellence'}
            </h2>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Support Line</p>
              <p className="text-lg font-black text-blue-600">+91 800 123 4567</p>
            </div>
            <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shadow-inner ${activeTab === 'hospital' ? 'bg-blue-100 text-blue-600' : 'bg-indigo-100 text-indigo-900'}`}>
              {activeTab === 'hospital' ? <Stethoscope size={24}/> : <GraduationCap size={24}/>}
            </div>
          </div>
        </div>
      </header>

      {/* ----------------- CONTENT VIEWS ----------------- */}
      {activeTab === 'hospital' && (
        <main className="animate-in fade-in duration-700">
          <section className="relative py-24 px-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 -z-10 rounded-l-[100px] hidden lg:block"></div>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-bold mb-6">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                  JCI ACCREDITED MEDICAL CENTER
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]">
                  Your Health, Our <br /><span className="text-blue-600">Prioritized</span> Mission.
                </h1>
                <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                  Experience world-class healthcare with a personal touch. Providing precision diagnostics and compassionate recovery.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-200">
                    Book Appointment <Clock size={18} />
                  </button>
                </div>
              </div>
              
              <div className="relative h-[450px] bg-blue-600 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
                 <Activity size={120} className="text-white opacity-20 animate-pulse" />
                 <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-4 rounded-2xl flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                        <CheckCircle2 size={20} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Status</p>
                        <p className="text-sm font-black text-slate-900">Emergency Ready</p>
                    </div>
                 </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ----------------- EDUCATION VIEW ----------------- */}
      {activeTab === 'education' && (
        <main className="animate-in slide-in-from-bottom-5 duration-700">
          <section className="bg-[#1e3a8a] py-28 px-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
            <div className="max-w-7xl mx-auto text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-bold mb-8 border border-white/20 uppercase tracking-widest">
                <Globe size={14} /> Global Excellence in Education
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">
                Building <span className="text-blue-400 italic">Leaders</span>. <br />
                Defining <span className="text-white/50">Futures</span>.
              </h1>
              <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12 font-light">
                Join an elite academic environment focused on global innovation and professional success.
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-white text-[#1e3a8a] px-10 py-4 rounded-lg font-black hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/50">
                  APPLY FOR 2026
                </button>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}