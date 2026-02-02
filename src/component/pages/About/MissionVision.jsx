import React from 'react';

const MissionVision = () => {
  return (
    <section className="relative py-32 bg-gray-200 overflow-hidden mt-0.5">
      {/* 1. High-End Decorative Backgrounds */}
      {/* Soft animated gradient orb */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[150px] mix-blend-multiply opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-50 rounded-full blur-[150px] mix-blend-multiply opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-mono text-xs tracking-[0.4em] uppercase font-bold">Foundation</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Built on <span className="italic font-serif">Purpose</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Mission Card: The "Light" Luxury Card */}
          <div className="group relative p-12 rounded-[3rem] bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:-translate-y-3">
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-10 inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white shadow-xl shadow-blue-100/50 text-blue-600 group-hover:rotate-[10deg] transition-transform duration-500">
                <TargetIcon />
              </div>
              
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Our Mission
              </h2>
              
              <p className="text-slate-500 text-xl leading-relaxed font-light">
                To engineer <span className="text-slate-900 font-semibold italic">paradigm-shifting</span> software solutions that catalyze business transformation and define the digital frontier.
              </p>
              
              <div className="mt-auto pt-10">
                <div className="flex items-center gap-4 text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                   <div className="h-px w-12 bg-current"></div>
                   <span className="text-xs font-mono uppercase tracking-widest">Efficiency & Impact</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card: The "Deep" Luxury Card */}
          <div className="group relative p-12 rounded-[3rem] bg-slate-900 border border-slate-800 shadow-2xl transition-all duration-700 hover:shadow-indigo-500/20 hover:-translate-y-3 overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-10 inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-indigo-400 group-hover:-rotate-[10deg] transition-transform duration-500">
                <VisionIcon />
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
                Our Vision
              </h2>
              
              <p className="text-slate-400 text-xl leading-relaxed font-light">
                To be the <span className="text-white font-semibold">architects of tomorrow</span>, creating an ecosystem where technology and human intuition converge to solve the impossible.
              </p>

              <div className="mt-auto pt-10">
                <div className="flex items-center gap-4 text-slate-600 group-hover:text-indigo-400 transition-colors duration-300">
                   <div className="h-px w-12 bg-current"></div>
                   <span className="text-xs font-mono uppercase tracking-widest">Global Scale</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 2. The "Expensive" Visual Feature: Wide Cinematic Banner */}
        <div className="mt-24 relative rounded-[3rem] overflow-hidden group">
          <div className="absolute inset-0 bg-slate-900">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
              alt="Cyber security concept" 
              className="w-full h-full object-cover opacity-40 scale-105 group-hover:scale-100 transition-transform duration-[3s]"
            />
          </div>
          
          {/* Glassmorphic Overlay Content */}
          <div className="relative z-10 py-20 px-12 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 backdrop-blur-[2px]">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Crafting Code with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Mathematical Precision.</span>
              </h3>
            </div>
            
            <div className="flex flex-col items-center p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl">
               <span className="text-5xl font-black text-white mb-2">100%</span>
               <span className="text-xs font-mono text-blue-400 uppercase tracking-[0.2em]">Commitment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TargetIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

const VisionIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export default MissionVision;