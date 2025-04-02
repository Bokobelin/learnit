import Link from "next/link"
import { getLessonPages } from "./utils/getLessonPages"
import { Button } from "@/components/ui/button"

export default function LearnPage() {
  const lessonPages = getLessonPages("python")

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Python Lessons
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Master Python programming with our structured, hands-on lessons
          </p>
        </header>

        <div className="bg-slate-800/50 rounded-xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-700/50">
                  <th className="px-6 py-4 text-left font-medium text-cyan-300">Lesson</th>
                  <th className="px-6 py-4 text-right font-medium text-cyan-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {lessonPages.map((lesson, index) => (
                  <tr key={lesson.id} className="border-t border-slate-700 hover:bg-slate-700/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-cyan-400 mr-3 font-mono">
                          {index + 1}
                        </span>
                        <span className="font-medium">{lesson.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link href={lesson.path}>
                        <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium px-5 py-2 rounded-md transition-all hover:shadow-lg hover:scale-105">
                          Start Lesson
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>Track your progress and earn certificates as you complete each lesson</p>
        </div>
      </div>
    </div>
  )
}

