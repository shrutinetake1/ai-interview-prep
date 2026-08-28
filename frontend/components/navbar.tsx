import React from "react";
import Link from "next/link";
import { Sparkles, Bot, FileText, LayoutDashboard } from "lucide-react";

/**
 * Navbar Component
 * 
 * Note: Once shadcn/ui is initialized (npx shadcn@latest init), 
 * button elements can be replaced with `@/components/ui/button`.
 */
export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            InterviewAI
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link
            href="/dashboard"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/#features"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Bot className="h-4 w-4" />
            Mock Interview
          </Link>
          <Link
            href="/#resume-analyzer"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <FileText className="h-4 w-4" />
            Resume Analyzer
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};
