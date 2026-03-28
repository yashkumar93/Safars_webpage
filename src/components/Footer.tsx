"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[#F8F8F8] pt-16 md:pt-24">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    <div>
                        <div className="mb-10">
                            <span className="text-xs tracking-[0.2em] uppercase text-[#999] font-medium">
                                /EMAIL
                            </span>
                            <a
                                href="mailto:hello@safars.com"
                                className="mt-3 block text-2xl font-semibold text-[#1a1a1a] transition-colors hover:text-[#555] md:text-3xl"
                            >
                                hello@safars.com
                            </a>
                        </div>
                        <div>
                            <span className="text-xs tracking-[0.2em] uppercase text-[#999] font-medium">
                                /PHONE
                            </span>
                            <a
                                href="tel:+1234567890"
                                className="mt-3 block text-xl font-semibold text-[#1a1a1a] transition-colors hover:text-[#555] md:text-2xl"
                            >
                                +1234 567 89
                            </a>
                        </div>
                    </div>

                    <div>
                        <span className="mb-8 block text-xs font-medium uppercase tracking-[0.2em] text-[#999]">
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
                                        className="text-base font-medium text-[#444] transition-colors hover:text-[#1a1a1a] md:text-lg"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <span className="mb-8 block text-xs font-medium uppercase tracking-[0.2em] text-[#999]">
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
                                        className="text-base font-medium text-[#444] transition-colors hover:text-[#1a1a1a] md:text-lg"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <span className="mb-8 mt-10 block text-xs font-medium uppercase tracking-[0.2em] text-[#999]">
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
                                        className="text-base font-medium text-[#444] transition-colors hover:text-[#1a1a1a] md:text-lg"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Follow Us Column */}
                    <div>
                        <span className="mb-8 block text-xs font-medium uppercase tracking-[0.2em] text-[#999]">
                            /FOLLOW US
                        </span>
                        <ul className="space-y-4">
                            {["X/Twitter", "Instagram", "Behance", "Telegram", "LinkedIn"].map(
                                (item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="text-base font-medium text-[#444] transition-colors hover:text-[#1a1a1a] md:text-lg"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-[#ddd] mb-6"></div>

                <div className="mb-8 flex flex-col items-center justify-between text-xs uppercase tracking-wider text-[#999] md:flex-row md:text-sm">
                    <p>©2025 SAFARS. ALL RIGHTS RESERVED.</p>
                    <p className="mt-4 md:mt-0">
                        MADE BY{" "}
                        <span className="text-[#1a1a1a] font-medium">SAFARS</span>
                        <span className="text-[#999] ml-1">✓</span>
                    </p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div
                    className="w-full text-center whitespace-nowrap text-[20vw] md:text-[18vw] font-bold tracking-tighter leading-[0.85] text-transparent select-none pb-4"
                    style={{
                        WebkitTextStroke: "2px rgba(0,0,0,0.06)",
                    }}
                >
                    Safars
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#F8F8F8] via-[#F8F8F8]/50 to-transparent pointer-events-none"></div>
            </div>
        </footer>
    );
};
