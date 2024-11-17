import LinkCardCTA from "@/components/call-to-action/link-card-cta";
import PageHeader from "@/components/header/page-header";
import ServiceContentWrapper from "@/components/services/service-content-wrapper";
import SectionTitle from "@/components/shared/section-title";
import { siteDetails } from "@/config/constants";
import { getPageSEO } from "@/lib/utils";
import { Metadata } from "next";
import React, { Fragment } from "react";

export const metadata: Metadata = getPageSEO({
  title: "Religious Organizations Database",
  keywords:
    "church management system, church website, church database, parish management system",
  url: "services/religious-organizations-database",
  description: `Revolutionize Church/Parish Data Management with ${siteDetails.name}`,
});

function ReligiousOrganizationsDatabasePage() {
  return (
    <Fragment>
      <PageHeader
        title="Religious Organizations Database"
        breadcrumbItems={[
          { title: "Services", href: "/services" },
          {
            title: "Religious Organizations Database",
            href: "/services/religious-organizations-database",
          },
        ]}
      />
      <ServiceContentWrapper className="px-4">
        <SectionTitle
          title="Religious Organizations Database"
          description="Custom Organizational Database Development"
        />
        <p className="text-lg leading-6 mb-4">
          Just like businesses, Religious organizations are consistently
          innovating and expanding their operations. In this dynamic realm,
          adapting to congregational needs is essential.
        </p>

        <p className="text-lg leading-6 mb-4">
          FIAT Communications & Consultancy Centre presents an all-encompassing
          solution for your digital parish, diocese, or congregation database
          development.{" "}
        </p>

        <p className="text-lg leading-6 mb-4">
          Our experts proficiently manage diverse databases—traditional (MySQL,
          Oracle, SQL Server) and unconventional (NoSQL).
        </p>

        <LinkCardCTA
          className="flex flex-col sm:flex-row my-2"
          title="Revolutionize Parish Data Management with FIAT Communications & Consultancy Centre"
          imageUrl="/databases.svg"
        >
          <p>
            <span className="px-2 py-2 text-gray-800 dark:text-gray-400">
              Parish
            </span>
            <span className="px-2 py-2 text-gray-800 dark:text-gray-400">
              {" "}
              Diocese
            </span>
            <span className="px-2 py-2 text-gray-800 dark:text-gray-400">
              Congregation Organizations
            </span>{" "}
          </p>
        </LinkCardCTA>

        <p className="text-lg leading-6 mb-4">
          Our services span database development, design, modeling, and
          administration, all executed meticulously.
        </p>

        <p className="text-lg leading-6 mb-4">
          Enhance your spiritual community with tailored database solutions. We
          specialize in optimizing workflows and illuminating insights from
          data.
        </p>
      </ServiceContentWrapper>
    </Fragment>
  );
}

export default ReligiousOrganizationsDatabasePage;
