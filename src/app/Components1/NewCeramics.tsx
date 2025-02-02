"use client"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { useClient } from "sanity";

import { urlFor } from "@/sanity/lib/image";
import { allpoducts, newCeramics } from "@/sanity/lib/queries";
import Link from "next/link";

const NewCeramics = () => {

  const[product, setProduct] = useState<Product[]>([])
  useEffect(() => {
  async function fetchproduct() {
    const fetchedproduct : Product[] = await client.fetch(newCeramics)
    setProduct(fetchedproduct)
  }
  fetchproduct()
},[])
    
    return (
      <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
        {/* Header */}
        <h1 className="text-2xl font-semibold">
        New ceramics
        </h1>

       
  
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {product.map((product) => (
          <div key={product._id}>
          
           
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
            </div>
            
        )
        )}
        
           
        </div>
       <Link  href={'/AllProducts'}><div className="justify-center flex w-full "> <button className="bg-[#F9F9F9] text-[#2A254B]  p-[16px] px-[32px] mt-[32px] ">View collection</button></div></Link> 
      </div>
    );
  };
  
  export default NewCeramics;