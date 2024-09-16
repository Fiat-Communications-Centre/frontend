import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import UserBox from "../shared/user-box";
import { cn } from "@/lib/utils";

interface DefaultTestimonialProps {
  className?: string;
}
function DefaultTestimonial({ className }: DefaultTestimonialProps) {
  return (
    <Card className={cn("w-full h-full", className)}>
      <CardContent className="py-3 px-4 sm:px-6 md:py-6">
        <blockquote className="mt-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita
          voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum
          sed rerum et corporis.
        </blockquote>
      </CardContent>

      <CardFooter className="flex justify-end">
        <UserBox
          user={{
            name: "Judith Black",
            role: " CEO, Tuple",
            avatar:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            avatarFallback: "JB",
          }}
        />
      </CardFooter>
    </Card>
  );
}

export default DefaultTestimonial;
