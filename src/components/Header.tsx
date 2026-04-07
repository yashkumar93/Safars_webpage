"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { servicesData } from "@/lib/services-data";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Menu, X, Moon, Sun } from "lucide-react";

const navItems = [
  { name: "Services", link: "#services", hasDropdown: true },
  { name: "Our Work", link: "#work", hasDropdown: false },
  { name: "Case Studies", link: "/case-studies", hasDropdown: false },
  { name: "About", link: "/about", hasDropdown: false },
  { name: "Contact", link: "#contact", hasDropdown: false },
];

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isThemeReady, setIsThemeReady] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const openTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isNavOverlayOpen = Boolean(
    activeDropdown || isSearchOpen || isMobileMenuOpen
  );

  const applyTheme = useCallback((isDark: boolean) => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("safars-theme", isDark ? "dark" : "light");
    setIsDarkMode(isDark);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("safars-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = saved ? saved === "dark" : prefersDark;
    applyTheme(shouldUseDark);
    setIsThemeReady(true);
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    applyTheme(!isDarkMode);
  }, [applyTheme, isDarkMode]);

  // Close everything on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    return () => {
      if (openTimeoutRef.current) {
        clearTimeout(openTimeoutRef.current);
      }
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isNavOverlayOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOverlayOpen]);

  const handleMouseEnter = useCallback((name: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
    }
    openTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(name);
    }, 90);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  }, []);

  const closeAll = useCallback(() => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, []);

  return (
    <>
      {/* Main Nav Bar */}
      <header
        ref={headerRef}
        className={cn(
          "apple-nav fixed top-0 z-[9999] w-full",
          activeDropdown && "apple-nav--dropdown-open"
        )}
      >
        <nav className="apple-nav__bar">
          <div className="apple-nav__container">
            {/* Logo */}
            <Link
              href="/"
              className="apple-nav__logo"
              onClick={closeAll}
            >
              <span className="apple-nav__logo-dot" />
              Safars
            </Link>

            {/* Desktop Nav Links */}
            <div className={cn("apple-nav__links", activeDropdown && "apple-nav__links--menu-open")}>
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div
                    key={item.name}
                    className="apple-nav__link-wrapper"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={cn(
                        "apple-nav__link",
                        activeDropdown === item.name && "apple-nav__link--active"
                      )}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                    >
                      {item.name}
                    </button>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="apple-nav__link"
                    onClick={closeAll}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Right Icons */}
            <div className="apple-nav__actions">
              <button
                className={cn("apple-nav__icon-btn", isDarkMode && "apple-nav__icon-btn--active")}
                onClick={toggleTheme}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                title={isDarkMode ? "Light mode" : "Dark mode"}
              >
                {isThemeReady && isDarkMode ? (
                  <Sun size={15} strokeWidth={1.8} />
                ) : (
                  <Moon size={15} strokeWidth={1.8} />
                )}
              </button>
              <button
                className="apple-nav__icon-btn"
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  setActiveDropdown(null);
                }}
                aria-label="Search"
              >
                <Search size={15} strokeWidth={1.8} />
              </button>
              <Link href="/contact" className="apple-nav__icon-btn" aria-label="Get in touch">
                <ShoppingBag size={15} strokeWidth={1.8} />
              </Link>

              {/* Mobile hamburger */}
              <button
                className="apple-nav__hamburger"
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                  setActiveDropdown(null);
                }}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X size={18} strokeWidth={1.5} />
                ) : (
                  <Menu size={18} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* ====== FULL-WIDTH DROPDOWN PANEL (Services) ====== */}
        <AnimatePresence>
          {activeDropdown === "Services" && (
            <motion.div
              className="apple-nav__dropdown"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => handleMouseEnter("Services")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="apple-nav__dropdown-inner">
                <div className="apple-nav__dropdown-grid">
                  {/* Column 1: Main Services */}
                  <div className="apple-nav__dropdown-col">
                    <h3 className="apple-nav__dropdown-heading">Services</h3>
                    <ul className="apple-nav__dropdown-list apple-nav__dropdown-list--large">
                      {servicesData.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            className="apple-nav__dropdown-link apple-nav__dropdown-link--large"
                            onClick={closeAll}
                          >
                            {service.shortTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Quick Links */}
                  <div className="apple-nav__dropdown-col">
                    <h3 className="apple-nav__dropdown-heading">Quick Links</h3>
                    <ul className="apple-nav__dropdown-list">
                      <li>
                        <Link href="/case-studies" className="apple-nav__dropdown-link" onClick={closeAll}>
                          Case Studies
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="apple-nav__dropdown-link" onClick={closeAll}>
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" className="apple-nav__dropdown-link" onClick={closeAll}>
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="apple-nav__dropdown-link" onClick={closeAll}>
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3: Explore */}
                  <div className="apple-nav__dropdown-col">
                    <h3 className="apple-nav__dropdown-heading">Explore Safars</h3>
                    <ul className="apple-nav__dropdown-list">
                      <li>
                        <Link href="/careers" className="apple-nav__dropdown-link" onClick={closeAll}>
                          Careers
                        </Link>
                      </li>
                      <li>
                        <Link href="/waitlist" className="apple-nav__dropdown-link" onClick={closeAll}>
                          Join Waitlist
                        </Link>
                      </li>
                      <li>
                        <Link href="/#services" className="apple-nav__dropdown-link" onClick={closeAll}>
                          All Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ====== SEARCH PANEL ====== */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              className="apple-nav__dropdown"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              exit={{ clipPath: "inset(0 0 100% 0)" }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="apple-nav__dropdown-inner">
                <div className="apple-nav__search-box">
                  <Search size={18} className="apple-nav__search-icon" />
                  <input
                    type="text"
                    placeholder="Search safars.in"
                    className="apple-nav__search-input"
                    autoFocus
                  />
                </div>
                <div className="apple-nav__search-suggestions">
                  <p className="apple-nav__search-suggestions-title">Quick Links</p>
                  <div className="apple-nav__search-suggestions-list">
                    {servicesData.slice(0, 4).map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="apple-nav__search-suggestion-item"
                        onClick={closeAll}
                      >
                        {service.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ====== BACKDROP SCRIM ====== */}
      <AnimatePresence>
        {isNavOverlayOpen && (
          <motion.div
            className="apple-nav__scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeAll}
          />
        )}
      </AnimatePresence>

      {/* ====== MOBILE MENU ====== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="apple-nav__mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="apple-nav__mobile-inner">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  {item.hasDropdown ? (
                    <div className="apple-nav__mobile-section">
                      <span className="apple-nav__mobile-link apple-nav__mobile-link--heading">
                        {item.name}
                      </span>
                      <div className="apple-nav__mobile-sub">
                        {servicesData.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="apple-nav__mobile-sublink"
                            onClick={closeAll}
                          >
                            {service.shortTitle}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.link}
                      className="apple-nav__mobile-link"
                      onClick={closeAll}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="apple-nav__mobile-cta"
              >
                <button
                  className="apple-nav__mobile-theme-btn"
                  onClick={toggleTheme}
                  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isThemeReady && isDarkMode ? (
                    <Sun size={16} strokeWidth={1.8} />
                  ) : (
                    <Moon size={16} strokeWidth={1.8} />
                  )}
                  {isDarkMode ? "Light mode" : "Dark mode"}
                </button>
                <Link href="/contact" className="apple-nav__mobile-cta-btn" onClick={closeAll}>
                  Book a Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
