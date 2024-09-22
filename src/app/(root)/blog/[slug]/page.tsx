import { Metadata } from "next";

import Image from "next/image";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import PageHeader from "@/components/header/page-header";
import SimpleNewsletterForm from "@/components/newsletter/simple-newsletter-form";
import PostCommentForm from "@/components/posts/post-comment-form";
import RecentPostCard from "@/components/posts/RecentPostCard";
import UserBox from "@/components/shared/user-box";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { cn, sanitizer } from "@/lib/utils";
import { LucideUser, LucideCalendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buttonVariants } from "@/components/ui/button";

const posts = [
  {
    id: "post-1",
    imageSrc: "/hero-main.jpg",
    body: `<div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="block text-base text-center text-primary font-semibold tracking-wide uppercase">
              Introducing
            </span>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              JavaScript for Beginners
            </span>
          </h1>
          <p class="mt-8 text-xl text-gray-500 leading-8">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
            aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
            egestas fringilla sapien.
          </p>
        </div>
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
            Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
            Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
            tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
            <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
          </p>
          <ul role="list">
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
          <p>
            Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam
            porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc
            purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.
          </p>
          <h2>From beginner to expert in 30 days</h2>
          <p>
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
            mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
            ipsum eu a sed convallis diam.
          </p>
          <blockquote>
            <p>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
              pellentesque. Blandit amet, sed aenean erat arcu morbi.
            </p>
          </blockquote>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
          <figure>
            <img
              class="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
          </figure>
          <h2>Everything you need to get up and running</h2>
          <p>
            Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus
            volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus
            non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
            congue erat ac. Cras fermentum convallis quam.
          </p>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div>`,
    postDate: "Sep 14, 2024",
    authorName: "Jane Doe",
    postTitle: "Navigating the Future of Technology",
    postExcerpt:
      "Explore how emerging technologies are shaping our world and what it means for the future of businesses.",
    readMoreUrl: "blog-single.html#post1",
  },
  {
    id: "post-2",
    imageSrc: "/hero-main.jpg",
    body: `<div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="block text-base text-center text-primary font-semibold tracking-wide uppercase">
              Introducing
            </span>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              JavaScript for Beginners
            </span>
          </h1>
          <p class="mt-8 text-xl text-gray-500 leading-8">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
            aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
            egestas fringilla sapien.
          </p>
        </div>
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
            Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
            Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
            tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
            <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
          </p>
          <ul role="list">
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
          <p>
            Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam
            porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc
            purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.
          </p>
          <h2>From beginner to expert in 30 days</h2>
          <p>
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
            mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
            ipsum eu a sed convallis diam.
          </p>
          <blockquote>
            <p>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
              pellentesque. Blandit amet, sed aenean erat arcu morbi.
            </p>
          </blockquote>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
          <figure>
            <img
              class="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
          </figure>
          <h2>Everything you need to get up and running</h2>
          <p>
            Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus
            volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus
            non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
            congue erat ac. Cras fermentum convallis quam.
          </p>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div>`,
    postDate: "Sep 10, 2024",
    authorName: "John Smith",
    postTitle: "The Impact of AI on Everyday Life",
    postExcerpt:
      "From home assistants to self-driving cars, see how AI is increasingly integrated into our daily routines.",
    readMoreUrl: "blog-single.html#post2",
  },
  {
    id: "post-3",
    imageSrc: "/hero-main.jpg",
    body: `<div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="block text-base text-center text-primary font-semibold tracking-wide uppercase">
              Introducing
            </span>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              JavaScript for Beginners
            </span>
          </h1>
          <p class="mt-8 text-xl text-gray-500 leading-8">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
            aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
            egestas fringilla sapien.
          </p>
        </div>
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
            Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
            Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
            tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
            <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
          </p>
          <ul role="list">
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
          <p>
            Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam
            porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc
            purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.
          </p>
          <h2>From beginner to expert in 30 days</h2>
          <p>
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
            mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
            ipsum eu a sed convallis diam.
          </p>
          <blockquote>
            <p>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
              pellentesque. Blandit amet, sed aenean erat arcu morbi.
            </p>
          </blockquote>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
          <figure>
            <img
              class="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
          </figure>
          <h2>Everything you need to get up and running</h2>
          <p>
            Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus
            volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus
            non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
            congue erat ac. Cras fermentum convallis quam.
          </p>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div>`,
    postDate: "Aug 23, 2024",
    authorName: "Alice Johnson",
    postTitle: "Sustainable Practices in Tech Industries",
    postExcerpt:
      "Discover how leading tech companies are turning to sustainable practices to reduce their environmental footprint.",
    readMoreUrl: "blog-single.html#post3",
  },
  {
    id: "post-4",
    imageSrc: "/hero-main.jpg",
    body: `<div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="block text-base text-center text-primary font-semibold tracking-wide uppercase">
              Introducing
            </span>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              JavaScript for Beginners
            </span>
          </h1>
          <p class="mt-8 text-xl text-gray-500 leading-8">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
            aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
            egestas fringilla sapien.
          </p>
        </div>
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
            Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
            Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
            tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
            <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
          </p>
          <ul role="list">
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
          <p>
            Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam
            porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc
            purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.
          </p>
          <h2>From beginner to expert in 30 days</h2>
          <p>
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
            mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
            ipsum eu a sed convallis diam.
          </p>
          <blockquote>
            <p>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
              pellentesque. Blandit amet, sed aenean erat arcu morbi.
            </p>
          </blockquote>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
          <figure>
            <img
              class="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
          </figure>
          <h2>Everything you need to get up and running</h2>
          <p>
            Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus
            volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus
            non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
            congue erat ac. Cras fermentum convallis quam.
          </p>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div>`,
    postDate: "Aug 15, 2024",
    authorName: "Mohamed Ali",
    postTitle: "Blockchain Beyond Cryptocurrency",
    postExcerpt:
      "Blockchain technology offers more than just cryptocurrency; learn about its applications in various industries.",
    readMoreUrl: "blog-single.html#post4",
  },
  {
    id: "post-5",
    imageSrc: "/hero-main.jpg",
    body: `<div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="block text-base text-center text-primary font-semibold tracking-wide uppercase">
              Introducing
            </span>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              JavaScript for Beginners
            </span>
          </h1>
          <p class="mt-8 text-xl text-gray-500 leading-8">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
            aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
            egestas fringilla sapien.
          </p>
        </div>
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
            Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
            Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
            tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
            <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
          </p>
          <ul role="list">
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
          <p>
            Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam
            porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc
            purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.
          </p>
          <h2>From beginner to expert in 30 days</h2>
          <p>
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
            mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
            ipsum eu a sed convallis diam.
          </p>
          <blockquote>
            <p>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
              pellentesque. Blandit amet, sed aenean erat arcu morbi.
            </p>
          </blockquote>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
          <figure>
            <img
              class="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
          </figure>
          <h2>Everything you need to get up and running</h2>
          <p>
            Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus
            volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus
            non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
            congue erat ac. Cras fermentum convallis quam.
          </p>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div>`,
    postDate: "Jul 30, 2024",
    authorName: "Linda Brown",
    postTitle: "Advances in Renewable Energy",
    postExcerpt:
      "With advancements in technology, renewable energy is becoming more accessible. Find out what's new and what's next.",
    readMoreUrl: "blog-single.html#post5",
  },
];

