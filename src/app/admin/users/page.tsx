import React from "react";

import { inter } from "@/app/ui/fonts";
import { getUsers } from "../Functions";

const Users = async () => {
  const users = await getUsers();
  return (
    <div>
      <header className="flex items-center justify-between">
        <span className={`${inter.className} text-2xl font-semibold`}>
          Users
        </span>
      </header>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 font-semibold">No</th>
              <th className="px-4 py-3 font-semibold">FullName</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">Orders</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((itm, i) => {
              return (
                <tr key={itm.id} className="border-b border-gray-200">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3">{itm.name}</td>
                  <td className="px-4 py-3">{itm.email}</td>
                  <td className="px-4 py-3">{itm.orders.length}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
