import ContactForm from "@/components/contact/contact-form";
import FaqsAccordion from "@/components/faqs/faqs-accordion";
import PageHeader from "@/components/header/page-header";
import SectionTitle from "@/components/shared/section-title";
import { getPageSEO } from "@/lib/utils";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = getPageSEO({
  title: "Frequently Asked Questions",
  description: "Questions. Frequently asked ones. Plus our answers. That's how FAQs work.",
  url:"/faqs",
});

export default function ResearchPage() {
  return (
    <Fragment>
      <PageHeader
        title="Frequently Asked Questions"
        breadcrumbItems={[{ title: "Frequently Asked Questions", href: "/faqs" }]}
      />
      <section className="fle-1 container mx-auto py-10 w-full flex flex-col lg:flex-row gap-8">
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
          className="w-full max-w-full lg:max-w-lg"
        />
      </section>
    </Fragment>
  );
}
