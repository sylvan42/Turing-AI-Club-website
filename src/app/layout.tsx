import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TuringAI Club — AI for everyday problems",
  description:
    "TuringAI Club is a student community at Makerere University turning AI learning into practical innovation. Learn. Collaborate. Build. Demonstrate.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-ink">
      <body className={`${inter.variable} bg-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
