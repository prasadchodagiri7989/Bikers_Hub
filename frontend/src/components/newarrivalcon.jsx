import React from "react";
import '../styles/global.css'
import NewArrivals from './newarrivals'

const ArrivalContainer = () =>{
    return(
        <div>
            <h1>New Arrivals</h1>
            <div className="arrival-container">
                <NewArrivals 
                    imageSrc={'..assets/image1.jpg'}
                    title={'Heading'}
                    subText={'Sub Text'}
                />
                <NewArrivals 
                    imageSrc={'..assets/image1.jpg'}
                    title={'Heading'}
                    subText={'Sub Text'}
                />
                <NewArrivals 
                    imageSrc={'..assets/image1.jpg'}
                    title={'Heading'}
                    subText={'Sub Text'}
                /> 
            </div>
        </div>
    )
}

export default ArrivalContainer