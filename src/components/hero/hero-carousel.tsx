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
import HeroItem, { HeroItemProps } from "./hero-item";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { siteDetails } from "@/config/constants";

const HERO_ITEMS: HeroItemProps[] = [
  {
    title: siteDetails.name,
    subTitle: "Unparalleled Quality Communications (Colossians 4:6)",
    description:
      "FIAT Communications  & Consultancy Centre is a one-stop, state-of-the art entity whose aim is to provide stellar customized service to individuals or Corporate in areas not limited to communication, research, business, consultancies and marketing.",
    callToActions: [
      {
        title: "About Us",
        href: "/about",
        className: "!bg-white dark:!bg-white/20",
        main: true,
      },
      {
        title: "Our Service",
        href: "/services",
      },
    ],
    imageUrl: "/main-2.jpg",
  },
  {
    title: "Research and Consultancy Services",
    description:
      "Expert advice and personalized solutions in research and consultancy areas. We offer tailored consultancy services to meet your unique needs and drive success.",
    callToActions: [
      {
        title: "Read More",
        href: "/services/research",
        className: "!bg-white dark:!bg-white/20",
        main: true,
      },
      {
        title: "Contact Us",
        href: "/contact",
      },
    ],
    imageUrl: "/research-carousel.jpg",
  },
  {
    title: "Audiovisual Productions",
    description:
      "Professional audiovisual content creation and production, designed to captivate and engage your audience.",
    callToActions: [
      {
        title: "Read More",
        href: "/services/audiovisual-productions",
        className: "!bg-white dark:!bg-white/20",
        main: true,
      },
      {
        title: "Contact Us",
        href: "/contact",
      },
    ],
    imageUrl: "/audio-visual-carousel.jpg",
  },
  {
    title: "Graphics Design",
    description:
      "Creative and impactful graphic design solutions to elevate your brand's visual identity.",
    callToActions: [
      {
        title: "Read More",
        href: "/services/graphics-design",
        className: "!bg-white dark:!bg-white/20",
        main: true,
      },
      {
        title: "Contact Us",
        href: "/contact",
      },
    ],
    imageUrl: "/graphics-design.jpg",
  },
  {
    title: "Web & Mobile Development",
    description:
      "Cutting-edge web and mobile application development services tailored to your needs.",
    callToActions: [
      {
        title: "Read More",
        href: "/services/web-mobile-development",
        className: "!bg-white dark:!bg-white/20",
        main: true,
      },
      {
        title: "Contact Us",
        href: "/contact",
      },
    ],
    imageUrl: "/web-dev.jpg",
  },
  {
    title: "Strategic Organizations Communication",
    description:
      "Comprehensive communication strategies designed to enhance your organization's outreach and impact.",
    callToActions: [
      {
        title: "Read More",
        href: "/services/organization-communications",
        className: "!bg-white dark:!bg-white/20",
        main: true,
      },
      {
        title: "Contact Us",
        href: "/contact",
      },
    ],
    imageUrl: "/strategy.jpg",
  },
  {
    title: "Trainings",
    description:
      "Expert-led training sessions tailored to empower your team and enhance their skills.",
    callToActions: [
      {
        title: "Read More",
        href: "/services/trainings",
        className: "!bg-white dark:!bg-white/20",
        main: true,
      },
      {
        title: "Contact Us",
        href: "/contact",
      },
    ],
    imageUrl: "/training.jpg",
  },
  {
    title: "Advertising & Promotions",
    description:
      "Effective advertising and promotional strategies that amplify your brand's reach and engagement.",
    callToActions: [
      {
        title: "Read More",
        href: "/services/advertising-promotions",
        className: "!bg-white dark:!bg-white/20",
        main: true,
      },
      {
        title: "Contact Us",
        href: "/contact",
      },
    ],
    imageUrl: "/adverts.jpg",
  },
  {
    title: "Religious Organization Databases",
    description:
      "Custom database solutions designed specifically for religious organizations.",
    callToActions: [
      {
        title: "Read More",
        href: "/services/religious-organizations-databases",
        className: "!bg-white dark:!bg-white/20",
        main: true,
      },
      {
        title: "Contact Us",
        href: "/contact",
      },
    ],
    imageUrl: "/computer.jpg",
  },
  {
    title: "Crisis Communication Plan",
    description:
      "Developing robust plans to manage and navigate crisis communication effectively.",
    callToActions: [
      {
        title: "Read More",
        href: "/services/crisis-communication-plan",
        className: "!bg-white dark:!bg-white/20",
        main: true,
      },
      {
        title: "Contact Us",
        href: "/contact",
      },
    ],
    imageUrl: "/plan.jpg",
  },
];
export function HeroCarousel({ className }: { className?: string }) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        watchDrag: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className={cn(
        "w-full min-h-screen overflow-hidden z-0 bg-inherit text-inherit max-h-[calc(100vh-16rem)] lg:max-h-[calc(100vh-110px)] flex justify-center items-center",
        className
      )}
      draggable
    >
      <CarouselContent className="w-full h-full">
        {HERO_ITEMS.map((item, index) => (
          <CarouselItem key={index} className="w-full h-full">
            <div className="relative flex-1 flex justify-center items-center min-h-screen ">
              {item.imageUrl && (
                <>
                  <Image
                    src={item.imageUrl}
                    height={1920}
                    width={1280}
                    alt={item.title}
                    className="absolute inset-0 -z-[1] w-full h-full object-cover aspect-[16/9]"
                    priority
                  />
                  <div className="absolute inset-0 z-[0] w-full h-full bg-black/50"></div>
                </>
              )}
              <HeroItem
                title={item.title}
                subTitle={item.subTitle}
                description={item.description}
                callToActions={item.callToActions}
                imageUrl={item.imageUrl}
                className="z-[2] text-inherit w-full relative flex justify-center items-center"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute left-1/2 bottom-10 flex justify-center items-center gap-4">
        <CarouselPrevious className="size-8 bg-white/10 text-white/60 hover:bg-white/100 hover:text-primary font-bold z-50 flex justify-center" />
        <CarouselNext className="size-8 bg-white/10 text-white/60 hover:bg-white/100 hover:text-primary font-bold z-50 flex justify-center" />
      </div>
    </Carousel>
  );
}
