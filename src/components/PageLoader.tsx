"use client";

import React, { useState, useEffect } from "react";
import RevealLoader from "@/components/ui/reveal-loader";

interface PageLoaderProps {
    children: React.ReactNode;
}

export const PageLoader = ({ children }: PageLoaderProps) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling during loading
        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isLoading]);

    const handleLoadComplete = () => {
        setIsLoading(false);
    };

    return (
        <>
            {/* Content is always visible behind the loader */}
            {children}

            {/* Loader overlays the content and reveals it when done */}
            {isLoading && (
                <RevealLoader
                    text="SAFARS"
                    textSize="clamp(48px, 12vw, 120px)"
                    textColor="#dad7cd"
                    bgColors={["#344e41", "#3a5a40"]}
                    angle={90}
                    staggerOrder="center-out"
                    movementDirection="top-down"
                    textFadeDelay={0.3}
                    onComplete={handleLoadComplete}
                    className="fixed inset-0 z-[9999]"
                />
            )}
        </>
    );
};
