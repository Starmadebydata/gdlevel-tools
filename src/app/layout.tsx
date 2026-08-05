import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Russo_One } from "next/font/google";
import "./globals.css";
import { generateSeo, websiteSchema, organizationSchema } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";

// Google Analytics 测量 ID
// 在 Google Analytics 控制台获取，格式形如 G-XXXXXXXXXX
const GA_MEASUREMENT_ID = "G-BWGVR8JE0K";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// GD 风格展示字体 — 用于标题/按钮（Pusab 的开源近似）
const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-russo-one",
});

export const metadata: Metadata = generateSeo({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 防闪烁脚本：在页面渲染前就设置好 data-theme
  // 这样用户打开页面时主题就是对的，不会先闪一下深色再切换
  const themeScript = `
    (function() {
      try {
        var theme = localStorage.getItem('gd-theme') || 'dark';
        if (theme !== 'dark' && theme !== 'light' && theme !== 'auto') theme = 'dark';
        document.documentElement.setAttribute('data-theme', theme);
      } catch(e) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    })();
  `;

  // GA4 Consent Mode v2 默认状态：全部 denied
  // 必须在 gtag.js 加载前执行，这样 Google Analytics 一加载就知道用户还没同意
  // 用户在 CookieConsent 组件里点 Accept/Decline 后会 update 这个状态
  // 即使 gtag 还没加载，这个命令也会缓存在 dataLayer 里，加载后自动执行
  const consentDefaultScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted',
      wait_for_update: 500
    });
  `;

  return (
    <html lang="en" className={`${inter.variable} ${russoOne.variable} h-full antialiased`} data-theme="dark" suppressHydrationWarning>
      <head>
        {/* 防闪烁：在 CSS 加载前就设置好主题 */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />

        {/* GA4 Consent Mode v2 默认状态：在 gtag.js 加载前设为 denied */}
        <script dangerouslySetInnerHTML={{ __html: consentDefaultScript }} />

        {/* WebSite Schema — 放在 head 中便于 Google 识别 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />

        {/* Organization Schema — 放在 head 中便于 Google 识别 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </head>
      <body className="gd-bg-animated min-h-full flex flex-col">
        {/* 全局几何网格背景 */}
        <div className="fixed inset-0 gd-grid pointer-events-none opacity-40" />

        {/* Google Analytics (gtag.js) — 异步加载，不影响页面渲染 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        <Header />
        <main className="relative flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
