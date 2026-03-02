"use client"

import { StructuredByAI } from "@/components/structured-by-ai"

export default function ForumsPage() {
  return (
    <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4 py-24">
      {/* Animated orbital spinner */}
      <div className="relative mb-12 h-32 w-32">
        {/* Outer ring */}
        <div
          className="absolute inset-0 rounded-full border border-saffron-500/20"
          style={{ animation: "gentleRotate 12s linear infinite" }}
        >
          <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-saffron-400 shadow-[0_0_8px_hsl(27,100%,50%,0.5)]" />
        </div>
        {/* Middle ring */}
        <div
          className="absolute inset-4 rounded-full border border-saffron-400/15"
          style={{ animation: "gentleRotate 8s linear infinite reverse" }}
        >
          <div className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-saffron-300 shadow-[0_0_6px_hsl(27,100%,50%,0.4)]" />
        </div>
        {/* Inner ring */}
        <div
          className="absolute inset-8 rounded-full border border-saffron-300/10"
          style={{ animation: "gentleRotate 5s linear infinite" }}
        >
          <div className="absolute -top-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-saffron-200 shadow-[0_0_4px_hsl(27,100%,50%,0.3)]" />
        </div>
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-saffron-500/30 animate-saffron-pulse" />
        </div>
      </div>

      {/* Coming Soon text */}
      <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
        Coming Soon
      </h1>
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-saffron-500 to-transparent" />

      <p className="mt-6 max-w-md text-center text-lg leading-relaxed text-muted-foreground">
        The Discussion Arena is under active development. A structured space for
        moderated academic discourse is being crafted.
      </p>

      {/* Animated progress dots */}
      <div className="mt-8 flex items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-widest text-saffron-400/60">
          Building
        </span>
        <span
          className="inline-block h-1.5 w-1.5 rounded-full bg-saffron-400"
          style={{ animation: "fadePulse 1.5s ease-in-out infinite" }}
        />
        <span
          className="inline-block h-1.5 w-1.5 rounded-full bg-saffron-400"
          style={{ animation: "fadePulse 1.5s ease-in-out 0.3s infinite" }}
        />
        <span
          className="inline-block h-1.5 w-1.5 rounded-full bg-saffron-400"
          style={{ animation: "fadePulse 1.5s ease-in-out 0.6s infinite" }}
        />
      </div>

      {/* Status badge */}
      <div className="mt-10 glass-subtle rounded-lg px-5 py-3">
        <p className="text-xs text-muted-foreground/70 text-center">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-saffron-400 shadow-[0_0_6px_hsl(27,100%,50%,0.5)]" />
          Active Development · Forums Infrastructure
        </p>
      </div>

      <StructuredByAI />
    </div>
  )
}
