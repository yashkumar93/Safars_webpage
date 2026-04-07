"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[var(--dust-grey)] pt-16 md:pt-24">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    <div>
                        <div className="mb-10">
                            <span className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] font-medium">
                                /EMAIL
                            </span>
                            <a
                                href="mailto:hello@safars.com"
                                className="mt-3 block text-2xl font-semibold text-[var(--color-text-heading)] transition-colors hover:text-[var(--color-text-body)] md:text-3xl"
                            >
                                hello@safars.com
                            </a>
                        </div>
                        <div>
                            <span className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] font-medium">
                                /PHONE
                            </span>
                            <a
                                href="tel:+1234567890"
                                className="mt-3 block text-xl font-semibold text-[var(--color-text-heading)] transition-colors hover:text-[var(--color-text-body)] md:text-2xl"
                            >
                                +1234 567 89
                            </a>
                        </div>
                    </div>

                    <div>
                        <span className="mb-8 block text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                            /NAVIGATION
                        </span>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Services", href: "/#services" },
                                { name: "Case Studies", href: "/case-studies" },
                                { name: "Blog", href: "/blog" },
                                { name: "Waitlist", href: "/waitlist" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-base font-semibold !text-[var(--pine-teal)] transition-colors hover:!text-[var(--pine-teal)] md:text-lg"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <span className="mb-8 block text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                            /COMPANY
                        </span>
                        <ul className="space-y-4">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Careers", href: "/careers" },
                                { name: "Contact Us", href: "/contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-base font-semibold !text-[var(--pine-teal)] transition-colors hover:!text-[var(--pine-teal)] md:text-lg"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <span className="mb-8 mt-10 block text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                            /LEGAL
                        </span>
                        <ul className="space-y-4">
                            {[
                                { name: "Terms of Services", href: "/terms" },
                                { name: "Privacy Policy", href: "/privacy" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-base font-semibold !text-[var(--pine-teal)] transition-colors hover:!text-[var(--pine-teal)] md:text-lg"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Follow Us Column */}
                    <div>
                        <span className="mb-8 block text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                            /FOLLOW US
                        </span>
                        <ul className="space-y-4">
                            {["X/Twitter", "Instagram", "Behance", "Telegram", "LinkedIn"].map(
                                (item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="inline-flex rounded-full border border-[var(--pine-teal)]/20 px-3 py-1 text-sm font-semibold !text-[var(--pine-teal)] transition-colors hover:border-[var(--pine-teal)]/35 hover:bg-[var(--pine-teal)]/5 md:text-base"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-[rgba(26,26,26,0.1)] mb-6"></div>

                <div className="mb-8 flex flex-col items-center justify-between text-xs uppercase tracking-wider text-[var(--color-text-muted)] md:flex-row md:text-sm">
                    <p className="text-[var(--color-text-muted)]">©2025 SAFARS. ALL RIGHTS RESERVED.</p>
                    <p className="mt-4 text-[var(--color-text-muted)] md:mt-0">
                        MADE BY{" "}
                        <span className="text-[var(--color-text-heading)] font-medium">SAFARS</span>
                        <span className="text-[var(--color-text-muted)] ml-1">✓</span>
                    </p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div
                    className="footer-wordmark w-full text-center whitespace-nowrap text-[20vw] md:text-[18vw] font-bold tracking-tighter leading-[0.85] text-transparent select-none pb-4"
                    style={{
                        WebkitTextStroke: "2px rgba(26,26,26,0.08)",
                    }}
                >
                    Safars
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dust-grey)] via-[var(--dust-grey)]/50 to-transparent pointer-events-none"></div>
            </div>
        </footer>
    );
};
