import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const CustomDevelopment = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-[#f8faff] via-white to-[#eef2ff] py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-wide text-indigo-700 bg-indigo-100 rounded-full">
            Our Expertise
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Custom <span className="text-indigo-600">Development</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
            Tailored software solutions built to meet your unique business
            requirements and goals. We design, develop, and scale high-quality
            applications that grow with your business.
          </p>

          {/* Feature List */}
          <ul className="mt-8 space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-indigo-600" />
              Fully customized software architecture
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-indigo-600" />
              Scalable, secure, and future-ready solutions
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-indigo-600" />
              Agile development & transparent process
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-10">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-3 px-8 py-4
              rounded-xl font-semibold text-white
              bg-gradient-to-r from-indigo-600 to-blue-600
              shadow-lg shadow-indigo-600/30
              hover:scale-105 hover:shadow-xl
              transition-all duration-300"
            >
              Start Your Project
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative">
          <div className="rounded-3xl p-12 bg-white
            border border-indigo-100
            shadow-[0_40px_80px_rgba(0,0,0,0.08)]
            hover:-translate-y-2 transition-all duration-500">

            <div className="flex items-center justify-center h-20 w-20 rounded-2xl
              bg-gradient-to-br from-indigo-600 to-blue-600
              shadow-[0_18px_40px_rgba(79,70,229,0.4)] mb-8">
              <CodeBracketIcon className="h-10 w-10 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Custom Development?
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Off-the-shelf software doesn’t always fit. Our custom development
              services ensure your solution is built exactly for your workflows,
              users, and long-term vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDevelopment;
