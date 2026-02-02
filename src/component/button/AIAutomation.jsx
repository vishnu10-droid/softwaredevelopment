import {
  CpuChipIcon,
  BoltIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const AIAutomation = () => {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      
      {/* Soft Background Accents */}
      <div className="absolute -top-40 -left-40 h-96 w-96 bg-blue-200/40 rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 bg-purple-200/40 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            AI &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Automation
            </span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            AI-powered automation solutions designed to streamline workflows,
            enhance productivity, and scale business operations intelligently.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {[
            {
              icon: CpuChipIcon,
              title: "Intelligent Automation",
              desc: "Deploy AI-driven systems that automate repetitive tasks with precision and reliability.",
            },
            {
              icon: BoltIcon,
              title: "Workflow Optimization",
              desc: "Eliminate inefficiencies and accelerate operations with smart, adaptive workflows.",
            },
            {
              icon: ChartBarIcon,
              title: "Data-Driven Insights",
              desc: "Transform raw data into strategic insights using advanced AI analytics models.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-white p-10
                         border border-gray-200
                         shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                         hover:shadow-[0_30px_60px_rgba(59,130,246,0.15)]
                         transition-all duration-500"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity" />

              <item.icon
                className="relative h-14 w-14 text-blue-600 mb-8
                           group-hover:scale-110 transition-transform"
              />

              <h3 className="relative text-2xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="relative text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAutomation;
