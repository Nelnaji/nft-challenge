import React from "react";
import CardImage from "../card/Card.js";
import "./Body.css";

class Body extends React.Component {
  render() {
    return (
      <div className="main-body">
        <CardImage></CardImage>
      </div>
    );
  }
}

export default Body;
