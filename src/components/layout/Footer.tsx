import Link from "next/link";
import { footerLinks, siteConfig, fanSiteDisclaimer } from "@/lib/site-config";

/**
 * 底部 Footer
 * 包含链接分组 + fan site 声明
 */
export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--color-border)] bg-[var(--color-bg-soft)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3 flex items-center gap-2">
              <div className="relative flex h-8 w-8 items-center justify-center">
                <div className="absolute inset-0 rotate-45 rounded-md border-2 border-[var(--color-primary)]" />
                <span className="relative text-xs font-black text-[var(--color-primary)]">GD</span>
              </div>
              <span className="font-bold text-[var(--color-text)]">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)]">
              Independent fan made Geometry Dash resource.
            </p>
          </div>

          {/* Link Groups */}
          {Object.entries(footerLinks).map(([groupName, links]) => (
            <div key={groupName}>
              <h3 className="mb-3 text-sm font-bold text-[var(--color-text)]">{groupName}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Fan Site Disclaimer */}
        <div className="mt-10 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
          <p className="text-xs leading-relaxed text-[var(--color-text-dim)]">
            {fanSiteDisclaimer}
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-[var(--color-text-dim)]">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-dim)]">
            Not affiliated with RobTop Games.
          </p>
        </div>
      </div>
    </footer>
  );
}
