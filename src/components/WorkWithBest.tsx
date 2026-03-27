"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

export const WorkWithBest = () => {
    return (
        <section className="overflow-hidden bg-[#d7dfca] py-12 md:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-lg"
                    >
                        <p className="text-xs text-[var(--pine-teal)] uppercase tracking-[0.2em] font-semibold mb-6 border-b border-[var(--pine-teal)]/20 pb-2 inline-block">
                            Work with the best
                        </p>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--pine-teal)] leading-tight mb-8">
                            <span className="italic">
                                World-class talent
                            </span>{' '}
                            with no borders
                        </h2>

                        <p className="text-base md:text-lg text-[var(--hunter-green)] leading-relaxed mb-6">
                            Work with top global creative talent – elite designers, project managers, animators, copywriters, AI technologists and more, recruited from the best brands and agencies.
                        </p>

                        <p className="text-sm text-[var(--hunter-green)] leading-relaxed mb-8">
                            <span className="text-[var(--pine-teal)] font-bold">Plus,</span> a dedicated project manager to ensure your briefs stay on track from start to finish.
                        </p>

                        <Button variant="dark" size="md">
                            Book a demo
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--pine-teal)]/10 bg-[linear-gradient(145deg,#f1f4ea_0%,#d9e2cc_52%,#c8d7bf_100%)] p-8 shadow-[0_24px_70px_rgba(52,78,65,0.08)]">
                            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/45 blur-3xl" />
                            <div className="relative z-10">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--pine-teal)]/70">
                                    Global Delivery DNA
                                </p>
                                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[var(--pine-teal)] md:text-4xl">
                                    Senior specialists. One embedded team.
                                </h3>

                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div className="rounded-2xl border border-[var(--pine-teal)]/12 bg-white/60 px-4 py-5">
                                        <p className="text-2xl font-semibold text-[var(--pine-teal)]">15+</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--hunter-green)]/78">countries</p>
                                    </div>
                                    <div className="rounded-2xl border border-[var(--pine-teal)]/12 bg-white/60 px-4 py-5">
                                        <p className="text-2xl font-semibold text-[var(--pine-teal)]">100%</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--hunter-green)]/78">senior execution</p>
                                    </div>
                                    <div className="rounded-2xl border border-[var(--pine-teal)]/12 bg-white/60 px-4 py-5">
                                        <p className="text-2xl font-semibold text-[var(--pine-teal)]">48h</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--hunter-green)]/78">onboarding window</p>
                                    </div>
                                    <div className="rounded-2xl border border-[var(--pine-teal)]/12 bg-white/60 px-4 py-5">
                                        <p className="text-2xl font-semibold text-[var(--pine-teal)]">24/7</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--hunter-green)]/78">handoff coverage</p>
                                    </div>
                                </div>

                                <p className="mt-6 text-sm leading-relaxed text-[var(--hunter-green)]/84">
                                    We design teams around your roadmap, not fixed roles. That means less coordination overhead and more shipped outcomes.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
