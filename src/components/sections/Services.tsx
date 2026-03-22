"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const pillars = [
  {
    letter: "N",
    bg: "#FE0000",
    title: "NET ZERO COMMITMENT",
    desc: "We are dedicated to achieving net zero emissions, integrating sustainable practices across all our operations.",
  },
  {
    letter: "E",
    bg: "#018001",
    title: "EXCELLENCE IN OPERATIONS",
    desc: "We strive for operational excellence, leveraging advanced technologies and best practices to lead the industry.",
  },
  {
    letter: "P",
    bg: "#0000FE",
    title: "PARTNERSHIPS FOR GROWTH",
    desc: "We build strategic partnerships to drive innovation, expand our portfolio, and enhance our impact.",
  },
  {
    letter: "N",
    bg: "#111",
    title: "NURTURING COMMUNITIES",
    desc: "We prioritise community engagement and support, ensuring our operations contribute positively to local development.",
  },
];

// ── WordReveal ────────────────────────────────────────────────────────────────
function WordReveal({
  text,
  delay = 0,
  stagger = 80,
  duration = 600,
  style,
}: {
  text: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLSpanElement>("[data-wi]");

    const show = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      words.forEach((w, i) => {
        const t = setTimeout(
          () => {
            w.style.transform = "translateY(0)";
            w.style.opacity = "1";
          },
          delay + i * stagger,
        );
        timers.current.push(t);
      });
    };

    const hide = () => {
      timers.current.forEach(clearTimeout);
      words.forEach((w) => {
        w.style.transform = "translateY(110%)";
        w.style.opacity = "0";
      });
    };

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) show();
        else hide();
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => {
      timers.current.forEach(clearTimeout);
      obs.disconnect();
    };
  }, [delay, stagger]);

  return (
    <h2
      ref={ref}
      style={{ ...style, display: "flex", flexWrap: "wrap", gap: "0.26em" }}
    >
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
            padding: "0.06em 0 0.1em",
            margin: "-0.06em 0 -0.1em",
          }}
        >
          <span
            data-wi
            style={{
              display: "inline-block",
              transform: "translateY(110%)",
              opacity: 0,
              willChange: "transform, opacity",
              transitionProperty: "transform, opacity",
              transitionDuration: `${duration}ms, ${duration * 0.85}ms`,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </h2>
  );
}

