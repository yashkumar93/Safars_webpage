"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const caseStudies = [
  {
    title: "AI-Powered Threat Detection Platform",
    client: "FinTech Startup",
    category: "AI + Security",
    description:
      "Built an ML-driven threat detection system that reduced false positives by 94% and automated incident response for a rapidly growing fintech company.",
    image: "/images/case-study-1.jpg",
    stats: ["94% fewer false positives", "3x faster response", "24/7 coverage"],
  },
  {
    title: "Enterprise Cloud Migration",
    client: "Healthcare SaaS",
    category: "Cloud Infrastructure",
    description:
      "Migrated a legacy on-premise healthcare platform to a HIPAA-compliant cloud architecture, achieving 99.99% uptime and 60% cost reduction.",
    image: "/images/case-study-2.jpg",
    stats: ["99.99% uptime", "60% cost savings", "Zero data loss"],
  },
  {
    title: "Penetration Testing for DeFi Protocol",
    client: "Web3 Platform",
    category: "Security",
    description:
      "Conducted comprehensive security audits of smart contracts and web infrastructure, identifying 23 critical vulnerabilities before mainnet launch.",
    image: "/images/case-study-3.jpg",
    stats: ["23 vulns found", "$12M assets secured", "Full audit in 2 weeks"],
  },
  {
    title: "Internal Tools Automation Suite",
    client: "Series B SaaS",
    category: "Web Development",
    description:
      "Designed and built a suite of internal productivity tools that automated 70% of manual workflows, saving the team 200+ hours per month.",
    image: "/images/case-study-4.jpg",
    stats: ["200+ hrs/mo saved", "70% automation", "5 tools shipped"],
  },
];

export default function CaseStudiesPage() {
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
              /Case Studies
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl font-semibold tracking-[-0.04em] text-[#1a1a1a] md:text-6xl lg:text-7xl"
            >
              Work that speaks
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-base leading-relaxed text-[#555] md:text-lg"
            >
              A look at how we&apos;ve helped ambitious teams solve complex
              challenges across security, AI, and infrastructure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="space-y-6">
            {caseStudies.map((study, i) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white transition-all hover:border-[#ccc] hover:shadow-sm"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="flex flex-col justify-center p-8 lg:p-10">
                    <span className="mb-3 inline-block w-fit rounded-full bg-[#f0f0f0] px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#666]">
                      {study.category}
                    </span>
                    <h3 className="mb-2 text-2xl font-semibold tracking-[-0.02em] text-[#1a1a1a] md:text-3xl">
                      {study.title}
                    </h3>
                    <p className="mb-1 text-sm text-[#888]">
                      Client: {study.client}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-[#555]">
                      {study.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {study.stats.map((stat) => (
                        <span
                          key={stat}
                          className="rounded-lg border border-[#e8e8e8] px-3 py-1.5 text-sm font-medium text-[#1a1a1a]"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#1a1a1a] transition-colors hover:text-[#555]"
                    >
                      Read full case study
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                  <div className="relative min-h-[240px] bg-[#f0f0f0] lg:min-h-0">
                    <div className="flex h-full items-center justify-center p-8 text-center text-sm text-[#aaa]">
                      <div>
                        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#e8e8e8] text-2xl font-bold text-[#ccc]">
                          {i + 1}
                        </div>
                        Case study visual
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
