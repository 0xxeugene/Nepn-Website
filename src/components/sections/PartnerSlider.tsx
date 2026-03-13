"use client";

import Image from "next/image";
import { useRef } from "react";

const partners = [
  { name: "NUPRC", description: "Regulatory", logo: "/images/nuprc.jpg" },
  { name: "NMDPRA", description: "Regulatory", logo: "/images/nmpdra.png" },
  { name: "Oando", description: "Oil & Gas", logo: "/images/oando.png" },
  { name: "Seplat", description: "Oil and gas", logo: "/images/seplat.jpg" },
  { name: "FMIT", description: "Government", logo: "/images/fmit.png" },
];

export default function PartnersSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({
      left: dir === "right" ? 160 : -160,
      behavior: "smooth",
    });
  };

  return (
    <section
      style={{
        backgroundColor: "#fff",
        borderTop: "1px solid #f0f0f0",
        borderBottom: "1px solid #f0f0f0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="partners-arrow"
          style={{
            flexShrink: 0,
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid #e5e5e5",
            backgroundColor: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 8px",
            transition: "border-color 0.15s ease, background 0.15s ease",
            zIndex: 2,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "#0000FE";
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "rgba(0,0,254,0.04)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "#e5e5e5";
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#fff";
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 3L5 8l5 5"
              stroke="#111"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {partners.map((partner, i) => (
            <div
              key={i}
              className="partner-card"
              style={{
                flexShrink: 0,
                height: "88px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "14px",
                padding: "0 24px",
                borderRight:
                  i < partners.length - 1 ? "1px solid #f0f0f0" : "none",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "44px",
                  height: "44px",
                  position: "relative",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "3px",
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#111",
                    letterSpacing: "-0.01em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {partner.name}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "#999",
                    whiteSpace: "nowrap",
                  }}
                >
                  {partner.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="partners-arrow"
          style={{
            flexShrink: 0,
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid #e5e5e5",
            backgroundColor: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 8px",
            transition: "border-color 0.15s ease, background 0.15s ease",
            zIndex: 2,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "#0000FE";
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "rgba(0,0,254,0.04)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "#e5e5e5";
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#fff";
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3l5 5-5 5"
              stroke="#111"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }

        .partner-card { width: 20%; }

        @media (max-width: 1024px) {
          .partner-card { width: 25%; }
        }
        @media (max-width: 768px) {
          .partner-card { width: 40%; }
          .partners-arrow { display: none !important; }
        }
        @media (max-width: 480px) {
          .partner-card { width: 56%; }
        }
        @media (max-width: 360px) {
          .partner-card { width: 72%; }
        }
      `}</style>
    </section>
  );
}
