"use client"

import React, { useEffect, useRef, useCallback } from "react"
import Link from "next/link"

import { NeuralNetwork } from "@/components/neural-network"

/* ===== SCROLL REVEAL HOOK ===== */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
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

  return ref
}

/* ===== BLOG DATA ===== */
const blogPosts = [
  {
    title: "The Consciousness Paradox",
    abstract:
      "Is consciousness a fundamental property of the universe, or an emergent byproduct of neural complexity? Two competing frameworks—Integrated Information Theory and Global Workspace Theory—offer radically different answers with profound implications for our understanding of selfhood.",
    conflict: "Substrate vs. Process: Whether consciousness is intrinsic to information integration or emerges from specific broadcast architectures.",
    angle: "Vedantic Perspective: Consciousness as Brahman (foundational reality) vs. materialist reduction to neural correlates.",
    reference: "Tononi, G. (2008). Consciousness as Integrated Information. Biological Bulletin, 215(3). Baars, B.J. (1997). In the Theater of Consciousness. Oxford University Press.",
  },
  {
    title: "Quantum Reality and the Observer",
    abstract:
      "The measurement problem remains quantum mechanics' deepest enigma. The Copenhagen Interpretation posits that observation collapses the wave function, while the Many-Worlds Interpretation argues all outcomes are realized in branching universes—eliminating collapse entirely.",
    conflict: "Collapse vs. Branching: Does observation create a single reality, or does every quantum event spawn parallel worlds?",
    angle: "Māyā and Measurement: The striking parallels between the observer-dependent reality of Copenhagen and the Vedantic concept of Māyā as perceived reality.",
    reference: "Everett, H. (1957). Relative State Formulation of Quantum Mechanics. Reviews of Modern Physics. Zurek, W.H. (2003). Decoherence and the Transition from Quantum to Classical. Physics Today.",
  },
  {
    title: "Free Will Under the Microscope",
    abstract:
      "Benjamin Libet's landmark experiments revealed that unconscious brain activity precedes conscious decisions by nearly half a second. Does this neural precedence eliminate free will, or does it merely reveal the architecture of a deeper volitional process?",
    conflict: "Determinism vs. Agency: Whether the readiness potential preceding conscious awareness proves that free will is an illusion.",
    angle: "Karma and Volition: The interplay between predetermined neural pathways and the Vedantic concept of conscious choice (Sankalpa) in shaping reality.",
    reference: "Libet, B. (1985). Unconscious Cerebral Initiative and the Role of Conscious Will. Behavioral and Brain Sciences 8(4). Schurger, A. et al. (2012). Neural Antecedents of Spontaneous Voluntary Movement. PNAS.",
  },
  {
    title: "Entropy, Order, and Dharma",
    abstract:
      "The second law of thermodynamics declares that disorder must increase—yet life perpetually creates order from chaos. This tension between entropy and self-organization mirrors ancient philosophical debates about cosmic purpose and cyclical existence.",
    conflict: "Decay vs. Creation: How can rising entropy coexist with the emergence of increasingly complex living systems?",
    angle: "Ṛta and Thermodynamics: The Vedic concept of cosmic order (Ṛta/Dharma) as a counterforce to entropic dissolution, paralleling dissipative structure theory.",
    reference: "Prigogine, I. (1977). Self-Organization in Non-Equilibrium Systems. Wiley. Schrödinger, E. (1944). What is Life? Cambridge University Press.",
  },
  {
    title: "Can Machines Become Self-Aware?",
    abstract:
      "As artificial neural networks achieve superhuman performance in narrow domains, the question of machine consciousness grows urgent. Can computational systems develop genuine self-awareness, or is subjective experience uniquely biological?",
    conflict: "Computation vs. Phenomenology: Whether sufficient computational complexity can give rise to subjective experience, or if consciousness requires something beyond information processing.",
    angle: "Chit and Computation: The Vedantic distinction between Chit (pure awareness) and Jada (inert matter) applied to the question of machine sentience.",
    reference: "Dehaene, S., Lau, H., & Kouider, S. (2017). What is Consciousness? Current Biology. Tegmark, M. (2017). Life 3.0: Being Human in the Age of Artificial Intelligence. Knopf.",
  },
]

