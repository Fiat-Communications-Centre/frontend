"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import {
  LucideMenu,
  LucideX,
} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import TopNav from "./top-nav";
import { MAIN_NAV_ROUTES } from "@/config/routes";

interface MainNavProps {
  className?: string;
}
export function MobileMainNav({ className }: MainNavProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <section
      className={cn(
        "w-full flex justify-between items-center shadow-sm dark:shadow-md p-2 bg-white text-black dark:bg-black dark:text-gray-300 dark:shadow-white/10",
        className
      )}
    >
      <Image
        src={"/favicon.ico"}
        width={64}
        height={64}
        className="w-10 object-cover object-center"
        priority
        alt="Logo"
      />
      <Drawer
        open={open}
        direction="left"
        onClose={() => setOpen(false)}
        closeThreshold={50}
      >
        <DrawerTitle className="text-xs sm:text-sm md:text-base">
         FIAT Communications & Consultancy Centre
        </DrawerTitle>
        <DrawerDescription className="hidden">
         FIAT Communications & Consultancy Centre
        </DrawerDescription>
        <DrawerTrigger asChild>
          <Button
            variant={"link"}
            onClick={() => setOpen(true)}
            className={
              "px-0 bg-white text-black dark:bg-white/10 dark:text-gray-400 dark:hover:bg-white dark:hover:text-indigo-950"
            }
          >
            <LucideMenu className="size-10" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-full w-full overflow-hidden overflow-y-auto rounded-none max-w-sm bg-white dark:bg-black border-l-0 border-t-0 border-b-0 border-r-1 border-r-gray-500">
          <DrawerHeader className="flex justify-between items-center">
            <Image
              src={"/favicon.ico"}
              width={64}
              height={64}
              className="w-10 object-cover object-center"
              priority
              alt="Logo"
            />
            <DrawerClose
              asChild
              onClick={() => setOpen(false)}
              className="cursor-pointer bg-white text-gray-500 dark:bg-white/10 dark:text-gray-500 dark:border border-gray-500 rounded-sm"
            >
              <LucideX className="size-8" />
            </DrawerClose>
          </DrawerHeader>

          <div className="relative w-full flex-1 flex flex-col justify-between py-2">
            <NavigationMenu className="relative w-full h-full max-w-full !grid !grid-cols-1 justify-start items-start">
              <NavigationMenuList className="!grid !grid-cols-1 justify-start items-start  space-y-4 !w-full max-w-full  px-4">
                {MAIN_NAV_ROUTES.map((item) => {
                  if (item.routes && item.routes.length > 0) {
                    return (
                      <NavigationMenuItem key={item.title}>
                        <Accordion
                          type="single"
                          collapsible
                          className="w-full divide-y-0 divide-none border-none"
                        >
                          <AccordionItem
                            value={item.title}
                            className="border-none"
                          >
                            <AccordionTrigger className="px-4 py-2  capitalize  rounded-md bg-white text-black dark:bg-white/10 dark:text-gray-400 dark:hover:bg-white dark:hover:text-indigo-950">
                              {item.title}
                            </AccordionTrigger>
                            <AccordionContent className="grid grid-cols-1 space-y-2 px-4 py-2">
                              {item.routes.map((routeItem) => (
                                <Link
                                  key={routeItem.title}
                                  href={routeItem.href}
                                  legacyBehavior
                                  passHref
                                >
                                  <NavigationMenuLink
                                    className={cn(
                                      navigationMenuTriggerStyle(),
                                      "justify-start text-left w-full px-4 py-2  capitalize  rounded-md bg-white text-black dark:bg-white/10 dark:text-gray-400 dark:hover:bg-white dark:hover:text-indigo-950"
                                    )}
                                    onClick={() => setOpen(false)}
                                  >
                                    {routeItem.title}
                                  </NavigationMenuLink>
                                </Link>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </NavigationMenuItem>
                    );
                  }

                  return (
                    <NavigationMenuItem key={item.title}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "justify-start text-left w-full max-w-full  px-4 py-2  capitalize  rounded-md bg-white text-black dark:bg-white/10 dark:text-gray-400 dark:hover:bg-white dark:hover:text-indigo-950"
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                })}

                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "justify-center text-center w-full px-4 py-2 text-base uppercase  rounded-full bg-white text-black ring-1 ring-gray-300 dark:bg-white/10 dark:text-gray-400 dark:hover:bg-white dark:hover:text-indigo-950"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      Get In Touch
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <TopNav className="" />
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
}
