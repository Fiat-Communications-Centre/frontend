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
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
    routes: [
      {
        title: "Service 1",
        href: "/services/service-1",
        description: "Service-1",
      },
      {
        title: "Service 2",
        href: "/services/service-2",
        description: "Service-2",
      },
      {
        title: "Service 3",
        href: "/services/service-3",
        description: "Service-3",
      },
      {
        title: "Service 4",
        href: "/services/service-4",
        description: "Service-4",
      },
      {
        title: "Service 5",
        href: "/services/service-5",
        description: "Service-5",
      },
      {
        title: "Service 6",
        href: "/services/service-6",
        description: "Service-6",
      },
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
