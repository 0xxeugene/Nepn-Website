"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

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

  // const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.08, 0.85]);
  // const opacity = useTransform(
  //   scrollYProgress,
  //   [0, 0.2, 0.8, 1],
  //   [0.3, 1, 1, 0.3],
  // );
  // const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);

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
        {/* Spacer */}
        <div
          className="contact-spacer"
          style={{ width: "260px", flexShrink: 0 }}
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          style={{ flex: 1, minWidth: 0 }}
        >
          <p
            className="contact-label"
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#000000A8",
              marginBottom: "12px",
            }}
          >
            Network E&P Nigeria Limited (NEPN)
          </p>

          <h2
            style={{
              fontSize: "clamp(28px, 4.5vw, 64px)",
              fontWeight: "500",
              color: "#0a0a0f",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "32px",
            }}
          >
            The Leading
            <br />
            indigenous
            <br />
            oil and gas player
          </h2>

          <Link
            href="/contact"
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
            Contact us
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
            width: 320px !important;
            height: 320px !important;
            top: -160px !important;
            left: -60px !important;
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
