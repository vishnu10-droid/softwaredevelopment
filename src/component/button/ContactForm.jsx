import React, { useEffect, useState, useRef } from "react";

export default function ContactForm() {
  const [showForm, setShowForm] = useState(false);
  const timeoutRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const scheduleForm = (time) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowForm(true);
    }, time);
  };

  useEffect(() => {
    scheduleForm(5000);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleClose = () => {
    setShowForm(false);
    scheduleForm(15000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    handleClose();
  };

  if (!showForm) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-3 backdrop-blur-sm">
      {/* Main Container */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
        
        {/* 🌄 THE BACKGROUND IMAGE LAYER */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/contact-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15, // Controls the transparency of the photo
          }}
        />

        {/* 🧊 GLASS CONTENT LAYER */}
        <div className="relative z-10 bg-gray-900/40 backdrop-blur-xl p-8">
          
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white">Have a Question?</h2>
            <p className="text-cyan-400/80 text-sm font-medium">We'd love to hear from you</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white text-sm border border-white/10 focus:border-cyan-500 focus:outline-none transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white text-sm border border-white/10 focus:border-cyan-500 focus:outline-none transition"
            />

            <div className="grid grid-cols-2 gap-4">
                <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 text-white text-sm border border-white/10 focus:border-cyan-500 focus:outline-none transition"
                />

                <select
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 text-gray-400 text-sm border border-white/10 focus:border-cyan-500 focus:outline-none transition"
                >
                <option value="" className="bg-gray-900">Subject</option>
                <option value="general" className="bg-gray-900">General</option>
                <option value="support" className="bg-gray-900">Support</option>
                <option value="business" className="bg-gray-900">Business</option>
                </select>
            </div>

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message *"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white text-sm border border-white/10 focus:border-cyan-500 focus:outline-none resize-none transition"
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 rounded-lg shadow-lg shadow-cyan-500/20 transition-all active:scale-[0.98]"
            >Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}