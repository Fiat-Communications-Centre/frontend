import React, { Fragment } from "react";
import PageHeader from "@/components/header/page-header";
import { postService } from "@/services/post-service";
import PostDetails from "@/components/posts/post-details";
import { Metadata } from "next";
import { CLIENT_BASE_URL } from "@/config/env";
import { notFound } from "next/navigation";
import { PostData } from "@/types/post";
import { getPageSEO } from "@/lib/utils";

interface Params {
  id: number;
  slug: string;
}

const postCache = new Map<
  string,
  { data?: PostData; loading: boolean; promise?: Promise<PostData | undefined> }
>();

async function fetchPostData(
  id: number,
  slug: string
): Promise<PostData | undefined> {
  const cacheKey = `${id}-${slug}`;

  const cachedData = postCache.get(cacheKey);

  if (cachedData) {
    if (cachedData.loading && cachedData.promise) {
      // If loading, wait for the existing fetch to complete
      return cachedData.promise;
    }
    // Return cached data if it's available and not loading
    return cachedData.data;
  }

  const fetchPromise = postService
    .getPostByIdSlug(id, slug)
    .then((res) => {
      if (res.data) {
        postCache.set(cacheKey, { data: res.data, loading: false });
        return res.data;
      } else {
        throw new Error("Post data not found");
      }
    })
    .catch((error) => {
      postCache.set(cacheKey, { loading: false });
      return undefined;
    });

  // Store the loading state and fetch promise in the cache
  postCache.set(cacheKey, { loading: true, promise: fetchPromise });

  // Return the promise so callers can await it
  return fetchPromise;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id, slug } = await params;
  const post = await fetchPostData(id, slug);

  if (!post) {
    return {};
  }

  const title = post.title;
  const description = post.excerpt;
  const imageUrl = post?.thumbnail.url;

  const seo = getPageSEO({
    title,
    description,
    url: `blog/${post.id}/${post.slug}`,
    type: "article",
  });
  return {
    ...seo,
    authors: [{ name: post.author.name }],
    category: post.category?.name,
    openGraph: {
      ...seo.openGraph,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const data = await params;

  const post = await fetchPostData(data.id, data.slug);

  if (!post) {
    return notFound();
  }

  return (
    <Fragment>
      <PageHeader
        title="Blog"
        breadcrumbItems={[
          { title: "Blog", href: "/blog" },
          ...[post ? { title: post.title, href: "#" } : null],
        ]}
      />
      <section className="relative py-16 bg-white text-gray-500 dark:bg-white/10 dark:text-gray-300">
        {post && <PostDetails post={post} />}
      </section>
    </Fragment>
  );
}
