import PageHeader from "@/components/header/page-header";
import CustomServiceBox from "@/components/services/custom-service-box";
import ServiceContentWrapper from "@/components/services/service-content-wrapper";
import SectionTitle from "@/components/shared/section-title";
import { getPageSEO } from "@/lib/utils";
import { Metadata } from "next";
import React, { Fragment } from "react";

const trainingServices = [
  {
    name: "Corporate Training",
    description:
      "Customized training solutions to equip employees with the latest skills and drive business success.",
  },
  {
    name: "Leadership Development",
    description:
      "Focused programs to build communication, decision-making, and strategic thinking skills for effective leadership.",
  },
  {
    name: "Technical Skills Training",
    description:
      "Hands-on training in software development, data analysis, and more to keep pace with technological advancements.",
  },
  {
    name: "Soft Skills Training",
    description:
      "Improve interpersonal and communication skills to foster collaboration and positive workplace environments.",
  },
  {
    name: "Industry-Specific Certifications",
    description:
      "Earn professional certifications that validate skills and enhance career prospects across various industries.",
  },
  {
    name: "Custom Training Programs",
    description:
      "Tailored training solutions designed to address specific business needs and promote continuous learning.",
  },
];

export const metadata: Metadata = getPageSEO({
  title: "Trainings",
  keywords: trainingServices.map((x) => x.name).join(","),
  url: `services/trainings`,
  description:
    "Personalized training programs designed to enhance your skills, knowledge, and confidence in various areas",
});

function TrainingsPage() {
  return (
    <Fragment>
      <PageHeader
        title="Trainings"
        breadcrumbItems={[
          { title: "Services", href: "/services" },
          {
            title: "Trainings",
            href: "/services/trainings",
          },
        ]}
      />
      <ServiceContentWrapper>
        <SectionTitle
          title="Trainings"
          description="Creative and impactful graphic design solutions to elevate your brand's visual identity."
        />
        <p className="text-lg">
          We offer a wide range of personalized training programs designed to
          enhance your skills, knowledge, and confidence in various areas.
          Whether you&apos;re looking to improve your public speaking abilities,
          enhance your research skills, or develop expertise in audio-visual
          productions, our expert trainers are here to guide you towards
          success.
        </p>
        <SectionTitle
          className="my-4"
          title="Services Offered"
          titleClassName="!text-2xl"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
          {trainingServices.map((svc) => (
            <div key={svc.name} className="pt-6 h-full">
              <CustomServiceBox
                className="text-left"
                serviceDesc={svc.description}
                serviceName={svc.name}
              />
            </div>
          ))}
        </div>
      </ServiceContentWrapper>
    </Fragment>
  );
}

export default TrainingsPage;
