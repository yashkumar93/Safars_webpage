"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Bot,
  Code,
  FlaskConical,
  Cloud,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: <ShieldAlert size={32} />,
    title: "Penetration Testing",
    description:
      "Deep-dive security assessments by OSCP, eJPT v2, and CEH certified professionals.",
    size: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    icon: <Bot size={28} />,
    title: "AI Agents & Solutions",
    description: "Custom LLM-powered agents tuned for your workflows.",
    size: "md:col-span-1 md:row-span-1",
    featured: false,
  },
  {
    icon: <Code size={28} />,
    title: "Web & App Development",
    description: "Modern, secure applications built to scale.",
    size: "md:col-span-1 md:row-span-1",
    featured: false,
  },
  {
    icon: <FlaskConical size={28} />,
    title: "Research & Development",
    description: "Technical research and proof-of-concept development.",
    size: "md:col-span-1 md:row-span-1",
    featured: false,
  },
  {
    icon: <Cloud size={28} />,
    title: "Cloud Infrastructure",
    description: "Scalable cloud architecture with DevOps best practices.",
    size: "md:col-span-1 md:row-span-1",
    featured: false,
  },
];

const serviceTones = [
  {
    card: "bg-[#f2f2f2] border-[var(--pine-teal)]/10",
    icon: "bg-[var(--pine-teal)]/6 text-[var(--pine-teal)]",
    body: "text-[var(--hunter-green)]/96",
    cta: "text-[var(--pine-teal)]",
  },
  {
    card: "bg-[#f0f0f0] border-[var(--pine-teal)]/10",
    icon: "bg-[var(--pine-teal)]/8 text-[var(--pine-teal)]",
    body: "text-[var(--hunter-green)]/94",
    cta: "text-[var(--pine-teal)]",
  },
  {
    card: "bg-[#eeeeee] border-[var(--pine-teal)]/10",
    icon: "bg-[var(--pine-teal)]/8 text-[var(--hunter-green)]",
    body: "text-[var(--hunter-green)]/92",
    cta: "text-[var(--hunter-green)]",
  },
  {
    card: "bg-[#ececec] border-[var(--pine-teal)]/10",
    icon: "bg-[var(--pine-teal)]/10 text-[var(--pine-teal)]",
    body: "text-[var(--hunter-green)]/92",
    cta: "text-[var(--pine-teal)]",
  },
];

export const Services = () => {
  return (
    <section id="services" className="bg-[var(--dust-grey)] py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 w-full text-sm font-medium uppercase tracking-[0.22em] text-[var(--hunter-green)]/88"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-[var(--pine-teal)] md:text-5xl lg:text-6xl lg:leading-[0.98]"
          >
            One team for build, secure, and scale
          </motion.h2>
          <p className="max-w-md text-sm leading-relaxed text-[var(--hunter-green)]/92 md:text-base">
            Full-stack delivery coverage from security assessments to AI systems
            and cloud architecture.
          </p>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[240px]">
          {services.map((service, index) => {
            const tone = service.featured ? null : serviceTones[index - 1];

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`${service.size} relative overflow-hidden rounded-[2rem] p-8 shadow-[0_24px_70px_rgba(26,26,26,0.08)] ${service.featured
                  ? "border border-[var(--pine-teal)]/20 bg-[var(--dry-sage)] text-[var(--pine-teal)]"
                  : `${tone?.card} border text-[var(--pine-teal)] backdrop-blur-sm`
                  }`}
              >
                {service.featured ? (
                  <>
                    <div className="absolute -right-10 top-10 h-36 w-36 rounded-full bg-[var(--dry-sage)]/24 blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[var(--fern)]/16 blur-3xl" />
                  </>
                ) : null}

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-[1.25rem] ${service.featured
                        ? "bg-white/60 text-[var(--pine-teal)]"
                        : tone?.icon
                        }`}
                    >
                      {service.icon}
                    </div>
                    <h3
                      className={`mb-3 text-2xl font-semibold tracking-[-0.03em] ${service.featured ? "text-[var(--pine-teal)]" : "text-[var(--pine-teal)]"
                        }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`max-w-sm leading-relaxed ${service.featured
                        ? "text-[var(--color-text-body)] text-base"
                        : `${tone?.body} text-sm`
                        }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-medium transition-all ${service.featured
                      ? "text-[var(--pine-teal)]"
                      : `${tone?.cta} group-hover:translate-x-1`
                      }`}
                  >
                    Learn more
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
