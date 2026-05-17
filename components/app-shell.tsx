import { KnowledgeTree } from "@/components/knowledge-tree";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen overflow-hidden bg-background text-foreground">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="tech-glow pointer-events-none absolute inset-0 opacity-80" />
      <KnowledgeTree />
      <main className="relative flex min-w-0 flex-1 flex-col overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6">{children}</div>
      </main>
    </div>
  );
}
