import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowUpRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ title, department, location, type, index }) => {
  const handleApply = () => {
    alert(`Applying for: ${title}`);
  };
  const navigate=useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative p-[1px] rounded-3xl overflow-hidden"
    >
      {/* Gradient Border - Adjusted opacity for a cleaner look */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 opacity-10 group-hover:opacity-100 blur-lg transition duration-700" />

      {/* Card */}
      <div className="relative h-full bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/40
        transition-all duration-500 shadow-md
        group-hover:shadow-2xl group-hover:shadow-cyan-500/25 flex flex-col justify-between"
      >
        <div>
          {/* Header */}
          <div className="flex justify-between items-start mb-5">
            <span className="bg-cyan-500/10 text-cyan-700 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider">
              {department}
            </span>
            <ArrowUpRight
              size={22}
              className="text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
            />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-cyan-700 transition-colors">
            {title}
          </h3>

          {/* Meta */}
          <div className="flex flex-wrap gap-6 text-slate-600 text-sm">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-cyan-600" />
              {location}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-cyan-600" />
              {type}
            </span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={()=>navigate("/freeConsultation")}
          className="mt-8 w-full py-3.5 rounded-xl font-extrabold text-white
          bg-gradient-to-r from-slate-900 to-slate-800
          group-hover:from-cyan-600 group-hover:to-blue-600
          transition-all duration-500 shadow-lg"
        >
          Apply Now
        </button>
      </div>
    </motion.div>
  );
};

// Updated with two more cards (6 total)
const jobs = [
  {
    title: "Senior React Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full Time",
  },
  {
    title: "Backend Engineer (Node.js)",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full Time",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Contract",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Hybrid",
    type: "Full Time",
  },
  {
    title: "Frontend Lead",
    department: "Engineering",
    location: "London, UK",
    type: "Full Time",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full Time",
  },
];

const CareerSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-36 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-cyan-200/40 rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-blue-200/40 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-700 px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider mb-6">
            <Sparkles size={14} /> We’re Hiring
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Build the <span className="text-cyan-600">Future</span> With Us
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Join a team of engineers, designers, and innovators creating
            scalable, high-impact software products for clients globally.
          </p>
        </motion.div>

        {/* Jobs Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <JobCard key={index} index={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;