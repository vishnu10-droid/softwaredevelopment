import {
  LightBulbIcon,
  PencilSquareIcon,
  CodeBracketIcon,
  BugAntIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const processSteps = [
  {
    id: "01",
    title: "Discovery & Strategy",
    desc: "Understanding your business goals, users, and technical requirements.",
    icon: LightBulbIcon,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "02",
    title: "UI/UX Design",
    desc: "Designing intuitive, elegant, and conversion-focused user experiences.",
    icon: PencilSquareIcon,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: "03",
    title: "Development",
    desc: "Building scalable, secure, and high-performance web solutions.",
    icon: CodeBracketIcon,
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    id: "04",
    title: "Testing & QA",
    desc: "Ensuring quality through rigorous testing and performance checks.",
    icon: BugAntIcon,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "05",
    title: "Launch & Support",
    desc: "Smooth deployment, monitoring, and continuous improvements.",
    icon: RocketLaunchIcon,
    gradient: "from-emerald-500 to-teal-600",
  },
];

const OurProcess = () => {
  return (
    <section className="relative bg-gray-100 py-28 overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute -top-40 -left-40 w-[480px] h-[480px] bg-cyan-200/40 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[480px] h-[480px] bg-indigo-200/40 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-wide text-cyan-700 bg-cyan-50 rounded-full">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            How We Build <span className="text-cyan-600">Digital Excellence</span>
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            A structured, transparent workflow focused on performance,
            scalability, and long-term success.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-indigo-300 to-transparent hidden lg:block" />

          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col lg:flex-row items-center gap-10 ${
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  <div className="lg:w-1/2">
                    <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-all duration-500 group">
                      {/* Step Number */}
                      <div className="absolute -top-6 -right-6 text-7xl font-black text-gray-100 group-hover:text-gray-200 transition">
                        {step.id}
                      </div>

                      {/* Icon */}
                      <div
                        className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${step.gradient} mb-6`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
                    <span className="w-4 h-4 rounded-full bg-cyan-500 shadow-md" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
