import React from "react";
import Link from "next/link";
import { ArrowRight, Bot, FileCheck, LineChart, Sparkles, CheckCircle2 } from "lucide-react";

/**
 * ==============================================================================
 * Landing Page (Hero Section + Feature Preview)
 * ==============================================================================
 * 
 * HOW TO ADD SHADCN/UI COMPONENTS:
 * 1. Initialize shadcn in the `/frontend` directory:
 *      npx shadcn@latest init
 * 2. Add reusable UI components as needed:
 *      npx shadcn@latest add button card badge
 * ==============================================================================
 */
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden py-20 md:py-32 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container max-w-6xl px-4 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Next-Gen AI Interview Intelligence</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Master Your Next Interview with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Real-Time AI
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Practice role-specific mock interviews, receive instant behavioral & technical
            critiques, and optimize your resume for ATS scoring with intelligent AI feedback.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.02]"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#features"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-input bg-background px-8 text-base font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Explore Features
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Instant AI Feedback</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>ATS Resume Scoring</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Role-Specific Scenarios</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="w-full py-16 md:py-24 border-t border-border/40">
        <div className="container max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to land your dream role
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Designed for software engineers, product managers, and data professionals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
                <Bot className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Interactive Mock Interviews</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Engage in dynamic, conversational AI interviews tailored to your target job description and experience level.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600">
                <FileCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">AI Resume Analyzer</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Upload your resume to extract key skills, identify missing keywords, and get ATS-friendly recommendations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                <LineChart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Detailed Performance Analytics</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Track your communication clarity, technical depth, and response times over multiple practice sessions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
