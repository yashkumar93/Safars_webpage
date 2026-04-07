"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center bg-[#F8F8F8]">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="mb-6 text-[8rem] font-bold leading-none tracking-tighter text-[#e0e0e0] md:text-[12rem]">
                404
              </p>
              <h1 className="mb-4 text-3xl font-semibold tracking-[-0.03em] text-[#1a1a1a] md:text-5xl">
                Page not found
              </h1>
              <p className="mb-8 text-base text-[#666] md:text-lg">
                The page you&apos;re looking for doesn&apos;t exist or has been
                moved. Let&apos;s get you back on track.
              </p>
              <Link href="/">
                <Button variant="dark" size="lg" className="px-8">
                  Back to home
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
