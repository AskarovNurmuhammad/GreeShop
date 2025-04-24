// components/Footer.tsx
import Image from "next/image";
import React from "react";
import card1 from "./images/Group 22.png";
import card2 from "./images/Group 21.png";
import card3 from "./images/Group 20.png";
import pay from "./images/image 16.png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 font-[Cera Pro]">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start space-x-3">
          <Image src={card1} alt="Card image" />
        </div>
        <div className="flex items-start space-x-3">
          <Image src={card2} alt="Card image" />
        </div>
        <div className="flex items-start space-x-3">
          <Image src={card3} alt="Card image" />
        </div>

        <div>
          <h3 className="font-semibold mb-2">
            Would you like to join newsletters?
          </h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button className="bg-green-600 text-white px-4 rounded-r-md hover:bg-green-700 transition duration-200">
              Join
            </button>
          </div>
          <p className="text-sm mt-2">
            We usually post offers and challenges in the newsletter. We’re your
            online houseplant destination.
          </p>
        </div>
      </div>

      <div className="bg-green-50 py-4 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
        <div className="flex items-center mb-2 md:mb-0">
          <strong className="text-green-700 text-lg mr-2">🌿 GREENSHOP</strong>
          <span className="mx-2">|</span>
          <span>70 West Buckingham Ave. Farmingdale, NY 11735</span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="mailto:contact@greenshop.com"
            className="text-[#3D3D3D] text-[14px] font-[400]"
          >
            📧 contact@greenshop.com
          </a>
          <a
            href="tel:+8801911717490"
            className="text-[#3D3D3D] text-[14px] font-[400]"
          >
            📞 +88 01911 717 490
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
        <div>
          <h4 className="font-semibold mb-2">My Account</h4>
          <ul className="space-y-1 d-flex flex-col gap-2">
            <li>
              <a
                href="#"
                style={{
                  color: "#3d3d3d",
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                My Account
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#3d3d3d",
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                Our Stores
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#3d3d3d",
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#3d3d3d",
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                Career
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#3d3d3d",
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                Specials
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Help & Guide</h4>
          <ul className="space-y-1 d-flex flex-col gap-2">
            <li>
              <a
                href="#"
                style={{
                  color: "#3d3d3d",
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#3d3d3d",
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                How to Buy
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#3d3d3d",
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#3d3d3d",
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                Product Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#3d3d3d",
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                How to Return
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Categories</h4>
          <ul className="space-y-1 d-flex flex-col gap-2">
            <li>
              <a
                href="#"
                style={{
                  color: "#3d3d3d",
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                House Plants
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#3d3d3d",
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                Potter Plants
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#3d3d3d",
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                Seeds
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#3d3d3d",
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                Small Plants
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#3d3d3d",
                  textDecoration: "none",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                Accessories
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-col gap-5">
          <div>
            <h4 className="font-semibold mb-2">Social Media</h4>
            <div className="flex space-x-3">
              <a href="#" className="text-green-600" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 12.072c0-5.59-4.56-10.072-10.22-10.072C6.59 2 2 6.48 2 12.072 2 17.58 5.88 22 10.66 22c.84 0 1.62-.14 2.36-.37v-8.38h-1.59c-1.49 0-2.36-1.22-2.36-2.42v-1.13h3.95l-.52-3.83h-3.43v-2.44c0-1.14.31-1.9 1.92-1.9h2.07v-3.48C17.01 2.1 15.91 2 14.85 2 12.13 2 10.24 3.91 10.24 6.63v2.45H8.54v3.83h1.7v8.38c.74.23 1.52.37 2.36.37 5.06 0 9.22-4.24 9.22-9.93z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#" className="text-green-600" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2.2c3.19 0 3.57.01 4.82.07 1.23.06 2.18.28 2.67.6a5.35 5.35 0 0 1 2.1 2.1c.32.49.54 1.44.6 2.67.06 1.25.07 1.63.07 4.82s-.01 3.57-.07 4.82c-.06 1.23-.28 2.18-.6 2.67a5.35 5.35 0 0 1-2.1 2.1c-.49.32-1.44.54-2.67.6-1.25.06-1.63.07-4.82.07s-3.57-.01-4.82-.07c-1.23-.06-2.18-.28-2.67-.6a5.35 5.35 0 0 1-2.1-2.1c-.32-.49-.54-1.44-.6-2.67C2.21 15.57 2.2 15.19 2.2 12s.01-3.57.07-4.82c.06-1.23.28-2.18.6-2.67a5.35 5.35 0 0 1 2.1-2.1c.49-.32 1.44-.54 2.67-.6C8.43 2.21 8.81 2.2 12 2.2zm0-2.2C8.74 0 8.36.01 7.06.07 5.77.13 4.65.45 3.82.75 2.95 1.06 2.25 1.54 1.73 2.06.29 2.5.07 3.64.07 7.06V12c0 3.42.22 4.56.66 5.41.52.97 1 1.49 2.06 2.06.85.44 1.99.66 5.41.66 3.42 0 4.56-.22 5.41-.66.97-.52 1.49-1 2.06-2.06.44-.85.66-1.99.66-5.41s-.22-4.56-.66-5.41c-.52-.97-1-1.49-2.06-2.06-.85-.44-1.99-.66-5.41-.66zm0 11.62c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6.75c-1.5 0-2.75 1.25-2.75 2.75S10.5 12 12 12s2.75-1.25 2.75-2.75S13.5 5.5 12 5.5zm6.5-2.75c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#" className="text-green-600" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.633 7.997c.013.182.013.364.013.546 0 5.563-4.237 11.972-11.972 11.972-2.376 0-4.58-.693-6.436-1.878.334.039.669.059 1.005.059 1.94 0 3.713-.664 5.127-1.785-1.8-.033-3.318-1.215-3.844-2.837.25.047.51.075.774.075.38 0 .754-.051 1.109-.146-1.88-.377-3.293-2.022-3.293-3.999v-.051c.554.309 1.188.494 1.862.516-1.105-.738-1.832-1.956-1.832-3.375 0-.743.199-1.44.546-2.041 1.996 2.438 4.967 4.036 8.312 4.198-.069-.297-.104-.609-.104-.92 0-2.227 1.812-4.038 4.038-4.038 1.16 0 2.207.49 2.933 1.265.915-.178 1.775-.513 2.548-.97-.301.943-.943 1.736-1.777 2.239.817-.097 1.603-.315 2.328-.634-.54.79-1.226 1.49-2.015 2.037z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#" className="text-green-600" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7 20H4v-8h3v8zm-1.5-9.14c-1.04 0-1.88-.84-1.88-1.88 0-1.04.84-1.88 1.88-1.88s1.88.84 1.88 1.88c0 1.04-.84 1.88-1.88 1.88zm15.5 9.14h-3v-4.5c0-1.07-.02-2.44-1.48-2.44-1.48 0-1.7 1.16-1.7 2.36v4.58h-3v-8h3v1.09h.04c.42-.79 1.45-1.62 2.99-1.62 3.2 0 3.79 2.11 3.79 4.85v4.68h-.01z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#" className="text-green-600" aria-label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M23.498 6.186a3.004 3.004 0 0 0-2.11-2.11C19.679 3.5 12 3.5 12 3.5s-7.679 0-9.388.576A3.004 3.004 0 0 0 .502 6.186C.01 7.188 0 8.5 0 12s.01 4.812.502 5.814a3.004 3.004 0 0 0 2.11 2.11C4.321 20.5 12 20.5 12 20.5s7.679 0 9.388-.576a3.004 3.004 0 0 0 2.11-2.11C23.99 16.812 24 15.5 24 12s-.01-4.812-.502-5.814zM9.545 15.67V8.33l6.455 3.67-6.455 3.67z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">We Accept</h4>
            <div className="flex space-x-2">
              <Image src={pay} alt="Payment methods" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