// Metadata function for SEO and head management
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = posts.find((x) => x.id === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post does not exist.",
    };
  }

  return {
    title: post.postTitle,
    description: post.postExcerpt,
    openGraph: {
      type: "article",
      url: `${process.env.CLIENT_BASE_URL}/blog/${params.slug}`,
      publishedTime: post.postDate,
      authors: post.authorName,
      images: { url: post.imageSrc },
    },
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((x) => x.id === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <Fragment>
      <PageHeader
        title="Blog"
        breadcrumbItems={[
          { title: "Blog", href: "/blog" },
          ...[post ? { title: post.postTitle, href: "#" } : null],
        ]}
      />
      <section className="relative py-16 bg-white text-gray-500 dark:bg-white/10 dark:text-gray-300 ">
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
                    src={post.imageSrc}
                    alt="img"
                    className="w-full h-full object-cover max-h-full max-w-full rounded-t-lg"
                  />
                </AspectRatio>
              </CardHeader>
              <CardContent className="w-full flex flex-col justify-start p-0">
                <ul className="h-full flex justify-start items-center gap-2 px-4 py-2">
                  <li className="flex justify-center items-center space-x-1">
                    <LucideUser className="size-5" />
                    <span className="text-sm">{post.authorName}</span>
                  </li>

                  <li className="flex justify-center items-center space-x-1 border-l border-gray-200 pl-2">
                    <LucideCalendar className="size-5" />
                    <span className="text-sm">{post.postDate}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <div
              className="text-lg container mx-auto max-w-5xl py-5 border-t border-b border-gray-600"
              dangerouslySetInnerHTML={{ __html: sanitizer(post.body) }}
            ></div>
            <Tabs className="w-full">
              <TabsList className="w-full justify-start bg-white dark:bg-white/10 h-auto px-4 py-4 space-x-4">
                <TabsTrigger value="comments" className="py-2 px-4 ring-1 ring-gray-50/10">
                  Comments
                </TabsTrigger>
                <TabsTrigger value="post-comment" className="py-2 px-4 ring-1 ring-gray-50/10">
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
                    name: post.authorName,
                    bio: "some bio here",
                    avatarFallback: "SR",
                    role: "Some role",
                  }}
                />
              </div>

              <SimpleNewsletterForm />

              <div className="px-4 sm:px-6 lg:px-8">
                <h3 className="text-primary font-bold text-left text-lg md:text-2xl mb-4">
                  Recent Posts
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4 mb-2">
                  {posts
                    .filter((x) => x.id !== params.slug)
                    .slice(0, 4)
                    .map((pst) => (
                      <RecentPostCard
                        key={pst.id}
                        postTitle={pst.postTitle}
                        imageSrc={pst.imageSrc}
                        postDate={pst.postDate}
                        postUrl={`/blog/${pst.id}`}
                      />
                    ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Fragment>
  );
}
