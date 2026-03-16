"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

export default function Sustainability() {
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
        style={{ position: "relative", width: "100%", height: "260px" }}
      >
        <Image
          src="/images/nepn-image-three.jpg"
          alt="Sustainability"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.25)",
          }}
        />
      </div>

      {/* Pillars card */}
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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.12,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              style={{
                padding: "28px 24px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                border: "1px solid #f0f0f0",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                cursor: "default",
              }}
            >
              {/* Letter badge — larger, more emphatic */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  backgroundColor: p.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    color: "#fff",
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.letter}
                </span>
              </div>

              <h4
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#0a0a0f",
                  letterSpacing: "0.04em",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  lineHeight: 1.3,
                }}
              >
                {p.title}
              </h4>

              <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.7 }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div
        className="sustain-bottom"
        style={{ position: "relative", marginTop: "-80px" }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/sustainability-section.jpg"
            alt="Sustainability operations"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

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
            transition={{
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{ maxWidth: "480px" }}
          >
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 64px)",
                fontWeight: "500",
                color: "#fff",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "20px",
              }}
            >
              Sustainability at NEPN
            </h2>

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
