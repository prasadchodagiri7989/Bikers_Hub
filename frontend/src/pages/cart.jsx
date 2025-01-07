import React, { useContext } from "react";
import { BooksContext } from "../App";
import CartItem from "../components/cartitem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { state, setState } = useContext(BooksContext);
  const { cart } = state;

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  const handleIncrement = (id) => {
    setState((prevState) => ({
      ...prevState,
      cart: prevState.cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      ),
    }));
  };

  const handleDecrement = (id) => {
    setState((prevState) => ({
      ...prevState,
      cart: prevState.cart.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      ),
    }));
  };

  if (cart.length === 0) {
    return <div className="container mx-auto text-center py-10">Your cart is empty!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-5">Shopping Cart</h2>
      <div className="space-y-5">
        {cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))}
      </div>
      <div className="mt-10 flex justify-end">
        <div className="text-xl font-bold">
          Total: <span className="text-violet-900">${getTotalPrice()}</span>
        </div>
        <button className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
          <Link to={`/checkout`}>
            CheckOut
          </Link>
          </button>
      </div>
    </div>
  );
};

export default Cart;
