import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Safars — Secure Intelligence for Modern Systems",
  description: "Detailed AI solutions, web development, security research, and infrastructure support. Safars delivers end-to-end technology solutions for teams that can't afford to be wrong.",
};

import ClickSpark from "@/components/ClickSpark";
import { PageLoader } from "@/components/PageLoader";
import { HeroUIProvider } from "@heroui/system";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <HeroUIProvider>
          <PageLoader>
            <ClickSpark
              sparkColor='#a3b18a'
              sparkSize={10}
              sparkRadius={15}
              sparkCount={8}
              duration={400}
            >
              {children}
            </ClickSpark>
          </PageLoader>
        </HeroUIProvider>
      </body>
    </html>
  );
}