/* ===== MAIN PAGE ===== */
export default function HomePage() {
  const containerRef = useReveal()

  return (
    <div ref={containerRef} className="relative flex flex-col">


      {/* ===== HERO SECTION ===== */}
      <section className="relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-28">
        {/* Aurora glow orbs */}
        <div
          className="animate-aurora pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse at center, hsla(27,100%,50%,0.2) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />
        <div
          className="animate-aurora-2 pointer-events-none absolute left-[40%] top-[45%] h-[400px] w-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, hsla(33,100%,53%,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />

        {/* Geometric accent */}
        <div
          className="animate-gentle-rotate pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
          aria-hidden="true"
        >
          <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
            <circle cx="300" cy="300" r="280" stroke="hsl(27,100%,50%)" strokeWidth="0.5" />
            <circle cx="300" cy="300" r="220" stroke="hsl(27,100%,50%)" strokeWidth="0.3" />
            <circle cx="300" cy="300" r="160" stroke="hsl(33,100%,53%)" strokeWidth="0.3" />
            <polygon points="300,40 560,440 40,440" stroke="hsl(27,100%,50%)" strokeWidth="0.3" fill="none" />
            <polygon points="300,560 40,160 560,160" stroke="hsl(33,100%,53%)" strokeWidth="0.3" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Main Title */}
          <div className="reveal" style={{ transitionDelay: "0ms" }}>
            <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
              <span className="animate-shimmer">
                Q realm
              </span>
            </h1>
            <p className="mt-3 font-serif text-xl font-light tracking-widest text-muted-foreground md:text-2xl">
              Tattva Vimarsha
            </p>
          </div>

          {/* Sanskrit Sloka */}
          <div className="reveal mt-10" style={{ transitionDelay: "200ms" }}>
            <div className="tooltip-trigger inline-block">
              <p className="font-devanagari text-xl leading-loose text-saffron-300 md:text-2xl" style={{ fontFamily: "var(--font-devanagari)" }}>
                &ldquo;न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।&rdquo;
              </p>
              <p className="mt-2 text-sm italic tracking-wide text-muted-foreground">
                Nā hi jñānena sadṛśaṁ pavitram iha vidyate.
              </p>
              <p className="mt-1 text-xs text-muted-foreground/70">
                — Bhagavad Gita 4.38
              </p>
              {/* Tooltip on hover */}
              <div className="tooltip-fade mt-3 rounded-lg bg-[hsl(0,0%,100%,0.05)] px-4 py-2 text-sm text-saffron-200">
                &ldquo;There is nothing as purifying as knowledge.&rdquo;
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="reveal mt-14" style={{ transitionDelay: "400ms" }}>
            <Link href="/blogs" className="saffron-btn animate-saffron-pulse inline-block text-base">
              Enter the Debate
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="reveal absolute bottom-8 left-1/2 -translate-x-1/2" style={{ transitionDelay: "800ms" }}>
          <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <div className="h-8 w-px animate-float bg-gradient-to-b from-saffron-500/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="relative z-10 px-4 py-24 md:py-32" id="about">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-16 text-center" style={{ transitionDelay: "0ms" }}>
            <h2 className="font-serif text-3xl font-semibold md:text-4xl lg:text-5xl">
              Why Q realm?
            </h2>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-saffron-500 to-transparent" />
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Text */}
            <div className="space-y-6">
              <div className="reveal glass-card rounded-xl p-8" style={{ transitionDelay: "100ms" }}>
                <h3 className="font-serif text-xl font-semibold text-saffron-300">
                  Interpretations Shape Civilizations
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Every great advancement in human thought has emerged from the collision of competing interpretations. From ancient Vedantic discourse to modern quantum mechanics, the pursuit of truth has never been a straight line—it has been a battle.
                </p>
              </div>

              <div className="reveal glass-card rounded-xl p-8" style={{ transitionDelay: "200ms" }}>
                <h3 className="font-serif text-xl font-semibold text-saffron-300">
                  Science · Philosophy · Metaphysics
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  This platform stands at the intersection of empirical science, philosophical inquiry, and metaphysical wisdom. We apply structured reasoning and evidence-based debate to the most fundamental questions of existence.
                </p>
              </div>

              <div className="reveal glass-card rounded-xl p-8" style={{ transitionDelay: "300ms" }}>
                <h3 className="font-serif text-xl font-semibold text-saffron-300">
                  Evidence-Based Discourse
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  No dogma. No rhetoric. Every argument is grounded in verifiable research, peer-reviewed scholarship, and rigorous logical analysis. The battlefield here demands intellectual honesty above all.
                </p>
              </div>
            </div>

            {/* Right: Neural Network Animation */}
            <div className="reveal flex items-center justify-center" style={{ transitionDelay: "200ms" }}>
              <div className="glass-card flex items-center justify-center rounded-2xl p-6">
                <NeuralNetwork className="h-auto w-full max-w-[500px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG SECTION ===== */}
      <section className="relative z-10 px-4 py-24 md:py-32" id="discourses">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-16 text-center" style={{ transitionDelay: "0ms" }}>
            <h2 className="font-serif text-3xl font-semibold md:text-4xl lg:text-5xl">
              Intellectual Discourses
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Rigorous analyses bridging ancient wisdom and frontier science. Each discourse examines a fundamental conflict from multiple interpretive lenses.
            </p>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-saffron-500 to-transparent" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <div
                key={post.title}
                className="reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <article className="glass-card animate-float-slow group flex h-full flex-col rounded-2xl p-7" style={{ animationDelay: `${i * 1.2}s` }}>
                  {/* Number badge */}
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-saffron-500/10 text-xs font-semibold text-saffron-400">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-saffron-300">
                    {post.title}
                  </h3>

                  {/* Abstract */}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.abstract}
                  </p>

                  {/* Key Conflict */}
                  <div className="mt-5 rounded-lg bg-saffron-500/5 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-saffron-400">
                      Key Conflict
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {post.conflict}
                    </p>
                  </div>

                  {/* Interpretation Angle */}
                  <div className="mt-3 rounded-lg bg-[hsl(0,0%,100%,0.02)] px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-saffron-300/70">
                      Interpretation Angle
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {post.angle}
                    </p>
                  </div>

                  {/* Reference */}
                  <div className="mt-4 border-t border-[hsl(0,0%,100%,0.05)] pt-4">
                    <p className="text-[11px] leading-relaxed text-muted-foreground/50">
                      {post.reference}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-5">
                    <Link
                      href="/blogs"
                      className="saffron-underline inline-flex items-center gap-2 text-sm font-medium text-saffron-400 transition-colors duration-300 hover:text-saffron-300"
                    >
                      Read Full Analysis
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
