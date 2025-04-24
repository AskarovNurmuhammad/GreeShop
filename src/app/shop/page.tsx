"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "../supbaseClient";

const Shop = () => {
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("product")
        .select("*")
        .eq("id", id)
        .single();
      if (error) console.error("Error:", error);
      else setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto mt-10 flex gap-10">
      {/* Left side - Image */}
      <div className="w-1/2">
        <img
          src={product.images}
          alt={product.title}
          className="w-full rounded-lg border"
        />
      </div>

      {/* Right side - Info */}
      <div className="w-1/2">
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-green-600 text-2xl mt-2">${product.price}</p>
        <p className="text-gray-600 mt-4">{product.description}</p>

        <div className="mt-6">
          <span className="font-semibold mr-2">Size:</span>
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className={`border rounded px-3 py-1 mx-1 ${
                selectedSize === size
                  ? "bg-green-500 text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="flex items-center mt-6 gap-4">
          <button
            onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
            className="text-xl border px-3 py-1"
          >
            -
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => Math.min(q + 1, 5))}
            className="text-xl border px-3 py-1"
          >
            +
          </button>
        </div>

        <div className="mt-6 flex gap-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded">
            BUY NOW
          </button>
          <button className="border border-green-600 text-green-600 px-6 py-2 rounded">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
