import React from "react";
import {
  Code,
  Smartphone,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="group relative p-[1px] rounded-2xl overflow-hidden">
      {/* Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Card */}
      <div
        className="relative bg-white p-10 rounded-2xl h-full
        border border-slate-200
        transition-all duration-500
        group-hover:-translate-y-3
        group-hover:bg-white
        group-hover:shadow-2xl group-hover:shadow-cyan-500/20"
      >
        {/* Icon */}
        <div
          className="w-16 h-16 flex items-center justify-center rounded-2xl
          bg-cyan-500/10 text-cyan-500 mx-auto mb-6
          group-hover:bg-cyan-500 group-hover:text-white
          group-hover:scale-110 transition-all duration-500"
        >
          <Icon className="w-8 h-8" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Custom Software Development",
    description:
      "Scalable, secure, and high-performance software solutions tailored to your business needs.",
    icon: Code,
  },
  {
    title: "Mobile App Development",
    description:
      "High-quality iOS and Android applications with smooth user experiences.",
    icon: Smartphone,
  },
  {
    title: "Cloud & DevOps Solutions",
    description:
      "Cloud infrastructure, CI/CD pipelines, and performance optimization.",
    icon: Cloud,
  },
  {
    title: "Cybersecurity Services",
    description:
      "Advanced security audits, compliance, and data protection strategies.",
    icon: ShieldCheck,
  },
];

const ServicesCard = () => {
  return (
    <section className="bg-slate-100 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Our Services
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            We build modern digital products that scale with your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
