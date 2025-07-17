"use client";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { inter } from "@/app/ui/fonts";
import { useDispatch } from "react-redux";
import { setDisplayModal } from "@/app/utils/slice";

const AddProducts = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(setDisplayModal("flex"));
      }}
      className="flex items-center gap-2 bg-[#10B981] text-white cursor-pointer p-2 rounded-md"
    >
      <FaPlus className="text-sm" />{" "}
      <span className={`${inter.className}`}>Add Product</span>
    </button>
  );
};

export default AddProducts;
