import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

import csharpIcon from "../../assets/images/csharp.svg";
import dotnetIcon from "../../assets/images/dotnet.svg";
import gitIcon from "../../assets/images/git.svg";

export default function SoftwareSkill() {
  const renderIcon = (iconClass) => {
    switch (iconClass) {
      case "custom-csharp":
        return <img src={csharpIcon} alt="C#" className="custom-icon" />;
      case "custom-dotnet":
        return <img src={dotnetIcon} alt=".NET" className="custom-icon" />;
      case "custom-git":
        return <img src={gitIcon} alt="GIT" className="custom-icon" />;
      default:
        return <i className={iconClass}></i>;
    }
  };

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => (
            <li
              key={i}
              className="software-skill-inline"
              name={skills.skillName}
            >
              {renderIcon(skills.fontAwesomeClassname)}
              <p>{skills.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
