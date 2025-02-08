import React, { useState, useEffect, useRef, Suspense, lazy, useMemo } from 'react';
import { Helmet } from "react-helmet";
import { useMediaQuery } from 'react-responsive';
import { GlobalStateProvider } from "../../components/changeLang/ChangeLang";
import CookieConsent from "../../components/cookieConsent/CookieConsent";
import MediaPopUp from "../../components/MediaPopUp/mediaPopUp";

// Lazy load components
const BackgroundEffect = lazy(() => import("../../components/background_effect/BackgroundEffect"));
const Education = lazy(() => import("../../components/education/Education"));
const Experience = lazy(() => import("../../components/experience/Experience"));
const Header = lazy(() => import("../../components/header/Header"));
const Skill = lazy(() => import("../../components/skill/Skill"));
const LangOptions = lazy(() => import("../../components/langOptions/LangOptions"));
const OtherSkills = lazy(() => import("../../components/otherSkills/OtherSkills"));
const Biopic = lazy(() => import("../../components/Biopic/Biopic"));
const Projects = lazy(() => import("../../components/projects/Projects"));
const LifeLine = lazy(() => import("../../components/lifeLine/LifeLine"));
const RandomFacts = lazy(() => import("../../components/randomFacts/RandomFacts"));

// Hilfskomponente für Platzhalter
const Placeholder = ({ text, height = '100px' }) => (
  <div
    style={{
      minHeight: height,
      width: '100%',
      background: '#f0f0f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#888',
      fontSize: '1rem',
    }}
  >
    {text}
  </div>
);

const HomeScreen = () => {
  // Ermitteln, ob mobile Ansicht (maxWidth: 767px)
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // Refs, die an die Lazy-Components weitergereicht werden
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);

  // Bei Änderung der Bildschirmgröße wird der Modal-Status gesetzt
  useEffect(() => {
    setIsModalOpen(isMobile);
  }, [isMobile]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Memoisierter Style für den Modal-Button
  const modalStyle = useMemo(() => ({
    color: "#fff",
    background: "#6225E6",
    marginTop: "3%",
    padding: "3px",
    borderRadius: "5px"
  }), []);

  // Skript-Laden verzögern – idealerweise über requestIdleCallback
  useEffect(() => {
    const loadScript = () => {
      setIsScriptLoaded(true);
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadScript);
    } else {
      const timer = setTimeout(loadScript, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="page-container">
      <MediaPopUp isOpen={isModalOpen} onClose={closeModal}>
        <h2>Bessere Experience auf dem Desktop</h2>
        <p>Für eine bessere Website-Experience bitte auf einem Desktop öffnen!</p>
        <button style={modalStyle} onClick={closeModal}>Close</button>
      </MediaPopUp>

      <CookieConsent />

      <GlobalStateProvider>
        {/* Mehrere Suspense-Boundaries mit stabilen Platzhaltern */}
        <Suspense fallback={<Placeholder text="Loading Background..." height="300px" />}>
          <BackgroundEffect />
        </Suspense>
        <Suspense fallback={<Placeholder text="Loading Language Options..." height="50px" />}>
          <LangOptions />
        </Suspense>
        <Suspense fallback={<Placeholder text="Loading Header..." height="100px" />}>
          <Header />
        </Suspense>
        <Suspense fallback={<Placeholder text="Loading Biopic..." height="400px" />}>
          <Biopic
            refs={{
              experienceRef,
              educationRef,
              skillRef,
              projectRef
            }}
          />
        </Suspense>
        <Suspense fallback={<Placeholder text="Loading Experience..." height="300px" />}>
          <Experience ref={experienceRef} />
        </Suspense>
        <Suspense fallback={<Placeholder text="Loading Education..." height="300px" />}>
          <Education ref={educationRef} />
        </Suspense>
        <Suspense fallback={<Placeholder text="Loading Skills..." height="200px" />}>
          <Skill ref={skillRef} />
        </Suspense>
        <Suspense fallback={<Placeholder text="Loading Other Skills..." height="200px" />}>
          <OtherSkills />
        </Suspense>
        <Suspense fallback={<Placeholder text="Loading Projects..." height="300px" />}>
          <Projects ref={projectRef} />
        </Suspense>
        <Suspense fallback={<Placeholder text="Loading Timeline..." height="200px" />}>
          <LifeLine />
        </Suspense>
        {/*
          Falls RandomFacts benötigt wird:
          <Suspense fallback={<Placeholder text="Loading Random Facts..." height="100px" />}>
            <RandomFacts />
          </Suspense>
        */}
      </GlobalStateProvider>

      {/* Platzhalter für die 3D-Erfahrung, bis das Skript geladen ist */}
      {!isScriptLoaded && (
        <div className="script-placeholder" style={{ width: "100%", height: "100%" }}>
          Loading 3D experience...
        </div>
      )}

      {/* Nach Skript-Laden wird über Helmet das 3D-Skript in den Head eingebunden */}
      {isScriptLoaded && (
        <Helmet>
          <script src="./js/three.js" type="text/javascript" async defer />
        </Helmet>
      )}
    </div>
  );
};

export default React.memo(HomeScreen);
