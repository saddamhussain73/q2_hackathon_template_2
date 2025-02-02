import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

interface ProductPageProps {
    params: Promise<{slug : string}>
}
async function getProduct(slug : string): Promise<Product> {
    return client.fetch(
        groq`*[_type== "product" && slug.current ==$slug][0]{
            _id,
            category,
            name,
            _type,
            image,
            price,
           description,
           dimensions,
            
        }`,{slug}
    )
}
export default async function ProductPage({params} : ProductPageProps) {
    const {slug} = await params;
    const product = await getProduct(slug)
    return (
        <div className="max-w-7xl- mx-auto px-4"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-square">
{product?.image && (
    <img src={urlFor(product.image).url()} alt={product.name}
    width={500}
    height={500}
    className="w-full h-full object-cover" />

)
    

}
            </div>
            
            <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
              <div>
                

              </div>
              <div className="text-[#505977] text-sm md:text-base">
               
            <div>
                <h1  className="text-xl md:text-2xl font-semibold">{product.name}</h1>
                <p className="py-2 text-lg md:text-xl">{product.price}</p>
                <h1 className="font-semibold">Description</h1>
                <p  className="my-4 md:my-6">{product.description}</p>
            </div>
            <div className="my-8">
                    <h1 className="font-semibold">Dimensions</h1>
                  </div>
                  <div className="flex gap-12 md:gap-20 text-sm md:text-base">
                  {/* {product.dimensions} */}
                    </div>
                    <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0">
                      Add to cart
                    </button>
        </div>
        </div>
</div>
</div>
)}