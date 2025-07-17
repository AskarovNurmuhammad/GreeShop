"use client";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../Functions";
import { CiTrash } from "react-icons/ci";
import { setDisplayModal, setProductEdit } from "@/app/utils/slice";
import { MdEdit } from "react-icons/md";

export function Actions(props: { id: number }) {
  const dispatch = useDispatch();
  return (
    <div className={`-m-7 flex p-1 gap-2 z-3 ease-linear duration-150`}>
      <button
        onClick={() => {
          deleteProduct(props.id);
        }}
        className="flex gap-2 items-center justify-center easy-linear duration-150 cursor-pointer hover:bg-red-600 hover:text-white rounded-md p-0.5 "
      >
        Delete <CiTrash className="text-lg" />
      </button>
      <button
        onClick={() => {
          dispatch(setProductEdit(props.id));
          dispatch(setDisplayModal("flex"));
        }}
        className="flex gap-2 items-center justify-center hover:bg-amber-500 hover:text-white rounded-md ease-linear duration-150 cursor-pointer p-0.5"
      >
        Edit <MdEdit className="text-lg" />
      </button>
    </div>
  );
}
