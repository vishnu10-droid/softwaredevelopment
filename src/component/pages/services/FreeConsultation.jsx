import {
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const FreeConsultation = () => {
  return (
    <section className="relative bg-[#f8fafc] py-28 overflow-hidden">
      
      {/* Soft Background Glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-300/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/30 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold tracking-wide">
            Free Strategy Session
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Let’s Build Something <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Powerful & Scalable
            </span>
          </h2>

          <p className="mt-6 text-slate-600 text-lg max-w-xl leading-relaxed">
            Get a <span className="text-slate-900 font-semibold">free consultation</span> with our software experts.
            We analyze your idea, architecture, and growth goals — no obligations.
          </p>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-700">
            <div className="flex items-center gap-2">✔ Enterprise-grade solutions</div>
            <div className="flex items-center gap-2">✔ Scalable architectures</div>
            <div className="flex items-center gap-2">✔ Secure & future-proof</div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="relative bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl p-8 shadow-xl">
          
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Request Your Free Consultation
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition"
            />

            <input
              type="text"
              placeholder="Project Type (Web, App, SaaS...)"
              className="w-full px-5 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition"
            />

            <textarea
              rows="4"
              placeholder="Tell us about your project"
              className="w-full px-5 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 rounded-lg transition-all shadow-lg hover:shadow-cyan-500/30"
            >
              Get Free Consultation
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </form>

          {/* Contact Shortcuts */}
          <div className="mt-6 flex justify-between text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-cyan-600" />
              +91 6395038674
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="w-4 h-4 text-cyan-600" />
              info@zaibainfotech.com
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FreeConsultation;
