import type React from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LessonLayoutProps {
  title: string
  course: string
  lessonNumber: number
  totalLessons: number
  children: React.ReactNode
  prevLesson?: {
    title: string
    path: string
  }
  nextLesson?: {
    title: string
    path: string
  }
}

export default function LessonLayout({
  title,
  course,
  lessonNumber,
  totalLessons,
  children,
  prevLesson,
  nextLesson,
}: LessonLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Top navigation bar */}
      <nav className="sticky top-0 z-10 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/learn" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <Home size={18} />
            <span>All Courses</span>
          </Link>
          <div className="text-slate-400 text-sm">
            <span className="text-cyan-400 font-medium">{course}</span> • Lesson {lessonNumber} of {totalLessons}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Lesson header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            {title}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </header>

        {/* Lesson content */}
        <div className="prose prose-invert prose-lg max-w-none">{children}</div>

        {/* Lesson navigation */}
        <div className="mt-16 pt-8 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          {prevLesson ? (
            <Link href={prevLesson.path}>
              <Button variant="outline" className="flex items-center gap-2 border-slate-700 hover:bg-slate-700/50">
                <ChevronLeft size={16} />
                <span>Previous: {prevLesson.title}</span>
              </Button>
            </Link>
          ) : (
            <div></div>
          )}

          {nextLesson ? (
            <Link href={nextLesson.path}>
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white flex items-center gap-2">
                <span>Next: {nextLesson.title}</span>
                <ChevronRight size={16} />
              </Button>
            </Link>
          ) : (
            <Link href="/learn">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                Complete Course
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

