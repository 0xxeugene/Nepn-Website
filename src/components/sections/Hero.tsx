"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/images/bg-hero-one.jpg",
    label: "Powering Progress",
    heading: "Powering Progress\nthrough\nExploration",
    sub: "At NEPN, we discover and harness energy responsibly to fuel economies and empower communities",
  },
  {
    id: 2,
    image: "/images/bg-hero-two.jpg",
    label: "Excellence in Operations",
    heading: "Excellence\nin Operations",
    sub: "At NEPN, we discover and harness energy responsibly to fuel economies and empower communities",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);
  const [, setDirection] = useState(1);

  useEffect(() => {
    setAnimating(false);
    const reset = setTimeout(() => setAnimating(true), 50);
    return () => clearTimeout(reset);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  const slide = slides[current];

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        minHeight: "560px",
        maxHeight: "1200px",
        overflow: "hidden",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Background images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ opacity: 0 }}
          transition={{
            clipPath: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            opacity: { duration: 0.4, ease: "easeInOut" },
          }}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            willChange: "clip-path",
          }}
        >
          <motion.div
            initial={{ scale: 1.12, y: 24 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 1.04 }}
            transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: "absolute",
              inset: "-4px",
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "contrast(1.2) saturate(1.3) brightness(0.6)",
              willChange: "transform",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(1,6,26,0.55) 0%, rgba(1,6,26,0.2) 25%, rgba(1,6,26,0.15) 45%, rgba(1,6,26,0.55) 65%, rgba(1,6,26,0.92) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Main content + indicators stacked via flex */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: 0,
        }}
      >
        {/* Hero text — takes remaining space */}
        <div
          className="hero-content"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "80px 48px 24px",
            boxSizing: "border-box",
            alignSelf: "stretch",
          }}
        >
          <div style={{ width: "100%", maxWidth: "700px" }}>
            <AnimatePresence mode="wait">
              <motion.h1
                key={slide.id + "-heading"}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{
                  duration: 0.9,
                  delay: 0.25,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                style={{
                  fontSize: "clamp(32px, 5.5vw, 88px)",
                  fontWeight: "800",
                  color: "#fff",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  marginBottom: "clamp(12px, 1.5vw, 20px)",
                  whiteSpace: "pre-line",
                }}
              >
                {slide.heading}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={slide.id + "-sub"}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                style={{
                  fontSize: "clamp(12px, 1.2vw, 16px)",
                  color: "rgba(255,255,255,0.75)",
                  maxWidth: "360px",
                  lineHeight: 1.7,
                  marginBottom: "clamp(20px, 2.5vw, 32px)",
                }}
              >
                {slide.sub}
              </motion.p>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            >
              <Link
                href="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#0000FE",
                  color: "#fff",
                  fontSize: "clamp(13px, 1vw, 15px)",
                  fontWeight: "600",
                  textDecoration: "none",
                  padding: "clamp(10px, 1.2vw, 14px) clamp(20px, 2vw, 32px)",
                  borderRadius: "999px",
                  transition: "opacity 0.15s ease, transform 0.15s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(0)";
                }}
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M5 3l6 5-6 5"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Indicators — pinned to bottom, same padding as content */}
        <div
          className="hero-indicators-wrap"
          style={{
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 48px clamp(20px, 3.5vw, 36px)",
            boxSizing: "border-box",
            alignSelf: "stretch",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "clamp(12px, 2vw, 28px)",
              width: "100%",
            }}
          >
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                style={{
                  flex: 1,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  textAlign: "left",
                  minWidth: 0,
                }}
              >
                {/* Progress bar */}
                <div
                  style={{
                    height: "3px",
                    backgroundColor: "rgba(255,255,255,0.18)",
                    borderRadius: "3px",
                    marginBottom: "clamp(8px, 1vw, 14px)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      backgroundColor: "#0000FE",
                      borderRadius: "3px",
                      width:
                        i === current && animating
                          ? "100%"
                          : i < current
                            ? "100%"
                            : "0%",
                      transition:
                        i === current && animating ? "width 6s linear" : "none",
                    }}
                  />
                </div>

                <span
                  style={{
                    display: "block",
                    fontSize: "clamp(10px, 1vw, 13px)",
                    color: i === current ? "#fff" : "rgba(255,255,255,0.4)",
                    fontWeight: i === current ? "500" : "400",
                    letterSpacing: "0.01em",
                    transition: "color 0.3s ease",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-content { padding: 72px 24px 16px !important; }
          .hero-indicators-wrap { padding-left: 24px !important; padding-right: 24px !important; }
        }
        @media (max-width: 480px) {
          .hero-content { padding: 68px 20px 12px !important; }
          .hero-indicators-wrap { padding-left: 20px !important; padding-right: 20px !important; }
        }
        @media (max-width: 360px) {
          .hero-content { padding: 64px 16px 10px !important; }
          .hero-indicators-wrap { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
    </section>
  );
}
