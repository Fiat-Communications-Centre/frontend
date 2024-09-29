import PageHeader from "@/components/header/page-header";
import IntroductionTwo from "@/components/introduction/introduction-two";
import { Metadata } from "next";
import { Fragment } from "react";
import VisionMission from "./partials/vision-mission";
import SectionTitle from "@/components/shared/section-title";
import CompanyHistoryCarousel from "./partials/company-history-carousel";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import TeamList from "@/components/team/team-list";

export const metadata: Metadata = {
  title: "FIAT Communications & Consultancy Centre - About",
  description: "Unparalleled Quality Communication",
};

export default function AboutPage() {
  return (
    <Fragment>
      <PageHeader
        title="About Us"
        breadcrumbItems={[{ title: "About Us", href: "/about" }]}
      />
      <section className="relative p-10">
        <div className="container mx-auto">
          <IntroductionTwo />
        </div>
      </section>
      <section className="relative py-20"  id="info">
        <SectionTitle
          className="container mx-auto mb-5"
          title="Our Foundation & Future"
          titleClassName="capitalize"
          subTitle="Mission, Vision & Values"
        />
        <div className="container mx-auto">
          <VisionMission />
        </div>
      </section>
      <section className="relative py-20">
        <SectionTitle
          className="container mx-auto mb-5"
          title="A Decade and a Half of Success"
          titleClassName="capitalize"
          subTitle="Every Step Matters"
        />
        <CompanyHistoryCarousel className="container mx-auto pl-4" />
      </section>

      <section className="bg-gray-50 dark:bg-white/10 py-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          <div className="space-y-2 px-4">
            <SectionTitle
              className="container mx-auto mb-5 text-left"
              title="in pursuit of excellence"
              titleClassName="capitalize"
              subTitle="Our Journey"
            />
            <article className="space-y-2">
              <p className="text-base leading-8">
                The journey from conception to fruition was filled with
                dedication, perseverance, and an unwavering commitment to
                excellence. The founders and the team at FIAT Communications &
                Consultancy Centre meticulously crafted a state-of-the-art
                entity that stands as a beacon of quality communication,
                research, business consultancy, and marketing services. With the
                official launch in 2023, FIAT Communications & Consultancy
                Centre stepped into the world with a mission to redefine the way
                organizations and individuals communicate and interact. As a
                one-stop destination for diverse communication needs, the centre
                offers a wide range of services, from graphic design and
                productions to web and mobile development, strategic
                organizational communication, research, training, and
                consultancy.
              </p>
              <p className="text-base leading-8">
                The official launch marked a significant turning point for the
                organization, as it now stands fully prepared to serve clients
                with personalized, stellar services that cater to their unique
                requirements. Building on the core principles of integrity,
                innovation, and customer-centricity, FIAT Communications &
                Consultancy Centre aims to forge long-lasting partnerships and
                contribute to the growth and success of her clients. With a team
                of experienced professionals and a passion for excellence who
                are based in Africa, Europe and the United States of America,
                FIAT Communications & Consultancy Centre is poised to leave an
                indelible mark in the industry. The journey from conception to
                the official launch is a testament to the company&apos;s
                unwavering commitment to its mission and the pursuit of
                excellence
              </p>
            </article>
          </div>
          <div className="space-y-2 px-4">
            <AspectRatio ratio={16 / 9} className="w-full">
              <iframe
                width="550"
                height="309"
                className="w-full h-full"
                src="https://www.youtube.com/embed/WjyR2RlFetI"
                title="FIAT Communications & Consultancy Centre"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </AspectRatio>

            <article>
              <p className="text-base leading-8">
                As FIAT Communications & Consultancy Centre continues to chart
                its course in the dynamic world of communication and business,
                it remains dedicated to staying at the forefront of technology
                and innovation. The official launch is just the beginning of an
                exciting adventure, as FIAT Communications & Consultancy Centre
                endeavors to make a meaningful impact on the lives of its
                clients and the communities it serves. With a clear vision, deep
                faith, strong values, and a steadfast commitment to continuous
                improvement, the future holds boundless possibilities for FIAT
                Communications & Consultancy Centre as it sets new benchmarks in
                the realm of communication excellence.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          <div className="space-y-2 px-4">
            <SectionTitle
              className="container mx-auto mb-5 text-left"
              title="Who Owns FIAT Communications & Consultancy Centre?"
              titleClassName="capitalize text-primary"
            />
            <article className="space-y-2">
              <p className="text-base leading-8">
                Hinged on Colossians 4:6, &ldquo;Unparalled Quality
                Communication,&rdquo; FIAT Communications & Consultancy Centre
                is a social communication ministry of the Sisters of Mary of
                Kakamega. It is a dynamic, one-stop state-of-the art entity that
                specializes in providing stellar customized communication and
                research services to develop individuals and corporates,
                blending professionalism with a missionary touch.
              </p>
              <p className="text-base leading-8">
                The Sisters of Mary of Kakamega (SMK) were founded in 1932 by a
                Mill Hill Missionary, Bishop Gorgonious Brandsma MHM. The SMK
                motto is to Love and to Serve. The &ldquo;love&rdquo; and
                &ldquo;serve&rdquo; is universal as Jesus teaches and commands.
                Currently SMK have communities and formation houses in Kenya and
                Uganda, and communities in Kenya, Uganda, Tanzania, and the
                United States of America. Founded on the spirit of Persevering
                Love and Service, the charism of the Sisters of Mary of Kakamega
                is sharing in the Redemptive Mission of Jesus Christ the Great
                Teacher (cf. Luke 4:31-32) and Healer (cf. Mark 10: 46-52).
              </p>
            </article>
          </div>
          <div className="space-y-2 flex">
            <AspectRatio ratio={4 / 3} className="w-full">
              <Image
                src="/smk.jpg"
                width={860}
                height={1152}
                className="w-full h-full object-cover object-center"
                alt="SMK"
              />
            </AspectRatio>
          </div>
        </div>
      </section>

      <section className="relative bg-white dark:bg-white/10  py-32 space-y-10 ">
        <SectionTitle
          className="relative container mx-auto "
          titleClassName="text-primary"
          title="Passionate Personalities, Versatile Brains"
          subTitle="Team Member"
        />
        <TeamList featuredOnly />
      </section>
    </Fragment>
  );
}
