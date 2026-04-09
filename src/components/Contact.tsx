"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[var(--dust-grey)] py-20 md:py-28"
        >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(26,26,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-40" />

            <div className="container relative z-10 mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 flex items-center gap-4"
                >
                    <div className="h-[1px] w-14 bg-[var(--pine-teal)]/45" />
                    <span className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--pine-teal)]/70">
                        /WORK WITH US
                    </span>
                </motion.div>

                <div className="relative grid items-stretch gap-8 rounded-[2.2rem] border border-[var(--pine-teal)]/12 bg-white/90 p-5 shadow-[0_32px_90px_rgba(26,26,26,0.08)] backdrop-blur-sm md:p-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:p-10">
                    <div className="pointer-events-none absolute -left-16 top-20 h-48 w-48 rounded-full bg-[rgba(26,26,26,0.05)] blur-3xl" />

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-[1.8rem] border border-[var(--pine-teal)]/10 bg-[var(--color-card)] p-6 md:p-8"
                    >
                        <h2 className="mb-6 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-[var(--pine-teal)] md:text-5xl lg:text-[3.7rem]">
                            The Future Is Automated:
                            <br className="hidden sm:block" />
                            So, Let&apos;s Build Yours
                        </h2>

                        <p className="text-base leading-relaxed text-[var(--color-text-body)] md:text-lg">
                            We&apos;d love to hear from you. Whether you&apos;re exploring AI automation,
                            planning a new project, or need a technical partner, our team is ready to help.
                        </p>

                        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <div className="rounded-xl border border-[var(--pine-teal)]/10 bg-[var(--color-card-highlight)] px-4 py-3.5">
                                <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Response</p>
                                <p className="mt-1 text-base font-semibold text-[var(--pine-teal)]">Within 24h</p>
                            </div>
                            <div className="rounded-xl border border-[var(--pine-teal)]/10 bg-[var(--color-card-highlight)] px-4 py-3.5">
                                <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Discovery</p>
                                <p className="mt-1 text-base font-semibold text-[var(--pine-teal)]">Free call</p>
                            </div>
                        </div>

                        <div className="mt-4 rounded-xl border border-[var(--pine-teal)]/10 bg-[var(--color-card-highlight)] px-4 py-3.5">
                            <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Engagement</p>
                            <p className="mt-1 text-base font-semibold text-[var(--pine-teal)]">Senior team + dedicated PM</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form className="space-y-5 rounded-[1.5rem] border border-[var(--pine-teal)]/10 bg-[var(--color-card)] p-6 md:p-7">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                                        FULL NAME
                                    </label>
                                    <input
                                        type="text"
                                        className="h-12 w-full rounded-lg border border-[var(--pine-teal)]/12 bg-[var(--color-card-highlight)] px-4 text-base text-[var(--pine-teal)] placeholder:text-[var(--color-text-muted)]/75 transition-colors focus:border-[var(--pine-teal)]/35 focus:outline-none"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                                        EMAIL
                                    </label>
                                    <input
                                        type="email"
                                        className="h-12 w-full rounded-lg border border-[var(--pine-teal)]/12 bg-[var(--color-card-highlight)] px-4 text-base text-[var(--pine-teal)] placeholder:text-[var(--color-text-muted)]/75 transition-colors focus:border-[var(--pine-teal)]/35 focus:outline-none"
                                        placeholder="Enter email address"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                                        SERVICE
                                    </label>
                                    <div className="relative">
                                        <select className="h-12 w-full appearance-none cursor-pointer rounded-lg border border-[var(--pine-teal)]/12 bg-[var(--color-card-highlight)] px-4 pr-10 text-base text-[var(--pine-teal)] transition-colors focus:border-[var(--pine-teal)]/35 focus:outline-none">
                                            <option value="" className="bg-white text-[var(--hunter-green)]">Select a service</option>
                                            <option value="pentest" className="bg-white text-[var(--pine-teal)]">Penetration Testing</option>
                                            <option value="ai" className="bg-white text-[var(--pine-teal)]">AI Agents &amp; Solutions</option>
                                            <option value="web" className="bg-white text-[var(--pine-teal)]">Web &amp; App Development</option>
                                            <option value="rd" className="bg-white text-[var(--pine-teal)]">Research &amp; Development</option>
                                            <option value="cloud" className="bg-white text-[var(--pine-teal)]">Cloud Infrastructure</option>
                                        </select>
                                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[var(--color-text-muted)]">
                                                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                                        BUDGET
                                    </label>
                                    <div className="relative">
                                        <select className="h-12 w-full appearance-none cursor-pointer rounded-lg border border-[var(--pine-teal)]/12 bg-[var(--color-card-highlight)] px-4 pr-10 text-base text-[var(--pine-teal)] transition-colors focus:border-[var(--pine-teal)]/35 focus:outline-none">
                                            <option value="" className="bg-white text-[var(--hunter-green)]">Select budget range</option>
                                            <option value="5k" className="bg-white text-[var(--pine-teal)]">$5,000 - $10,000</option>
                                            <option value="10k" className="bg-white text-[var(--pine-teal)]">$10,000 - $25,000</option>
                                            <option value="25k" className="bg-white text-[var(--pine-teal)]">$25,000 - $50,000</option>
                                            <option value="50k" className="bg-white text-[var(--pine-teal)]">$50,000+</option>
                                        </select>
                                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[var(--color-text-muted)]">
                                                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                                    MESSAGE
                                </label>
                                <textarea
                                    rows={5}
                                    className="w-full resize-none rounded-lg border border-[var(--pine-teal)]/12 bg-[var(--color-card-highlight)] px-4 py-3.5 text-base text-[var(--pine-teal)] placeholder:text-[var(--color-text-muted)]/75 transition-colors focus:border-[var(--pine-teal)]/35 focus:outline-none"
                                    placeholder="Describe your project"
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="group mt-2 flex w-full items-center justify-between rounded-xl border border-transparent bg-[var(--pine-teal)] px-6 py-4 text-[var(--dust-grey)] transition-all hover:-translate-y-0.5 hover:opacity-90"
                                >
                                    <span className="text-base font-medium">Send message</span>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[var(--dust-grey)]/20 transition-colors group-hover:bg-[var(--dust-grey)]/30">
                                        <ArrowUpRight
                                            size={16}
                                            className="text-[var(--dust-grey)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </div>
                                </button>
                                <p className="mt-3 text-xs text-[var(--color-text-muted)]">
                                    We usually respond within one business day.
                                </p>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>

            <div className="pointer-events-none absolute -bottom-20 left-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-[rgba(26,26,26,0.07)] blur-[130px]" />
        </section>
    );
};
