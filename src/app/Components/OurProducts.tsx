import React from "react";

const OurProducts = () => {
    const productsData = [
        {
            productsName: "The Poplar suede sofa",
            productsImage: (
                <img
                    src="/products.tsx/Large.png"
                    alt="products"
                    className="w-full h-auto object-cover rounded"
                />
            ),
            price: "£980",
        },
        {
            productsName: "The Dandy chair",
            productsImage: (
                <img
                    src="/products.tsx/Parent1.png"
                    alt="products"
                    className="w-full h-auto object-cover rounded"
                />
            ),
            price: "£250",
        },
        {
            productsName: "The Dandy chair",
            productsImage: (
                <img
                    src="/products.tsx/Parent2.png"
                    alt="products"
                    className="w-full h-auto object-cover rounded"
                />
            ),
            price: "£250",
        },
    ];

    return (
        <div className="p-6 md:p-12 lg:p-16 bg-white">
            {/* Header */}
            <h1 className="text-start text-1xl md:text-2xl lg:text-3xl mb-8 text-[#2A254B] ">
                Our popular products
            </h1>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productsData.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Product Image */}
                        <div className="">{product.productsImage}</div>

                        {/* Product Details */}
                        <div className="p-4 text-start">
                            <p className="text-[#2A254B] text-lg font-semibold mb-2">
                                {product.productsName}
                            </p>
                            <p className="text-[#2A254B] text-base font-medium">
                                {product.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* View Collection Button */}
            <div className="flex justify-center mt-12">
                <button className="bg-[#F9F9F9] text-[#2A254B] text-sm md:text-base py-3 px-8 rounded hover:opacity-75 transition duration-300">
                    View collection
                </button>
            </div>
        </div>
    );
};

export default OurProducts;