import type { NextConfig } from "next";

const repoName = "Turing-AI-Club-website";
const basePath = process.env.NODE_ENV === "production" ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  distDir: process.env.NODE_ENV === "production" ? ".next" : ".next-dev",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
