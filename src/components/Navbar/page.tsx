"use client";

import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../../../lib/firebase"; // adjust path if needed
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image
            src="/image/cartlogo4.png"
            alt="Cart Logo"
            width={90}
            height={50}
            className="object-contain"
          />
          <span className="text-xl font-semibold text-black">E-Tech</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-gray-500">Home</Link>
          <Link href="/AboutUs" className="hover:text-gray-500">About</Link>
          <Link href="/Contact" className="hover:text-gray-500">Contact</Link>
          <Link href="/blog" className="hover:text-gray-500">Blog</Link>
        </nav>

        {/* Right-side Icons */}
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <div className="relative">
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-3 py-1 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 text-black"
            />
          </div>

          <IoMdCart className="text-2xl text-gray-700 hover:text-gray-500 cursor-pointer" />

          {/* 👤 User Icon with Logout */}
          <FaUser
            onClick={handleLogout}
            className="text-2xl text-gray-700 hover:text-gray-500 cursor-pointer"
            title="Logout"
          />
        </div>
      </div>
    </header>
  );
}
