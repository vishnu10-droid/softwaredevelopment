import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowUpRight, Code2, Terminal } from "lucide-react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ title, department, location, type, index }) => {
  // Click Handler Function
  const handleJobClick = (jobTitle) => {
    // This is where you would normally use navigate('/jobs/id') 
    // For now, it provides visual feedback
    console.log(`Navigating to details for: ${jobTitle}`);
    alert(`Redirecting to the application page for: ${jobTitle}`);
  };
  const navigate =useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative rounded-3xl"
    >
      {/* Subtle Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500 -z-10" />

      {/* Main Card Container */}
      <div className="relative h-full flex flex-col justify-between bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:border-cyan-200/50">
        <div>
          <div className="flex items-start justify-between mb-6">
            <span className="px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest bg-slate-100 text-slate-600 group-hover:bg-cyan-50 group-hover:text-cyan-700 transition-colors">
              {department}
            </span>
            <button 
              onClick={() => handleJobClick(title)}
              className="text-slate-300 group-hover:text-cyan-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all cursor-pointer outline-none"
              aria-label="View Job Details"
            >
              <ArrowUpRight size={22} />
            </button>
          </div>

          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-cyan-700 transition-colors">
            {title}
          </h3>

          <div className="flex flex-wrap gap-6 text-slate-500 text-sm font-medium">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-cyan-500" /> {location}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-cyan-500" /> {type}
            </span>
          </div>
        </div>

        <div>
          <div className="my-6 h-px bg-slate-100" />
          <button 
            onClick={()=>navigate("/freeConsultation")}
            className="w-full py-4 rounded-xl font-bold text-white text-sm tracking-widest uppercase bg-slate-900 hover:bg-cyan-600 transition-all duration-300 active:scale-95 shadow-lg shadow-slate-200 group-hover:shadow-cyan-500/20 cursor-pointer"
          >
            View Listing
          </button>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * 2. MAIN JOBS SECTION COMPONENT
 */
const JobsSection = () => {
  const jobs = [
    { title: "Senior Full Stack Engineer (Next.js & Go)", department: "Engineering", location: "Remote / Bengaluru", type: "Full-time" },
    { title: "AI/ML Integration Specialist", department: "Intelligence", location: "Remote", type: "Full-time" },
    { title: "Cloud Infrastructure Architect", department: "DevOps", location: "Mumbai / Hybrid", type: "Full-time" },
    { title: "Lead Frontend Engineer (React/TS)", department: "Product", location: "Remote", type: "Contract" },
    { title: "Cybersecurity Compliance Lead", department: "Security", location: "Singapore / Remote", type: "Full-time" },
    { title: "Technical Product Manager", department: "Product", location: "San Francisco", type: "Full-time" },
  ];

  return (
    <section className="py-32 px-6 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Area */}
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-cyan-600 font-bold tracking-widest uppercase text-xs mb-4"
            >
              <Terminal size={16} /> Engineering Careers
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter"
            >
              Building the <span className="text-cyan-600">Core</span> of Innovation.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-lg md:text-xl leading-relaxed"
            >
              Work on cutting-edge software solutions with a team of elite developers and designers.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="hidden lg:block pb-2">
            <div className="bg-white border border-slate-200 px-6 py-4 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Team Member" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-slate-700">Join 40+ makers</p>
            </div>
          </motion.div>
        </div>

        {/* Jobs Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, i) => (
            <JobCard key={i} index={i} {...job} />
          ))}
        </div>

        {/* Footer Contact */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-32 p-12 bg-white rounded-[3rem] border border-slate-200 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Code2 size={120} />
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-4">Don’t see your stack?</h3>
          <p className="text-slate-500 mb-8 max-w-lg mx-auto">
            We’re always looking for talented developers. Send us an open application.
          </p>
          <button 
            onClick={()=>navigate("/freeConsultation")}
            className="inline-block px-8 py-4 bg-cyan-600 text-white font-black rounded-xl hover:bg-cyan-700 transition-all shadow-xl shadow-cyan-100 cursor-pointer active:scale-95"
          >
            Open Application
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default JobsSection;