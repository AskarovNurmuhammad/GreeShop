"use client";
import React, { useEffect, useState } from "react";
import "@/app/styles/NavbarForPhone.css";
import { FaHome, FaCog, FaMicroblog } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RiPlantFill } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: <FaHome />, label: "Home", link: "/" },
  { icon: <FaCartShopping />, label: "Shop", link: "/shop" },
  { icon: <RiPlantFill />, label: "Plant Care", link: "plantcare" },
  { icon: <FaMicroblog />, label: "Blogs", link: "blogs" },
];

const NavbarForPhone = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pathName = usePathname();

  useEffect(() => {
    switch (pathName) {
      case "/shop":
        setActiveIndex(1);
        break;
      case "/plantcare":
        setActiveIndex(2);
        break;
      case "/blogs":
        setActiveIndex(3);
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className="navigation flex justify-center sm:hidden">
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`list ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <Link href={item.link}>
              <span className="icon">{item.icon}</span>
              <span className="text">{item.label}</span>
            </Link>
          </li>
        ))}
        <div
          className="indicator"
          style={{ transform: `translateX(${activeIndex * 70}px)` }}
        ></div>
      </ul>
    </div>
  );
};

export default NavbarForPhone;
