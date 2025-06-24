"use client";

import { FaMobileAlt, FaLaptop, FaCamera, FaHeadphones } from "react-icons/fa";
import { MdWatch, MdSportsEsports } from "react-icons/md";

export default function CategoryRow() {
  return (
    <section className="bg-[#1e1e1e] text-white py-3">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm overflow-x-auto">
        
        {/* Category */}
        <div className="flex items-center gap-2 px-4 border-r border-gray-600">
          <FaMobileAlt className="text-lg" />
          <span>Phones</span>
        </div>

        <div className="flex items-center gap-2 px-4 border-r border-gray-600">
          <FaLaptop className="text-lg" />
          <span>Computers</span>
        </div>

        <div className="flex items-center gap-2 px-4 border-r border-gray-600">
          <MdWatch className="text-lg" />
          <span>Smart Watches</span>
        </div>

        <div className="flex items-center gap-2 px-4 border-r border-gray-600">
          <FaCamera className="text-lg" />
          <span>Cameras</span>
        </div>

        <div className="flex items-center gap-2 px-4 border-r border-gray-600">
          <FaHeadphones className="text-lg" />
          <span>Headphones</span>
        </div>

        <div className="flex items-center gap-2 px-4">
          <MdSportsEsports className="text-lg" />
          <span>Gaming</span>
        </div>
      </div>
    </section>
  );
}
