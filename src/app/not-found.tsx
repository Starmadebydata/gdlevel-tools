import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
      {/* 几何装饰 */}
      <div className="relative mb-8">
        <div className="h-20 w-20 rotate-45 rounded-xl border-2 border-[var(--color-primary)] gd-pulse" />
        <div className="absolute inset-3 rotate-45 rounded-lg bg-[var(--color-primary)]/20" />
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-black text-[var(--color-primary)] gd-glow-text">
          404
        </span>
      </div>

      <h1 className="mb-3 text-2xl font-bold text-[var(--color-text)]">Level Not Found</h1>
      <p className="mb-8 text-[var(--color-text-muted)]">
        This page does not exist or has been moved. Let us get you back on track.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/" className="gd-btn gd-btn-primary">Back to Home</Link>
        <Link href="/level-finder/" className="gd-btn gd-btn-outline">Find a Level</Link>
        <Link href="/demon-list/" className="gd-btn gd-btn-outline">View Demon List</Link>
      </div>
    </div>
  );
}
