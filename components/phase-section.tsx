"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export interface ChapterTopic {
  label: string
}

export interface Chapter {
  number: number
  title: string
  description?: string
  topics: ChapterTopic[]
  fullDraft?: string[]
  slug?: string
}

export interface Phase {
  number: number
  title: string
  description: string
  chapters: Chapter[]
}

function ChapterDraftView({ chapter }: { chapter: Chapter }) {
  const [showFull, setShowFull] = useState(false)

  if (!chapter.fullDraft || chapter.fullDraft.length === 0) return null

  /* Preview: first 2 non-empty prose lines (skip headings/formatting) */
  const previewLines = chapter.fullDraft
    .filter((l) => l.trim().length > 0 && !l.startsWith("##") && !l.startsWith("**") && !l.startsWith("    ") && !l.startsWith("•"))
    .slice(0, 2)

  return (
    <div className="mt-4 pl-12">
      {!showFull ? (
        <>
          <div className="glass-subtle rounded-lg px-4 py-3 space-y-2">
            {previewLines.map((line, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted-foreground/80">
                {line.length > 180 ? line.slice(0, 180) + "…" : line}
              </p>
            ))}
          </div>
          {chapter.slug ? (
            <Link
              href={chapter.slug}
              className="mt-3 inline-block saffron-btn text-xs px-4 py-2"
            >
              View Full Draft
            </Link>
          ) : (
            <button
              onClick={() => setShowFull(true)}
              className="mt-3 saffron-btn text-xs px-4 py-2"
            >
              View
            </button>
          )}
        </>
      ) : (
        <>
          <div className="glass-subtle rounded-lg px-5 py-5 space-y-3">
            {chapter.fullDraft!.map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h3 key={i} className="font-serif text-lg font-semibold text-saffron-300 mt-4 first:mt-0">
                    {line.replace(/^##\s*/, "")}
                  </h3>
                )
              }
              if (line.startsWith("**") && line.endsWith("**")) {
                return (
                  <h4 key={i} className="font-serif text-base font-semibold text-foreground/90 mt-3">
                    {line.replace(/\*\*/g, "")}
                  </h4>
                )
              }
              if (line.startsWith("    ")) {
                return (
                  <div key={i} className="my-2 rounded-lg bg-[hsl(0,0%,100%,0.03)] px-4 py-3 font-mono text-sm text-saffron-300/80 overflow-x-auto">
                    {line.trim()}
                  </div>
                )
              }
              if (line.startsWith("• ")) {
                return (
                  <li key={i} className="ml-4 flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                    <span>{line.replace(/^•\s*/, "")}</span>
                  </li>
                )
              }
              if (line.trim() === "") return <div key={i} className="h-2" />
              return (
                <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                  {line}
                </p>
              )
            })}
          </div>
          <button
            onClick={() => setShowFull(false)}
            className="mt-3 saffron-underline text-xs font-medium text-saffron-400 transition-colors duration-300 hover:text-saffron-300"
          >
            ← Collapse
          </button>
        </>
      )}
    </div>
  )
}

export function PhaseSection({ phase }: { phase: Phase }) {
  return (
    <section className="glass-card rounded-xl transition-all duration-500 hover:-translate-y-1">
      {/* Phase Header */}
      <div className="border-b border-[hsl(0,0%,100%,0.06)] p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-lg bg-gradient-to-r from-saffron-500/20 to-saffron-600/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-saffron-400">
            Phase {phase.number}
          </span>
          <h2 className="font-serif text-lg font-semibold text-foreground md:text-xl">
            {phase.title}
          </h2>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {phase.description}
        </p>
      </div>

      {/* Chapters Accordion */}
      <Accordion type="multiple" className="px-2">
        {phase.chapters.map((chapter) => (
          <AccordionItem
            key={chapter.number}
            value={`chapter-${chapter.number}`}
            className="border-[hsl(0,0%,100%,0.05)]"
          >
            <AccordionTrigger className="px-4 py-4 text-left text-sm font-medium text-foreground transition-colors duration-300 hover:text-saffron-300 hover:no-underline">
              <span className="flex items-center gap-3">
                <span className="shrink-0 rounded-md bg-saffron-500/10 px-2.5 py-1 font-serif text-xs font-semibold text-saffron-400">
                  Ch {chapter.number}
                </span>
                <span>{chapter.title}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-5">
              {/* Chapter description if available */}
              {chapter.description && (
                <p className="mb-4 pl-12 text-sm leading-relaxed text-muted-foreground/80">
                  {chapter.description}
                </p>
              )}
              {/* Subtopics */}
              <ul className="flex flex-col gap-2.5 pl-12">
                {chapter.topics.map((topic) => (
                  <li
                    key={topic.label}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                    <span>{topic.label}</span>
                  </li>
                ))}
              </ul>
              {/* Full Draft Preview/View */}
              {chapter.fullDraft && chapter.fullDraft.length > 0 && (
                <ChapterDraftView chapter={chapter} />
              )}
              {/* Open Discussion button (only if no fullDraft) */}
              {!chapter.fullDraft && (
                <div className="mt-4 pl-12">
                  <button className="saffron-underline text-xs font-medium text-saffron-400 transition-colors duration-300 hover:text-saffron-300">
                    Open Discussion →
                  </button>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
