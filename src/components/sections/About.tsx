"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { WordReveal } from "../WordReveal";

// // ─── FIX 1: Animate per-line, not per-character ───────────────────────────
// // Per-character splits create 40–60 motion nodes. Animating per-line keeps
// // the DOM lean while preserving the reveal feel.
// function AnimatedLine({ text, delay = 0 }: { text: string; delay?: number }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-40px" }}
//       transition={{
//         duration: 0.6,
//         delay,
//         ease: [0.21, 0.47, 0.32, 0.98],
//       }}
//       style={{ display: "block", lineHeight: 1.15, willChange: "transform" }}
//     >
//       {text}
//     </motion.div>
//   );
// }

// ─── FIX 2: Magnetic button — remove child whileHover animation ───────────
// The shimmer span was JS-driven on every hover. Replace with a CSS
// keyframe so it runs entirely on the compositor thread.
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
        gap: "8px",
        backgroundColor: "#0000FE",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "600",
        textDecoration: "none",
        padding: "13px 26px",
        borderRadius: "999px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        // FIX: promote to own layer so spring transform stays on compositor
        willChange: "transform",
      }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* CSS shimmer — zero JS overhead on hover */}
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

export default function AboutSection() {
  const sectionRef = useRef(null);

  // ─── FIX 3: One shared scrollYProgress, not multiple useTransform chains ──
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Keep deco shape transforms but reduce chain depth
  const decoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1.3, 0.5]);
  const decoOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.88, 1],
    [0, 1, 1, 0],
  );
  const decoX = useTransform(scrollYProgress, [0, 0.45, 1], [200, 0, 80]);

  // ─── FIX 4: Parallax capped to transform-only (no layout thrash) ─────────
  // imageY drives a `translateY` on the wrapper — no height/inset changes.
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      className="about-section"
      style={{
        backgroundColor: "#fff",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grain texture */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.025,
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
          mixBlendMode: "multiply",
        }}
      />

      {/* Decorative shape */}
      <motion.div
        className="about-deco"
        style={{
          position: "absolute",
          top: "50%",
          right: "-20px",
          translateY: "-50%",
          width: "360px",
          height: "92%",
          zIndex: 0,
          pointerEvents: "none",
          scale: decoScale,
          opacity: decoOpacity,
          x: decoX,
          // FIX: own compositing layer — scroll-linked transforms stay off main thread
          willChange: "transform, opacity",
        }}
      >
        <Image
          src="/images/Group-one.png"
          alt=""
          fill
          style={{ objectFit: "contain", objectPosition: "right center" }}
        />
      </motion.div>

      <div
        className="about-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          gap: "60px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Left: Text ── */}
        <div className="about-text" style={{ flex: "1.1", minWidth: 0 }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                color: "rgba(0,0,0,0.45)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Who we are
            </span>
          </motion.div>

          {/* ─── FIX 1 applied: 2 motion nodes instead of ~50 ─── */}
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 64px)",
              fontWeight: "600",
              color: "#0a0a0f",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: "0 0 28px",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.28em",
            }}
          >
            <WordReveal
              as="span"
              text="History, Mission"
              stagger={90}
              delay={0}
            />
            <WordReveal as="span" text="& Values" stagger={90} delay={300} />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            style={{
              fontSize: "15px",
              color: "#555",
              lineHeight: 2.2,
              marginBottom: "40px",
              maxWidth: "460px",
            }}
          >
            Welcome to Network E&amp;P Nigeria Limited (NEPN), a fully
            Nigerian-owned oil and gas company dedicated to promoting
            sustainable energy solutions throughout Nigeria. Since our
            establishment, we have been at the forefront of exploring and
            developing the Qua Iboe field, playing a vital role in meeting the
            nation&apos;s energy needs.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <MagneticLink href="/about">Explore our capabilities</MagneticLink>
          </motion.div>
        </div>

        {/* ── Right: Image ── */}
        <motion.div
          initial={{ opacity: 0, x: 60, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 1,
            ease: [0.21, 0.47, 0.32, 0.98],
            delay: 0.2,
          }}
          className="about-image"
          style={{
            flex: "0 0 48%",
            minWidth: 0,
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* ─── FIX 5: CSS animation blob instead of JS keyframe loop ─── */}
          <div
            aria-hidden
            className="blob-accent"
            style={{
              position: "absolute",
              top: "8%",
              right: "-5%",
              width: "55%",
              aspectRatio: "1",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,0,254,0.12) 0%, transparent 70%)",
              zIndex: 0,
              pointerEvents: "none",
              filter: "blur(24px)",
              // animation handled in <style> block below — zero JS overhead
            }}
          />

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3/4",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,254,0.08)",
              border: "6px solid #fff",
              marginLeft: "auto",
              zIndex: 1,
            }}
          >
            {/* ─── FIX 4: Parallax via transform only — no layout changes ─── */}
            <motion.div
              style={{
                y: imageY,
                position: "absolute",
                inset: 0,
                willChange: "transform",
              }}
            >
              <Image
                src="/images/nepn-image-three.jpg"
                alt="NEPN Operations"
                fill
                style={{ objectFit: "cover" }}
              />
            </motion.div>

            {/* Overlay shimmer on hover — CSS only */}
            <div className="img-overlay" aria-hidden />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        /* ── Blob float: CSS animation, zero JS ── */
        .blob-accent {
          animation: blobFloat 6s ease-in-out infinite;
        }
        @keyframes blobFloat {
          0%, 100% { transform: translateY(0)   rotate(0deg); }
          50%       { transform: translateY(-12px) rotate(3deg); }
        }

        /* ── Image overlay: CSS transition, no motion node ── */
        .img-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(135deg, rgba(0,0,254,0.06) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .about-image:hover .img-overlay { opacity: 1; }

        /* ── Button shimmer: CSS animation, no JS hover listener ── */
        .btn-shimmer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255,255,255,0.5) 50%,
            transparent 60%
          );
          transform: translateX(-100%);
          transition: none;
        }
        a:hover .btn-shimmer {
          animation: shimmerSlide 0.5s ease-in-out forwards;
        }
        @keyframes shimmerSlide {
          from { transform: translateX(-100%); }
          to   { transform: translateX(200%); }
        }

        /* ── Responsive ── */
        .about-deco { display: block; }
        @media (max-width: 1024px) {
          .about-inner { padding: 0 40px !important; gap: 40px !important; }
          .about-deco  { width: 500px !important; }
        }
        @media (max-width: 768px) {
          .about-section { padding: 72px 0 !important; }
          .about-inner {
            flex-direction: column !important;
            padding: 0 24px !important;
            gap: 40px !important;
            align-items: flex-start !important;
          }
          .about-text  { flex: unset !important; width: 100% !important; }
          .about-image { display: none !important; }
          .about-deco  { display: none !important; }
        }
        @media (max-width: 480px) {
          .about-section { padding: 56px 0 !important; }
          .about-inner   { padding: 0 20px !important; gap: 32px !important; }
        }
        @media (max-width: 360px) {
          .about-inner   { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  );
}
