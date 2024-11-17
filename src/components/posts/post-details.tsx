"use client";
import Image from "next/image";
import React, { Fragment } from "react";
import SimpleNewsletterForm from "@/components/newsletter/simple-newsletter-form";
import PostCommentForm from "@/components/posts/post-comment-form";
import RecentPostCard from "@/components/posts/recent-post-card";
import UserBox from "@/components/shared/user-box";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn, sanitizer } from "@/lib/utils";
import { LucideUser, LucideCalendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDataFetch } from "@/hooks/user-data-fetcher";
import { postService } from "@/services/post-service";
import SectionLoader from "@/components/shared/section-loader";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PostData } from "@/types/post";
import { formatDate } from "date-fns";

export default function PostDetails({ post }: { post: PostData }) {
  const { fetchData } = useDataFetch();

  const { data: posts, isLoading: isLoadingPosts } = fetchData({
    queryKey: ["posts", `all-posts`],
    queryFn: async () => {
      const res = await postService.getPosts({ limit: 5 });
      return res.data;
    },
    skip: !post?.id || !post.slug,
  });

  return (
    <div className="container mx-auto flex flex-col xl:flex-row gap-5 px-4 sm:px-6 lg:px-8 ">
      <div className="flex-1 space-y-5 ">
        <Card
          className={cn(
            "bg-white text-black dark:bg-white/10 dark:text-slate-400 border-none"
          )}
        >
          <CardHeader className="relative p-0 rounded-t-lg">
            <AspectRatio ratio={16 / 9}>
              <Image
                width={500}
                height={500}
                src={post?.thumbnail.url}
                alt="img"
                className="w-full h-full object-cover max-h-full max-w-full rounded-t-lg"
              />
            </AspectRatio>
          </CardHeader>
          <CardContent className="w-full flex flex-col justify-start p-0">
            <ul className="h-full flex justify-start items-center gap-2 px-4 py-2">
              <li className="flex justify-center items-center space-x-1">
                <LucideUser className="size-5" />
                <span className="text-sm">{post?.author.name}</span>
              </li>

              <li className="flex justify-center items-center space-x-1 border-l border-gray-200 pl-2">
                <LucideCalendar className="size-5" />
                <span className="text-sm">
                  {formatDate(post?.createdAt, "dd-MM-yyyy")}
                </span>
              </li>

              {post.category && (
                <li className="flex-full ml-auto justify-center items-center space-x-1 border-l border-gray-200 pl-2">
                <Link href={`/blog?categoryId=${post.categoryId}`}><strong className="text-sm">{post.category?.name} </strong></Link>
                </li>
              )}
            </ul>
          </CardContent>
        </Card>
        <CardTitle className="text-lg md:text-2xl lg:text-3xl">
          {post.title}
        </CardTitle>
        <CardDescription>{post.excerpt}</CardDescription>

        <div
          className="text-lg container mx-auto max-w-5xl py-5 border-t border-b border-gray-600"
          dangerouslySetInnerHTML={{ __html: sanitizer(post?.content) }}
        ></div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex justify-start flex-wrap gap-4">
            {post.tags.map((tag) => (
              <Fragment key={tag}>
                <Link href={`/blog/?tag=${tag}`}>
                  <Badge variant={"outline"} className="dark:bg-white/10 dark:text-slate-400">{tag}</Badge>
                </Link>
              </Fragment>
            ))}
          </div>
        )}
        <Tabs className="w-full">
          <TabsList className="w-full justify-start bg-white dark:bg-white/10 h-auto px-4 py-4 space-x-4">
            <TabsTrigger
              value="comments"
              className="py-2 px-4 ring-1 ring-gray-50/10"
            >
              Comments
            </TabsTrigger>
            <TabsTrigger
              value="post-comment"
              className="py-2 px-4 ring-1 ring-gray-50/10"
            >
              Post Comment
            </TabsTrigger>
          </TabsList>
          <TabsContent value="comments">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="post-comment">
            <PostCommentForm
              title="Post A Comment"
              description="Your email address will not be published."
              className="w-full rounded-lg min-w-full mt-5"
            />
          </TabsContent>
        </Tabs>
      </div>

      <aside className="bg-white dark:bg-white/10 xl:max-w-sm">
        <div className="container mx-auto px-4 pt-5 space-y-5">
          <div className="px-4 sm:px-6 lg:px-8">
            <h3 className="text-primary font-bold text-left text-lg md:text-2xl mb-4">
              The Author
            </h3>
            <UserBox
              user={{
                name: post?.author.name,
                bio: post?.author.bio,
                avatar: post.author.photo?.url,
                avatarFallback: "AN",
                role: post?.author.title,
              }}
            />
          </div>

          <SimpleNewsletterForm />

          <div className="px-4 sm:px-6 lg:px-8">
            <h3 className="text-primary font-bold text-left text-lg md:text-2xl mb-4">
              Recent Posts
            </h3>

            {posts && (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4 mb-2">
                {posts
                  .filter((x) => x.id !== post?.id)
                  .slice(0, 4)
                  .map((pst) => (
                    <RecentPostCard
                      key={pst.id}
                      postTitle={pst.title}
                      imageSrc={pst.thumbnail.url}
                      postDate={formatDate(pst?.createdAt, "dd-MM-yyyy")}
                      postUrl={`/blog/${pst.id}/${pst.slug}`}
                    />
                  ))}
              </div>
            )}
            {isLoadingPosts && <SectionLoader />}
          </div>
        </div>
      </aside>
    </div>
  );
}
