"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        quote:
            "Working with Safars was a game changer. They automated our processes, streamlined our CRM, and boosted our team's productivity in no time!",
        name: "Rizki Anugrah",
        title: "PRODUCT MANAGER OF BLOCKHAUS",
        avatar: "https://i.pravatar.cc/150?u=rizki",
    },
    {
        quote:
            "The team at Safars delivered beyond our expectations. Their expertise in modern technologies helped us scale our platform effortlessly.",
        name: "Sarah Chen",
        title: "CTO OF NEXUS TECH",
        avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    {
        quote:
            "Exceptional service and outstanding results. Safars transformed our digital presence and helped us reach new markets.",
        name: "Michael Torres",
        title: "CEO OF ELEVATE STUDIOS",
        avatar: "https://i.pravatar.cc/150?u=michael",
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const current = testimonials[currentIndex];

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        }),
    };

    return (
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_15%,#3a3a3a_0%,#262626_46%,#1a1a1a_100%)] py-20 md:py-28 lg:py-36">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.12]" />
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <div className="w-16 h-[1px] bg-gradient-to-r from-[var(--dry-sage)] to-transparent"></div>
                    <span className="text-xs tracking-[0.25em] uppercase text-[var(--dry-sage)]/92 font-medium">
                        /TESTIMONIALS
                    </span>
                </motion.div>

                {/* Testimonial Content */}
                <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm md:p-10">
                    {/* Large Quotation Mark - Decorative */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute -top-8 left-0 md:left-8 pointer-events-none"
                    >
                        <span
                            className="text-[120px] md:text-[180px] font-medium leading-none select-none opacity-20"
                            style={{ color: "#b7b7b7" }}
                        >
                            &rdquo;
                        </span>
                    </motion.div>

                    {/* Quote Container */}
                    <div className="relative z-10 pl-4 md:pl-20 lg:pl-28">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 },
                                }}
                            >
                                {/* Quote Text */}
                                <blockquote className="mb-12">
                                    <p className="max-w-4xl text-2xl font-semibold leading-[1.46] tracking-[-0.015em] text-[var(--pine-teal)] md:text-3xl lg:text-4xl">
                                        {current.quote}
                                    </p>
                                </blockquote>

                                {/* Author Info */}
                                <div className="flex items-center gap-5">
                                    {/* Avatar */}
                                    <div className="relative">
                                        <div className="absolute inset-0 rounded-full bg-[var(--dry-sage)]/30 blur-sm"></div>
                                        <div className="relative w-14 h-14 rounded-full p-[2px] bg-gradient-to-br from-[var(--dry-sage)] to-[var(--fern)]/40">
                                            <img
                                                src={current.avatar}
                                                alt={current.name}
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[var(--pine-teal)] font-semibold text-lg mb-0.5">
                                            {current.name}
                                        </p>
                                        <p className="text-[var(--color-text-muted)] text-xs tracking-[0.15em] uppercase font-medium">
                                            {current.title}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 flex items-center justify-between pl-4 md:pl-20 lg:pl-28"
                    >
                        {/* Progress Dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "w-8 bg-[var(--dry-sage)]"
                                        : "w-1.5 bg-white/20 hover:bg-white/40"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Arrow Navigation */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handlePrev}
                                className="group w-12 h-12 flex items-center justify-center rounded-full border border-[var(--pine-teal)]/20 text-[var(--color-text-muted)] hover:border-[var(--pine-teal)]/35 hover:text-[var(--pine-teal)] transition-all duration-300"
                                aria-label="Previous testimonial"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="transform group-hover:-translate-x-0.5 transition-transform duration-300"
                                >
                                    <path
                                        d="M12.5 15L7.5 10L12.5 5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="group w-12 h-12 flex items-center justify-center rounded-full bg-[var(--dry-sage)] text-[var(--pine-teal)] hover:bg-[var(--dry-sage)]/90 hover:scale-105 transition-all duration-300"
                                aria-label="Next testimonial"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="transform group-hover:translate-x-0.5 transition-transform duration-300"
                                >
                                    <path
                                        d="M7.5 15L12.5 10L7.5 5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--dry-sage)]/8 blur-[100px]"></div>
            </div>
        </section>
    );
}
