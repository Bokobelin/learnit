"use client"

import React from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CodeExampleProps {
  code: string
  language?: string
  title?: string
  showLineNumbers?: boolean
  isExecutable?: boolean
  className?: string
  onExecute?: () => void
}

export default function CodeExample({
  code,
  language = "python",
  title,
  showLineNumbers = true,
  className,
}: CodeExampleProps) {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("my-6 rounded-lg overflow-hidden border border-slate-700 bg-slate-800/50", className)}>
      {title && (
        <div className="px-4 py-2 bg-slate-700/50 border-b border-slate-700 flex justify-between items-center">
          <div className="text-sm font-mono text-slate-300">{title}</div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              className="h-8 px-2 text-slate-400 hover:text-slate-300 hover:bg-slate-700/50"
              onClick={copyToClipboard}
            >
              {copied ? (
                <>
                  <Check size={16} className="mr-1 text-green-400" />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={16} className="mr-1" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </div>
      )}
      <pre className={cn("p-4 overflow-x-auto font-mono text-sm", showLineNumbers && "line-numbers")}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}

