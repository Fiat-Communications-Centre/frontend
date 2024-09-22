import ContactBox from "@/components/contact/contact-box";
import ResearchContactForm from "@/components/contact/reaserch-contact-form";
import PageHeader from "@/components/header/page-header";
import IconCard from "@/components/shared/icon-card";
import SectionTitle from "@/components/shared/section-title";
import {
  LucideBadgeCheck,
  LucideClock,
  LucideHelpCircle,
  LucideMapPin,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Fiat Communications Centre - Research",
  description: "Unparalleled Quality Communication",
};

const researchServices = [
  {
    name: "Literature Review",
    description:
      "Conduct comprehensive reviews of existing research to establish a strong foundation for new studies.",
  },
  {
    name: "Data Collection & Analysis",
    description:
      "Expertise in qualitative and quantitative data collection methods, along with advanced statistical analysis.",
  },
  {
    name: "Research Design & Methodology",
    description:
      "Tailor-made research frameworks and methodologies to fit your project's unique needs.",
  },
  {
    name: "Proposal Writing",
    description:
      "Assistance in drafting compelling and well-structured research proposals for grants or funding.",
  },
  {
    name: "Survey Design & Execution",
    description:
      "Creation, distribution, and analysis of surveys tailored to gather critical data from target populations.",
  },
  {
    name: "Field Research Support",
    description:
      "On-ground data collection and logistical support for research projects requiring fieldwork.",
  },
  {
    name: "Market Research",
    description:
      "In-depth market analysis and consumer behavior research to inform business strategies.",
  },
  {
    name: "Policy Research",
    description:
      "Analysis of public policies and their social, economic, or political impacts.",
  },
  {
    name: "Academic Research Assistance",
    description:
      "Guidance and support for academic projects, including dissertation and thesis writing.",
  },
  {
    name: "Report Writing & Publication",
    description:
      "Development of comprehensive reports, white papers, and research publications.",
  },
  {
    name: "Ethical Research Consultation",
    description:
      "Ensuring that all research complies with the highest ethical standards, including participant confidentiality and data security.",
  },
  {
    name: "Feasibility Studies",
    description:
      "Evaluate the viability of projects or initiatives through thorough research and analysis.",
  },
  {
    name: "Competitive Analysis",
    description:
      "Assess competitors to gain insights and advantages for businesses or academic endeavors.",
  },
  {
    name: "Data Visualization",
    description:
      "Transform raw data into insightful, easy-to-understand visual formats like graphs and charts.",
  },
  {
    name: "Bibliometric Analysis",
    description:
      "Analyze publication trends, citation impacts, and the influence of research within specific fields.",
  },
];

