import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Career", "Contact"];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-wide"
        >
          DevSoft
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-white font-semibold">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="group-hover:text-cyan-400 transition">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:flex">
          <Link
            to="/contact"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-cyan-500/40 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 py-6 bg-gray-900/95 border-t border-white/10 text-white font-semibold">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block hover:text-cyan-400 transition"
              >
                {item}
              </Link>
            </li>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 text-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg"
          >
            Get Started
          </Link>
        </ul>
      </div>
    </header>
  );
}
