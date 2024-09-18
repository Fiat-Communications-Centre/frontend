import { LucideArrowRight, LucideCalendar, LucideUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { AspectRatio } from "../ui/aspect-ratio";
import HoverBox from "../shared/hover-box";
import UserBox from "../shared/user-box";

interface BlogPostProps {
  className?: string;
  post: {
    imageSrc: string;
    postDate: string;
    authorName: string;
    postTitle: string;
    postExcerpt: string;
    readMoreUrl: string;
  };
}

function BlogPost({
  className,
  post: { imageSrc, postDate, authorName, postTitle, postExcerpt, readMoreUrl },
}: BlogPostProps) {
  return (
    <Card className={cn("bg-white text-black dark:bg-white/10 dark:text-slate-400 dark:border-slate-600", className)}>
      <CardHeader className="relative p-0 rounded-t-lg">
        <AspectRatio ratio={16 / 9}>
          <Image
            width={500}
            height={500}
            src={imageSrc}
            alt="img"
            className="w-full h-full object-cover max-h-full max-w-full rounded-t-lg"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent>
        <ul className="flex justify-start items-center gap-2 py-2">
          <HoverBox
            trigger={() => (
              <li className="flex justify-center items-center space-x-1">
                <LucideUser className="size-5" />
                <span className="text-sm">{authorName}</span>
              </li>
            )}
          >
            <UserBox
              user={{
                name: authorName,
                bio: "some bio here",
                avatarFallback: "SR",
                role: "Some role",
              }}
            />
          </HoverBox>

          <li className="flex justify-center items-center space-x-1 border-l border-gray-200 pl-2">
            <LucideCalendar className="size-5" />
            <span className="text-sm">{postDate}</span>
          </li>
        </ul>
        <CardTitle className="text-primary text-xl mb-3 hover:underline underline-offset-8">
          <Link href={readMoreUrl}>{postTitle}</Link>
        </CardTitle>
        <CardDescription>{postExcerpt}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center items-center">
        <Link
          href={readMoreUrl}
          className={buttonVariants({
            variant: "outline",
            className: " flex justify-center items-center space-x-2 dark:text-primary",
          })}
        >
          <span>Read More</span>
          <LucideArrowRight />
        </Link>
      </CardFooter>
    </Card>
  );
}

export default BlogPost;
