import React from "react";
import zuriInternship from "./img/Zuri-Internship.png";
import ingressive from "./img/ingressive.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="Line"></div>
      <div className="FooterContent">
        <div>
          {" "}
          <img src={zuriInternship} alt="" className="ZuriInternship" />{" "}
        </div>
        <div>
          <p className="FooterText">HNG internship 9 Frontend Task</p>
        </div>
        <div>
          <img src={ingressive} alt="" className="Ingressive" />{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
