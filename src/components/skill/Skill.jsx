import React, { useState, forwardRef, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { useGlobalState } from '../../components/changeLang/ChangeLang';
import Title from '../common/Title';

const Skill = forwardRef((props, ref) => {
  const { data } = useGlobalState();

  return (
    <div ref={ref} className="skill-sc resume-block">
      <div className="container">
        <div className="skill-content dotted-border-left">
          <Title titleText={data.titles.title_three} />
          <div className="skill-list grid">
            {data.skills?.map((item) => (
              <SkillItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

Skill.propTypes = {
  // forwardRef unterstützt hier sowohl Callback-Refs als auch Object-Refs
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ]),
};

export default Skill;

const SkillItem = memo(({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Separate und memoized Event-Handler für Hover-Effekte
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // Ermittlung des Klassennamens anhand des Skill-Typs
  const getClassName = useCallback(() => {
    switch (item.skill) {
      case 'python':
        return 'gas ar';
      case 'js':
        return 'gas js';
      case 'c':
        return 'gas c';
      case 'kotlin':
        return 'gas ko';
      case 'solidity':
        return 'gas so';
      case 'bash':
        return 'gas ba';
      case 'php':
        return 'gas php';
      case 'html':
        return 'gas html';
      default:
        return '';
    }
  }, [item.skill]);

  return (
    <div
      className={`skill-item text-center ${getClassName()} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="skill-item-inner">
        <div className="front">
          {!isHovered && (
            <div className="skill-icon">
              <img src={item.icon} alt={`${item.name} icon`} />
            </div>
          )}
          <div className="skill-info">
            <h3 className="skill-name">{!isHovered && item.name}</h3>
            <p className="skill-description text">{!isHovered && item.description}</p>
          </div>
          <div>
            <span>
              <h3>
                <b>{!isHovered && 'Skill-Level:'}</b>
              </h3>
              <h2 className="skill_level">{!isHovered && item.skill_level}</h2>
            </span>
          </div>
        </div>
        <div className="back">
          {isHovered && (
            <>
              <h3>{item.project_name}</h3>
              <p>{item.project_description}</p>
              {item.project_link && (
                <a
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.project_link}
                >
                  <p className="link-p">Code</p>
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
});

SkillItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skill_level: PropTypes.string.isRequired,
    project_name: PropTypes.string,
    project_description: PropTypes.string,
    project_link: PropTypes.string,
    skill: PropTypes.string.isRequired,
  }).isRequired,
};
