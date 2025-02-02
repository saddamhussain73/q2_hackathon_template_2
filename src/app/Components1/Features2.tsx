import Image from "next/image";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6 lg:p-12 xl:p-12">
        <div className="w-full max-w-md mx-auto lg:ml-0">
          <h4 className="text-lg sm:text-xl lg:text-2xl xl:text-2xl font-bold leading-tight">
            From a studio in London to a global brand with over 400 outlets
          </h4>
          <p className="pt-4 text-sm sm:text-base lg:text-lg xl:text-lg">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
          </p>
          <p className="pt-4 text-sm sm:text-base lg:text-lg xl:text-lg">
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <div className="flex justify-center lg:justify-start mt-8 lg:mt-12 xl:mt-12">
            <Link href={'./about'}>
              <button className="w-full lg:w-auto xl:w-auto bg-[#F9F9F9] text-sm lg:text-base xl:text-base py-2 lg:py-4 xl:py-4 px-4 lg:px-8 xl:px-8">
                Get in touch
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="w-full lg:w-1/2 xl:w-1/2 h-auto lg:h-screen xl:h-screen relative">
        <Image
          src={"/images/blend.png"}
          alt="img"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default GetInTouch;