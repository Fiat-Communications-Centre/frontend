import { cn } from "@/lib/utils";
import { LucideArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

interface LinkCardCTAProps {
  className?: string;
  title: string;
  imageUrl: string;
  link?: {
    href: string;
    title: string;
  };
  children?: React.ReactNode;
}

function LinkCardCTA({
  title,
  imageUrl,
  link,
  className,
  children,
}: LinkCardCTAProps) {
  return (
    <div
      className={cn(`relative flex pl-5 items-center rounded-lg`, className)}
    >
      <div className="min-w-[28%] h-auto min-h-[auto] mt-auto">
        <Image
          decoding="async"
          src={imageUrl}
          alt="CTA"
          width={580}
          height={790}
          className="w-auto h-auto sm:h-[190px] rounded object-cover"
        />
      </div>
      <div className="min-w-[72%] relative px-8 py-5 ">
        <h2 className="font-bold leading-7 mb-2.5  text-lg">{title}</h2>
        {children}
        {link && (
          <Link
            href={link?.href}
            className={buttonVariants({
              className:
                "text-base leading-6 font-semibold text-black w-auto flex justify-start items-center",
            })}
          >
            <span>{link?.title} </span>
            <LucideArrowBigRight />
          </Link>
        )}
      </div>
    </div>
  );
}

export default LinkCardCTA;
