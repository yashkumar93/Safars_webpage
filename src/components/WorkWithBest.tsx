"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import Link from 'next/link';

export const WorkWithBest = () => {
    return (
        <section className="relative overflow-hidden bg-[var(--dust-grey)] py-16 md:py-24">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(26,26,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.03)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40" />
            <div className="container relative z-10 mx-auto px-6">
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <div className="mb-7 flex items-center gap-4">
                            <div className="h-[1px] w-14 bg-[var(--pine-teal)]/35" />
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--pine-teal)]/75">
                                /WORK WITH US
                            </p>
                        </div>

                        <h2 className="mb-6 text-4xl font-semibold leading-[1.06] tracking-[-0.035em] text-[var(--pine-teal)] md:text-5xl lg:text-6xl">
                            Build faster with a
                            <br className="hidden sm:block" />
                            senior global team
                        </h2>

                        <p className="mb-8 text-base leading-relaxed text-[var(--color-text-body)] md:text-lg">
                            We plug experienced operators into your roadmap so you can ship product,
                            security, and AI initiatives without long hiring cycles or delivery drag.
                        </p>

                        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <div className="rounded-xl border border-[var(--pine-teal)]/10 bg-white/90 px-4 py-3">
                                <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Execution</p>
                                <p className="mt-1 text-sm font-semibold text-[var(--pine-teal)]">Senior-only delivery</p>
                            </div>
                            <div className="rounded-xl border border-[var(--pine-teal)]/10 bg-white/90 px-4 py-3">
                                <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Ownership</p>
                                <p className="mt-1 text-sm font-semibold text-[var(--pine-teal)]">Dedicated project lead</p>
                            </div>
                            <div className="rounded-xl border border-[var(--pine-teal)]/10 bg-white/90 px-4 py-3">
                                <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Velocity</p>
                                <p className="mt-1 text-sm font-semibold text-[var(--pine-teal)]">Kickoff in 48 hours</p>
                            </div>
                            <div className="rounded-xl border border-[var(--pine-teal)]/10 bg-white/90 px-4 py-3">
                                <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Coverage</p>
                                <p className="mt-1 text-sm font-semibold text-[var(--pine-teal)]">Timezone-friendly collaboration</p>
                            </div>
                        </div>

                        <Link href="/#contact">
                            <Button variant="dark" size="lg" className="px-8">
                                Book a strategy call
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--pine-teal)]/12 bg-white p-8 shadow-[0_24px_70px_rgba(26,26,26,0.08)] md:p-9">
                            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[var(--dust-grey)] blur-3xl" />
                            <div className="relative z-10">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--pine-teal)]/70">
                                    HOW WE ENGAGE
                                </p>
                                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[var(--pine-teal)] md:text-4xl">
                                    Senior specialists,
                                    <br className="hidden sm:block" /> one embedded squad.
                                </h3>

                                <div className="mt-8 space-y-4">
                                    {[
                                        {
                                            step: "01",
                                            title: "Align scope in one working session",
                                            detail: "Define priorities, constraints, and immediate milestones.",
                                        },
                                        {
                                            step: "02",
                                            title: "Assemble your fit-for-purpose team",
                                            detail: "Match engineers and specialists to your roadmap needs.",
                                        },
                                        {
                                            step: "03",
                                            title: "Ship in tight weekly delivery loops",
                                            detail: "Maintain momentum through transparent updates and demos.",
                                        },
                                    ].map((item) => (
                                        <div key={item.step} className="flex gap-4 rounded-xl border border-[var(--pine-teal)]/10 bg-[var(--dust-grey)]/60 px-4 py-4">
                                            <span className="mt-0.5 text-xs font-semibold tracking-[0.15em] text-[var(--pine-teal)]/60">{item.step}</span>
                                            <div>
                                                <p className="text-sm font-semibold text-[var(--pine-teal)] md:text-base">{item.title}</p>
                                                <p className="mt-1 text-sm text-[var(--color-text-body)]">{item.detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <p className="mt-6 text-sm leading-relaxed text-[var(--color-text-body)]">
                                    You get one accountable team that integrates with your tools and cadence,
                                    so outcomes stay predictable and quality stays high.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
