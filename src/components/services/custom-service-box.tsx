import React from "react";
import { cn } from "@/lib/utils";
import { LucideBadgeCheck } from "lucide-react";

function CustomServiceBox({
  className,
  serviceName,
  serviceDesc,
  Icon = LucideBadgeCheck,
}: {
  className?: string;
  serviceName: string;
  serviceDesc?: string;
  Icon?: React.ComponentType<any>;
}) {
  return (
    <div
      className={cn(
        "flow-root rounded-lg bg-gray-50 dark:bg-gray-50/10 px-6 pb-8 h-full",
        className
      )}
    >
      <div className="-mt-6 h-full w-full">
        <span className="inline-flex items-center justify-center rounded-md bg-primary dark:bg-white/10 p-3 shadow-lg">
          <Icon className="h-6 w-6 text-white" aria-hidden="true" />
        </span>
        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
          {serviceName}
        </h3>
        {serviceDesc && (
          <p className="mt-5 text-base text-gray-500">{serviceDesc}</p>
        )}
      </div>
    </div>
  );
}

export default CustomServiceBox;
