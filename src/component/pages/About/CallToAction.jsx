import React from 'react';

const ContactCTA = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* 1. Cinematic Background Elements */}
      {/* Glowing Mesh Grid */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>
      
      {/* High-End Light Leaks */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="relative group rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl">
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
              alt="Futuristic digital network" 
              className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40"></div>
          </div>

          {/* Content Card */}
          <div className="relative z-10 p-12 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/30 bg-blue-400/10 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-mono text-blue-300 tracking-[0.2em] uppercase">Now Boarding New Projects</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight mb-8">
                Ready to architect <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                  the extraordinary?
                </span>
              </h2>

              <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Whether you’re launching a new venture or scaling a legacy platform, 
                our team of senior engineers is ready to turn your vision into 
                <span className="text-white font-medium"> premium digital reality.</span>
              </p>
            </div>

            {/* Premium CTA Button Box */}
            <div className="flex flex-col items-center gap-6">
              <button className="group relative px-10 py-6 bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 text-slate-950 font-black text-lg group-hover:text-white transition-colors duration-300 flex items-center gap-3">
                  INITIATE PROJECT
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <div className="flex items-center gap-4 text-slate-400">
                <div className="flex -space-x-3">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center">
                       <span className="text-[10px] font-bold">★</span>
                    </div>
                  ))}
                </div>
                <span className="text-sm font-mono tracking-tight underline underline-offset-4 decoration-blue-500/50">
                  Avg. response: 4 hours
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
