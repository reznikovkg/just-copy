import React, { createContext } from "react";
import PropTypes from "prop-types";
import StarRating from "./StarRating";

export const StarRatingContext = createContext();
export default function StarRatingCo({ maxValue }) {
  return (
    <>
      <StarRatingContext.Provider
        value={{
          maxValue,
        }}
      >
        <>
          <StarRating />
        </>
      </StarRatingContext.Provider>
    </>
  );
}

StarRatingCo.propTypes = {
  maxValue: PropTypes.number,
};

StarRatingCo.defaultProps = {
  maxValue: 5,
};
