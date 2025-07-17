"use client";
import React, { useEffect, useState } from "react";
import { getProducts } from "../admin/Functions";
import { redirect } from "next/navigation";
import Cart from "../Cart";

const Shop = () => {
  useEffect(() => {
    getProducts().then((res) => {
      redirect(`/shop/${res![0].id}`);
    });
  }, []);

  return <div></div>;
};

export default Shop;
