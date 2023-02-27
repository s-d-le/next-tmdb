import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib/esm/iconBase";

export type IMenuItem = {
  title: string;
  address: string;
  Icon: IconType;
};

export default function MenuItem({ title, address, Icon }: IMenuItem) {
  return (
    <div>
      <Link
        href={address}
        className="mx-4 lg:mx-6 hover:text-amber-600 text-gray-700"
      >
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}
