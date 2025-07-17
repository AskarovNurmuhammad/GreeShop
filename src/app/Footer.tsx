import Image from "next/image";
import React from "react";
import Location from "@/app/photos/Location.png";
import Message from "@/app/photos/Message.png";
import Calling from "@/app/photos/Calling.png";
import Facebook from "@/app/photos/Facebook.png";
import Instagram from "@/app/photos/Instagram.png";
import Twitter from "@/app/photos/Twitter.png";
import Union from "@/app/photos/Union.png";
import Linkedin from "@/app/photos/Linkedin.png";
import Image16 from "@/app/photos/image 16.png";
import Logo from "./photos/Logo.png";

const Footer = () => {
  return (
    <div className="md:px-[120px] px-[20px] mb-[100px]">
      {/* First section */}
      <div className="bg-[#edf6ef] xl:h-[88px] h-fit w-full flex xl:flex-row flex-col items-center md:gap-15 gap-5 p-[23px]">
        <div className="flex md:flex-row flex-col md:gap-15 gap-5">
          <Image src={Logo} alt="logo" />
          <div className="flex gap-2 items-center">
            <Image src={Location} alt="location icon" />
            <p className="text-sm text-[#3D3D3D] w-[176px]">
              70 West Buckingham Ave. Farmingdale, NY 11735
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:gap-15 gap-5">
          <div className="flex gap-2 items-center">
            <Image src={Message} alt="Message Icon" />
            <p className="text-sm text-[#3d3d3d]">contact@greenshop.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={Calling} alt="Calling Icon" />
            <p className="text-sm text-[#3d3d3d]">+88 01911 717 490</p>
          </div>
        </div>
      </div>
      {/* Second section */}
      <div className="bg-[#fbfbfb] xl:h-[236px] h-fit w-full flex xl:flex-row flex-col items-center xl:gap-30 lg:gap-15 gap-5 p-[23px]">
        <div className="flex sm:flex-row flex-col sm:gap-30 gap-5 sm:mr-0 mr-[80px]">
          <div>
            <p className="font-bold text-base text-[#3d3d3d]">My Account</p>
            <p className="text-sm text-[#3d3d3d] w-[81px] leading-8">
              My Account Our stores Contact us Career Specials
            </p>
          </div>
          <div>
            <p className="font-bold text-base text-[#3d3d3d]">Help & Guide</p>
            <p className="text-sm text-[#3d3d3d] w-[137px] leading-8">
              Help Center How to Buy Shipping & Delivery Product Policy How to
              Return
            </p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col md:gap-44 sm:gap-30 gap-5">
          <div>
            <p className="font-bold text-base text-[#3d3d3d]">Categories</p>
            <p className="text-sm text-[#3d3d3d] w-[93px] leading-8">
              House Plants Potter Plants Seeds Small Plants Accessories
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold text-base text-[#3d3d3d]">Social Media</p>
            <div className="flex gap-2">
              <div className="w-[30px] h-[30px] rounded-sm border border-[#d7eadb] flex justify-center items-center">
                <Image src={Facebook} alt="Facebook icon" />
              </div>
              <div className="w-[30px] h-[30px] rounded-sm border border-[#d7eadb] flex justify-center items-center">
                <Image src={Instagram} alt="Facebook icon" />
              </div>
              <div className="w-[30px] h-[30px] rounded-sm border border-[#d7eadb] flex justify-center items-center">
                <Image src={Twitter} alt="Facebook icon" />
              </div>
              <div className="w-[30px] h-[30px] rounded-sm border border-[#d7eadb] flex justify-center items-center">
                <Image src={Linkedin} alt="Facebook icon" />
              </div>
              <div className="w-[30px] h-[30px] rounded-sm border border-[#d7eadb] flex justify-center items-center">
                <Image src={Union} alt="Facebook icon" />
              </div>
            </div>
            <p className="font-bold text-base text-[#3d3d3d]">We Accept</p>
            <div>
              <Image src={Image16} alt="Image16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
