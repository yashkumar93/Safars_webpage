"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import {
  Shield,
  Lock,
  Server,
  Code2,
  Terminal,
  Cpu,
} from "lucide-react";

const logos = [
  { icon: <Shield size={20} />, name: "SecureCorp" },
  { icon: <Lock size={20} />, name: "DataGuard" },
  { icon: <Server size={20} />, name: "CloudScale" },
  { icon: <Code2 size={20} />, name: "DevOps Inc" },
  { icon: <Terminal size={20} />, name: "BitLogic" },
  { icon: <Cpu size={20} />, name: "AI Systems" },
];

export const ValueProp = () => {
  return (
    <section className="bg-[var(--dust-grey)] py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2.25rem] border border-[var(--pine-teal)]/10 bg-[#f6f3ec] p-8 shadow-[0_24px_80px_rgba(52,78,65,0.08)] md:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[var(--dry-sage)]/35 blur-3xl" />

            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--hunter-green)]/72">
                Embedded AI + Security Team
              </h4>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[var(--pine-teal)] md:text-5xl lg:text-6xl lg:leading-[0.98]">
                The partner your <span className="italic text-[var(--hunter-green)]">security team</span> has
                been waiting for
              </h2>
            </div>

            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-[var(--hunter-green)]/88">
              <p>
                Safars operates like your in-house strike team across product,
                AI implementation, and security hardening.
              </p>
              <p className="text-[var(--pine-teal)]">
                Skip hiring bottlenecks and ship mission-critical work with
                confidence and speed.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[var(--pine-teal)]/15 bg-white/75 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[var(--pine-teal)]">
                AI Delivery
              </span>
              <span className="rounded-full border border-[var(--pine-teal)]/15 bg-white/75 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[var(--pine-teal)]">
                Penetration Testing
              </span>
              <span className="rounded-full border border-[var(--pine-teal)]/15 bg-white/75 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[var(--pine-teal)]">
                Cloud Security
              </span>
            </div>

            <div className="mt-8">
              <Button variant="dark" size="lg" className="px-8">
                Talk to Safars
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2.25rem] border border-[var(--pine-teal)]/10 bg-[linear-gradient(145deg,#e4ead8_0%,#d4ddca_46%,#c9d4c2_100%)] p-8 shadow-[0_24px_80px_rgba(52,78,65,0.08)] md:p-10 lg:p-12"
          >
            <div className="absolute -right-10 top-10 h-36 w-36 rounded-full bg-[var(--dry-sage)]/35 blur-3xl" />
            <div className="absolute -bottom-16 left-8 h-40 w-40 rounded-full bg-white/35 blur-3xl" />

            <div className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center gap-3 rounded-2xl border border-[var(--pine-teal)]/10 bg-white/55 px-4 py-3 text-sm font-medium text-[var(--pine-teal)]"
                >
                  <span className="text-[var(--pine-teal)]">{logo.icon}</span>
                  <span>{logo.name}</span>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-16 max-w-xl">
              <h3 className="text-4xl font-semibold tracking-[-0.05em] text-[var(--pine-teal)] md:text-5xl lg:text-6xl lg:leading-[0.98]">
                Trusted by teams building <br />
                <span className="italic">high-stakes</span> systems
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
