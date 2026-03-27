"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, ListChecks, Star } from "lucide-react";

const differenceItems = [
  {
    icon: Rocket,
    label: "SCALABLE",
    title: "Boost your in-house creative",
    description:
      "We handle the heavy lifting so you can focus on strategic, high impact work without adding overhead to the team.",
    card: "bg-[var(--dry-sage)]",
    labelClass: "text-[var(--pine-teal)]/85",
    textClass: "text-[var(--pine-teal)]",
    descClass: "text-[var(--pine-teal)]/92",
    iconWrap: "bg-white/45",
  },
  {
    icon: ListChecks,
    label: "FLEXIBLE",
    title: "Say yes to more projects",
    description:
      "Whether you need more bandwidth or different skills, Safars has whatever resources you need to get the job done.",
    card: "bg-[var(--fern)]",
    labelClass: "text-[#edf1e8]/86",
    textClass: "text-[#f3f1ea]",
    descClass: "text-[#edf1e8]/92",
    iconWrap: "bg-white/45",
  },
  {
    icon: Star,
    label: "RESPONSIVE",
    title: "Don't sacrifice quality for speed",
    description:
      "Our global team of creatives delivers agency-level work in a fraction of the time.",
    card: "bg-[var(--hunter-green)]",
    labelClass: "text-[#edf1e8]/86",
    textClass: "text-[#f3f1ea]",
    descClass: "text-[#edf1e8]/92",
    iconWrap: "bg-white/42",
  },
];

export const OurDifference = () => {
  return (
    <section id="why" className="bg-[var(--dust-grey)] py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-[var(--hunter-green)]/88">
            Our Difference
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[var(--pine-teal)] md:text-5xl lg:text-6xl lg:leading-[0.98]">
            Built for teams moving <span className="italic">at product speed</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {differenceItems.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-[var(--pine-teal)]/10 p-8 shadow-[0_24px_70px_rgba(52,78,65,0.08)] ${item.card}`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/20 blur-3xl" />
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-[1rem] ${item.iconWrap}`}
              >
                <item.icon className={item.textClass} strokeWidth={1.6} />
              </div>

              <p className={`mb-3 text-xs font-medium uppercase tracking-[0.16em] ${item.labelClass}`}>
                {item.label}
              </p>
              <h3 className={`mb-3 text-2xl font-semibold tracking-[-0.03em] ${item.textClass}`}>
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed ${item.descClass}`}>
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
