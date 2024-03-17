"use client";
import Image from "next/image";
import React from "react";
import { menuItems } from "./MenuList";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="sticky top-0">
        <div className=" h-screen min-w-56 bg-white flex flex-col justify-between md:hidden">
          <div>
            <div className="flex items-center gap-3 px-6 py-7">
              <Image src="/logo.png" alt="logo" height={30} width={30} />
              <h1 className="text-xl font-semibold">Motiv.</h1>
            </div>
            <div className="flex flex-col justify-end">
              <div className="px-3">
                {menuItems.map((menuItem) => (
                  <div
                    key={menuItem.title}
                    className={`px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md mb-1 ${
                      pathname === menuItem.link ? "bg-gray-200" : null
                    }`}
                  >
                    <Link href={menuItem.link}>
                      <div className="flex items-center gap-2  text-gray-500 font-medium">
                        <Image
                          src={menuItem.icon}
                          alt={menuItem.title}
                          height={20}
                          width={20}
                        />
                        <p> {menuItem.title}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-end mb-5">
              <div className="px-3">
                <div
                  className={`px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md mb-1 ${
                    pathname === "/dashboard/settings" ? "bg-gray-200" : null
                  }`}
                >
                  <Link href="/dashboard/settings">
                    <div className="flex items-center gap-2  text-gray-500 font-medium">
                      <Image
                        src="/icons/settings.png"
                        alt="settings"
                        height={20}
                        width={20}
                      />
                      <p>Settings</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="px-3">
                <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md mb-1">
                  <button>
                    <div className="flex items-center gap-2 text-gray-500 font-medium">
                      <Image
                        src="/icons/logout.png"
                        alt="logout"
                        height={20}
                        width={20}
                      />
                      <p>Log out</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
