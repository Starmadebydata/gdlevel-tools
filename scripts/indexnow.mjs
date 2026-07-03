/**
 * IndexNow URL 提交脚本
 * 读取 sitemap.xml 并将所有 URL 批量提交到 IndexNow 搜索引擎（Bing、Yandex 等）
 *
 * 用法：
 *   node scripts/indexnow.mjs
 *
 * 环境变量：
 *   INDEXNOW_KEY      - IndexNow API key（默认从 public/<key>.txt 自动推断）
 *   INDEXNOW_HOST     - 域名，如 geometrydashlevel.com（默认从 siteConfig 读取）
 *   INDEXNOW_ENDPOINT - 提交端点，默认 https://api.indexnow.org
 */

import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// 自动发现 public 目录下的 key 文件（文件名即为 key）
function discoverKey() {
  const envKey = process.env.INDEXNOW_KEY;
  if (envKey) return envKey;

  const publicDir = resolve(root, "public");
  const txtFiles = readdirSync(publicDir).filter(
    (f) => f.endsWith(".txt") && /^[a-f0-9]{32}\.txt$/i.test(f)
  );
  if (txtFiles.length === 0) {
    throw new Error(
      "No IndexNow key file found in public/. Generate one and create public/<32-hex-chars>.txt"
    );
  }
  if (txtFiles.length > 1) {
    console.warn("Multiple IndexNow key files found, using first:", txtFiles[0]);
  }
  return txtFiles[0].replace(".txt", "");
}

// 读取 sitemap.xml 并提取 URL 列表
function extractUrls(xml) {
  const matches = xml.matchAll(/<loc>([^<]+)<\/loc>/g);
  return Array.from(matches, (m) => m[1]).filter((url) => url.startsWith("http"));
}

// 从 src/lib/site-config.ts 中读取 domain
function readSiteConfig() {
  const configPath = resolve(root, "src/lib/site-config.ts");
  const content = readFileSync(configPath, "utf-8");
  const match = content.match(/domain:\s*"([^"]+)"/);
  if (!match) throw new Error("Could not find domain in site-config.ts");
  return match[1].replace(/^https?:\/\//, "");
}

async function submitUrls(host, key, urls) {
  const keyLocation = `https://${host}/${key}.txt`;
  const endpoint = process.env.INDEXNOW_ENDPOINT || "https://api.indexnow.org";
  const payload = {
    host,
    key,
    keyLocation,
    urlList: urls,
  };

  console.log(`Submitting ${urls.length} URLs to ${endpoint}/indexnow`);
  console.log(`Host: ${host}`);
  console.log(`Key file: ${keyLocation}`);

  const res = await fetch(`${endpoint}/indexnow`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  console.log(`Response ${res.status}: ${text || "(empty)"}`);

  if (!res.ok) {
    throw new Error(`IndexNow submission failed: ${res.status} ${text}`);
  }
  return res.status;
}

async function main() {
  const key = discoverKey();
  const host = process.env.INDEXNOW_HOST || readSiteConfig();
  const sitemapUrl = `https://${host}/sitemap.xml`;

  console.log(`Fetching sitemap: ${sitemapUrl}`);
  const res = await fetch(sitemapUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap: ${res.status}`);
  }
  const xml = await res.text();
  const urls = extractUrls(xml);
  console.log(`Found ${urls.length} URLs in sitemap`);

  if (urls.length === 0) {
    console.log("No URLs to submit.");
    return;
  }

  await submitUrls(host, key, urls);
  console.log("IndexNow submission completed successfully.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
