import Title from "../common/Title";
import DATA from "../../constant/mockData";

const OtherSkills = () => {
    return (
      <div className="other-skills-sc resume-block">

        <div className="container">

          <div className="dotted-border-left">

            <Title titleText={"Other Skills"} />

            <div className="skill-content">

              <h4 className="sub-headline">Programme</h4>

              <div className="skill-list grid">
                
                  {DATA.otherSkills?.map((item) => (
                    <SkillItem  key={item.id} item={item}/>
                  ))} 

              </div>
                
            <h4 className="sub-headline">Sprachen</h4>

                <div className="language-box">

                  <div>
                    
                      <li className="language-text">Deutsch</li>
                  </div>

                  <div><li className="language-text">Englisch (B2)</li></div>

                  <div><li className="language-text">Französisch (A2)</li></div>

                </div>

            </div>
           
          </div>

        </div>
      </div>
    );
  };
  
  export default OtherSkills;

  const SkillItem = ({ item }) => {

    const getClassname = () => {
      if (item.skill === "blender") {
        return "skill-per blender";
      } else if (item.skill === "design") {
        return "skill-per design";
      } 
      else if (item.skill === "ableton") {
        return "skill-per ableton";
      } 
      else if (item.skill === "micro") {
        return "skill-per micro";
      } 
      
    };
  
    return (

      <div className="text-center other-skill-container" key={item.id}>
        <div className="skills">
            <div className="skill">
                <div class="flex">
                  <p className="skill-name">{item.name}</p>
                  <img src={item.icon} alt="" className="skill-icon" />
                </div>
                <div className="skill-bar">
                  <div className={getClassname()} per={item.skill_level}></div>
                </div>
            </div>
        </div>
      </div>

    );
  };