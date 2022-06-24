import React from "react";
import "./Card.css";
import Image from "../Image/Image.js";
import ItemName from "../object-info/object-info";
import Price from "../price/price.js";
import Date from "../date/date.js";
import Creator from "../creator-info/creator-info.js";

class Card extends React.Component {
  render() {
    return (
      <div className="card-body">
        <Image />
        <ItemName />
        <p className="small-text">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="price-date__container">
          <Price />
          <Date />
        </div>
        <hr className="line-separation" />
        <Creator />
      </div>
    );
  }
}

export default Card;
