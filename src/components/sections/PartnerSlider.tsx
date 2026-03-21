"use client";

import Image from "next/image";

const partners = [
  { name: "NUPRC", description: "Regulatory", logo: "/images/nuprc.jpg" },
  { name: "NMDPRA", description: "Regulatory", logo: "/images/nmpdra.png" },
  { name: "Oando", description: "Oil & Gas", logo: "/images/oando.png" },
  { name: "Seplat", description: "Oil and gas", logo: "/images/seplat.jpg" },
  { name: "FMIT", description: "Government", logo: "/images/fmit.png" },
];

export default function PartnersSlider() {
  const showArrows = partners.length > 5;

  return (
    <section
      style={{
        backgroundColor: "#fff",
        borderTop: "1px solid #f0f0f0",
        borderBottom: "1px solid #f0f0f0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          gap: showArrows ? "8px" : "0",
        }}
      >
        {/* Track */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: `repeat(${partners.length}, 1fr)`,
          }}
        >
          {partners.map((partner, i) => (
            <div
              key={i}
              style={{
                height: "96px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                borderRight:
                  i < partners.length - 1 ? "1px solid #f0f0f0" : "none",
                padding: "0 20px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "40px",
                  height: "40px",
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
      </div>

      <style>{`
        @media (max-width: 768px) {
          .partners-track {
            display: flex !important;
            overflow-x: auto !important;
            scrollbar-width: none;
          }
          .partners-track::-webkit-scrollbar { display: none; }
          .partners-track > div {
            flex-shrink: 0;
            width: 44vw;
            border-right: 1px solid #f0f0f0 !important;
          }
        }
        @media (max-width: 480px) {
          .partners-track > div { width: 60vw; }
        }
      `}</style>
    </section>
  );
}
