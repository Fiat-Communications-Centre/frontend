import ComingSoon from "@/components/coming-soon";
import PageHeader from "@/components/header/page-header";
import SectionTitle from "@/components/shared/section-title";
import TeamList from "@/components/team/team-list";
import { Metadata } from "next";
import { Fragment } from "react";
import VisionMission from "../about/partials/vision-mission";

export const metadata: Metadata = {
  title: "Fiat Communications Centre - Our Team",
  description: "Unparalleled Quality Communication",
};

export default function OurTeamPage() {
  return (
    <Fragment>
      <PageHeader
        title="Our Team"
        breadcrumbItems={[{ title: "Our Team", href: "/our-team" }]}
      />
      <section className="relative py-20">
        <SectionTitle
          className="container mx-auto mb-5"
          title="Our Foundation & Future"
          titleClassName="capitalize"
          subTitle="Mission, Vision & Values"
        />
        <div className="container mx-auto">
          <VisionMission />
        </div>
      </section>
       <section className="flex-1 relative bg-white dark:bg-white/10  py-32 space-y-10 ">
        <SectionTitle
          className="relative container mx-auto "
          titleClassName="text-primary"
          title="Passionate Personalities, Versatile Brains"
          subTitle="Team Member"
        />
        <TeamList />
      </section>
      
    </Fragment>
  );
}
