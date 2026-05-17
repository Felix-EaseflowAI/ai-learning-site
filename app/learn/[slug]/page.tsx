import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { LessonView } from "@/components/lesson-view";
import { getAllLessons, getLessonBySlug } from "@/data/knowledge-tree";
import { getLessonContent } from "@/data/lessons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;
  const meta = getLessonBySlug(slug);
  const content = getLessonContent(slug);

  if (!meta || !content) {
    notFound();
  }

  return (
    <div className="content-panel p-6 sm:p-10">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "mb-6 -ml-2 text-muted-foreground hover:text-cyan-300"
        )}
      >
        <ChevronLeft className="size-4" />
        返回首页
      </Link>
      <LessonView lesson={content} />
    </div>
  );
}

export function generateStaticParams() {
  return getAllLessons().map((lesson) => ({
    slug: lesson.slug,
  }));
}
