import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import '../styles/global.css';

const ProductCardSample = ({products}) => {
  return (
    <Link to={`/products/${products.id}`}>
    <div className="product-card bg-blue-100 rounded-xl shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
     <div className="product-tag">New</div>
      <div className="image-container">
        <img
          src={products.image}
          alt="Product"
          className="product-image p-5"
        />
      </div>

      <div className="details-container">
        <div className="color-container">
          <span className="color-dot" style={{ backgroundColor: "black" }}></span>
          <span className="color-dot" style={{ backgroundColor: "blue" }}></span>
          <span className="color-dot" style={{ backgroundColor: "green" }}></span>
        </div>

        <h3 className="product-title">{products.name}</h3>

        <div className="price-container">
          <span className="new-price">{products.old_price}</span>
          <span className="old-price">{products.new_price}</span>
        </div>

        <div className="product-discount">Save 40%</div>

        <div className="rating-container">
          <AiFillStar className="star" />
          <AiFillStar className="star" />
          <AiFillStar className="star" />
          <AiOutlineStar className="star" />
          <AiOutlineStar className="star" />
          <span className="review-count">[4]</span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductCardSample;
