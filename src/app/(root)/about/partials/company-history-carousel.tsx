"use client";
import IconCard from "@/components/shared/icon-card";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  LucideBuilding2,
  LucideCircle,
  LucideConstruction,
  LucideExpand,
  LucideGoal,
  LucideSatelliteDish,
} from "lucide-react";
import React from "react";

interface CompanyHistoryCarouselProps {
  className?: string;
}

const histories = [
  {
    date: "2013",
    title: "Founding and Early Years",
    description:
      "Established with a vision to revolutionize communication, laying the foundation for our journey.",
    icon: (
      <LucideBuilding2 className="size-8 text-primary group-hover:text-white" />
    ),
  },
  {
    date: "2015",
    title: "Building a Strong Foundation",
    description:
      "Focused on expertise and reputation, providing customized solutions in communication, research, and marketing.",
    icon: (
      <LucideConstruction className="size-8 text-primary group-hover:text-white" />
    ),
  },
  {
    date: "2016",
    title: "Expanding Our Horizons",
    description:
      "Diversified service portfolio, offering graphic design, video productions, web development, and strategic communication.",
    icon: (
      <LucideExpand className="size-8 text-primary group-hover:text-white" />
    ),
  },
  {
    date: "2021",
    title: " Technological Advancement",
    description:
      "Stayed ahead with innovative tools, embracing advancements in design, video, web development, and more.",
    icon: <LucideSatelliteDish className="size-8 text-primary group-hover:text-white" />,
  },
  {
    date: "2022",
    title: "A Legacy of Achievements",
    description:
      "Celebrating countless successes, from brand establishment to research support, training, and expert consultancy.",
    icon: <LucideGoal className="size-8 text-primary group-hover:text-white" />,
  },
  {
    date: "2023",
    title: "Charting a Path for the Future",
    description:
      "Committed to excellence, integrity, collaboration, and continuous learning as we strive for future growth.",
    icon: <LucideGoal className="size-8 text-primary group-hover:text-white" />,
  },
];
function CompanyHistoryCarousel({ className }: CompanyHistoryCarouselProps) {
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
        {histories.map((hst, index) => (
          <CarouselItem
            key={index}
            className="flex w-full !h-full pl-4 md:basis-1/2  lg:basis-1/3 xl:basis-1/4"
          >
            <div className=" aspect-square size-full flex-1 py-2 flex flex-col justify-center items-center space-y-5 group">
              <div
                className={buttonVariants({
                  variant: "default",
                  className: "!rounded-full uppercase",
                })}
              >
                {hst.date}
              </div>

              <div className={"w-full border-t border-t-primary h-4 relative"}>
                <span className="absolute size-2 bg-primary rounded-full  left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>

              <IconCard
                className="flex-1 h-full py-4 shadow-none border !border-gray-200 group-hover:bg-primary rounded-2xl hover:shadow-lg flex-col justify-center items-center"
                Icon={() => hst.icon}
                title={hst.title}
                description={hst.description}
                titleClassName="text-md sm:text-xl text-center text-primary group-hover:text-white"
                descriptionClassName="text-center text-black dark:text-gray-400 group-hover:text-white/80"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default CompanyHistoryCarousel;
