import React from "react";
import { BiLogoGoogle } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md p-8 mb-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-center items-center">
            Register Account
            </h2>
          </div>
          <div className="flex items-center justify-center w-full gap-2 rounded my-4">
            <BiLogoGoogle className="bg-[#d04237] w-2/3 h-10 p-1 text-white rounded"/>
            <TiSocialTwitter className="bg-[#36528c] w-1/2 h-10 p-1 text-white rounded" />
            <CiInstagram className="bg-[#0d8ddc] w-1/2 h-10 p-1 text-white rounded" />
          </div>
          <form>
            <div className="mb-4 text-sm">
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4 text-sm">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Mail or Username"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4 text-sm">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full border border-gray-300 p-3  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4 text-sm">
              <input
                type="Conpassword"
                id="Conpassword"
                name="Conpassword"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-center">
              <button type="button" className="float-right bg-[#5f3afc] mt-10 w-full hover:bg-blue-950 text-white font-bold py-2 px-20 shadow text-sm">REGISTER</button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600 text-sm">
            Already have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;