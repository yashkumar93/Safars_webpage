"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { LineHoverLink } from "./ui/line-hover-link";
import { servicesData } from "@/lib/services-data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const navItems = [
  { name: "Services", link: "#services", hasDropdown: true },
  { name: "Our work", link: "#work", hasDropdown: false },
  { name: "Why us", link: "#why", hasDropdown: false },
  { name: "Contact", link: "#contact", hasDropdown: false },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

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
              isScrolled ? "text-[var(--pine-teal)]" : "text-[var(--pine-teal)]"
            )}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--dry-sage)]" />
            Safars
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={cn(
                      "inline-flex items-center gap-1.5 px-4 py-2 text-sm transition-colors cursor-pointer",
                      isScrolled
                        ? "text-[var(--hunter-green)]/80 hover:text-[var(--pine-teal)]"
                        : "text-[var(--hunter-green)]/70 hover:text-[var(--pine-teal)]"
                    )}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {item.name}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-200",
                        isDropdownOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-1/2 top-full z-50 mt-3 w-[340px] -translate-x-1/2 overflow-hidden rounded-2xl border border-[var(--pine-teal)]/12 bg-[#eeede7]/95 p-2 shadow-[0_24px_60px_rgba(52,78,65,0.18)] backdrop-blur-xl"
                      >
                        {/* Subtle decorative glow */}
                        <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--dry-sage)]/15 blur-2xl" />
                        <div className="pointer-events-none absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-[var(--fern)]/10 blur-2xl" />

                        <div className="relative z-10 space-y-0.5">
                          {servicesData.map((service) => {
                            const Icon = service.icon;
                            return (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-[var(--dry-sage)]/20"
                                onClick={() => setIsDropdownOpen(false)}
                              >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--pine-teal)]/8 text-[var(--pine-teal)] transition-colors group-hover:bg-[var(--fern)]/15 group-hover:text-[var(--fern)]">
                                  <Icon size={20} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-[var(--pine-teal)] group-hover:text-[var(--fern)] transition-colors">
                                    {service.title}
                                  </p>
                                  <p className="text-xs text-[var(--hunter-green)]/65 truncate">
                                    {service.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Bottom divider + all services link */}
                        <div className="relative z-10 mt-1 border-t border-[var(--pine-teal)]/8 pt-2">
                          <Link
                            href="/#services"
                            className="flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-[var(--hunter-green)]/70 transition-all hover:bg-[var(--dry-sage)]/15 hover:text-[var(--pine-teal)]"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            View all services
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <LineHoverLink
                  key={item.name}
                  href={item.link}
                  variant="scribble"
                  className={cn(
                    "px-4 py-2 text-sm transition-colors",
                    isScrolled
                      ? "text-[var(--hunter-green)]/80 hover:text-[var(--pine-teal)]"
                      : "text-[var(--hunter-green)]/70 hover:text-[var(--pine-teal)]"
                  )}
                >
                  {item.name}
                </LineHoverLink>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="primary" size="sm">
              Book a demo
            </Button>
            <Button
              variant="ghost"
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
