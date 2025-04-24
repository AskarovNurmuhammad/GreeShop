"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "next/navigation";

import flowers from "./images/01 1.png";
import flowers2 from "./images/01 2.png";
// import Footer from "./footer";
import { supabase } from "./supbaseClient";

const Home = () => {
  const [products, setProducts] = useState<
    { id: number; title: string; price: number; images: string }[]
  >([]);

  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("product").select("*");
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  const handleClick = (productId: number) => {
    router.push(`/shop?id=${productId}`);
  };

  return (
    <div>
      {/* HERO BANNER */}
      <div className="container mx-auto ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide className="d-flex justify-between">
            <div>
              <h5 style={{ marginTop: "68px", color: "#3D3D3D" }}>
                Welcome to GreenShop
              </h5>
              <h1
                style={{
                  marginTop: "7px",
                  fontSize: "70px",
                  width: "530px",
                  height: "140px",
                  color: "#3D3D3D",
                  fontWeight: "900",
                }}
              >
                Let’s Make a Better{" "}
                <span className="text-[#46A358]">Planet</span>
              </h1>
              <p
                style={{
                  color: "#727272",
                  width: "557px",
                  height: "45px",
                }}
                className="mt-5"
              >
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button
                className="btn"
                style={{
                  background: "#46A358",
                  color: "#fff",
                  width: "140px",
                  borderRadius: "6px",
                  marginTop: "50px",
                }}
              >
                Shop now
              </button>
            </div>
            <div className="relative">
              <Image
                style={{ position: "absolute", marginTop: "346px" }}
                src={flowers2}
                alt="logo1"
              />
              <Image src={flowers} alt="logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="d-flex justify-between items-center px-10">
            <div>
              <h5 className="mt-16 text-gray-700 text-lg">Best Deal Today</h5>
              <h1 className="mt-2 text-6xl font-extrabold text-gray-800 leading-tight">
                Get Your <span className="text-[#46A358]">Favorite</span> Plants
              </h1>
              <p className="text-gray-500 mt-5 text-lg max-w-lg">
                Explore our collection of beautiful indoor plants that add color
                and life to your space. Freshness and calmness, delivered to
                your door.
              </p>
              <button
                className="btn"
                style={{
                  background: "#46A358",
                  color: "#fff",
                  width: "140px",
                  borderRadius: "6px",
                  marginTop: "50px",
                }}
              >
                Discover More
              </button>
            </div>

            <div className="flex items-center justify-center w-[500px] h-[500px]">
              <Image
                src={require("./images/product-20-320x320 1.png")}
                alt="featured plant"
                width={350}
                height={350}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* MAIN PRODUCTS */}
      <section className="flex gap-5 container  mt-2">
        {/* Sidebar */}
        <div style={{ width: "25%" }}>
          <h5 className="text-xl font-bold text-gray-800">Categories</h5>
          <ul className="mt-2">
            <li className="text-sm text-gray-700">House Plants (33)</li>
            {/* Qo‘shimcha kategoriyalar qo‘shish mumkin */}
          </ul>
        </div>

        {/* Product Grid */}
        <div>
          <div className="flex justify-between w-[1000px]">
            <ul className="flex gap-10 text-gray-600 font-medium">
              <li>All Plants</li>
              <li>New Arrivals</li>
              <li>Sale</li>
            </ul>
            <div>Sort by: Default</div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-6">Our Plants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleClick(product.id)}
                  className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <img
                    src={product.images}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-[16px] font-light text-gray-800">
                      {product.title}
                    </h3>
                    <p className="text-green-600 text-lg">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
