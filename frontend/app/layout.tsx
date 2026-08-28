import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "InterviewAI - AI-Powered Mock Interviews & Resume Analyzer",
  description:
    "Ace your next technical or behavioral interview with real-time AI feedback and comprehensive resume scoring.",
  keywords: [
    "AI Interview",
    "Mock Interview",
    "Resume Analyzer",
    "Job Prep",
    "Tech Interview",
  ],
};

/**
 * Root Layout Component
 * 
 * To add shadcn/ui components:
 * Run `npx shadcn@latest init` in the frontend directory.
 * Then install components, e.g. `npx shadcn@latest add button card avatar dialog`
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} flex min-h-full flex-col bg-background text-foreground antialiased`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border/40 py-6 text-center text-sm text-muted-foreground">
          <div className="container max-w-7xl">
            &copy; {new Date().getFullYear()} InterviewAI Platform. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
