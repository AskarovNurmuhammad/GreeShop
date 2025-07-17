"use client";
import clsx from "clsx";
import { inter } from "./ui/fonts";
import "@/app/styles/main.css";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavbarForPhone from "./NavbarForPhone";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <ul className={`list-none hidden lg:flex gap-[50px] ${inter.className}`}>
      <li>
        <Link
          href="/"
          className={clsx(pathName === "/" ? "font-bold navbar" : "")}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/shop"
          className={clsx(
            pathName.startsWith("/shop") ? "font-bold navbar" : ""
          )}
        >
          Shop
        </Link>
      </li>
      <li>
        <Link
          href="/plantcare"
          className={clsx(pathName === "/plantcare" ? "font-bold navbar" : "")}
        >
          Plant Care
        </Link>
      </li>
      <li>
        <Link
          href="/blogs"
          className={clsx(pathName === "/blogs" ? "font-bold navbar" : "")}
        >
          Blogs
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
