import React, { useState } from "react";
import { FaReact, FaPhp, FaShopify, FaWordpress, FaAndroid, FaApple } from "react-icons/fa";
import { SiAntdesign, SiCodeigniter, SiFlutter, SiLaravel, SiMongodb, SiMui, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiTailwindcss } from "react-icons/si";
import { DiMysql } from "react-icons/di";

const TechnologiesSection = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const Techno = [
    { icon: <FaReact size={40} color="#61DAFB" />, Heading: "React", paragraph: "Modern UI library" },
    { icon: <SiNextdotjs size={40} color="black" />, Heading: "Next.js", paragraph: "Full-stack framework" },
    { icon: <SiNodedotjs size={40} color="#339933" />, Heading: "Node.js", paragraph: "Server-side JavaScript" },
    { icon: <SiMongodb size={40} color="#47A248" />, Heading: "MongoDB", paragraph: "NoSQL database" },
    { icon: <DiMysql size={40} color="#4479A1" />, Heading: "MySQL", paragraph: "Relational database" },
    { icon: <SiPostgresql size={40} color="#336791" />, Heading: "PostgreSQL", paragraph: "Advanced database" },
    { icon: <FaPhp size={40} color="#777BB4" />, Heading: "PHP", paragraph: "Server-side language" },
    { icon: <SiLaravel size={40} color="#FF2D20" />, Heading: "Laravel", paragraph: "PHP framework" },
    { icon: <SiCodeigniter size={40} color="#EF4223" />, Heading: "CodeIgniter", paragraph: "Lightweight PHP framework" },
    { icon: <FaShopify size={40} color="#96BF48" />, Heading: "Shopify", paragraph: "E-commerce platform" },
    { icon: <FaWordpress size={40} color="#21759B" />, Heading: "WordPress", paragraph: "CMS platform" },
    { icon: <SiTailwindcss size={40} color="#38BDF8" />, Heading: "Tailwind CSS", paragraph: "Utility-first CSS" },
    { icon: <SiAntdesign size={40} color="#0170FE" />, Heading: "Ant Design", paragraph: "UI component library" },
    { icon: <SiMui size={40} color="#007FFF" />, Heading: "Material UI", paragraph: "React components" },
    { icon: <SiPython size={40} color="#3776AB" />, Heading: "Python", paragraph: "Machine learning" },
    { icon: <SiFlutter size={40} color="#02569B" />, Heading: "Flutter", paragraph: "Cross-platform mobile" },
    { icon: <SiReact size={40} color="#61DAFB" />, Heading: "React Native", paragraph: "Mobile development" },
    { icon: <FaAndroid size={40} color="#3DDC84" />, Heading: "Android", paragraph: "Android development" },
    { icon: <FaApple size={40} color="#000000" />, Heading: "iOS", paragraph: "iOS development" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f4f7ff",
        paddingBottom: "120px",
        marginTop:"50px"
      }}>
      <p
        style={{
          fontSize: "46px",
          fontWeight: "800",
          textAlign: "center",
          paddingTop: "40px",
          color: "#111827",
          letterSpacing: "-1px",
        }}>
        Technologies We Master
      </p>

      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          color: "#6b7280",
          marginTop: "10px",
          maxWidth: "620px",
          margin: "10px auto 0",
          lineHeight: "1.6",
        }}>
        Cutting-edge tools and frameworks powering modern, scalable development
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "48px",
          padding: "80px 100px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {Techno.map((item, index) => {
          const isHovered = hoverIndex === index + 100;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoverIndex(index + 100)}
              onMouseLeave={() => setHoverIndex(null)}
              style={{
                textAlign: "center",
                padding: "28px 22px",
                borderRadius: "20px",
                background:
                  "linear-gradient(180deg, #ffffff 0%, #fafbff 100%)",
                cursor: "pointer",

                boxShadow: isHovered
                  ? "0 30px 60px rgba(106,13,173,0.25)"
                  : "0 10px 25px rgba(0,0,0,0.08)",

                transform: isHovered
                  ? "translateY(-14px) scale(1.08)"
                  : "translateY(0) scale(1)",

                transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                border: "1px solid rgba(106,13,173,0.08)",
              }} >
              <div
                style={{
                  fontSize: "42px",
                  marginBottom: "14px",
                  background: isHovered
                    ? "linear-gradient(135deg, rgba(106,13,173,0.35), rgba(79,70,229,0.35))"
                    : "rgba(106,13,173,0.12)",
                  width: "74px",
                  height: "74px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  boxShadow: isHovered
                    ? "0 12px 25px rgba(106,13,173,0.4)"
                    : "none",
                  transition: "all 0.4s ease",
                }}
              >
                {item.icon}
              </div>

              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  marginTop: "14px",
                  color: isHovered ? "#6a0dad" : "#111827",
                  letterSpacing: "0.3px",
                  transition: "0.3s",
                }}
              >
                {item.Heading}
              </p>

              <p
                style={{
                  color: "#6b7280",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  marginTop: "6px",
                }}>
              
                {item.paragraph}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnologiesSection;
