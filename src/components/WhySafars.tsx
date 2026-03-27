"use client";

import React from 'react';
import { FeatureCarousel } from './ui/feature-carousel';

export const WhySafars = () => {
    return (
        <section id="why-safars" className="py-24 bg-neutral-50 relative">
            <div className="container mx-auto px-6">
                <div className="w-full max-w-6xl mx-auto">
                    <FeatureCarousel />
                </div>
            </div>
        </section>
    );
};
