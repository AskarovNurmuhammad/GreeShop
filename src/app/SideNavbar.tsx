"use client";
import React from "react";
import { inter } from "./ui/fonts";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const SideNavbar = (props: { left: string }) => {
  const pathName = usePathname();
  return (
    <div
      className={`bg-slate-200 h-[100vh] w-fit p-2 px-10 absolute top-0 ${props.left} lg:hidden sm:block hidden ease-linear duration-150`}
    >
      <ul className={`${inter.className} list-none flex flex-col gap-2`}>
        <li>
          <Link
            href="/"
            className={clsx(
              pathName === "/"
                ? "font-bold relative before:block before:h-[2px] before:bg-[#46a358] before:w-full before:absolute before:-bottom-1"
                : ""
            )}
          >
            Home
          </Link>
        </li>
        <li
          className={clsx(
            pathName === "/shop"
              ? "font-bold relative before:block before:h-[2px] before:bg-[#46a358] before:w-full before:absolute before:-bottom-1"
              : ""
          )}
        >
          <Link href="/shop">Shop</Link>
        </li>
        <li
          className={clsx(
            pathName === "/plantcare"
              ? "font-bold relative before:block before:h-[2px] before:bg-[#46a358] before:w-full before:absolute before:-bottom-1"
              : ""
          )}
        >
          <Link href="/plantcare">Plant Care</Link>
        </li>
        <li
          className={clsx(
            pathName === "/blogs"
              ? "font-bold relative before:block before:h-[2px] before:bg-[#46a358] before:w-full before:absolute before:-bottom-1"
              : ""
          )}
        >
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
