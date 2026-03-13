"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.25, 0.6]);
  // const opacity = useTransform(
  //   scrollYProgress,
  //   [0, 0.15, 0.85, 1],
  //   [0, 1, 1, 0],
  // );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1.3, 0.5]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.88, 1],
    [0, 1, 1, 0],
  );
  const x = useTransform(scrollYProgress, [0, 0.45, 1], [200, 0, 80]);

  return (
    <section
      ref={sectionRef}
      className="about-section"
      style={{
        backgroundColor: "#fff",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
          scale,
          opacity,
          x,
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
        {/* Left — Text */}
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="about-text"
          style={{ flex: "1.1", minWidth: 0 }}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: "500",
              color: "#000000A8",
              marginBottom: "12px",
              letterSpacing: "0.01em",
            }}
          >
            Who we are
          </p>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 60px)",
              fontWeight: "500",
              color: "#0a0a0f",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "24px",
            }}
          >
            History, Mission
            <br />& Values
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#666",
              lineHeight: 2.5,
              marginBottom: "36px",
              maxWidth: "460px",
            }}
          >
            Welcome to Network E&P Nigeria Limited (NEPN), a fully
            Nigerian-owned oil and gas company dedicated to promoting
            sustainable energy solutions throughout Nigeria. Since our
            establishment, we have been at the forefront of exploring and
            developing the Qua Iboe field, playing a vital role in meeting the
            nation&apos;s energy needs.....
          </p>

          <Link
            href="/about"
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
            Explore our capabilities
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

        {/* Right — Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="about-image"
          style={{
            flex: "0 0 36%",
            minWidth: 0,
            position: "relative",
            zIndex: 2,
            marginRight: "-48px",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              position: "relative",
              width: "92%",
              aspectRatio: "3/4",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(0,0,0,0.12)",
              border: "6px solid #fff",
              marginLeft: "auto",
            }}
          >
            <Image
              src="/images/nepn-image-three.jpg"
              alt="NEPN Operations"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .about-deco { display: block; }
        @media (max-width: 1024px) {
          .about-inner { padding: 0 40px !important; gap: 40px !important; }
          .about-deco { width: 500px !important; }
        }
        @media (max-width: 768px) {
          .about-section { padding: 72px 0 !important; }
          .about-inner {
            flex-direction: column !important;
            padding: 0 24px !important;
            gap: 40px !important;
            align-items: flex-start !important;
          }
          .about-text { flex: unset !important; width: 100% !important; }
          .about-image { display: none !important; }
          .about-deco { display: none !important; }
        }
        @media (max-width: 480px) {
          .about-section { padding: 56px 0 !important; }
          .about-inner { padding: 0 20px !important; gap: 32px !important; }
        }
        @media (max-width: 360px) {
          .about-inner { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  );
}
