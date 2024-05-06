import { Link } from "react-router-dom";
import { Mario } from "../../assets/image";

const Biopic = () => {


  return (

    <div className="biopic-sc resume-block">

        <div className="container">
            
        <div className="biopic-content grid">

            <div className="biopic-intro item_one1">

                <h2 className="biopic-header-name">
                    Das bin ich...
                </h2>

            
                    <img src={Mario} alt="avatar" className="me" /> 

                    <p className="pic-text">... Mario, 24 aus Würzburg</p>
  

              <ul className="biopic-text text-white">
                   <li>Hobbies: Laufen, Boxen, Lesen</li> 
                   <li>Interessen: Musik, Popkultur, Geschichte</li>
                   <li>List 2</li>
                   <li>List 2</li>
                   <li>List 2</li>
              </ul>


            </div>

            <div className="item_one2 website_structure">

                <section class="design-section">

                    <h2 className="start-text">Start</h2>
 
                    <div class="timeline">

                        <div class="timeline-empty"></div>

                        <div class="timeline-left">
                        </div>

                        <div class="timeline-component timeline-content">
                            <h4 className="text-center">Erfahrung</h4>
                        </div>

                        <div class="timeline-component timeline-content">
                            <h4 className="text-center">Ausbildung</h4>
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
                            <h4 className="text-center">Skills</h4>
                        </div>

                        <div class=" timeline-component timeline-content">
                        <h4  className="text-center">Projekte</h4>
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