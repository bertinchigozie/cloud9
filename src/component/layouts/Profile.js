import React from "react";
import { TiArrowForwardOutline } from "react-icons/ti";
import { TbDots } from "react-icons/tb";
import "./Profile.css";
import pic from "../assets/img/profile.jpg";

function Profile() {
  return (
    <div className="Profile">
      <div>
        <TbDots className="icon-mobile" />
      </div>

      <div className="Profile-contents">
        <TiArrowForwardOutline className="icon-desktop" />
        <div className="Profile-content">
          <div>
            <img src={pic} alt="" className="ProfilePic" id="profile__img" />
          </div>
          <div>
            <p>Okeke Chigozie</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
