"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TermsPage() {
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
              Terms of Service
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
                  1. Acceptance of Terms
                </h2>
                <p className="text-base leading-relaxed text-[#555]">
                  By accessing and using the services provided by Safars
                  (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), you accept and agree to be bound by
                  these Terms of Service. If you do not agree, please
                  discontinue use of our services immediately.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-[#1a1a1a]">
                  2. Services
                </h2>
                <p className="text-base leading-relaxed text-[#555]">
                  Safars provides security consulting, penetration testing, AI
                  solutions, web development, research & development, and cloud
                  infrastructure services. The specific scope of services will be
                  defined in individual statements of work or service agreements.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-[#1a1a1a]">
                  3. Confidentiality
                </h2>
                <p className="text-base leading-relaxed text-[#555]">
                  Both parties agree to maintain the confidentiality of all
                  proprietary information exchanged during the course of service
                  delivery. This includes but is not limited to security
                  findings, system architectures, and business data.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-[#1a1a1a]">
                  4. Intellectual Property
                </h2>
                <p className="text-base leading-relaxed text-[#555]">
                  Unless otherwise agreed in writing, all deliverables created
                  during the engagement become the property of the client upon
                  full payment. Safars retains the right to use general
                  methodologies and tools developed independently.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-[#1a1a1a]">
                  5. Limitation of Liability
                </h2>
                <p className="text-base leading-relaxed text-[#555]">
                  Safars shall not be liable for any indirect, incidental, or
                  consequential damages arising from the use of our services.
                  Our total liability shall not exceed the fees paid for the
                  specific service giving rise to the claim.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-[#1a1a1a]">
                  6. Contact
                </h2>
                <p className="text-base leading-relaxed text-[#555]">
                  For questions regarding these terms, please contact us at{" "}
                  <a
                    href="mailto:legal@safars.com"
                    className="font-medium text-[#1a1a1a] underline underline-offset-2 hover:text-[#555]"
                  >
                    legal@safars.com
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
