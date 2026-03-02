"use client"

import Link from "next/link"
import { InlineMath, BlockMath } from "@/components/math-renderer"
import { StructuredByAI } from "@/components/structured-by-ai"

export default function FailuresInClassicalPhysicsPage() {
    return (
        <div className="relative z-10">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center px-4 pb-12 pt-24 text-center md:pb-20 md:pt-32">
                <div className="mx-auto max-w-3xl animate-fade-up">
                    <span className="inline-flex items-center rounded-lg bg-gradient-to-r from-saffron-500/20 to-saffron-600/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-saffron-400 mb-4">
                        Phase 1 · Chapter 1
                    </span>
                    <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        Failures In Classical Physics
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
                        Blackbody radiation was studied experimentally first, and classical theories were proposed to explain the observed data.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Black body radiation is an idealized object that absorbs all incident radiation and emits radiation no matter the frequency or angle of incidence with a spectrum determined solely by its temperature with finite total energy output. Emits radiation in a continuous spectrum that depends only on its temperature.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        We might have a doubt saying, how or from where the black body is getting energy to emit radiation?
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        The black body absorbs external radiation, converting that energy into internal thermal energy, which is then emitted as thermal radiation according to its temperature.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Classical physics predicted that a black body would emit radiation with a continuous spectrum and that the energy density would diverge at high frequencies, leading to infinite energy output in the ultraviolet region. However, experiments showed that the emitted energy remains finite and decreases at short wavelengths. This failure of classical theory is known as the ultraviolet catastrophe and led to the introduction of energy quantization by Planck.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        To understand why scientist came to an assumption, we first must understand Rayleigh jeans law and Stefan-Boltzmann Constant. But before that we will cover some important topics on equipartition theorem in thermodynamics.
                    </p>

                    <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-saffron-500/30 to-transparent" />

                    {/* The equipartition theorem */}
                    <h2 className="font-serif text-2xl font-semibold text-saffron-300 md:text-3xl">
                        The equipartition theorem (classical physics) states:
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        At thermal equilibrium, each quadratic degree of freedom contributes an average energy of
                    </p>
                    <BlockMath tex="\frac{1}{2} k_B T" />
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">Examples:</p>
                    <ul className="mt-2 space-y-2 pl-1">
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>Translational motion in one direction → <InlineMath tex="\frac{1}{2} k_B T" /></span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>Harmonic oscillator: Kinetic term <InlineMath tex="\frac{1}{2} mv^2" /> → <InlineMath tex="\frac{1}{2} k_B T" /></span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>Potential term <InlineMath tex="\frac{1}{2} kx^2" /> → <InlineMath tex="\frac{1}{2} k_B T" /></span>
                        </li>
                    </ul>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">So a harmonic oscillator has:</p>
                    <BlockMath tex="\langle E \rangle = k_B T" />

                    <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-saffron-500/30 to-transparent" />

                    {/* Applying equipartition to black-body radiation */}
                    <h2 className="font-serif text-2xl font-semibold text-saffron-300 md:text-3xl">
                        Applying equipartition to black-body radiation
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">In classical physics:</p>
                    <ul className="mt-2 space-y-2 pl-1">
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>Radiation inside a black body cavity is treated as standing electromagnetic waves.</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>Each standing wave mode behaves like a harmonic oscillator.</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>Therefore, classical theory assigns energy <InlineMath tex="k_B T" /> to every mode, regardless of frequency.</span>
                        </li>
                    </ul>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        This leads to the Rayleigh–Jean's result:
                    </p>
                    <BlockMath tex="u(\nu, T) \propto \nu^2 \, k_B T" />

                    <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-saffron-500/30 to-transparent" />

                    {/* Rayleigh Jeans */}
                    <h2 className="font-serif text-2xl font-semibold text-saffron-300 md:text-3xl">
                        Rayleigh Jeans
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        The Rayleigh–Jeans law describes black-body radiation by predicting that the energy density is proportional to temperature and to the square of the frequency, or equivalently inversely proportional to the fourth power of wavelength. While it agrees with experimental results at low frequencies (long wavelengths), it predicts a divergence of energy at high frequencies (short wavelengths), leading to the ultraviolet catastrophe. This classical law, derived using the equipartition theorem, failed to explain experimental observations and led to the development of Planck's quantum theory, which successfully explains the full black-body spectrum.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">Energy density per unit:</p>
                    <p className="mt-2 text-base text-muted-foreground">frequency:</p>
                    <BlockMath tex="u(\nu, T) = \frac{8\pi \nu^2 kT}{c^3}" />
                    <p className="mt-2 text-base text-muted-foreground">wavelength:</p>
                    <BlockMath tex="u(\lambda, T) = \frac{8\pi kT}{\lambda^4}" />
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">where:</p>
                    <ul className="mt-2 space-y-2 pl-1">
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span><InlineMath tex="u" /> = energy density</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span><InlineMath tex="\nu" /> = frequency</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span><InlineMath tex="\lambda" /> = wavelength</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span><InlineMath tex="T" /> = absolute temperature</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span><InlineMath tex="k" /> = Boltzmann constant</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span><InlineMath tex="c" /> = speed of light</span>
                        </li>
                    </ul>

                    <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-saffron-500/30 to-transparent" />

                    {/* ULTRAVIOLET CATASTR0PHE */}
                    <h2 className="font-serif text-2xl font-semibold text-saffron-300 md:text-3xl">
                        ULTRAVIOLET CATASTR0PHE
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Ultraviolet catastrophe refers to the catastrophe occurred while trying to explain the black body radiation that occurred while trying to understand the whole experiment in a classical view which helped understand half the experiment while the scientists were baffled by the rest of the observations.
                    </p>
                    <h3 className="mt-6 font-serif text-xl font-semibold text-foreground/90">
                        Key Wrong Assumptions and Predictions:
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Infinite Energy Prediction:</strong> Classical thermodynamics and electromagnetism predicted that a hot object should emit an infinite amount of energy at short wavelengths (ultraviolet spectrum).
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Equipartition Theorem Failure:</strong> Classical physics incorrectly assumed every electromagnetic wave mode within a black body carried the same average energy (kT), leading to a failure at small scales.
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Contradiction of Reality:</strong> Observations showed that the intensity of black body radiation decreases at higher frequencies (UV), rather than increasing, making the classical prediction unphysical
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        <strong className="text-foreground/80">Wrong Model Application:</strong> Applying the equipartition theorem, which worked for particle systems, to every possible electromagnetic mode (infinite number of modes at short wavelengths) meant the total energy would be an infinite sum.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        This catastrophic failure of classical theory to match experimental results prompted Max Planck to introduce the concept of energy quantization (<InlineMath tex="E = h\nu" />), which resolved the discrepancy by showing high-frequency radiation has a low probability of emission.
                    </p>

                    <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-saffron-500/30 to-transparent" />

                    {/* Why the theorem fails at high frequencies */}
                    <h2 className="font-serif text-2xl font-semibold text-saffron-300 md:text-3xl">
                        Why the theorem fails at high frequencies
                    </h2>
                    <h3 className="mt-4 font-serif text-xl font-semibold text-foreground/90">
                        Key problem: energy assumed to be continuous
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">Classical equipartition assumes:</p>
                    <ul className="mt-2 space-y-2 pl-1">
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>Energy can vary continuously</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>No restriction on how small or large energy changes can be</span>
                        </li>
                    </ul>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">But experimentally:</p>
                    <ul className="mt-2 space-y-2 pl-1">
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>High-frequency radiation carries discrete energy packets:</span>
                        </li>
                    </ul>
                    <BlockMath tex="E = h\nu" />
                    <h3 className="mt-6 font-serif text-xl font-semibold text-foreground/90">
                        High-frequency modes are hard to excite
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">At high frequencies:</p>
                    <BlockMath tex="h\nu \gg k_B T" />
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">This means:</p>
                    <ul className="mt-2 space-y-2 pl-1">
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>Thermal energy <InlineMath tex="k_B T" /> is not enough to excite these modes</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>High-frequency oscillators are rarely populated</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>They do not receive <InlineMath tex="k_B T" /> of energy as equipartition predicts</span>
                        </li>
                    </ul>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Classical physics had no mechanism to suppress these modes.
                    </p>

                    <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-saffron-500/30 to-transparent" />

                    {/* Stefan-Boltzmann Law */}
                    <h2 className="font-serif text-2xl font-semibold text-saffron-300 md:text-3xl">
                        Stefan-Boltzmann Law
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        The total energy emitted/radiated per unit surface area of a blackbody across all wavelengths per unit time is directly proportional to the fourth power of the black body's thermodynamic temperature.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        What is the link between Stefan Boltzmann Law and UV catastrophe or black body radiation?
                    </p>

                    <h3 className="mt-6 font-serif text-xl font-semibold text-foreground/90">
                        Stefan–Boltzmann Law in Relation to Blackbody Radiation and UV Radiation
                    </h3>

                    <h4 className="mt-5 font-serif text-lg font-semibold text-foreground/80">1. Blackbody Radiation</h4>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        A blackbody is an ideal physical system that absorbs all incident electromagnetic radiation and emits radiation solely as a function of its temperature. The radiation emitted by a blackbody is known as blackbody radiation and forms a continuous spectrum over all wavelengths.
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        The distribution of emitted radiation depends only on temperature:
                    </p>
                    <ul className="mt-2 space-y-2 pl-1">
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>As temperature increases, the total energy emitted increases</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>The radiation shifts toward shorter wavelengths</span>
                        </li>
                    </ul>

                    <h4 className="mt-5 font-serif text-lg font-semibold text-foreground/80">Stefan–Boltzmann Law</h4>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        The Stefan–Boltzmann law states that the total radiant energy emitted per unit time by a blackbody is proportional to the fourth power of its absolute temperature.
                    </p>
                    <BlockMath tex="P = \sigma A T^4" />
                    <p className="mt-2 text-base text-muted-foreground">or per unit surface area:</p>
                    <BlockMath tex="j^* = \sigma T^4" />
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">Where:</p>
                    <ul className="mt-2 space-y-2 pl-1">
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span><InlineMath tex="P" /> is the total power radiated</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span><InlineMath tex="A" /> is the surface area</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span><InlineMath tex="T" /> is the absolute temperature in kelvin</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span><InlineMath tex="\sigma = 5.67 \times 10^{-8} \, \text{W m}^{-2} \text{K}^{-4}" /> is the Stefan–Boltzmann constant</span>
                        </li>
                    </ul>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        This law describes the total energy emitted across all wavelengths.
                    </p>

                    <h4 className="mt-5 font-serif text-lg font-semibold text-foreground/80">Physical Interpretation</h4>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        The law implies that a small increase in temperature results in a large increase in emitted energy. For example, doubling the temperature increases the emitted power by a factor of sixteen. The Stefan–Boltzmann law therefore governs the overall intensity of blackbody radiation but does not specify how that energy is distributed among different wavelengths.
                    </p>

                    <h4 className="mt-5 font-serif text-lg font-semibold text-foreground/80">Connection to Planck's Radiation Law</h4>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        The Stefan–Boltzmann law can be derived by integrating Planck's radiation law over all wavelengths:
                    </p>
                    <BlockMath tex="j^* = \int_0^{\infty} B(\lambda, T) \, d\lambda" />
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        This shows that Stefan–Boltzmann law represents the total area under the blackbody radiation curve.
                    </p>

                    <h4 className="mt-5 font-serif text-lg font-semibold text-foreground/80">Relation to Ultraviolet (UV) Radiation</h4>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        While the Stefan–Boltzmann law gives the total emitted energy, it does not indicate the fraction emitted as ultraviolet radiation. The wavelength distribution is governed by Wien's displacement law:
                    </p>
                    <BlockMath tex="\lambda_{\max} = \frac{b}{T}" />
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        where <InlineMath tex="b = 2.898 \times 10^{-3} \, \text{m.K}" />.
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        As temperature increases, the peak wavelength shifts toward shorter wavelengths. At sufficiently high temperatures, a significant portion of the radiation is emitted in the UV region of the spectrum.
                    </p>

                    <h4 className="mt-5 font-serif text-lg font-semibold text-foreground/80">Temperature and UV Emission</h4>
                    <ul className="mt-2 space-y-2 pl-1">
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>Low-temperature objects (e.g., human body) emit primarily infrared radiation</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>Medium-temperature objects (e.g., the Sun) emit visible light with some UV radiation</span>
                        </li>
                        <li className="flex items-start gap-3 text-base text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400/50" />
                            <span>Very high-temperature objects (e.g., hot stars) emit a large fraction of their radiation in the ultraviolet</span>
                        </li>
                    </ul>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Thus, UV radiation is associated with high-temperature black bodies.
                    </p>

                    <h4 className="mt-5 font-serif text-lg font-semibold text-foreground/80">UV Catastrophe and Quantum Explanation</h4>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Classical physics predicted that blackbodies should emit infinite energy at short wavelengths, leading to the ultraviolet catastrophe. This contradiction was resolved by Planck's quantum hypothesis, which correctly limits UV emission and leads naturally to the Stefan–Boltzmann law.
                    </p>

                    <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-saffron-500/30 to-transparent" />

                    {/* Real Surfaces */}
                    <h2 className="font-serif text-2xl font-semibold text-saffron-300 md:text-3xl">
                        Real Surfaces
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Real objects are not perfect blackbodies. Their radiation is given by:
                    </p>
                    <BlockMath tex="P = \varepsilon \sigma A T^4" />
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        Where <InlineMath tex="\varepsilon" /> is the emissivity of the surface. Emissivity generally varies with wavelength and is often lower in the UV region.
                    </p>

                    <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-saffron-500/30 to-transparent" />

                    {/* Conclusion */}
                    <h2 className="font-serif text-2xl font-semibold text-saffron-300 md:text-3xl">
                        Conclusion
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        The Stefan–Boltzmann law quantifies the total radiant energy emitted by a blackbody as a function of temperature. Although it does not explicitly describe UV radiation, it is closely related to UV emission through the temperature-dependent shift of the radiation spectrum. High temperatures lead to increased total radiation and a greater proportion of energy emitted in the ultraviolet region.
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
