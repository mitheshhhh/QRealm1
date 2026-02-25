"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const categories = [
  {
    title: "Quantum Foundations",
    description:
      "Discussions on the fundamental postulates, formalism, and mathematical structure of quantum mechanics. From wave functions to operators, explore the bedrock of quantum theory.",
    threads: [
      { title: "Is the wave function ontological or epistemic?", replies: 42, active: true },
      { title: "Normalisation — mathematical necessity or physical truth?", replies: 18, active: false },
      { title: "The role of Hilbert space in quantum mechanics", replies: 27, active: true },
    ],
  },
  {
    title: "Interpretations Debate",
    description:
      "The intellectual arena for debating Copenhagen, Many-Worlds, Pilot-Wave, and other interpretations. Arguments must be grounded in physics and logic, not speculation.",
    threads: [
      { title: "Copenhagen vs Many-Worlds: which is more parsimonious?", replies: 89, active: true },
      { title: "Does decoherence solve the measurement problem?", replies: 56, active: true },
      { title: "Pilot-Wave theory and the price of determinism", replies: 34, active: false },
    ],
  },
  {
    title: "Mathematical Questions",
    description:
      "Rigorous mathematical discussions on eigenvalue problems, operators, Dirac notation, path integrals, and the mathematical structures underlying quantum physics.",
    threads: [
      { title: "Solving the infinite square well — boundary condition nuances", replies: 15, active: false },
      { title: "Why are Hermitian operators used for observables?", replies: 31, active: true },
      { title: "Path integrals vs canonical quantisation", replies: 22, active: false },
    ],
  },
  {
    title: "Technology Applications",
    description:
      "From quantum computing to quantum cryptography, discuss how quantum principles are being engineered into real-world technologies that will reshape computation and security.",
    threads: [
      { title: "Shor's algorithm: when will RSA fall?", replies: 47, active: true },
      { title: "Topological quantum computing — is it the future?", replies: 28, active: false },
      { title: "Quantum advantage vs quantum supremacy: terminology debate", replies: 19, active: true },
    ],
  },
]

function ThreadCard({
  thread,
}: {
  thread: { title: string; replies: number; active: boolean }
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="glass-subtle cursor-pointer rounded-xl px-5 py-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-saffron-500/20"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-sm font-medium text-foreground">{thread.title}</h4>
        <div className="flex shrink-0 items-center gap-2">
          {thread.active && (
            <span className="h-1.5 w-1.5 rounded-full bg-saffron-400 shadow-[0_0_6px_hsl(27,100%,50%,0.5)]" />
          )}
          <span className="text-xs text-muted-foreground/50">
            {thread.replies} replies
          </span>
        </div>
      </div>

      {expanded && (
        <div className="mt-4 border-t border-[hsl(0,0%,100%,0.05)] pt-4">
          <p className="text-xs leading-relaxed text-muted-foreground/70">
            This thread is part of the community discourse. Full thread view with replies,
            citations, and argument analysis will be available soon.
          </p>
          <div className="mt-3 flex gap-3">
            <button className="saffron-underline text-xs font-medium text-saffron-400">
              View Full Thread →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ForumsPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      el.querySelectorAll(".reveal").forEach((c) => c.classList.add("visible"))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    )
    el.querySelectorAll(".reveal").forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="relative z-10">
      {/* Hero Header */}
      <section className="flex flex-col items-center justify-center px-4 pb-16 pt-24 text-center md:pb-24 md:pt-32">
        <div className="reveal mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Discussion Arena
          </h1>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-saffron-500 to-transparent" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            An anti-gravity intellectual arena for moderated academic discourse.
            Engage with interpretations, challenge assumptions, and advance the
            collective understanding through structured debate.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="mx-auto max-w-4xl space-y-8 px-4 pb-24">
        {categories.map((cat, i) => (
          <div
            key={cat.title}
            className="reveal"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="glass-card rounded-2xl p-7 md:p-9">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center rounded-lg bg-saffron-500/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-saffron-400">
                  Category
                </span>
              </div>
              <h2 className="font-serif text-xl font-semibold text-saffron-300 md:text-2xl">
                {cat.title}
              </h2>
              <div className="mt-2 h-px w-16 bg-gradient-to-r from-saffron-500 to-transparent" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {cat.description}
              </p>

              {/* Thread Cards */}
              <div className="mt-6 space-y-3">
                {cat.threads.map((thread) => (
                  <ThreadCard key={thread.title} thread={thread} />
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Contribute Section */}
        <div className="reveal" style={{ transitionDelay: "500ms" }}>
          <div className="glass-card rounded-2xl p-8 text-center">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Contribute to the Discourse
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
              Share your analysis, questions, or research with the community.
              All submissions undergo a verification process to maintain intellectual rigour.
            </p>
            <div className="mt-6">
              <button className="saffron-btn text-sm">
                Submit a Thread
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
