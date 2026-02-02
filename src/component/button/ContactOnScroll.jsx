import { useEffect, useState } from "react";

const ContactOnScroll = () => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // when user scrolls 300px down
      if (window.scrollY > 300) {
        setShowContact(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Main Content */}
      <section style={{ height: "100vh", padding: "40px" }}>
        <h1>Home Page</h1>
        <p>Scroll down to see contact page</p>
      </section>

      <section style={{ height: "100vh", padding: "40px" }}>
        <h1>About Section</h1>
        <p>Keep scrolling...</p>
      </section>

      {/* Contact Page */}
      {showContact && (
        <section
          style={{
            minHeight: "100vh",
            padding: "40px",
            background: "#f4f4f4",
          }}
        >
          <h1>Contact Us</h1>
          <form style={{ maxWidth: "400px" }}>
            <input
              type="text"
              placeholder="Your Name"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <input
              type="email"
              placeholder="Your Email"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <button>Send</button>
          </form>
        </section>
      )}
    </div>
  );
};

export default ContactOnScroll;
