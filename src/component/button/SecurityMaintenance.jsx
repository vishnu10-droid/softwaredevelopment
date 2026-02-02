import {
  ShieldCheckIcon,
  ArrowPathIcon,
  EyeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const SecurityMaintenance = () => {
  return (
    <section className="relative bg-white py-28 overflow-hidden">
      {/* Soft Premium Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] bg-cyan-200/40 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] bg-blue-200/40 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 mb-5 px-5 py-1.5 text-sm font-semibold text-cyan-700 bg-cyan-50 border border-cyan-200 rounded-full">
            <ShieldCheckIcon className="h-4 w-4" />
            Security & Maintenance
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Enterprise-Grade <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              Security & Reliability
            </span>
          </h2>

          <p className="text-gray-600 text-lg mb-12 max-w-xl">
            Continuous monitoring, proactive security audits, intelligent
            updates, and long-term technical support to keep your digital
            products resilient and future-proof.
          </p>

          {/* Premium Stats */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "99.99%", label: "System Uptime" },
              { value: "24/7", label: "Threat Monitoring" },
              { value: "120+", label: "Security Reviews" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white border border-gray-200 p-6 text-center
                           shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                           hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                           transition-all duration-300"
              >
                <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-cyan-600 transition">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Feature Stack */}
        <div className="relative space-y-8">
          {[
            {
              icon: EyeIcon,
              title: "Real-Time Monitoring",
              desc: "Continuous system surveillance to identify risks before they impact operations.",
            },
            {
              icon: ShieldCheckIcon,
              title: "Advanced Security Audits",
              desc: "Regular penetration testing and vulnerability assessments.",
            },
            {
              icon: ArrowPathIcon,
              title: "Automated Updates",
              desc: "Seamless patches and version upgrades without downtime.",
            },
            {
              icon: WrenchScrewdriverIcon,
              title: "Long-Term Support",
              desc: "Dedicated experts ensuring performance, scalability, and stability.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group flex gap-6 p-6 rounded-3xl bg-white border border-gray-200
                         shadow-[0_12px_50px_rgba(0,0,0,0.06)]
                         hover:shadow-[0_25px_70px_rgba(0,0,0,0.09)]
                         transition-all duration-300"
            >
              <div
                className="h-14 w-14 flex items-center justify-center rounded-2xl
                           bg-gradient-to-br from-cyan-600 to-blue-600 text-white
                           group-hover:scale-110 transition-transform"
              >
                <item.icon className="h-7 w-7" />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityMaintenance;
