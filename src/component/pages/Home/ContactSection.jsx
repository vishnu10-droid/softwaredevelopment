import React, { useEffect, useRef, useState } from "react";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // animate only once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#05060a] py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full" />

      <div
        className={`relative max-w-6xl mx-auto transition-all duration-1000 ease-out
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Let’s <span className="text-cyan-400">Work Together</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Have a project in mind or need expert guidance? Drop us a message —
            we’ll respond quickly.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="col-span-1 bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="col-span-1 bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="col-span-1 md:col-span-2 bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            ></textarea>

            <div className="col-span-1 md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold px-10 py-3 rounded-xl transition-all shadow-xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
