import type React from "react"
import { Info, AlertTriangle, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"

type NoteType = "info" | "warning" | "tip"

interface NoteProps {
  type?: NoteType
  title?: string
  children: React.ReactNode
  className?: string
}

export default function Note({ type = "info", title, children, className }: NoteProps) {
  const icons = {
    info: <Info className="h-5 w-5 text-blue-400" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-400" />,
    tip: <Lightbulb className="h-5 w-5 text-green-400" />,
  }

  const styles = {
    info: "bg-blue-950/30 border-blue-800 text-blue-100",
    warning: "bg-amber-950/30 border-amber-800 text-amber-100",
    tip: "bg-green-950/30 border-green-800 text-green-100",
  }

  const defaultTitle = {
    info: "Note",
    warning: "Warning",
    tip: "Tip",
  }

  return (
    <div className={cn("p-4 rounded-lg border", styles[type], className)}>
      <div className="flex gap-3">
        <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
        <div>
          {title && <h4 className="font-medium mb-1">{title}</h4>}
          {!title && defaultTitle[type] && <h4 className="font-medium mb-1">{defaultTitle[type]}</h4>}
          <div className="text-sm opacity-90">{children}</div>
        </div>
      </div>
    </div>
  )
}

