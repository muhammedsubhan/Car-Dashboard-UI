import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex flex-col sticky top-0">
        <div className="bg-white h-20 w-full flex items-center justify-between px-8 border-l">
          <div className="flex items-center  rounded-md bg-gray-100 border-2 px-2">
            <Image
              src="/icons/magnify.png"
              alt="magnify-icon"
              width={18}
              height={18}
            />
            <input
              type="text"
              placeholder="Search or type"
              className="h-[35px] px-3 focus:outline-none bg-gray-100 rounded-md  text-gray-500 font-normal"
            />
          </div>
          <div className="flex items-center gap-8">
            <Image
              src="/icons/bell-icon.png"
              alt="bell-icon"
              width={20}
              height={20}
            />
            <Image
              src="/profile-pic.png"
              alt="bell-icon"
              className="rounded-full"
              width={50}
              height={50}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
