"use client";
import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { inter } from "@/app/ui/fonts";
import { useDispatch } from "react-redux";
import { setDisplayModal } from "@/app/utils/slice";
import { supabase } from "@/app/supabaseClient";

const AddCotegories = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(setDisplayModal("flex"));
      }}
      className="flex items-center gap-2 bg-[#10B981] text-white cursor-pointer p-2 rounded-md"
    >
      <FaPlus className="text-sm" />
      <span className={`${inter.className}`}>Add Cotegory</span>
    </button>
  );
};

export default AddCotegories;
