import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
      <body
        className={`${jost.variable} antialiased`}
        style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
