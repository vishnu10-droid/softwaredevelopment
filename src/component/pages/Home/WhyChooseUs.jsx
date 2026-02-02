import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { AdjustmentsVerticalIcon, ClockIcon, CloudArrowUpIcon, CodeBracketIcon, CpuChipIcon, LifebuoyIcon } from "@heroicons/react/24/outline";

const ServicesCard = [
  {
    icon: AdjustmentsVerticalIcon,
    Heading: "Custom Development",
    paragraph: "Tailored software solutions built to meet your unique business requirements and goals.",
    button: "Get Started"
  },
  {
    icon: CloudArrowUpIcon,
    Heading: "Cloud Solutions",
    paragraph: "Scalable cloud infrastructure and migration services for modern digital transformation.",
    button: "Explore Cloud"
  },
  {
    icon: CpuChipIcon,
    Heading: "AI & Automation",
    paragraph: "Intelligent automation and AI-powered solutions to streamline your operations.",
    button: "Discover AI"
  }
];

const WhyChooseUs = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
<section className="relative bg-white">
  <div className="max-w-7xl mx-auto px-6 py-28">
    {/* Heading */}
    <div className="text-center mb-24">
      <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
        Why <span className="text-blue-600">Choose Us</span>
      </h2>
      <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-[17px] leading-[1.75]">
        We go beyond development. Our focus is on building secure, scalable, and
        future-ready software solutions that help businesses grow with confidence.
      </p>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        {
          title: "Expert Engineering Team",
          desc:
            "Highly skilled engineers with real-world experience in delivering production-grade software.",
          icon: CodeBracketIcon,
        },
        {
          title: "Modern & Scalable Tech",
          desc:
            "We use cutting-edge frameworks, cloud-native architectures, and DevOps best practices.",
          icon: CpuChipIcon,
        },
        {
          title: "Agile & Transparent Delivery",
          desc:
            "Clear communication, agile workflows, and predictable timelines for complete visibility.",
          icon: ClockIcon,
        },
        {
          title: "Long-Term Partnership",
          desc:
            "Ongoing maintenance, performance optimization, and dedicated post-launch support.",
          icon: LifebuoyIcon,
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group relative p-10 rounded-2xl
                     bg-white border border-gray-200
                     shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                     hover:shadow-[0_25px_60px_rgba(37,99,235,0.18)]
                     hover:-translate-y-2
                     transition-all duration-300
                     flex flex-col items-center text-center"
        >
          {/* Icon */}
          <div
            className="mb-7 flex h-16 w-16 items-center justify-center rounded-xl
                       bg-blue-50 text-blue-600
                       transition group-hover:bg-blue-600 group-hover:text-white"
          >
            <item.icon className="h-8 w-8" />
          </div>

          {/* Title */}
          <h4 className="text-[22px] font-bold text-gray-900 mb-4">
            {item.title}
          </h4>

          {/* Description */}
          <p className="text-gray-600 text-[15px] leading-[1.7]">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>







  );
};

export default WhyChooseUs;
