import React from "react";

const CartItem = ({ product, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center space-x-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-16 h-16 rounded-md object-cover"
        />
        <div>
          <h3 className="text-lg font-bold">{product.title}</h3>
          <p className="text-sm text-gray-500">Price: ${product.price}</p>
          <p className="text-sm text-gray-500">Quantity: {product.count}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="px-3 py-1 text-sm border rounded hover:bg-gray-100"
          onClick={() => onDecrement(product.id)}
        >
          −
        </button>
        <span className="text-lg font-bold">{product.count}</span>
        <button
          className="px-3 py-1 text-sm border rounded hover:bg-gray-100"
          onClick={() => onIncrement(product.id)}
        >
          +
        </button>
      </div>
      <div className="text-lg font-bold">${product.price * product.count}</div>
    </div>
  );
};

export default CartItem;
