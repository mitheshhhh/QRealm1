"use client"

import Link from "next/link"
import { InlineMath, BlockMath } from "@/components/math-renderer"
import { StructuredByAI } from "@/components/structured-by-ai"

export default function EssenceOfMathematicsPage() {
    return (
        <div className="relative z-10">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center px-4 pb-12 pt-24 text-center md:pb-20 md:pt-32">
                <div className="mx-auto max-w-3xl animate-fade-up">
                    <span className="inline-flex items-center rounded-lg bg-gradient-to-r from-saffron-500/20 to-saffron-600/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-saffron-400 mb-4">
                        Phase 1 · Chapter 2
                    </span>
                    <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        ESSENCE OF MATHEMATICS IN QUANTUM PHYSICS
                    </h1>
                    <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-saffron-500 to-transparent" />
                    <div className="mt-6">
                        <Link
                            href="/quantum-physics"
                            className="saffron-underline inline-flex items-center gap-2 text-sm font-medium text-saffron-400 transition-colors duration-300 hover:text-saffron-300"
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-180">
                                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Back to Quantum Physics
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content Card */}
            <section className="mx-auto max-w-4xl px-4 pb-24">
                <div className="glass-card rounded-2xl p-7 md:p-10 animate-fade-up" style={{ animationDelay: "100ms" }}>

                    {/* Introduction */}
                    <p className="text-base leading-relaxed text-muted-foreground">
                        In general sense when we talk about math's some people fear it so much that they forget how easy it is. Till now I couldn't understand why people feared mathematics, but when I started my college i didn't fear it but felt challenged, I got increasingly interested on the topic, and I wanted to understand how I could completely use Mathematics in quantum physics.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        And the answer is many ways.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        First, we will understand how mathematics can be useful while solving tiny quantum states.
                    </p>

                    <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-saffron-500/30 to-transparent" />

                    {/* Linear Algebra */}
                    <h2 className="font-serif text-2xl font-semibold text-saffron-300 md:text-3xl">
                        Linear Algebra
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Linear algebra is a branch of mathematics that deals with solving or giving answers for the problems requiring to manipulate solutions with straight lines or anything in higher dimensional structure or planes which helps connecting algebraic manipulation with geometrical intuition.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Now we understand how to use linear algebra in quantum physics.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Quantum Physics is a branch of science that deals with probability density of a particle present there. It also explains how a particle has both particle and wave nature.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Let's talk about superposition for some time, and later I will explain how it is related to linear algebra.
                    </p>

                    {/* Superposition */}
                    <h3 className="mt-6 font-serif text-xl font-semibold text-foreground/90">
                        Superposition
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Superposition: In simple terms, superposition is the interaction between two or more waves.
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        When two waves in the same phase interact, they either make constructive interference or destructive interference.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Now, before everything this symbol is the vector of a wave function <InlineMath tex="|\psi\rangle" /> and instead of the usual arrow scientist liked to make things interesting by changing the notation and the called this notation a ket vector in specific Bra - ket notation <InlineMath tex="|\;\rangle" />.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        <InlineMath tex="|\psi\rangle" /> This notation also denotes the physical state of quantum system or a qubit.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Why am I introducing new information between a lecture?
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        It is because it is very much related.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Now how is that all related to linear algebra, well its quite simple, when we want to add all the waves that are imposing on each other which is making up a quantum state then the way it is shown reminds me of a linear combination of vectors of all the waves that are imposing each other. This might be constructive or destructive. We are not going there for now.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        The only way I see this is to explain the importance of vectors ( a part of linear algebra) in the field of understanding discrete energy.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        For example:
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        The Quantum state <InlineMath tex="|\psi\rangle" /> which will give me (in generalized sense) all the information on a quantum state. I went the show all the energy states, hence, i will represent it in this way,
                    </p>
                    <BlockMath tex="|\psi\rangle = a_1|\psi_1\rangle + a_2|\psi_2\rangle + a_3|\psi_3\rangle + \ldots" />
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        The above equation shows the information of the energies of different particles that are in superposition. This equation tells us the energy information of the wave function, and it is represented as a linear combination of the above vectors.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        This Is Just one-use case situation of vectors in quantum physics.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        There are more things in vectors that we use in quantum physics...
                    </p>

                    <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-saffron-500/30 to-transparent" />

                    {/* Vector Spaces */}
                    <h2 className="font-serif text-2xl font-semibold text-saffron-300 md:text-3xl">
                        Vector Spaces
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        The basic mathematical definition of vector spaces is just the collection of so-called objects like vectors, that can be added together or multiplied with numbers (called scalars and usually are real or complex number depending on the branch of physics we are using these vector spaces).
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        There are some rules (axioms) that need to be followed, like: Distributive property, associative property, commutative property, and the existence of zero or identity elements.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        These operations allow vectors to combine and scale, forming a structure fundamental to linear algebra.
                    </p>

                    <h3 className="mt-6 font-serif text-xl font-semibold text-foreground/90">
                        Key Components:
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Set of Vectors (V):</strong> The collection of objects (e.g., arrows, coordinate lists, functions, matrices) that behave like vectors.
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Field of Scalars (F):</strong> The set of numbers used for scaling (e.g., real numbers for real vector spaces, complex numbers for complex vector spaces)
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Vector Addition (+):</strong> An operation combining two vectors to produce another vector in the set.
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Scalar Multiplication (·):</strong> An operation combining a scalar and a vector to produce another vector in the set
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        I won't be explaining rules here in this chapter but later on as we go I will try explaining 10th grade math....…
                    </p>

                    <h3 className="mt-6 font-serif text-xl font-semibold text-foreground/90">
                        Examples:
                    </h3>
                    <ul className="mt-2 space-y-2 pl-1">
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>The set of all 2D or 3D vectors</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>The set of all polynomials to a certain degree.</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>The set of all m*n matrices of the same dimensions.</span>
                        </li>
                    </ul>

                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Hmm, so what? What is the relation between these vector spaces and Quantum Physics?
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Well, it's simple to understand, in vector spaces we define it by saying it is the combination of vectors in that is in a system that can be added together and multiplied with a scalar. Interpret this in this way.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        I have multiple psi states and i want to find the total energy output of the quantum state. According to the rules, we can state that we can add or multiply the quantum states to get our desired output. I can also use it to find the arbitrary state of the quantum system using complex numbers.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground italic">
                        *Note: An arbitrary state of a quantum system is a general, complex-valued superposition of basis states.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Hey, we have seen what and how we use vector spaces in quantum physics. Note that this is just a gist that is a part of a much larger part of an ocean of knowledge in quantum physics.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Moving Forward we have something that is very interesting. And that is.…
                    </p>

                    <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-saffron-500/30 to-transparent" />

                    {/* MATRICES */}
                    <h2 className="font-serif text-2xl font-semibold text-saffron-300 md:text-3xl">
                        MATRICES
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Matrices are the arrangement of coordinates in the format of rows and columns to make visualization and application very easy.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        In mathematical terms, a rectangular array of numbers, symbols, or expressions arranged in rows and columns used in mathematics, science, and computer graphics to organize data, solve equations, and represent transformation.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Matrices are defined by their order (rows × columns) and allow operations like addition, subtraction, and multiplication, simplifying complex systems and data analysis.
                    </p>

                    <h3 className="mt-6 font-serif text-xl font-semibold text-foreground/90">
                        Types of Matrices
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Square Matrix:</strong> Same number of rows and columns (e.g., 2x2, 3x3).
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Row Matrix (Vector):</strong> Contains only one row.
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Column Matrix (Vector):</strong> Contains only one column.
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Zero Matrix:</strong> All elements are zero.
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Identity Matrix (I):</strong> A square matrix with 1s on the main diagonal and zeros elsewhere (like '1' for numbers).
                    </p>

                    <h3 className="mt-6 font-serif text-xl font-semibold text-foreground/90">
                        Matrix Operations
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Addition/Subtraction:</strong> Requires matrices of the same order; add/subtract corresponding elements.
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Scalar multiplication:</strong> Multiply every element by a single number (scalar).
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Matrix multiplication involves taking the dot product of rows of the first matrix with columns of the second matrix.
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        It is only possible when the number of columns in the first matrix equals the number of rows in the second.
                    </p>

                    <h3 className="mt-6 font-serif text-xl font-semibold text-foreground/90">
                        Applications
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Solving Systems of Equations:</strong> Efficiently solve linear equations.
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Computer Graphics:</strong> Transformations like rotation, scaling, and translation.
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Image Processing:</strong> Representing images as pixel grids for filters (blur, edge detection).
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Physics & Engineering:</strong> Representing vectors, transformations, and systems.
                    </p>

                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                        Now we will understand why, where and how matrix is needed in quantum physics,
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        In quantum physics, matrix is used to show the evolution of the quantum state, and it is very useful to represent dimensions in the matrix model of M theory.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        M theory explains 11-dimensional quantum gravity as the large N - limit of supersymmetric quantum mechanics describing N X N matrix valued degrees of freedom (D0-branes). It explains how space
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        matrix-valued degrees of freedom (D0-Branes). It explains how space, time, and extended objects like membranes arise from non-commutative matrix interactions, unifying strings, and gravity.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        This is just one understanding of how matrices are used. Later on, we will discuss how 11 dimensions and M theory and also from where all this quantum gravity came. M theory is just one example of the use case in quantum physics.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Now let's understand the essence of calculus in quantum physics
                    </p>

                    <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-saffron-500/30 to-transparent" />

                    {/* Calculus */}
                    <h2 className="font-serif text-2xl font-semibold text-saffron-300 md:text-3xl">
                        Calculus
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Calculus is the mathematical study of continuous change and consists of two main branches:
                    </p>
                    <ul className="mt-2 space-y-2 pl-1">
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>Differential calculus, which deals with rates of change</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>Integral calculus, which deals with accumulation and area</span>
                        </li>
                    </ul>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Calculus plays a central role in quantum mechanics, particularly in wave equations and operator formalism.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        In quantum Physics we use these properties of differential calculus and integral calculus. But before all this, we must understand neatly why we need to understand a single concept of probability called the probability density.
                    </p>

                    <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-saffron-500/30 to-transparent" />

                    {/* Probability Density */}
                    <h2 className="font-serif text-2xl font-semibold text-saffron-300 md:text-3xl">
                        Probability Density
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Probability Density describes the likelihood of a continuous random variable falling within a specific range.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Probability density is easier to understand with a graph
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground italic">
                        Mithesh pls remind me to add the graph...
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        We denote Probability density with f(x)
                    </p>

                    <h3 className="mt-6 font-serif text-xl font-semibold text-foreground/90">
                        Probability density in quantum mechanics
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        In classical physics, if I tell you the position and velocity of a particle, you can predict exactly where it will be later.
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        In quantum mechanics, that certainty is gone.
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Instead of exact predictions, the theory gives probabilities.
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        That's where probability density comes in.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Probability density with respect to quantum mechanics gives us the possibility or the probability of the particle to be found there.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Mathematically, the probability density is
                    </p>
                    <BlockMath tex="\rho(x,t) = |\psi(x,t)|^2" />
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">This means:</p>
                    <ul className="mt-2 space-y-2 pl-1">
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span><InlineMath tex="\psi(x,t)" /> → the wavefunction</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span><InlineMath tex="|\psi|^2" /> → the probability density</span>
                        </li>
                    </ul>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        So, if <InlineMath tex="|\psi(x)|^2" /> is large at some position x, you are more likely to find the particle there when you measure it.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        We use psi to show the probable position in the given limits of the graph.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        In the given graph, the limits (a, b) say that the particle is maybe found between these two-given points.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        We normalize (meaning we equate the equation to the only two possible outcomes which is 1 or 0) the probability density equation to on.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Now, coming back to integration, we often say that it is used to find the area under a graph. To build intuition, imagine a velocity–time (v–t) graph.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        If we want to find the acceleration, we take the derivative of velocity with respect to time.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        On the other hand, if we want to find the displacement, we integrate the velocity–time graph over a given time interval. The area under the v–t graph gives total displacement.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        The essence of integration is to understand data accumulation and summation. In physical terms, this means adding continuously changing quantities over time or space. Geometrically, this corresponds to finding the area under a curve.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        In principle, we could think of this process as summing up the areas of many small rectangles under the curve. However, using a simple summation symbol (Σ) is not practical here because we are dealing with an infinite or infinitesimally large number of extremely tiny rectangles.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Instead, we divide the area under the curve into rectangles of infinitesimal width. We first consider the area of one tiny rectangle, then let its width approach zero. Taking the limit of this infinite summation leads naturally to the concept of integration.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        By integrating the function within appropriate limits, we obtain the total accumulated quantity, which represents the exact area under the graph. Thus, integration provides a precise mathematical tool for calculating accumulated physical quantities such as displacement, work, charge, and probability.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        This is why and how we use integration in probability density with respect to quantum physics.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Think of <InlineMath tex="|\psi(x)|^2" /> as a density of probability per unit length.
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">So:</p>
                    <ul className="mt-2 space-y-2 pl-1">
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>Probability in a small interval dx:</span>
                        </li>
                    </ul>
                    <BlockMath tex="dP = |\psi(x)|^2 \, dx" />
                    <ul className="mt-2 space-y-2 pl-1">
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>Probability of finding the particle between a and b:</span>
                        </li>
                    </ul>
                    <BlockMath tex="P(a \leq x \leq b) = \int_a^b |\psi(x)|^2 \, dx" />
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">This is directly analogous to:</p>
                    <ul className="mt-2 space-y-2 pl-1">
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>mass density → total mass</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>charge density → total charge</span>
                        </li>
                    </ul>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        I will try explaining the basics of integration and differentiation and probably about probability as well as limits to better grasp the knowledge about quantum mechanics.
                    </p>

                    <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-saffron-500/30 to-transparent" />

                    {/* Conclusion */}
                    <h2 className="font-serif text-2xl font-semibold text-saffron-300 md:text-3xl">
                        Conclusion
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Mathematics forms the backbone of quantum physics and serves as the essential language through which quantum phenomena are understood and expressed. What may initially seem abstract, or intimidating becomes intuitive when mathematical concepts are tied to physical meaning. Linear algebra provides the framework to describe quantum states through vectors, superposition, and vector spaces, allowing complex quantum systems to be represented in a structured and meaningful way. Matrices further extend this framework by enabling the representation of operators, transformations, and the evolution of quantum states, even playing a role in advanced theories such as quantum gravity and M-theory. Calculus complements these ideas by describing continuous change and accumulation, which is crucial for understanding wavefunctions and probability densities. Since quantum mechanics replace deterministic predictions with probabilistic outcomes, integration becomes the key tool for extracting measurable probabilities from the wavefunction. Together, linear algebra, matrices, and calculus do not merely support quantum physics—they define it, transforming abstract mathematics into a powerful lens through which the fundamental nature of reality can be explored and understood.
                    </p>

                    {/* Structured by AI marker inside card */}
                    <div className="mt-12 flex justify-end">
                        <span
                            className="animate-fade-pulse text-[11px] font-medium text-saffron-400/60"
                            style={{ fontVariant: "small-caps", letterSpacing: "0.15em" }}
                        >
                            Structured by AI
                        </span>
                    </div>
                </div>
            </section>

            <StructuredByAI />
        </div>
    )
}
