"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
} as const;

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative">
            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-[var(--pine-teal)]/80 hover:text-[var(--pine-teal)] transition-colors"
            >
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active"
                                className="bg-[var(--dust-grey)]/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-[var(--pine-teal)]/10 shadow-2xl"
                            >
                                <motion.div layout className="w-max h-full p-4">
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)}
            className="relative rounded-full border border-[var(--pine-teal)]/10 bg-[var(--dust-grey)]/90 backdrop-blur-xl shadow-lg flex justify-center space-x-8 px-8 py-4"
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <Link href={href} className="flex space-x-3 group">
            <Image
                src={src}
                width={140}
                height={70}
                alt={title}
                className="shrink-0 rounded-lg shadow-xl group-hover:shadow-gray-200/50 transition-shadow"
            />
            <div>
                <h4 className="text-base font-bold mb-1 text-[#1a1a1a] group-hover:text-[#1a1a1a] transition-colors">
                    {title}
                </h4>
                <p className="text-neutral-400 text-sm max-w-[10rem]">{description}</p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, ...rest }: React.ComponentPropsWithoutRef<typeof Link>) => {
    return (
        <Link
            {...rest}
            className="text-[#1a1a1a] hover:text-[#1a1a1a] transition-colors"
        >
            {children}
        </Link>
    );
};
