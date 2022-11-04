import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import GoogleLogin from "react-google-login";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { render } from "react-dom";
import Discover from "./Discover";
import SuggestedAccounts from "./SuggestedAccounts";
import { RiUserFollowFill, RiLiveFill } from "react-icons/ri";
import Footer from "./Footer";

const Sidebar = () => {
  const [showSidebar, setShowSiderbar] = useState(true);
  const normalLink =
    "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F000000] rounded";
  const userProfile = false;
  return (
    <div>
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-xl"
        onClick={() => setShowSiderbar((prev) => !prev)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
          <div>
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl text-[#ff0050]">
                  <AiFillHome />
                </p>
                <span className="text-xl hidden xl:block text-[#ff0050]">
                  For You
                </span>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl">
                  <RiUserFollowFill />
                </p>
                <span className="text-xl hidden xl:block">Following</span>
              </div>
            </Link>
          </div>
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl">
                  <RiLiveFill />
                </p>
                <span className="text-xl hidden xl:block">LIVE</span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className="px-2 py-4 hidden xl:block">
              <p className="text-gray-400">
                Log in to follow creators, like videos, and view comments.
              </p>
              <div className="pr-4">
                <GoogleLogin
                  clientId=""
                  render={(renderProps) => (
                    <button
                      className="cursor-pointer bg-white text-lg text-[#ff0050] border-[1px] border-[#ff0050] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:bg-[#FBEDF4]"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Log in
                    </button>
                  )}
                  onSuccess={() => {}}
                  onFailure={() => {}}
                  cookiePolicy="single_host_origin"
                />
              </div>
            </div>
          )}

          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
