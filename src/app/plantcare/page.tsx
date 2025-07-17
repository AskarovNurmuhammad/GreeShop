"use client";
import React from "react";
import Footer from "../Footer";

const plantTips = [
  {
    title: "Watering",
    image:
      "https://t3.ftcdn.net/jpg/00/95/22/64/360_F_95226427_btAZAKaubllvHCDCS5Kh0dy2EMghL2bm.jpg",
    description:
      "Water your plants regularly, but avoid overwatering. Check soil moisture before watering.",
  },
  {
    title: "Sunlight",
    image: "https://cdn.mos.cms.futurecdn.net/6ZkSQUkhWPpr4NJCUzDshX.jpg",
    description:
      "Most plants need at least 4-6 hours of sunlight daily. Place them near a bright window.",
  },
  {
    title: "Fertilizer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqkrqfoVc-h-kIBk28moBLNSzN89qOygDGw&s",
    description:
      "Feed your plants with appropriate fertilizer every 2–4 weeks during growing season.",
  },
];

export default function PlantCarePage() {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
        🌿 Plant Care Tips
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-40 md:px-[120px] px-[20px]">
        {plantTips.map((tip, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 transition-transform hover:scale-105"
          >
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              {tip.title}
            </h2>
            <p className="text-gray-700">{tip.description}</p>
          </div>
        ))}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
