import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import DOMPurify from "isomorphic-dompurify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function sanitizer(content: string) {
  return DOMPurify.sanitize(content, {
    USE_PROFILES: { html: true },
  });
}
