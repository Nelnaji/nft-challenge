import React from "react";
import "./date.css";
import clock from "../../images/icon-clock.svg";

class Date extends React.Component {
  render() {
    return (
      <div className="date-container">
        <img src={clock} className="clock-logo" alt="clock logo" />

        <p className="item-date">3 days left</p>
      </div>
    );
  }
}

export default Date;
