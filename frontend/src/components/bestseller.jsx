import React from "react";
import ProductCardSample from "./productcard2";
import '../styles/global.css'
import best_seller_data from "./bestsellerdata";
const BestSeller = () => {
    return(
        <div className="best-seller">
            <h1>BEST SELLER</h1>
            <div className="best-seller-product">
                    {best_seller_data.map((product)=>{
                        return(<ProductCardSample products={product}/>)
                    })}
            </div>
        </div>
    )
}

export default BestSeller