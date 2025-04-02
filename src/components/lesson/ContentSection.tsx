import type React from "react"
import { cn } from "@/lib/utils"

interface ContentSectionProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export default function ContentSection({ title, children, className }: ContentSectionProps) {
  return (
    <section className={cn("mb-10", className)}>
      {title && <h2 className="text-2xl font-bold mb-4 text-cyan-300">{title}</h2>}
      <div className="space-y-4">{children}</div>
    </section>
  )
}

