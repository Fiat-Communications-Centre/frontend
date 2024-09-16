import LinkCardCTA from "@/components/call-to-action/link-card-cta";
import MainCTA from "@/components/call-to-action/main-cta";
import ContactForm from "@/components/contact/contact-form";
import FaqsAccordion from "@/components/faqs/faqs-accordion";
import { HeroCarousel } from "@/components/hero/hero-carousel";
import IntroductionOne from "@/components/introduction/introduction-one";
import BlogPost from "@/components/posts/blog-post";
import ServicesList from "@/components/services/services-list";
import IconCard from "@/components/shared/icon-card";
import SectionTitle from "@/components/shared/section-title";
import TestimonialCarousel from "@/components/testimonials/testimonial-carousel";
import { Accordion } from "@/components/ui/accordion";
import { LucideCog, LucideCompass } from "lucide-react";
import { Fragment } from "react";

const posts = [
  {
    id: "post-1",
    imageSrc: "/hero-main.jpg",
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
    postDate: "Jul 30, 2024",
    authorName: "Linda Brown",
    postTitle: "Advances in Renewable Energy",
    postExcerpt:
      "With advancements in technology, renewable energy is becoming more accessible. Find out what's new and what's next.",
    readMoreUrl: "blog-single.html#post5",
  },
];

export default function HomePage() {
  return (
    <Fragment>
      <section className="relative w-full ">
        <div className="absolute inset-0 -z-10 bg-primary text-white bg-cover dark:bg-white/10 dark:!text-primary"></div>
        <HeroCarousel className="flex-1 w-full max-w-full" />
      </section>
      <section className="flex-1 relative px-10 py-28">
        <SectionTitle
          title="Key Areas of Expertise"
          subTitle="Trusted Solutions"
          description="Explore our wide range of services, tailored to meet your unique needs and drive success"
        />
        <ServicesList className="container mx-auto" />
      </section>
      <section className="w-full py-20 bg-accent/80 dark:bg-white/10">
        <div className="container mx-auto px-4 space-y-10">
          <IntroductionOne />
          <div className="w-full grid grid-cols-2 gap-4 ">
            <div className="col-span-2 lg:col-span-1 mb-5 h-full">
              <IconCard
                className="mx-auto bg-white dark:bg-white/10 space-x-4 lg:space-x-8 h-full"
                Icon={() => (
                  <div className="flex justify-center items-center text-primary">
                    <LucideCog className="size-12 md:size-16 lg:size-20" />
                  </div>
                )}
                title="Communications
"
                description="Elevate your brand with our strategic communication services. Our expertise in marketing strategies, crisis communication, and social media management will help you stand out in the current competivite market"
              />
            </div>
            <div className="col-span-2 lg:col-span-1 mb-5 h-full">
              <IconCard
                className="mx-auto bg-white dark:bg-white/10 space-x-4 lg:space-x-8 h-full"
                Icon={() => (
                  <div className="flex justify-center items-center text-primary">
                    <LucideCompass className="size-12 md:size-16 lg:size-20" />
                  </div>
                )}
                title="Research and Consultancy Services"
                description="Expert advice and personalized solutions in search and other consulancy areas. We offer tailored consultancy services to meet your unique needs and drive success."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-accent/80 dark:bg-white/10">
        <MainCTA
          title="Do You Have a Project in Mind?"
          description="Embarking on a new project can be overwhelming, but you don't have to do it alone. At FIAT Communications & Consultancy Centre, we bring your vision to life with precision and passion."
          imageUrl="/spiral.jpg"
        />
      </section>

      <section className="container mx-auto py-10 w-full flex flex-col md:flex-row gap-8">
        <div className="flex-1 py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <SectionTitle
            className="text-left"
            title="Frequently asked questions"
            titleClassName="capitalize"
            subTitle="Find Useful"
            description="Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find what you're looking for, you can always contact us with your enquiry"
          />{" "}
          <FaqsAccordion />
        </div>
        <ContactForm
          title="Get In Touch"
          description="Make A Free Consultant Appointment"
          className="w-full max-w-lg"
        />
      </section>

      {/* testimonials */}
      <section className="relative py-32 space-y-10 bg-cover bg-[url(/testimonials.jpg)]">
        <div className="absolute inset-0 bg-black/70 z-[1]"></div>
        <SectionTitle
          className="relative container mx-auto z-[2]"
          titleClassName="text-accent"
          title="Hear from Our Clients"
          subTitle="Real Success Stories"
          descriptionClassName="text-accent/60"
          description="At FIAT Communications & Consultancy Centre, we are committed to excellence and value the trust our clients place in us. These testimonials reflect the real impact of our services, as we continue to strive for the highest level of client satisfaction. We look forward to making your experience with us equally exceptional."
        />
        <TestimonialCarousel className="relative container mx-auto z-[2] px-4" />
      </section>

      {/* articles */}
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
                readMoreUrl: post.readMoreUrl,
              }}
            />
          ))}
        </div>
      </section>

      <section className="relative w-full py-3 bg-cover bg-[url(/spiral.jpg)] bg-top flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
        <div className="absolute inset-0 bg-black/60 z-[1]"></div>
        <LinkCardCTA
          className="relative bg-primary/10 p-2  flex-row-reverse z-[2] text-white"
          title="Discover how you can contribute to the growth and success of FIAT Communications & Consultancy Centre through financial support"
          imageUrl="/business-up.jpg"
          link={{
            href: "/support",
            title: "Support Us",
          }}
        />
      </section>
    </Fragment>
  );
}
