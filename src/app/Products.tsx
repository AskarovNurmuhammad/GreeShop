"use client";
import React, { useEffect, useState } from "react";
import { Product } from "./lib/definitions";
import { getProducts } from "./admin/Functions";
import { useSelector } from "react-redux";
import { RootState } from "./utils/store";
import { FaCartShopping } from "react-icons/fa6";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { setIsClick } from "./utils/slice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { div } from "framer-motion/client";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const category = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();
  const isClick = useSelector((state: RootState) => state.isClick);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res!);
    });
  }, []);

  return (
    <div className="mb-[100px] flex md:justify-start justify-center gap-[41px] flex-wrap h-[500px] overflow-auto w-full">
      {products[0] ? (
        products
          .filter((itm) => itm.cotegory === category)
          .map((itm, i) => {
            return (
              <div
                key={i}
                className="flex flex-col border-t bg-[#FBFBFB] shadow p-2 border-white ease- duration-150 hover:border-[#46a358] hover:border-top h-fit relative cursor-pointer"
              >
                <img
                  onClick={() => {
                    redirect(`/shop/${itm.id}`);
                  }}
                  src={itm.images[0]}
                  alt="Plant"
                  className="w-[220px]"
                />
                <div>
                  <p className="text-[#3D3D3D] text-base">{itm.name}</p>
                  <p className="text-[#46a358] text-base font-bold text-[18px]">
                    ${itm.price}.00
                  </p>
                </div>
                {/* cart icon */}
                <button
                  onClick={() => {
                    const localProduct = localStorage.getItem("product");

                    const myProducts = localProduct
                      ? JSON.parse(localProduct)
                      : [];
                    console.log(myProducts);

                    dispatch(setIsClick(!isClick));
                    const isHas = myProducts.find(
                      (product: any) => product.id === itm.id
                    );
                    if (!isHas) {
                      localStorage.setItem(
                        "product",
                        JSON.stringify([...myProducts, itm])
                      );
                    }
                  }}
                  className="rounded-full border w-[30px] h-[30px] flex justify-center items-center bottom-2 text-[#46a358] right-5 absolute ease-linear duration-150 hover:scale-105 cursor-pointer"
                >
                  <FaCartShopping />
                </button>
              </div>
            );
          })
      ) : (
        <div className="flex gap-2 flex-wrap">
          <Skeleton height={220} width={200} />
          <Skeleton height={220} width={200} />
          <Skeleton height={220} width={200} />
          <Skeleton height={220} width={200} />
          <Skeleton height={220} width={200} />
          <Skeleton height={220} width={200} />
          <Skeleton height={220} width={200} />
          <Skeleton height={220} width={200} />
        </div>
      )}
    </div>
  );
};

export default Products;
