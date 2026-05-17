import { BookOpen, Lightbulb, Zap } from "lucide-react";

import { formatDailyDate, getTodaysKnowledge } from "@/lib/daily";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function DailyKnowledgeCard() {
  const daily = getTodaysKnowledge();
  const dateLabel = formatDailyDate();

  return (
    <Card className="border-cyan-500/25 bg-card/60 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-sm">
      <CardHeader className="border-b border-cyan-500/15">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardDescription className="text-cyan-400/90">
              {dateLabel}
            </CardDescription>
            <CardTitle className="mt-1 text-2xl font-semibold tracking-tight">
              每日 AI 知识
            </CardTitle>
          </div>
          <div className="flex size-10 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10">
            <Zap className="size-5 text-violet-400" />
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {daily.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-cyan-500/30 text-cyan-300/90"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-medium text-foreground">
            <BookOpen className="size-4 text-cyan-400" />
            {daily.title}
          </h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            {daily.summary}
          </p>
        </div>
        <div className="rounded-lg border border-violet-500/20 bg-violet-500/5 p-4">
          <p className="flex items-center gap-2 text-sm font-medium text-violet-300">
            <Lightbulb className="size-4" />
            今日洞察
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {daily.insight}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
