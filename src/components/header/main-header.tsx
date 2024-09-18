import React from "react";
import TopNav from "./top-nav";
import { MainNav } from "./main-nav";
import { MobileMainNav } from "./mobile-main-nav";

function MainHeader() {
  return (
    <header className="w-full fixed top-0 left-0 z-[50] bg-white dark:bg-black  shadow-lg">
      <TopNav className="bg-primary text-accent dark:bg-white/10 max-lg:hidden" />
      <MainNav className=" container mx-auto max-lg:hidden py-2" />
      <MobileMainNav className="lg:hidden h-full" />
    </header>
  );
}

export default MainHeader;
