"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { WordReveal } from "../WordReveal";

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
const INTERVAL = 4000;

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function Testimonials() {
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  const [page, setPage] = useState(0);
  const [visible, setVisible] = useState(true);
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const hovered = useRef(false);
  const animating = useRef(false);

  const current = testimonials.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  const goTo = useCallback(
    (to: number) => {
      if (animating.current || to === page) return;
      animating.current = true;
      setVisible(false);
      setTimeout(() => {
        setPage(to);
        setVisible(true);
        setTimeout(() => {
          animating.current = false;
        }, 500);
      }, 350);
    },
    [page],
  );

  const startAuto = useCallback(() => {
    if (autoTimer.current) clearInterval(autoTimer.current);
    autoTimer.current = setInterval(() => {
      if (!hovered.current) {
        setPage((prev) => {
          const to = (prev + 1) % totalPages;
          if (!animating.current) {
            animating.current = true;
            setVisible(false);
            setTimeout(() => {
              setPage(to);
              setVisible(true);
              setTimeout(() => {
                animating.current = false;
              }, 500);
            }, 350);
          }
          return prev;
        });
      }
    }, INTERVAL);
  }, [totalPages]);

  useEffect(() => {
    startAuto();
    return () => {
      if (autoTimer.current) clearInterval(autoTimer.current);
    };
  }, [startAuto]);

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
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <WordReveal
            as="h2"
            text="Testimonials"
            delay={0}
            stagger={0.09}
            style={{
              fontSize: "clamp(28px, 4vw, 64px)",
              fontWeight: "600",
              color: "#0a0a0f",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              justifyContent: "center",
            }}
          />
        </div>

        {/* Cards */}
        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            opacity: visible ? 1 : 0,
            transition: "opacity 400ms ease",
          }}
          onMouseEnter={() => {
            hovered.current = true;
          }}
          onMouseLeave={() => {
            hovered.current = false;
          }}
        >
          {current.map((t, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                padding: "40px 28px 28px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                border: "1px solid #f0f0f0",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Quote icon */}
              <div
                style={{
                  position: "absolute",
                  top: "-18px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "#FE0000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(254,0,0,0.22)",
                }}
              >
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 10-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p
                style={{
                  fontSize: "15px",
                  color: "#555",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  marginBottom: "22px",
                  textAlign: "center",
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div>
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "#f0f0f0",
                    marginBottom: "18px",
                  }}
                />
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#FE0000",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: "700",
                      flexShrink: 0,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {getInitials(t.name)}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: "700",
                        color: "#0a0a0f",
                        marginBottom: "2px",
                      }}
                    >
                      {t.name}
                    </p>
                    {t.role && (
                      <p style={{ fontSize: "11px", color: "#999" }}>
                        {t.role}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "28px",
          }}
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (autoTimer.current) clearInterval(autoTimer.current);
                goTo(i);
                startAuto();
              }}
              style={{
                width: i === page ? "20px" : "6px",
                height: "6px",
                borderRadius: "999px",
                backgroundColor: i === page ? "#FE0000" : "#ddd",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.4s ease",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .testimonials-inner { padding: 0 40px !important; } }
        @media (max-width: 768px) {
          .testimonials-section { padding: 48px 0 !important; }
          .testimonials-inner { padding: 0 24px !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .testimonials-section { padding: 40px 0 !important; }
          .testimonials-inner { padding: 0 20px !important; }
        }
        @media (max-width: 360px) { .testimonials-inner { padding: 0 16px !important; } }
      `}</style>
    </section>
  );
}
