import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

export default function StarRating({ maxValue, onRatingChange }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleRatingChange = (value) => {
    setRating(value);
    onRatingChange(value);
  };

  return (
    <div>
      {[...Array(maxValue)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label style = {{cursor:'pointer'}} key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              
              onClick={() => handleRatingChange(ratingValue)}
            />
            <FaStar
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

StarRating.propTypes = {
  maxValue: PropTypes.number,
  onRatingChange: PropTypes.func.isRequired,
};

StarRating.defaultProps = {
  maxValue: 5,
};