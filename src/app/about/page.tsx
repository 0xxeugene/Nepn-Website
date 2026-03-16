"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiAward, FiTarget, FiTrendingUp, FiUsers } from "react-icons/fi";
const rectangle52 = "/images/about-header.jpg";
const rectangle54 = "/images/nepn-image-three.jpg";
const rectangle55 = "/images/nepn-images-four.jpg";
const rectangle56 = "/images/sustainability-section.jpg";
const rectangle61 = "/images/sustainability-section.jpg";

export default function About() {
  return (
    <>
      <Navbar />
      {/* ── Hero Banner ── */}
      <div
        className="relative w-full overflow-hidden grid"
        style={{ minHeight: "clamp(260px, 40vw, 480px)" }}
      >
        <Image
          src={rectangle52}
          alt=""
          fill
          priority
          className="object-cover object-center -z-10"
        />
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 flex items-center justify-start"
          style={{
            paddingLeft: "clamp(1.5rem, 10%, 8rem)",
            background: `
        radial-gradient(ellipse at center, transparent 20%, rgba(1,6,26,0.55) 100%),
        linear-gradient(to bottom, rgba(1,6,26,0.15) 0%, transparent 35%, rgba(1,6,26,0.82) 70%, rgba(1,6,26,0.97) 100%)
      `,
          }}
        >
          <h1
            className="text-white font-bold leading-none relative"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)", zIndex: 2 }}
          >
            ABOUT
            <br /> US
          </h1>
        </motion.div>
      </div>

      {/* ── Color bar ── */}
      <div
        style={{
          width: "100%",
          height: "12px",
          background:
            "linear-gradient(to right, #FE0000 0%, #0000FE 50%, #FE0000 100%)",
        }}
      />

      {/* ── Who We Are ── */}
      <section
        className="w-full bg-[#ececec]"
        style={{
          paddingInline: "clamp(1.5rem, 10%, 6rem)",
          paddingBlock: "clamp(4rem, 10vw, 10rem)",
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-start"
          style={{
            gap: "clamp(2rem, 5vw, 4rem)",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-bold leading-[0.9] text-black"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", margin: 0 }}
          >
            Who we
            <br />
            <span className="text-[#9d9d9d]">are</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <p className="text-lg leading-relaxed text-[#7f7f7f]">
              Network E&amp;P Nigeria Limited (NEPN) is a fully Nigerian-owned
              oil and gas company at the forefront of the nation&apos;s energy
              sector. Established with a vision to harness Nigeria&apos;s vast
              energy resources responsibly, we have grown to become a trusted
              name in exploration and production.
            </p>
            <p className="text-lg leading-relaxed text-[#7f7f7f]">
              Our operations are centered on the Qua Iboe field, where we employ
              cutting-edge technology and best practices to maximize efficiency
              while minimizing environmental impact. We are proud to be 100%
              indigenous, with a workforce that reflects the diversity and
              talent of Nigeria.
            </p>
            <p className="text-lg leading-relaxed text-[#7f7f7f]">
              At NEPN, we believe in the power of energy to transform lives and
              drive economic development. Our commitment goes beyond extraction
              - we are dedicated to creating lasting value for all our
              stakeholders, from investors and employees to the communities that
              host our operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── What We Do heading ── */}
      <section
        className="w-full bg-[#ececec]"
        style={{
          paddingInline: "clamp(1.5rem, 10%, 6rem)",
          paddingBottom: "clamp(2rem, 6vw, 6rem)",
        }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-bold leading-[0.9] text-black"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              marginBottom: "1.5rem",
              marginTop: 0,
            }}
          >
            What we <span className="text-[#9d9d9d]">do</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-lg leading-relaxed text-[#8b8b8b]"
            style={{ maxWidth: "48rem", marginInline: "auto" }}
          >
            We deliver integrated energy solutions focused on operational
            excellence, safety, and sustainability
          </motion.p>
        </div>
      </section>

      {/* ── Operations Cards ── */}
      <section className="w-full" style={{ minHeight: "100vh" }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{
            gap: 0,
          }}
        >
          {/* Card 1: Exploration & Production */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: "clamp(260px, 40vw, 420px)",
            }}
            className="group aspect-square lg:aspect-auto"
          >
            <Image
              src={rectangle52}
              alt="Exploration and production"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div
            // className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"
            // style={{ backdropFilter: "blur(1px)" }}
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent" />
            <div className="absolute top-6 right-6 h-px w-10 bg-white/30 transition-all duration-500 group-hover:w-20" />
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{ padding: "clamp(1.5rem, 4vw, 2.5rem)" }}
            >
              <h3
                className="text-white font-light tracking-wide"
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  marginBottom: "0.75rem",
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                }}
              >
                Exploration &amp; Production
              </h3>
              <p
                className="text-white/75 leading-relaxed font-light"
                style={{
                  fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)",
                  maxWidth: "42ch",
                }}
              >
                Advanced seismic surveys and drilling operations in the Qua Iboe
                field, utilizing state-of-the-art technology for optimal
                resource recovery.
              </p>
              <div
                className="flex items-center gap-3 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                style={{ marginTop: "1.25rem" }}
              >
                <div className="h-px w-8 bg-[#0000FE] transition-all duration-500 group-hover:w-14" />
                <span className="text-[#0000FE] text-xs uppercase tracking-widest font-medium">
                  Learn More
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Crude Processing */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: "clamp(260px, 40vw, 420px)",
            }}
            className="group aspect-square lg:aspect-auto"
          >
            <Image
              src={rectangle54}
              alt="Crude processing"
              fill
              // className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div
              // className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"
              style={{ backdropFilter: "blur(1px)" }}
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent" />
            <div className="absolute top-6 right-6 h-px w-10 bg-white/30 transition-all duration-500 group-hover:w-20" />
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{ padding: "clamp(1.5rem, 4vw, 2.5rem)" }}
            >
              <h3
                className="text-white font-light tracking-wide"
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  marginBottom: "0.75rem",
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                }}
              >
                Crude Processing
              </h3>
              <p
                className="text-white/75 leading-relaxed font-light"
                style={{
                  fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)",
                  maxWidth: "42ch",
                }}
              >
                Efficient processing facilities that meet international
                standards, ensuring quality output and minimal environmental
                impact.
              </p>
              <div
                className="flex items-center gap-3 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                style={{ marginTop: "1.25rem" }}
              >
                <div className="h-px w-8 bg-[#0000FE] transition-all duration-500 group-hover:w-14" />
                <span className="text-[#0000FE] text-xs uppercase tracking-widest font-medium">
                  Learn More
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Crude Evacuation Network — always full width */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: "clamp(280px, 45vw, 460px)",
              gridColumn: "1 / -1",
            }}
            className="group aspect-square lg:aspect-auto"
          >
            <Image
              src={rectangle56}
              alt="Crude evacuation network"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div
            // className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"
            // style={{ backdropFilter: "blur(1px)" }}
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-transparent" />
            <div className="absolute top-6 right-6 h-px w-10 bg-white/30 transition-all duration-500 group-hover:w-20" />
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{ padding: "clamp(1.5rem, 4vw, 2.5rem)" }}
            >
              <h3
                className="text-white font-light tracking-wide"
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  marginBottom: "0.75rem",
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                }}
              >
                Crude Evacuation Network
              </h3>
              <p
                className="text-white/75 leading-relaxed font-light"
                style={{
                  fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)",
                  maxWidth: "42ch",
                }}
              >
                Strategically positioned near the Qua Iboe Terminal, NEPN
                evacuates its crude through a shared evacuation network in
                partnership with two other oil producers.
              </p>
              <div
                className="flex items-center gap-3 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                style={{ marginTop: "1.25rem" }}
              >
                <div className="h-px w-8 bg-[#0000FE] transition-all duration-500 group-hover:w-14" />
                <span className="text-[#0000FE] text-xs uppercase tracking-widest font-medium">
                  Learn More
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Sustainable Growth ── */}
      <section
        className="w-full bg-white"
        style={{
          paddingInline: "clamp(1.5rem, 10%, 6rem)",
          paddingBlock: "clamp(3rem, 8vw, 6rem)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: "clamp(2rem, 5vw, 5rem)" }}
        >
          <h2
            className="font-black leading-none tracking-tight text-black"
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              margin: 0,
            }}
          >
            Sustainable
          </h2>
          <h2
            className="font-black leading-none tracking-tight text-gray-300"
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              margin: 0,
            }}
          >
            Growth
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 items-start"
          style={{ gap: "clamp(2rem, 5vw, 4rem)" }}
        >
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src={rectangle61}
              fill
              alt="NEPN facility aerial view"
              className="object-cover"
            />
          </motion.div>

          {/* Right: Text + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <p
              className="text-gray-600 leading-relaxed"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                marginBottom: "2.5rem",
                marginTop: 0,
              }}
            >
              Our growth strategy is built on three pillars: operational
              excellence, technological innovation, and environmental
              stewardship. We are committed to expanding our operations while
              reducing our carbon footprint. Through strategic investments in
              renewable energy, carbon capture technologies, and community
              development programs, we are positioning NEPN as a leader in the
              transition to a sustainable energy future.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-t border-gray-200 flex items-center"
              style={{
                gap: "clamp(1rem, 3vw, 2rem)",
                paddingBlock: "clamp(1.25rem, 3vw, 2rem)",
              }}
            >
              <span
                className="font-bold text-black leading-none"
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                }}
              >
                20+
              </span>
              <span
                className="font-semibold text-black"
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                }}
              >
                Years Experience
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="border-t border-gray-200 flex items-center"
              style={{
                gap: "clamp(1rem, 3vw, 2rem)",
                paddingBlock: "clamp(1.25rem, 3vw, 2rem)",
              }}
            >
              <span
                className="font-bold text-black leading-none"
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                }}
              >
                100%
              </span>
              <span
                className="font-semibold text-black"
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                }}
              >
                Safety Focus
              </span>
            </motion.div>

            <div className="border-t border-gray-200" />
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="aspect-square md:aspect-auto"
          style={{
            backgroundColor: "#1a7a1a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "clamp(3rem, 8vw, 5rem) clamp(1.5rem, 5vw, 3rem)",
          }}
        >
          <h2
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontSize: "clamp(3rem, 4vw, 4rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
              marginTop: 0,
            }}
          >
            Our Mission
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(1.2rem, 1.5vw, 1.4rem)",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.85)",
              maxWidth: "360px",
              margin: 0,
            }}
          >
            To create sustainable value through safe, efficient, and responsible
            oil and gas operations while upholding the highest standards of
            environmental and community stewardship
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="aspect-square md:aspect-auto"
          style={{
            backgroundColor: "#5aaa5a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "clamp(3rem, 8vw, 5rem) clamp(1.5rem, 5vw, 3rem)",
          }}
        >
          <h2
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontSize: "clamp(3rem, 4vw, 4rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
              marginTop: 0,
            }}
          >
            Our Vision
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(1.2rem, 1.5vw, 1.4rem)",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.85)",
              maxWidth: "360px",
              margin: 0,
            }}
          >
            To deliver energy with excellence, innovation, and responsibility,
            powering Nigeria&apos;s growth today while enabling a sustainable
            future
          </p>
        </motion.div>
      </section>

      {/* ── Our Values ── */}
      <section
        style={{
          width: "100%",
          backgroundColor: "#f8f9fc",
          padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 10%, 6rem)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#0f0f0f",
            marginBottom: "clamp(2rem, 4vw, 3rem)",
            marginTop: 0,
          }}
        >
          Our Values
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "clamp(12px, 2vw, 20px)",
          }}
        >
          {/* Integrity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: 0.0,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "clamp(1.5rem, 3vw, 2.25rem) clamp(1rem, 2vw, 1.5rem)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "#ebebff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                flexShrink: 0,
              }}
            >
              <FiAward size={27} color="#4040cc" />
            </div>
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#0f0f0f",
                marginBottom: "12px",
                marginTop: 0,
              }}
            >
              Integrity
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
                color: "#6b7280",
                lineHeight: 1.7,
                margin: 0,
                paddingInline: "clamp(0.5rem, 1vw, 1rem)",
              }}
            >
              We conduct our business with the highest ethical standards and
              transparency in all our operations.
            </p>
          </motion.div>

          {/* Excellence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "clamp(1.5rem, 3vw, 2.25rem) clamp(1rem, 2vw, 1.5rem)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "#ebebff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                flexShrink: 0,
              }}
            >
              <FiTarget size={27} color="#4040cc" />
            </div>
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#0f0f0f",
                marginBottom: "12px",
                marginTop: 0,
              }}
            >
              Excellence
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
                color: "#6b7280",
                lineHeight: 1.7,
                margin: 0,
                paddingInline: "clamp(0.5rem, 1vw, 1rem)",
              }}
            >
              We pursue operational excellence and continuous improvement in
              everything we do.
            </p>
          </motion.div>

          {/* Community Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "clamp(1.5rem, 3vw, 2.25rem) clamp(1rem, 2vw, 1.5rem)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "#ebebff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                flexShrink: 0,
              }}
            >
              <FiUsers size={22} color="#4040cc" />
            </div>
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#0f0f0f",
                marginBottom: "12px",
                marginTop: 0,
              }}
            >
              Community Focus
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
                color: "#6b7280",
                lineHeight: 1.7,
                margin: 0,
                paddingInline: "clamp(0.5rem, 1vw, 1rem)",
              }}
            >
              We are committed to creating positive impacts in the communities
              where we operate.
            </p>
          </motion.div>

          {/* Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "clamp(1.5rem, 3vw, 2.25rem) clamp(1rem, 2vw, 1.5rem)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "#ebebff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                flexShrink: 0,
              }}
            >
              <FiTrendingUp size={22} color="#4040cc" />
            </div>
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#0f0f0f",
                marginBottom: "12px",
                marginTop: 0,
              }}
            >
              Innovation
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
                color: "#6b7280",
                lineHeight: 1.7,
                margin: 0,
                paddingInline: "clamp(0.5rem, 1vw, 1rem)",
              }}
            >
              We embrace innovative technologies and solutions to drive
              sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Strategic Goals ── */}
      <section
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 10%, 6rem)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: "clamp(1rem, 3vw, 2rem)" }}
        >
          <h2
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              color: "#0f0f0f",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Our Strategic
          </h2>
          <h2
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              color: "#c0c0c0",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Goals
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.65,
            delay: 0.08,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
            color: "#9ca3af",
            marginBottom: "clamp(2rem, 4vw, 3rem)",
            marginTop: "0.75rem",
          }}
        >
          Ambitious targets driving our path to industry leadership
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "0 clamp(1.5rem, 4vw, 2.5rem)",
          }}
        >
          {[
            { n: "01.", text: "Achieve zero flare by 2027" },
            { n: "04.", text: "Maintain zero environmental incidents record" },
            {
              n: "02.",
              text: "Increase production capacity by 50% over the next 5 years",
            },
            {
              n: "05.",
              text: "Expand renewable energy portfolio to 25% by 2036",
            },
            {
              n: "03.",
              text: "Sustained investment in community development programs across all operational areas",
            },
          ].map(({ n, text }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "clamp(1.25rem, 3vw, 2rem) 0",
                borderTop: "1px solid #f0f0f0",
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  fontWeight: 900,
                  color: "#d1d5db",
                  lineHeight: 1,
                  minWidth: "clamp(48px, 8vw, 64px)",
                  flexShrink: 0,
                }}
              >
                {n}
              </span>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
                  fontWeight: 400,
                  color: "#374151",
                  lineHeight: 1.55,
                  margin: "4px 0 0 0",
                }}
              >
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
