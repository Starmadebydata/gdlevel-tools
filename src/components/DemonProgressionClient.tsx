"use client";

import { useState } from "react";
import Link from "next/link";
import LevelCard from "@/components/LevelCard";
import { getProgressionStage, getProgressionRecommendations } from "@/lib/recommendations";

/**
 * Demon Progression Planner 客户端组件
 * 输入已通关 Demon 数量，输出当前阶段和推荐关卡
 */
export default function DemonProgressionClient() {
  const [count, setCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const stage = getProgressionStage(count);
  const recommendations = getProgressionRecommendations(stage.stage);

  function handleSubmit() {
    setSubmitted(true);
  }

  function handleReset() {
    setCount(0);
    setSubmitted(false);
  }

  return (
    <div>
      {/* 输入面板 */}
      <div className="gd-card mb-8 p-6">
        <h3 className="mb-4 text-lg font-bold text-[var(--color-text)]">How many demons have you beaten?</h3>
        <div className="flex flex-wrap items-center gap-4">
          <input
            type="number"
            min={0}
            max={500}
            value={count}
            onChange={(e) => setCount(Math.max(0, Math.min(500, parseInt(e.target.value) || 0)))}
            className="gd-input !w-32 text-center text-lg font-bold"
          />
          <button onClick={handleSubmit} className="gd-btn gd-btn-primary">
            Plan My Route
          </button>
          {submitted && (
            <button onClick={handleReset} className="gd-btn gd-btn-outline">
              Reset
            </button>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {[0, 1, 5, 10, 20, 30, 50, 80, 120].map((n) => (
            <button
              key={n}
              onClick={() => setCount(n)}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-3 py-1 text-xs text-[var(--color-text-muted)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {/* 结果 */}
      {submitted && (
        <div>
          {/* 当前阶段 */}
          <div className="gd-card mb-6 p-6">
            <div className="flex items-center gap-4">
              {/* 阶段指示器 */}
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-[var(--color-primary)] bg-[var(--color-primary)]/10">
                  <span className="text-xl font-black text-[var(--color-primary)] gd-glow-text">{stage.stage}</span>
                </div>
                <span className="mt-1 text-xs text-[var(--color-text-dim)]">Stage</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[var(--color-text)]">{stage.name}</h2>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{stage.description}</p>
              </div>
            </div>

            {/* 进度条 */}
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between text-xs text-[var(--color-text-dim)]">
                <span>Stage 1: First Demon</span>
                <span>Stage 8: Extreme Demon</span>
              </div>
              <div className="relative h-2 rounded-full bg-[var(--color-bg-soft)]">
                <div
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-500"
                  style={{ width: `${(stage.stage / 8) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* 推荐关卡 */}
          <div className="mb-6">
            <h3 className="mb-4 text-lg font-bold text-[var(--color-text)]">Recommended Next Levels</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recommendations.map((level) => (
                <LevelCard key={level.id} level={level} />
              ))}
            </div>
          </div>

          {/* 全阶段路线图 */}
          <div className="gd-card p-6">
            <h3 className="mb-4 text-lg font-bold text-[var(--color-text)]">Full Progression Roadmap</h3>
            <div className="space-y-2">
              {[
                { stage: 1, name: "First Demon", demons: "0", desc: "The Nightmare, The Lightning Road" },
                { stage: 2, name: "Beginner Easy Demon", demons: "1-5", desc: "Platinum Adventure, Demon Park" },
                { stage: 3, name: "Standard Easy Demon", demons: "6-15", desc: "Shiver, Speed Racer, Nocturne" },
                { stage: 4, name: "Early Medium Demon", demons: "16-30", desc: "B, Problematic" },
                { stage: 5, name: "Medium Demon", demons: "31-50", desc: "Problematic, Nine Circles" },
                { stage: 6, name: "Hard Demon", demons: "51-80", desc: "Nine Circles, Jawbreaker" },
                { stage: 7, name: "Insane Demon", demons: "81-120", desc: "Supersonic, Windy Landscape" },
                { stage: 8, name: "Extreme Demon", demons: "120+", desc: "Pointercrate Top 150" },
              ].map((s) => (
                <div
                  key={s.stage}
                  className={`flex items-center gap-4 rounded-lg border p-3 transition-all ${
                    s.stage === stage.stage
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5"
                      : "border-[var(--color-border)] bg-[var(--color-bg-soft)]"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                      s.stage === stage.stage
                        ? "bg-[var(--color-primary)] text-[var(--color-bg)]"
                        : "bg-[var(--color-bg)] text-[var(--color-text-dim)]"
                    }`}
                  >
                    {s.stage}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-bold ${s.stage === stage.stage ? "text-[var(--color-primary)]" : "text-[var(--color-text)]"}`}>
                      {s.name}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">{s.desc}</p>
                  </div>
                  <span className="text-xs text-[var(--color-text-dim)] font-mono">{s.demons} demons</span>
                </div>
              ))}
            </div>
          </div>

          {/* 链接 */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/level-finder/" className="gd-btn gd-btn-outline">
              Browse All Levels
            </Link>
            <Link href="/first-demon-picker/" className="gd-btn gd-btn-outline">
              Try First Demon Picker
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
