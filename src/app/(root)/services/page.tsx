import ComingSoon from "@/components/coming-soon";
import PageHeader from "@/components/header/page-header";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Fiat Communications Centre - Services",
  description: "Unparalleled Quality Communication",
};

export default function ServicesPage() {
  return (
    <Fragment>
      <PageHeader
        title="Our Services"
        breadcrumbItems={[{ title: "Our Services", href: "/services" }]}
      />
      <section className="flex-1 relative p-10">
        <ComingSoon className="min-h-96" />
      </section>
    </Fragment>
  );
}
