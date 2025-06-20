"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#0a0a0a] text-white py-1">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
     
        < div className="bg-black text-white pt-4 pb-16 px-12">
          <p className="text-gray-400 text-sm mb-6">Pro.Beyond.</p>
          <h1 className="text-5xl font-light text-white leading-tight mb-4">
            IPhone 14 <span className="font-bold">Pro</span>
          </h1>
          <p className="text-gray-400 mb-6">
            Created to change everything for the better. For everyone.
          </p>
          <Link href="/shop">
            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
              Shop Now
            </button>
          </Link>
        </div>

       
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/image/ii-removebg-preview.png"
            alt="iPhone 14 Pro"
            width={400}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
