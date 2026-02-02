import {
  CloudIcon,
  CodeBracketIcon,
  ServerStackIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const WebCloudSystems = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: CodeBracketIcon,
      title: "Modern Frontends",
      desc: "Blazing-fast React & Next.js interfaces optimized for SEO, UX, and performance.",
    },
    {
      icon: ServerStackIcon,
      title: "Scalable Backends",
      desc: "Node.js architectures designed for concurrency, microservices, and APIs.",
    },
    {
      icon: CloudIcon,
      title: "Cloud-Native Design",
      desc: "Built for AWS, Azure & GCP with containerization and auto-scaling.",
    },
    {
      icon: BoltIcon,
      title: "High-Velocity Scaling",
      desc: "Systems that scale from MVP to millions of users without re-architecture.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-28">
      {/* Ambient Background Glows */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-cyan-200/30 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-indigo-200/30 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-cyan-600 uppercase">
            <CloudIcon className="w-4 h-4" />
            Web & Cloud Systems
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            High-Velocity Web & Cloud Architectures
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Custom-built systems using{" "}
            <span className="font-medium text-slate-900">React</span>,{" "}
            <span className="font-medium text-slate-900">Next.js</span>, and{" "}
            <span className="font-medium text-slate-900">Node.js</span> —
            engineered for performance, resilience, and massive scalability.
          </p>
        </div>

        {/* Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-[1px]
              bg-gradient-to-br from-transparent via-slate-200/40 to-transparent
              hover:from-cyan-400/40 hover:via-indigo-400/40 hover:to-cyan-400/40
              transition-all duration-500"
            >
              {/* Glass Card */}
              <div
                className="relative h-full rounded-2xl bg-white/80 backdrop-blur-xl p-7
                shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)]
                transition-all duration-500
                group-hover:-translate-y-2
                group-hover:shadow-[0_30px_80px_-20px_rgba(79,70,229,0.45)]"
              >
                {/* Hover Glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Container */}
                <div
                  className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl
                  bg-gradient-to-br from-cyan-600 to-indigo-600
                  shadow-lg shadow-cyan-500/40
                  ring-1 ring-white/40"
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-[2px] w-10 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24">
          <button
            onClick={() => navigate("/contact")}
            className="group inline-flex items-center gap-3 rounded-full
            bg-gradient-to-r from-cyan-600 to-indigo-600
            px-9 py-4 text-sm font-semibold text-white
            shadow-xl shadow-cyan-500/30
            transition-all duration-300 hover:scale-105"
          >
            Architect My System
            <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebCloudSystems;
