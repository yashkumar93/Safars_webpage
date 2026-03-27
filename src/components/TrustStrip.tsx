"use client";

import React from 'react';
import { ShieldCheck, Award, Zap, Lock } from 'lucide-react';

const trustItems = [
    { icon: <ShieldCheck size={16} />, text: "OSCP • eJPT v2 • CEH Certified" },
    { icon: <Award size={16} />, text: "Enterprise Grade Solutions" },
    { icon: <Zap size={16} />, text: "AI-Powered Intelligence" },
    { icon: <Lock size={16} />, text: "Security-First Approach" },
];

export const TrustStrip = () => {
    return (
        <section className="py-6 bg-[var(--pine-teal)] overflow-hidden relative">
            <div className="flex animate-[marquee_30s_linear_infinite]">
                {[...trustItems, ...trustItems, ...trustItems].map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 text-white/90 text-sm font-medium whitespace-nowrap mx-8"
                    >
                        <span className="text-[var(--dry-sage)]">{item.icon}</span>
                        {item.text}
                    </div>
                ))}
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
        </section>
    );
};
