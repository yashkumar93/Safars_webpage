"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import Link from "next/link";
import Image from "next/image";
import type { ServiceData } from "@/lib/services-data";

interface ServicePageTemplateProps {
  service: ServiceData;
}

export const ServicePageTemplate = ({ service }: ServicePageTemplateProps) => {
  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-[var(--dust-grey)] text-[var(--pine-teal)] selection:bg-[var(--dry-sage)] selection:text-[var(--pine-teal)]">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[80vh] overflow-hidden bg-[var(--dust-grey)]">
        {/* Subtle grid overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(52,78,65,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(52,78,65,0.04)_1px,transparent_1px)] bg-[size:42px_42px] opacity-40" />

        {/* Soft warm glows instead of green */}
        <motion.div
          aria-hidden
          animate={{ x: [0, 30, 0], y: [0, -24, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-16 top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(200,196,186,0.7)_0%,rgba(200,196,186,0)_72%)] blur-xl"
        />
        <motion.div
          aria-hidden
          animate={{ x: [0, -35, 0], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-20 top-16 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(210,206,196,0.5)_0%,rgba(210,206,196,0)_74%)] blur-2xl"
        />

        <div className="container relative z-10 mx-auto flex min-h-[80vh] items-center px-6">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center pb-16 pt-32 text-center md:pt-40">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--pine-teal)]/15 bg-[#eeede7]/80 px-5 py-2 backdrop-blur-md"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--pine-teal)]/8">
                <Icon size={16} className="text-[var(--pine-teal)]" />
              </div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--pine-teal)]/80">
                {service.title}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-[var(--pine-teal)] md:text-6xl lg:text-[4.5rem] lg:leading-[1.02]"
            >
              {service.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-7 max-w-3xl text-base leading-relaxed text-[var(--hunter-green)]/80 md:text-xl"
            >
              {service.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="dark"
                  className="px-8 text-base shadow-[0_18px_40px_rgba(52,78,65,0.16)]"
                >
                  Get started
                </Button>
              </Link>
              <Link href="/#services">
                <Button
                  size="lg"
                  variant="ghost"
                  className="px-8 text-base"
                >
                  All services
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {service.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[var(--pine-teal)]/10 bg-[#eeede7]/80 px-5 py-4 backdrop-blur-md"
                >
                  <p className="text-3xl font-semibold tracking-tight text-[var(--pine-teal)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-[var(--hunter-green)]/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center">
          <span className="mb-2 h-8 w-px bg-[var(--pine-teal)]/25" />
          <span className="h-2 w-2 rounded-full bg-[var(--pine-teal)]/40" />
        </div>
      </section>

      {/* ── Overview with Image ── */}
      <section className="bg-[#eeede7] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[var(--hunter-green)]/70">
                Overview
              </p>
              <h2 className="mb-6 text-3xl font-semibold tracking-[-0.04em] text-[var(--pine-teal)] md:text-5xl lg:text-[3.4rem] lg:leading-[1.06]">
                What we{" "}
                <span className="italic">deliver</span>
              </h2>
              <p className="text-base leading-relaxed text-[var(--hunter-green)]/80 md:text-lg">
                {service.heroDescription}
              </p>
              <div className="mt-8 space-y-3">
                {service.whyChoose.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[var(--pine-teal)]"
                    />
                    <span className="text-sm text-[var(--hunter-green)]/80 md:text-base">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2rem] border border-[var(--pine-teal)]/8 shadow-[0_24px_70px_rgba(52,78,65,0.08)]">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={640}
                  height={480}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-[var(--dust-grey)]/60 blur-2xl" />
              <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-[#c8c4ba]/40 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="bg-[var(--dust-grey)] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-2xl"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[var(--hunter-green)]/70">
              Capabilities
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--pine-teal)] md:text-5xl">
              What&apos;s <span className="italic">included</span>
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-[var(--pine-teal)]/8 bg-[#eeede7] p-8 shadow-[0_24px_70px_rgba(52,78,65,0.04)] backdrop-blur-sm transition-all hover:border-[var(--pine-teal)]/18 hover:shadow-[0_24px_70px_rgba(52,78,65,0.10)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-[var(--pine-teal)]/8 text-[var(--pine-teal)]">
                    <FeatureIcon size={28} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold tracking-[-0.03em] text-[var(--pine-teal)]">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--hunter-green)]/78">
                    {feature.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process Timeline ── */}
      <section className="bg-[#eeede7] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[var(--hunter-green)]/70">
              Our Process
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--pine-teal)] md:text-5xl">
              How we <span className="italic">work</span>
            </h2>
          </motion.div>

          <div className="relative mx-auto max-w-4xl">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--pine-teal)]/30 via-[var(--pine-teal)]/20 to-[var(--pine-teal)]/10 md:block" />

            <div className="space-y-8 md:space-y-12">
              {service.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6 md:gap-10"
                >
                  {/* Step number */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[var(--pine-teal)]/25 bg-[#eeede7] text-xl font-semibold text-[var(--pine-teal)]">
                    {String(step.step).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-[1.5rem] border border-[var(--pine-teal)]/8 bg-[var(--dust-grey)] p-6 shadow-[0_12px_40px_rgba(52,78,65,0.04)] md:p-8">
                    <h3 className="mb-2 text-xl font-semibold tracking-[-0.02em] text-[var(--pine-teal)] md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--hunter-green)]/75 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[var(--dust-grey)] py-16 md:py-24"
      >
        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(52,78,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(52,78,65,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--pine-teal)]/12 bg-[#eeede7] backdrop-blur-md">
                <Icon size={28} className="text-[var(--pine-teal)]" />
              </div>
              <h2 className="mb-6 text-3xl font-semibold tracking-[-0.03em] text-[var(--pine-teal)] md:text-5xl">
                Ready to get started with{" "}
                <span className="italic">
                  {service.title}
                </span>
                ?
              </h2>
              <p className="mb-10 text-base leading-relaxed text-[var(--hunter-green)]/75 md:text-lg">
                Let&apos;s discuss how we can help secure and scale your
                systems. Book a free discovery call with our team.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/#contact">
                  <Button
                    size="lg"
                    variant="dark"
                    className="px-8 text-base shadow-[0_18px_40px_rgba(52,78,65,0.12)]"
                  >
                    Book a discovery call
                    <ArrowUpRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="px-8 text-base"
                  >
                    Back to home
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="pointer-events-none absolute left-1/4 top-1/2 h-[40%] w-[40%] -translate-y-1/2 rounded-full bg-[#c8c4ba]/20 blur-[120px]" />
      </section>
    </main>
  );
};
