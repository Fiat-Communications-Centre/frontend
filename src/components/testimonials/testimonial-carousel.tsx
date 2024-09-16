"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import DefaultTestimonial from "./default-testimonial";

interface TestimonialCarouselProps {
  className?: string;
  testimonials?: any[];
}
function TestimonialCarousel({
  className,
  testimonials,
}: TestimonialCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        watchDrag: false,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className={className}
      draggable
    >
      <CarouselContent className="w-full h-full -ml-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="w-full h-full pl-4 md:basis-1/2  lg:basis-1/3">
            <DefaultTestimonial  className="dark:bg-white/5 dark:text-white dark:border-slate-600" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default TestimonialCarousel;
