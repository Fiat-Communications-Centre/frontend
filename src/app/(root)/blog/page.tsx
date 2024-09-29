import ComingSoon from "@/components/coming-soon";
import PageHeader from "@/components/header/page-header";
import SimpleNewsletterForm from "@/components/newsletter/simple-newsletter-form";
import BlogPost from "@/components/posts/blog-post";
import SectionTitle from "@/components/shared/section-title";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "FIAT Communications & Consultancy Centre - Blog",
  description: "Unparalleled Quality Communication",
};

const posts = [
  {
    id: "post-1",
    imageSrc: "/hero-main.jpg",
    postDate: "Sep 14, 2024",
    authorName: "Jane Doe",
    postTitle: "Navigating the Future of Technology",
    postExcerpt:
      "Explore how emerging technologies are shaping our world and what it means for the future of businesses.",
  },
  {
    id: "post-2",
    imageSrc: "/hero-main.jpg",
    postDate: "Sep 10, 2024",
    authorName: "John Smith",
    postTitle: "The Impact of AI on Everyday Life",
    postExcerpt:
      "From home assistants to self-driving cars, see how AI is increasingly integrated into our daily routines.",
    
  },
  {
    id: "post-3",
    imageSrc: "/hero-main.jpg",
    postDate: "Aug 23, 2024",
    authorName: "Alice Johnson",
    postTitle: "Sustainable Practices in Tech Industries",
    postExcerpt:
      "Discover how leading tech companies are turning to sustainable practices to reduce their environmental footprint.",
  
  },
  {
    id: "post-4",
    imageSrc: "/hero-main.jpg",
    postDate: "Aug 15, 2024",
    authorName: "Mohamed Ali",
    postTitle: "Blockchain Beyond Cryptocurrency",
    postExcerpt:
      "Blockchain technology offers more than just cryptocurrency; learn about its applications in various industries.",
   
  },
  {
    id: "post-5",
    imageSrc: "/hero-main.jpg",
    postDate: "Jul 30, 2024",
    authorName: "Linda Brown",
    postTitle: "Advances in Renewable Energy",
    postExcerpt:
      "With advancements in technology, renewable energy is becoming more accessible. Find out what's new and what's next.",
    
  },
];
export default function BlogsPage() {
  return (
    <Fragment>
      <PageHeader
        title="Blog"
        breadcrumbItems={[{ title: "Blog", href: "/blog" }]}
      />
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
              post={{
                authorName: post.authorName,
                postDate: post.postDate,
                postTitle: post.postTitle,
                postExcerpt: post.postExcerpt,
                imageSrc: post.imageSrc,
                readMoreUrl: `/blog/${post.id}`,
              }}
            />
          ))}
        </div>
      </section>
      <section className="bg-white dark:bg-white/10">
        <div className="container mx-auto flex justify-center items-center">
          <SimpleNewsletterForm />
        </div>
      </section>
    </Fragment>
  );
}
