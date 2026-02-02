import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Rocket, Heart, Coffee, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * 1. ENHANCED PERKS COMPONENT (Refined Hover)
 */
export const PerksSection = ({ perks = [] }) => {
  const navigate = useNavigate();
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-100/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/30 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-cyan-600 font-bold tracking-[0.2em] uppercase text-xs"
          >
            Why Join Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tight"
          >
            Better for you. <span className="text-slate-400">Better for the team.</span>
          </motion.h2>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* --- YAHAN CHANGES KIYE HAIN (REDUCED GLOW) --- */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/50 to-blue-500/50 rounded-[2.5rem] opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 -z-10" />

              {/* Main Card */}
              <div className="h-full bg-white border border-slate-100 p-10 rounded-[2.5rem] transition-all duration-300 group-hover:border-cyan-200/50 flex flex-col items-center text-center shadow-sm">
                
                {/* Icon Circle */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-slate-50 text-slate-900 flex items-center justify-center rounded-3xl transition-all duration-500 group-hover:bg-cyan-600 group-hover:text-white group-hover:rotate-6 group-hover:scale-105 shadow-inner">
                    <perk.icon size={32} strokeWidth={1.5} />
                  </div>
                </div>

                <h4 className="font-extrabold text-slate-900 text-xl mb-4">
                  {perk.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {perk.desc}
                </p>

                {/* Subtle Link Appearance */}
                <button  onClick={() => navigate("/WebCloudSystems")} className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-cyan-600 text-xs font-bold uppercase tracking-widest">
                  Learn More <ChevronRight size={14} className="ml-1" />
                </button >
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const perksData = [
    { icon: Globe, title: "Remote-First", desc: "Work from the comfort of your home or a beach in Bali. We trust your output, not your desk time." },
    { icon: Rocket, title: "Career Growth", desc: "Access to $2k annual learning stipend and weekly internal 'Tech-Talk' knowledge sessions." },
    { icon: Heart, title: "Wellness", desc: "Full healthcare including dental, mental health support, and unlimited PTO policies." },
    { icon: Coffee, title: "Work Life", desc: "Twice-yearly fully paid company retreats and a modern office for when you want company." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PerksSection perks={perksData} />
    </div>
  );
}