// ── PillarCard ────────────────────────────────────────────────────────────────
function PillarCard({
  p,
  index,
}: {
  p: (typeof pillars)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Staggered entrance sequence
    const baseDelay = index * 180;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();

        // 1. Card fades + rises with slight rotation
        setTimeout(() => {
          card.style.transition =
            "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1)";
          card.style.opacity = "1";
          card.style.transform = "translateY(0) rotateX(0deg)";
        }, baseDelay);

        // 2. Glow pulse behind badge
        setTimeout(() => {
          const glow = glowRef.current;
          if (!glow) return;
          glow.style.transition =
            "opacity 0.5s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)";
          glow.style.opacity = "1";
          glow.style.transform = "scale(1)";
        }, baseDelay + 200);

        // 3. Badge drops in with spring overshoot
        setTimeout(() => {
          const badge = badgeRef.current;
          if (!badge) return;
          badge.style.transition =
            "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease";
          badge.style.opacity = "1";
          badge.style.transform = "translateY(0) scale(1)";
        }, baseDelay + 280);

        // 4. Letter counter animates (counts up to letter index)
        setTimeout(() => {
          const span = letterRef.current;
          if (!span) return;
          span.style.transition =
            "opacity 0.3s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)";
          span.style.opacity = "1";
          span.style.transform = "scale(1) rotate(0deg)";
        }, baseDelay + 420);

        // 5. Title slices in from left
        setTimeout(() => {
          const title = titleRef.current;
          if (!title) return;
          title.style.transition =
            "transform 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease, letter-spacing 0.6s ease";
          title.style.opacity = "1";
          title.style.transform = "translateX(0)";
          title.style.letterSpacing = "0.04em";
        }, baseDelay + 500);

        // 6. Desc fades up softly
        setTimeout(() => {
          const desc = descRef.current;
          if (!desc) return;
          desc.style.transition =
            "transform 0.7s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease";
          desc.style.opacity = "1";
          desc.style.transform = "translateY(0)";
        }, baseDelay + 620);

        // 7. Shimmer sweep across card
        setTimeout(() => {
          const shimmer = shimmerRef.current;
          if (!shimmer) return;
          shimmer.style.transition =
            "transform 0.85s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease";
          shimmer.style.transform = "translateX(400px) skewX(-12deg)";
          shimmer.style.opacity = "0";
          setTimeout(() => {
            shimmer.style.transition = "none";
            shimmer.style.transform = "translateX(-120px) skewX(-12deg)";
            shimmer.style.opacity = "0.6";
          }, 900);
        }, baseDelay + 700);
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    );

    obs.observe(card);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="pc"
      style={
        {
          "--pc": p.bg,
          opacity: 0,
          transform: "translateY(48px) rotateX(8deg)",
          transformOrigin: "top center",
        } as React.CSSProperties
      }
    >
      {/* Shimmer sweep */}
      <div
        ref={shimmerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "80px",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
          transform: "translateX(-120px) skewX(-12deg)",
          opacity: 0.6,
          zIndex: 3,
          pointerEvents: "none",
          borderRadius: "12px",
        }}
      />

      {/* Glow behind badge */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          top: "18px",
          left: "18px",
          width: "68px",
          height: "68px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${p.bg}55 0%, transparent 70%)`,
          filter: "blur(8px)",
          opacity: 0,
          transform: "scale(0.4)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div className="pc-inner">
        <div
          ref={badgeRef}
          className="pc-badge"
          style={{
            opacity: 0,
            transform: "translateY(-20px) scale(0.7)",
          }}
        >
          <span
            ref={letterRef}
            style={{
              opacity: 0,
              transform: "scale(0.5) rotate(-15deg)",
              display: "inline-block",
            }}
          >
            {p.letter}
          </span>
        </div>

        <h4
          ref={titleRef}
          className="pc-title"
          style={{
            opacity: 0,
            transform: "translateX(-16px)",
            letterSpacing: "0.12em",
          }}
        >
          {p.title}
        </h4>

        <p
          ref={descRef}
          className="pc-desc"
          style={{
            opacity: 0,
            transform: "translateY(12px)",
          }}
        >
          {p.desc}
        </p>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Sustainability() {
  const topImgInnerRef = useRef<HTMLDivElement>(null);
  const bottomImgInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert(): void } | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        if (topImgInnerRef.current) {
          gsap.fromTo(
            topImgInnerRef.current,
            { y: "-10%" },
            {
              y: "10%",
              ease: "none",
              scrollTrigger: {
                trigger: topImgInnerRef.current.closest(".sustain-top-img"),
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }

        if (bottomImgInnerRef.current) {
          gsap.fromTo(
            bottomImgInnerRef.current,
            { y: "-15%" },
            {
              y: "15%",
              ease: "none",
              scrollTrigger: {
                trigger: bottomImgInnerRef.current.closest(".sustain-bottom"),
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      });
    })();
    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Top image */}
      <div
        className="sustain-top-img"
        style={{
          position: "relative",
          width: "100%",
          height: "260px",
          overflow: "hidden",
        }}
      >
        <div
          ref={topImgInnerRef}
          style={{
            position: "absolute",
            inset: "-12% 0",
            willChange: "transform",
          }}
        >
          <Image
            src="/images/nepn-image-three.jpg"
            alt="Sustainability"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.25)",
            zIndex: 1,
          }}
        />
      </div>

      {/* Pillars */}
      <div
        className="sustain-pillars-wrap"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px",
          boxSizing: "border-box",
          position: "relative",
          marginTop: "-60px",
          zIndex: 2,
        }}
      >
        <div
          className="pillars-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
          }}
        >
          {pillars.map((p, i) => (
            <PillarCard key={i} p={p} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div
        className="sustain-bottom"
        style={{ position: "relative", marginTop: "-120px" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          <div
            ref={bottomImgInnerRef}
            style={{
              position: "absolute",
              inset: "-18% 0",
              willChange: "transform",
            }}
          >
            <Image
              src="/images/sustainability-section.jpg"
              alt="Sustainability operations"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(1,6,26,0.75) 0%, rgba(1,6,26,0.45) 25%, rgba(1,6,26,0.35) 45%, rgba(1,6,26,0.7) 65%, rgba(1,6,26,0.97) 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        <div
          className="sustain-bottom-content"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "96px 48px 420px",
            boxSizing: "border-box",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 48, scale: 0.97, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ maxWidth: "480px" }}
          >
            <WordReveal
              text="Sustainability at NEPN"
              delay={0}
              stagger={90}
              style={{
                fontSize: "clamp(28px, 4vw, 64px)",
                fontWeight: "500",
                color: "#fff",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                paddingTop: "48px",
                marginBottom: "20px",
              }}
            />

            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.5,
                marginBottom: "32px",
              }}
            >
              At NEPN, sustainability is more than a goal — it is a fundamental
              part of who we are and how we operate. We are deeply committed to
              responsible practices that promote...
            </p>

            <Link
              href="/sustainability"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#0000FE",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
                padding: "12px 24px",
                borderRadius: "999px",
                transition: "opacity 0.15s ease, transform 0.15s ease",
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
              About our sustainability
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

      <style>{`
        .pc {
          padding: 28px 24px;
          background: #fff;
          border-radius: 12px;
          border: 1px solid #ececec;
          box-shadow:
            0 2px 4px rgba(0,0,0,0.03),
            0 8px 24px rgba(0,0,0,0.05),
            0 0 0 0px transparent;
          cursor: default;
          position: relative;
          overflow: hidden;
          perspective: 800px;
        }

        .pc-inner {
          position: relative;
          z-index: 1;
        }

        .pc-badge {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--pc);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          box-shadow:
            0 4px 12px color-mix(in srgb, var(--pc) 35%, transparent),
            0 1px 3px rgba(0,0,0,0.12);
        }

        .pc-badge span {
          color: #fff;
          font-size: 24px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.02em;
          display: inline-block;
        }

        .pc-title {
          font-size: 12px;
          font-weight: 700;
          color: #0a0a0f;
          letter-spacing: 0.04em;
          margin-bottom: 10px;
          text-transform: uppercase;
          line-height: 1.3;
        }

        .pc-desc {
          font-size: 13px;
          color: #888;
          line-height: 1.7;
        }

        /* Bottom accent line draws in on entrance */
        .pc-accent-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0%;
          background: linear-gradient(90deg, var(--pc), color-mix(in srgb, var(--pc) 40%, transparent));
          border-radius: 0 0 12px 12px;
          animation: drawLine 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-play-state: paused;
          z-index: 2;
        }

        .pc[style*="opacity: 1"] .pc-accent-line,
        .pc[style*="opacity:1"] .pc-accent-line {
          animation-play-state: running;
        }

        @keyframes drawLine {
          from { width: 0%; opacity: 0; }
          to   { width: 100%; opacity: 1; }
        }

        @media (max-width: 1024px) {
          .sustain-pillars-wrap { padding: 0 40px !important; }
          .sustain-bottom-content { padding: 80px 40px 360px !important; }
        }
        @media (max-width: 768px) {
          .sustain-top-img { height: 200px !important; }
          .sustain-pillars-wrap { padding: 0 24px !important; margin-top: -40px !important; }
          .pillars-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sustain-bottom { margin-top: -40px !important; }
          .sustain-bottom-content { padding: 64px 24px 280px !important; }
        }
        @media (max-width: 480px) {
          .sustain-top-img { height: 160px !important; }
          .sustain-pillars-wrap { padding: 0 16px !important; margin-top: -24px !important; }
          .pillars-grid { grid-template-columns: 1fr !important; }
          .sustain-bottom-content { padding: 48px 16px 220px !important; }
        }
        @media (max-width: 360px) {
          .sustain-bottom-content { padding: 40px 16px 180px !important; }
        }
      `}</style>
    </section>
  );
}
