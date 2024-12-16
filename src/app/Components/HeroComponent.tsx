import Image from "next/image";

const HeroComponent = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen w-full px-[80px] py-[60px] ">
      {/* Left Section: Text Content */}
      
      <div className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-[#2A254B] text-white">
        <h1 className="text-1xl md:text-2xl lg:text-3xl mb-6 leading-snug">
          The furniture brand for the future, with timeless designs
        </h1>
        <button className="bg-[#F9F9F926] text-white py-2 px-6 hover:bg-gray-300 transition duration-300 mb-28 w-fit">
          View collection
        </button>
        <p className="text-base md:text-lg text-gray-300 ">
          A new era in eco-friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors, and a beautiful way to
          display things digitally using modern web technologies.
        </p>
      </div>

      {/* Right Section: Hero Image */}
      <div className="flex-1 relative bg-[#87A4A5]">
        <Image
          src="/HerosectionImag/Right Image.png" // Change this to your correct image path
          alt="Modern Furniture Chair"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    
    </section>
  );
};

export default HeroComponent;
