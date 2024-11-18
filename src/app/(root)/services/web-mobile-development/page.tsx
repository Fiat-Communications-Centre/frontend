import PageHeader from "@/components/header/page-header";
import CustomServiceBox from "@/components/services/custom-service-box";
import ServiceContentWrapper from "@/components/services/service-content-wrapper";
import IconCard from "@/components/shared/icon-card";
import SectionTitle from "@/components/shared/section-title";
import { siteDetails } from "@/config/constants";
import { getPageSEO } from "@/lib/utils";
import {
  LucideLayoutTemplate,
  LucideSearchCode,
  LucideCircleHelp,
} from "lucide-react";
import { Metadata } from "next";
import React, { Fragment } from "react";

const webDevelopmentServices = [
  {
    name: "Custom Website Design",
    description:
      "Unique, responsive websites tailored to your brand for an intuitive user experience.",
  },
  {
    name: "E-Commerce Development",
    description:
      "Build secure online stores with payment gateways, inventory management, and user-friendly interfaces.",
  },
  {
    name: "Content Management Systems (CMS)",
    description:
      "Manage your website content easily with WordPress, Joomla, or custom CMS solutions.",
  },
  {
    name: "Web Application Development",
    description:
      "Develop powerful web applications tailored to your business needs, from SaaS to dashboards.",
  },
];

export const metadata: Metadata = getPageSEO({
  title: "Web & Mobile Development",
  keywords:
    "services, web development, nairobi, website development, ecommerce, e-commerce, business",
  url: "services/web-mobile-development",
  description:
    "At FIAT Communications & Consultancy Centre, we specialize in developing custom websites that are not only visually appealing but also highly functional and optimized for performance ",
});

function WebMobileDevelopmentPage() {
  return (
    <Fragment>
      <PageHeader
        title="Web & Mobile Development"
        breadcrumbItems={[
          { title: "Services", href: "/services" },
          {
            title: "Web & Mobile Development",
            href: "/services/web-mobile-development",
          },
        ]}
      />
      <ServiceContentWrapper className="px-4">
        <SectionTitle
          title="Web & Mobile Development"
          description="Building Engaging, High-Performance Websites Tailored to Your Needs"
        />
        <p className="my-2 text-sm md:text-lg leading-6">
          At FIAT Communications & Consultancy Centre, we specialize in
          developing custom websites that are not only visually appealing but
          also highly functional and optimized for performance. Whether you need
          an e-commerce platform, a corporate site, or a personal blog, we
          deliver responsive and user-friendly web solutions that align with
          your business goals.
        </p>

        <div className="w-full grid grid-cols-12 gap-8 px-4">
          <div className="sm:col-span-6 md:col-span-4  col-span-12 grid gap-4 ">
            <IconCard
              className="h-full py-4 shadow-xl border-t-4 rounded-2xl hover:shadow-lg hover:border-t-primary flex-col justify-center items-center"
              Icon={() => <LucideLayoutTemplate className="size-8" />}
              title="Responsive Web Design"
              titleClassName="text-md sm:text-lg text-center"
              descriptionClassName="text-center"
            />
          </div>

          <div className="sm:col-span-6 md:col-span-4 col-span-12">
            <IconCard
              className="h-full py-4 shadow-xl border-t-4 rounded-2xl hover:shadow-lg hover:border-t-primary flex-col justify-center items-center"
              Icon={() => <LucideSearchCode className="size-8" />}
              title="SEO Optimization"
              titleClassName="text-md sm:text-lg text-center"
              descriptionClassName="text-center"
            />
          </div>
          <div className="sm:col-span-6 md:col-span-4  col-span-12">
            <IconCard
              className="h-full py-4 shadow-xl border-t-4 rounded-2xl hover:shadow-lg hover:border-t-primary flex-col justify-center items-center"
              Icon={() => <LucideCircleHelp className="size-8" />}
              title="Maintenance & Support"
              titleClassName="text-md sm:text-lg text-center"
              descriptionClassName="text-center"
            />
          </div>
        </div>

        <div className="my-12 px-4">
          <SectionTitle title="Our Website Development Services" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
            {webDevelopmentServices.map((svc) => (
              <div key={svc.name} className="pt-6 h-full">
                <CustomServiceBox
                  className="text-center"
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

export default WebMobileDevelopmentPage;
