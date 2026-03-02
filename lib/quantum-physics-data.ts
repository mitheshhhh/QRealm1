import type { Phase } from "@/components/phase-section"

export const quantumPhysicsPhases: Phase[] = [
  {
    number: 1,
    title: "Foundations of Modern Physics",
    description:
      "Understand why classical physics reached its limits and how the seeds of quantum theory were planted through thermodynamics and relativity.",
    chapters: [
      {
        number: 1,
        title: "Failures in Classical Physics",
        slug: "/quantum-physics/failures-in-classical-physics",
        topics: [
          { label: "Failure of classical physics" },
          { label: "Birth of modern ideas" },
          { label: "Why quantum theory was required" },
        ],
        fullDraft: [
          "Classical physics, built on the pillars of Newtonian mechanics, Maxwell's electromagnetism, and thermodynamics, was remarkably successful in explaining the macroscopic world. However, by the late 19th and early 20th centuries, several experimental observations could not be reconciled within the classical framework.",
          "\n## Key Failures\n",
          "**1. Blackbody Radiation (Ultraviolet Catastrophe)**",
          "Classical theory predicted that a blackbody should radiate infinite energy at short wavelengths — a result known as the ultraviolet catastrophe. The Rayleigh–Jeans law, derived from classical electrodynamics, gave spectral energy density as:",
          "    u(ν, T) = (8πν²/c³) · k_B T",
          "This diverges as ν → ∞, predicting infinite total energy — clearly unphysical.",
          "Max Planck resolved this in 1900 by proposing that energy is emitted in discrete quanta: E = hν, where h = 6.626 × 10⁻³⁴ J·s. This was the first departure from classical continuity.",
          "",
          "**2. Photoelectric Effect**",
          "When light strikes a metal surface, electrons are ejected. Classical wave theory predicted that increasing light intensity should increase electron kinetic energy — but experiments showed otherwise. The kinetic energy depends only on the frequency of light, not intensity.",
          "Einstein explained this in 1905 using Planck's quantum hypothesis: light consists of photons, each carrying energy E = hν. Electrons are ejected only if hν ≥ φ (the work function).",
          "",
          "**3. Atomic Stability and Line Spectra**",
          "According to classical electrodynamics, an electron orbiting a nucleus should continuously radiate energy and spiral inward — meaning atoms should be unstable. Yet atoms are stable, and they emit light only at specific discrete frequencies (line spectra).",
          "Bohr's model (1913) introduced quantised orbits, but it was ad hoc and only worked for hydrogen. A deeper framework was needed.",
          "",
          "**4. Specific Heat of Solids**",
          "The classical Dulong–Petit law predicted that the molar specific heat of solids should be constant at 3R ≈ 24.9 J·mol⁻¹·K⁻¹. Experiments showed that specific heat drops significantly at low temperatures.",
          "Einstein (1907) and Debye (1912) resolved this by treating lattice vibrations as quantised harmonic oscillators.",
          "",
          "**5. Stefan–Boltzmann Law and Wien's Displacement**",
          "While the Stefan–Boltzmann law (P = σT⁴, where σ = 5.67 × 10⁻⁸ W·m⁻²·K⁻⁴) and Wien's displacement law (λ_max · T = 2.898 × 10⁻³ m·K) were experimentally verified, classical theory could not derive them from first principles without invoking quantisation.",
          "",
          "## The Paradigm Shift",
          "",
          "These failures collectively demonstrated that the continuous, deterministic framework of classical physics was fundamentally incomplete. Nature at the atomic scale operates by different rules — rules that require:",
          "• Quantisation of energy (E = hν)",
          "• Wave-particle duality",
          "• Probabilistic rather than deterministic descriptions",
          "• A new mathematical formalism (wave functions, operators, Hilbert spaces)",
          "",
          "The birth of quantum mechanics was not an incremental refinement — it was a revolutionary rupture in our understanding of physical law.",
        ],
      },
      {
        number: 2,
        title: "Essence of Mathematics in Quantum Physics",
        slug: "/quantum-physics/essence-of-mathematics-in-quantum-physics",
        topics: [
          { label: "Energy, entropy, irreversibility" },
          { label: "Microscopic vs macroscopic view" },
          { label: "Seeds of probability" },
        ],
        fullDraft: [
          "Mathematics is not merely a tool in quantum physics — it is the language in which quantum reality is expressed. Unlike classical physics, where mathematical descriptions often correspond to intuitive physical pictures, quantum mechanics demands that we trust the mathematics even when our intuitions fail.",
          "",
          "## Why Mathematics is Essential\n",
          "**1. The Wave Function ψ(x, t)**",
          "The central object of quantum mechanics is the wave function ψ(x, t), a complex-valued function whose squared modulus gives the probability density of finding a particle at position x at time t:",
          "    ρ(x, t) = |ψ(x, t)|²",
          "The wave function contains all physically accessible information about a quantum system. It exists in a Hilbert space — an infinite-dimensional complex vector space with an inner product.",
          "",
          "**2. Operators and Observables**",
          "Every physical observable (position, momentum, energy) is represented by a Hermitian operator acting on the Hilbert space. The eigenvalues of these operators give the possible measurement outcomes:",
          "    Â|ψ⟩ = a|ψ⟩",
          "where Â is the operator, |ψ⟩ is the eigenstate, and a is the eigenvalue (a real number, guaranteed by Hermiticity).",
          "",
          "**3. The Schrödinger Equation**",
          "The time evolution of a quantum system is governed by the Schrödinger equation:",
          "    iℏ ∂ψ/∂t = Ĥψ",
          "where Ĥ is the Hamiltonian operator (total energy) and ℏ = h/2π is the reduced Planck constant. This is the quantum analogue of Newton's second law.",
          "",
          "**4. Probability and the Born Rule**",
          "The Born rule connects the mathematical formalism to experimental predictions. The probability of measuring eigenvalue aₙ is:",
          "    P(aₙ) = |⟨φₙ|ψ⟩|²",
          "where |φₙ⟩ is the eigenstate corresponding to aₙ. This probabilistic interpretation was one of the most radical departures from classical determinism.",
          "",
          "**5. Superposition and Linearity**",
          "The Schrödinger equation is linear, meaning any linear combination of solutions is also a solution:",
          "    |ψ⟩ = c₁|φ₁⟩ + c₂|φ₂⟩ + ... + cₙ|φₙ⟩",
          "This mathematical property corresponds to the physical principle of superposition — a quantum system can exist in multiple states simultaneously until measured.",
          "",
          "**6. Commutation Relations and Uncertainty**",
          "The Heisenberg uncertainty principle arises from the non-commutativity of certain operator pairs:",
          "    [x̂, p̂] = iℏ",
          "This leads to the fundamental limit:",
          "    Δx · Δp ≥ ℏ/2",
          "This is not a limitation of measurement technology — it is a fundamental property of nature encoded in the mathematics.",
          "",
          "**7. Normalisation**",
          "For the probabilistic interpretation to be consistent, the total probability must equal 1:",
          "    ∫₋∞^∞ |ψ(x, t)|² dx = 1",
          "This normalisation condition constrains the allowed wave functions and ensures physical meaningfulness.",
          "",
          "## Mathematics as the Foundation",
          "",
          "In quantum physics, the mathematics is the physics. The wave function, operators, eigenvalues, and commutation relations are not abstractions overlaid on a more 'real' physical picture — they are the most fundamental description we have of quantum reality.",
          "",
          "Without mathematics, quantum mechanics would be a collection of paradoxes. With mathematics, it becomes the most precisely tested theory in the history of science.",
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Mathematical & Wave Function Intuition",
    description:
      "Develop an intuitive understanding of wave-particle duality, probability amplitudes, and the meaning of quantum states.",
    chapters: [
      {
        number: 4,
        title: "De Broglie Theory",
        topics: [
          { label: "Matter waves" },
          { label: "Experimental evidence" },
          { label: "Philosophical implications" },
        ],
      },
      {
        number: 5,
        title: "Probability Density & \u03C8",
        topics: [
          { label: "Probability amplitude" },
          { label: "Physical meaning" },
          { label: "Classical vs quantum probability" },
        ],
      },
      {
        number: 6,
        title: "Quantum States",
        topics: [
          { label: "State vectors" },
          { label: "Superposition" },
          { label: "Meaning of a state" },
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Core Quantum Mechanics",
    description:
      "Engage with the mathematical formalism of quantum mechanics: the Schr\u00F6dinger equation, normalisation, and the eigenvalue problem.",
    chapters: [
      {
        number: 7,
        title: "Schr\u00F6dinger Equation",
        topics: [
          { label: "Time-dependent & independent forms" },
          { label: "Postulates" },
          { label: "Interpretation" },
          { label: "Boundary conditions" },
        ],
      },
      {
        number: 8,
        title: "Normalisation",
        topics: [
          { label: "Why it is required" },
          { label: "Mathematical & physical meaning" },
        ],
      },
      {
        number: 9,
        title: "Eigenvalues & Eigenfunctions",
        topics: [
          { label: "Operators" },
          { label: "Observables" },
          { label: "Measurement" },
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Model Systems",
    description:
      "Apply quantum mechanics to idealised systems and understand how energy quantisation emerges from boundary conditions.",
    chapters: [
      {
        number: 10,
        title: "Finite & Infinite Potential Wells",
        topics: [
          { label: "Particle in a box" },
          { label: "Energy quantisation" },
          { label: "Real-world relevance" },
        ],
      },
    ],
  },
  {
    number: 5,
    title: "Measurement & Interpretation",
    description:
      "Confront the measurement problem and explore the philosophical interpretations that attempt to explain quantum phenomena.",
    chapters: [
      {
        number: 11,
        title: "Quantum Measurement",
        topics: [
          { label: "Measurement postulate" },
          { label: "Wave function collapse" },
          { label: "Observer problem" },
        ],
      },
      {
        number: 12,
        title: "Interpretations",
        topics: [
          { label: "Copenhagen" },
          { label: "Many-Worlds" },
          { label: "Pilot-Wave" },
          { label: "Consciousness debate" },
        ],
      },
    ],
  },
  {
    number: 6,
    title: "Non-Locality & Entanglement",
    description:
      "Explore the puzzling phenomena of quantum non-locality and entanglement that challenge our deepest assumptions about reality.",
    chapters: [
      {
        number: 13,
        title: "EPR Paradox",
        topics: [{ label: "Local realism" }],
      },
      {
        number: 14,
        title: "Quantum Entanglement",
        topics: [
          { label: "Bell's theorem" },
          { label: "Experimental proof" },
          { label: "Philosophical consequences" },
        ],
      },
    ],
  },
  {
    number: 7,
    title: "Quantum Technologies",
    description:
      "See how quantum principles are harnessed for computing, communication, and security in real-world technologies.",
    chapters: [
      {
        number: 15,
        title: "Qubits",
        topics: [
          { label: "Classical vs quantum bits" },
          { label: "Superposition & entanglement" },
        ],
      },
      {
        number: 16,
        title: "Quantum Computing",
        topics: [
          { label: "Gates" },
          { label: "Algorithms" },
          { label: "Future impact" },
        ],
      },
      {
        number: 17,
        title: "Quantum Cryptography",
        topics: [
          { label: "Quantum key distribution" },
          { label: "Physics-based security" },
        ],
      },
    ],
  },
  {
    number: 8,
    title: "Particles & Fields",
    description:
      "Journey into quantum field theory, where particles are excitations of underlying fields and the standard model begins to take shape.",
    chapters: [
      {
        number: 18,
        title: "Antimatter",
        topics: [
          { label: "Dirac equation" },
          { label: "Symmetry" },
        ],
      },
      {
        number: 19,
        title: "Quantum Electrodynamics",
        topics: [
          { label: "Light-matter interaction" },
          { label: "Virtual particles" },
        ],
      },
      {
        number: 20,
        title: "Quantum Field Theory",
        topics: [
          { label: "Fields as fundamental" },
          { label: "Particles as excitations" },
        ],
      },
    ],
  },
]
