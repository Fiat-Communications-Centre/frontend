import PageHeader from "@/components/header/page-header";
import ServiceContentWrapper from "@/components/services/service-content-wrapper";
import SectionTitle from "@/components/shared/section-title";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Metadata } from "next";
import Image from "next/image";
import React, { Fragment } from "react";

export const metadata: Metadata = {
  title: "Crisis Communication Plan - FIAT Communications & Consultancy Centre",
  description:
    "Revolutionize Parish Data Management with FIAT Communications & Consultancy Centre",
  openGraph: {
    type: "website",
    url: `${process.env.CLIENT_BASE_URL}/services/religious-organizations-database"`,
  },
};

function CrisisCommunicationPlanPage() {
  return (
    <Fragment>
      <PageHeader
        title="Crisis Communication Plan"
        breadcrumbItems={[
          { title: "Services", href: "/services" },
          {
            title: "Crisis Communication Plan",
            href: "/services/crisis-communication-plan",
          },
        ]}
      />
      <ServiceContentWrapper className="px-4">
        <SectionTitle
          title="Crisis Communication Plan"
          description="Creative and impactful graphic design solutions to elevate your brand's visual identity."
        />
        <p className="text-lg mb-4 leading-6">
          In a world where unexpected challenges can arise, having a
          well-crafted Crisis Communication Plan (CCP) is like having a trusted
          guide by your side. At FIAT Communications & Consultancy Centre, we
          specialize in creating CCPs that ensure you&apos;re ready to navigate
          any storm with confidence.
        </p>
        <p className="text-lg mb-4 leading-6">
          Life is full of surprises, some less pleasant than others. That&apos;s
          where our Crisis Communication Plans step in - as your reliable
          companion through unforeseen circumstances. We understand that
          challenges can happen when you least expect them, and having a solid
          CCP can make all the difference in how you weather the storm.
        </p>

        <div className="w-full relative flex flex-col md:flex-row xl:flex-col gap-4">
          <AspectRatio className="relative max-h-96 flex justify-center items-center" ratio={16/9}>
            <Image
              width={1000}
              height={512}
              src={"/crisis.jpg"}
              alt="Crisis Plan"
              quality={100}
              className="w-full h-full object-cover rounded-lg "
            />
          </AspectRatio>

          <div className="flex-1 md:min-w-80">
            <p className="text-lg mb-4 leading-6">
              Think of our CCPs as your shield in times of uncertainty - a
              shield that not only protects your reputation but also strengthens
              your bonds with those who matter most. With FIAT Communications &
              Consultancy Centre at your side, you&apos;re not facing challenges
              alone. Together, we&apos;ll navigate the unknown and emerge even
              stronger.
            </p>

            <p className="text-lg mb-4 leading-6">
              Reach out to us today to fortify your organization&apos;s
              communication strategies and face uncertainties with resilience
              and authenticity.
            </p>
          </div>
        </div>
      </ServiceContentWrapper>
    </Fragment>
  );
}

export default CrisisCommunicationPlanPage;
