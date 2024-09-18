import { cn } from "@/lib/utils";
import React from "react";

interface SectionTitleProps {
  title: string;
  subTitle?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  subTitleClassName?: string;
  descriptionClassName?: string;
}

function SectionTitle({
  title,
  subTitle,
  description,
  className,
  titleClassName,
  subTitleClassName,
  descriptionClassName,
}: SectionTitleProps) {
  return (
    <div className={cn("text-center", className)}>
      {subTitle && (
        <div
          className={cn(
            "inline-block mb-5 leading-6 py-2 pl-2 text-base capitalize font-semibold border-l border-b border-primary text-primary",
            subTitleClassName
          )}
        >
          {subTitle}
        </div>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl xl:text-5xl font-extrabold  leading-[50px] mb-3",
          titleClassName
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "font-normal text-base leading-6 mb-4",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
