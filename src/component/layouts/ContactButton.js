import React from "react";
import { Link } from "react-router-dom";
import "./ContactButton.css";

function ContactButton() {
  return (
    <div className="ContactButton">
      <p>
        <Link>
          <a id="contact" rel="noreferrer" target="_blank" href="/contact">
            Contact Me
          </a>
        </Link>
      </p>
    </div>
  );
}

export default ContactButton;
