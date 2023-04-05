import React, { Component } from "react";

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: props.value || 0, // начальное значение берется из пропсов
      barColor: "green",
    };
  }

  handleDecrement = () => {
    this.setState((prevState) => ({
      percentage: Math.max(prevState.percentage - 10, 0),
      barColor: prevState.percentage < 60 ? "red" : "green",
    }));
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      percentage: Math.min(prevState.percentage + 10, 100),
      barColor: prevState.percentage >= 50 ? "green" : "red",
    }));
  };

  render() {
    const { percentage, barColor } = this.state;
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
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
        >
          <button onClick={this.handleDecrement}>-10</button>
          <button onClick={this.handleIncrement}>+10</button>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
