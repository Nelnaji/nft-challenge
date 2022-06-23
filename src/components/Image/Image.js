import React from "react";
import "./Image.css";
import NFTImage from "../../images/image-equilibrium.jpg";

class Image extends React.Component {
  render() {
    return (
      <div className="image-container">
        <img src={NFTImage} className="image-card" alt="equilibrium" />
      </div>
    );
  }
}

export default Image;
