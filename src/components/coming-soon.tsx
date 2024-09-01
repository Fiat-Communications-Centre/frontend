"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ComingSoon({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        `flex-1 flex h-full w-full items-center justify-center rounded-lg border border-dashed shadow-sm"`,
        className
      )}
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">Maintenance Mode</h3>
        <p className="text-sm text-muted-foreground">
          Site/Page will be available soon. Thank you for your patience!
        </p>
        <Link href={"/"} className="mt-4">
          Go to Home
        </Link>
      </div>
    </div>
  );
}
