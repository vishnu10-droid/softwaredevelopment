import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

export default function HeroSection() {
  /* ================= IMAGES ================= */
  const heroImages = [
    // Bright modern workspace
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop",

    // Coding environment
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1920&auto=format&fit=crop",

    // Cloud / collaboration
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop",

    // Tech team office
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop",

    // 🔥 EXTRA DARK – Premium cinematic image
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop",
  ];

  /* ================= STATS ================= */
  const stats = [
    { value: 120, suffix: "+", label: "Projects" },
    { value: 50, suffix: "+", label: "Clients" },
    { value: 8, suffix: "+", label: "Years" },
    { value: 24, suffix: "/7", label: "Support" },
  ];

  const [current, setCurrent] = useState(0);

  /* ================= SLIDER ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative flex min-h-[75vh] items-center justify-center
                 overflow-hidden px-6 pt-6 sm:pt-8 lg:pt-10 pb-14"
    >
      {/* ================= BACKGROUND SLIDER ================= */}
      <div className="absolute inset-0 -z-10">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center
                        transition-opacity duration-[1500ms]
                        ${i === current ? "opacity-100" : "opacity-0"}`}
            style={{
              backgroundImage: `
                linear-gradient(
                  135deg,
                  rgba(0,0,0, ${i === heroImages.length - 1 ? "0.75" : "0.45"}),
                  rgba(0,0,0, ${i === heroImages.length - 1 ? "0.65" : "0.35"})
                ),
                radial-gradient(circle at top left, rgba(14,165,233,0.25), transparent 40%),
                radial-gradient(circle at bottom right, rgba(236,72,153,0.25), transparent 45%),
                url('${img}')
              `,
            }}
          />
        ))}
      </div>

      {/* ================= SOFT BLOBS ================= */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -right-24 h-80 w-80 rounded-full bg-purple-500/20 blur-[140px]" />

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1.5px]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
        {/* Badge */}
        <div
          className="mx-auto mb-5 inline-flex items-center gap-2
                     rounded-full border border-white/25
                     bg-white/15 px-6 py-2
                     text-xs sm:text-sm font-semibold
                     tracking-wide backdrop-blur-lg"
        >
          🚀 Trusted by Startups & Enterprises
        </div>

        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                     font-extrabold leading-tight tracking-tight"
        >
          We build software
          <span
            className="block mt-2
                       bg-gradient-to-r from-cyan-300 via-white to-purple-300
                       bg-clip-text text-transparent"
          >
            that scales with your business
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mt-5 max-w-lg
                     text-base sm:text-[17px]
                     text-white/80 leading-[1.65]"
        >
          We design, develop, and scale high-performance web, mobile,
          and cloud solutions tailored for modern businesses.
        </p>

        {/* CTA Buttons */}
        <div className="mt-7 flex flex-wrap justify-center gap-5">
          <Link
            to="/contact"
            className="rounded-full bg-white px-8 py-3.5
                       text-sm font-semibold text-blue-600
                       shadow-lg shadow-blue-500/30
                       transition hover:bg-blue-600 hover:text-white"
          >
            Free Consultation
          </Link>

          <Link
            to="/services"
            className="rounded-full border border-white/40
                       px-8 py-3.5 text-sm font-semibold text-white
                       backdrop-blur-md transition
                       hover:bg-white hover:text-blue-600"
          >
            Services
          </Link>
        </div>

        {/* ================= STATS ================= */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/15
                         bg-white/10 px-4 py-4 backdrop-blur-xl
                         transition hover:bg-white/15"
            >
              <h3 className="text-xl md:text-2xl font-bold">
                <CountUp end={item.value} duration={2} />
                {item.suffix}
              </h3>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-white/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <div className="absolute bottom-3 flex flex-col items-center text-white/60">
        <span className="mb-1 text-[9px]">Scroll</span>
        <div className="h-6 w-4 rounded-full border border-white/40 flex justify-center">
          <span className="mt-1 h-2 w-1 rounded-full bg-white/70 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
