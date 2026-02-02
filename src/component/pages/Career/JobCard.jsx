import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ title, department, location, type, index }) => {
 const navigate =useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative rounded-3xl overflow-hidden"
    >
      {/* Accent glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-indigo-600/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-700" />

      {/* Card */}
      <div
        className="relative h-full bg-white p-8 rounded-3xl
        border border-slate-200
        shadow-sm transition-all duration-500
        group-hover:shadow-2xl group-hover:shadow-cyan-500/20"
      >
        {/* Top Row */}
        <div className="flex items-start justify-between mb-6">
          <span className="px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider
            bg-cyan-100 text-cyan-700">
            {department}
          </span>

          <ArrowUpRight
            size={22}
            className="text-slate-300 group-hover:text-cyan-600
            group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
          />
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4 leading-snug
          group-hover:text-cyan-700 transition-colors">
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

        {/* Divider */}
        <div className="my-6 h-px bg-slate-200" />

        {/* CTA */}
        <button onClick={()=>navigate("/WebCloudSystems")}
          className="w-full py-3.5 rounded-xl font-extrabold text-white text-sm tracking-wide
          bg-gradient-to-r from-slate-900 to-slate-800
          hover:from-cyan-600 hover:to-blue-600
          transition-all duration-300
          hover:shadow-xl hover:shadow-cyan-500/30
          active:scale-95"
        >
          Apply Now
        </button>
      </div>
    </motion.div>
  );
};

export default JobCard;
