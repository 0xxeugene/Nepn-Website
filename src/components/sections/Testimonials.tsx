"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "NEPN operates with a strong sense of responsibility and financial discipline. Their processes are clear, structured, and dependable.",
    name: "Soname Gbemiga",
    role: "Senior Accountant",
  },
  {
    quote:
      "Working with NEPN has shown a consistent commitment to accountability and operational excellence across all projects.",
    name: "Ewere Uzah",
    role: "AGMO",
  },
  {
    quote:
      "NEPN brings reliability and attention to detail that make complex workflows easier to manage and execute.",
    name: "Adeyemo Gbenga",
    role: "HFA",
  },
  {
    quote:
      "NEPN maintains high standards in facilities management, ensuring efficiency, safety, and long-term value.",
    name: "Badmus Adebayo",
    role: "Facility Manager",
  },
  {
    quote:
      "NEPN approaches every engagement with professionalism and a clear focus on delivering sustainable outcomes.",
    name: "Mikele Oziegbe",
    role: "",
  },
  {
    quote:
      "The consistency and integrity of NEPN's work make them a trusted partner across different initiatives.",
    name: "Nnochiri Ogbonna",
    role: "",
  },
];

const ITEMS_PER_PAGE = 2;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  const current = testimonials.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <section
      className="testimonials-section"
      style={{ backgroundColor: "#f9f9f9", padding: "64px 0" }}
    >
      <div
        className="testimonials-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: "500",
              color: "#0a0a0f",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Testimonials
          </h2>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="testimonials-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            {current.map((t, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  padding: "48px 32px 32px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  border: "1px solid #f0f0f0",
                  position: "relative",
                }}
              >
                {/* Quote icon */}
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#FE0000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(254,0,0,0.25)",
                  }}
                >
                  <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 10-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontSize: "15px",
                    color: "#555",
                    lineHeight: 1.8,
                    fontStyle: "italic",
                    marginBottom: "24px",
                    textAlign: "center",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      backgroundColor: "#FE0000",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                  >
                    {getInitials(t.name)}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#0a0a0f",
                        marginBottom: "2px",
                      }}
                    >
                      {t.name}
                    </p>
                    {t.role && (
                      <p style={{ fontSize: "12px", color: "#999" }}>
                        {t.role}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "32px",
          }}
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              style={{
                width: i === page ? "28px" : "10px",
                height: "10px",
                borderRadius: "999px",
                backgroundColor: i === page ? "#FE0000" : "#ddd",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .testimonials-inner { padding: 0 40px !important; }
        }
        @media (max-width: 768px) {
          .testimonials-section { padding: 48px 0 !important; }
          .testimonials-inner { padding: 0 24px !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .testimonials-section { padding: 40px 0 !important; }
          .testimonials-inner { padding: 0 20px !important; }
        }
        @media (max-width: 360px) {
          .testimonials-inner { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  );
}
