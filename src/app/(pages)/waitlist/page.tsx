"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Priority access to all services",
  "Early pricing & founding member discounts",
  "Direct Slack channel with our team",
  "Beta access to AI-powered security tools",
];

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      <section className="flex min-h-[calc(100vh-80px)] items-center pt-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#888]"
            >
              /Waitlist
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl font-semibold tracking-[-0.04em] text-[#1a1a1a] md:text-6xl"
            >
              Get <span className="italic">early</span> access
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-base leading-relaxed text-[#555] md:text-lg"
            >
              Join our waitlist to be the first to know when new services,
              tools, and resources launch.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mx-auto mt-10 max-w-sm space-y-3 text-left"
            >
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="shrink-0 text-[#1a1a1a]" />
                  <span className="text-sm text-[#444]">{b}</span>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10"
            >
              {submitted ? (
                <div className="rounded-2xl border border-[#e8e8e8] bg-white px-8 py-10">
                  <CheckCircle2
                    size={40}
                    className="mx-auto mb-4 text-[#1a1a1a]"
                  />
                  <h3 className="text-xl font-semibold text-[#1a1a1a]">
                    You&apos;re on the list!
                  </h3>
                  <p className="mt-2 text-sm text-[#666]">
                    We&apos;ll reach out as soon as spots open up.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="flex-1 rounded-xl border border-[#e0e0e0] bg-white px-5 py-3.5 text-base text-[#1a1a1a] placeholder:text-[#bbb] focus:border-[#1a1a1a] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a1a1a] px-7 py-3.5 font-medium text-white transition-colors hover:bg-[#333]"
                  >
                    Join waitlist
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
