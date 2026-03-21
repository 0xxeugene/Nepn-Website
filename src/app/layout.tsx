import SmoothScroll from "@/components/SmoothScroll";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEPN - Indigenous Oil and Gas",
  description:
    "Discover NEPN's innovative solutions, services, and commitment to sustainability. Learn about our operations, partnerships, and impact.",
  icons: {
    icon: "/icons/logo-footer.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload above-the-fold hero image so it starts loading immediately */}
        <link
          rel="preload"
          as="image"
          href="/images/bg-hero-one.jpg"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* <ScrollbarColor /> */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
