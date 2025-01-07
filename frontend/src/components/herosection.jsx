import React, { useState } from "react";
import '../styles/global.css';

const HeroSection = () => {
    return(
        <div className="hero-container" style={{ backgroundImage: `url('/assets/hero-section-bg.png')` }}>
            <h1>Revive Your Riding <br/>Experience at <br/><span className="hero-section-highlight">BIKERSHUB</span></h1>
            <button>SHOPNOW</button>
        </div>
    )
}

export default HeroSection