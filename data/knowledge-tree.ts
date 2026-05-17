import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Brain,
  Cpu,
  Layers,
  Rocket,
  Sparkles,
} from "lucide-react";

export type LessonLink = {
  slug: string;
  title: string;
};

export type KnowledgeCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  lessons: LessonLink[];
};

export const knowledgeTree: KnowledgeCategory[] = [
  {
    id: "basics",
    title: "入门基础",
    icon: Sparkles,
    lessons: [
      { slug: "what-is-ai", title: "什么是人工智能" },
      { slug: "ml-vs-dl", title: "机器学习 vs 深度学习" },
      { slug: "ai-workflow", title: "AI 产品开发流程" },
    ],
  },
  {
    id: "ml",
    title: "机器学习",
    icon: Brain,
    lessons: [
      { slug: "supervised-learning", title: "监督学习" },
      { slug: "feature-engineering", title: "特征工程" },
      { slug: "model-evaluation", title: "模型评估指标" },
    ],
  },
  {
    id: "dl",
    title: "深度学习",
    icon: Layers,
    lessons: [
      { slug: "neural-networks", title: "神经网络基础" },
      { slug: "cnn-intro", title: "卷积神经网络" },
      { slug: "transformer-arch", title: "Transformer 架构" },
    ],
  },
  {
    id: "llm",
    title: "大语言模型",
    icon: Bot,
    lessons: [
      { slug: "prompt-engineering", title: "提示词工程" },
      { slug: "rag-basics", title: "RAG 检索增强" },
      { slug: "fine-tuning", title: "微调与对齐" },
    ],
  },
  {
    id: "apps",
    title: "AI 应用",
    icon: Rocket,
    lessons: [
      { slug: "ai-agents", title: "AI Agent 设计" },
      { slug: "multimodal", title: "多模态应用" },
      { slug: "ai-ethics", title: "AI 伦理与安全" },
    ],
  },
  {
    id: "tools",
    title: "工具与实践",
    icon: Cpu,
    lessons: [
      { slug: "python-stack", title: "Python AI 工具链" },
      { slug: "api-integration", title: "API 接入实践" },
      { slug: "deploy-ml", title: "模型部署入门" },
    ],
  },
];

export function getAllLessons(): LessonLink[] {
  return knowledgeTree.flatMap((c) => c.lessons);
}

export function getLessonBySlug(slug: string): LessonLink | undefined {
  return getAllLessons().find((l) => l.slug === slug);
}
