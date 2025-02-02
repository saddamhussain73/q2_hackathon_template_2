import { ImSkype } from "react-icons/im";
import { FaPinterest } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <footer className="text-white body-font bg-[#2A254B]">
      {/* Footer Main Container */}
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap md:text-left text-center">
          {/* Menu Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 md:mb-0">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Menu
            </h2>
            <nav className="list-none mb-4 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">New arrivals</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Best sellers</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Recently viewed</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Popular this week</a>
              </li>
              <li>
                <a href="/AllProducts" className="hover:text-gray-400">All products</a>
              </li>
            </nav>
          </div>

          {/* Categories Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 md:mb-0">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Categories
            </h2>
            <nav className="list-none mb-4 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">Crockery</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Furniture</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Homeware</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Plant pots</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Chairs</a>
              </li>
            </nav>
          </div>

          {/* Our Company Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 md:mb-0">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Our Company
            </h2>
            <nav className="list-none mb-4 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">About us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Vacancies</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Contact us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Privacy</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Returns policy</a>
              </li>
            </nav>
          </div>

          {/* Mailing List Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Join our mailing list
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-gray-100 bg-opacity-20 rounded border border-gray-300 py-2 px-4 text-white outline-none focus:bg-transparent focus:ring-2 focus:ring-indigo-300"
              />
              <button className="bg-white text-[#2A254B] font-medium py-2 px-4 rounded hover:bg-indigo-500 hover:text-white transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="bg-[#4E4D93] w-full h-[1px]"></div>

      {/* Footer Bottom Section */}
      <div className="bg-[#2A254B]">
        <div className="container py-6 mx-auto flex flex-col sm:flex-row items-center">
          <p className="text-sm text-white text-center sm:text-left">
            Copyright 2022 Avion LTD
          </p>
          {/* Social Icons */}
          <div className="flex gap-6 mt-4 sm:mt-0 sm:ml-auto">
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaFacebookSquare className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <ImSkype className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaPinterest className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
