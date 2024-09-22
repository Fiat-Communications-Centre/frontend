import { buttonVariants } from "@/components/ui/button";
import {
  LucideArrowRight,
  LucideBadgeHelp,
  LucideChevronRight,
  LucideCog,
  LucideInfo,
  LucideRss,
} from "lucide-react";
import Link from "next/link";

const links = [
  {
    title: "About Us",
    description:
      "Discover our mission, values, and expertise in delivering exceptional services",
    href: "/about",
    icon: LucideInfo,
  },
  {
    title: "Services",
    description:
      "Explore the comprehensive range of services we offer to meet your unique needs.",
    href: "/services",
    icon: LucideCog,
  },
  {
    title: "Research",
    description:
      "Submit your research projects and let us help you bring them to life.",
    href: "/research",
    icon: LucideBadgeHelp,
  },
  {
    title: "Blog",
    description: "Read our latest news and articles",
    href: "/blog",
    icon: LucideRss,
  },
];

export default function NotFoundPag() {
  return (
    <div className="bg-white dark:bg-white/10 h-screen overflow-hidden overflow-y-scroll">
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto py-16 sm:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-5xl">
              This page does not exist.
            </h1>
            <p className="mt-2 text-lg text-gray-500 ">
              The page you are looking for could not be found.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
              Popular pages
            </h2>
            <ul
              role="list"
              className="mt-4 border-t border-b border-gray-200 dark:border-gray-200/10 divide-y divide-gray-200 dark:divide-gray-50/10"
            >
              {links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="relative py-6 flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50 dark:bg-white/10 ">
                      <link.icon
                        className="h-6 w-6 text-primary dark:text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-medium text-gray-900 dark:text-white">
                      <span className="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                        <Link href={link.href} className="focus:outline-none">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {link.title}
                        </Link>
                      </span>
                    </h3>
                    <p className="text-base text-gray-500">
                      {link.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <LucideChevronRight
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <Link
                href="/"
                className={buttonVariants({
                  className:
                    "m-auto text-base font-medium text-primary hover:text-primary dark:bg-white/10 uppercase",
                })}
              >
                Or go back home
                <span aria-hidden="true">
                  <LucideArrowRight className="size-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
