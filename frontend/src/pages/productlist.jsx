import React, { useState } from "react";
import ProductCardSample from "../components/productcard2";
import HeroSection from "../components/herosection";
import all_product from "../components/all_product";
import Header from "../components/navbar";


export default function ProductList() {
  let categories = [
    "Accessories",
    "Helmets",
    "Jackets",
    "Gears",
    "Shoes",
  ];

  // State to track selected categories
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Function to handle category selection/deselection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        // Deselect category
        return prevSelectedCategories.filter((item) => item !== category);
      } else {
        // Select category
        return [...prevSelectedCategories, category];
      }
    });
  };

  // Filter products based on selected categories
  const filteredProducts = all_product.filter((product) =>
    selectedCategories.length === 0 || selectedCategories.includes(product.category)
  );

  return (
    <>
      <div className="flex flex-row">
        <div className="filter-container w-[900px] h-[100vh]">
          <h1 className="text-4xl border-b-2 border-b-black p-3 text-center">FILTERS</h1>
          <div className="checkbox-container">
            <h2>Product Categories</h2>
            {categories.map((category, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={category}
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </label>
            ))}
          </div>

          <div className="checkbox-container">
            <h2>Filter By Colour</h2>
            <label><input type="checkbox" value="Green" /> Green</label>
            <label><input type="checkbox" value="Black" /> Black</label>
            <label><input type="checkbox" value="Red" /> Red</label>
            <label><input type="checkbox" value="Blue" /> Blue</label>
          </div>

          <div className="checkbox-container">
            <h2>Brand Category</h2>
            <label><input type="checkbox" value="Brand 1" /> Brand 1</label>
            <label><input type="checkbox" value="Brand 2" /> Brand 2</label>
            <label><input type="checkbox" value="Brand 3" /> Brand 3</label>
            <label><input type="checkbox" value="Brand 4" /> Brand 4</label>
            <label><input type="checkbox" value="Brand 5" /> Brand 5</label>
          </div>

          <div className="checkbox-container">
            <h2>Product Status</h2>
            <label><input type="checkbox" value="In stock" /> In stock</label>
            <label><input type="checkbox" value="On Sale" /> On Sale</label>
          </div>
        </div>

        <div className="product-list-section">
          <div>
            <HeroSection />
          </div>
          <div className="product-listing-container flex flex-wrap justify-center items-center">
            {filteredProducts.map((product) => {
              return <ProductCardSample key={product.id} products={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
