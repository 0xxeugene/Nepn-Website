"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  status: string;
  author_id: number;
  featured_image: string | null;
  created_at: string;
  updated_at: string;
  published_at: string | null;
  author_name: string;
  author_email: string;
  category?: string;
}

interface NewsSectionProps {
  newsData?: NewsArticle[];
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getImageUrl = (article: NewsArticle) =>
  article.featured_image || "/images/placeholder-news.jpg";

export default function NewsSection({ newsData }: NewsSectionProps) {
  const [page, setPage] = useState(0);

  const publishedNews = newsData
    ?.filter((a) => a.status === "published")
    .slice(0, 6) ?? [
    {
      id: 1,
      title: "NEPN Achieves Major Milestone in Qua Iboe Field Development",
      slug: "nepn-milestone-qua-iboe",
      content: "",
      excerpt:
        "Network E&P Nigeria Limited has reached a significant operational milestone in the development of the Qua Iboe field, reinforcing its position as a leading indigenous operator.",
      status: "published",
      author_id: 1,
      featured_image: "/images/news-one.jpg",
      created_at: "2025-11-10T00:00:00Z",
      updated_at: "2025-11-10T00:00:00Z",
      published_at: "2025-11-10T00:00:00Z",
      author_name: "NEPN Editorial",
      author_email: "info@networkeandp.com",
      category: "Operations",
    },
    {
      id: 2,
      title: "NEPN Strengthens Commitment to Sustainable Energy Practices",
      slug: "nepn-sustainability-commitment",
      content: "",
      excerpt:
        "As part of its long-term sustainability roadmap, NEPN has launched new environmental initiatives aimed at reducing emissions and promoting responsible resource management.",
      status: "published",
      author_id: 1,
      featured_image: "/images/news-two.jpg",
      created_at: "2025-10-22T00:00:00Z",
      updated_at: "2025-10-22T00:00:00Z",
      published_at: "2025-10-22T00:00:00Z",
      author_name: "NEPN Editorial",
      author_email: "info@networkeandp.com",
      category: "Sustainability",
    },
    {
      id: 3,
      title: "NEPN Partners with Industry Leaders to Drive Energy Innovation",
      slug: "nepn-industry-partnerships",
      content: "",
      excerpt:
        "NEPN has formalized strategic partnerships with key stakeholders in the Nigerian energy sector to accelerate innovation, expand operations, and create lasting community value.",
      status: "published",
      author_id: 1,
      featured_image: "/images/news-three.jpg",
      created_at: "2025-09-15T00:00:00Z",
      updated_at: "2025-09-15T00:00:00Z",
      published_at: "2025-09-15T00:00:00Z",
      author_name: "NEPN Editorial",
      author_email: "info@networkeandp.com",
      category: "Partnerships",
    },
  ];

  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(publishedNews.length / ITEMS_PER_PAGE);
  const current = publishedNews.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  useEffect(() => {
    if (publishedNews.length === 0) return;
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(interval);
  }, [publishedNews.length, totalPages]);

  if (publishedNews.length === 0) return null;

  return (
    <section
      className="news-section"
      style={{ backgroundColor: "#fff", padding: "36px 0" }}
    >
      <div
        className="news-inner"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "48px",
            gap: "16px",
          }}
        >
          <h2
            className="news-heading"
            style={{
              fontSize: "clamp(28px, 4vw, 56px)",
              fontWeight: "500",
              color: "#0a0a0f",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              whiteSpace: "nowrap",
            }}
          >
            News & Insights
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#666",
              lineHeight: 1.8,
              maxWidth: "460px",
            }}
          >
            Stay updated with the latest from NEPN — including company
            announcements, industry trends, project milestones, and thought
            leadership.
          </p>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="news-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {current.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.id}`}
                style={{
                  textDecoration: "none",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid #f0f0f0",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-4px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 12px 32px rgba(0,0,0,0.10)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 2px 16px rgba(0,0,0,0.05)";
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16/9",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={getImageUrl(article)}
                    alt={article.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  {article.category && (
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        backgroundColor: "#0000FE",
                        color: "#fff",
                        fontSize: "11px",
                        fontWeight: "600",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {article.category}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "12px",
                      color: "#aaa",
                      marginBottom: "10px",
                      fontWeight: "500",
                    }}
                  >
                    <span>{formatDate(article.created_at)}</span>
                    <span>·</span>
                    <span>{article.author_name}</span>
                  </div>

                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#0a0a0f",
                      lineHeight: 1.4,
                      marginBottom: "8px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {article.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "#888",
                      lineHeight: 1.7,
                      marginBottom: "16px",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      flex: 1,
                    }}
                  >
                    {article.excerpt}
                  </p>

                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#0000FE",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    Read More
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="#0000FE"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Explore More */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "36px",
          }}
        >
          <Link
            href="/news"
            className="explore-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#fff",
              color: "#0000FE",
              border: "1.5px solid #0000FE",
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
              padding: "12px 28px",
              borderRadius: "999px",
              transition: "opacity 0.15s ease, transform 0.15s ease",
              whiteSpace: "nowrap",
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
            Explore More
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="#0000FE"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Dots */}
        {totalPages > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginTop: "24px",
            }}
          >
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                style={{
                  width: i === page ? "28px" : "10px",
                  height: "10px",
                  borderRadius: "999px",
                  backgroundColor: i === page ? "#0000FE" : "#ddd",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .news-inner { padding: 0 40px !important; }
          .news-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .news-section { padding: 56px 0 !important; }
          .news-inner { padding: 0 24px !important; }
          .news-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
          .news-heading { white-space: normal !important; }
        }
        @media (max-width: 580px) {
          .news-grid { grid-template-columns: 1fr !important; }
          .explore-btn { display: none !important; }
        }
        @media (max-width: 480px) {
          .news-section { padding: 48px 0 !important; }
          .news-inner { padding: 0 20px !important; }
        }
        @media (max-width: 360px) {
          .news-inner { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  );
}
