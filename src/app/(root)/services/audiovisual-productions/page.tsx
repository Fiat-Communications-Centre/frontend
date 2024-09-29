import PageHeader from "@/components/header/page-header";
import CustomServiceBox from "@/components/services/custom-service-box";
import ServiceContentWrapper from "@/components/services/service-content-wrapper";
import IconCard from "@/components/shared/icon-card";
import SectionTitle from "@/components/shared/section-title";
import { LucideCog, LucideSpeaker, LucideUsers } from "lucide-react";
import { Metadata } from "next";
import React, { Fragment } from "react";

const audiovisualProductionsServices = [
  {
    name: "Promotional Videos",
    description:
      "Elevate your marketing campaigns with creative and engaging promotional content that captures your audience's attention.",
  },
  {
    name: "Event Coverage",
    description:
      "Capture live events, conferences, and performances with high-quality production, ensuring every important moment is documented.",
  },
  {
    name: "Documentary Films",
    description:
      "We bring your stories to life with powerful, narrative-driven documentaries that inform, inspire, and engage audiences.",
  },
  {
    name: "Post-Production Services",
    description:
      "From video editing to sound design and color grading, our post-production team ensures your content is polished and ready for distribution.",
  },
  {
    name: "Corporate Videos",
    description:
      "Deliver polished and professional videos that reflect your brand's identity and values, ideal for corporate communications, presentations, and internal training.",
  },
];

export const metadata: Metadata = {
  title: "Audiovisual Productions - FIAT Communications & Consultancy Centre",
  description: "We specialize in crafting visually stunning and emotionally compelling audiovisual content that resonates with your audience.",
};

function AudiovisualProductionsPage() {
  return (
    <Fragment>
      <PageHeader
        title="Audiovisual Productions"
        breadcrumbItems={[
          { title: "Services", href: "/services" },
          {
            title: "Audiovisual Productions",
            href: "/services/audiovisual-productions",
          },
        ]}
      />
      <ServiceContentWrapper className="max-w-7xl">
        <SectionTitle
          title="Audiovisual Productions"
          description="We specialize in crafting visually stunning and emotionally compelling audiovisual content that resonates with your audience."
        />
        <div className="w-full grid grid-cols-12 gap-8 px-4">
          <div className="sm:col-span-6 md:col-span-4  col-span-12 grid gap-4 ">
            <IconCard
              className="h-full py-4 shadow-xl border-t-4 rounded-2xl hover:shadow-lg hover:border-t-primary flex-col justify-center items-center"
              Icon={() => <LucideSpeaker className="size-8" />}
              title="Audio and Visual Equipment"
              description="High-Quality cameras, lighting, and audio equipment for clarity and precision"
              titleClassName="text-md sm:text-xl text-center"
              descriptionClassName="text-center"
            />
          </div>
          <div className="sm:col-span-6 md:col-span-4  col-span-12">
          <IconCard
              className="h-full py-4 shadow-xl border-t-4 rounded-2xl hover:shadow-lg hover:border-t-primary flex-col justify-center items-center"
              Icon={() => <LucideUsers className="size-8" />}
              title="Experienced Creative Team"
              description="Our team of skilled directors, cinematographers, editors, and sound designers"
              titleClassName="text-md sm:text-xl text-center"
              descriptionClassName="text-center"
            />
          </div>
          <div className="sm:col-span-6 md:col-span-4 col-span-12">
          <IconCard
              className="h-full py-4 shadow-xl border-t-4 rounded-2xl hover:shadow-lg hover:border-t-primary flex-col justify-center items-center"
              Icon={() => <LucideCog className="size-8" />}
              title="End-to-End Custom Solutions"
              description="We offer a fully customized approach to ensure the final product reflects your vision and meets your goals"
              titleClassName="text-md sm:text-xl text-center"
              descriptionClassName="text-center"
            />
          </div>
        </div>

        <div className="my-12 px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
            {audiovisualProductionsServices.map((svc) => (
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

export default AudiovisualProductionsPage;
