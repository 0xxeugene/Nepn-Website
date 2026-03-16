"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What does NEPN do?",
    answer:
      "NEPN (Network Exploration & Production) is an energy company focused on the exploration, development, and production of oil and gas resources. We are committed to operational excellence, sustainability, and creating lasting value for our stakeholders.",
  },
  {
    question: "Where does NEPN operate?",
    answer:
      "NEPN operates primarily in Nigeria, focusing on the Qua Iboe field in OML 13.",
  },
  {
    question:
      "How does NEPN ensure the safety of its employees and the environment?",
    answer:
      "We maintain the highest safety standards and environmental protocols across all our operations.",
  },
  {
    question:
      "What Corporate Social Responsibility (CSR) initiatives does NEPN engage in?",
    answer:
      "We engage in various community development programs and environmental initiatives.",
  },
  {
    question: "How does NEPN promote sustainability?",
    answer:
      "Through responsible practices, innovation, and commitment to environmental stewardship.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      style={{
        background: "linear-gradient(160deg, #018001 0%, #001400 100%)",
        width: "100%",
      }}
    >
      <div
        className="faq-inner"
        style={{
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          padding: "80px 48px",
          boxSizing: "border-box",
          display: "flex",
          gap: "80px",
          alignItems: "flex-start",
        }}
      >
        {/* Left — Sticky Header */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="faq-header"
          style={{
            flex: "0 0 280px",
            position: "sticky",
            top: "68px",
            alignSelf: "flex-start",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 64px)",
              fontWeight: "500",
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
          >
            General
            <br />
            Questions
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.8,
              maxWidth: "240px",
            }}
          >
            Quick answers to common inquiries about our operations,
            partnerships, and more.
          </p>
        </motion.div>

        {/* Right — FAQ Items */}
        <div className="faq-items" style={{ flex: 1, minWidth: 0 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  position: "relative",
                }}
              >
                {/* Active left accent bar */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    scaleY: isOpen ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "2px",
                    backgroundColor: "rgba(255,255,255,0.6)",
                    transformOrigin: "top",
                    borderRadius: "0 2px 2px 0",
                  }}
                />

                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="faq-button"
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    textAlign: "left",
                    padding: "28px 0 28px 20px",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Number */}
                  <motion.span
                    className="faq-number"
                    animate={{ fontSize: isOpen ? "40px" : "20px" }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      fontWeight: "600",
                      color: isOpen
                        ? "rgba(255,255,255,0.8)"
                        : "rgba(255,255,255,0.2)",
                      letterSpacing: "0.02em",
                      flexShrink: 0,
                      width: "52px",
                      lineHeight: 1,
                      transition: "color 0.3s ease",
                      display: "block",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>

                  {/* Question */}
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: isOpen ? "600" : "400",
                      color: isOpen ? "#ffffff" : "rgba(255,255,255,0.65)",
                      lineHeight: 1.5,
                      flex: 1,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {faq.question}
                  </span>

                  {/* Toggle — minimal plus/minus circle */}
                  <span
                    style={{
                      flexShrink: 0,
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      border: "1px solid",
                      borderColor: isOpen
                        ? "rgba(255,255,255,0.5)"
                        : "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "border-color 0.3s ease",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        width: "8px",
                        height: "1px",
                        backgroundColor: isOpen
                          ? "rgba(255,255,255,0.7)"
                          : "rgba(255,255,255,0.4)",
                        transition: "background-color 0.3s ease",
                        position: "absolute",
                      }}
                    />
                    <motion.span
                      animate={{
                        scaleY: isOpen ? 0 : 1,
                        opacity: isOpen ? 0 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                      style={{
                        display: "block",
                        width: "1px",
                        height: "8px",
                        backgroundColor: "rgba(255,255,255,0.4)",
                        position: "absolute",
                      }}
                    />
                  </span>
                </button>

                {/* Answer — left padding matches number width + gap + button padding */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        className="faq-answer"
                        style={{
                          fontSize: "14px",
                          color: "rgba(255,255,255,0.55)",
                          lineHeight: 1.9,
                          // 20px button padding + 52px number width + 20px gap = 92px
                          paddingLeft: "92px",
                          paddingRight: "44px",
                          paddingBottom: "28px",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .faq-inner { padding: 72px 40px !important; gap: 56px !important; }
          .faq-header { flex: 0 0 240px !important; }
        }
        @media (max-width: 768px) {
          .faq-inner {
            flex-direction: column !important;
            padding: 56px 24px !important;
            gap: 40px !important;
          }
          .faq-header {
            position: relative !important;
            top: unset !important;
            flex: unset !important;
            width: 100% !important;
          }
          /* answer indent: 16px button padding + 52px number + 16px gap = 84px */
          .faq-answer { padding-left: 84px !important; padding-right: 16px !important; }
          .faq-button { padding-left: 16px !important; gap: 16px !important; }
        }
        @media (max-width: 480px) {
          .faq-inner { padding: 48px 16px !important; gap: 32px !important; }
          /* answer indent: 12px button padding + 52px number + 14px gap = 78px */
          .faq-answer { padding-left: 78px !important; padding-right: 8px !important; }
          .faq-button { padding-left: 12px !important; gap: 14px !important; }
          /* cap open number size on small screens */
          .faq-number { font-size: 28px !important; }
        }
        @media (max-width: 360px) {
          .faq-inner { padding: 40px 12px !important; }
        }
      `}</style>
    </section>
  );
}
