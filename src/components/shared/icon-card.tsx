import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface IconCardProps {
  Icon: React.ComponentType<any>;
  className?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

function IconCard({
  Icon,
  title,
  description,
  className,
  children,
}: IconCardProps) {
  return (
    <div
      className={cn(
        "w-full p-4 shadow-lg rounded-lg flex justify-start items-center space-x-2",
        className
      )}
    >
      <Icon />
      <Card className="bg-transparent border-none rounded-none shadow-none p-0">
        <CardHeader>
          <CardTitle className="text-primary text-2xl">{title}</CardTitle>
          {description && (
            <CardDescription className="text-base">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        {children && <CardContent>{children}</CardContent>}
      </Card>
    </div>
  );
}

export default IconCard;
