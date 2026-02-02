import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const images = [
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80'
];

export default function ServicesHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navigate =useNavigate();

  return (
    // Added bg-slate-900 here so even if there's a gap, it's dark, not white
    <section className="relative h-[400px] w-full overflow-hidden flex items-center justify-center px-6 bg-slate-900">
      
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {/* Changed mode to "popLayout" to allow images to cross-fade over each other */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }} // Slightly slower for smoother transition
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
          />
        </AnimatePresence>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3 font-bold"
        >
          Expertise & Solutions
        </motion.span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white tracking-tight drop-shadow-md">
          Our <span className="text-cyan-400">Services</span>
        </h1>
        
        <p className="text-white max-w-2xl text-base md:text-lg mb-8 leading-relaxed font-medium drop-shadow-md">
          From custom software development to cloud architecture, we build 
          scalable digital products that drive enterprise growth.
        </p>

       <div className="flex gap-4">
  <button
    onClick={() => navigate("/Aboutservices")}
    className="group relative inline-flex items-center justify-center overflow-hidden
    rounded-xl px-9 py-3.5 font-semibold tracking-wide text-slate-950
    bg-gradient-to-r from-cyan-400 via-cyan-500 to-indigo-500
    shadow-[0_15px_40px_-10px_rgba(34,211,238,0.7)]
    transition-all duration-300 hover:scale-105"
  >
    {/* Glow Layer */}
    <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

    {/* Button Text */}
    <span className="relative z-10">View Projects</span>
  </button>
</div>

      </div>
    </section>
  );
}