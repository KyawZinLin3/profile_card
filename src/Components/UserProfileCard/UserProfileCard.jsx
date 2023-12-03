import React from "react";
import "./UserProfileCard.css";
import user_icon from "../Assets/elon_musk_royal_society.jpg";

export const UserProfileCard = () => {
  return (
    <div className="upc">
      <div className="gradient"></div>
      <div className="profile-down">
        <img src={user_icon} alt="" />
        <div className="profile-title">Elon Musk</div>
        <div className="profile-description">
          I am the Founder,Chairman and CEO of Space X,CEO and product architect
          of Tesla and CTO of Twitter.
        </div>
        <div className="profile-button">
          <a href="mailto:kkkk@gmail.cmom">Contact Me</a>
        </div>
      </div>
    </div>
  );
};
