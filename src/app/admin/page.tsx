import "@/app/styles/dashboard.css";
import React from "react";
import { inter } from "@/app/ui/fonts";
import { supabase } from "../supabaseClient";
import { GoFileDirectory } from "react-icons/go";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { getCotegories, getOrders, getProducts, getUsers } from "./Functions";

const Admin = async () => {
  const products = await getProducts();
  const users = await getUsers();
  const cotegories = await getCotegories();
  const orders = await getOrders();

  console.log(products);

  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className={`text-black text-2xl ${inter.className} font-semibold`}>
        Dashboard overview
      </h1>
      <div className="w-full flex gap-2">
        <div className="bg-white w-1/4 p-4 flex items-center gap-6 rounded-lg">
          <div className="h-[50px] w-[50px] rounded-full bg-[#DCFCE7] text-[#81CDA6] flex items-center justify-center">
            <GoFileDirectory />
          </div>
          <div>
            <p>Total Categories</p>
            <p className={`text-2xl font-semibold ${inter.className}`}>
              {cotegories!.length}
            </p>
          </div>
        </div>
        <div className="bg-white w-1/4 p-4 flex items-center gap-6 rounded-lg">
          <div className="h-[50px] w-[50px] rounded-full bg-[#DBEAFE] text-[#4E81EE] flex items-center justify-center">
            <MdOutlineShoppingBag />
          </div>
          <div>
            <p>Total Products</p>
            <p className={`text-2xl font-semibold ${inter.className}`}>
              {products!.length}
            </p>
          </div>
        </div>
        <div className="bg-white w-1/4 p-4 flex items-center gap-6 rounded-lg">
          <div className="h-[50px] w-[50px] rounded-full bg-[#F3E8FF] text-[#C166EB] flex items-center justify-center">
            <FaUsers />
          </div>
          <div>
            <p>Total Users</p>
            <p className={`text-2xl font-semibold ${inter.className}`}>
              {users!.length}
            </p>
          </div>
        </div>
        <div className="bg-white w-1/4 p-4 flex items-center gap-6 rounded-lg">
          <div className="h-[50px] w-[50px] rounded-full bg-[#FFEDD5] text-[#EDA68E] flex items-center justify-center">
            <CiViewList />
          </div>
          <div>
            <p>Total Orders</p>
            <p className={`text-2xl font-semibold ${inter.className}`}>
              {orders!.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
