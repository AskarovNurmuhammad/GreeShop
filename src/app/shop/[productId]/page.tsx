"use client";
import { getProducts } from "@/app/admin/Functions";
import Cart from "@/app/Cart";
import { Product } from "@/app/lib/definitions";
import { inter } from "@/app/ui/fonts";
import { RootState } from "@/app/utils/store";
import { redirect, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsClick } from "@/app/utils/slice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const page = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const dispatch = useDispatch();
  const isClick = useSelector((state: RootState) => state.isClick);

  useEffect(() => {
    getProducts().then((res) => {
      const foundProduct = res?.find((itm) => itm.id == productId);
      setProduct(foundProduct);
    });
  }, []);

  function addToCart() {
    const localProduct = localStorage.getItem("product");

    const myProducts = localProduct ? JSON.parse(localProduct) : [];
    console.log(myProducts);

    dispatch(setIsClick(!isClick));
    const isHas = myProducts.find((itm: any) => itm.id === product!.id);
    console.log("isHas:", isHas);

    if (!isHas) {
      console.log("jasur");

      localStorage.setItem("product", JSON.stringify([...myProducts, product]));
    }
  }

  return (
    <div
      className={`md:px-[120px] px-[20px] mt-[4px] py-2 ${inter.className} md:mb-0 mb-[100px]`}
    >
      <Cart />
      {product ? (
        <div className="flex lg:flex-row flex-col gap-13 w-full">
          <div className="lg:w-[444px] w-full h-[444px] bg-[#fbfbfb] rounded-md">
            <img
              src={product?.images[0]}
              alt="photo"
              className="h-[444px] lg:w-[444px] w-full rounded-md"
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col gap-[13px] relative">
            <span className="flex flex-col">
              <p className="font-bold text-[28px] text-[#3D3D3D]">
                {product?.name}
              </p>
              <p className="font-bold text-[22px] text-[#46A358]">
                ${product?.price}.00
              </p>
            </span>
            <div className="w-full h-[2px] bg-gray-200"></div>
            <span className="flex gap-2 h-[280px] overflow-auto">
              <p className="font-[500] text-[15px] text-[#3d3d3d]">
                Short Description:
              </p>
              <p>{product?.description}</p>
            </span>
            <div className="flex md:flex-row flex-col gap-2">
              <button
                onClick={() => {
                  addToCart();
                  redirect("/shop/shoppingcart");
                }}
                className="font-bold uppercase bg-[#46a358] text-white py-[10px] px-[30px] border border-white rounded-md md:w-fit w-full cursor-pointer ease-linear duration-150 hover:bg-white hover:text-[#46a358] hover:border-[#46a358]"
              >
                Buy Now
              </button>
              <button
                onClick={addToCart}
                className="font-bold uppercase bg-white text-[#46a358] py-[10px] px-[30px] border border-[#46a358] rounded-md md:w-fit w-full cursor-pointer ease-linear duration-150 hover:bg-[#46a358] hover:text-white hover:border-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex lg:flex-row flex-col gap-13 w-full">
          <Skeleton width={400} height={400} />
          <div>
            <Skeleton width={400} height={50} className="mb-10" />
            <Skeleton width={400} />
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
