"use client";
import Cart from "@/app/Cart";
import { Product, User } from "@/app/lib/definitions";
import { inter } from "@/app/ui/fonts";
import React, { useEffect, useState } from "react";
import { CgTrashEmpty } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayModal, setIsClick } from "@/app/utils/slice";
import { RootState } from "@/app/utils/store";
import { redirect } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { createOrder, getUsers } from "@/app/admin/Functions";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

enum Status {
  OPEN = "OPEN",
}

const ShoppingCart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState<
    { id: number; count: number; price: string }[]
  >([]);
  const [total, setTotal] = useState(0);
  const [users, setUsers] = useState<User[]>([]);
  const dispatch = useDispatch();
  const isClick = useSelector((state: RootState) => state.isClick);
  const display = useSelector((state: RootState) => state.displayModal);
  let close = 0;
  const [location, setLocation] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const { user } = useUser();
  const [isHas, setIsHas] = useState(true);

  const getCurrentDate = () => {
    const today = new Date();

    const day = String(today.getDate()).padStart(2, "0"); // 01, 02, ..., 31
    const month = String(today.getMonth() + 1).padStart(2, "0"); // 01, 02, ..., 12
    const year = today.getFullYear(); // 2025

    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res!);
    });
    const localProducts = localStorage.getItem("product");
    if (localProducts) {
      setProducts(JSON.parse(localProducts));
    } else {
      setIsHas(false);
    }
  }, []);

  useEffect(() => {
    if (products[0]) {
      const counts = products.map((product) => {
        return { id: product.id!, count: 1, price: product.price };
      });
      setCount(counts);
    } else {
      setTotal(0);
      setIsHas(false);
    }
  }, [products]);

  useEffect(() => {
    const countArr = count.map((itm) => {
      return { count: itm.count, price: itm.price };
    });
    console.log(countArr);

    const total = countArr.reduce(
      (acc, val) => acc + val.count * Number(val.price),
      0
    );
    setTotal(total);
  }, [count]);

  return (
    <div
      className={`md:px-[120px] px-[20px] mt-[4px] py-2 ${inter.className} md:mb-0 mb-[100px]`}
    >
      <Cart />
      <div className="flex xl:flex-row flex-col xl:gap-[86px] gap-2">
        {/* table */}
        <div className="xl:w-2/3 w-full">
          <div className="flex gap-[245px]">
            <p className="font-[500] text-[#3d3d3d]">Products</p>
            <span className="flex gap-[97px]">
              <p className="font-[500] text-[#3d3d3d]">Price</p>
              <p className="font-[500] text-[#3d3d3d]">Quantity</p>
              <p className="font-[500] text-[#3d3d3d]">Total</p>
            </span>
          </div>
          <div className="w-full h-[1px] bg-gray-200 mt-3"></div>
          {/* Product */}
          {products[0] ? (
            <div className="xl:h-[500px] h-fit overflow-auto">
              {products.map((product, i) => {
                if (!count[0]) return "please wait...";
                const foundCount = count.find((itm) => itm.id === product.id);
                const index = count.indexOf(foundCount!);
                return (
                  <div
                    key={i}
                    className="mt-2 gap-[80px] bg-[#fbfbfb] p-2 rounded-md flex"
                  >
                    <div className="flex gap-8 items-center w-[210px]">
                      <img
                        src={product.images[0]}
                        alt="photo"
                        className="w-[70px] h-[70px]"
                      />
                      <p className="font-[500] text-[#3d3d3d]">
                        {product.name}
                      </p>
                    </div>
                    <div className="flex items-center gap-[97px]">
                      <p className="font-[500] text-[#727272]">
                        ${product.price}.00
                      </p>
                      <div className="flex gap-2 ">
                        <button
                          onClick={() => {
                            if (foundCount!.count > 1) {
                              foundCount!.count--;
                              count[index] = foundCount!;
                              setCount([...count]);
                            }
                          }}
                          className="bg-[#46a358] h-[25px] w-[25px] rounded-full text-white cursor-pointer"
                        >
                          -
                        </button>
                        <span>{foundCount?.count}</span>
                        <button
                          onClick={() => {
                            if (foundCount!.count < Number(product.quantity)) {
                              foundCount!.count++;
                              count[index] = foundCount!;
                              setCount([...count]);
                            }
                          }}
                          className="bg-[#46a358] h-[25px] w-[25px] rounded-full text-white cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-[#46a358] font-semibold -ml-2 w-[80px]">
                        ${foundCount!.count * Number(product.price)}.00
                      </p>
                      <button
                        onClick={() => {
                          products.splice(i, 1);
                          setProducts([...products]);
                          if (products[0]) {
                            localStorage.setItem(
                              "product",
                              JSON.stringify([...products])
                            );
                          } else {
                            localStorage.removeItem("product");
                          }
                          dispatch(setIsClick(!isClick));
                        }}
                        className="cursor-pointer"
                      >
                        <CgTrashEmpty className="w-[24px] h-[24px] text-[#727272]" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : isHas ? (
            <div className="flex flex-col gap-2">
              <Skeleton height={90} />
              <Skeleton height={90} />
              <Skeleton height={90} />
              <Skeleton height={90} />
            </div>
          ) : (
            "Product Not found"
          )}
        </div>
        <div className="flex flex-col xl:w-1/3 w-full">
          <p className="text-[18px] text-[#3d3d3d] font-bold">Cart Totals</p>
          <div className="w-full h-[1px] bg-gray-200 mt-3"></div>
          <div>
            <div className="xl:mt-[350px] mt-0">
              <div className="flex w-full justify-between items-center">
                <p className="text-[#3d3d3d] font-bold">Total:</p>
                <p className="text-[#46A358] font-bold text-[18px]">
                  ${total}.00
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    dispatch(setDisplayModal("flex"));
                  }}
                  className="text-white bg-[#46a358] font-bold text-[15px] w-full rounded-sm py-[12.5px] cursor-pointer"
                >
                  Proceed To Checkout
                </button>
                <button
                  onClick={() => {
                    redirect("/");
                  }}
                  className="text-[#46a358] text-15px bg-white border border-[#46a358]  w-full rounded-sm py-[12.5px] cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
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
          <h2 className="text-xl font-semibold mb-4">Create Order</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              value={location}
              type="text"
              className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter region/city"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phone}
              type="text"
              className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring focus:ring-blue-200"
            />
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
              onClick={() => {
                if (!user || !products[0]) {
                  alert("iltimos ro'yxatdan o'ting yoki mahsulot tanlang");
                  return;
                }

                const foundUser = users.find(
                  (itm) => itm.email === user.emailAddresses[0] + ""
                );

                const createdAt = getCurrentDate();

                const data = {
                  user_id: foundUser!.id!,
                  location,
                  phone,
                  status: Status.OPEN,
                  total_price: total,
                  created_at: createdAt,
                  products,
                };
                createOrder(data).then(() => {
                  setLocation(" ");
                  setPhone(" ");
                  dispatch(setDisplayModal("hidden"));
                  localStorage.removeItem("product");
                });
              }}
              className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 cursor-pointer"
            >
              Create Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
