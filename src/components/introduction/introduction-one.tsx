import React from "react";
import SectionTitle from "../shared/section-title";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Image from "next/image";

function IntroductionOne() {
  return (
    <div className="grid grid-cols-12">
      <div className="lg:col-span-6 col-span-12 mb-5 lg:mb-5 xl:mb-0">
        <div className="relative block mb-24">
          <div className="relative m-auto w-full h-full lg:w-[500px] lg:h-[550px] rounded-lg overflow-hidden shadow-lg">
            <Image
              width={700}
              height={700}
              src="/main.jpg"
              className="w-full h-full object-cover"
              alt="image"
            />
          </div>
          <div className="relative max-lg:m-auto w-full h-full border-2 border-primary dark:border-white/10 rounded-lg overflow-hidden shadow-lg mt-5 sm:absolute sm:-bottom-14 max-lg:left-0 sm:right-0 sm:w-60 sm:h-60 lg:-right-0">
            <Image
              width={600}
              height={600}
              src="/business-up.jpg"
              className="w-full h-full object-cover"
              alt="image"
            />
          </div>
        </div>
      </div>
      <div className="lg:col-span-6 col-span-12 sm:pl-10">
        <div className="max-sm:px-4 sm:pl-5 flex flex-col">
          <SectionTitle
            className="mb-5 justify-start text-left"
            title="Hinged on Colossians 4:6"
            subTitle="A Gist About Us"
            description="FIAT Communications & Consultancy Centre is a one-stop, state-of-the art entity whose aim is to provide stellar customized service to individuals or Corporates in areas not limited to communication, research, business, consultancies and marketing."
          />

          <div className="relative ">
            <div className="relative border max-sm:py-12 max-sm:mt-12 sm:py-5 max-sm:px-8 sm:pr-10 rounded-md sm:rounded-[120px] min-h-[100px]">
              <div className="absolute max-sm:top-0 max-sm:left-1/2 max-sm:-translate-y-1/2 max-sm:-translate-x-1/2 border sm:left-5 sm:top-0 sm:bottom-0 w-20 h-20 m-auto rounded-full flex justify-center items-center ">
                <Image
                  width={80}
                  height={80}
                  src="/assets/images/authour-image.png"
                  className="rounded-full w-20 h-20"
                  alt="authour Image"
                />
              </div>
              <div className="relative sm:ml-[120px]">
                <h6 className="mb-1 font-semibold text-[18px] leading-6 text-primary">
                  Founder/CEO of FIAT Communications & Consultancy Centre
                </h6>
                <p className="m-0 font-normal text-sm leading-6">
                  Our commitment to quality and tailored solutions has helped
                  numerous businesses achieve their goals. Let us help you
                  elevate your business
                </p>
              </div>
            </div>
          </div>

          <div className="relative my-5">
            <p>Our expert team is here to help you navigate the complexities of today&apos;s business environment with customized services designed to fit your unique needs.</p>
          </div>

          <div className="relative space-x-2">
            <Link
              href="/about"
             
              rel="nofollow"
              className={buttonVariants({
                variant: "outline",
                className: "min-h-14 min-w-40 uppercase ",
              })}
            >
              About Us
            </Link>
            <Link
              href="/services"
              
              rel="nofollow"
              className={buttonVariants({
                variant: "default",
                className: "min-h-14 min-w-40 uppercase ",
              })}
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroductionOne;
