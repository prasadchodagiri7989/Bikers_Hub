import React from "react";
import ReactStars from "react-stars";

const ReviewStars = ({ rating }) => {
  return (
    <div>
      <ReactStars
        count={5}
        value={rating} // Current rating value
        size={24} // Size of the stars
        edit={false} // Disable editing
        color2={"#ffd700"} // Active star color (gold)
      />
    </div>
  );
};

export default ReviewStars;
