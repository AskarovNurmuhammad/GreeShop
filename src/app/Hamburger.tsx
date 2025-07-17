"use client";
import React, { useState } from "react";
import "@/app/styles/main.css";
import SideNavbar from "./SideNavbar";

const Hamburger = () => {
  const [left, setLeft] = useState("-left-40");
  return (
    <div className="lg:hidden sm:block hidden ">
      <label className="lg:hidden sm:block hidden burger" htmlFor="burger">
        <input
          onChange={(e) => {
            if (e.target.checked) {
              setLeft("left-0");
              return;
            }
            setLeft("-left-40");
          }}
          type="checkbox"
          id="burger"
        />
        <span />
        <span />
        <span />
      </label>
      <SideNavbar left={left} />
    </div>
  );
};

export default Hamburger;
