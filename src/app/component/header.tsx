"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import LogoutButton from "./LogoutButton/page";
import rasmLOgo from "../images/logo.png";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) return null;

  return (
    <header className="container d-flex justify-between align-items-center bg-white shadow-sm p-3">
      <div className="flex gap-2 align-items-center  ">
        <Image src={rasmLOgo} alt="logo" width={25} height={25} />
        <h2 style={{ color: "#46A358" }}>GRENSHOP</h2>
      </div>
      <ul className="hidden sm:flex gap-4" style={{ color: "#3D3D3D" }}>
        <li>
          <a
            href="/"
            style={{ color: "#3D3D3D" }}
            className="text-decoration-none"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/shop"
            style={{ color: "#3D3D3D" }}
            className="text-decoration-none"
          >
            Shop
          </a>
        </li>
        <li>
          <a
            href="/carePlant "
            style={{ color: "#3D3D3D" }}
            className="text-decoration-none"
          >
            Plant Care
          </a>
        </li>
        <li>Blogs</li>
      </ul>

      <div className="d-flex gap-4 align-items-center">
        <a href="/cart">
          {" "}
          <ShoppingCart />
        </a>

        <LogoutButton />
      </div>
    </header>
  );
}
