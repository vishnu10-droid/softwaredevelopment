import {
  CodeBracketIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const WebDevelopment = () => {
    const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-[#f8faff] py-28">
      {/* Soft Luxury Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-cyan-300/30 blur-[160px]" />
        <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] rounded-full bg-indigo-300/30 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-wide text-cyan-600 border border-cyan-200 rounded-full bg-white shadow-sm">
            Web Development
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            High-Performance{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Websites & Web Apps
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            We build scalable, lightning-fast digital products using modern
            frameworks, clean architecture, and world-class UI engineering.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.45)]">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
              <CodeBracketIcon className="h-8 w-8 text-cyan-600" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Modern Tech Stack
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Built with React, Next.js, Tailwind, Node.js and scalable backend
              architectures for future-ready solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.45)]">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50">
              <RocketLaunchIcon className="h-8 w-8 text-indigo-600" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Performance First
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Optimized loading speeds, SEO-ready structure, and smooth
              interactions designed to convert users.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_rgba(16,185,129,0.45)]">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50">
              <ShieldCheckIcon className="h-8 w-8 text-emerald-600" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Secure & Scalable
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Enterprise-grade security, scalable infrastructure, and clean code
              practices that grow with your business.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button  onClick={() => navigate("/contact")}className="inline-flex items-center gap-3 px-10 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/40">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
