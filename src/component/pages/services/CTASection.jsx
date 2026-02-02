import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate=useNavigate();
  return (
    <section className="relative py-32 px-6 bg-slate-50 overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-200/40 rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[140px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 rounded-[2.5rem] p-14 md:p-20 text-center overflow-hidden shadow-2xl shadow-cyan-500/30">
          
          {/* Glow overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_60%)]" />

          <div className="relative z-10 text-white">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              Ready to <span className="text-cyan-200">Scale</span> Your Business?
            </h2>

            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Let’s build powerful digital solutions together and transform your
              ideas into scalable, high-performance products.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={()=>navigate("/freeConsultation")} className="group inline-flex items-center justify-center gap-3 bg-white text-blue-700 px-12 py-4 rounded-full font-extrabold text-lg 
                hover:bg-slate-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl">
                Get a Free Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button onClick={()=>navigate("/about")}className="inline-flex items-center justify-center px-12 py-4 rounded-full font-bold text-lg border border-white/40 text-white 
                hover:bg-white/10 transition">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
