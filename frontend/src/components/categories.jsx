import React from "react";
import '../styles/global.css'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'

const Categories = () =>{
    return (
        <>
            <h1 className="categories-heading">CATEGORIES</h1>
            <div className="categories-main-container">
                <div className="categories-sub-container">
                    <img src={image1}/>
                    <p>HELMETS</p>
                </div>
                <div className="categories-sub-container">
                <img src={image2}/>
                <p>SHOES</p>
                </div>
                <div className="categories-sub-container">
                <img src={image3}/>
                <p>GEAR</p>
                </div>
                <div className="categories-sub-container">
                <img src={image4}/>
                <p>ACCESSORIES</p>
                </div>
                <div className="categories-sub-container">
                <img src={image5}/>
                <p>SPARES</p>
                </div>
                <div className="categories-sub-container">
                <img src={image6}/>
                <p>WOMEN</p>
                </div>
            </div>
        </>
    )
}

export default Categories