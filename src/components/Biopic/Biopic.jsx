import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import TagCloud from 'TagCloud';
import { Mario } from '../../assets/image';
import { useGlobalState } from '../../components/changeLang/ChangeLang';

const Biopic = ({ refs }) => {
  const { data } = useGlobalState();

  // Ref, um sicherzustellen, dass TagCloud nur einmal initialisiert wird
  const isTagCloudInitialized = useRef(false);
  // (Optional) Falls Du später direkten Zugriff auf den Container benötigst:
  const tagCloudContainerRef = useRef(null);

  // Verwende eine spezifischere CSS-Klasse für den TagCloud-Container
  const containerSelector = '.tagcloud-container';

  // Optionen für TagCloud memoisiert, damit sie sich nicht bei jedem Render neu erstellen
  const tagCloudOptions = useMemo(
    () => ({
      radius: 100,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      direction: 135,
      keep: true,
    }),
    []
  );

  // Initialisierung der TagCloud – nur einmal durchführen
  useEffect(() => {
    if (!isTagCloudInitialized.current && data.cloud_text?.length > 0) {
      TagCloud(containerSelector, data.cloud_text, tagCloudOptions);
      isTagCloudInitialized.current = true;
    }
  }, [data.cloud_text, tagCloudOptions, containerSelector]);

  // Memoisierter Scroll-Handler, um zu den referenzierten Elementen zu scrollen
  const handleScroll = useCallback((ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="biopic-sc resume-block">
      <div className="container">
        <div className="biopic-content grid">
          <div className="biopic-intro item_one1">
            <h2 className="biopic-header-name">
              {data.biopic_text.header_name}
            </h2>
            <img
              width="100%"
              height="100%"
              loading="lazy"
              src={Mario}
              alt="Mario"
              className="me"
            />
            <p className="pic-text">{data.biopic_text.pic_text}</p>
            {/* Container für TagCloud – hier wurde der CSS-Klassenname angepasst */}
            <div className="tagcloud-container content" ref={tagCloudContainerRef}></div>
            {/* Semantisch korrekte Liste ohne <br> oder <div> innerhalb der <ul> */}
            <ul className="biopic-text text-white">
              <li className="head-attr">{data.biopic_text.hobbies}</li>
              <li className="attr">{data.biopic_text.hobbies_attr}</li>
              <li className="head-attr">{data.biopic_text.interest}</li>
              <li className="attr">{data.biopic_text.interest_attr}</li>
            </ul>
            <div className="link-container">
              <a target="_blank" rel="noopener noreferrer" href="./docs/lebenslauf.pdf">
                {data.biopic_text.cv}
              </a>
              <a target="_blank" rel="noopener noreferrer" href="./docs/noten_mariovonbassen.pdf">
                {data.biopic_text.notes}
              </a>
            </div>
          
          </div>

          <div className="item_one2 website_structure">
            <section className="design-section">
              <h2 className="start-text">Start</h2>
              <div className="timeline">
                <div className="timeline-empty"></div>
                <div className="timeline-left"></div>
                <div
                  className="timeline-component timeline-content"
                  onClick={() => handleScroll(refs.experienceRef)}
                >
                  <h4 className="text-center">{data.biopic_text.exp}</h4>
                </div>
                <div
                  className="timeline-component timeline-content"
                  onClick={() => handleScroll(refs.educationRef)}
                >
                  <h4 className="text-center">{data.biopic_text.ausbildung}</h4>
                </div>
                <div className="timeline-middle">
                  <div className="timeline-circle-middle"></div>
                </div>
                <div className="timeline-right">
                  <div className="timeline-circle-right"></div>
                </div>
                <div className="timeline-middle-leftover">
                  <div className="timeline-circle-right-leftover"></div>
                </div>
                <div className="timeline-left">
                  <div className="timeline-circle"></div>
                </div>
                <div
                  className="timeline-component timeline-content"
                  onClick={() => handleScroll(refs.skillRef)}
                >
                  <h4 className="text-center">{data.biopic_text.skills}</h4>
                </div>
                <div
                  className="timeline-component timeline-content"
                  onClick={() => handleScroll(refs.projectRef)}
                >
                  <h4 className="text-center">{data.biopic_text.projects}</h4>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Biopic);
