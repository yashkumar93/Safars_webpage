"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

export const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_10%_10%,#4f6f61_0%,#344e41_38%,#223329_100%)] text-white">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(0,0,0,0.36))]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.14]" />

            <motion.div
                aria-hidden
                animate={{ x: [0, 30, 0], y: [0, -24, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -left-16 top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(163,177,138,0.65)_0%,rgba(163,177,138,0)_72%)] blur-xl"
            />
            <motion.div
                aria-hidden
                animate={{ x: [0, -35, 0], y: [0, 20, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-20 top-16 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(124,165,130,0.5)_0%,rgba(124,165,130,0)_74%)] blur-2xl"
            />
            <motion.div
                aria-hidden
                animate={{ x: [0, 22, 0], y: [0, 18, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute bottom-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(236,245,233,0.25)_0%,rgba(236,245,233,0)_68%)] blur-xl"
            />

            <div className="container relative z-10 mx-auto flex min-h-screen items-center px-6">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center pb-16 pt-28 text-center md:pt-36">
                    <motion.span
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/92 backdrop-blur-md"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--dry-sage)]" />
                        Safars
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-[var(--color-text-on-dark-heading)] md:text-6xl lg:text-[5.3rem] lg:leading-[0.99]"
                    >
                        Security delivery,
                        <span className="italic text-[var(--dry-sage)]"> redesigned for AI velocity </span>
                        and human trust.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-7 max-w-3xl text-base leading-relaxed text-[var(--color-text-on-dark-body)]/94 md:text-xl"
                    >
                        Scale with a high-performance team that blends product engineering,
                        security rigor, and AI-native workflows. We help you ship faster,
                        with fewer blind spots and better resilience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-10 flex flex-wrap items-center justify-center gap-4"
                    >
                        <Button
                            size="lg"
                            variant="primary"
                            className="px-8 text-base shadow-[0_18px_40px_rgba(88,129,87,0.32)]"
                        >
                            Start your project
                        </Button>
                        <Button
                            size="lg"
                            variant="secondary"
                            className="px-8 text-base"
                        >
                            See our process
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
                    >
                        <div className="rounded-2xl border border-white/20 bg-white/[0.08] px-5 py-4 backdrop-blur-md">
                            <p className="text-3xl font-semibold tracking-tight text-[var(--color-text-on-dark-heading)]">48h</p>
                            <p className="mt-1 text-sm text-[var(--color-text-on-dark-muted)]/94">to kick off sprint execution</p>
                        </div>
                        <div className="rounded-2xl border border-white/20 bg-white/[0.08] px-5 py-4 backdrop-blur-md">
                            <p className="text-3xl font-semibold tracking-tight text-[var(--color-text-on-dark-heading)]">24/7</p>
                            <p className="mt-1 text-sm text-[var(--color-text-on-dark-muted)]/94">global coverage and handoff</p>
                        </div>
                        <div className="rounded-2xl border border-white/20 bg-white/[0.08] px-5 py-4 backdrop-blur-md">
                            <p className="text-3xl font-semibold tracking-tight text-[var(--color-text-on-dark-heading)]">AI+</p>
                            <p className="mt-1 text-sm text-[var(--color-text-on-dark-muted)]/94">secure engineering workflows</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-white/84">
                <span className="mb-2 h-8 w-px bg-white/35" />
                <span className="h-2 w-2 rounded-full bg-[var(--dry-sage)]" />
            </div>
        </section>
    );
};
