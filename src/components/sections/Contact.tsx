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

function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, rotateX: -40 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.55,
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
      }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.span
        initial={{ x: "-100%" }}
        whileHover={{ x: "200%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)",
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

export default function ContactBanner() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.4, 1], [-180, 0, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.9, 1, 0.95]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.4],
  );

  return (
    <section
      ref={sectionRef}
      className="contact-section"
      style={{
        backgroundColor: "#fff",
        position: "relative",
        overflow: "hidden",
        padding: "80px 0 0",
      }}
    >
      {/* Grain texture */}
      <div
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

      {/* Decorative ring */}
      <motion.div
        className="contact-deco"
        style={{
          position: "absolute",
          top: "-280px",
          left: "-80px",
          width: "620px",
          height: "620px",
          zIndex: 0,
          pointerEvents: "none",
          x,
          scale,
          opacity,
        }}
      >
        <Image
          src="/images/Group-two.png"
          alt=""
          fill
          style={{ objectFit: "contain", objectPosition: "left top" }}
        />
      </motion.div>

      {/* Content */}
      <div
        className="contact-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px 80px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          gap: "0",
        }}
      >
        <div
          className="contact-spacer"
          style={{ width: "260px", flexShrink: 0 }}
        />

        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="contact-label"
            style={{
              fontSize: "11px",
              fontWeight: "600",
              color: "rgba(0,0,0,0.4)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Network E&amp;P Nigeria Limited (NEPN)
          </motion.p>

          {/* Heading — character split */}
          <h2
            style={{
              fontSize: "clamp(28px, 4.5vw, 64px)",
              fontWeight: "600",
              color: "#0a0a0f",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: "0 0 16px",
              transformStyle: "preserve-3d",
            }}
          >
            {["The Leading", "indigenous", "oil and gas player"].map(
              (line, li) => (
                <div
                  key={li}
                  style={{
                    display: "block",
                    overflow: "hidden",
                    lineHeight: 1.15,
                  }}
                >
                  <SplitText text={line} delay={li * 0.08} />
                </div>
              ),
            )}
          </h2>

          {/* Animated rule */}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
          >
            <MagneticLink href="/contact">Contact us</MagneticLink>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient border */}
      <div
        style={{
          width: "100%",
          height: "12px",
          background:
            "linear-gradient(to right, #FE0000 0%, #0000FE 50%, #FE0000 100%)",
        }}
      />

      <style>{`
        @media (max-width: 1024px) {
          .contact-inner { padding: 0 40px 72px !important; }
          .contact-spacer { width: 180px !important; }
          .contact-deco { width: 500px !important; height: 500px !important; }
        }
        @media (max-width: 768px) {
          .contact-section { padding: 60px 0 0 !important; }
          .contact-inner {
            padding: 0 24px 60px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .contact-spacer { display: none !important; }
          .contact-deco {
            width: 320px !important; height: 320px !important;
            top: -160px !important; left: -60px !important;
          }
          .contact-label { font-size: 15px !important; }
        }
        @media (max-width: 480px) {
          .contact-section { padding: 48px 0 0 !important; }
          .contact-inner { padding: 0 20px 48px !important; }
          .contact-deco { display: none !important; }
        }
        @media (max-width: 360px) {
          .contact-inner { padding: 0 16px 40px !important; }
        }
      `}</style>
    </section>
  );
}
