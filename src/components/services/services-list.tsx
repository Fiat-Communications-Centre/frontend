import React from "react";
import ServiceBox from "./service-box";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/config/constants";

function ServicesList({
  className,
  services = SERVICES,
  featuredOnly = false,
}: {
  className?: string;
  services?: typeof SERVICES;
  featuredOnly?: boolean;
}) {
  return (
    <div className={cn("grid grid-cols-12 gap-4 gap-y-8 md:gap-8", className)}>
      {services
        .filter((x) => (featuredOnly ? x.featured === true : true))
        .map((item) => (
          <div
            key={item.title}
            className="!h-full lg:col-span-4 sm:col-span-6 col-span-12"
          >
            <ServiceBox
              title={item.title}
              href={item.href}
              description={item.description}
            />
          </div>
        ))}
    </div>
  );
}

export default ServicesList;
