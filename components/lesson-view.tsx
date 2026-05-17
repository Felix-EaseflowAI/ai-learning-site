import { Clock } from "lucide-react";

import type { LessonContent } from "@/data/lessons";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function LessonView({ lesson }: { lesson: LessonContent }) {
  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-8">
        <Badge
          variant="outline"
          className="mb-3 border-violet-500/30 text-violet-300"
        >
          课程
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {lesson.title}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{lesson.description}</p>
        <p className="mt-4 flex items-center gap-1.5 text-sm text-cyan-400/80">
          <Clock className="size-4" />
          约 {lesson.readMinutes} 分钟阅读
        </p>
      </header>

      <Separator className="mb-8 bg-cyan-500/15" />

      <div className="space-y-10">
        {lesson.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-4 text-xl font-semibold text-cyan-300/95">
              {section.heading}
            </h2>
            <div className="space-y-3 text-[15px] leading-7 text-muted-foreground">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              {section.bullets && (
                <ul className="list-disc space-y-2 pl-5 marker:text-cyan-500">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
