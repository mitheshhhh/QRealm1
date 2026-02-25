import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { ArrowLeft } from "lucide-react"

const blogContent: Record<
  string,
  { title: string; date: string; paragraphs: string[] }
> = {
  "why-quantum-physics-feels-weird": {
    title: "Why Quantum Physics Feels Weird",
    date: "2026-01-15",
    paragraphs: [
      "Our intuitions about the world are shaped by millions of years of evolution in a macroscopic environment. We evolved to track predators, throw spears, and navigate terrain. None of these activities required an understanding of subatomic particles. The result is that we carry deep, unconscious assumptions about how reality works: objects have definite positions, causes precede effects, and the world exists whether we look at it or not.",
      "Quantum mechanics violates all of these assumptions. A particle can exist in a superposition of states, effectively being in multiple places at once until measured. Two particles can be entangled such that measuring one instantly affects the other, regardless of the distance between them. The very act of observation appears to alter the system being observed.",
      "This is not a failure of understanding. It is a feature of reality. The quantum world is not weird because we are confused. It is weird because our evolved intuitions are calibrated for a world that operates on completely different principles at its most fundamental level.",
      "The discomfort we feel when learning quantum physics is itself philosophically significant. It marks the boundary between the world our brains were built to comprehend and the world that actually exists. Recognising this boundary is the first step toward genuine understanding.",
    ],
  },
  "is-reality-deterministic": {
    title: "Is Reality Deterministic?",
    date: "2026-01-22",
    paragraphs: [
      "Determinism is the idea that the state of the universe at any given moment, combined with the laws of physics, uniquely determines the state of the universe at every subsequent moment. In classical physics, this was not just a hypothesis. It was an article of faith. Pierre-Simon Laplace famously argued that an intellect with complete knowledge of all forces and positions could predict the entire future of the universe.",
      "Quantum mechanics introduced fundamental randomness into physics. According to the standard interpretation, the outcome of a quantum measurement is genuinely random. There is no hidden mechanism that determines in advance which result will occur. The wave function gives probabilities, and that is all there is.",
      "But not everyone accepts this. The Pilot-Wave interpretation, developed by David Bohm, restores determinism to quantum mechanics. In this framework, particles have definite trajectories at all times, guided by a wave function. The apparent randomness arises from our ignorance of initial conditions, not from fundamental indeterminacy.",
      "The debate remains unresolved. Experiments can distinguish between quantum mechanics and classical hidden variable theories, as John Bell demonstrated. But they cannot easily distinguish between genuinely random quantum mechanics and deterministic alternatives like Bohmian mechanics that reproduce the same predictions. The question of whether reality is fundamentally deterministic may be as much philosophical as physical.",
    ],
  },
  "what-does-observation-mean": {
    title: "What Does Observation Mean?",
    date: "2026-02-01",
    paragraphs: [
      "In classical physics, observation is passive. You can measure the position of a planet without affecting its orbit. But in quantum mechanics, measurement is a fundamentally different kind of process. The act of measuring a quantum system forces it into a definite state, a process known as wave function collapse.",
      "The question of what constitutes a measurement is known as the measurement problem, and it remains one of the deepest unsolved problems in physics. Does measurement require a conscious observer, as some early interpretations suggested? Or is it merely any physical interaction that correlates a quantum system with a macroscopic apparatus?",
      "The Copenhagen interpretation sidesteps the problem by drawing a line between the quantum world, which obeys the Schrodinger equation, and the classical world, which produces definite outcomes. But this division is arbitrary. Where exactly does the quantum world end and the classical world begin?",
      "More recent interpretations attempt to dissolve the measurement problem entirely. Decoherence theory shows how quantum superpositions become effectively classical through interaction with the environment, without requiring any special role for consciousness. The Many-Worlds interpretation removes collapse altogether, arguing that all outcomes occur in separate branches of the universe. Each approach offers clarity in some areas while raising new questions in others.",
    ],
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const blog = blogContent[slug]
  if (!blog) return { title: "Not Found" }
  return {
    title: `${blog.title} | The Battle of Interpretations`,
    description: blog.paragraphs[0]?.slice(0, 160),
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = blogContent[slug]

  if (!blog) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 md:py-24">
      <Button
        asChild
        variant="ghost"
        className="mb-8 gap-2 px-0 text-muted-foreground transition-colors duration-300 hover:bg-transparent hover:text-foreground"
      >
        <Link href="/blogs">
          <ArrowLeft className="h-4 w-4" />
          Back to Blogs
        </Link>
      </Button>

      <AnimateOnScroll>
        <header>
          <time className="text-xs font-medium text-muted-foreground">
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            {blog.title}
          </h1>
        </header>
      </AnimateOnScroll>

      <Separator className="my-8 bg-primary/20" />

      <article className="flex flex-col gap-6">
        {blog.paragraphs.map((paragraph, i) => (
          <AnimateOnScroll key={i} delay={i * 80}>
            <p className="leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          </AnimateOnScroll>
        ))}
      </article>
    </div>
  )
}
