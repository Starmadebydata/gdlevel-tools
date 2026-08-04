import { siteConfig } from "@/lib/site-config";

/**
 * robots.txt
 * 用 route handler 而非 MetadataRoute.robots，因为 Next 的 robots API
 * 不支持 Content-Signal 指令（Cloudflare 提出的 AI 使用声明扩展）。
 * Content-Signal：显式允许搜索索引、AI 检索引用（ai-input）与 AI 训练（ai-train），
 * 与 GEO 目标一致——4 周龄新站需要进入主流模型的训练语料与检索索引。
 */
export function GET() {
  const body = `User-Agent: *
Allow: /

Content-Signal: search=yes, ai-input=yes, ai-train=yes

Sitemap: ${siteConfig.domain}/sitemap.xml
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
