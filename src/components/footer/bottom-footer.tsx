import { cn } from "@/lib/utils";
import { LucideCopyright } from "lucide-react";
import React from "react";

interface BottomFooterProps {
  className?: string;
}

function BottomFooter({ className }: BottomFooterProps) {
  return (
    <section
      className={cn(
        `w-full flex flex-col md:flex-row justify-center items-center py-2 px-4 `,
        className
      )}
    >
      <div className="flex justify-center items-center space-x-2">
        <LucideCopyright size={16} />
        <span className="text-sm md:text-base">
          All rights Reserved
        </span>
      </div>
    </section>
  );
}

export default BottomFooter;
