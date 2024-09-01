import React from "react";
import TopNav from "./top-nav";
import { MainNav } from "./main-nav";
import { MobileMainNav } from "./mobile-main-nav";

function MainHeader() {
  return (
    <header className="w-full fixed top-0 left-0 z-[50] py-2 bg-white dark:bg-black">
      <TopNav className="container mx-auto max-lg:hidden" />
      <MainNav className=" container mx-auto max-lg:hidden" />
      <MobileMainNav className="lg:hidden h-full" />
    </header>
  );
}

export default MainHeader;
