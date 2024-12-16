"use client";

import { Search, ShoppingCart, CircleUser } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-4 bg-white shadow-md">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        {/* Left: Search Icon */}
        <div className="flex items-center">
          <Search className="w-6 h-6 text-black cursor-pointer" />
        </div>

        {/* Center: Logo */}
        <div className="text-black text-2xl ">Avion</div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          <ShoppingCart className="w-6 h-6 text-black cursor-pointer" />
          <CircleUser className="w-6 h-6 text-black cursor-pointer" />

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-gray-200 mt-2 w-full h-[1px]"></div>

      {/* Navigation Links */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:justify-center transition-all duration-300`}
      >
        <ul className="flex flex-col lg:flex-row lg:gap-8 text-gray-600 text-sm mt-4 lg:mt-0">
          <li className="hover:text-black transition">
            <Link href="/Plant pots">Plant pots</Link>
          </li>
          <li className="hover:text-black transition">
            <Link href="/Ceramics">Ceramics</Link>
          </li>
          <li className="hover:text-black transition">
            <Link href="/Tables">Tables</Link>
          </li>
          <li className="hover:text-black transition">
            <Link href="/Chairs">Chairs</Link>
          </li>
          <li className="hover:text-black transition">
            <Link href="/Crockery">Crockery</Link>
          </li>
          <li className="hover:text-black transition">
            <Link href="/Tableware">Tableware</Link>
          </li>
          <li className="hover:text-black transition">
            <Link href="/Cutlery">Cutlery</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}