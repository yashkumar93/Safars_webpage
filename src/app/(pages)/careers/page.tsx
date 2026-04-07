"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowUpRight } from "lucide-react";

const openings = [
  {
    title: "Senior Penetration Tester",
    department: "Security",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "AI/ML Engineer",
    department: "AI Solutions",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Hybrid — Bangalore",
    type: "Full-time",
  },
  {
    title: "Cloud Infrastructure Engineer",
    department: "DevOps",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Contract",
  },
];

const perks = [
  "Fully remote-first culture",
  "Competitive salary + equity",
  "Unlimited PTO policy",
  "Home office stipend",
  "Learning & conference budget",
  "Health & wellness benefits",
];

export default function CareersPage() {
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
              /Careers
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl font-semibold tracking-[-0.04em] text-[#1a1a1a] md:text-6xl lg:text-7xl"
            >
              Join the mission
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-base leading-relaxed text-[#555] md:text-lg"
            >
              We&apos;re building the future of secure, AI-native systems. If
              you thrive on impact, autonomy, and hard problems — we want you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
            {perks.map((perk, i) => (
              <motion.div
                key={perk}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-[#e8e8e8] bg-white px-5 py-4 text-sm font-medium text-[#1a1a1a]"
              >
                {perk}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#888]"
          >
            /Open Positions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-3xl font-semibold tracking-[-0.03em] text-[#1a1a1a] md:text-5xl"
          >
            Current openings
          </motion.h2>

          <div className="space-y-3">
            {openings.map((job, i) => (
              <motion.a
                key={job.title}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#e8e8e8] bg-white p-6 transition-all hover:border-[#ccc] hover:shadow-sm sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] group-hover:text-[#333]">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#888]">{job.department}</p>
                </div>
                <div className="flex items-center gap-5">
                  <span className="flex items-center gap-1.5 text-sm text-[#666]">
                    <MapPin size={14} />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-[#666]">
                    <Clock size={14} />
                    {job.type}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-[#aaa] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1a1a1a]"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
