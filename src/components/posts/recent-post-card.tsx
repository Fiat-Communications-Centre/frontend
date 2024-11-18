import { cn } from "@/lib/utils";
import { LucideClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function RecentPostCard({
  imageSrc,
  postTitle,
  postUrl,
  postDate,
  className,
}: {
  imageSrc: string;
  postUrl: string;
  postTitle: string;
  postDate: string;
  className?: string;
}) {
  return (
    <div className={cn("flex justify-start items-center space-x-2 hover:text-gray-900 dark:hover:text-white", className)}>
      <Image
        width="750"
        height="420"
        src={imageSrc}
        className="max-w-full max-h-full h-20 w-20 object-cover aspect-[4/4] rounded shadow-sm"
        alt="img"
        loading="lazy"
      />

      <div className="flex flex-col justify-start text-left space-y-2">
        <h2 className="title">
          <Link href={postUrl} rel="bookmark">
            {postTitle}
          </Link>
        </h2>
        <p className="flex justify-start items-center space-x-2">
          <LucideClock size={16} />
          <span>{postDate}</span>
        </p>
      </div>
    </div>
  );
}

export default RecentPostCard;
