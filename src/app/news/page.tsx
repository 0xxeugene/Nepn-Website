import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

export default function News() {
  return (
    <>
      <Navbar forceWhite />
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
            maxWidth: "560px",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/3",
              borderRadius: "16px",
              overflow: "hidden",
            //   boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
            }}
          >
            <Image
              src="/images/coming.jpg"
              alt="Coming Soon"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
                fontWeight: "700",
                lineHeight: 1.1,
                margin: 0,
                letterSpacing: "-0.03em",
              }}
            >
              <span style={{ color: "#aaa" }}>Under </span>
              <span style={{ color: "#111" }}>Construction</span>
            </p>
            <p
              style={{
                marginTop: "16px",
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                color: "#888",
                fontWeight: "400",
                letterSpacing: "-0.01em",
              }}
            >
              We will have something soon!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
