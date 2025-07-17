"use client";
import React, { useEffect, useState } from "react";
import { getOrders } from "../Functions";
import { Order } from "@/app/lib/definitions";

const Orders = () => {
  const sections = [
    { title: "Open" },
    { title: "Progress" },
    { title: "Close" },
  ];
  const [orders, setOrders] = useState<Order[]>([]);
  const status = ["OPEN", "PROGRESS", "CLOSE"];

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res!);
    });
  }, []);

  return (
    <div className="flex gap-2">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-4 py-3 font-semibold">No</th>
            <th className="px-4 py-3 font-semibold">User Id</th>
            <th className="px-4 py-3 font-semibold">Location</th>
            <th className="px-4 py-3 font-semibold">Phone</th>
            <th className="px-4 py-3 font-semibold">status</th>
            <th className="px-4 py-3 font-semibold">Total Price</th>
            <th className="px-4 py-3 font-semibold">Created at</th>
            <th className="px-4 py-3 font-semibold">Products</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((itm, i) => {
            return (
              <tr key={itm.id} className="border-b border-gray-200">
                <td className="px-4 py-3">{i + 1}</td>
                <td className="px-4 py-3">{itm.user_id}</td>
                <td className="px-4 py-3">{itm.location}</td>
                <td className="px-4 py-3">{itm.phone}</td>
                <td className="px-4 py-3">
                  <select className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    {status.map((itm, i) => {
                      return (
                        <option key={i} value={itm}>
                          {itm}
                        </option>
                      );
                    })}
                  </select>
                </td>
                <td className="px-4 py-3">{itm.total_price}</td>
                <td className="px-4 py-3">{itm.created_at}</td>
                <td className="px-4 py-3">{itm.products.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
