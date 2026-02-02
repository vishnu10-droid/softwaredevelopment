import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-400 overflow-hidden">
  {/* Ambient background glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
    <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-10">
    {/* Top Section */}
    <div className="grid gap-16 md:grid-cols-4">
      {/* Brand */}
      <div className="md:col-span-1">
        <h3 className="text-2xl font-black text-white tracking-tight">
          Your<span className="text-cyan-400">Company</span>
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-gray-400">
          We design and build secure, scalable, and high-performance software
          solutions for startups and enterprises worldwide.
        </p>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-white font-semibold mb-5">Services</h4>
        <ul className="space-y-3 text-sm">
          <li className="hover:text-cyan-400 transition">Web Development</li>
          <li className="hover:text-cyan-400 transition">Mobile Applications</li>
          <li className="hover:text-cyan-400 transition">Custom Software</li>
          <li className="hover:text-cyan-400 transition">Cloud & DevOps</li>
          <li className="hover:text-cyan-400 transition">AI & Automation</li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="text-white font-semibold mb-5">Company</h4>
        <ul className="space-y-3 text-sm">
          <li className="hover:text-cyan-400 transition">About Us</li>
          <li className="hover:text-cyan-400 transition">Careers</li>
          <li className="hover:text-cyan-400 transition">Case Studies</li>
          <li className="hover:text-cyan-400 transition">Blog</li>
          <li className="hover:text-cyan-400 transition">Contact</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-white font-semibold mb-5">Get in Touch</h4>
        <ul className="space-y-4 text-sm">
          <li>
            📧 <span className="ml-2">hello@yourcompany.com</span>
          </li>
          <li>
            📞 <span className="ml-2">+1 (555) 123-4567</span>
          </li>
          <li>
            📍 <span className="ml-2">Global · Remote-First</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Divider */}
    <div className="mt-20 border-t border-white/10" />

    {/* Bottom Bar */}
    <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-sm">
      <p className="text-gray-500">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </p>

      <div className="flex gap-6 mt-4 md:mt-0">
        <span className="hover:text-cyan-400 transition cursor-pointer">
          Privacy Policy
        </span>
        <span className="hover:text-cyan-400 transition cursor-pointer">
          Terms of Service
        </span>
      </div>
    </div>
  </div>
</footer>

  )
}
