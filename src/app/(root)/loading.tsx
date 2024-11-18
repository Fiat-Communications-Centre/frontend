import SectionLoader from "@/components/shared/section-loader";
import React from "react";

function Loading() {
  return (
    <div className="flex-1 size-full flex justify-center items-center">
      <SectionLoader />
    </div>
  );
}

export default Loading;
