"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About Us" },
    { id: "/sustainability", label: "Sustainability" },
    { id: "/operations", label: "Operations" },
    { id: "/news", label: "News" },
    { id: "/partners", label: "Partners" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (id: string) =>
    id === "/" ? pathname === "/" : pathname.startsWith(id);

  const bgColor = scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0)";
  const borderColor = scrolled ? "rgba(240,240,240,0.8)" : "transparent";
  const shadowColor = scrolled
    ? "0 1px 40px rgba(0,0,0,0.06)"
    : "0 1px 40px rgba(0,0,0,0)";
  const linkColor = scrolled ? "#888" : "rgba(255,255,255,0.95)";
  const activeLinkColor = scrolled ? "#0000FE" : "#fff";
  const hamburgerColor = scrolled ? "#111" : "#fff";
  const linkTextShadow = scrolled ? "none" : "0 1px 8px rgba(0,0,0,0.5)";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "68px",
          backgroundColor: bgColor,
          backdropFilter: scrolled
            ? "blur(20px) saturate(180%)"
            : "blur(0px) saturate(100%)",
          WebkitBackdropFilter: scrolled
            ? "blur(20px) saturate(180%)"
            : "blur(0px) saturate(100%)",
          borderBottom: `1px solid ${borderColor}`,
          boxShadow: shadowColor,
          zIndex: 50,
          transition:
            "background-color 0.6s cubic-bezier(0.16,1,0.3,1), border-color 0.6s cubic-bezier(0.16,1,0.3,1), backdrop-filter 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.6s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          className="header-inner"
          style={{
            width: "100%",
            margin: "0 auto",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          {/* Logo */}
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/images/logo.png"
              alt="NEPN Logo"
              width={120}
              height={40}
              style={{
                height: "56px",
                width: "auto",
                filter: scrolled
                  ? "none"
                  : "drop-shadow(0 1px 6px rgba(0,0,0,0.5)) ",
                transition: "filter 0.4s ease",
              }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                style={{
                  fontSize: "14px",
                  fontWeight: isActive(item.id) ? "600" : "400",
                  color: isActive(item.id) ? activeLinkColor : linkColor,
                  textDecoration: "none",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  transition: "color 0.15s ease, background 0.15s ease",
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                  textShadow: linkTextShadow,
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.id)) {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      scrolled ? "#0000FE" : "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.id)) {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      linkColor;
                    (
                      e.currentTarget as HTMLAnchorElement
                    ).style.backgroundColor = "transparent";
                  }
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Contact Us Button */}
            <Link
              href="/contact"
              style={{
                marginLeft: "12px",
                fontSize: "14px",
                fontWeight: "600",
                color: "#fff",
                textDecoration: "none",
                padding: "8px 20px",
                borderRadius: "20px",
                backgroundColor: "#0000FE",
                whiteSpace: "nowrap",
                transition: "opacity 0.15s ease, transform 0.15s ease",
                display: "inline-block",
                boxShadow: scrolled ? "none" : "0 2px 12px rgba(0,0,255,0.35)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              Contact Us
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="hamburger"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              flexDirection: "column",
              gap: "6px",
              alignItems: "flex-end",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  height: "3px",
                  width: i === 1 ? "18px" : "24px",
                  backgroundColor: hamburgerColor,
                  borderRadius: "2px",
                  transition: "background-color 0.4s ease",
                  filter: scrolled
                    ? "none"
                    : "drop-shadow(0 1px 3px rgba(0,0,0,0.4))",
                }}
              />
            ))}
          </button>
        </div>
      </motion.header>

      {/* Mobile Slide Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.15)",
                zIndex: 98,
              }}
            />
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.32,
                ease: [0.32, 0, 0.08, 1],
              }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "#fff",
                zIndex: 99,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "80px 48px 48px",
                boxSizing: "border-box",
              }}
            >
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                style={{
                  position: "absolute",
                  top: "22px",
                  right: "28px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                  color: "#111",
                  lineHeight: 1,
                  fontSize: "22px",
                }}
              >
                ✕
              </button>

              <nav
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                {[...menuItems, { id: "/contact", label: "Contact Us" }].map(
                  (item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.045,
                        duration: 0.28,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={item.id}
                        onClick={closeMenu}
                        style={{
                          display: "block",
                          fontSize: "28px",
                          fontWeight: isActive(item.id) ? "700" : "400",
                          color: isActive(item.id) ? "#0000FE" : "#888",
                          textDecoration: "none",
                          padding: "10px 0",
                          borderBottom: "1px solid #f5f5f5",
                          transition: "color 0.15s ease",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.2,
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive(item.id))
                            (e.currentTarget as HTMLAnchorElement).style.color =
                              "#0000FE";
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive(item.id))
                            (e.currentTarget as HTMLAnchorElement).style.color =
                              "#888";
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ),
                )}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <style>{`
        .header-inner { padding: 0 48px; }
        .desktop-nav { display: flex; }
        .hamburger { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .header-inner { padding: 0 24px !important; }
        }
        @media (max-width: 480px) {
          .header-inner { padding: 0 16px !important; }
        }
        * { box-sizing: border-box; }
        body, html { max-width: 100vw; overflow-x: clip; }
      `}</style>
    </>
  );
}
