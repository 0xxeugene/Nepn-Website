"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/images/bg-hero-one.jpg",
    label: "Powering Progress",
    heading: ["Powering Progress", "through Exploration"],
    sub: "We explore and develop energy resources responsibly to drive economic growth and support sustainable communities.",
    accent: "#0000FE",
  },
  {
    id: 2,
    image: "/images/bg-hero-two.jpg",
    label: "Excellence in Operations",
    heading: ["Excellence", "in Operations"],
    sub: "Our operations are built on safety, innovation, and efficiency to deliver reliable energy solutions every day.",
    accent: "#0000FE",
  },
  {
    id: 3,
    image: "/images/bg-hero-three.png",
    label: "Transform Resources",
    heading: ["Transform Resource", "into Opportunities"],
    sub: "By transforming natural resources into sustainable energy, we create opportunities for industries and future generations.",
    accent: "#0000FE",
  },
];

function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, rotateX: -40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -30, rotateX: 20 }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.022,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          style={{ display: "inline-block", transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </>
  );
}

// Magnetic button hook
function MagneticLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
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
        whiteSpace: "nowrap",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Shimmer sweep on hover */}
      <motion.span
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ x: "200%", opacity: 0.25 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      {children}
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path
          d="M5 3l6 5-6 5"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.a>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);
  const [prev, setPrev] = useState<number | null>(null);
  const [, setDirection] = useState(1);

  useEffect(() => {
    setAnimating(false);
    const reset = setTimeout(() => setAnimating(true), 50);
    return () => clearTimeout(reset);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setPrev(current);
      setCurrent((p) => (p + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (i: number) => {
    if (i === current) return;
    setDirection(i > current ? 1 : -1);
    setPrev(current);
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
        perspective: "1200px",
      }}
    >
      {/* ── Background images with wipe + zoom ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 0% 100%)", zIndex: -1 }}
          transition={{ clipPath: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } }}
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
        >
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: "linear" }}
            style={{
              position: "absolute",
              inset: "-4px",
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: slide.id === 3 ? "right center" : "center",
              filter:
                slide.id === 3
                  ? "contrast(1.05) saturate(1.1) brightness(0.85)"
                  : "contrast(1.15) saturate(1.2) brightness(0.55)",
              transform:
                slide.id === 3
                  ? "scaleX(-1) perspective(900px) rotateY(8deg)"
                  : "none",
              transformOrigin: "center center",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Noise grain overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
          pointerEvents: "none",
          mixBlendMode: "overlay",
        }}
      />

      {/* ── Gradient overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(1,6,26,0.5) 0%, rgba(1,6,26,0.15) 30%, rgba(1,6,26,0.15) 50%, rgba(1,6,26,0.6) 70%, rgba(1,6,26,0.95) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* ── Slide counter — top right ── */}
      <motion.div
        style={{
          position: "absolute",
          top: "clamp(24px, 3vw, 40px)",
          right: "clamp(24px, 3vw, 48px)",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "rgba(255,255,255,0.5)",
          fontSize: "13px",
          fontWeight: "500",
          letterSpacing: "0.08em",
          fontVariantNumeric: "tabular-nums",
        }}
      ></motion.div>

      {/* ── Main content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: 0,
        }}
      >
        {/* Hero text */}
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
          <div style={{ width: "100%", maxWidth: "800px" }}>
            {/* Eyebrow label */}
            {/* <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-label"}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "clamp(16px, 2vw, 24px)",
                }}
              >
                <motion.span
                  animate={{ scaleX: [0, 1] }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{
                    display: "inline-block",
                    width: "32px",
                    height: "2px",
                    backgroundColor: "#0000FE",
                    transformOrigin: "left",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {slide.label}
                </span>
              </motion.div>
            </AnimatePresence> */}

            {/* Heading — per-character reveal */}
            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: "600",
                color: "#fff",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                marginBottom: "clamp(12px, 1.5vw, 20px)",
                margin: "0 0 clamp(12px, 1.5vw, 20px)",
                perspectiveOrigin: "50% 50%",
                transformStyle: "preserve-3d",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div key={slide.id + "-h"}>
                  {slide.heading.map((line, li) => (
                    <div
                      key={li}
                      style={{
                        overflow: "hidden",
                        display: "block",
                        lineHeight: 1.12,
                      }}
                    >
                      <SplitText text={line} delay={li * 0.08} />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </h1>

            {/* Subtext */}
            <AnimatePresence mode="wait">
              <motion.p
                key={slide.id + "-sub"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
                style={{
                  fontSize: "clamp(13px, 1.1vw, 16px)",
                  color: "rgba(255,255,255,0.65)",
                  maxWidth: "380px",
                  lineHeight: 1.75,
                  margin: "clamp(16px, 2vw, 24px) 0 clamp(24px, 3vw, 36px)",
                }}
              >
                {slide.sub}
              </motion.p>
            </AnimatePresence>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            >
              <MagneticLink href="/about">Learn More</MagneticLink>
            </motion.div>
          </div>
        </div>

        {/* ── Indicators ── */}
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
                <div
                  style={{
                    height: "2px",
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderRadius: "2px",
                    marginBottom: "clamp(8px, 1vw, 14px)",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX:
                        i === current && animating ? 1 : i < current ? 1 : 0,
                    }}
                    transition={
                      i === current && animating
                        ? { duration: 7, ease: "linear" }
                        : { duration: 0.01 }
                    }
                    style={{
                      height: "100%",
                      backgroundColor: "#0000FE",
                      borderRadius: "2px",
                      transformOrigin: "left",
                    }}
                  />
                </div>
                <motion.span
                  animate={{
                    color: i === current ? "#fff" : "rgba(255,255,255,0.35)",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: "block",
                    fontSize: "clamp(10px, 1vw, 13px)",
                    fontWeight: i === current ? "500" : "400",
                    letterSpacing: "0.01em",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {s.label}
                </motion.span>
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
