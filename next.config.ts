import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // 所有页面使用短时缓存 + 后台重新验证
        // s-maxage=60: CDN/浏览器缓存 60 秒
        // stale-while-revalidate=86400: 过期后 24 小时内继续服务旧版本并后台更新
        // 这样网站内容更新后 1 分钟内生效，同时保留缓存性能
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=60, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
