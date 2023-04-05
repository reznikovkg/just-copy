import React from "react";
import { connect } from "react-redux";
import ProgressBar from "../components/ProgressBar";

const RatingPage = ({ progressValue }) => {
  return (
    <div>
      <h1>Прогресс бар</h1>
      <ProgressBar value={progressValue} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    progressValue: state.progressValue,
  };
};

export default connect(mapStateToProps)(RatingPage);
