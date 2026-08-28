import React from "react";
import Link from "next/link";
import {
  Bot,
  FileText,
  Clock,
  Award,
  UploadCloud,
  ArrowRight,
  TrendingUp,
  History,
} from "lucide-react";

/**
 * Dashboard Page Placeholder
 * 
 * Demonstrates a responsive grid layout for interview prep activities,
 * resume upload triggers, and performance summary statistics.
 */
export default function DashboardPage() {
  return (
    <div className="container max-w-7xl py-8 px-4 sm:px-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Candidate Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Track your mock interview progress, analyze resumes, and sharpen your skills.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
            <Bot className="h-4 w-4" />
            New Interview Session
          </button>
        </div>
      </div>

      {/* Stats Summary Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between text-muted-foreground text-sm">
            <span>Interviews Completed</span>
            <Award className="h-4 w-4 text-blue-500" />
          </div>
          <div className="mt-3 text-2xl font-bold">12</div>
          <p className="mt-1 text-xs text-muted-foreground">+3 from last week</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between text-muted-foreground text-sm">
            <span>Average Score</span>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
          <div className="mt-3 text-2xl font-bold">84%</div>
          <p className="mt-1 text-xs text-green-600 font-medium">Top 15% of candidates</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between text-muted-foreground text-sm">
            <span>Practice Time</span>
            <Clock className="h-4 w-4 text-amber-500" />
          </div>
          <div className="mt-3 text-2xl font-bold">6.5 hrs</div>
          <p className="mt-1 text-xs text-muted-foreground">Across all modules</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between text-muted-foreground text-sm">
            <span>Resumes Analyzed</span>
            <FileText className="h-4 w-4 text-indigo-500" />
          </div>
          <div className="mt-3 text-2xl font-bold">4</div>
          <p className="mt-1 text-xs text-muted-foreground">Latest ATS score: 88/100</p>
        </div>
      </div>

      {/* Main Action Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Mock Interview Launch Card */}
        <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm">
          <div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 mb-4">
              <Bot className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold">Start AI Mock Interview</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Select your target role (Frontend, Backend, Fullstack, System Design) and difficulty
              level to begin a live voice/text simulated interview.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-border/40">
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Launch Interview Simulator
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Resume Analyzer Upload Card */}
        <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm">
          <div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 mb-4">
              <UploadCloud className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold">Analyze & Score Resume</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Upload your resume (PDF or DOCX) to get a breakdown of keywords, structural formatting,
              and role alignment feedback.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-border/40">
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Upload New Resume
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Recent Sessions List Placeholder */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-2 text-lg font-semibold mb-4">
          <History className="h-5 w-5 text-muted-foreground" />
          <span>Recent Practice Sessions</span>
        </div>

        <div className="divide-y divide-border/60">
          <div className="py-3 flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Fullstack React & Python System Design</p>
              <p className="text-xs text-muted-foreground">Completed Yesterday • 35 mins</p>
            </div>
            <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-semibold text-green-600">
              88/100
            </span>
          </div>

          <div className="py-3 flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Behavioral: Conflict Resolution & Leadership</p>
              <p className="text-xs text-muted-foreground">Completed 3 days ago • 20 mins</p>
            </div>
            <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-600">
              82/100
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
