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
  },
  {
    id: 2,
    image: "/images/bg-hero-two.jpg",
    label: "Excellence in Operations",
    heading: ["Excellence", "in Operations"],
    sub: "Our operations are built on safety, innovation, and efficiency to deliver reliable energy solutions every day.",
  },
  {
    id: 3,
    image: "/images/bg-hero-three.png",
    label: "Transform Resources",
    heading: ["Transform Resource", "into Opportunities"],
    sub: "By transforming natural resources into sustainable energy, we create opportunities for industries and future generations.",
  },
];

// ─── Per-character reveal — only runs on MOUNT, not on every re-render ───────
// Wrapped in memo so it never re-renders unless text changes.
import { memo } from "react";

const SplitText = memo(function SplitText({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          // No exit animation — parent handles exit with opacity fade,
          // avoiding per-char exit which doubles the animation work.
          transition={{
            duration: 0.45,
            delay: delay + i * 0.018,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            display: "inline-block",
            // translateY is GPU-composited, no layout
            willChange: "transform, opacity",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </>
  );
});

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

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - (rect.left + rect.width / 2)) * 0.35);
        y.set((e.clientY - (rect.top + rect.height / 2)) * 0.35);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
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
        willChange: "transform",
      }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.span
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ x: "200%", opacity: 0.25 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
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

  useEffect(() => {
    setAnimating(false);
    const t = setTimeout(() => setAnimating(true), 50);
    return () => clearTimeout(t);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []); // ← no [current] dep — interval never resets

  const goTo = (i: number) => {
    if (i === current) return;
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
      {/* ── Background images ────────────────────────────────────────────────
          Strategy: all 3 images always in the DOM (no mount/unmount cost).
          Active slide fades in with opacity only — GPU composited, zero layout.
          Zoom uses transform: scale() — also GPU only.
          Previous image fades out simultaneously for a clean crossfade.
      ─────────────────────────────────────────────────────────────────────── */}
      {slides.map((s, i) => (
        <motion.div
          key={s.id}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            willChange: "opacity",
          }}
        >
          <motion.div
            // Only animate scale when this slide is active
            animate={i === current ? { scale: 1 } : { scale: 1.15 }}
            initial={{ scale: 1.15 }}
            transition={{ duration: 7, ease: "linear" }}
            style={{
              position: "absolute",
              inset: "-4px",
              backgroundImage: `url('${s.image}')`,
              backgroundSize: "cover",
              backgroundPosition: s.id === 3 ? "right center" : "center",
              filter:
                s.id === 3
                  ? "contrast(1.05) saturate(1.1) brightness(0.85)"
                  : "contrast(1.15) saturate(1.2) brightness(0.55)",
              transform:
                s.id === 3
                  ? "scaleX(-1) perspective(900px) rotateY(8deg)"
                  : undefined,
              transformOrigin: "center center",
              willChange: "transform",
            }}
          />
        </motion.div>
      ))}

      {/* Noise grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          opacity: 0.04,
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Gradient overlay */}
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
            {/* Heading — SplitText only re-mounts on slide change via key,
                exits as a single opacity fade (no per-char exit cost) */}
            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: "600",
                color: "#fff",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                margin: "0 0 clamp(12px, 1.5vw, 20px)",
                perspectiveOrigin: "50% 50%",
                transformStyle: "preserve-3d",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id + "-h"}
                  exit={{
                    opacity: 0,
                    y: -16,
                    transition: { duration: 0.25, ease: "easeIn" },
                  }}
                  style={{ willChange: "opacity, transform" }}
                >
                  {slide.heading.map((line, li) => (
                    <div
                      key={li}
                      style={{
                        overflow: "hidden",
                        display: "block",
                        lineHeight: 1.12,
                      }}
                    >
                      <SplitText text={line} delay={li * 0.06} />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </h1>

            {/* Subtext — simple fade, no split chars */}
            <AnimatePresence mode="wait">
              <motion.p
                key={slide.id + "-sub"}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                style={{
                  fontSize: "clamp(13px, 1.1vw, 16px)",
                  color: "rgba(255,255,255,0.65)",
                  maxWidth: "380px",
                  lineHeight: 1.75,
                  margin: "clamp(16px, 2vw, 24px) 0 clamp(24px, 3vw, 36px)",
                  willChange: "opacity, transform",
                }}
              >
                {slide.sub}
              </motion.p>
            </AnimatePresence>

            {/* CTA — only animates once on mount */}
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
                      willChange: "transform",
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
