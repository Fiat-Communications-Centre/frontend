import ComingSoon from "@/components/coming-soon";
import PageHeader from "@/components/header/page-header";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Fiat Communications Centre - About",
  description: "Unparalleled Quality Communication",
};

export default function AboutPage() {
  return (
    <Fragment>
      <PageHeader
        title="About Us"
        breadcrumbItems={[{ title: "About Us", href: "/about" }]}
      />
      <section className="flex-1 relative p-10">
        <ComingSoon className="min-h-96" />
      </section>
    </Fragment>
  );
}
