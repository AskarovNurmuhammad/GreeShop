"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Ellipsis } from "lucide-react";
import { supabase } from "@/app/supbaseClient";

const Users = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    getUsers();
  });
  const getUsers = async () => {
    const { data, error } = await supabase.from("users").select("*");
    console.log(data);
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
      {/* Header */}
      <div className="d-flex justify-between ">
        <div className="d-flex gap-1">
          <a
            href="/admin/dashboard"
            className="text-black text-decoration-none"
          >
            Dashboard
          </a>
          <p> /</p>
          <strong> Users</strong>
        </div>
      </div>

      {/* Search */}
      <div className="d-flex justify-between mt-3 mb-2">
        <input
          type="text"
          className="form-control w-50"
          placeholder="search by title..."
        />
      </div>

      {/* Table */}
      <div>
        <table className="table w-full caption-bottom">
          <thead>
            <tr>
              <th>№</th>
              <th>Status</th>
              <th>Email</th>
              <th>Amount</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td></td>
              <td>nimadir@gmail.com</td>
              <td>10</td>
              <td>
                <button>
                  <Ellipsis className="w-4 h-4 text-gray-500" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
