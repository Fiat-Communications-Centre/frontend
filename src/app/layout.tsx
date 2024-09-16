import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fiat Communications Centre",
  description: "Unparalleled Quality Communication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full min-h-screen scroll-smooth" suppressHydrationWarning>
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
          {children}
         <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
