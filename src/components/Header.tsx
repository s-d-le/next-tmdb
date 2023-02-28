import React from "react";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="mx-2 flex max-w-6xl items-center justify-between py-6 sm:mx-auto">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="mr-1 rounded-lg bg-amber-500 py-1 px-2 font-bold">
              IMDb
            </span>
            <span className="hidden text-xl sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
      <div className=""></div>
    </div>
  );
}
