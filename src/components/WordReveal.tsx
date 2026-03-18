"use client";

import { useEffect, useRef } from "react";

/**
 * WordReveal
 * ----------
 * Each word slides up from its own overflow:hidden mask, left to right,
 * one after the other — like lesmeufsdelindustrie.fr headings.
 *
 * Pure CSS transitions triggered by setTimeout + IntersectionObserver.
 * Zero Framer Motion. Runs on the GPU compositor thread.
 *
 * Usage:
 *   <WordReveal as="h1" text="History, Mission & Values" />
 *   <WordReveal as="p"  text="Body copy here." delay={200} stagger={40} />
 *
 * Props:
 *   as        — element tag (default "h2")
 *   text      — full string; split on spaces automatically
 *   delay     — ms before first word animates (default 0)
 *   stagger   — ms between each word (default 80)
 *   duration  — CSS transition duration in ms (default 600)
 *   once      — don't reset on scroll-out (default false)
 *   className — forwarded to wrapper
 *   style     — forwarded to wrapper
 */

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span";

interface WordRevealProps {
  as?: Tag;
  text: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function WordReveal({
  as: Tag = "h2",
  text,
  delay = 0,
  stagger = 80,
  duration = 600,
  once = false,
  className,
  style,
}: WordRevealProps) {
  const wrapperRef = useRef<HTMLElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const show = () => {
    const el = wrapperRef.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLSpanElement>("[data-wi]");
    words.forEach((w, i) => {
      const t = setTimeout(
        () => {
          w.style.transform = "translateY(0)";
          w.style.opacity = "1";
        },
        delay + i * stagger,
      );
      timersRef.current.push(t);
    });
  };

  const hide = () => {
    clearTimers();
    const el = wrapperRef.current;
    if (!el) return;
    el.querySelectorAll<HTMLSpanElement>("[data-wi]").forEach((w) => {
      w.style.transform = "translateY(108%)";
      w.style.opacity = "0";
    });
  };

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          if (once) observer.disconnect();
        } else if (!once) {
          hide();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => {
      clearTimers();
      observer.disconnect();
    };
  }, [once, delay, stagger]);

  const words = text.split(" ");

  return (
    <>
      <style>{`
        .wr-mask {
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
          padding: 0.06em 0 0.1em;
          margin: -0.06em 0 -0.1em;
        }
        .wr-mask + .wr-mask { margin-left: 0.26em; }
        [data-wi] {
          display: inline-block;
          transform: translateY(108%);
          opacity: 0;
          will-change: transform, opacity;
        }
      `}</style>

      {/* @ts-expect-error dynamic tag */}
      <Tag ref={wrapperRef} className={className} style={style}>
        {words.map((word, i) => (
          <span key={i} className="wr-mask">
            <span
              data-wi
              style={{
                transitionProperty: "transform, opacity",
                transitionDuration: `${duration}ms, ${duration * 0.85}ms`,
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </Tag>
    </>
  );
}
