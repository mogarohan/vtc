"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Facebook,
  Loader2,
} from "lucide-react";

const ContactPage = () => {
  // ---------------------------------------------------------
  // 1. Logic & State (Backend Connection)
  // ---------------------------------------------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileno: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null); // 'success' or 'error'

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      // Ensure this URL matches your Laravel API
      const response = await fetch("https://happy.techstrota.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          mobileno: "",
          subject: "",
          message: "",
        }); // Reset form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------------------------------------------------------
  // 2. Visual Design (UI)
  // ---------------------------------------------------------
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative min-h-[420px] md:min-h-[520px] lg:min-h-[620px] px-6 overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/contact us.jpeg"
            alt="Vestigo Advisory Team"
            className="w-full h-full object-contain object-center"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#0F172A]/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center text-white mt-45">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Let&apos;s Start a{" "}
            <span className="text-blue-400">Conversation</span>
          </h1>

          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Reach out today to schedule a comprehensive risk consultation and
            take a confident step toward long-term security.
          </p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-10 md:py-14 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
          {/* Left Side → Now Card */}
          <div className="bg-gradient-to-br from-sky-100 to-white rounded-[2rem] p-6 md:p-8 shadow-lg border border-sky-200">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 font-poppins">
                  Get In Touch
                </h2>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  Share your details and our advisory team will connect with you
                  shortly.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">
                      Our Presence
                    </h4>
                    <p className="text-slate-500 italic text-sm">
                      Ahmedabad · Vadodara · Surendranagar · Siddhpur · Mumbai
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">
                      Email Us
                    </h4>
                    <p className="text-slate-500 text-sm">
                      info@vestigoinsurance.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">
                      Call Support
                    </h4>
                    <p className="text-slate-500 text-sm">+91 97261 60360</p>
                    <p className="text-slate-500 text-sm">+91 97378 01385</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="pt-4">
                <h4 className="font-bold text-slate-900 mb-3 text-sm md:text-base">
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form (Functional) */}
          <div className="bg-sky-50 md:bg-sky-100 rounded-[2.5rem] p-6 md:p-8 shadow-2xl shadow-blue-500/5 border border-sky-200">
            {/* Success/Error Status Messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 flex items-center gap-2"
              >
                <span className="font-bold">Success!</span> Message sent. We
                will contact you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200"
              >
                Something went wrong. Please try again later.
              </motion.div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="mobileno"
                  value={formData.mobileno}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Partnership"
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="How can we help you?"
                  className="w-full px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    Sending... <Loader2 className="animate-spin" size={20} />
                  </>
                ) : (
                  <>
                    Send Message{" "}
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (Using the better Grayscale version) */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto h-[450px] bg-slate-100 rounded-[3rem] overflow-hidden border border-slate-200 relative shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9367468652423!2d72.5065!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1703952000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
