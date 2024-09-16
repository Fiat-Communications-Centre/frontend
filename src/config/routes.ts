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
      {
        title: "Audiovisual Productions",
        href: "/services/audiovisual-productions",
        description:
          "Professional audiovisual content creation and production.",
      },
      {
        title: "Graphics Design",
        href: "/services/graphics-design",
        description: "Creative and impactful graphic design solutions.",
      },
      {
        title: "Web & Mobile Development",
        href: "/services/web-mobile-development",
        description: "Cutting-edge web and mobile application development.",
      },
      {
        title: "Strategic Organizations Communication",
        href: "/services/organization-communications",
        description:
          "Comprehensive communication strategies for organizations.",
      },
      {
        title: "Trainings",
        href: "/services/trainings",
        description: "Expert-led training sessions tailored to your needs.",
      },
      {
        title: "Consultancy Services",
        href: "/services/consultancy",
        description: "Professional advice and solutions for business growth.",
      },
      {
        title: "Research",
        href: "/services/research",
        description:
          "In-depth research services to inform strategic decisions.",
      },
      {
        title: "Advertising & Promotions",
        href: "/services/advertising-promotions",
        description: "Effective advertising and promotional strategies.",
      },
      {
        title: "Religious Organization Databases",
        href: "/services/religious-organizations-databases",
        description: "Custom database solutions for religious organizations.",
      },
      {
        title: "Crisis Communication Plan",
        href: "/services/crisis-communication-plan",
        description: "Developing robust plans to manage crisis communication.",
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
