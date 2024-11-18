"use client";
import { useDataFetch } from "@/hooks/user-data-fetcher";
import { postService } from "@/services/post-service";
import { useSearchParams } from "next/navigation";
import React from "react";
import SectionLoader from "../shared/section-loader";
import BlogPost from "./blog-post";

function PostList() {
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId") ?? undefined;
  const tag = searchParams.get("tag") ?? undefined;

  const { fetchInfiniteData } = useDataFetch();
  const {
    data: posts,
    isLoading,
    error,
    lastElementRef,
  } = fetchInfiniteData({
    queryKey: ["blog-posts"],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await postService.getPosts({
        page: pageParam,
        limit: 10,
        categoryId: categoryId ? Number(categoryId) : undefined,
        tag,
      });

      return res.data!;
    },
  });

  return (
    <section className="w-full">
      {posts && (
        <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {posts.map((post, index) => (
            <div
              key={`post-${post.id}`}
              ref={index === posts.length - 1 ? lastElementRef : null}
              className="w-full h-full"
            >
              <BlogPost
                key={post.id}
                readMoreUrl={`/blog/${post.id}/${post.slug}`}
                post={post}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      )}
      {isLoading && <SectionLoader />}
    </section>
  );
}

export default PostList;
