"use client";

import { RootState } from "@/app/utils/store";
import { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setDisplayModal, setEditCotegory } from "@/app/utils/slice";
import { supabase } from "@/app/supabaseClient";
import { deleteCotegory } from "../Functions";

// Actions for table

export function Actions(props: { id: number }) {
  const dispatch = useDispatch();
  return (
    <div className={`-m-7 flex p-1 gap-2 z-3 ease-linear duration-150`}>
      <button
        onClick={() => {
          // console.log("edit");
          deleteCotegory(props.id);
        }}
        className="flex gap-2 items-center justify-center easy-linear duration-150 cursor-pointer hover:bg-red-600 hover:text-white rounded-md p-0.5 "
      >
        Delete <CiTrash className="text-lg" />
      </button>
      <button
        onClick={() => {
          dispatch(setEditCotegory(props.id));
          dispatch(setDisplayModal("flex"));
        }}
        className="flex gap-2 items-center justify-center hover:bg-amber-500 rounded-md ease-linear duration-150 cursor-pointer p-0.5"
      >
        Edit <MdEdit className="text-lg" />
      </button>
    </div>
  );
}

// Category Modal

export const AddCategoryModal = () => {
  const display = useSelector((state: RootState) => state.displayModal);
  const isEdit = useSelector((state: RootState) => state.cotegoryEdit);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Published");
  let close = 0;

  useEffect(() => {
    if (isEdit) {
      supabase
        .from("cotegory")
        .select("*")
        .eq("id", isEdit)
        .then((res) => {
          console.log(res.data![0]);
          setName(res.data![0].name);
          setStatus(res.data![0].status);
        });
    }
  }, [isEdit]);

  const handleSave = async () => {
    if (!isEdit) {
      const categoryData = {
        name,
        status,
      };
      supabase
        .from("cotegory")
        .insert([categoryData])
        .then(() => {
          setName("");
          dispatch(setDisplayModal("hidden"));
        });
    } else {
      const cotegoryData = {
        id: isEdit,
        name,
        status,
      };
      supabase
        .from("cotegory")
        .update(cotegoryData)
        .eq("id", isEdit)
        .then(() => {
          setName("");
          dispatch(setDisplayModal("hidden"));
          dispatch(setEditCotegory(0));
          console.log("update bo'ldi");
        });
    }
  };

  return (
    <div
      onClick={() => {
        close += 1;
        if (display === "hidden") {
          dispatch(setDisplayModal("flex"));
          return;
        }
        if (close % 2 === 1) {
          dispatch(setDisplayModal("hidden"));
        }
      }}
      className={`fixed inset-0 ${display} items-center justify-center bg-[rgba(0,0,0,0.4)]`}
    >
      <div
        onClick={() => {
          close = 1;
        }}
        className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 absolute z-1"
      >
        <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring focus:ring-blue-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Status</label>
          <div className="flex items-center gap-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="Published"
                checked={status === "Published"}
                onChange={() => setStatus("Published")}
                className="mr-1"
              />
              Published
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="Draft"
                checked={status === "Draft"}
                onChange={() => setStatus("Draft")}
                className="mr-1"
              />
              Draft
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 rounded-md border cursor-pointer"
            onClick={() => {
              dispatch(setDisplayModal("hidden"));
            }}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 cursor-pointer"
            onClick={handleSave}
          >
            Save Category
          </button>
        </div>
      </div>
    </div>
  );
};
