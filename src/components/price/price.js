import React from "react";
import "./price.css";
import ethereum from "../../images/icon-ethereum.svg";

class Price extends React.Component {
  render() {
    return (
      <div className="price-container">
        <img src={ethereum} className="ethereum-logo" alt="Ethereum logo" />

        <p className="item-price">0.041 ETH</p>
      </div>
    );
  }
}

export default Price;
