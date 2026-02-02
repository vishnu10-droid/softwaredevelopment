import {
  DevicePhoneMobileIcon,
  CpuChipIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import {  useNavigate } from "react-router-dom";

const MobileAppDevelopment = () => {
    const navigate =useNavigate();
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-200/40 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-200/40 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-wider uppercase rounded-full
                           bg-linear-to-r from-cyan-100 to-purple-100 text-cyan-700">
            Mobile Solutions
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Mobile App{" "}
            <span className="bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Development
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Robust Android & iOS applications engineered for high performance,
            enterprise-grade security, and limitless scalability.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Left – Features */}
          <div className="space-y-8">
            {[
              {
                icon: DevicePhoneMobileIcon,
                title: "Native & Cross-Platform",
                desc: "Pixel-perfect Android and iOS apps using modern frameworks and native performance optimizations.",
              },
              {
                icon: CpuChipIcon,
                title: "High Performance Architecture",
                desc: "Optimized app structures built for speed, smooth UX, and long-term scalability.",
              },
              {
                icon: CloudArrowUpIcon,
                title: "Cloud-Connected",
                desc: "Seamless backend integration with secure APIs, real-time sync, and cloud services.",
              },
              {
                icon: ShieldCheckIcon,
                title: "Enterprise Security",
                desc: "Industry-standard encryption, authentication, and compliance-ready architectures.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex gap-5 p-6 rounded-2xl
                           bg-white border border-gray-200
                           shadow-sm hover:shadow-xl
                           hover:-translate-y-1
                           transition-all duration-300"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl
                             bg-linear-to-br from-cyan-500 to-purple-500
                             text-white shadow-md
                             group-hover:scale-110 transition"
                >
                  <item.icon className="h-6 w-6" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right – Premium Card */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-cyan-400 to-purple-400 blur opacity-25"></div>

            <div className="relative rounded-3xl bg-white border border-gray-200 p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Build Apps Users Love ❤️
              </h3>

              <p className="text-gray-600 mb-8">
                From startup MVPs to enterprise-grade applications, we design
                and develop mobile apps that deliver measurable business impact.
              </p>

              <button onClick={()=>navigate("/contact")}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3
                           bg-linear-to-r from-cyan-500 to-purple-500
                           text-white font-semibold shadow-lg
                           hover:shadow-purple-500/40 hover:scale-105
                           transition-all duration-300"
              >
                Start Your App
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppDevelopment;
