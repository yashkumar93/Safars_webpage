"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Gauge, Layers } from "lucide-react";

const cards = [
  {
    icon: Globe,
    text: "Top global engineering talent",
    description:
      "We're not restricted by borders. Top-tier talent, powered by AI means consistently high-quality work for your brand.",
    accent: "from-[#dbe4cc] to-[#c7d5bd]",
  },
  {
    icon: Gauge,
    text: "Ultra-fast turnaround times",
    description:
      "Our AI-driven workflows and global team ensure delivery at record speeds without compromising on quality.",
    accent: "from-[#c9dcc7] to-[#a9c5a8]",
  },
  {
    icon: Layers,
    text: "Flexible engagement models",
    description:
      "Scale up or down as needed. Our flexible subscription models are designed to adapt to your changing business needs.",
    accent: "from-[#d7dfd0] to-[#b5c6b6]",
  },
];

export const Flexibility = () => {
  return (
    <section className="bg-[var(--dust-grey)] py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-4xl space-y-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--hunter-green)]/72"
          >
            Made to Flex
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-semibold tracking-[-0.05em] text-[var(--pine-teal)] md:text-5xl lg:text-6xl lg:leading-[0.98]"
          >
            Supertalented. Superfast. Super responsive. Work with a global team
            that&apos;s purposefully <span className="italic">built to keep up with you.</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.text}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[2rem] border border-[var(--pine-teal)]/10 bg-[#f4f2eb] p-7 shadow-[0_24px_70px_rgba(52,78,65,0.08)]"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.accent} opacity-45`}
              />

              <div className="relative z-10">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--pine-teal)]/12 bg-white/70 text-[var(--pine-teal)]">
                  <card.icon size={24} />
                </div>

                <h3 className="mb-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--pine-teal)]">
                  {card.text}
                </h3>
                <p className="text-base leading-relaxed text-[var(--hunter-green)]/88">
                  {card.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--pine-teal)] transition-transform duration-300 group-hover:translate-x-1">
                  Learn more
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
