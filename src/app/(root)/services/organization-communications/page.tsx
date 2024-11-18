import LinkCardCTA from "@/components/call-to-action/link-card-cta";
import PageHeader from "@/components/header/page-header";
import CustomServiceBox from "@/components/services/custom-service-box";
import ServiceContentWrapper from "@/components/services/service-content-wrapper";
import SectionTitle from "@/components/shared/section-title";
import { getPageSEO } from "@/lib/utils";
import { Metadata } from "next";
import React, { Fragment } from "react";

const strategicCommunicationServices = [
  {
    name: "Internal Communication Strategies",
    description:
      "Tailored solutions to streamline internal information flow and enhance employee collaboration.",
  },
  {
    name: "Crisis Communication Planning",
    description:
      "Develop comprehensive crisis communication plans to protect your reputation and build trust in times of crisis.",
  },
  {
    name: "Public Relations & Media Outreach",
    description:
      "Craft compelling PR strategies to highlight your organization's values and successes, ensuring positive media exposure.",
  },
  {
    name: "Stakeholder Engagement",
    description:
      "Foster positive relationships with stakeholders through strategic communication aligned with organizational goals.",
  },
  {
    name: "Digital Communication Strategies",
    description:
      "Leverage social media, email marketing, and web content to reach and engage your audience effectively.",
  },
  {
    name: "Brand Messaging & Identity Development",
    description:
      "Refine your organization's messaging and identity to maintain consistency and clarity across all communication channels.",
  },
];

export const metadata: Metadata = getPageSEO({
  title: "Strategic Organization Communication",
  url: "services/organizations-communications",
  keywords: strategicCommunicationServices.map((x) => x.name).join(","),
  description:
    "Enhance your business's communication effectiveness with our strategic organizational communication services",
});

function OrganizationCommunicationsPage() {
  return (
    <Fragment>
      <PageHeader
        title="Strategic Organization Communication"
        breadcrumbItems={[
          { title: "Services", href: "/services" },
          {
            title: "Strategic Organization Communication",
            href: "/services/organizations-communications",
          },
        ]}
      />
      <ServiceContentWrapper>
        <SectionTitle
          title="Strategic Organization Communication"
          description="Effective Communication Solutions for Growth and Engagement"
        />

        <p className="my-2 text-sm md:text-lg leading-6">
          Enhance your business&apos;s communication effectiveness with our
          strategic organizational communication services. At FIAT
          Communications & Consultancy Centre, we specialize in developing
          tailored strategies to help your organization achieve its
          communication goals. Our experienced team of professionals will work
          closely with you to understand your unique needs and create customized
          plans that align with your objectives.
        </p>

        <div className="my-12 px-4">
          <SectionTitle title="Services Offered" titleClassName="text-2xl" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
            {strategicCommunicationServices.map((svc) => (
              <div key={svc.name} className="pt-6 h-full">
                <CustomServiceBox
                  className="text-left"
                  serviceDesc={svc.description}
                  serviceName={svc.name}
                />
              </div>
            ))}
          </div>
        </div>
      </ServiceContentWrapper>
    </Fragment>
  );
}

export default OrganizationCommunicationsPage;
