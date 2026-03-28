"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

export const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[var(--dust-grey)]">
            {/* Subtle grid overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(52,78,65,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(52,78,65,0.04)_1px,transparent_1px)] bg-[size:42px_42px] opacity-40" />

            {/* Warm floating glows */}
            <motion.div
                aria-hidden
                animate={{ x: [0, 30, 0], y: [0, -24, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -left-16 top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(200,196,186,0.7)_0%,rgba(200,196,186,0)_72%)] blur-xl"
            />
            <motion.div
                aria-hidden
                animate={{ x: [0, -35, 0], y: [0, 20, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-20 top-16 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(210,206,196,0.5)_0%,rgba(210,206,196,0)_74%)] blur-2xl"
            />
            <motion.div
                aria-hidden
                animate={{ x: [0, 22, 0], y: [0, 18, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute bottom-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(238,237,231,0.6)_0%,rgba(238,237,231,0)_68%)] blur-xl"
            />

            <div className="container relative z-10 mx-auto flex min-h-screen items-center px-6">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center pb-16 pt-28 text-center md:pt-36">
                    <motion.span
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--pine-teal)]/15 bg-[#eeede7]/80 px-5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[var(--pine-teal)]/80 backdrop-blur-md"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--pine-teal)]/50" />
                        Safars
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl text-4xl font-semibold tracking-[-0.045em] text-[var(--pine-teal)] md:text-6xl lg:text-[5.3rem] lg:leading-[0.99]"
                    >
                        Security delivery,
                        <span className="italic"> redesigned for AI velocity </span>
                        and human trust.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-7 max-w-3xl text-base leading-relaxed text-[var(--hunter-green)]/75 md:text-xl"
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
                            variant="dark"
                            className="px-8 text-base shadow-[0_18px_40px_rgba(52,78,65,0.16)]"
                        >
                            Start your project
                        </Button>
                        <Button
                            size="lg"
                            variant="ghost"
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
                        <div className="rounded-2xl border border-[var(--pine-teal)]/10 bg-[#eeede7]/80 px-5 py-4 backdrop-blur-md">
                            <p className="text-3xl font-semibold tracking-tight text-[var(--pine-teal)]">48h</p>
                            <p className="mt-1 text-sm text-[var(--hunter-green)]/65">to kick off sprint execution</p>
                        </div>
                        <div className="rounded-2xl border border-[var(--pine-teal)]/10 bg-[#eeede7]/80 px-5 py-4 backdrop-blur-md">
                            <p className="text-3xl font-semibold tracking-tight text-[var(--pine-teal)]">24/7</p>
                            <p className="mt-1 text-sm text-[var(--hunter-green)]/65">global coverage and handoff</p>
                        </div>
                        <div className="rounded-2xl border border-[var(--pine-teal)]/10 bg-[#eeede7]/80 px-5 py-4 backdrop-blur-md">
                            <p className="text-3xl font-semibold tracking-tight text-[var(--pine-teal)]">AI+</p>
                            <p className="mt-1 text-sm text-[var(--hunter-green)]/65">secure engineering workflows</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center">
                <span className="mb-2 h-8 w-px bg-[var(--pine-teal)]/25" />
                <span className="h-2 w-2 rounded-full bg-[var(--pine-teal)]/40" />
            </div>
        </section>
    );
};
