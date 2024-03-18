import Image from "next/image";
import React from "react";

const NavbarInput = () => {
  return (
    <>
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
    </>
  );
};

export default NavbarInput;
