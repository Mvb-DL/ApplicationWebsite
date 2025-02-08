import React from "react";
import Title from "../common/Title";
import { useGlobalState } from "../changeLang/ChangeLang";


const LifeLine = () => {
  const { data } = useGlobalState();

  // Timeline-Einträge als Array für bessere Wartbarkeit
  const timelineEvents = [
    { year: "2013", info: data.lifeline.monte },
    { year: "2013", info: data.lifeline.waldorf },
    { year: "2019", info: data.lifeline.abitur },
    { year: "2019-2020", info: data.lifeline.uni },
    { year: "2020-2024", info: data.lifeline.e_com },
    { year: "2023", info: data.lifeline.danzig },
    { year: "2023", info: data.lifeline.pillap },
    { year: "2023", info: data.lifeline.full },
    { year: "2023", info: data.lifeline.erasmus },
    { year: data.lifeline.now, info: data.lifeline.future },
  ];

  return (
    <div className="lifeline-sc resume-block">
      <div className="container">
        <div className="dotted-border-left">
          <Title titleText={data.titles.title_eleven} />
          <div className="lifeline-item">
            <div className="line">
              <div className="input-flex-container">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="input">
                    <span data-year={event.year} data-info={event.info} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeLine;
