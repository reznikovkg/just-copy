import React, { useState } from "react";
import StarRatingCo from "./StarRatingCo";
import './App.css';

function App() {
  const [rating, setRating] = useState(null);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div className='App '>
        <StarRatingCo onRatingChange={handleRatingChange} />
    </div>
  );
}

export default App;