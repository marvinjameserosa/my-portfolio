import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// Add the import for AnalyticsTracker
import AnalyticsTracker from "@/components/analytics-tracker";
import { Suspense } from "react";
import ScrollProgressBar from "@/components/scroll-progress-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to my website",
  description: "A professional portfolio showcasing skills and projects",
};

// Update the RootLayout function to include AnalyticsTracker
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgressBar />
          <Suspense>
            <AnalyticsTracker />
            <main className="px-4 md:px-8 lg:px-16">{children}</main>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
