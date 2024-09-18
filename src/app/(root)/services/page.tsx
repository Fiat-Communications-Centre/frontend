import MainCTA from "@/components/call-to-action/main-cta";
import ComingSoon from "@/components/coming-soon";
import PageHeader from "@/components/header/page-header";
import ServicesList from "@/components/services/services-list";
import SectionTitle from "@/components/shared/section-title";
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
     <section className="flex-1 relative px-10 py-10">
        <SectionTitle
          title="Our Areas of Expertise"
          subTitle="Trusted Solutions"
          description="Explore our wide range of services, tailored to meet your unique needs and drive success"
        />
        <ServicesList className="container mx-auto" />
      </section>
      <section className="w-full bg-accent/80 dark:bg-white/10">
        <MainCTA
          title="Do You Have a Project in Mind?"
          description="Embarking on a new project can be overwhelming, but you don't have to do it alone. At FIAT Communications & Consultancy Centre, we bring your vision to life with precision and passion."
          imageUrl="/spiral.jpg"
        />
      </section>
    </Fragment>
  );
}
