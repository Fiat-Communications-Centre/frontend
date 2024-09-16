import { cn } from "@/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export interface HeroItemProps {
  title: string;
  description: string;
  subTitle?: string;
  callToActions?: {
    title: string;
    href: string;
    className?: string;
    onClick?: () => void;
    main?: boolean;
  }[];
  className?: string;
  imageUrl?: string;
}

function HeroItem({
  title,
  description,
  subTitle,
  callToActions,
  className,
}: HeroItemProps) {
  return (
    <div className={cn("w-full h-full", className)}>
        <div className="container mx-auto  flex justify-center items-center">
          <div className="h-full flex justify-center items-center text-center">
            <div className="py-10 max-w-5xl  flex flex-col justify-center items-center text-center">
              <h1 className="text-white text-[2rem] sm:text-[3rem] md:text-[4.8rem] leading-[64px] sm:leading-[72px] md:leading-[90px]">
                {title}
              </h1>
              {subTitle && (
                <h3 className=" text-white/80 text-base md:text-[2rem] italic mt-4 leading-8">
                  {subTitle}
                </h3>
              )}
              <p className=" text-white/80 text-base sm:text-xl md:text-2xl my-10">
                {description}
              </p>
              {callToActions && callToActions.length > 0 ? (
                <ul className="my-10 flex justify-centre items-center space-x-2">
                  {callToActions.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href || "#"}
                        onClick={item.onClick}
                        className={cn(
                          "leading-7 px-6 py-4 hover:shadow-md dark:shadow-white/10 bg-black/20 text-white dark:bg-white/10 dark:text-white rounded-full",
                          item.main ? "bg-accent text-primary" : "",
                          item.className
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
    </div>
  );
}

export default HeroItem;
