import { ChevronDown } from 'lucide-react'; 
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  const Products = [
    {
      Pic: '/images/chair.png',
      PName: "Rustic Vase Set",
      pPrice: "£155",
     description: 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.'
    },
    {
      Pic: '/images/vase.png',
      PName: "The Lucy Lamp",
      pPrice: "£399",
      description: 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.'
    },
    {
      Pic: '/images/Product Image.png',
      PName: "The Silky Vase",
      pPrice: "£125",
      description: 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.'
    },
    
    {
      Pic: '/images/lamp.png',
      PName: "The Dandy chair",
      pPrice: "£250",
      description: 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.'
    },
    {
      Pic: '/images/Photo3.png',
      PName: "Rustic Vase Set",
      pPrice: "£155",
      description: 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.'
    },
    {
      Pic: '/images/Photo2.png',
      PName: "The Lucy Lamp",
      pPrice: "£399",
      description: 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.'
    },
    {
      Pic: '/images/Photo4.png',
      PName: "The Silky Vase",
      pPrice: "£125",
      description: 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.'
    },
    
    {
      Pic: '/images/Photo5.png',
      PName: "The Dandy chair",
      pPrice: "£250",
      description: 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.'
    },
    {
      Pic: '/images/chair.png',
      PName: "Rustic Vase Set",
      pPrice: "£155",
      description: 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.'
    },
    {
      Pic: '/images/vase.png',
      PName: "The Lucy Lamp",
      pPrice: "£399",
      description: 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.'
    },
    {
      Pic: '/images/Product Image.png',
      PName: "The Silky Vase",
      pPrice: "£125",
      description: 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.'
    },
    
    {
      Pic: '/images/lamp.png',
      PName: "The Dandy chair",
      pPrice: "£250",
      description: 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.'
    },
  ];
  return (
    <div className="">
      <div className="w-auto h-[146px] md:h-[209px] bg-cover bg-center">
      <h1 className='text-4xl text-white sm:block hidden pl-20 pt-[123px]'>All Products</h1>
      </div>
      <div className="w-auto h-24 md:h-16 flex md:hidden justify-evenly items-center">
        <button className="w-[163px] h-[56px] bg-[#F9F9F9] flex items-center justify-center">Filters <ChevronDown className='w-4 h-4 ml-4'/></button>
        <button className="w-[163px] h-[56px] bg-[#F9F9F9] flex items-center justify-center">Sorting <ChevronDown className='w-4 h-4 ml-4' /></button>
      </div>

      <div className="w-auto h-16 hidden md:flex justify-between px-4 items-center">
        <div className='flex gap-2 justify-between'>
        <button className="w-[114px] h-[48px] bg-[#ffffff] flex items-center justify-center">Category <ChevronDown className='w-4 h-4 ml-4'/></button>
        <button className="w-[162px] h-[48px] bg-[#ffffff] flex items-center justify-center">Product type <ChevronDown className='w-4 h-4 ml-4'/></button>
        <button className="w-[108px] h-[48px] bg-[#ffffff] flex items-center justify-center">Price <ChevronDown className='w-4 h-4 ml-4'/></button>
        <button className="w-[114px] h-[48px] bg-[#ffffff] flex items-center justify-center">Brand <ChevronDown className='w-4 h-4 ml-4' /></button>
        </div>

        <div className='flex  justify-between'>
        <button className="w-[114px] h-[48px] bg-[#ffffff] flex items-center justify-center">Sort by:</button>
        <button className="w-[154px] h-[48px] bg-[#ffffff] flex items-center justify-center">Date added <ChevronDown className='w-4 h-4 ml-4'/></button>
        </div>
      </div>

      <div className='w-full h-auto flex justify-center md:hidden'>
      <div className='w-4/6 grid grid-cols-2 place-items-center gap-[110px]'>
          {Products.map((newItem, index) => (
        <Link href={`/product/${index}`} key={index}>
          <div key={index} className="w-[163px] h-[201px]">
            <div>
              <Image src={newItem.Pic} alt={newItem.PName} width={163} height={201} />
            </div>
            <h4 className="text-[20px] mt-4">{newItem.PName}</h4>
            <p className="text-sm mt-2">{newItem.pPrice}</p>
          </div></Link>
        ))}
        </div>
      </div>


      <div className='w-full h-auto md:flex justify-center hidden mt-4'>
      <div className='w-10/12 grid grid-cols-4 place-items-center gap-20'>
          {Products.map((newItem, index) => (
        <Link href={`/product/${index}`} key={index}>
          <div key={index} className="lg:w-[305px] lg:h-[462px]">
            <div>
              <Image src={newItem.Pic} alt={newItem.PName} width={305} height={375} />
            </div>
            <h4 className="text-[20px] mt-4">{newItem.PName}</h4>
            <p className="text-sm mt-2">{newItem.pPrice}</p>
          </div></Link>
        ))}
        </div>
      </div>
      

      <Link href={'/productListing'}><div className="w-full flex justify-center mt-28 md:mt-2 md:mb-4"><button className="w-[360px] md:w-[170px] h-[56px] bg-[#F9F9F9] text-sm">
              View collection
        </button></div></Link>
    </div>
  )
}

export default page