import PageHeader from "@/components/header/page-header";
import SimpleNewsletterForm from "@/components/newsletter/simple-newsletter-form";
import PostList from "@/components/posts/post-list";
import SectionTitle from "@/components/shared/section-title";
import { getPageSEO } from "@/lib/utils";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = getPageSEO({
  title: "Blog ",
  description:
    "Latest Insights and Intelligence on Communication, Consultancy, Research & Tips",
    url:"blog"
});

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

        <PostList />
      </section>
      <section className="bg-white dark:bg-white/10">
        <div className="container mx-auto flex justify-center items-center">
          <SimpleNewsletterForm />
        </div>
      </section>
    </Fragment>
  );
}
