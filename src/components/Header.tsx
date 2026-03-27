"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import { LineHoverLink } from './ui/line-hover-link';

const navItems = [
    { name: "Services", link: "#services" },
    { name: "Our work", link: "#work" },
    { name: "Why us", link: "#why" },
    { name: "Contact", link: "#contact" },
];

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled ? "py-3" : "py-5"
            )}
        >
            <div className="container mx-auto px-6">
                <div
                    className={cn(
                        "flex items-center justify-between transition-all duration-300",
                        isScrolled
                            ? "rounded-full border border-[var(--pine-teal)]/10 bg-[#f0eee8]/90 px-4 py-2 shadow-[0_18px_40px_rgba(52,78,65,0.10)] backdrop-blur-xl md:px-6"
                            : "bg-transparent px-2 py-2"
                    )}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        className={cn(
                            "flex items-center gap-2 text-lg font-medium tracking-[-0.04em] transition-colors",
                            isScrolled ? "text-[var(--pine-teal)]" : "text-white"
                        )}
                    >
                        <span className="h-2.5 w-2.5 rounded-full bg-[var(--dry-sage)]" />
                        Safars
                    </Link>

                    {/* Nav Links */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <LineHoverLink
                                key={item.name}
                                href={item.link}
                                variant="scribble"
                                className={cn(
                                    "px-4 py-2 text-sm transition-colors",
                                    isScrolled
                                        ? "text-[var(--hunter-green)]/80 hover:text-[var(--pine-teal)]"
                                        : "text-white/75 hover:text-white"
                                )}
                            >
                                {item.name}
                            </LineHoverLink>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-2">
                        <Button variant="primary" size="sm">
                            Book a demo
                        </Button>
                        <Button
                            variant={isScrolled ? "ghost" : "secondary"}
                            size="sm"
                            className="hidden sm:inline-flex"
                        >
                            Sign in
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
