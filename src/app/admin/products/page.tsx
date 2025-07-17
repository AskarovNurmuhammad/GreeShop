import React from "react";
import { inter } from "@/app/ui/fonts";
import { getProducts } from "../Functions";
import Modal from "./Modal";
import AddProducts from "./AddProducts";
import { Actions } from "./Actions";

const Products = async () => {
  const products = await getProducts();
  return (
    <div>
      <header className="flex items-center justify-between">
        <span className={`${inter.className} text-2xl font-semibold`}>
          Products
        </span>
        <AddProducts />
      </header>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 font-semibold">No</th>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Cotegory</th>
              <th className="px-4 py-3 font-semibold">Description</th>
              <th className="px-4 py-3 font-semibold">Quantity</th>
              <th className="px-4 py-3 font-semibold">Price</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((itm, i) => {
              return (
                <tr key={itm.id} className="border-b border-gray-200">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3">{itm.name}</td>
                  <td className="px-4 py-3">{itm.cotegory}</td>
                  <td className="px-4 py-3">{itm.description}</td>
                  <td className="px-4 py-3">{itm.quantity}</td>
                  <td className="px-4 py-3">{itm.price}</td>
                  <td className="px-4 py-3">
                    {itm.status === "published" ? (
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
      <Modal />
    </div>
  );
};

export default Products;
