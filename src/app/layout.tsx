import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/Header";
import { JoinCTA } from "@/components/JoinCTA";
import { Footer } from "@/components/Footer";
import "./globals.css";

const sans = Montserrat({
  variable: "--font-sans",
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TuringAI Club | Learn and build with AI at Makerere",
    template: "%s | TuringAI Club",
  },
  description:
    "A student community at Makerere University turning AI learning into practical innovation. Learn. Collaborate. Build. Demonstrate.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body id="top" className={sans.variable}>
        <a href="#main-content" className="skip-link button">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
          <JoinCTA />
        </main>
        <Footer />
      </body>
    </html>
  );
}
