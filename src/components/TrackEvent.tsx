"use client";

import { useEffect } from "react";
import { trackEvent, type AnalyticsParams } from "@/lib/analytics";

/**
 * 在服务端页面里埋一次 GA 事件（例如 planner 出结果）。
 * 同一 name + params 不重复发送；换计划后再发。
 */
export default function TrackEvent({
  name,
  params,
}: {
  name: string;
  params?: AnalyticsParams;
}) {
  const serialized = JSON.stringify(params ?? {});

  useEffect(() => {
    const parsed = JSON.parse(serialized) as AnalyticsParams;
    trackEvent(name, Object.keys(parsed).length > 0 ? parsed : undefined);
  }, [name, serialized]);

  return null;
}
