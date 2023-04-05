import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import "../App.sass";

export default function StarRatingCo({ maxValue, onRatingChange }) {
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
          <label style={{ cursor: "pointer" }} key={i}>
            <input
              className="ratingstar"
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

StarRatingCo.propTypes = {
  maxValue: PropTypes.number,
  onRatingChange: PropTypes.func.isRequired,
};

StarRatingCo.defaultProps = {
  maxValue: 5,
};
