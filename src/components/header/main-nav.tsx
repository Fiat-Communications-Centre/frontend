"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MAIN_NAV_ROUTES } from "@/config/routes";

interface MainNavProps {
  className?: string;
}
export function MainNav({ className }: MainNavProps) {
  return (
    <section
      className={cn(
        "w-full flex justify-between items-center space-x-4",
        className
      )}
    >
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "px-4 py-2  capitalize  rounded-full bg-white text-black dark:bg-white/10 dark:text-gray-400 dark:hover:bg-white dark:hover:text-indigo-950"
                )}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          {MAIN_NAV_ROUTES.map((item) => {
            if (item.routes && item.routes.length > 0) {
              return (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "px-4 py-2  capitalize  rounded-full bg-white text-black dark:bg-white/10 dark:text-gray-400 dark:hover:bg-white dark:hover:text-indigo-950"
                    )}
                  >
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="dark:!bg-white/10 dark:text-gray-400">
                    <ul className="dark:bg-white/10 dark:text-gray-400 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {item.routes.map((itemRoute) => (
                        <ListItem
                          key={itemRoute.title}
                          title={itemRoute.title}
                          href={itemRoute.href}
                          className="px-4 py-2  capitalize  rounded-md bg-white text-black dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
                        >
                          {itemRoute.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            }

            return (
              <NavigationMenuItem key={item.title}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "px-4 py-2  capitalize  rounded-full bg-white text-black dark:bg-white/10 dark:text-gray-400 dark:hover:bg-white dark:hover:text-indigo-950"
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "px-4 py-2 text-base uppercase  rounded-full bg-white text-black ring-1 ring-gray-300 dark:bg-white/10 dark:text-gray-400 dark:hover:bg-white dark:hover:text-indigo-950"
                )}
              >
                Get In Touch
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
