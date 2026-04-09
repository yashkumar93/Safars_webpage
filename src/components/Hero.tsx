"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[var(--dust-grey)]">
            {/* Subtle grid overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(26,26,26,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.04)_1px,transparent_1px)] bg-[size:42px_42px] opacity-40" />

            {/* Warm floating glows */}
            <motion.div
                aria-hidden
                animate={{ x: [0, 30, 0], y: [0, -24, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -left-16 top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(26,26,26,0.08)_0%,rgba(26,26,26,0)_72%)] blur-xl"
            />
            <motion.div
                aria-hidden
                animate={{ x: [0, -35, 0], y: [0, 20, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-20 top-16 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(26,26,26,0.06)_0%,rgba(26,26,26,0)_74%)] blur-2xl"
            />
            <motion.div
                aria-hidden
                animate={{ x: [0, 22, 0], y: [0, 18, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute bottom-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(26,26,26,0.06)_0%,rgba(26,26,26,0)_68%)] blur-xl"
            />

            <div className="container relative z-10 mx-auto flex min-h-screen items-center px-6">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center pb-20 pt-28 text-center md:pt-36">

                    {/* Tagline pill */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 flex flex-col items-center gap-3"
                    >
                        <span className="h-8 w-px bg-[var(--pine-teal)]/20" />
                        <span className="inline-flex items-center gap-2.5 rounded-full border border-[var(--pine-teal)]/12 bg-white/80 px-5 py-2 text-[11px] uppercase tracking-[0.22em] text-[var(--pine-teal)]/70 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--fern)]/40" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--fern)]/70" />
                            </span>
                            Helping companies transition into AI-driven systems
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.08 }}
                        className="max-w-5xl text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--pine-teal)] sm:text-5xl md:text-6xl lg:text-[5rem] lg:leading-[1.04]"
                    >
                        Engineering Secure,{' '}
                        <br className="hidden sm:block" />
                        Scalable AI Systems
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.16 }}
                        className="mt-6 max-w-2xl text-[0.95rem] leading-[1.7] text-[var(--hunter-green)]/80 md:mt-8 md:text-lg md:leading-[1.75]"
                    >
                        We design, build, and secure modern software — from enterprise
                        platforms to AI-powered systems — ensuring performance, reliability,
                        and real-world security from day one.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.24 }}
                        className="mt-10 flex flex-wrap items-center justify-center gap-4"
                    >
                        <Link href="/#contact">
                            <button
                                className="group inline-flex h-12 items-center gap-2 rounded-full border border-transparent bg-[var(--pine-teal)] px-8 text-base font-semibold tracking-[-0.01em] text-[var(--dust-grey)] shadow-[0_18px_40px_rgba(26,26,26,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_22px_50px_rgba(26,26,26,0.28)]"
                            >
                                Book a Strategy Call
                                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                        </Link>
                        <Link href="/#services">
                            <button
                                className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full border border-[var(--pine-teal)]/40 px-8 text-base font-medium tracking-[-0.01em] backdrop-blur-sm transition-all duration-300 hover:border-[var(--pine-teal)]/55 hover:bg-[var(--pine-teal)]/8"
                                style={{ color: 'var(--color-text-heading)' }}
                            >
                                View Services
                            </button>
                        </Link>
                    </motion.div>

                    {/* Stats strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.36 }}
                        className="mt-16 flex w-full max-w-3xl flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-0 sm:divide-x sm:divide-[var(--pine-teal)]/12"
                    >
                        {[
                            { value: '48h', label: 'Sprint kickoff' },
                            { value: '24/7', label: 'Global coverage' },
                            { value: 'AI+', label: 'Secure workflows' },
                        ].map((stat, i) => (
                            <div key={stat.value} className="flex flex-col items-center px-8 py-2 sm:py-0">
                                <p className="text-2xl font-semibold tracking-tight text-[var(--pine-teal)] md:text-3xl">
                                    {stat.value}
                                </p>
                                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--hunter-green)]/80">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center">
                <motion.span
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-2 h-8 w-px bg-[var(--pine-teal)]/25"
                />
                <span className="h-2 w-2 rounded-full bg-[var(--pine-teal)]/40" />
            </div>
        </section>
    );
};
