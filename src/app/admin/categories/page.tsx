import React from "react";
import AddCotegories from "./AddCotegories";
import { inter } from "@/app/ui/fonts";
import { Actions, AddCategoryModal } from "./Actions";
import { getCotegories } from "../Functions";

const Categories = async () => {
  const cotegories = await getCotegories();
  return (
    <div>
      <header className="flex items-center justify-between">
        <span className={`${inter.className} text-2xl font-semibold`}>
          Categories
        </span>
        <AddCotegories />
      </header>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 font-semibold">No</th>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cotegories?.map((itm, i) => {
              return (
                <tr key={itm.id} className="border-b border-gray-200">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3">{itm.name}</td>
                  <td className="px-4 py-3">
                    {itm.status === "Published" ? (
                      <div className="bg-[#DCFCE7] p-1 rounded-md w-fit">
                        {itm.status}
                      </div>
                    ) : (
                      <div className="bg-[#F3F4F6] p-1 rounded-md w-fit">
                        {itm.status}
                      </div>
                    )}
                  </td>
                  <td className="px-7 pt-4">
                    <Actions id={itm.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Modal */}
      <AddCategoryModal />
    </div>
  );
};

export default Categories;
