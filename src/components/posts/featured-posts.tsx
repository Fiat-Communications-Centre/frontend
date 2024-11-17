"use client";
import React from "react";
import { postService } from "@/services/post-service";
import BlogPost from "@/components/posts/blog-post";
import { useDataFetch } from "@/hooks/user-data-fetcher";
import SectionTitle from "../shared/section-title";
import SectionLoader from "../shared/section-loader";

function FeaturedPosts() {
  const { fetchData } = useDataFetch();
  const { data: posts, isLoading } = fetchData({
    queryKey: ["featured-blog-posts"],
    queryFn: async () => {
      const data = await postService
        .getPosts({ page: 1, limit: 3, featured: true, published: true })
        .then((res) => res.data)
        .catch((err) => []);

      return data;
    },
  });

  if (isLoading) {
    return <SectionLoader />;
  }

  return (
    <>
      {/* articles */}
      {posts && posts.length > 0 && (
        <section className="container mx-auto py-20">
          <SectionTitle
            title="Latest Insights and Intelligence on Communication, Consultancy, Research & Tips"
            subTitle="Stay Updated with Our"
            description="Dive into our comprehensive articles to explore the latest trends, research, and expert opinions across a variety of industries. "
          />
          <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {posts.map((post) => (
              <BlogPost
                key={post.id}
                post={post}
                readMoreUrl={`/blog/${post.id}/${post.slug}`}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default FeaturedPosts;
