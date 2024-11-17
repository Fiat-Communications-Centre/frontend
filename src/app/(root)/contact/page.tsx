import ComingSoon from "@/components/coming-soon";
import ContactBox from "@/components/contact/contact-box";
import ContactForm from "@/components/contact/contact-form";
import PageHeader from "@/components/header/page-header";
import SectionTitle from "@/components/shared/section-title";
import { getPageSEO } from "@/lib/utils";
import { LucideClock, LucideHelpCircle, LucideMapPin } from "lucide-react";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = getPageSEO({
  title: "Contact",
  description: "Contact us - Make a free consultant appointment today and reach our Expert Team",
  url:"/contact"
});

export default function ContactPage() {
  return (
    <Fragment>
      <PageHeader
        title="Contact Us"
        breadcrumbItems={[{ title: "Contact Us", href: "/contact" }]}
      />
      <section className="container mx-auto max-w-7xl py-10 w-full flex flex-col justify-start md:flex-row gap-4">
        <div className="flex-1 ">
          {" "}
          <ContactForm
            title="Get In Touch"
            description="Make A Free Consultant Appointment"
            className="w-full h-full min-w-full"
          />
        </div>

        <div className="py-16 px-4 sm:py-24 max-w-lg">
          <SectionTitle
            className="text-left"
            title="Reach Our Expert Team"
            titleClassName="capitalize"
            // subTitle="Contact Info"
            description="Send a message through given form, If your enquiry is time sensitive please use below contact details."
          />
          <div className="grid gap-4">
            <ContactBox
              className="bg-white dark:bg-white/10"
              icon={<LucideHelpCircle className="h-full w-full" />}
              title="General Enquires"
            >
              <p>
                Phone:+254-745-757-894
                <br /> Email: info@fiatcommunicationscentre.com
              </p>
            </ContactBox>
            <ContactBox
              className="bg-white dark:bg-white/10"
              icon={<LucideMapPin className="h-full w-full" />}
              title="Address"
            >
              <p>
                P. O. Box 21031-00505 <br /> Ngong Rd, Nairobi
              </p>
            </ContactBox>
            <ContactBox
              className="bg-white dark:bg-white/10"
              icon={<LucideClock className="h-full w-full" />}
              title="Open Hours"
            >
              <p>
                Mon-Saturday: 8AM to 4pm <br />
                Sunday: Closed
              </p>
            </ContactBox>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
