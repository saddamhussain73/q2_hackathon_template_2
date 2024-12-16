import { Button } from "@/components/ui/button"
const ArrayMap = () => {
    const productsData = [
      {
        productsName: "The Dandy chair",
        productsImage: <img src="/products.tsx/Parent.png" alt="`products`" className="w-full h-auto object-cover " />,
        price: "£250",
        
      },
      {
        productsName: "Rustic Vase Set",
        productsImage: <img src="/products.tsx/Parent1.png" alt="products" className="w-full h-auto object-cover " />,
        price: "£155",
        
      },
      {
        productsName: "The Silky Vase",
        productsImage: <img src="/products.tsx/Parent2.png" alt="products" className="w-full h-auto object-cover " />,
        price: "£125",
        
      },
      {
        productsName: "The Lucy Lamp",
        productsImage: <img src="/products.tsx/Parent3.png" alt="products" className="w-full h-auto object-cover" />,
        price: "£399",
        
      },
    ];
  
    return (
      <div className="p-6 md:p-12 lg:p-16 bg-gray-100">
        {/* Header */}
        <h1 className="text-start text-2xl md:text-3xl lg:text-4xl mb-8 text-[#2A254B]">
        New ceramics
        </h1>

       
  
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {productsData.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden text-start p-4 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Car Image */}
              <div className="mb-4">{product.productsImage}</div>
  
              {/* Car Name */}
              <p className="text-[#2A254B] text-lg ">
                {product.productsName}
              </p>
  
              {/* Car Price */}
              <p className="text-[#2A254B] text-base mt-2 ">
                {product.price}
              </p>
  
              

            </div>

          
            
          ))}
           
           
        </div>
        <div className="justify-center flex w-full "> <button className="bg-[#F9F9F9] text-[#2A254B]  p-[16px] px-[32px] mt-[32px] ">View collection</button></div>
      </div>
    );
  };
  
  export default ArrayMap;