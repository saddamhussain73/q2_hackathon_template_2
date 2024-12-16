import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineCreditCard } from "react-icons/ai";
import { LuSprout } from "react-icons/lu";
export default function Features() {
    const features = [
      {
        icon: <TbTruckDelivery className="w-[36px] h-[36px] " />,
        title: "Next day as standard",
        description: "Order before 3pm and get your order the next day as standard",
      },
      {
        icon: <IoIosCheckmarkCircleOutline className="w-[36px] h-[36px] " />,
        title: "Made by true artisans",
        description: "Handmade crafted goods made with real passion and craftsmanship",
      },
      {
        icon: <AiOutlineCreditCard className="w-[36px] h-[36px] " /> ,
        title: "Unbeatable prices",
        description: "For our materials and quality you won’t find better prices anywhere",
      },
      {
        icon: <LuSprout className="w-[36px] h-[36px] " />,
        title: "Recycled packaging",
        description:
          "We use 100% recycled packaging to ensure our footprint is manageable",
      },
    ];
  
    return (
      <div className="bg-white py-12 px-6">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#2A254B] mb-10">
          What makes our brand different
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-8 md:gap-4 max-w-[1200px] mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-4 w-full md:w-1/4">
              <div className="text-3xl text-[#2A254B]">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-[#2A254B]">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }