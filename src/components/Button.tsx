import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "dark";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium tracking-[-0.01em] opacity-100 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            primary: "border border-[var(--pine-teal)]/30 bg-[var(--color-card)] text-[var(--pine-teal)] hover:-translate-y-0.5 hover:bg-[var(--color-card-highlight)] hover:shadow-[0_18px_40px_rgba(26,26,26,0.14)] focus:ring-[var(--pine-teal)] focus:ring-offset-[var(--dust-grey)]",
            secondary: "border border-[var(--pine-teal)]/22 bg-[var(--color-card)] text-[var(--pine-teal)] backdrop-blur-sm hover:bg-[var(--color-card-highlight)] hover:border-[var(--pine-teal)]/35 focus:ring-[var(--pine-teal)] focus:ring-offset-[var(--dust-grey)]",
            ghost: "border border-[var(--pine-teal)]/22 bg-[var(--color-card)] text-[var(--pine-teal)] hover:bg-[var(--color-card-highlight)] hover:border-[var(--pine-teal)]/35 focus:ring-[var(--pine-teal)] focus:ring-offset-[var(--dust-grey)]",
            dark: "border border-[var(--pine-teal)]/30 bg-[var(--color-card)] text-[var(--pine-teal)] hover:bg-[var(--color-card-highlight)] hover:border-[var(--pine-teal)]/40 focus:ring-[var(--pine-teal)] focus:ring-offset-[var(--dust-grey)]",
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
