import { Slash } from "lucide-react";
import React, { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  backgroundImageUrl?: string;
  breadcrumbItems?: ({
    title: string;
    href: string;
  } | null)[];
}
function PageHeader({
  title,
  backgroundImageUrl = "/testimonials.jpg",
  breadcrumbItems,
}: PageHeaderProps) {
  const items = breadcrumbItems?.filter((x) => x !== null);

  return (
    <div
      className={`relative max-md:min-h-[auto] min-h-80 py-24 overflow-hidden items-center bg-cover bg-center`}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 z-[1] bg-black/60 "> </div>
      <div className="relative z-[3] text-center">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center">
            <div className="relative mb-20">
              <div className="text-2xl md:text-4xl lg:text-6xl text-white">
                {title}
              </div>
            </div>

            {breadcrumbItems && (
              <Breadcrumb className="relative inline-block">
                <BreadcrumbList className="relative p-0 !m-auto flex flex-wrap">
                  <BreadcrumbItem className="font-semibold uppercase ">
                    <BreadcrumbLink
                      href="/"
                      className="text-gray-400 hover:text-white/80"
                    >
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {items?.map((item, index) => (
                    <Fragment key={item?.title}>
                      <BreadcrumbSeparator>
                        <Slash />
                      </BreadcrumbSeparator>

                      <BreadcrumbItem className="font-semibold capitalize text-gray-400 hover:text-white last:text-white ">
                        <BreadcrumbLink
                          href={item?.href}
                          className={cn(
                            "max-sm:text-xs text-gray-400 hover:text-white",
                            index === items.length - 1 ? "text-white" : ""
                          )}
                        >
                          {item?.title}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    </Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
