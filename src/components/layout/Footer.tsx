"use client";

// import { useSendEmails } from "@/hooks/email";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface FormData {
  email: string;
}

export default function Footer() {
  const [formData, setFormData] = useState<FormData>({ email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isPending = false;

  const handleSubmit = () => {
    setFormData({ email: "" });
    setSubmitted(true);
  };

  const linkStyle: React.CSSProperties = {
    color: "rgba(255,255,255,0.38)",
    fontSize: "13.5px",
    textDecoration: "none",
    lineHeight: "2.4",
    transition: "color 0.2s ease",
    display: "block",
  };

  const contactRowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    color: "rgba(255,255,255,0.42)",
    fontSize: "13.5px",
    lineHeight: "1.7",
    marginBottom: "16px",
  };

  const iconStyle: React.CSSProperties = {
    flexShrink: 0,
    marginTop: "3px",
    color: "rgba(255,255,255,0.3)",
  };

  const headingStyle: React.CSSProperties = {
    color: "rgba(255,255,255,0.96)",
    fontSize: "10px",
    fontWeight: "700",
    marginBottom: "24px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
  };

  return (
    <footer
      className="footer-root"
      style={{
        backgroundColor: "#161616",
        color: "rgba(255,255,255,0.42)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          width: "100%",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)",
        }}
      />

      <div
        className="footer-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 48px 0",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Main grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 0.9fr 1.5fr",
            gap: "80px",
            paddingBottom: "64px",
          }}
        >
          {/* Col 1 — Brand */}
          <div>
            <div style={{ marginBottom: "24px" }}>
              <Image
                src="/images/logo-footer.png"
                alt="NEPN Logo"
                width={52}
                height={52}
              />
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.32)",
                lineHeight: "2",
                maxWidth: "220px",
              }}
            >
              A leading indigenous oil and gas company, established in 2001.
              Dedicated to responsibly harnessing Nigeria&apos;s energy
              resources with a proven track record in OML 13.
            </p>

            {/* Small blue accent rule */}
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 style={headingStyle}>Quick Links</h4>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Who we are", href: "/about" },
                { label: "Sustainability", href: "/sustainability" },
                { label: "Operations", href: "/operations" },
                { label: "Partners", href: "/partners" },
                { label: "News & Insights", href: "/news" },
                { label: "Contact us", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    (e.currentTarget as HTMLAnchorElement).style.paddingLeft =
                      "6px";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.38)";
                    (e.currentTarget as HTMLAnchorElement).style.paddingLeft =
                      "0px";
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contact + Newsletter */}
          <div>
            <h4 style={headingStyle}>Contact</h4>

            <div style={contactRowStyle}>
              <svg
                style={iconStyle}
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              09088855012
            </div>

            <div style={contactRowStyle}>
              <svg
                style={iconStyle}
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Info@networkeandp.com
            </div>

            <div style={contactRowStyle}>
              <svg
                style={iconStyle}
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                14 Ademola street, SW Ikoyi, Lagos
                <br />
                <span
                  style={{ color: "rgba(255,255,255,0.24)", fontSize: "13px" }}
                >
                  <strong style={{ color: "rgba(255,255,255,0.36)" }}>
                    Field Office:
                  </strong>{" "}
                  5 Terminal road, Inua Eyet Ikot, Ibeno LGA Akwaibom
                </span>
              </span>
            </div>

            <div style={contactRowStyle}>
              <svg
                style={iconStyle}
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                  clipRule="evenodd"
                />
              </svg>
              www.networkeandp.com
            </div>

            {/* Divider */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                margin: "28px 0",
              }}
            />

            {/* Newsletter */}
            <div>
              <h4 style={{ ...headingStyle, marginBottom: "8px" }}>
                Newsletter
              </h4>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.28)",
                  marginBottom: "16px",
                  lineHeight: 1.7,
                }}
              >
                Subscribe to stay updated with our latest news.
              </p>

              {submitted ? (
                <p
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  You&apos;re subscribed. Thanks for joining.
                </p>
              ) : (
                <div style={{ display: "flex", gap: "8px" }}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Your email address"
                    onChange={handleChange}
                    style={{
                      flex: 1,
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "6px",
                      padding: "10px 14px",
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "13px",
                      outline: "none",
                      minWidth: 0,
                    }}
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={isPending}
                    style={{
                      backgroundColor: "#0000FE",
                      border: "none",
                      borderRadius: "6px",
                      padding: "10px 16px",
                      cursor: "pointer",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "opacity 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.opacity =
                        "0.85")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.opacity =
                        "1")
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 15"
                      fill="white"
                    >
                      <path d="M0 7.5L16 0L8 15L7 7.5H0Z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "20px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            suppressHydrationWarning
            style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.28)" }}
          >
            © {new Date().getFullYear()} Network E&P Nigeria Limited. All rights
            reserved.
          </p>
          <div
            className="footer-legal"
            style={{ display: "flex", gap: "28px" }}
          >
            {[
              { label: "Site Map", href: "/sitemap" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Privacy Policy", href: "/privacy" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontSize: "12.5px",
                  color: "rgba(255,255,255,0.28)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.7)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.28)")
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Background watermark */}
      <div
        style={{
          position: "absolute",
          bottom: "-38px",
          left: "-1%",
          fontSize: "clamp(120px, 18vw, 280px)",
          fontWeight: "800",
          color: "rgba(255,255,255,0.015)",
          WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          letterSpacing: "-0.04em",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
          lineHeight: 1,
        }}
      >
        NEPN
      </div>

      <style>{`
        .footer-root a { transition: color 0.2s ease, padding-left 0.2s ease; }
        @media (max-width: 1024px) {
          .footer-inner { padding: 64px 40px 0 !important; }
          .footer-grid { gap: 56px !important; }
        }
        @media (max-width: 768px) {
          .footer-inner { padding: 56px 24px 0 !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 48px 32px !important; }
        }
        @media (max-width: 580px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .footer-legal { gap: 16px !important; flex-wrap: wrap !important; }
        }
        @media (max-width: 480px) {
          .footer-inner { padding: 48px 20px 0 !important; }
        }
        @media (max-width: 360px) {
          .footer-inner { padding: 40px 16px 0 !important; }
        }
      `}</style>
    </footer>
  );
}
