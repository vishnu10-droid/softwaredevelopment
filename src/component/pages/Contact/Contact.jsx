import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, MapPin, Phone, Github, Twitter, Linkedin, Sparkles, Code } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", type: "Web Dev", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Project request sent! Thanks ${formData.name}.`);
  };

  const projectTypes = ["Web Dev", "Mobile App", "UI/UX", "AI/ML"];

  return (
    <section className="relative py-32 px-6 bg-[#030712] overflow-hidden text-white">
      {/* --- PREMIUM ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse delay-700" />
        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- LEFT SIDE: THE PITCH (5 Cols) --- */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-8">
                <Sparkles size={14} /> Ready to Scale?
              </div>
              <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.85]">
                Let's ship <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  your vision.
                </span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-md leading-relaxed">
                From napkin sketches to enterprise-grade software. We don't just build; we innovate.
              </p>
            </motion.div>

            {/* Floating Contact Bento Cards */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Mail, label: "Email", value: "vishukush10@gmail.com", color: "hover:border-cyan-500/50" },
                { icon: MapPin, label: "HQ", value: "Agra, India", color: "hover:border-blue-500/50" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md transition-all ${item.color}`}
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</p>
                      <p className="text-lg font-bold">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Circle Links */}
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                  href="#"
                  className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: THE SMART FORM (7 Cols) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            {/* Form Container */}
            <div className="relative bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-[3.5rem] backdrop-blur-xl shadow-3xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-cyan-500">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all text-white placeholder:text-slate-600"
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-cyan-500">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your emial address"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all text-white placeholder:text-slate-600"
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Project Type Selector */}
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-cyan-500">Project Category</label>
                  <div className="flex flex-wrap gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, type })}
                        className={`px-6 py-3 rounded-xl border text-sm font-bold transition-all ${
                          formData.type === type 
                          ? "bg-cyan-500 border-cyan-500 text-black" 
                          : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-cyan-500">Tell us about the project</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="We want to build the next unicorn..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all text-white placeholder:text-slate-600 resize-none"
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(6, 182, 212, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-black rounded-[2rem] flex items-center justify-center gap-3 tracking-[0.2em] uppercase text-sm"
                >
                  Initiate Launch <Send size={20} />
                </motion.button>
              </form>
            </div>

            {/* Background Decoration: Floating Terminal */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-[80px] opacity-20 -z-10" />
          </motion.div>
        </div>

        {/* --- BOTTOM SECTION: TRUST TEXT --- */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm font-medium">© 2026 Banana Studio. All rights reserved.</p>
          <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
            <Code size={20} className="text-white" />
            <span className="font-black tracking-widest">REACT</span>
            <span className="font-black tracking-widest">NODE.JS</span>
            <span className="font-black tracking-widest">AWS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;