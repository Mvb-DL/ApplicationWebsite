import DATA from "../../constant/mockData";
import Title from "../common/Title";
import PropTypes from "prop-types";
import React, { useState, useRef } from 'react';

const Skill = () => {

  return (
    <div className="skill-sc resume-block" >
      <div className="container" >
        <div className="skill-content dotted-border-left">
          <Title titleText={"Programming Skills"} />
          <div className="skill-list grid">
            {DATA.skills?.map((item) => (
              <SkillItem key={item.id} item={item}   
                />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;


const SkillItem = ({ item }) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const getClassname = () => {
    if (item.skill === "python") {
      return "skill-item text-center gas ar";
    } else if (item.skill === "js") {
      return "skill-item text-center gas js";
    } 
    else if (item.skill === "c") {
      return "skill-item text-center gas c";
    } 
    else if (item.skill === "kotlin") {
      return "skill-item text-center gas ko";
    } 
    else if (item.skill === "solidity") {
      return "skill-item text-center gas so";
    } 
    else if (item.skill === "bash") {
      return "skill-item text-center gas ba";
    } 
    else if (item.skill === "php") {
      return "skill-item text-center gas php";
    } 
    else if (item.skill === "html") {
      return "skill-item text-center gas html";
    } 
    else {
      return "skill-item text-center";
    }
  };

  return (

      <div className={`${getClassname()} ${isHovered ? 'hovered' : ''}`} key={item.id}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}>

      <div className="front">
        <div className="skill-icon">
        {isHovered ? "" : <img src={item.icon} alt="icon" />}
      </div>
      <div className="skill-info">
        <h3 className="skill-name">{isHovered ? "" : item.name }</h3>
        <p className="skill-description text">{isHovered ? "" : item.description }</p>
      </div>
      <div>
        {isHovered ? "" : <span><h3><b>Skill-Level:</b></h3> <h2 className="skill_level">{item.skill_level}</h2></span>}
      </div>
      </div>

      <div className="back">
        <h3>{isHovered ?  item.project_name : ""}</h3>
        <p>{isHovered ?  item.project_description : ""}</p>
        {isHovered ?   <a className="project-link" target="_blank" href={item.project_link}><p className="link-p">Zum Code</p></a> : "" }
      </div> 

    </div>
  );
};

SkillItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skill_level: PropTypes.string.isRequired,

  }),
};
