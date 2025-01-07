import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/navbar';
import Home from './pages/home';
import ProductList from './pages/productlist';
import ProductDetail from './pages/productdetails';
import ReviewStars from './components/reviewstars';
import NotFound from './pages/notfound';
import Cart from './pages/cart';
import all_product from './components/all_product';
import Checkout from './pages/checkout';
import SignUpPage from './pages/signuppage';
import LoginPage from './pages/loginpage';
import { createContext, useContext, useState } from "react";

export const BooksContext = createContext();

function App() {
  const [state, setState] = useState({
    booklist: all_product,
    cart: []
  });

  const addToCart = (book) => {
    setState((prevState) => ({
      ...prevState,
      cart: prevState.cart.find((cartItem) => cartItem.id === book.id)
        ? prevState.cart.map((cartItem) =>
            cartItem.id === book.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...prevState.cart, { ...book, count: 1 }]
    }));
  };

  return (
    <BooksContext.Provider value={{ state, addToCart, setState }}>
      <div>
        <Header />
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route
            path="/products/:id"
            element={
              <ProductDetail
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BooksContext.Provider>
  );
}

export default App;
