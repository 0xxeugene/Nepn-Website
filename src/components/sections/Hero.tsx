"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";

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
    image: "/images/bg-hero-three.jpg",
    label: "Transform Resources",
    heading: ["Transform Resource", "into Opportunities"],
    sub: "By transforming natural resources into sustainable energy, we create opportunities for industries and future generations.",
  },
];

// ─── Premium heading reveal ───────────────────────────────────────────────────
// What makes it feel expensive:
//   1. Per-character split, not per-word — tighter, more cinematic
//   2. Long duration (0.95s) with a custom ease that decelerates hard at the end
//   3. Slight Y overshoot: words travel 120% then settle — gives weight
//   4. Skew on enter: each char starts skewed -8deg and straightens to 0
//      This is the "Awwwards" trick — adds dimensionality without 3D
//   5. Very tight stagger (0.035s) so it reads as one fluid motion, not a list
//   6. Exit: chars fall down with blur — opposite direction creates depth
const HeadingReveal = memo(function HeadingReveal({
  lines,
  slideId,
}: {
  lines: string[];
  slideId: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    (async () => {
      const { gsap } = await import("gsap");
      const el = ref.current;
      if (!el) return;

      tlRef.current?.kill();

      const chars = el.querySelectorAll<HTMLSpanElement>("[data-char]");

      // Hard-reset: no flash, no residue from last slide
      gsap.set(chars, {
        y: "115%",
        opacity: 0,
        skewX: -10,
        rotateX: 25,
        transformOrigin: "left bottom",
      });

      tlRef.current = gsap.timeline({ delay: 0.08 });

      tlRef.current.to(chars, {
        y: "0%",
        opacity: 1,
        skewX: 0,
        rotateX: 0,
        duration: 0.9,
        // Custom ease: fast departure, long deceleration — feels heavy and confident
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        stagger: {
          amount: 0.55, // total stagger spread across ALL chars
          ease: "power2.out", // front-loaded so early chars lead decisively
        },
      });
    })();

    return () => {
      tlRef.current?.kill();
    };
  }, [slideId]);

  return (
    <div ref={ref} style={{ perspective: "800px" }}>
      {lines.map((line, li) => (
        <div
          key={li}
          style={{
            display: "flex",
            flexWrap: "wrap",
            columnGap: "0.15em", // ← was 0.28em, tighter now
            lineHeight: 1.1,
            marginBottom: li < lines.length - 1 ? "0.08em" : 0,
          }}
        >
          {line.split(" ").map((word, wi, arr) => (
            <span
              key={wi}
              style={{
                display: "inline-flex",
                overflow: "hidden",
                verticalAlign: "bottom",
                padding: "0.06em 0 0.14em",
                margin: "-0.06em 0 -0.14em",
              }}
            >
              {word.split("").map((char, ci) => (
                <span
                  key={ci}
                  data-char
                  style={{
                    display: "inline-block",
                    willChange: "transform, opacity",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {char}
                </span>
              ))}
              {/* Space as a real animated char so it's inside the mask and consistent */}
              {wi < arr.length - 1 && (
                <span
                  data-char
                  style={{
                    display: "inline-block",
                    willChange: "transform, opacity",
                    transformStyle: "preserve-3d",
                  }}
                >
                  &nbsp;
                </span>
              )}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
});

// ─── Sub text ─────────────────────────────────────────────────────────────────
// Long delay lets heading finish first — staggered reading order
function SubReveal({ text, slideId }: { text: string; slideId: number }) {
  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={slideId + "-sub"}
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{
          opacity: 0,
          y: -6,
          filter: "blur(4px)",
          transition: { duration: 0.22, ease: "easeIn" },
        }}
        transition={{
          duration: 0.8,
          delay: 0.72,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          fontSize: "clamp(13px, 1.1vw, 16px)",
          color: "rgba(255,255,255,0.62)",
          maxWidth: "380px",
          lineHeight: 1.8,
          margin: "clamp(16px, 2vw, 24px) 0 clamp(24px, 3vw, 36px)",
          willChange: "opacity, transform, filter",
          letterSpacing: "0.01em",
        }}
      >
        {text}
      </motion.p>
    </AnimatePresence>
  );
}

// ─── Magnetic CTA ─────────────────────────────────────────────────────────────
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
      <span className="btn-shimmer" aria-hidden />
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

// ─── Slide indicator ─────────────────────────────────────────────────────────
function Indicator({
  slide,
  index,
  current,
  duration,
  onClick,
}: {
  slide: (typeof slides)[number];
  index: number;
  current: number;
  total: number;
  duration: number;
  onClick: () => void;
}) {
  const isActive = index === current;
  const isPast = index < current;

  return (
    <button
      onClick={onClick}
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
          position: "relative",
        }}
      >
        {isPast && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(255,255,255,0.4)",
              borderRadius: "2px",
            }}
          />
        )}
        {isActive && (
          <motion.div
            key={`bar-${current}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration, ease: "linear" }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#0000FE",
              borderRadius: "2px",
              transformOrigin: "left",
              willChange: "transform",
            }}
          />
        )}
      </div>
      <motion.span
        animate={{ color: isActive ? "#fff" : "rgba(255,255,255,0.35)" }}
        transition={{ duration: 0.3 }}
        style={{
          display: "block",
          fontSize: "clamp(10px, 1vw, 13px)",
          fontWeight: isActive ? "500" : "400",
          letterSpacing: "0.01em",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {slide.label}
      </motion.span>
    </button>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const [current, setCurrent] = useState(0);
  const DURATION = 7;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, DURATION * 1000);
    return () => clearInterval(timer);
  }, []);

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
      {/* ── Background images ── */}
      {slides.map((s, i) => (
        <motion.div
          key={s.id}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            willChange: "opacity",
          }}
        >
          <motion.div
            animate={i === current ? { scale: 1 } : { scale: 1.15 }}
            initial={{ scale: 1.15 }}
            transition={{ duration: DURATION, ease: "linear" }}
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
        aria-hidden
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
        aria-hidden
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
            <h1
              style={{
                // fontSize: "clamp(36px, 5vw, 72px)",
                fontSize: "clamp(28px, 4vw, 64px)",
                fontWeight: "600",
                color: "#fff",
                lineHeight: 1.0,
                letterSpacing: "-0.035em",
                margin: "0 0 clamp(12px, 1.5vw, 20px)",
              }}
            >
              <HeadingReveal
                key={slide.id}
                lines={slide.heading}
                slideId={slide.id}
              />
            </h1>

            <SubReveal text={slide.sub} slideId={slide.id} />

            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
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
              <Indicator
                key={s.id}
                slide={s}
                index={i}
                current={current}
                total={slides.length}
                duration={DURATION}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .btn-shimmer {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%);
          transform: translateX(-100%);
        }
        a:hover .btn-shimmer {
          animation: shimmer 0.5s ease-in-out forwards;
        }
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to   { transform: translateX(200%); }
        }
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
