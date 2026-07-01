import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateSeo, websiteSchema } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} data-theme="dark">
      <head>
        {/* 防闪烁：在 CSS 加载前就设置好主题 */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="gd-bg-animated min-h-full flex flex-col">
        {/* 全局几何网格背景 */}
        <div className="fixed inset-0 gd-grid pointer-events-none opacity-40" />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />

        <Header />
        <main className="relative flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
