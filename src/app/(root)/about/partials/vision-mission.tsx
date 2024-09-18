import IconCard from "@/components/shared/icon-card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import {
  LucideBuilding2,
  LucideCircle,
  LucideGoal,
  LucideHeartPulse,
} from "lucide-react";
import Image from "next/image";
import React from "react";

function VisionMission() {
  return (
    <div className="w-full grid grid-cols-12 gap-8">
      <div className="xl:col-span-4  lg:col-span-6 col-span-12 grid gap-4 ">
        <div className="w-full lg:max-w-[370px] m-auto  h-full flex flex-col gap-4 justify-center items-center sm:flex-row lg:flex-col">
          <AspectRatio
            ratio={16 / 9}
            className="size-full md:max-w-[370px] rounded-xl"
          >
            <Image
              width={300}
              height={300}
              src={"/hero-main.jpg"}
              className="w-full h-full object-cover object-center rounded-xl shadow-2xl"
              alt="Mission"
            />
          </AspectRatio>

          <IconCard
            className="h-full py-4 shadow-2xl border-t-4 rounded-2xl hover:shadow-lg hover:border-t-primary flex-col justify-center items-center"
            Icon={() => <LucideBuilding2 className="size-8" />}
            title="Mission"
            description="To give visibility (develop) individuals and Corporates through the social communication ministry."
            titleClassName="text-md sm:text-xl text-center"
            descriptionClassName="text-center"
          />
        </div>
      </div>
      <div className="xl:col-span-4  lg:col-span-6 col-span-12">
        <IconCard
          className="h-full py-4 shadow-xl border-b-4 rounded-2xl hover:shadow-lg hover:border-b-primary flex-col justify-center items-center"
          Icon={() => <LucideHeartPulse className="size-8" />}
          title="Our Core Values"
          description="A reliable unparalleled Centre for diverse Quality Communication"
          titleClassName="text-md sm:text-xl text-center"
          descriptionClassName="text-center"
        >
          <div className="flex flex-col space-y-2 text-black dark:text-gray-500">
            <div className="px-2 py-2 flex justify-start space-x-2 items-center">
              <LucideCircle className="size-5" />
              <span>Dedication</span>
            </div>
            <div className="px-2 py-2 flex justify-start space-x-2 items-center">
              <LucideCircle className="size-5" />{" "}
              <span>Expertise</span>
            </div>
            <div className="px-2 py-2 flex justify-start space-x-2 items-center">
              <LucideCircle className="size-5" /> <span>Integrity</span>
            </div>
            <div className="px-2 py-2 flex justify-start space-x-2 items-center">
              <LucideCircle className="size-5" /> <span>Innovation</span>
            </div>
            <div className="px-2 py-2 flex justify-start space-x-2 items-center">
              <LucideCircle className="size-5" /> <span>Customer-Centric</span>
            </div>
            <div className="px-2 py-2 flex justify-start space-x-2 items-center">
              <LucideCircle className="size-5" /> <span>Collaboration</span>
            </div>
          </div>
        </IconCard>
      </div>
      <div className="xl:col-span-4 col-span-12">
        <div className="w-full xl:max-w-[370px] m-auto  h-full grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          <IconCard
            className="h-full py-4 shadow-xl border-t-4 rounded-2xl hover:shadow-lg hover:border-t-primary flex-col justify-center items-center"
            Icon={() => <LucideGoal className="size-8" />}
            title="Vision"
            description="A reliable unparalleled Centre for diverse Quality Communication"
            titleClassName="text-md sm:text-xl text-center"
            descriptionClassName="text-center"
          />

          <AspectRatio
            ratio={16 / 9}
            className="size-full rounded-xl"
          >
            <Image
              width={300}
              height={300}
              src={"/hero-main.jpg"}
              className="w-full h-full object-cover object-center rounded-xl shadow-2xl"
              alt="Mission"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
}

export default VisionMission;
