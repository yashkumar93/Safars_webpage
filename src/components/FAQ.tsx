"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const faqGroups = [
  {
    title: "About Safars",
    items: [
      {
        id: "what-does-safars-build",
        question: "What does Safars actually build?",
        answer:
          "We design and ship AI automations, internal platforms, secure web products, and delivery systems that remove repetitive work without adding operational complexity.",
      },
      {
        id: "who-do-you-work-with",
        question: "Who do you typically work with?",
        answer:
          "Most engagements are with startups, product teams, and operators who need a small senior team that can move from strategy to implementation without heavy handoffs.",
      },
    ],
  },
  {
    title: "How projects work",
    items: [
      {
        id: "how-fast-can-we-start",
        question: "How fast can we get started?",
        answer:
          "After a short discovery call, we define scope, priorities, and delivery milestones. Most projects can begin within days if the brief and decision-makers are ready.",
      },
      {
        id: "can-you-join-existing-team",
        question: "Can you work with our existing team and stack?",
        answer:
          "Yes. Safars is set up to plug into an in-house product, security, or operations team and deliver inside the tooling, processes, and infrastructure you already use.",
      },
      {
        id: "what-does-delivery-look-like",
        question: "What does delivery usually look like?",
        answer:
          "We keep it direct: scoped milestones, visible progress, practical documentation, and working releases. The focus is always shipping something your team can use immediately.",
      },
    ],
  },
  {
    title: "AI, security, and support",
    items: [
      {
        id: "how-do-you-handle-security",
        question: "How do you handle security and sensitive data?",
        answer:
          "Security is built into the delivery process from the start, including access controls, data-handling boundaries, architecture review, and deployment choices that fit the risk level of the project.",
      },
      {
        id: "do-you-maintain-after-launch",
        question: "Do you support products after launch?",
        answer:
          "Yes. We can stay involved for iteration, optimization, monitoring, and roadmap support so the system keeps improving after the first release.",
      },
    ],
  },
] as const;

export function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(
    faqGroups[0].items[0].id
  );

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#d8d6cb] py-20 text-[var(--pine-teal)] md:py-28 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(163,177,138,0.16),transparent_28%)]" />

      <div className="container mx-auto px-6">
        <div className="relative z-10 grid gap-16 rounded-[2rem] border border-[var(--pine-teal)]/10 bg-[#f3f1ea]/70 p-6 shadow-[0_24px_70px_rgba(52,78,65,0.08)] backdrop-blur-sm lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20 lg:p-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="self-start lg:sticky lg:top-28"
          >
            <span className="mb-6 inline-flex items-center gap-4 text-xs font-medium uppercase tracking-[0.22em] text-[var(--hunter-green)]/88">
              <span className="h-px w-14 bg-[var(--hunter-green)]/40" />
              /FAQ
            </span>
            <h2 className="max-w-sm text-4xl font-semibold tracking-[-0.05em] text-[var(--pine-teal)] md:text-6xl md:leading-[0.95]">
              Important questions, answered clearly
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--hunter-green)]/96 md:text-lg">
              The usual questions teams ask before starting an AI, product, or
              infrastructure engagement with Safars.
            </p>
          </motion.div>

          <div className="space-y-14">
            {faqGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: groupIndex * 0.08 }}
              >
                <p className="mb-4 text-sm font-medium text-[var(--hunter-green)]/86 md:text-[1.05rem]">
                  {group.title}
                </p>

                <div className="rounded-2xl border border-[var(--pine-teal)]/14 bg-white/60">
                  {group.items.map((item) => {
                    const isOpen = openItem === item.id;

                    return (
                      <div
                        key={item.id}
                        className="border-b border-[var(--pine-teal)]/14 px-4 py-1 last:border-none"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenItem((current) =>
                              current === item.id ? null : item.id
                            )
                          }
                          className="flex w-full items-start gap-5 py-5 text-left md:gap-6 md:py-6"
                          aria-expanded={isOpen}
                        >
                          <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--fern)]/35 bg-white/40 text-[var(--fern)]">
                            {isOpen ? (
                              <Minus className="h-4 w-4" strokeWidth={2} />
                            ) : (
                              <Plus className="h-4 w-4" strokeWidth={2} />
                            )}
                          </span>
                          <span
                            role="paragraph"
                            className="faq-question pr-4 text-xl font-normal tracking-[-0.03em] text-[#343434] md:text-[1.9rem] md:leading-[1.15]"
                          >
                            {item.question}
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen ? (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <p
                                role="paragraph"
                                className="faq-answer pb-6 pl-12 pr-4 text-base font-normal leading-relaxed md:max-w-2xl md:pl-[3.25rem] md:text-lg"
                              >
                                {item.answer}
                              </p>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
