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
        // HTML / 页面：禁止长 stale-while-revalidate
        // 旧配置 s-maxage=60 + SWR=86400 会在部署后最多 24h 继续吐旧 HTML，
        // 旧 HTML 引用的 /_next/static/*.js 已被新部署删掉 → 404 → 按钮无 JS
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
