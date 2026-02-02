import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiAmazonwebservices,
  SiPython,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

const techs = [
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "AWS", icon: SiAmazonwebservices, color: "text-orange-500" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-indigo-500" },
];

const TechStack = () => {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-100 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-slate-500 uppercase tracking-[0.45em] text-xs font-bold mb-6">
          Our Technology Stack
        </h2>
        <p className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-16">
          Built with <span className="text-cyan-600">Modern Technologies</span>
        </p>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          {techs.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="group bg-white border border-slate-200
              rounded-2xl p-8 flex flex-col items-center justify-center
              transition-all duration-500 hover:-translate-y-3
              hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <Icon
                className={`text-5xl mb-4 ${color} group-hover:scale-110 transition-transform duration-500`}
              />
              <span className="text-sm font-semibold text-slate-700 tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
