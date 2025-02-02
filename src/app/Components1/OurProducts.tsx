import Image from "next/image";
import Link from "next/link";

const Popular = () => {
  return (
    <div className="w-full h-[744px] ">
      <h4 className="text-[32px] pl-9 md:pl-28 pt-20">Our popular products</h4>
      <div className="md:flex justify-center">
      <div className="w-full md:w-[1280px] h-[462px] mt-10 flex justify-start gap-8  flex-wrap lg:flex-nowrap">
        <div className="w-full sm:w-[630px] h-full mb-8 sm:mb-0">
          <Image
            src={"/images/Large.png"}
            alt="img"
            height={0}
            width={375}
            className="w-full h-[375px]"
          />
          <h4 className="text-[20px] mb-4 mt-2">The Poplar suede sofa</h4>
          <p>£980</p>
        </div>
        <div className="w-full sm:w-[305px] h-full mb-8 sm:mb-0">
          <Image
            src={"/images/chair.png"}
            alt="img"
            height={0}
            width={375}
            className="w-full h-[375px]"
          />
          <h4 className="text-[20px] mb-4 mt-2">The Dandy chair</h4>
          <p>£980</p>
        </div>
        <div className="w-full sm:w-[305px] h-full mb-8 sm:mb-0">
          <Image
            src={"/images/chair1.png"}
            alt="img"
            height={0}
            width={375}
            className="w-full h-[375px]"
          />
          <h4 className="text-[20px] mb-4 mt-2">The Dandy chair</h4>
          <p>£980</p>
        </div>
      </div></div>
      <Link href={'/productListing'}><div className="w-full flex justify-center mt-28 md:mt-4 md:mb-8"><button className="w-[360px] md:w-[170px] h-[56px] bg-[#F9F9F9] text-sm">
              View collection
        </button></div></Link>
    </div>
  );
};

export default Popular;