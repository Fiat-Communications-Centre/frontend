import ComingSoon from "@/components/coming-soon";
import { HeroCarousel } from "@/components/hero/hero-carousel";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <section className="relative min-h-screen flex justify-center items-center">
        <div className="absolute inset-0 -z-10 bg-[#282f3b]/90 dark:bg-black/10"></div>
        <HeroCarousel className="py-24" />
      </section>
      <section className="flex-1 relative p-10">
        <ComingSoon className="min-h-96" />
      </section>
    </Fragment>
  );
}
