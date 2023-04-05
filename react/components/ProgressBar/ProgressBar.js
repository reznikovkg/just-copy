import React, { useState } from "react";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);
  const [barColor, setBarColor] = useState("green");

  const handleDecrement = () => {
    setPercentage((prevPercentage) => Math.max(prevPercentage - 10, 0));
    setBarColor(percentage < 60 ? "red" : "green");
  };

  const handleIncrement = () => {
    setPercentage((prevPercentage) => Math.min(prevPercentage + 10, 100));
    setBarColor(percentage >= 50 ? "green" : "red");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "lightgray",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: barColor,
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            paddingRight: "10px",
          }}
        >
          {percentage}%
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <button onClick={handleDecrement}>-10</button>
        <button onClick={handleIncrement}>+10</button>
      </div>
    </div>
  );
};

export default ProgressBar;
