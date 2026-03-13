"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const counterData = [
  {
    icon: "/images/logoTwo.png",
    endValue: 24,
    title: "Active Projects",
    suffix: "+",
  },
  {
    icon: "/images/logoThree.png",
    endValue: 100,
    title: "Dedicated Employees",
    suffix: "+",
  },
  {
    icon: "/images/logoFour.png",
    endValue: 20,
    title: "Years of Excellence",
    suffix: "+",
  },
  {
    icon: "/images/logoOne.png",
    endValue: 15,
    title: "Strategic Partners",
    suffix: "+",
  },
];

interface CounterCardProps {
  icon: string;
  endValue: number;
  title: string;
  suffix: string;
  last?: boolean;
  bottomBorder?: boolean;
  delay?: number;
}

function AnimatedNumber({ value }: { value: number }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v: number) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  useEffect(() => {
    if (!isInView) return;
    animate(motionValue, value, {
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
    });
  }, [isInView, motionValue, value]);

  return (
    <motion.span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {rounded}
    </motion.span>
  );
}

function CounterCard({
  icon,
  endValue,
  title,
  suffix,
  last,
  bottomBorder,
  delay = 0,
}: CounterCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      className="counter-card"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "32px 24px",
        borderRight: last ? "none" : "1px solid #f0f0f0",
        borderBottom: bottomBorder ? "1px solid #f0f0f0" : "none",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "56px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: "rgba(0,0,254,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px",
          flexShrink: 0,
        }}
      >
        <div style={{ position: "relative", width: "28px", height: "28px" }}>
          <Image src={icon} alt={title} fill style={{ objectFit: "contain" }} />
        </div>
      </div>

      <div style={{ marginBottom: "8px" }}>
        <span
          style={{
            fontSize: "40px",
            fontWeight: "700",
            color: "#0a0a0f",
            lineHeight: 1,
          }}
        >
          <AnimatedNumber value={endValue} />
        </span>
        <span
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#0000FE",
            lineHeight: 1,
          }}
        >
          {suffix}
        </span>
      </div>

      <p
        style={{
          fontSize: "15px",
          fontWeight: "500",
          color: "#666",
          lineHeight: 1.4,
        }}
      >
        {title}
      </p>
    </motion.div>
  );
}

export default function CounterSection() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "2px 0" }}>
      <div
        className="counter-grid"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {counterData.map((item, index) => (
          <CounterCard
            key={index}
            icon={item.icon}
            endValue={item.endValue}
            title={item.title}
            suffix={item.suffix}
            last={index === counterData.length - 1}
            bottomBorder={false}
            delay={index * 120}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .counter-grid { padding: 0 40px !important; }
        }
        @media (max-width: 768px) {
          .counter-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 0 24px !important;
          }
          .counter-card { border-right: 1px solid #f0f0f0 !important; }
          .counter-card:nth-child(2n) { border-right: none !important; }
          .counter-card:nth-child(1),
          .counter-card:nth-child(2) { border-bottom: 1px solid #f0f0f0 !important; }
        }
        @media (max-width: 480px) {
          .counter-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 0 16px !important;
          }
          .counter-card { padding: 24px 16px !important; }
        }
        @media (max-width: 360px) {
          .counter-grid { padding: 0 12px !important; }
        }
      `}</style>
    </section>
  );
}
