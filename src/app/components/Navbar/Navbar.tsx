"use client";

import React, { useState } from "react";
import NavbarInput from "../NavbarInput/NavbarInput";
import { GrMenu } from "react-icons/gr";
import NavbarMenu from "@/app/MaterialUI/NavbarMenu";
import NotificationCard from "@/app/MaterialUI/NotificationCard";
import SidebarDrawer from "@/app/MaterialUI/SidebarDrawer";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <div className="w-full flex flex-col sticky top-0 z-50">
        <div className="bg-white h-20 w-full flex items-center justify-between px-8 border-l sm:px-4">
          <div className="hidden sm:flex">
            <GrMenu className="text-2xl" onClick={toggleDrawer(true)} />
          </div>
          <div className="hidden sm:flex">
            <SidebarDrawer toggleDrawer={toggleDrawer} open={open} />
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
