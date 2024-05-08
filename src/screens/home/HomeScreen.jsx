import BackgroundEffect from "../../components/background_effect/BackgroundEffect"
import Education from "../../components/education/Education"
import Experience from "../../components/experience/Experience"
import Header from "../../components/header/Header"
import Skill from "../../components/skill/Skill"
import LangOptions from "../../components/langOptions/LangOptions"
import CookieConsent from "../../components/cookieConsent/CookieConsent"
import OtherSkills from "../../components/otherSkills/OtherSkills"
import Biopic from "../../components/Biopic/Biopic"
import {Helmet} from "react-helmet";
import { GlobalStateProvider } from "../../components/changeLang/ChangeLang"

const HomeScreen = () => {

  return (

    <div className="page-container">

    <GlobalStateProvider>

        <CookieConsent></CookieConsent>

        <LangOptions></LangOptions>
        
        <Header/>

        <Biopic ></Biopic>

        <BackgroundEffect />

        <Experience />
        <Education />
  
        <Skill />

        <OtherSkills />

    </GlobalStateProvider>

        <Helmet>

          <script src="./js/three.js" type="text/javascript" defer={true}/>

        </Helmet>
    
    </div>
  )
}

export default HomeScreen
