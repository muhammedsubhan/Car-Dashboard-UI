import React from "react";
import NavbarInput from "../NavbarInput/NavbarInput";
import { GrMenu } from "react-icons/gr";
import NavbarMenu from "@/app/MaterialUI/NavbarMenu";
import NotificationCard from "@/app/MaterialUI/NotificationCard";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex flex-col sticky top-0 z-50">
        <div className="bg-white h-20 w-full flex items-center justify-between px-8 border-l sm:px-4">
          <div className="hidden md:flex">
            <GrMenu className="text-2xl" />
          </div>
          <div className="xs:hidden">
            <NavbarInput />
          </div>
          <div className="flex items-center gap-8">
            <NotificationCard />
            <NavbarMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
