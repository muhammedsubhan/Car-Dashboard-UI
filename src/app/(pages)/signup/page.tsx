"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setSuccess(true);
    setError(null);
    console.log(formData);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

  const togglePasswordVisibility = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
        <div className="sm:w-full">
          <div className="flex flex-col gap-8 px-5 xs:gap-4">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-semibold">Get's started.</h1>
              <p className="text-gray-400">
                Already have an account?{" "}
                <Link href="/signin">
                  <span className="text-purple-500 font-medium hover:underline-offset-2 hover:underline cursor-pointer">
                    Sign in
                  </span>
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-7 xs:gap-5">
              <div className="flex items-center justify-center gap-5 xs:flex-col xs:gap-3">
                <button className="flex gap-3 justify-center border-2 font-semibold border-gray-200 px-6 py-3 rounded-md xs:w-full">
                  <Image
                    src="/icons/google-icon.png"
                    width={25}
                    height={25}
                    alt="google-icon"
                  />
                  Sign in with Google
                </button>
                <button className="flex gap-3 bg-black justify-center px-6 py-3 rounded-md text-white font-semibold xs:w-full">
                  <Image
                    src="/icons/github-white.png"
                    width={26}
                    height={26}
                    alt="google-icon"
                  />
                  Sign in with Github
                </button>
              </div>
              <div className="flex items-center gap-3">
                <p className="border-t-2 border-gray-200 w-full"></p>
                <p className="text-gray-400 font-medium">or</p>
                <p className="border-t-2 border-gray-200  w-full"></p>
              </div>
              <div>
                <div>
                  <div className="bg-white  py-4 rounded-md mb-5">
                    <form className="flex flex-col px-5 gap-2">
                      <label
                        htmlFor="firstname"
                        className="text-base font-medium"
                      >
                        First Name
                      </label>
                      <input
                        id="firstname"
                        type="text"
                        name="firstname"
                        onChange={handleOnChange}
                        value={formData.firstname}
                        placeholder="Enter First Name"
                        className="h-[50px] px-3 focus:outline-none rounded-md border-gray-200 border-2 text-gray-500 font-normal"
                      />
                      <label
                        htmlFor="lastname"
                        className="text-base font-medium"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        onChange={handleOnChange}
                        value={formData.lastname}
                        placeholder="Enter Last Name"
                        className="h-[50px] px-3 focus:outline-none rounded-md border-gray-200 border-2 text-gray-500 font-normal"
                      />
                      <label htmlFor="email" className="text-base font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                        value={formData.email}
                        placeholder="Email"
                        className="h-[50px] px-3 focus:outline-none rounded-md border-gray-200 border-2 text-gray-500 font-normal"
                      />
                      <label
                        htmlFor="password"
                        className="text-base font-medium"
                      >
                        Password
                      </label>
                      <div className="w-full flex items-center rounded-md border-gray-200 border-2">
                        <input
                          id="password"
                          name="password"
                          onChange={handleOnChange}
                          value={formData.password}
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          className="h-[50px] w-full px-3 focus:outline-none rounded-md text-gray-500 font-normal"
                        />
                        <button
                          onClick={togglePasswordVisibility}
                          className="px-4 text-gray-400"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                      {error && (
                        <p className="text-red-500  mt-2 p-2 bg-red-200">
                          {error}
                        </p>
                      )}
                      {success && (
                        <p className="text-green-500 mt-2 p-2 bg-green-200">
                          Your Account is Created
                        </p>
                      )}
                    </form>
                  </div>
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-2 text-gray-400 font-medium xs:text-sm">
                      <input
                        type="checkbox"
                        className="scale-110 text-gray-400 "
                      />
                      <p>Remember me</p>
                    </div>
                    {/* <p className="text-purple-500 font-semibold text-sm hover:underline-offset-2 hover:underline cursor-pointer xs:text-xs">
                      Forgot your password?
                    </p> */}
                  </div>
                  <div className="flex justify-center mt-8 xs:mt-5">
                    <button
                      onClick={handleSubmit}
                      className="bg-purple-500 font-semibold text-white p-3 w-full rounded-md"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
