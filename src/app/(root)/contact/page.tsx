import ComingSoon from "@/components/coming-soon";
import PageHeader from "@/components/header/page-header";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Fiat Communications Centre - Contact",
  description: "Unparalleled Quality Communication",
};

export default function ContactPage() {
  return (
    <Fragment>
      <PageHeader
        title="Contact Us"
        breadcrumbItems={[{ title: "Contact Us", href: "/contact" }]}
      />
      <section className="flex-1 relative p-10">
        <ComingSoon className="min-h-96" />
      </section>
    </Fragment>
  );
}
