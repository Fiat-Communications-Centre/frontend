import React from "react";
import SectionTitle from "../shared/section-title";
import Link from "next/link";
import Image from "next/image";
import {
  LucideCog,
  LucideGlobe,
  LucideHelpCircle,
} from "lucide-react";
import IconCard from "../shared/icon-card";

function IntroductionTwo() {
  return (

    <div className="w-full grid grid-cols-12">
      <div className="lg:col-span-6 col-span-12">
        <div className="relative space-y-4">
          <SectionTitle
            className="text-left"
            title="FIAT Communications & Consultancy Centre"
            subTitle="Who We Are"
            description="Unparalleled Quality Communication (Colossians 4:6)"
            descriptionClassName="text-lg italic font-semibold text-gray-400"
          />
          <div className="flex justify-start items-center space-x-3 py-2 px-6 rounded-full ring-1 ring-primary w-max">
            <LucideGlobe size={64} className="text-primary" />
            <h2 className="font-bold">
              Since 2013, <br /> Kenya, Uganda, Tanzania, and USA
            </h2>
          </div>

          <p>
            FIAT Communications & Consultancy Centre was conceived in the
            visionary minds of its founders back in 2013. The founders were
            motivated by an irresistible urge to respond to the communication
            and pastoral needs of the local and global Church by providing
            Unparalled Quality Communication (Colossians 4:6).
          </p>
          <p>
            The seeds of this innovative venture were sown with the aim of
            revolutionizing the communication landscape and providing
            unparalleled services to individuals and corporates alike. After
            years of meticulous planning, strategizing, and refining their
            vision and mission, FIAT Communications & Consultancy Centre reached
            a significant milestone in 2023 when it was officially launched
          </p>

          <div className="grid  gap-4 grid-cols-2">
            <Link href={"/services"}>
              <IconCard
                className="py-0 shadow-sm border-t-4 rounded-none hover:shadow-lg hover:border-t-primary"
                Icon={() => <LucideCog />}
                title="Services"
                titleClassName="text-md sm:text-xl"
              />
            </Link>
            <Link href={"/contact"}>
              <IconCard
                className="py-0 shadow-sm border-t-4 rounded-none hover:shadow-lg hover:border-t-primary"
                Icon={() => <LucideHelpCircle />}
                title="Contact Us"
                titleClassName="text-md sm:text-xl"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:col-span-6 col-span-12">
        <div className="relative block mb-24">
          <div className="relative m-auto w-full h-full lg:w-[500px] lg:h-[550px] rounded-lg overflow-hidden shadow-lg">
            <Image
              width={700}
              height={700}
              src="/assets/images/about/about-5.jpg"
              className="w-full h-full object-cover"
              alt="image"
            />
          </div>
          <div className="relative max-lg:m-auto w-full h-full border-2 border-primary dark:border-white/10 rounded-lg overflow-hidden shadow-lg mt-5 sm:absolute sm:-bottom-14 max-lg:left-0 sm:right-0 sm:w-60 sm:h-60 lg:-right-0">
            <Image
              width={600}
              height={600}
              src="/assets/images/projects/project-detail-img-2.jpg"
              className="w-full h-full object-cover"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroductionTwo;
