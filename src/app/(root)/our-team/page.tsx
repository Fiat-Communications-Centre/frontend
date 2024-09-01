import ComingSoon from "@/components/coming-soon";
import PageHeader from "@/components/header/page-header";
import { Metadata } from "next";
import { Fragment } from "react";

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
       <section className="flex-1 relative p-10">
        <ComingSoon className="min-h-96" />
      </section>
    </Fragment>
  );
}
