"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "How AI Is Transforming Penetration Testing in 2025",
    excerpt:
      "Explore the intersection of artificial intelligence and modern security assessments — and what it means for your team.",
    date: "Mar 15, 2025",
    category: "Security",
    readTime: "6 min read",
  },
  {
    title: "Building Resilient Cloud Architecture: Lessons Learned",
    excerpt:
      "Key patterns and anti-patterns from migrating dozens of production workloads to modern cloud infrastructure.",
    date: "Mar 08, 2025",
    category: "Cloud",
    readTime: "8 min read",
  },
  {
    title: "The Rise of AI Agents in Enterprise Workflows",
    excerpt:
      "Why LLM-powered agents are reshaping how companies handle repetitive tasks — and how to implement them safely.",
    date: "Feb 28, 2025",
    category: "AI",
    readTime: "5 min read",
  },
  {
    title: "Zero-Trust Security: Beyond the Buzzword",
    excerpt:
      "A practical guide to implementing zero-trust architecture in startups and mid-size companies without the enterprise overhead.",
    date: "Feb 18, 2025",
    category: "Security",
    readTime: "7 min read",
  },
  {
    title: "Shipping Faster Without Breaking Things",
    excerpt:
      "How we combine CI/CD, automated testing, and security scanning to help teams deploy with confidence every day.",
    date: "Feb 05, 2025",
    category: "Engineering",
    readTime: "4 min read",
  },
  {
    title: "Web Development Trends That Actually Matter",
    excerpt:
      "Cutting through the noise: which frameworks, tools, and practices are worth your attention this year.",
    date: "Jan 22, 2025",
    category: "Web Dev",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
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
              /Blog
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl font-semibold tracking-[-0.04em] text-[#1a1a1a] md:text-6xl lg:text-7xl"
            >
              Insights & ideas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-base leading-relaxed text-[#555] md:text-lg"
            >
              Thoughts on security, AI, engineering, and building modern systems
              from the Safars team.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <motion.a
                key={post.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col rounded-2xl border border-[#e8e8e8] bg-white p-7 transition-all hover:border-[#ccc] hover:shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-[#f0f0f0] px-3 py-0.5 text-xs font-medium uppercase tracking-wider text-[#666]">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#aaa]">{post.readTime}</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-[-0.02em] text-[#1a1a1a] group-hover:text-[#333]">
                  {post.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[#666]">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-[#f0f0f0] pt-4">
                  <span className="text-xs text-[#aaa]">{post.date}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-[#bbb] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1a1a1a]"
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
