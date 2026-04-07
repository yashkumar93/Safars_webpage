"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#888]"
            >
              /Contact Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl font-semibold tracking-[-0.04em] text-[#1a1a1a] md:text-6xl lg:text-7xl"
            >
              Let&apos;s start a{" "}
              conversation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-base leading-relaxed text-[#555] md:text-lg"
            >
              Have a project in mind? Need a security audit? Just want to say
              hi? We&apos;d love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-2xl border border-[#e8e8e8] bg-white p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0f0f0]">
                    <Mail size={20} className="text-[#1a1a1a]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#999]">
                      Email
                    </p>
                    <a
                      href="mailto:hello@safars.com"
                      className="mt-1 block text-lg font-semibold text-[#1a1a1a] hover:text-[#555]"
                    >
                      hello@safars.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-[#e8e8e8] bg-white p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0f0f0]">
                    <Phone size={20} className="text-[#1a1a1a]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#999]">
                      Phone
                    </p>
                    <a
                      href="tel:+1234567890"
                      className="mt-1 block text-lg font-semibold text-[#1a1a1a] hover:text-[#555]"
                    >
                      +1234 567 89
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-[#e8e8e8] bg-white p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0f0f0]">
                    <MapPin size={20} className="text-[#1a1a1a]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#999]">
                      Location
                    </p>
                    <p className="mt-1 text-lg font-semibold text-[#1a1a1a]">
                      Remote-first, Global
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="space-y-5 rounded-2xl border border-[#e8e8e8] bg-white p-7">
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#999]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border-b border-[#e0e0e0] bg-transparent px-0 py-3 text-base text-[#1a1a1a] placeholder:text-[#bbb] focus:border-[#1a1a1a] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#999]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border-b border-[#e0e0e0] bg-transparent px-0 py-3 text-base text-[#1a1a1a] placeholder:text-[#bbb] focus:border-[#1a1a1a] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[#999]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project"
                    className="w-full resize-none border-b border-[#e0e0e0] bg-transparent px-0 py-3 text-base text-[#1a1a1a] placeholder:text-[#bbb] focus:border-[#1a1a1a] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-2 flex w-full items-center justify-between rounded-xl border border-[var(--pine-teal)]/35 bg-[var(--color-card)] px-6 py-4 text-[var(--pine-teal)] opacity-100 transition-colors hover:bg-[var(--color-card-highlight)]"
                >
                  <span className="text-base font-medium">Send message</span>
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
