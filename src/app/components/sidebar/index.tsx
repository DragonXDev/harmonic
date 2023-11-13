"use client";

import { FC } from "react";
import { HiX } from "react-icons/hi";
import { useSidebarContext } from "@/providers/SidebarProvider";
import useMobileView from "../../hooks/useMobileView";
import Links from "./components/Links";
import React from "react";

type Props = {};

const Sidebar: FC<Props> = () => {
  const { isMobile } = useMobileView();
  const { openSidebar, setOpenSidebar } = useSidebarContext();

  return (
    <>
      <div
        className={`bg-[#000] bg-opacity-70 absolute inset-0 z-50 ${
          openSidebar && isMobile ? "block w-screen h-full" : "hidden"
        }`}
        onClick={() => setOpenSidebar(false)}
      />
      <div
        className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 
        ${openSidebar ? "translate-x-0" : "-translate-x-96"}`}
      >
        <span
          className="absolute top-4 right-4 block cursor-pointer xl:hidden"
          onClick={() => setOpenSidebar(false)}
        >
          <HiX />
        </span>

        <div className={`mx-[56px] mt-[50px] flex items-center`}>
          <div className="mt-1 ml-1 h-2.5 font-poppins text-[32px] font-bold text-navy-700 dark:text-white">
            Harmonic
          </div>
        </div>

        <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />

        {/* Nav item */}
        <ul className="mb-auto pt-1">
          <Links
            onClickRoute={isMobile ? () => setOpenSidebar(false) : undefined}
          />
        </ul>

        {/* Free Horizon Card */}

        {/* Nav item end */}
      </div>
    </>
  );
};

export default Sidebar;
