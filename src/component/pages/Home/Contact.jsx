import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
<section className="relative overflow-hidden
                    bg-gradient-to-br
                    from-[#ecfeff]
                    via-[#f8fafc]
                    to-[#eef2ff]">
  {/* Ambient gradient glows */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-48 left-1/4 h-[420px] w-[420px]
                    rounded-full bg-cyan-300/30 blur-3xl" />
    <div className="absolute -bottom-48 right-1/4 h-[420px] w-[420px]
                    rounded-full bg-indigo-300/30 blur-3xl" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
      Ready to Build Your
      <span className="block mt-2 bg-gradient-to-r
                       from-cyan-500 via-sky-500 to-indigo-600
                       bg-clip-text text-transparent">
        Next Project?
      </span>
    </h2>

    {/* Description */}
    <p className="text-gray-700 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
      Let’s collaborate to transform your idea into a scalable, high-performance
      digital product engineered for long-term success.
    </p>

    {/* CTA Button */}
    <Link
      to="/contact"
      className="relative inline-flex items-center justify-center mt-14 px-12 py-4
                 rounded-xl font-semibold text-lg text-white
                 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600
                 shadow-[0_22px_70px_rgba(56,189,248,0.45)]
                 transition-all duration-300
                 hover:scale-105 hover:shadow-[0_35px_100px_rgba(99,102,241,0.55)]"
    >
      Contact Us Today
    </Link>
  </div>
</section>




    </div>
  )
}
