import React from "react";
import Link from "next/link";
import { ArrowRight, Bot, FileCheck, LineChart, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Landing Page (Hero Section + Feature Preview)
 */
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden py-20 md:py-32 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container max-w-6xl px-4 text-center">
          <Badge
            variant="outline"
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary hover:bg-primary/15"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Next-Gen AI Interview Intelligence</span>
          </Badge>

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
            <Button
              asChild
              size="lg"
              className="h-12 w-full sm:w-auto px-8 text-base font-semibold shadow-lg transition-all hover:scale-[1.02]"
            >
              <Link href="/dashboard" className="gap-2">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 w-full sm:w-auto px-8 text-base font-semibold"
            >
              <a href="#features">
                Explore Features
              </a>
            </Button>
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
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
                  <Bot className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">Interactive Mock Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Engage in dynamic, conversational AI interviews tailored to your target job description and experience level.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600">
                  <FileCheck className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">AI Resume Analyzer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Upload your resume to extract key skills, identify missing keywords, and get ATS-friendly recommendations.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                  <LineChart className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">Detailed Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Track your communication clarity, technical depth, and response times over multiple practice sessions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
