import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-3 py-5">
          <h1 className="text-xl font-semibold text-black">Profile</h1>
          <p className="text-sm font-light text-gray-400">
            Update your photo and personal details here.
          </p>
        </div>
        <Divider />
        <div className="mt-5 ">
          <form className="flex flex-col px-5 gap-2 ">
            <div className="flex items-center ">
              <div className="flex flex-col gap-4 w-full">
                <label
                  htmlFor="live"
                  className="text-base font-medium text-gray-500"
                >
                  Live in
                </label>
                <div className="border-gray-200 w-[450px] border-2 rounded-md px-2 text-gray-500 flex items-center">
                  <Image
                    src="/icons/house-icon.png"
                    alt="house-icon"
                    height={22}
                    width={22}
                  />
                  <input
                    id="live"
                    type="text"
                    placeholder="Zuichi, Switzerland"
                    className="h-[50px] w-[450px] px-3 focus:outline-none rounded-md  font-normal"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <label
                  htmlFor="street"
                  className="text-base font-medium text-gray-500"
                >
                  Street Address
                </label>
                <div className="border-gray-200 w-[450px] border-2 rounded-md px-2 text-gray-500 flex items-center">
                  <Image
                    src="/icons/house-icon.png"
                    alt="house-icon"
                    height={22}
                    width={22}
                  />
                  <input
                    id="street"
                    type="text"
                    placeholder="2445 Crosswind Drive"
                    className="h-[50px] w-[450px] px-3 focus:outline-none rounded-md  font-normal"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-4 mt-8 w-full">
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-500"
                >
                  Email Address
                </label>
                <div className="border-gray-200 w-[1015px]  border-2 rounded-md px-2 text-gray-500 flex items-center">
                  <Image
                    src="/icons/email-icon.png"
                    alt="house-icon"
                    height={22}
                    width={22}
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="uihutofficial@gmail.com"
                    className="h-[50px] w-[980px] w- px-3 focus:outline-none rounded-md  font-normal"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center mt-8 mb-6">
              <div className="flex flex-col gap-4 w-full">
                <label
                  htmlFor="date"
                  className="text-base font-medium text-gray-500"
                >
                  Date Of Birth
                </label>
                <div className="border-gray-200 w-[450px] border-2 rounded-md px-2 text-gray-500 flex items-center">
                  <Image
                    src="/icons/birthday-icon.png"
                    alt="house-icon"
                    height={22}
                    width={22}
                  />
                  <input
                    id="date"
                    type="date"
                    placeholder="Zuichi, Switzerland"
                    className="h-[50px] w-[450px] px-3 focus:outline-none rounded-md  font-normal"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <label
                  htmlFor="gender"
                  className="text-base font-medium text-gray-500"
                >
                  Gender
                </label>
                <div className="border-gray-200 w-[450px] border-2 rounded-md px-2 text-gray-500 flex items-center">
                  <Image
                    src="/icons/male-icon.png"
                    alt="house-icon"
                    height={22}
                    width={22}
                  />
                  <input
                    id="gender"
                    type="text"
                    placeholder="Male"
                    className="h-[50px] w-[450px] px-3 focus:outline-none rounded-md  font-normal"
                  />
                </div>
              </div>
            </div>
            <Divider />
            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center gap-28">
                <div className="flex flex-col gap-3 py-5">
                  <h1 className="text-xl font-semibold text-black">
                    Your Photo
                  </h1>
                  <p className="text-sm font-light text-gray-400">
                    This will be displayed on your profile.
                  </p>
                </div>
                <div>
                  <Image
                    src="/profile-pic.png"
                    alt="profile"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
              <div className="flex items-center gap-6">
                <button className="text-gray-500 font-medium">Delete</button>
                <button className="text-purple-500 font-medium">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
