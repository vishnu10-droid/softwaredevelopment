import React from 'react';

const CompanyOverview = () => {
  return (
    <section className="relative py-24 bg-gray-100 overflow-hidden">
      {/* 1. Soft Dynamic Accents (Light Mode) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content Side */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50/50 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">About Our Studio</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter leading-[0.9]">
                Software for the <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Next Generation
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl">
              <p>
                We are a <span className="text-slate-900 font-medium">global technology partner</span> specialized in building robust architectures. From early-stage startups to Fortune 500s, we bridge the gap between imagination and execution.
              </p>
              
              {/* Modern Feature List */}
              <div className="grid grid-cols-1 gap-5 pt-4">
                {[
                  { title: "Clean Architecture", color: "text-blue-600", dot: "bg-blue-600" },
                  { title: "Rapid Iteration", color: "text-indigo-600", dot: "bg-indigo-600" },
                  { title: "Cloud Native", color: "text-purple-600", dot: "bg-purple-600" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group cursor-default">
                    <div className={`h-2 w-2 rounded-full ${item.dot} transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(37,99,235,0.4)]`}></div>
                    <span className={`font-mono text-sm tracking-widest uppercase font-bold ${item.color}`}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: The Visual Side */}
          <div className="relative group">
            {/* Main Interactive Image with Light Shadow */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-slate-100 aspect-[4/5] lg:aspect-square shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2070" 
                alt="Modern Workspace" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              {/* Soft overlay to make white elements pop */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
            </div>

            {/* Floating Glass Card (Light Mode Style) */}
            <div className="absolute -bottom-6 -left-10 z-20 hidden md:block w-72 p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] animate-bounce-slow">
              <div className="flex gap-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
              </div>
              <div className="space-y-2 font-mono text-xs">
                <p className="text-blue-600">const <span className="text-slate-900">Innovation</span> = () =&gt; {"{"}</p>
                <p className="pl-4 text-indigo-500 italic">// Engineering future</p>
                <p className="pl-4 text-slate-700">return <span className="text-purple-600">Solution.create()</span></p>
                <p className="text-blue-600">{"}"}</p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -right-6 z-20 p-8 rounded-3xl bg-slate-900 text-white shadow-2xl -rotate-6 group-hover:rotate-0 transition-transform duration-500">
              <div className="text-center">
                <p className="text-5xl font-black mb-1">10<span className="text-blue-400">+</span></p>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-70">Years of Dev</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CompanyOverview;