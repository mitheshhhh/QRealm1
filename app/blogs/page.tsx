"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Bell's Theorem and the Death of Local Realism",
    abstract:
      "John Bell's 1964 inequality fundamentally altered our understanding of quantum mechanics. By proving that no theory of local hidden variables can reproduce all predictions of quantum mechanics, Bell demonstrated that reality is either non-local or indeterminate — both options shattering our classical intuitions about the physical world.",
    conflict: "Locality vs. Completeness: Can reality be both locally causal and fully determined, or must we abandon one of these deeply held assumptions about the physical world?",
    angle: "The Vedantic concept of interconnectedness (Pratītyasamutpāda) and its resonance with quantum non-locality — reality as an indivisible whole rather than separable parts.",
    reference: {
      author: "John Stewart Bell",
      publication: "On the Einstein Podolsky Rosen Paradox",
      journal: "Physics, Vol. 1, No. 3, pp. 195–200",
      year: 1964,
    },
  },
  {
    id: 2,
    title: "Experimental Proof of Entanglement",
    abstract:
      "Alain Aspect's groundbreaking 1982 experiments provided the first conclusive violation of Bell inequalities, confirming that entangled particles exhibit correlations that cannot be explained by any local hidden variable theory. These results earned Aspect the Nobel Prize in Physics in 2022 and remain among the most profound experimental results in the history of science.",
    conflict: "Hidden Variables vs. Quantum Mechanics: Do unobserved physical properties determine measurement outcomes, or is quantum indeterminacy fundamental?",
    angle: "Māyā revisited: If entangled particles share no classical signal yet correlate perfectly, what does this imply about the objectivity of spatial separation itself?",
    reference: {
      author: "Alain Aspect, Jean Dalibard, Gérard Roger",
      publication: "Experimental Realization of Einstein-Podolsky-Rosen-Bohm Gedankenexperiment",
      journal: "Physical Review Letters, 49(25), pp. 1804–1807",
      year: 1982,
    },
  },
  {
    id: 3,
    title: "Universal Wave Function: The Many-Worlds Thesis",
    abstract:
      "Hugh Everett's relative state formulation eliminates wave function collapse entirely by proposing that all quantum measurement outcomes are realized — each in a separate branch of a universal wave function. This interpretation demands an ontologically extravagant universe but achieves unparalleled mathematical elegance and consistency.",
    conflict: "Ontological Economy vs. Mathematical Elegance: Is it more reasonable to accept wave function collapse (with its ill-defined mechanism) or an infinity of unobservable parallel worlds?",
    angle: "The Many-Worlds hypothesis echoes the Vedantic concept of infinite Lokas (realms of existence) — the possibility that consciousness navigates through a multiverse of experiential realities.",
    reference: {
      author: "Hugh Everett III",
      publication: "Relative State Formulation of Quantum Mechanics",
      journal: "Reviews of Modern Physics, 29(3), pp. 454–462",
      year: 1957,
    },
  },
  {
    id: 4,
    title: "Copenhagen: The Orthodox Boundary",
    abstract:
      "The Copenhagen interpretation, articulated primarily by Niels Bohr and Werner Heisenberg, draws a fundamental boundary between the quantum and classical worlds. It asserts that quantum mechanics does not describe objective reality — only the outcomes of measurements performed by classical observers. This epistemic humility has been both its strength and its most criticized feature.",
    conflict: "Ontology vs. Epistemology: Does quantum mechanics describe reality as it is, or merely provide a calculus for predicting measurement results?",
    angle: "Bohr's complementarity principle and its surprising parallels with the Upanishadic teaching of Neti Neti ('not this, not this') — knowledge approached through the systematic negation of incomplete descriptions.",
    reference: {
      author: "Niels Bohr (interpreted through lineage scholarship)",
      publication: "Atomic Theory and the Description of Nature",
      journal: "Cambridge University Press",
      year: 1934,
    },
  },
  {
    id: 5,
    title: "Consciousness as Integrated Information",
    abstract:
      "Giulio Tononi's Integrated Information Theory (IIT) proposes that consciousness is identical to a specific type of information processing — integrated information, quantified as Φ. A system is conscious to the degree that it integrates information beyond the sum of its parts. This bold framework makes consciousness a fundamental property, potentially present in any sufficiently integrated system.",
    conflict: "Panpsychism vs. Biological Exclusivism: If consciousness is Φ, then even simple systems possess rudimentary awareness — challenging the assumption that consciousness requires biological neural substrates.",
    angle: "IIT's core axiom — that consciousness is intrinsic, irreducible, and fundamental — mirrors the Vedantic concept of Chit (pure consciousness) as a foundational aspect of reality alongside Sat (existence) and Ānanda (bliss).",
    reference: {
      author: "Giulio Tononi",
      publication: "Consciousness as Integrated Information: A Provisional Manifesto",
      journal: "Biological Bulletin, 215(3), pp. 216–242",
      year: 2008,
    },
  },
  {
    id: 6,
    title: "Quantum Supremacy: Computing Beyond Classical Limits",
    abstract:
      "Google's 2019 demonstration of quantum computational supremacy marked a milestone in computing history. Their Sycamore processor performed a specific computation in 200 seconds that would take classical supercomputers an estimated 10,000 years. While the practical significance is debated, the theoretical implications are profound — quantum mechanics enables computational capabilities fundamentally beyond classical physics.",
    conflict: "Demonstration vs. Utility: Does achieving quantum supremacy on a contrived problem prove quantum computing's transformative potential, or merely confirm a theoretical possibility without practical significance?",
    angle: "The relationship between computational power and the nature of physical law — if quantum computers outperform classical ones, what does this reveal about the computational structure underlying reality itself?",
    reference: {
      author: "Frank Arute et al. (Google AI Quantum)",
      publication: "Quantum Supremacy Using a Programmable Superconducting Processor",
      journal: "Nature, 574(7779), pp. 505–510",
      year: 2019,
    },
  },
  {
    id: 7,
    title: "Quantum Error Correction and the Road Ahead",
    abstract:
      "IBM's research into quantum error correction represents perhaps the most critical challenge in quantum computing. Quantum bits are extraordinarily fragile, susceptible to decoherence and noise. Without error correction, large-scale quantum computation is impossible. Recent advances in topological codes and surface codes bring fault-tolerant quantum computing closer to reality.",
    conflict: "Theoretical Promise vs. Engineering Reality: Can quantum error correction overcome the exponential overhead required to protect quantum information, or will noise permanently limit quantum computers to small-scale demonstrations?",
    angle: "The battle against decoherence as a metaphor for the broader struggle between order and entropy — the thermodynamic arrow of time working against the preservation of quantum coherence, mirroring the Vedantic tension between Ṛta (cosmic order) and Tamas (inertia/dissolution).",
    reference: {
      author: "IBM Quantum Research Team",
      publication: "Various publications on quantum error correction and fault tolerance",
      journal: "IBM Quantum Research, arXiv preprints",
      year: 2023,
    },
  },
]

