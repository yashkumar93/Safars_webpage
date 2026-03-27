"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Shield, Bot, Code, FlaskConical, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
}

const defaultFeatures: Feature[] = [
    {
        title: "Certified Security Experts",
        description: "Our team holds industry-recognized certifications including OSCP, eJPT v2, and CEH. We bring real-world experience to every engagement.",
        icon: <Shield size={24} />,
        image: "/security.jpg",
    },
    {
        title: "AI & Machine Learning",
        description: "Custom AI solutions built on cutting-edge LLMs, designed to automate workflows and enhance decision-making.",
        icon: <Bot size={24} />,
        image: "/ai.jpg",
    },
    {
        title: "Modern Development",
        description: "Full-stack development with modern frameworks, optimized for performance, security, and scalability.",
        icon: <Code size={24} />,
        image: "/dev.jpg",
    },
    {
        title: "Research & Innovation",
        description: "Deep technical research and proof-of-concept development for emerging technologies.",
        icon: <FlaskConical size={24} />,
        image: "/research.jpg",
    },
    {
        title: "Cloud Infrastructure",
        description: "Secure, scalable cloud architecture with DevOps best practices and infrastructure as code.",
        icon: <Cloud size={24} />,
        image: "/cloud.jpg",
    },
];

interface FeatureCarouselProps {
    features?: Feature[];
    autoPlayInterval?: number;
    className?: string;
}

export function FeatureCarousel({
    features = defaultFeatures,
    autoPlayInterval = 5000,
    className,
}: FeatureCarouselProps) {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % features.length);
        }, autoPlayInterval);
        return () => clearInterval(timer);
    }, [features.length, autoPlayInterval, isPaused]);

    const prev = () => setCurrent((prev) => (prev - 1 + features.length) % features.length);
    const next = () => setCurrent((prev) => (prev + 1) % features.length);

    return (
        <div
            className={cn("relative w-full py-32 bg-[#dce2d3]", className)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--pine-teal)] mb-4"
                    >
                        Why <span className="bg-[var(--dry-sage)] px-3 py-1 rounded-lg">Safars</span>?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[var(--hunter-green)] max-w-2xl mx-auto text-lg"
                    >
                        Everything you need to build, secure, and scale your digital infrastructure.
                    </motion.p>
                </div>

                {/* Main Content */}
                <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden bg-[#f7f5ef] border border-[var(--pine-teal)]/10 shadow-xl shadow-black/5">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[400px]">
                        {/* Text Content */}
                        <div className="order-2 md:order-1 space-y-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-6"
                                >
                                    {/* Icon Badge */}
                                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--dry-sage)]/30 border border-[var(--dry-sage)] text-[var(--pine-teal)]">
                                        {features[current].icon}
                                        <span className="text-sm font-semibold uppercase tracking-wider">Why Safars</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--pine-teal)] tracking-tight">
                                        {features[current].title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-lg text-[var(--hunter-green)] leading-relaxed max-w-lg">
                                        {features[current].description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation */}
                            <div className="flex items-center gap-4 pt-4">
                                <button
                                    onClick={prev}
                                    className="w-12 h-12 rounded-full border border-[var(--pine-teal)]/10 flex items-center justify-center text-[var(--hunter-green)]/70 hover:text-[var(--pine-teal)] hover:border-[var(--pine-teal)] transition-all"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={next}
                                    className="w-12 h-12 rounded-full border border-[var(--pine-teal)]/10 flex items-center justify-center text-[var(--hunter-green)]/70 hover:text-[var(--pine-teal)] hover:border-[var(--pine-teal)] transition-all"
                                >
                                    <ChevronRight size={20} />
                                </button>

                                {/* Dots */}
                                <div className="flex gap-2 ml-4">
                                    {features.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrent(idx)}
                                            className={cn(
                                                "h-2 rounded-full transition-all duration-300",
                                                current === idx
                                                    ? "w-8 bg-[var(--fern)]"
                                                    : "w-2 bg-[var(--pine-teal)]/20 hover:bg-[var(--pine-teal)]/40"
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="order-1 md:order-2 relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[var(--pine-teal)]/10 shadow-lg"
                                >
                                    <Image
                                        src={features[current].image}
                                        alt={features[current].title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Glow effect */}
                            <div className="absolute -inset-8 bg-[var(--dry-sage)]/25 blur-3xl rounded-full -z-10 opacity-50" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
