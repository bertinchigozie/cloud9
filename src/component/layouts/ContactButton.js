import React from "react";
import { Link } from "react-router-dom";
import "./ContactButton.css";

function ContactButton() {
  return (
    <div className="ContactButton">
      <p>
        <Link id="contact" to={"/contact"}>
          Contact Me
        </Link>
      </p>
    </div>
  );
}

export default ContactButton;
