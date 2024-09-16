import { cn } from "@/lib/utils";
import React from "react";

function Overlay({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("absolute inset-0 w-full h-full bg-black", className)}>
      {children}
    </div>
  );
}

export default Overlay;
