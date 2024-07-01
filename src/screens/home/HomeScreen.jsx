import BackgroundEffect from "../../components/background_effect/BackgroundEffect";
import Education from "../../components/education/Education";
import Experience from "../../components/experience/Experience";
import Header from "../../components/header/Header";
import Skill from "../../components/skill/Skill";
import LangOptions from "../../components/langOptions/LangOptions";
import CookieConsent from "../../components/cookieConsent/CookieConsent";
import OtherSkills from "../../components/otherSkills/OtherSkills";
import Biopic from "../../components/Biopic/Biopic";
import Projects from "../../components/projects/Projects";
import LifeLine from "../../components/lifeLine/LifeLine";
import { Helmet } from "react-helmet";
import { GlobalStateProvider } from "../../components/changeLang/ChangeLang";
import MediaPopUp from "../../components/MediaPopUp/mediaPopUp";
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect, useRef } from 'react';

const HomeScreen = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const experienceRef = useRef(null); 
  const educationRef = useRef(null); 
  const skillRef = useRef(null); 
  const projectRef = useRef(null); 

  useEffect(() => {
    if (isMobile) {
      setIsModalOpen(true);
    } else if (isDesktop) {
      setIsModalOpen(false);
    }
  }, [isMobile, isDesktop]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="page-container">

      <MediaPopUp isOpen={isModalOpen} onClose={closeModal}>
        <h2>Bessere Experience auf dem Desktop</h2>
        <p>Für eine bessere Website-Experience bitte auf einem Desktop öffnen!</p>
        <button style={{ color: "#fff", background: "#6225E6", marginTop: "3%", padding: "3px", borderRadius: "5px" }} onClick={closeModal}>Close</button>
      </MediaPopUp>

      <CookieConsent></CookieConsent>

      <GlobalStateProvider>
        <BackgroundEffect />
        <LangOptions></LangOptions>
        <Header />
        <Biopic 
          refs={{
            experienceRef: experienceRef,
            educationRef: educationRef,
            skillRef: skillRef,
            projectRef: projectRef
          }} 
        />
        <Experience ref={experienceRef} /> 
        <Education ref={educationRef}/>
        <Skill ref={skillRef}/>
        <OtherSkills />
        <Projects ref={projectRef}/>
        <LifeLine />
      </GlobalStateProvider>

      <Helmet>
        <script src="./js/three.js" type="text/javascript" async />
      </Helmet>
    </div>
  );
}

export default HomeScreen;
