"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Home, Sparkles } from "lucide-react";

import { knowledgeTree } from "@/data/knowledge-tree";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function KnowledgeTree() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <aside className="flex h-full w-[280px] shrink-0 flex-col border-r border-cyan-500/20 bg-sidebar/80 backdrop-blur-xl">
      <div className="border-b border-cyan-500/20 px-4 py-5">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 shadow-[0_0_20px_rgba(34,211,238,0.25)]">
            <Sparkles className="size-4 text-cyan-400" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-foreground">
              AI 学习中心
            </p>
            <p className="text-xs text-muted-foreground">Knowledge Hub</p>
          </div>
        </Link>
      </div>

      <ScrollArea className="flex-1 px-2 py-3">
        <nav className="space-y-1">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
              isHome
                ? "bg-cyan-500/15 text-cyan-300 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.35)]"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            )}
          >
            <Home className="size-4 shrink-0" />
            首页 · 每日知识
          </Link>

          <Separator className="my-3 bg-cyan-500/10" />

          {knowledgeTree.map((category) => {
            const Icon = category.icon;
            const hasActiveLesson = category.lessons.some(
              (l) => pathname === `/learn/${l.slug}`
            );

            return (
              <Collapsible
                key={category.id}
                defaultOpen={hasActiveLesson}
                className="group/category"
              >
                <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-muted/50 data-panel-open:bg-muted/30">
                  <Icon className="size-4 shrink-0 text-cyan-400/80" />
                  <span className="flex-1 text-left">{category.title}</span>
                  <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform group-data-panel-open/category:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-2 space-y-0.5 border-l border-cyan-500/15 py-1 pl-3">
                  {category.lessons.map((lesson) => {
                    const href = `/learn/${lesson.slug}`;
                    const isActive = pathname === href;

                    return (
                      <Link
                        key={lesson.slug}
                        href={href}
                        className={cn(
                          "block rounded-md px-2.5 py-1.5 text-sm transition-colors",
                          isActive
                            ? "bg-violet-500/15 text-violet-200 shadow-[inset_2px_0_0_0_theme(colors.violet.400)]"
                            : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                        )}
                      >
                        {lesson.title}
                      </Link>
                    );
                  })}
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </nav>
      </ScrollArea>

      <div className="border-t border-cyan-500/20 px-4 py-3">
        <p className="text-center text-[10px] tracking-widest text-muted-foreground uppercase">
          Neural · Learn · Build
        </p>
      </div>
    </aside>
  );
}
