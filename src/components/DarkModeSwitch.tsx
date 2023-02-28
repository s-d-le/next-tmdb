"use client";

import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  //Make sure page is loaded before we can use theme
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), [setMounted]);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const styles = "text-xl cursor-pointer hover:text-amber-500";
  return (
    <>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode className={styles} onClick={() => setTheme("light")} />
      ) : (
        <BsFillMoonFill className={styles} onClick={() => setTheme("dark")} />
      )}
    </>
  );
}
