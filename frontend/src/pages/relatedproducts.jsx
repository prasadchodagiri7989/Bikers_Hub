import React from "react";

const RelatedProducts = ({ products }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="border rounded-lg shadow-md p-4 text-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-20 object-cover mb-2"
          />
          <p className="text-sm font-bold">{product.name}</p>
          <p className="text-red-500">{product.price}</p>
          <span className="text-xs text-gray-500">{product.discount}</span>
        </div>
      ))}
    </div>
  );
};

export default RelatedProducts;
