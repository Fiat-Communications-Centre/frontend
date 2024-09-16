import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface ContactBoxProps {
  icon: React.ReactElement;
  title: string;
  className?: string;
  children: React.ReactNode;
  link: string;
}

function ContactBox({
  icon,
  link,
  title,
  children,
  className,
}: ContactBoxProps) {
  return (
    <Link
      href={link}
      className={cn(
        `text-left relative py-5 px-7 rounded-lg border border-solid border-black/10`,
        className
      )}
    >
      <div className="absolute left-6 size-10 bg-primary text-primary-foreground m-auto rounded-full leading-10">
        {icon}
      </div>
      <div className="relative ml-14">
        <h3 className="text-lg leading-6 mb-1 font-bold text-primary">
          {title}
        </h3>
        {children}
      </div>
    </Link>
  );
}

export default ContactBox;
