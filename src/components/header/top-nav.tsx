import { cn } from "@/lib/utils";
import { LucideMail, LucideMapPin } from "lucide-react";
import React from "react";

interface TopNavProps {
  className?: string;
}

function TopNav({ className }: TopNavProps) {
  return (
    <section
      className={cn(
        `w-full flex flex-col md:flex-row justify-between items-center py-2 px-4 `,
        className
      )}
    >
      <div className="w-full md:w-auto px-4 py-2 flex max-md:flex-col max-md:space-y-2 justify-center md:justify-start items-center space-x-2 md:space-x-4 ">
        <div className="flex items-center space-x-2">
          <LucideMapPin size={16} />
          <span className="text-xs sm:text-sm md:text-base">
            P. O. Box 21031-00505 Ngong Rd, Nairobi
          </span>
        </div>
      </div>
      <div className="w-full md:w-auto p-2 flex justify-center md:justify-end items-center md:space-x-4 ">
        <div className=" flex items-center space-x-2">
          <LucideMail size={16} />
          <span className="text-xs sm:text-sm md:text-base">
            info@fiatcommunicationscentre.com
          </span>
        </div>
      </div>
    </section>
  );
}

export default TopNav;
