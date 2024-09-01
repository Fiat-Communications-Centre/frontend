"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeroItem from "./hero-item";
import { cn } from "@/lib/utils";

export function HeroCarousel({ className }: { className?: string }) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        watchDrag: false,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className={cn(
        "w-full overflow-hidden z-0 bg-inherit text-white dark:text-gray-400",
        className
      )}
      draggable
    >
      <CarouselContent className="w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="w-full">
            <HeroItem className="text-inherit" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