export default function ResearchPage() {
  return (
    <Fragment>
      <PageHeader
        title="Research"
        breadcrumbItems={[{ title: "Research", href: "/research" }]}
      />
      <section className="flex-1 relative px-10 py-10">
        <div className="container mx-auto grid grid-cols-12">
          <div className="lg:col-span-6 col-span-12 p-2">
            <div className="relative space-y-4">
              <SectionTitle
                className="text-left"
                title="Empowering Your Research Ambitions"
                subTitle="Your Research, Our Expertise"
                description="Welcome to our community of innovators and thinkers! We understand the passion and effort that goes into each research project because we've been there too. Let us take the journey with you from conception to completion, turning your ideas into impactful results."
                descriptionClassName="text-lg font-semibold text-gray-400"
              />

              <p>
                We are committed to excellence and driven by the desire to
                provide actionable insights. Our team comprises experienced
                researchers who are adept at handling diverse and complex
                research projects. Here&apos;s why partnering with us will
                benefit your research endeavors:
              </p>

              <div className="grid  gap-4 ">
                <div className="flex justify-start items-centre space-x-2 md:space-x-4">
                  <div className="flex justify-center items-center">
                    <LucideBadgeCheck size={24} />
                  </div>

                  <IconCard
                    className="p-2 shadow-sm rounded-md hover:shadow-lg flex flex-col bg-white dark:bg-white/10"
                    title="Human-Centered Approach"
                    description="Every project is a partnership. We work closely with you to understand your vision and bring your research to life, together."
                    titleClassName="text-md sm:text-2xl"
                  />
                </div>

                <div className="flex justify-start items-centre space-x-2 md:space-x-4">
                  <div className="flex justify-center items-center">
                    <LucideBadgeCheck size={24} />
                  </div>
                  <IconCard
                    className="p-2 shadow-sm rounded-md hover:shadow-lg flex flex-col bg-white dark:bg-white/10"
                    title="Tailored Support"
                    description="We tailor our approach to fit your project's unique needs. Your success is our priority, and we're with you every step of the way."
                    titleClassName="text-md sm:text-2xl"
                  />
                </div>
                <div className="flex justify-start items-centre space-x-2 md:space-x-4">
                  <div className="flex justify-center items-center">
                    <LucideBadgeCheck size={24} />
                  </div>
                  <IconCard
                    className="p-2 shadow-sm rounded-md hover:shadow-lg flex flex-col bg-white dark:bg-white/10"
                    title="Trust and Integrity:"
                    description="Your project's integrity is our commitment. We safeguard your research with the utmost confidentiality and professional care."
                    titleClassName="text-md sm:text-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="relative mb-24 block items-center">
              <div className="relative m-auto w-full h-full lg:w-[500px] lg:h-[550px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  width={700}
                  height={700}
                  src="/research.jpg"
                  className="w-full h-full object-cover"
                  alt="image"
                />
              </div>
              <div className="relative max-lg:m-auto w-full h-full  rounded-lg overflow-hidden shadow-lg mt-5 sm:absolute sm:-bottom-14 max-lg:left-0 sm:right-0 sm:w-60 sm:h-60 lg:-right-0">
                <Image
                  width={600}
                  height={600}
                  src="/intelligence.svg"
                  className="w-full h-full object-cover"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white dark:bg-white/5 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <SectionTitle
            className="text-center"
            title="Everything You Need For Your Research"
            subTitle="We are experts"
            description="Your research deserves the best support, and that's exactly what we aim to provide. We're excited to hear your research ideas."
            descriptionClassName="text-lg font-semibold text-gray-400"
          />

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {researchServices.map((svc) => (
                <div key={svc.name} className="pt-6 h-full">
                  <div className="flow-root rounded-lg bg-gray-50 dark:bg-gray-50/10 px-6 pb-8 h-full">
                    <div className="-mt-6 h-full">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-primary dark:bg-white/10 p-3 shadow-lg">
                          <LucideBadgeCheck
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                        {svc.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {svc.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 w-full px-10">
        <div className="container mx-auto  space-y-5">
          <div className="w-full max-w-2xl m-auto">
            {" "}
            <SectionTitle
              className="text-left"
              title="Reach Our Expert Team"
              titleClassName="capitalize"
              // subTitle="Contact Info"
              description="Send a message through given form, If your enquiry is time sensitive please use below contact details."
            />
            <ResearchContactForm
              title="Tell Us About Your Project"
              description="Make A Free Consultant Appointment"
              className="w-full h-full min-w-full "
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ContactBox
              link="#"
              className="bg-white dark:bg-white/10"
              icon={<LucideHelpCircle className="h-full w-full" />}
              title="General Enquires"
            >
              <p>
                Phone: <br /> Email:
              </p>
            </ContactBox>
            <ContactBox
              link="#"
              className="bg-white dark:bg-white/10"
              icon={<LucideMapPin className="h-full w-full" />}
              title="Address"
            >
              <p>
                P. O. Box 21031-00505 <br /> Ngong Rd, Nairobi
              </p>
            </ContactBox>
            <ContactBox
              link="#"
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
