"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export type INavbarItem = {
  title: string;
  param: string;
};

export default function NavbarItem({ title, param }: INavbarItem) {
  //Store the whole url
  const currentParams = useSearchParams();
  //Filter the url with a string
  const genre = currentParams.get("genre");

  return (
    <Link
      href={`/?genre=${param}`}
      className={`m-4 p-2 font-semibold hover:text-amber-600 ${
        genre &&
        genre === param &&
        "rounded-lg underline decoration-amber-500 decoration-4 underline-offset-8"
      }`}
    >
      {title}
    </Link>
  );
}