export default function BlogsPage() {
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
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
            Intellectual Discourses
          </h1>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-saffron-500 to-transparent" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Rigorous analyses bridging ancient wisdom and frontier science.
            Each discourse examines a fundamental conflict from multiple
            interpretive lenses, grounded in peer-reviewed research.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="mx-auto max-w-4xl space-y-8 px-4 pb-24">
        {blogPosts.map((post, i) => (
          <div
            key={post.id}
            className="reveal"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <article className="glass-card group rounded-2xl p-7 md:p-9">
              {/* Number badge */}
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-saffron-500/10 text-xs font-bold text-saffron-400">
                  {String(post.id).padStart(2, "0")}
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-saffron-500/20 to-transparent" />
              </div>

              {/* Title */}
              <h2 className="font-serif text-xl font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-saffron-300 md:text-2xl">
                {post.title}
              </h2>

              {/* Abstract */}
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {post.abstract}
              </p>

              {/* Key Conflict */}
              <div className="mt-6 rounded-xl bg-saffron-500/5 px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-wider text-saffron-400">
                  Key Conflict
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.conflict}
                </p>
              </div>

              {/* Interpretation Angle */}
              <div className="mt-3 rounded-xl bg-[hsl(0,0%,100%,0.02)] px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-wider text-saffron-300/60">
                  Interpretation Angle
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.angle}
                </p>
              </div>

              {/* Scientific Reference */}
              <div className="mt-5 border-t border-[hsl(0,0%,100%,0.05)] pt-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
                  Inspired by
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground/60">
                  {post.reference.author}
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground/50">
                  <em>{post.reference.publication}</em>
                </p>
                <p className="text-xs text-muted-foreground/40">
                  {post.reference.journal}, {post.reference.year}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-5">
                <Link
                  href="#"
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
      </section>
    </div>
  )
}
