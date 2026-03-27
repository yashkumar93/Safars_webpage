"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[linear-gradient(165deg,#304b3d_0%,#22372d_56%,#17251f_100%)] pt-16 text-white md:pt-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,177,138,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    <div>
                        <div className="mb-10">
                            <span className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-on-dark-muted)]/88 font-medium">
                                /EMAIL
                            </span>
                            <a
                                href="mailto:hello@safars.com"
                                className="mt-3 block text-2xl font-semibold text-[var(--color-text-on-dark-heading)] transition-colors hover:text-[var(--dry-sage)] md:text-3xl"
                            >
                                hello@safars.com
                            </a>
                        </div>
                        <div>
                            <span className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-on-dark-muted)]/88 font-medium">
                                /PHONE
                            </span>
                            <a
                                href="tel:+1234567890"
                                className="mt-3 block text-xl font-semibold text-[var(--color-text-on-dark-heading)] transition-colors hover:text-[var(--dry-sage)] md:text-2xl"
                            >
                                +1234 567 89
                            </a>
                        </div>
                    </div>

                    <div>
                        <span className="mb-8 block text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-on-dark-muted)]/88">
                            /NAVIGATION
                        </span>
                        <ul className="space-y-4">
                            {["Home", "Services", "Case Studies", "Blog", "Waitlist", "404"].map(
                                (item) => (
                                    <li key={item}>
                                        <Link
                                            href="#"
                                            className="text-base font-medium text-[var(--color-text-on-dark-body)] transition-colors hover:text-[var(--dry-sage)] md:text-lg"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div>
                        <span className="mb-8 block text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-on-dark-muted)]/88">
                            /COMPANY
                        </span>
                        <ul className="space-y-4">
                            {["About Us", "Careers", "Contact Us"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-base font-medium text-[var(--color-text-on-dark-body)] transition-colors hover:text-[var(--dry-sage)] md:text-lg"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <span className="mb-8 mt-10 block text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-on-dark-muted)]/88">
                            /LEGAL
                        </span>
                        <ul className="space-y-4">
                            {["Terms of Services", "Privacy Policy"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-base font-medium text-[var(--color-text-on-dark-body)] transition-colors hover:text-[var(--dry-sage)] md:text-lg"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Follow Us Column */}
                    <div>
                        <span className="mb-8 block text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-on-dark-muted)]/88">
                            /FOLLOW US
                        </span>
                        <ul className="space-y-4">
                            {["X/Twitter", "Instagram", "Behance", "Telegram", "LinkedIn"].map(
                                (item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="text-base font-medium text-[var(--color-text-on-dark-body)] transition-colors hover:text-[var(--dry-sage)] md:text-lg"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-white/10 mb-6"></div>

                <div className="mb-8 flex flex-col items-center justify-between text-xs uppercase tracking-wider text-[var(--color-text-on-dark-muted)]/86 md:flex-row md:text-sm">
                    <p>©2025 SAFARS. ALL RIGHTS RESERVED.</p>
                    <p className="mt-4 md:mt-0">
                        MADE BY{" "}
                        <span className="text-white font-medium">SAFARS</span>
                        <span className="text-[var(--dry-sage)] ml-1">✓</span>
                    </p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div
                    className="w-full text-center whitespace-nowrap text-[20vw] md:text-[18vw] font-bold tracking-tighter leading-[0.85] text-transparent select-none pb-4"
                    style={{
                        WebkitTextStroke: "2px rgba(218,215,205,0.24)",
                    }}
                >
                    Safars
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--pine-teal)] via-[var(--pine-teal)]/50 to-transparent pointer-events-none"></div>
            </div>
        </footer>
    );
};
