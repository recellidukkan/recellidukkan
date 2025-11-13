import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // statik export üretir
  images: {
    unoptimized: true , // Netlify’da optimize servisi yoksa gerekebilir
  },
};

export default nextConfig;
