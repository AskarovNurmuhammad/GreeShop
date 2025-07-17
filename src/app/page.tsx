import Image from "next/image";
import "./styles/main.css";
import { inter } from "./ui/fonts";
import Plant from "@/app/photos/01 1.png";
import Link from "next/link";
import Products from "./Products";
import Categories from "./Categories";
import Cart from "./Cart";
import Footer from "./Footer";

export default async function Home() {
  return (
    <div
      className={`flex flex-col gap-[46px] sm:pb-0 pb-[120px] ${inter.className}`}
    >
      <Cart />
      {/* main Photo */}
      <div className="md:px-[120px] px-[20px] mt-[4px] relative">
        <div className="bg-[#F5F5F580] w-full h-[450px] flex">
          <div className="lg:w-[55%] md:w-[80%] w-full h-1/2 p-[40px] flex flex-col gap-2">
            <p
              className={`text-[14px] ${inter.className} uppercase text-[#3D3D3D]`}
            >
              Welcome to GreenShop
            </p>
            <p
              className={`${inter.className} text-[#3D3D3D] font-[900] 2xl:text-[70px] uppercase 2xl:leading-[70px] text-[40px] leading-[50px] tracking-normal `}
            >
              Let’s Make a Better <span className="text-[#46a358]">Planet</span>
            </p>
            <p className={`text-[#727272]`}>
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
          </div>
          <div className="absolute -top-10 right-20 lg:block hidden">
            <Image src={Plant} alt="Plant" />
          </div>
          <div className="absolute right-100 bottom-2 lg:block hidden">
            <Image src={Plant} alt="Plant" width={135} />
          </div>
        </div>
        <Link
          href={"/shop"}
          className="px-[26px] py-[9px] rounded-md bg-[#46A358] absolute text-white md:bottom-15 bottom-5 md:left-41 left-15 cursor-pointer ease-linear duration-150 hover:bg-[#4d8e5a]"
        >
          SHOP NOW
        </Link>
      </div>
      {/* second page */}
      <div className="md:px-[120px] px-[20px] w-full">
        <div className="w-full flex lg:flex-row flex-col gap-14">
          {/* categories */}
          <div className="bg-[#FBFBFB] lg:w-1/3 w-full p-[14px] h-[500px]">
            <div>
              <h1 className={`${inter.className} font-bold text-[18px]`}>
                Categories
              </h1>
              <Categories />
            </div>
          </div>
          {/* Products */}
          <Products />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
