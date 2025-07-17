"use client";
import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Product } from "./lib/definitions";
import { useSelector } from "react-redux";
import { RootState } from "./utils/store";
import { redirect } from "next/navigation";

const Cart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const isClick = useSelector((state: RootState) => state.isClick);

  useEffect(() => {
    const local = localStorage.getItem("product");
    if (local) {
      setProducts(JSON.parse(local));
    } else {
      setProducts([]);
    }
  }, [isClick]);

  useEffect(() => {
    const local = localStorage.getItem("product");

    if (local) {
      setProducts(JSON.parse(local));
    }
  }, []);

  return (
    <div className="flex items-center justify-center absolute top-4 lg:right-80 sm:right-45 right-10">
      <button
        onClick={() => {
          redirect("/shop/shoppingcart");
        }}
        className="cursor-pointer"
      >
        <IoCartOutline className="text-4xl" />
      </button>
      <div className="w-[15px] h-[15px] rounded-full flex justify-center items-center bg-[#46a358] text-white absolute text-sm top-1 -right-1">
        {products.length}
      </div>
    </div>
  );
};

export default Cart;
