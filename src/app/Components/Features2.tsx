import React from "react";

const Features2 = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 px-6 lg:px-20 py-12 max-w-[1440px] mx-auto">
      {/* Left Side: Text Content */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2A254B] mb-6 leading-snug">
          From a studio in London to a global brand with over 400 outlets
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-4 leading-relaxed">
          When we started Avion, the idea was simple. Make high-quality furniture
          affordable and available for the mass market.
        </p>
        <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
          Handmade, and lovingly crafted furniture and homeware is what we live,
          breathe, and design so our Chelsea boutique becomes the hotbed for the
          London interior design community.
        </p>
        <button className="bg-[#2A254B] text-white py-3 px-6 rounded-lg hover:bg-[#4B3D8C] transition-all duration-300">
          Get in touch
        </button>
      </div>

      {/* Right Side: Image Section */}
      <div className="flex-1">
        <div
          className="w-full h-[300px] md:h-[400px] bg-cover bg-center rounded-lg shadow-lg"
          style={{
            backgroundImage: "url('https://via.placeholder.com/600x400')",
          }}
        >
            <img src="/HomeImag/Image.png" alt="sorrry" />
        </div>
      </div>
    </section>
  );
};

export default Features2;