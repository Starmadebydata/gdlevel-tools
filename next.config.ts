import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // 带哈希的静态资源：长期缓存
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // HTML / 页面：边缘缓存 1 小时 + 5 分钟 SWR
        // 历史教训：旧配置 s-maxage=60 + SWR=86400 曾在部署后最多 24h 继续吐旧 HTML，
        // 旧 HTML 引用的 /_next/static/*.js 已被新部署删掉 → 404 → 按钮无 JS。
        // 因此 SWR 只允许 300s——部署后最坏情况 65 分钟内旧 HTML 自然过期，
        // 兼顾 GEO 审计要求的边缘缓存（爬虫免回源）与发版安全。
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=3600, stale-while-revalidate=300",
          },
          // 安全响应头
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
