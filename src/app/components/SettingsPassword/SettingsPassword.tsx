"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SettingsPassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div>
        <div className="flex flex-col gap-3 py-5">
          <h1 className="text-xl font-semibold text-black">Change Password</h1>
          <p className="text-sm font-light text-gray-400">
            Update your password here.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <label
              htmlFor="oldpassword"
              className="text-base text-gray-500 font-medium"
            >
              Old Password
            </label>
            <div className="w-[600px] flex  items-center rounded-md border-gray-200 border-2">
              <input
                id="oldpassword"
                type={showPassword ? "text" : "password"}
                placeholder="Your Old Password"
                className="h-[50px] w-[600px] px-3 focus:outline-none rounded-md text-gray-500 font-normal"
              />
              <button
                onClick={togglePasswordVisibility}
                className="px-4 text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label
              htmlFor="newpassword"
              className="text-base text-gray-500 font-medium"
            >
              New Password
            </label>
            <div className="w-[600px] flex items-center rounded-md border-gray-200 border-2">
              <input
                id="newpassword"
                type={showPassword ? "text" : "password"}
                placeholder="Your New Password"
                className="h-[50px] w-[600px] px-3 focus:outline-none rounded-md text-gray-500 font-normal"
              />
              <button
                onClick={togglePasswordVisibility}
                className="px-4 text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label
              htmlFor="retypepassword"
              className="text-base text-gray-500 font-medium"
            >
              Re-enter New Password
            </label>
            <div className="w-[600px] flex items-center rounded-md border-gray-200 border-2">
              <input
                id="retypepassword"
                type={showPassword ? "text" : "password"}
                placeholder="Re-enter Your Password"
                className="h-[50px] w-[600px] px-3 focus:outline-none rounded-md text-gray-500 font-normal"
              />
              <button
                onClick={togglePasswordVisibility}
                className="px-4 text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <button className="rounded-md  w-[200px] bg-purple-500 py-2 text-base font-semibold text-white">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPassword;
