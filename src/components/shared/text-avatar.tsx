import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import React from "react";

interface TextAvatarProps {
  src?: string;
  className?: string;
  fallback: string;
}

function TextAvatar({ src, className, fallback }: TextAvatarProps) {
  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={src} />
      <AvatarFallback className="bg-white text-primary dark:bg-white/10 dark:text-white font-bold">{fallback}</AvatarFallback>
    </Avatar>
  );
}

export default TextAvatar;
