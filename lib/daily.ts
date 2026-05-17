import { dailyKnowledgePool, type DailyKnowledge } from "@/data/daily-knowledge";

const SHANGHAI_TZ = "Asia/Shanghai";

function getShanghaiDateParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: SHANGHAI_TZ,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);

  const year = Number(parts.find((p) => p.type === "year")?.value);
  const month = Number(parts.find((p) => p.type === "month")?.value);
  const day = Number(parts.find((p) => p.type === "day")?.value);

  return { year, month, day };
}

function dayIndex(date: Date): number {
  const { year, month, day } = getShanghaiDateParts(date);
  const start = new Date(year, 0, 0);
  const current = new Date(year, month - 1, day);
  return Math.floor((current.getTime() - start.getTime()) / 86_400_000);
}

export function getTodaysKnowledge(date = new Date()): DailyKnowledge {
  const index = dayIndex(date) % dailyKnowledgePool.length;
  return dailyKnowledgePool[index]!;
}

export function formatDailyDate(date = new Date()): string {
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: SHANGHAI_TZ,
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(date);
}
