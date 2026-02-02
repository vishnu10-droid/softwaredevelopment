import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070", // Team collaborating
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070", // Coding/Setup
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070", // Modern office/Server room
];

const AboutHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const navigate=useNavigate();

  return (
    <section className="relative h-[80vh] overflow-hidden bg-gray-900">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${
            index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full">
            Our Mission
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Building the Future <br /> 
            <span className="text-blue-500">One Line of Code</span> at a Time
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We craft world-class digital products that help forward-thinking
            businesses innovate, scale, and lead in a rapidly evolving digital
            landscape.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button onClick={()=>navigate("/OurProcess")} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
              Our Process
            </button>
            <button onClick={()=>navigate("/contact")} className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-sm transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Simple Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, i) => (
          <div 
            key={i}
            className={`h-1 transition-all duration-500 rounded-full ${i === current ? "w-8 bg-blue-500" : "w-2 bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutHero;