"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#888]"
            >
              /Legal
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mb-2 text-4xl font-semibold tracking-[-0.04em] text-[#1a1a1a] md:text-5xl"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-12 text-sm text-[#999]"
            >
              Last updated: March 1, 2025
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="space-y-10 rounded-2xl border border-[#e8e8e8] bg-white p-8 md:p-10"
            >
              <div>
                <h2 className="mb-3 text-xl font-semibold text-[#1a1a1a]">
                  1. Information We Collect
                </h2>
                <p className="text-base leading-relaxed text-[#555]">
                  We collect information you provide directly, such as your
                  name, email address, company name, and project details when
                  you fill out forms, request a consultation, or engage our
                  services.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-[#1a1a1a]">
                  2. How We Use Your Information
                </h2>
                <p className="text-base leading-relaxed text-[#555]">
                  Your information is used to deliver the services you&apos;ve
                  requested, communicate about projects, send relevant updates,
                  and improve our offerings. We never sell your personal data to
                  third parties.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-[#1a1a1a]">
                  3. Data Security
                </h2>
                <p className="text-base leading-relaxed text-[#555]">
                  We implement industry-standard security measures to protect
                  your data, including encryption in transit and at rest, access
                  controls, and regular security audits of our own
                  infrastructure.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-[#1a1a1a]">
                  4. Data Retention
                </h2>
                <p className="text-base leading-relaxed text-[#555]">
                  We retain personal and project data for the duration of our
                  engagement plus a reasonable period afterward for legal and
                  operational purposes. You may request deletion at any time.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-[#1a1a1a]">
                  5. Cookies & Analytics
                </h2>
                <p className="text-base leading-relaxed text-[#555]">
                  Our website uses essential cookies and privacy-respecting
                  analytics to understand how visitors interact with our site.
                  No personally identifiable information is shared with
                  analytics providers.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-[#1a1a1a]">
                  6. Your Rights
                </h2>
                <p className="text-base leading-relaxed text-[#555]">
                  You have the right to access, correct, or delete your personal
                  data at any time. To exercise these rights, contact us at{" "}
                  <a
                    href="mailto:privacy@safars.com"
                    className="font-medium text-[#1a1a1a] underline underline-offset-2 hover:text-[#555]"
                  >
                    privacy@safars.com
                  </a>
                  .
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
