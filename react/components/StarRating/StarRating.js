import React, { Component, createContext, useContext, useState } from "react";
import { FaStar } from "react-icons/fa";

import { StarRatingContext } from "./StarRatingCo";

function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const { maxValue } = useContext(StarRatingContext);

  return (
    <div>
      {[...Array(maxValue)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={100}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>Рейтинг: {rating}</p>
    </div>
  );
}

export default StarRating;
