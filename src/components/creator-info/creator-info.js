import React from "react";
import "./creator-info.css";
import avatar from "../../images/image-avatar.png";

class Creator extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <img src={avatar} className="profile-picture" alt="clock logo" />

        <p className="profile-text">Creation of</p>
        <p className="creator-name">Jules Wyvern</p>
      </div>
    );
  }
}

export default Creator;
