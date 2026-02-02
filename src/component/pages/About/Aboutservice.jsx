import React from 'react';
import { useNavigate } from 'react-router-dom';

const Aboutservice = () => {
  const navigate =useNavigate();
  const services = [
    {
      title: "Web & Cloud Systems",
      desc: "Custom-built architectures using React, Next.js, and Node.js designed for high-velocity scaling.",
      icon: <WebIcon />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Mobile Ecosystems",
      desc: "Native-grade iOS and Android experiences crafted with precision performance and fluid motion.",
      icon: <MobileIcon />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Product Strategy & UI",
      desc: "Human-centric interface design backed by rigorous UX research and conversion-driven strategy.",
      icon: <DesignIcon />,
      color: "from-rose-500 to-orange-400"
    },
    {
      title: "Enterprise Modernization",
      desc: "Revitalizing legacy infrastructure into modern, secure, and future-proof enterprise cloud environments.",
      icon: <EnterpriseIcon />,
      color: "from-emerald-500 to-teal-400"
    },
    {
      title: "API & Infrastructure",
      desc: "High-throughput API architecture and microservices that connect your digital world seamlessly.",
      icon: <ApiIcon />,
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "Dedicated Lifecycle",
      desc: "Elite maintenance, 24/7 proactive monitoring, and continuous optimization for peak efficiency.",
      icon: <SupportIcon />,
      color: "from-blue-600 to-indigo-700"
    }
  ];
  

  return (
    <section className="relative py-32 bg-white overflow-hidden" id="what-we-do">
      {/* 1. Subtle Radial Backgrounds */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.3em] text-blue-600 uppercase bg-blue-50 rounded-full">
              Capabilities
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
              Engineering <br />
              <span className="text-slate-300">without limits.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-xl font-light max-w-md leading-relaxed">
            We don’t just build apps; we architect competitive advantages through 
            <span className="text-slate-900 font-medium"> premium technical execution</span>.
          </p>
        </div>

        {/* 2. The Interactive Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-1 rounded-[2.5rem] bg-slate-100 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-200 hover:to-white hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2"
            >
              <div className="relative h-full bg-white p-10 rounded-[2.4rem] overflow-hidden">
                {/* Spotlight Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed font-light mb-8 flex-grow">
                    {service.desc}
                  </p>

                  <button onClick={()=>navigate("/WebCloudSystems")} className="flex items-center gap-2 text-sm font-bold text-slate-900 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    Learn more 
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Custom Minimalist Icons ---

const WebIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9 3 9m-9-9a9 9 0 019-9" />
  </svg>
);

const MobileIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="5" y="2" width="14" height="20" rx="3" strokeWidth={1.5} />
    <path d="M12 18h.01" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

const DesignIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const EnterpriseIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ApiIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const SupportIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export default Aboutservice;