import PageHeader from "@/components/header/page-header";
import ServiceContentWrapper from "@/components/services/service-content-wrapper";
import HoverBox from "@/components/shared/hover-box";
import IconCard from "@/components/shared/icon-card";
import SectionTitle from "@/components/shared/section-title";
import { LucideActivity, LucideCheckCircle, LucideClock, LucideCog, LucideHandshake } from "lucide-react";
import { Metadata } from "next";
import React, { Fragment } from "react";

const graphicDesignServices = [
  {
    name: "Logo Design",
  },
  {
    name: "Branding(Car, T-shirts, Caps, Products, etc)",
  },
  {
    name: "Brochures",
  },
  {
    name: "Posters",
  },
  {
    name: "Business Cards",
  },
  {
    name: "Flyers & Book Covers",
  },
  {
    name: "Event & Invitation Cards",
  },
  {
    name: "Digital Graphics",
  },
  {
    name: "Illustrations",
  },
  {
    name: "Calendars",
  },
];

export const metadata: Metadata = {
  title: "Graphics Design - FIAT Communications & Consultancy Centre",
  description: "We specialize in crafting visually stunning and emotionally compelling audiovisual content that resonates with your audience.",
};

function GraphicsDesignPage() {
  return (
    <Fragment>
      <PageHeader
        title="Graphics Design"
        breadcrumbItems={[
          { title: "Services", href: "/services" },
          { title: "Graphics Design", href: "/services/graphics-design" },
        ]}
      />
      <ServiceContentWrapper>
        <SectionTitle
          title="Graphics Design"
          description="Creative and impactful graphic design solutions to elevate your brand's visual identity."
        />
        <p className="mb-5 text-lg">
          Transform your brand and captivate your audience with our professional
          graphic design services. From eye-catching calendars and beautifully
          designed cards to engaging brochures and stunning posters, we create
          visually striking designs that leave a lasting impression.
        </p>

        <SectionTitle
          className="text-left mb-5"
          title="Our Graphic Design Services"
          titleClassName="!text-xl"
        />
        <div className="flex justify-start items-center gap-4 flex-wrap">
          {graphicDesignServices.map((svc) => (
            <div key={svc.name} className="h-full">
              <IconCard
                Icon={LucideCheckCircle}
                title={svc.name}
                titleClassName="text-center text-gray-900 dark:text-white/70 text-md"
                className="text-center rounded-full shadow-none "
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-10">
          <div>
          <SectionTitle
            className="text-left"
            title="Our Design Process"
            titleClassName="!text-xl"
          />
          <div className="flex flex-col gap-4">
            <IconCard
              className="justify-start items-start"
              Icon={() => (
                <span className="bg-primary text-white size-5 text-xs rounded-full flex justify-center items-center font-extrabold">
                  1
                </span>
              )}
              title="Concept Development"
              titleClassName="text-xs mb-0 text-wrap"
             
              description="We begin by understanding your needs, goals, and
                target audience"
            />
            <IconCard
              className="justify-start items-start"
              Icon={() => (
                <span className="bg-primary text-white size-5 text-xs rounded-full flex justify-center items-center font-extrabold">
                  2
                </span>
              )}
              title="Concept Development"
              titleClassName="text-xs mb-0 text-wrap"
             
              description="Our team brainstorms and sketches initial
                ideas"
            />

            <IconCard
              className="justify-start items-start"
              Icon={() => (
                <span className="bg-primary text-white size-5 text-xs rounded-full flex justify-center items-center font-extrabold">
                  3
                </span>
              )}
              title="Design Creation"
              titleClassName="text-xs mb-0 text-wrap"
             
              description="We develop digital drafts and present them for
                your feedback"
            />
            <IconCard
              className="justify-start items-start"
              Icon={() => (
                <span className="bg-primary text-white size-5 text-xs rounded-full flex justify-center items-center font-extrabold">
                  4
                </span>
              )}
              title="Refinement"
              titleClassName="text-xs mb-0 text-wrap"
             
              description="Based on your input, we refine the designs to align
                with your vision"
            />
            <IconCard
              className="justify-start items-start"
              Icon={() => (
                <span className="bg-primary text-white size-5 text-xs rounded-full flex justify-center items-center font-extrabold">
                  5
                </span>
              )}
              title="Finalization"
              titleClassName="text-xs mb-0 text-wrap"
             
              description="Once approved, we prepare the final designs for
              delivery."
            />
          </div>
          </div>
         <div>
         <SectionTitle
            className="text-left"
            title="Why Choose Us?"
            titleClassName="!text-xl"
          />
          <div className="flex flex-col gap-4">
            <IconCard
              className="justify-start items-start border-primary border-l-2"
              Icon={LucideActivity}
              title="Expertise"
              titleClassName="text-xs mb-0 text-wrap"
              
              description="Our team consists of experienced designers with a keen eye for detail."
            />
            <IconCard
              className="justify-start items-start border-primary border-l-2"
              Icon={LucideCog}
              title="Customization"
              titleClassName="text-xs mb-0 text-wrap"
              
              description="We tailor each project to fit your unique brand identity."
            />
            <IconCard
              className="justify-start items-start border-primary border-l-2"
              Icon={LucideHandshake}
              title="Collaboration"
              titleClassName="text-xs mb-0 text-wrap"
              
              description="We believe in a collaborative approach, keeping you involved throughout the process."
            />
            <IconCard
              className="justify-start items-start border-primary border-l-2"
              Icon={LucideClock}
              title="Timely Delivery"
              titleClassName="text-xs mb-0 text-wrap"
              
              description="We respect deadlines and ensure timely project completion."
            />
            </div>
         </div>
        </div>
      </ServiceContentWrapper>
    </Fragment>
  );
}

export default GraphicsDesignPage;
