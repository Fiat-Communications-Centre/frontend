import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn, getPageSEO } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import SectionLoader from "@/components/shared/section-loader";
import { siteDetails } from "@/config/constants";
const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = getPageSEO({
  title: "Home",
  url:""
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full w-full min-h-screen scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={cn(
          `h-full w-full flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-gray-400`,
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<SectionLoader />}>{children}</Suspense>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
