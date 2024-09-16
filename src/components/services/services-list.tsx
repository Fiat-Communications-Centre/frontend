import React from "react";
import ServiceBox from "./service-box";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    title: "Research and Consultancy Services",
    description:
      "Expert advice and personalized solutions in research and consultancy areas. We offer tailored consultancy services to meet your unique needs and drive success.",
    href: "/services/research",
  },
  {
    title: "Audiovisual Productions",
    description:
      "Professional audiovisual content creation and production, designed to captivate and engage your audience.",
    href: "/services/audiovisual-productions",
  },
  //   {
  //     title: "Graphics Design",
  //     description:
  //       "Creative and impactful graphic design solutions to elevate your brand's visual identity.",
  //     href: "/services/graphics-design",
  //   },
  //   {
  //     title: "Web & Mobile Development",
  //     description:
  //       "Cutting-edge web and mobile application development services tailored to your needs.",
  //     href: "/services/web-mobile-development",
  //   },
  // {
  //   title: "Strategic Organizations Communication",
  //   description:
  //     "Comprehensive communication strategies designed to enhance your organization's outreach and impact.",
  //   href: "/services/organization-communications",
  // },
  {
    title: "Trainings",
    description:
      "Expert-led training sessions tailored to empower your team and enhance their skills.",
    href: "/services/trainings",
  },
  //   {
  //     title: "Advertising & Promotions",
  //     description:
  //       "Effective advertising and promotional strategies that amplify your brand's reach and engagement.",
  //     href: "/services/advertising-promotions",
  //   },
  //   {
  //     title: "Religious Organization Databases",
  //     description:
  //       "Custom database solutions designed specifically for religious organizations.",
  //     href: "/services/religious-organizations-databases",
  //   },
  // {
  //   title: "Crisis Communication Plan",
  //   description:
  //     "Developing robust plans to manage and navigate crisis communication effectively.",
  //   href: "/services/crisis-communication-plan",
  // },
];
function ServicesList({
  className,
  services = SERVICES,
}: {
  className?: string;
  services?: typeof SERVICES;
}) {
  return (
    <div className={cn("grid grid-cols-12 gap-4 gap-y-8 md:gap-8", className)}>
      {services.map((item) => (
        <div
          key={item.title}
          className="!h-full lg:col-span-4 sm:col-span-6 col-span-12"
        >
          <ServiceBox
            title={item.title}
            href={item.href}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
}

export default ServicesList;
