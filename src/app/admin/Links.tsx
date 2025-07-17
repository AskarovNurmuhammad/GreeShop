"use client";

import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { inter } from "../ui/fonts";
import { usePathname } from "next/navigation";
import { GoFileDirectory } from "react-icons/go";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import clsx from "clsx";

const Links = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2">
      <Link
        href={"/admin"}
        className={clsx(
          "flex items-center  gap-2 text-[#838DA4]  p-2 rounded-md ease-linear duration-150 hover:bg-[#F3F4F6] hover:text-black",
          {
            "bg-[#F3F4F6] text-black": pathname === "/admin",
          }
        )}
      >
        <MdDashboard />
        <span className={`${inter.className}`}>Dashboard</span>
      </Link>
      <Link
        href={"/admin/categories"}
        className={clsx(
          "flex items-center  gap-2 text-[#838DA4]  p-2 rounded-md ease-linear duration-150 hover:bg-[#F3F4F6] hover:text-black",
          {
            "bg-[#F3F4F6] text-black": pathname === "/admin/categories",
          }
        )}
      >
        <GoFileDirectory />
        <span className={`${inter.className}`}>Categories</span>
      </Link>
      <Link
        href={"/admin/products"}
        className={clsx(
          "flex items-center  gap-2 text-[#838DA4]  p-2 rounded-md ease-linear duration-150 hover:bg-[#F3F4F6] hover:text-black",
          {
            "bg-[#F3F4F6] text-black": pathname === "/admin/products",
          }
        )}
      >
        <MdOutlineShoppingBag />
        <span className={`${inter.className}`}>Products</span>
      </Link>
      <Link
        href={"/admin/users"}
        className={clsx(
          "flex items-center  gap-2 text-[#838DA4]  p-2 rounded-md ease-linear duration-150 hover:bg-[#F3F4F6] hover:text-black",
          {
            "bg-[#F3F4F6] text-black": pathname === "/admin/users",
          }
        )}
      >
        <FaUsers />
        <span className={`${inter.className}`}>Users</span>
      </Link>
      <Link
        href={"/admin/orders"}
        className={clsx(
          "flex items-center  gap-2 text-[#838DA4]  p-2 rounded-md ease-linear duration-150 hover:bg-[#F3F4F6] hover:text-black",
          {
            "bg-[#F3F4F6] text-black": pathname === "/admin/orders",
          }
        )}
      >
        <CiViewList />
        <span className={`${inter.className}`}>Orders</span>
      </Link>
    </div>
  );
};

export default Links;
