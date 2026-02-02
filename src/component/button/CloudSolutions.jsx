import { Cloud, Server, ShieldCheck, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CloudSolutions = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-white py-28 overflow-hidden">
      
      {/* Soft Background Accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-200/40 blur-[140px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-200/40 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Cloud{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="mt-5 text-gray-600 text-lg">
            Scalable cloud infrastructure, seamless migrations, and secure
            cloud-native architectures built for modern businesses.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Card */}
          {[
            {
              icon: Cloud,
              color: "text-cyan-600",
              border: "hover:border-cyan-400/40",
              title: "Scalable Infrastructure",
              desc: "Auto-scaling cloud environments designed to grow with your business while optimizing performance and cost.",
            },
            {
              icon: Server,
              color: "text-indigo-600",
              border: "hover:border-indigo-400/40",
              title: "Cloud Migration",
              desc: "Secure and seamless migration of applications, data, and workloads with minimal downtime.",
            },
            {
              icon: ShieldCheck,
              color: "text-emerald-600",
              border: "hover:border-emerald-400/40",
              title: "Secure Architecture",
              desc: "Cloud-native security with compliance, monitoring, and best practices to protect your data.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-10
                          border border-gray-200 ${item.border}
                          shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                          hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]
                          transition-all duration-500`}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity" />

              <item.icon
                className={`relative w-14 h-14 ${item.color} mb-8 group-hover:scale-110 transition-transform`}
              />

              <h3 className="relative text-2xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="relative text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full
                       bg-gradient-to-r from-cyan-600 to-indigo-600
                       text-white font-semibold text-lg
                       shadow-[0_15px_30px_rgba(79,70,229,0.35)]
                       hover:scale-105 transition"
          >
            Get Cloud Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CloudSolutions;
