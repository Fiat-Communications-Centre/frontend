import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface HeroItemProps {
  className?: string;
}
function HeroItem({ className }: HeroItemProps) {
  return (
    <div className={cn("container mx-auto px-4", className)}>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-7">
          <div className="py-16">
            <h1 className="text-[2rem] sm:text-[3rem] md:text-[4.8rem] leading-[64px] sm:leading-[72px] md:leading-[90px]">
              Hands On Professional Touch
            </h1>
            <p className="text-base sm:text-xl md:text-2xl my-10">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled.
            </p>
            <ul className="my-10">
              <li>
                <Link
                  href={"#"}
                  className={cn(
                    "leading-7 px-6 py-4 bg-black/20 text-white dark:bg-white/10 dark:text-white rounded-full"
                  )}
                >
                  Read More
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div
            className=""
            style={{ margin: "50px 0px 0px -70px;" }}
          >
            <img
              src="assets/images/sliders/slider-3-2.jpg"
              className="img-fluid"
              alt="slider image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroItem;
