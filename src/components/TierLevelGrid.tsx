"use client";

import { useState } from "react";
import LevelCard from "@/components/LevelCard";
import type { Level } from "@/lib/types";

const INITIAL_COUNT = 12;

export default function TierLevelGrid({
  levels,
  tierLabel,
}: {
  levels: Level[];
  tierLabel: string;
}) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? levels : levels.slice(0, INITIAL_COUNT);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((level) => (
          <LevelCard key={level.id} level={level} />
        ))}
      </div>
      {!showAll && levels.length > INITIAL_COUNT && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="gd-btn gd-btn-outline"
          >
            Show All {levels.length} {tierLabel}
          </button>
        </div>
      )}
    </>
  );
}
