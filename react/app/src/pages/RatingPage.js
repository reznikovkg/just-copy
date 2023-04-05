import React, { useState } from "react";
import StarRatingCo from "../components/StarRatingCo";

export default function RatingPage() {
  const [rating, setRating] = useState(null);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <h1>Рейтинг</h1>
      <StarRatingCo maxValue={5} onRatingChange={handleRatingChange} />
    </div>
  );
}
