import { SERVICES } from "./constants";

export interface AppRoute {
  title: string;
  description?: string;
  href: string;
  className?: string;
  onClick?: () => void;
  routes?: AppRoute[];
}

export const MAIN_NAV_ROUTES: AppRoute[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
    routes: [
      {
        title: "All Services",
        href: "/services",
        description: "Explore the full range of our services.",
      },
      ...SERVICES
    ],
  },
  {
    title: "Research",
    href: "/research",
  },
  {
    title: "Our Team",
    href: "/our-team",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];
