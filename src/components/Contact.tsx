"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_12%,#456756_0%,#31493d_45%,#1f2f27_100%)] py-16 md:py-24"
        >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.11]" />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="w-16 h-[1px] bg-gradient-to-r from-[var(--dry-sage)] to-transparent"></div>
                    <span className="text-xs tracking-[0.25em] uppercase text-[var(--dry-sage)]/92 font-medium">
                        /WORK WITH US
                    </span>
                </motion.div>

                <div className="grid items-start gap-10 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm lg:grid-cols-2 lg:gap-16 lg:p-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-lg"
                    >
                        <h2 className="mb-8 text-4xl font-semibold leading-[1.12] tracking-[-0.02em] text-[var(--color-text-on-dark-heading)] md:text-5xl lg:text-6xl">
                            <span className="italic text-[var(--dry-sage)]">
                                The Future Is Automated:
                            </span>{" "}
                            So, Let&apos;s Build Yours
                        </h2>
                        <p className="text-lg leading-relaxed text-[var(--color-text-on-dark-body)]/92">
                            We&apos;d love to hear from you! Whether you&apos;re curious about
                            AI automation, want to discuss a project, or just have a question,
                            our team is here to help.
                        </p>

                        <div className="mt-10 grid grid-cols-2 gap-3">
                            <div className="rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3">
                                <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-on-dark-muted)]/86">Response</p>
                                <p className="mt-1 text-base font-semibold text-[var(--color-text-on-dark-heading)]">within 24h</p>
                            </div>
                            <div className="rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3">
                                <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-on-dark-muted)]/86">Discovery</p>
                                <p className="mt-1 text-base font-semibold text-[var(--color-text-on-dark-heading)]">free call</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form className="space-y-6 rounded-2xl border border-white/10 bg-black/10 p-6 md:p-7">
                            <div>
                                <label className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-on-dark-muted)]/90">
                                    FULL NAME
                                </label>
                                <input
                                    type="text"
                                    className="w-full border-b border-white/25 bg-transparent px-0 py-3 text-base text-[var(--color-text-on-dark-heading)] placeholder:text-[var(--color-text-on-dark-muted)]/70 transition-colors focus:border-[var(--dry-sage)] focus:outline-none"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-on-dark-muted)]/90">
                                    EMAIL
                                </label>
                                <input
                                    type="email"
                                    className="w-full border-b border-white/25 bg-transparent px-0 py-3 text-base text-[var(--color-text-on-dark-heading)] placeholder:text-[var(--color-text-on-dark-muted)]/70 transition-colors focus:border-[var(--dry-sage)] focus:outline-none"
                                    placeholder="Enter email address"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-on-dark-muted)]/90">
                                    SERVICE
                                </label>
                                <div className="relative">
                                    <select className="w-full appearance-none cursor-pointer border-b border-white/25 bg-transparent px-0 py-3 text-base text-[var(--color-text-on-dark-body)]/95 transition-colors focus:border-[var(--dry-sage)] focus:outline-none">
                                        <option value="" className="bg-[var(--pine-teal)] text-white/50">
                                            Select a service
                                        </option>
                                        <option value="pentest" className="bg-[var(--pine-teal)] text-white">
                                            Penetration Testing
                                        </option>
                                        <option value="ai" className="bg-[var(--pine-teal)] text-white">
                                            AI Agents &amp; Solutions
                                        </option>
                                        <option value="web" className="bg-[var(--pine-teal)] text-white">
                                            Web &amp; App Development
                                        </option>
                                        <option value="rd" className="bg-[var(--pine-teal)] text-white">
                                            Research &amp; Development
                                        </option>
                                        <option value="cloud" className="bg-[var(--pine-teal)] text-white">
                                            Cloud Infrastructure
                                        </option>
                                    </select>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            className="text-[var(--color-text-on-dark-muted)]/86"
                                        >
                                            <path
                                                d="M3 4.5L6 7.5L9 4.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-on-dark-muted)]/90">
                                    BUDGET
                                </label>
                                <div className="relative">
                                    <select className="w-full appearance-none cursor-pointer border-b border-white/25 bg-transparent px-0 py-3 text-base text-[var(--color-text-on-dark-body)]/95 transition-colors focus:border-[var(--dry-sage)] focus:outline-none">
                                        <option value="" className="bg-[var(--pine-teal)] text-white/50">
                                            Select budget range
                                        </option>
                                        <option value="5k" className="bg-[var(--pine-teal)] text-white">
                                            $5,000 - $10,000
                                        </option>
                                        <option value="10k" className="bg-[var(--pine-teal)] text-white">
                                            $10,000 - $25,000
                                        </option>
                                        <option value="25k" className="bg-[var(--pine-teal)] text-white">
                                            $25,000 - $50,000
                                        </option>
                                        <option value="50k" className="bg-[var(--pine-teal)] text-white">
                                            $50,000+
                                        </option>
                                    </select>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            className="text-[var(--color-text-on-dark-muted)]/86"
                                        >
                                            <path
                                                d="M3 4.5L6 7.5L9 4.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-on-dark-muted)]/90">
                                    MESSAGE
                                </label>
                                <textarea
                                    rows={3}
                                    className="w-full resize-none border-b border-white/25 bg-transparent px-0 py-3 text-base text-[var(--color-text-on-dark-heading)] placeholder:text-[var(--color-text-on-dark-muted)]/70 transition-colors focus:border-[var(--dry-sage)] focus:outline-none"
                                    placeholder="Describe your project"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group mt-4 flex w-full items-center justify-between rounded-xl bg-[#f3f1ea] px-6 py-4 text-[var(--pine-teal)] transition-colors hover:bg-[var(--dry-sage)]"
                            >
                                <span className="text-base font-medium">Send message</span>
                                <div className="w-8 h-8 bg-[var(--dry-sage)] group-hover:bg-[var(--pine-teal)] flex items-center justify-center transition-colors">
                                    <ArrowUpRight
                                        size={16}
                                        className="text-[var(--pine-teal)] group-hover:text-[var(--dry-sage)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </div>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[40%] h-[40%] bg-[var(--dry-sage)]/8 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
    );
};
