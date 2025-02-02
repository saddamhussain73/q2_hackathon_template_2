"use client"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { useClient } from "sanity";

import { urlFor } from "@/sanity/lib/image";
import { allpoducts, newCeramics } from "@/sanity/lib/queries";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const ArrayMap = () => {

  const[product, setProduct] = useState<Product[]>([])
  useEffect(() => {
  async function fetchproduct() {
    const fetchedproduct : Product[] = await client.fetch(allpoducts)
    setProduct(fetchedproduct)
  }
  fetchproduct()
},[])
    
    return (
      <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
        {/* Header */}
        <h1 className="text-2xl font-semibold">
        All Products
        </h1>

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

       
  
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {product.map((product) => (
          <div key={product._id}>
          <Link href={`/product/${product.slug.current}`}>
           
            {product.image && (
              <img
                src={urlFor(product.image).url()}
                alt={product.name}
                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
            )}
            <div className="mt-4 text-[#2A254B]">
            <h1 className="py-2"> {product.name}</h1>
           <p> {product.price}</p>
            {/* {product.description} */}
            
            </div>
            </Link>
            </div>
            
        )
        )}
        
           
        </div>
        <div className="justify-center flex w-full "> <button className="bg-[#F9F9F9] text-[#2A254B]  p-[16px] px-[32px] mt-[32px] ">View collection</button></div>
      </div>
    );
  };

  export default ArrayMap;