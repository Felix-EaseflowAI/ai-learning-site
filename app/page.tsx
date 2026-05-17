import Link from "next/link";
import { ArrowRight, Brain, Layers, Sparkles } from "lucide-react";

import { DailyKnowledgeCard } from "@/components/daily-knowledge-card";
import { getAllLessons, knowledgeTree } from "@/data/knowledge-tree";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  const totalLessons = getAllLessons().length;
  const firstLesson = knowledgeTree[0]?.lessons[0];

  return (
    <div className="content-panel p-6 sm:p-10">
      <header className="mb-8">
        <p className="text-sm tracking-[0.2em] text-cyan-400/80 uppercase">
          Neural Knowledge Hub
        </p>
        <h1 className="mt-2 bg-gradient-to-r from-cyan-300 via-violet-300 to-cyan-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
          探索人工智能的知识宇宙
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          从左侧知识树选择课程，在右侧阅读内容。每天更新一条 AI 知识点，帮你持续积累。
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <DailyKnowledgeCard />
        </div>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <Card className="border-cyan-500/20 bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Sparkles className="size-4 text-cyan-400" />
                学习概览
              </CardTitle>
              <CardDescription>当前知识库统计</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <Stat label="知识模块" value={String(knowledgeTree.length)} />
              <Stat label="课程总数" value={String(totalLessons)} />
            </CardContent>
          </Card>

          <Card className="border-violet-500/20 bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Brain className="size-4 text-violet-400" />
                推荐起点
              </CardTitle>
              <CardDescription>适合零基础入门</CardDescription>
            </CardHeader>
            <CardContent>
              {firstLesson && (
                <Link
                  href={`/learn/${firstLesson.slug}`}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full justify-between border-cyan-500/30 hover:bg-cyan-500/10"
                  )}
                >
                  {firstLesson.title}
                  <ArrowRight className="size-4" />
                </Link>
              )}
            </CardContent>
          </Card>

          <Card className="border-cyan-500/15 bg-card/40">
            <CardContent className="flex items-center gap-3 pt-4">
              <Layers className="size-5 shrink-0 text-cyan-400/70" />
              <p className="text-xs leading-relaxed text-muted-foreground">
                提示：点击左侧分类展开子课程，内容区会在此显示完整章节。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-cyan-500/15 bg-cyan-500/5 px-3 py-3 text-center">
      <p className="text-2xl font-semibold text-cyan-300">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
