import React from "react";
import emptyCartImg from '../assets/SVG.png';

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#DEAD68]">
      <div className="mb-6">
        <img
          src={emptyCartImg}
          alt="Logo"
          className="w-24 h-24 object-contain"
        />
      </div>
      

      <h2 className="mt-6 text-2xl font-semibold text-gray-700">
        Your Cart is Empty
      </h2>
      <p className="mt-2 text-gray-500">
        Looks like you haven’t added anything to your cart yet.
      </p>
      
      <a
        href="/products"
        className="mt-6 px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded shadow-lg transition"
      >
        Start Shopping
      </a>
    </div>
  );
};

export default EmptyCart;
