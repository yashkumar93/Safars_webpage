"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Lightbulb, ShieldCheck } from "lucide-react";
import { Button } from "@/components/Button";
import Link from "next/link";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We exist to make world-class security and engineering accessible to teams of every size.",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "Our team is our greatest asset. We invest in growth, autonomy, and trust.",
  },
  {
    icon: Lightbulb,
    title: "Innovation at Core",
    description:
      "We combine AI-native workflows with human expertise to push boundaries.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity Always",
    description:
      "Transparent communication, honest assessments, and ethical practices in everything we do.",
  },
];

const team = [
  { name: "Alex Morgan", role: "CEO & Founder", initials: "AM" },
  { name: "Priya Sharma", role: "CTO", initials: "PS" },
  { name: "James Wilson", role: "Head of Security", initials: "JW" },
  { name: "Sara Chen", role: "VP Engineering", initials: "SC" },
  { name: "David Kim", role: "Lead AI Researcher", initials: "DK" },
  { name: "Maria Garcia", role: "Head of Design", initials: "MG" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#888]"
            >
              /About Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl font-semibold tracking-[-0.04em] text-[#1a1a1a] md:text-6xl lg:text-7xl"
            >
              Building the future of{" "}
              secure systems
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-base leading-relaxed text-[#555] md:text-lg"
            >
              Safars is a high-performance engineering studio specializing in
              security, AI, and modern infrastructure. We help ambitious teams
              ship faster while staying resilient.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#888]"
          >
            /Our Values
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-3xl font-semibold tracking-[-0.03em] text-[#1a1a1a] md:text-5xl"
          >
            What drives us
          </motion.h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-[#e8e8e8] bg-white p-7"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0f0f0] text-[#1a1a1a]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1a1a1a]">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#666]">
                    {v.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#888]"
          >
            /Our Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-3xl font-semibold tracking-[-0.03em] text-[#1a1a1a] md:text-5xl"
          >
            The people behind Safars
          </motion.h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-5 rounded-2xl border border-[#e8e8e8] bg-white p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--dry-sage)] text-sm font-semibold text-[var(--pine-teal)]">
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1a1a1a]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#888]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-[-0.03em] text-[#1a1a1a] md:text-4xl">
              Want to work with us?
            </h2>
            <p className="mb-8 text-base text-[#666]">
              Whether you have a project in mind or just want to chat, we&apos;d
              love to hear from you.
            </p>
            <Link href="/#contact">
              <Button variant="dark" size="lg" className="px-8">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
