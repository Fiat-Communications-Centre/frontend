import PageHeader from "@/components/header/page-header";
import CustomServiceBox from "@/components/services/custom-service-box";
import ServiceContentWrapper from "@/components/services/service-content-wrapper";
import SectionTitle from "@/components/shared/section-title";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: "Advertising & Promotions - FIAT Communications & Consultancy Centre",
  description: `Amplify Your Brand's Reach and Impact with Expert Advertising and Promotion Strategies`,
  openGraph: {
    type: "website",
    url: `${process.env.CLIENT_BASE_URL}/services/advertising-promotions"`,
  },
};

const approaches = [
  {
    name: "Targeted Campaigns",
    description:
      "We tailor our advertising and promotion strategies to align with your specific goals and target audience. By understanding your unique selling points, we craft compelling messages that resonate with your customers.",
  },
  {
    name: "Multi-Channel Reach",
    description:
      "From traditional media to digital platforms, we leverage various channels to maximize the reach and impact of your campaigns. Our integrated approach ensures that your brand gets noticed across diverse platforms.",
  },
  {
    name: "Creative Content",
    description:
      "Our team of creative minds crafts engaging and visually appealing content to capture your audience's attention. Whether it's eye-catching visuals, compelling ad copy, or captivating videos, we deliver content that leaves a lasting impression.",
  },
  {
    name: "Performance Tracking",
    description:
      "We believe in data-driven advertising. Throughout the campaign, we monitor and analyze the performance of your ads to optimize and enhance their effectiveness continually.",
  },
  {
    name: "Budget Optimization",
    description:
      "We understand the value of your investment. Our team works diligently to optimize your advertising budget, ensuring that you get the most out of every dollar spent.",
  },
];

function AdvertisingPromotionsPage() {
  return (
    <Fragment>
      <PageHeader
        title="Advertising & Promotions"
        breadcrumbItems={[
          { title: "Services", href: "/services" },
          {
            title: "Advertising & Promotions",
            href: "/services/advertising-promotions",
          },
        ]}
      />
      <ServiceContentWrapper className="px-4">
        <SectionTitle
          title="Advertising & Promotions"
          description="Amplify Your Brand's Reach and Impact with Expert Advertising and Promotion Strategies"
        />
        <p className="text-lg">
          Our Advertising and Promotion service is designed to boost your
          brand&apos;s visibility and impact in the market. Whether you&apos;re
          looking to create a buzz for a new product, increase brand awareness,
          or drive customer engagement, our expert team of advertising
          professionals has you covered.
        </p>

        <div className="my-12 px-4">
          <SectionTitle title="Our Approach" titleClassName="text-2xl" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
            {approaches.map((svc) => (
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

        <p>
          Unlock the full potential of your brand with our Advertising and
          Promotion services. Let us help you connect with your audience, drive
          meaningful engagements, and achieve your marketing objectives. Partner
          with us to make a lasting impact in today&apos;s competitive marketplace.
        </p>
      </ServiceContentWrapper>
    </Fragment>
  );
}

export default AdvertisingPromotionsPage;
