"use client";
import { supabase } from "@/app/supbaseClient";
import { log } from "console";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [categoryCount, setCategoryCount] = useState<number>();
  const [productsCount, setProductsCount] = useState<number>();
  const [userCout, setUserCount] = useState<number>();
  const [orderCount, setOrderCount] = useState<number>();
  useEffect(() => {
    getCategoris();
    getProducts();
    getUsers();
    getOrder();
  }, []);

  async function getCategoris() {
    const { data, error } = await supabase.from("category").select("*");
    setCategoryCount(data?.length);
  }
  async function getProducts() {
    const { data, error } = await supabase.from("product").select("*");
    setProductsCount(data?.length);
  }

  async function getUsers() {
    const { data, error } = await supabase.from("users").select("*");
    setUserCount(data?.length);
  }
  async function getOrder() {
    const { data, error } = await supabase.from("order").select("*");
    setOrderCount(data?.length);
  }

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
      {/* Sarlavha va tablar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Hi, Admin ✋
        </h3>

        {/* Tablar */}
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg w-full sm:w-auto">
          <button className="px-3 py-1 md:px-4 md:py-2 text-sm font-medium rounded-md bg-white shadow text-blue-600 flex-1 sm:flex-none text-center">
            Overview
          </button>
          <button className="px-3 py-1 md:px-4 md:py-2 text-sm font-medium rounded-md text-gray-600 hover:text-blue-600 flex-1 sm:flex-none text-center">
            Analytics
          </button>
        </div>
      </div>

      {/* Statistik kartalar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
        {/* Categories card */}
        <div className="border border-gray-200 p-3 md:p-4 lg:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h5 className="text-xs md:text-sm font-medium text-gray-500 mb-1">
            Total Categories
          </h5>
          <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 md:mb-2">
            {categoryCount}
          </h4>
          <p className="text-xs md:text-sm text-green-600 font-medium flex items-center">
            <svg
              className="w-3 h-3 md:w-4 md:h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clipRule="evenodd"
              />
            </svg>
            +20.1% from last month
          </p>
        </div>

        {/* Products card */}
        <div className="border border-gray-200 p-3 md:p-4 lg:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h5 className="text-xs md:text-sm font-medium text-gray-500 mb-1">
            Products
          </h5>
          <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 md:mb-2">
            {productsCount}
          </h4>
          <p className="text-xs md:text-sm text-green-600 font-medium flex items-center">
            <svg
              className="w-3 h-3 md:w-4 md:h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clipRule="evenodd"
              />
            </svg>
            +8.76% from last month
          </p>
        </div>

        {/* Users card */}
        <div className="border border-gray-200 p-3 md:p-4 lg:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h5 className="text-xs md:text-sm font-medium text-gray-500 mb-1">
            Users
          </h5>
          <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 md:mb-2">
            {userCout}
          </h4>
          <p className="text-xs md:text-sm text-green-600 font-medium flex items-center">
            <svg
              className="w-3 h-3 md:w-4 md:h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clipRule="evenodd"
              />
            </svg>
            +9% from last month
          </p>
        </div>

        {/* Orders card */}
        <div className="border border-gray-200 p-3 md:p-4 lg:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h5 className="text-xs md:text-sm font-medium text-gray-500 mb-1">
            Orders
          </h5>
          <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 md:mb-2">
            {orderCount}
          </h4>
          <p className="text-xs md:text-sm text-green-600 font-medium flex items-center">
            <svg
              className="w-3 h-3 md:w-4 md:h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clipRule="evenodd"
              />
            </svg>
            +201 since last hour
          </p>
        </div>
      </div>

      {/* Recent Sales */}
      <div className="border border-gray-200 p-4 md:p-6 rounded-xl shadow-sm">
        <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">
          Recent Sales
        </h4>
        <p className="text-sm md:text-base text-gray-600">
          You made 15 sales this month.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
