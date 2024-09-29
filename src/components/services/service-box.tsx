import { cn } from "@/lib/utils";
import { LucideArrowRight, LucideCog } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Overlay from "../shared/overlay";
import { buttonVariants } from "../ui/button";

interface ServiceBoxProps {
  title: string;
  href: string;
  imageUrl?: string;
  description: string;
  className?: string;
  contentClassName?:string;
  hide?: ("overlay" | "image" | "icon" | "read-more" | "description")[];
}

function ServiceBox({
  title,
  href,
  description,
  className,
  contentClassName,
  hide = [],
}: ServiceBoxProps) {
  return (
    <div
      className={cn(
        "w-full h-full border-t-4 mb-10 cursor-pointer border-primary flex flex-col",
        className
      )}
    >
      <div className="relative overflow-hidden">
        {!hide.includes("overlay") && (
          <Overlay className="z-1 transition-[0.9s] ease-in-out " />
        )}
        {!hide.includes("image") && (
          <Image
            loading="lazy"
            width={500}
            height={500}
            src="/assets/images/service/service-image-2.png"
            alt="img"
            className="w-full h-[220px] object-cover"
          />
        )}
      </div>
      <div className={cn("flex-1 relative z-10 border-x border-b text-center rounded-b-[10px] p-5 !pt-10", contentClassName)}>
        {!hide.includes("icon") && (
          <div className="absolute -top-[33px] left-0 right-0 leading-[60px] z-[2] text-center bg-primary m-auto w-[60px] h-[60px] rounded-full flex justify-center items-center">
            <LucideCog className="size-12 block leading-[60px] text-[40px] text-accent" />
          </div>
        )}
        <h2
          className="leading-[40px] font-bold text-primary transition-[0.5s] ease-in-out"
          style={{ wordBreak: "break-word" }}
        >
          <Link href={href} rel="bookmark">
            {title}
          </Link>
        </h2>
        {!hide.includes("description") && (
          <p className="mb-[30px]">{description}</p>
        )}
        {!hide.includes("read-more") && (
          <Link
            className={buttonVariants({
              variant: "default",
              className:
                "absolute -bottom-5 left-0 right-0 m-auto uppercase w-40 h-12 bg-primary hover:bg-white text-accent text-center rounded-lg flex justify-center items-center space-x-2",
            })}
            href={href}
          >
            <span>Read More </span>
            <LucideArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
}

export default ServiceBox;
