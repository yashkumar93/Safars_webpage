"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#eeede7] py-16 md:py-24"
        >
            {/* Subtle grid */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(52,78,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(52,78,65,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="w-16 h-[1px] bg-gradient-to-r from-[var(--pine-teal)]/40 to-transparent"></div>
                    <span className="text-xs tracking-[0.25em] uppercase text-[var(--pine-teal)]/70 font-medium">
                        /WORK WITH US
                    </span>
                </motion.div>

                <div className="grid items-start gap-10 rounded-[2rem] border border-[var(--pine-teal)]/10 bg-[var(--dust-grey)]/80 p-6 backdrop-blur-sm lg:grid-cols-2 lg:gap-16 lg:p-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-lg"
                    >
                        <h2 className="mb-8 text-4xl font-semibold leading-[1.12] tracking-[-0.02em] text-[var(--pine-teal)] md:text-5xl lg:text-6xl">
                            <span className="italic">
                                The Future Is Automated:
                            </span>{" "}
                            So, Let&apos;s Build Yours
                        </h2>
                        <p className="text-lg leading-relaxed text-[var(--hunter-green)]/75">
                            We&apos;d love to hear from you! Whether you&apos;re curious about
                            AI automation, want to discuss a project, or just have a question,
                            our team is here to help.
                        </p>

                        <div className="mt-10 grid grid-cols-2 gap-3">
                            <div className="rounded-xl border border-[var(--pine-teal)]/10 bg-[#eeede7] px-4 py-3">
                                <p className="text-xs uppercase tracking-[0.14em] text-[var(--hunter-green)]/60">Response</p>
                                <p className="mt-1 text-base font-semibold text-[var(--pine-teal)]">within 24h</p>
                            </div>
                            <div className="rounded-xl border border-[var(--pine-teal)]/10 bg-[#eeede7] px-4 py-3">
                                <p className="text-xs uppercase tracking-[0.14em] text-[var(--hunter-green)]/60">Discovery</p>
                                <p className="mt-1 text-base font-semibold text-[var(--pine-teal)]">free call</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form className="space-y-6 rounded-2xl border border-[var(--pine-teal)]/8 bg-[#eeede7] p-6 md:p-7">
                            <div>
                                <label className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--hunter-green)]/60">
                                    FULL NAME
                                </label>
                                <input
                                    type="text"
                                    className="w-full border-b border-[var(--pine-teal)]/15 bg-transparent px-0 py-3 text-base text-[var(--pine-teal)] placeholder:text-[var(--hunter-green)]/40 transition-colors focus:border-[var(--pine-teal)]/40 focus:outline-none"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--hunter-green)]/60">
                                    EMAIL
                                </label>
                                <input
                                    type="email"
                                    className="w-full border-b border-[var(--pine-teal)]/15 bg-transparent px-0 py-3 text-base text-[var(--pine-teal)] placeholder:text-[var(--hunter-green)]/40 transition-colors focus:border-[var(--pine-teal)]/40 focus:outline-none"
                                    placeholder="Enter email address"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--hunter-green)]/60">
                                    SERVICE
                                </label>
                                <div className="relative">
                                    <select className="w-full appearance-none cursor-pointer border-b border-[var(--pine-teal)]/15 bg-transparent px-0 py-3 text-base text-[var(--pine-teal)]/80 transition-colors focus:border-[var(--pine-teal)]/40 focus:outline-none">
                                        <option value="" className="bg-[#eeede7] text-[var(--hunter-green)]">
                                            Select a service
                                        </option>
                                        <option value="pentest" className="bg-[#eeede7] text-[var(--pine-teal)]">
                                            Penetration Testing
                                        </option>
                                        <option value="ai" className="bg-[#eeede7] text-[var(--pine-teal)]">
                                            AI Agents &amp; Solutions
                                        </option>
                                        <option value="web" className="bg-[#eeede7] text-[var(--pine-teal)]">
                                            Web &amp; App Development
                                        </option>
                                        <option value="rd" className="bg-[#eeede7] text-[var(--pine-teal)]">
                                            Research &amp; Development
                                        </option>
                                        <option value="cloud" className="bg-[#eeede7] text-[var(--pine-teal)]">
                                            Cloud Infrastructure
                                        </option>
                                    </select>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            className="text-[var(--hunter-green)]/50"
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
                                <label className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--hunter-green)]/60">
                                    BUDGET
                                </label>
                                <div className="relative">
                                    <select className="w-full appearance-none cursor-pointer border-b border-[var(--pine-teal)]/15 bg-transparent px-0 py-3 text-base text-[var(--pine-teal)]/80 transition-colors focus:border-[var(--pine-teal)]/40 focus:outline-none">
                                        <option value="" className="bg-[#eeede7] text-[var(--hunter-green)]">
                                            Select budget range
                                        </option>
                                        <option value="5k" className="bg-[#eeede7] text-[var(--pine-teal)]">
                                            $5,000 - $10,000
                                        </option>
                                        <option value="10k" className="bg-[#eeede7] text-[var(--pine-teal)]">
                                            $10,000 - $25,000
                                        </option>
                                        <option value="25k" className="bg-[#eeede7] text-[var(--pine-teal)]">
                                            $25,000 - $50,000
                                        </option>
                                        <option value="50k" className="bg-[#eeede7] text-[var(--pine-teal)]">
                                            $50,000+
                                        </option>
                                    </select>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            className="text-[var(--hunter-green)]/50"
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
                                <label className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--hunter-green)]/60">
                                    MESSAGE
                                </label>
                                <textarea
                                    rows={3}
                                    className="w-full resize-none border-b border-[var(--pine-teal)]/15 bg-transparent px-0 py-3 text-base text-[var(--pine-teal)] placeholder:text-[var(--hunter-green)]/40 transition-colors focus:border-[var(--pine-teal)]/40 focus:outline-none"
                                    placeholder="Describe your project"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group mt-4 flex w-full items-center justify-between rounded-xl bg-[var(--pine-teal)] px-6 py-4 text-[var(--dust-grey)] transition-colors hover:bg-[#2a3e33]"
                            >
                                <span className="text-base font-medium">Send message</span>
                                <div className="w-8 h-8 bg-[var(--dust-grey)]/15 group-hover:bg-[var(--dust-grey)]/25 flex items-center justify-center transition-colors rounded-sm">
                                    <ArrowUpRight
                                        size={16}
                                        className="text-[var(--dust-grey)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </div>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[40%] h-[40%] bg-[#c8c4ba]/10 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
    );
};
