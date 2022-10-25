import React from "react";
import slackLogo from "./img/slack.png";
import githubLogo from "./img/github.png";
import "./IconSection.css";

function IconSection() {
  return (
    <div className="IconSection">
      <div>
        <img src={slackLogo} alt="" className="SlackLogo" />
      </div>
      <div>
        <img src={githubLogo} alt="" className="GithubLogo" />
      </div>
    </div>
  );
}

export default IconSection;
