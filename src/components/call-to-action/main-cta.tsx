import { cn } from "@/lib/utils";
import { LucideHelpCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import ContactBox from "../contact/contact-box";

interface MainCTAProps {
  className?: string;
  title: string;
  imageUrl: string;
  description: string;
}

function MainCTA({ title, description, imageUrl, className }: MainCTAProps) {
  return (
    <div className={cn(`relative items-center overflow-hidden`, className)}>
      <div className="absolute inset-0 w-full h-full before:absolute before:inset-0 before:w-full before:h-full before:bg-black/30 before:dark:bg-black/80 before:z-[1]">
        <Image
          src={imageUrl}
          width={1920}
          height={880}
          className="w-full h-full object-cover"
          alt="image"
          priority
          quality={100}
        />
      </div>

      <div className="static container max-w-5xl m-auto py-28 px-5 z-20">
        <div className="relative text-center z-[2]">
          <h1 className="font-bold leading-7 mb-2.5 text-primary text-2xl md:text-4xl xl:text-5xl text-white capitalize">
            {title}
          </h1>
          <p className="mb-6 pb-6 border-b border-dashed border-white/30 text-lg">
            {description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContactBox
              link="/contact"
              className="bg-white dark:bg-white/10"
              icon={<LucideHelpCircle className="h-full w-full" />}
              title="General Enquires"
            >
              <p>
                Phone:+254-745-757-894
                <br /> Email: info@fiatcommunicationscentre.com
              </p>
            </ContactBox>
            <ContactBox
              link="/contact"
              className="bg-white dark:bg-white/10"
              icon={<LucideHelpCircle className="h-full w-full" />}
              title="Address"
            >
              <p>
                P. O. Box 21031-00505 <br /> Ngong Rd, Nairobi
              </p>
            </ContactBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCTA;
