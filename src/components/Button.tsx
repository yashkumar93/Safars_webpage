import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "dark";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium tracking-[-0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            primary: "border border-[var(--fern)] bg-[var(--fern)] text-[var(--dust-grey)] hover:bg-[var(--hunter-green)] hover:border-[var(--hunter-green)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(88,129,87,0.26)] focus:ring-[var(--fern)] focus:ring-offset-[var(--dust-grey)]",
            secondary: "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/16 hover:border-white/35 focus:ring-white focus:ring-offset-[var(--pine-teal)]",
            ghost: "border border-[var(--pine-teal)]/10 bg-[#f0eee8] text-[var(--pine-teal)] hover:bg-[#e8e5dc] hover:border-[var(--pine-teal)]/15 focus:ring-[var(--pine-teal)] focus:ring-offset-[var(--dust-grey)]",
            dark: "border border-[var(--pine-teal)] bg-[var(--pine-teal)] text-[var(--dust-grey)] hover:bg-[var(--hunter-green)] hover:border-[var(--hunter-green)] focus:ring-[var(--pine-teal)] focus:ring-offset-[var(--dust-grey)]",
        };

        const sizes = {
            sm: "h-10 px-5 text-sm",
            md: "h-11 px-6 text-sm",
            lg: "h-12 px-8 text-base",
        };

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
