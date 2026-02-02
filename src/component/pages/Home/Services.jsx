import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  AdjustmentsVerticalIcon,
  CloudArrowUpIcon,
  CpuChipIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: AdjustmentsVerticalIcon,
      title: "Custom Development",
      desc: "Tailored software solutions built to meet your unique business requirements and goals.",
      button: "Get Started",
      path: "/customDevelopment",
    },
    {
      icon: CloudArrowUpIcon,
      title: "Cloud Solutions",
      desc: "Scalable cloud infrastructure, migrations, and secure cloud-native architectures.",
      button: "Explore Cloud",
      path: "/CloudSolutions",
    },
    {
      icon: CpuChipIcon,
      title: "AI & Automation",
      desc: "AI-powered automation solutions to optimize workflows and boost efficiency.",
      button: "Discover AI",
      path: "/AIAutomation",
    },
    {
      icon: CodeBracketIcon,
      title: "Web Development",
      desc: "High-performance websites and web applications using modern frameworks.",
      button: "View Web",
      path: "/WebDevelopment",
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile App Development",
      desc: "Robust Android & iOS applications designed for performance and scalability.",
      button: "View Apps",
      path: "/MobileAppDevelopment",
    },
    {
      icon: ShieldCheckIcon,
      title: "Security & Maintenance",
      desc: "Ongoing monitoring, security audits, updates, and long-term support.",
      button: "Stay Secure",
      path: "/SecurityMaintenance",
    },
  ];

  return (
    <section className="mt-2 bg-[#f8faff] pb-[120px]">
      {/* Heading */}
      <div className="text-center pt-20 mb-16">
        <h1 className="text-[48px] font-extrabold tracking-tight text-gray-900">
          Our Services
        </h1>
        <p className="text-gray-500 text-[19px] mt-4 max-w-[620px] mx-auto">
          Comprehensive technology solutions designed to elevate and scale your
          digital presence.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[48px] px-6 md:px-20 max-w-[1400px] mx-auto">
        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group relative h-[430px] rounded-[28px] p-[44px_36px]
              flex flex-col justify-between text-center cursor-pointer
              border border-[rgba(2,24,152,0.08)]
              bg-gradient-to-b from-white to-[#f9faff]
              transition-all duration-700
              shadow-[0_14px_35px_rgba(0,0,0,0.07)]
              hover:-translate-y-[20px]
              hover:scale-[1.04]
              hover:shadow-[0_45px_90px_rgba(2,24,152,0.20)]"
            >
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="h-20 w-20 flex items-center justify-center rounded-2xl
                bg-gradient-to-br from-[#021898] to-indigo-600
                shadow-[0_18px_45px_rgba(2,24,152,0.35)]
                group-hover:scale-110 transition">
                  <Icon className="h-9 w-9 text-white" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[23px] font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[17px] leading-[1.75]">
                  {item.desc}
                </p>
              </div>

              {/* Button */}
              <div className="flex items-center justify-center gap-3 font-semibold text-gray-700 group-hover:text-[#021898]">
               <button
  onClick={() => navigate(item.path)}
  className="group flex items-center gap-1 relative pb-1 border-b-2 border-transparent
             hover:border-[#021898]
             transition-all duration-300"
>
  {item.button}
  <FaArrowRight
    className="text-[14px] transition-transform duration-300 group-hover:translate-x-1"
  />
</button>

                
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
