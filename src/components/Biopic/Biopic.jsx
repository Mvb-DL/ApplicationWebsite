import { Mario } from "../../assets/image";
import { useGlobalState } from "../../components/changeLang/ChangeLang";
import TagCloud from 'TagCloud';
import React, { useEffect, useState } from 'react'


const Biopic = () => {

    const container = '.content';

    const options = {
        radius: 100,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        direction: 135,
        keep: true
        };

    const { data } = useGlobalState();

    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!initialized) {
            TagCloud(container, data.cloud_text, options);
            setInitialized(true);
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

                    <img src={Mario} alt="avatar" className="me" /> 

                    <p className="pic-text">{data.biopic_text.pic_text}</p>

                    <div className="content"></div>

              <ul className="biopic-text text-white">
                
                   <li id="head_attr">{data.biopic_text.hobbies}</li> 
                   <li id="attr">{data.biopic_text.hobbies_attr}</li>
                   <br></br>
                   <li id="head_attr">{data.biopic_text.interest}</li>
                    <li id="attr">{data.biopic_text.interest_attr}</li>
                   <br></br>
                   <div className="link-container">
                        <a target="_blank" href="./docs/lebenslauf.pdf">{data.biopic_text.cv}</a>
                        <a target="_blank" href="./docs/noten_mariovonbassen.pdf">{data.biopic_text.notes}</a> 
                    </div>
                   
            </ul> 

            <div className="link-container-big">
                    <a target="_blank" href="./public/docs/lebenslauf.pdf">{data.biopic_text.cv}</a>
                    <a target="_blank" href="./public/docs/noten_mariovonbassen.pdf">{data.biopic_text.notes}</a> 
            </div>


            </div>

            <div className="item_one2 website_structure">

                <section class="design-section">

                    <h2 className="start-text">Start</h2>
 
                    <div class="timeline">

                        <div class="timeline-empty"></div>

                        <div class="timeline-left">
                        </div>

                        <div class="timeline-component timeline-content">
                            <h4 className="text-center">{data.biopic_text.exp}</h4>
                        </div>

                        <div class="timeline-component timeline-content">
                            <h4 className="text-center">{data.biopic_text.ausbildung}</h4>
                        </div>

                        <div class="timeline-middle">
                            <div class="timeline-circle-middle"></div>
                        </div>

                        <div class="timeline-right">
                            <div class="timeline-circle-right"></div>
                        </div>

                        <div class="timeline-middle-leftover">
                            <div class="timeline-circle-right-leftover"></div>
                        </div>

                        <div class="timeline-left">
                            <div class="timeline-circle"></div>
                        </div>

                        <div class=" timeline-component timeline-content">
                            <h4 className="text-center">{data.biopic_text.skills}</h4>
                        </div>

                        <div class=" timeline-component timeline-content">
                        <h4  className="text-center">{data.biopic_text.projects}</h4>
                        </div>

                       </div>
                    </section>
            </div>
          
            </div>
        </div>
  </div>
  )

}

export default Biopic;