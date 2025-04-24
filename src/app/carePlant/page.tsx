"use client";
import React from "react";
import Image from "next/image";
import Temperature from "../images/Temperature.jpg";
import Fertilizing from "../images/Fertilizing.jpg";
import Sunlight from "../images/Sunlight.jpeg";
import Watering from "../images/Watering.jpg";
const plantCareTips = [
  {
    title: "Watering",
    image: Watering, // O'zingiz joylashtirgan rasm yo'li
    description:
      "Water your plants regularly but avoid overwatering. Always check the soil moisture before watering.",
  },
  {
    title: "Sunlight",
    image: Sunlight,
    description:
      "Most indoor plants need indirect sunlight. Place them near windows but protect from direct rays.",
  },
  {
    title: "Fertilizing",
    image: Fertilizing,
    description:
      "Use organic or balanced fertilizer once a month during the growing season.",
  },
  {
    title: "Temperature & Air",
    image: Temperature,
    description:
      "Keep plants in stable temperature and provide good air circulation to avoid pests and disease.",
  },
];

const PlantCarePage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
        How to Take Care of Your Plants
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {plantCareTips.map((tip, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <Image
              src={tip.image}
              alt={tip.title}
              width={600}
              height={400}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">
                {tip.title}
              </h2>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Q: How often should I water my plant? <br />
          A: Depends on the type, but usually once or twice a week. Always test
          the soil.
        </p>
      </div>
    </div>
  );
};

export default PlantCarePage;
