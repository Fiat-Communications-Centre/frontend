import React from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { HoverCardProps } from "@radix-ui/react-hover-card";
import { cn } from "@/lib/utils";

interface HoverBoxProps {
  trigger: React.ComponentType<any>;
  children: React.ReactNode;
  options?: HoverCardProps;
  className?: string;
}
function HoverBox({
  trigger: Trigger,
  options,
  children,
  className,
}: HoverBoxProps) {
  return (
    <HoverCard {...options}>
      <HoverCardTrigger asChild>
        <Trigger />
      </HoverCardTrigger>
      <HoverCardContent className={cn("min-w-40 bg-white text-gray-900 dark:bg-black/80 dark:text-gray-200", className)}>
        {children}
      </HoverCardContent>
    </HoverCard>
  );
}

export default HoverBox;
