import React, { useContext, useState } from "react";
import { BooksContext } from "../App";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { state, setState } = useContext(BooksContext);
  const { cart } = state;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckout = () => {
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill out all required fields.");
      return;
    }

    alert("Checkout successful! Thank you for your purchase.");
    setState((prevState) => ({ ...prevState, cart: [] }));
    navigate("/");
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <div className="container mx-auto p-5 max-w-[1200px]">
      <h2 className="text-3xl font-bold mb-5">Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. Please add items to proceed.</p>
      ) : (
        <>
          <div className="mb-5">
            <h3 className="text-xl font-semibold">Order Summary</h3>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between py-2 border-b">
                  <span>
                    {item.title} (x{item.count})
                  </span>
                  <span>${item.price * item.count}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between py-2 mt-3 text-lg font-bold">
              <span>Total:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>

          <div className="mb-5">
            <h3 className="text-xl font-semibold">Shipping Information</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-2 border rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleInputChange}
                className="p-2 border rounded col-span-2"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={formData.zip}
                onChange={handleInputChange}
                className="p-2 border rounded"
              />
            </form>
          </div>

          <button
            className="w-full py-2 bg-violet-900 text-white rounded hover:bg-violet-700"
            onClick={handleCheckout}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
