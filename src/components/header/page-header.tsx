import { Slash } from "lucide-react";
import React, { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

interface PageHeaderProps {
  title: string;
  backgroundImageUrl?: string;
  breadcrumbItems?: {
    title: string;
    href: string;
  }[];
}
function PageHeader({
  title,
  backgroundImageUrl = "/testimonials.jpg",
  breadcrumbItems,
}: PageHeaderProps) {
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
              <div className="text-4xl md:text-6xl lg:text-8xl text-white">
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
                  {breadcrumbItems.map((item) => (
                    <Fragment key={item.title}>
                      <BreadcrumbSeparator>
                        <Slash />
                      </BreadcrumbSeparator>

                      <BreadcrumbItem className="font-semibold uppercase  ">
                        <BreadcrumbLink
                          href={item.href}
                          className="text-gray-400 hover:text-white/80 last:!text-white"
                        >
                          {item.title}
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
