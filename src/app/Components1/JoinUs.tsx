import React from "react";

const JoinUs = () => {
  return (
    <section className="w-full bg-gray-50 py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        {/* Text Content */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2A254B] mb-4">
          Join the club and get the benefits
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-6 max-w-[600px]">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
        </p>

        {/* Signup Form */}
        <form className="w-full max-w-[600px] flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A254B] transition-all"
            required
          />
          <button
            type="submit"
            className="bg-[#2A254B] text-white p-3 rounded-md hover:bg-[#4B3D8C] transition-all duration-300"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinUs;
