import React from "react";
import "./Card.css";
import Image from "../Image/Image.js";

class CardImage extends React.Component {
  render() {
    return (
      <div className="card-body">
        <Image />
      </div>
    );
  }
}

export default CardImage;
