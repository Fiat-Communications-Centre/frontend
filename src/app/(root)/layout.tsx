"use client"
import MainFooter from "@/components/footer/main-footer";
import MainHeader from "@/components/header/main-header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false, // Disable refetch on window focus
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <MainHeader />
      <main className="flex-1 w-full mt-16 lg:mt-[110px]">{children}</main>
      <MainFooter />
    </QueryClientProvider>
  );
}
