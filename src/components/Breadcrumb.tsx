import Link from "next/link";
import type { Breadcrumb as BreadcrumbType } from "@/lib/types";

/**
 * 面包屑导航
 */
export default function Breadcrumb({ items }: { items: BreadcrumbType[] }) {
  return (
    <nav className="mb-6 flex items-center gap-2 text-sm" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <div key={item.href} className="flex items-center gap-2">
          {i > 0 && <span className="text-[var(--color-text-dim)]">/</span>}
          {i === items.length - 1 ? (
            <span className="text-[var(--color-text-muted)]">{item.name}</span>
          ) : (
            <Link
              href={item.href}
              className="text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-primary)]"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
