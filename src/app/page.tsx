import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import PartnersSlider from "@/components/sections/PartnerSlider";
import SustainabilitySection from "@/components/sections/Services";
import dynamic from "next/dynamic";

// Lazy-load below-the-fold sections to reduce initial bundle and improve LCP
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
);
const FAQ = dynamic(() => import("@/components/sections/Faq"));
const CounterSection = dynamic(() => import("@/components/sections/Counter"));
const NewsSection = dynamic(() => import("@/components/sections/NewsSection"));

export default function Home() {
  const publishedNews = [
    {
      id: 1,
      title: "NEPN Achieves Major Milestone in Qua Iboe Field Development",
      slug: "nepn-milestone-qua-iboe",
      content: "",
      excerpt:
        "Network E&P Nigeria Limited has reached a significant operational milestone in the development of the Qua Iboe field, reinforcing its position as a leading indigenous operator.",
      status: "published",
      author_id: 1,
      featured_image: "/images/nepn-images-four.jpg",
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
      // featured_image: "/images/news-two.jpg",
      featured_image: "/images/nepn-image-three.jpg",
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
      featured_image: "/images/nepn-one.jpg",
      created_at: "2025-09-15T00:00:00Z",
      updated_at: "2025-09-15T00:00:00Z",
      published_at: "2025-09-15T00:00:00Z",
      author_name: "NEPN Editorial",
      author_email: "info@networkeandp.com",
      category: "Partnerships",
    },
  ];

  return (
    <main>
      <Navbar />
      <Hero />
      <PartnersSlider />
      <AboutSection />
      <SustainabilitySection />
      <Contact />
      <Testimonials />
      <FAQ />
      <CounterSection />
      <NewsSection newsData={publishedNews} />
      <Footer />
    </main>
  );
}
