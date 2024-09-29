import React, { Fragment } from "react";
import ServiceBox from "./service-box";
import { SERVICES } from "@/config/constants";
import MainCTA from "../call-to-action/main-cta";
import { cn } from "@/lib/utils";

function ServiceContentWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Fragment>
      <section className={cn("container mx-auto max-w-6xl ", className)}>
        <div className="flex flex-col xl:flex-row justify-start gap-4">
          <aside className="order-2 xl:order-1 w-full xl:max-w-sm px-4 py-2">
            <h2 className="mb-5 font-bold text-lg text-center uppercase bg-white dark:bg-white/10 py-3">
              Our Services
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {SERVICES.map((item) => (
                <ServiceBox
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  description={item.description}
                  className="border-none mb-0 text-left"
                  hide={[
                    "description",
                    "read-more",
                    "icon",
                    "image",
                    "overlay",
                  ]}
                  contentClassName="border-none !px-4 !py-2 mb-0 text-left bg-gray-50 hover:shadow-sm hover:bg-gray-100 rounded dark:bg-white/5 dark:hover:bg-white/10"
                />
              ))}
            </div>
          </aside>
          <div className="flex-1 order-1 xl:order-2 py-10">{children}</div>
        </div>
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

export default ServiceContentWrapper;
