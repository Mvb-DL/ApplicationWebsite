import { Link } from "react-router-dom";
import { Linkedin, Github } from "../../assets/image";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import GLBViewer from "../../components/model/Model"

const Header = () => {

  const phoneNumber = '+49 1577 3633756';

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
          
      })
      .catch((error) => {
        console.error('Unable to copy text to clipboard:', error);
        // You can optionally show an error message here
      });
  };


  return (

    <header className="header">

      <div className="container">

        <div className="header-content grid items-center">

          <div className="header-intro">

            <div className="flex items-end header-intro-wrapper">
              
              <h1 className="header-name">
                  Mario von Bassen <br />Master Computer Science
              </h1>
   
            </div>
            <p className="header-text text-white">
            Am 1.Oktober 2024 beginne ich meinen Master in Informatik an der Uni Wien. 
            Daher suche ich einen Job und das ist meine selbst programmierte Bewerbung hierfür. 
            </p>
            <br></br>
            <ul className="contact-info-list grid text-white">
              <li className="grid items-start info-item">

                  <span className="info-item-icon">
                    <FaEnvelope size={13} />
                  </span>
                  <p className="info-item-text">
                    <span className="text"><a href="mailto:your-email@example.com">mariovonbassen@email.com</a></span>
                  </p>
              </li>

              <li className="grid items-start info-item">

                  <span className="info-item-icon">
                    <FaPhone size={13} />
                  </span>
                  <p className="info-item-text">
                    <span className="text" onClick={() => copyToClipboard(phoneNumber)}>+49 1577 3633756</span>
                  </p>
              </li>


            </ul>

            
            <ul className="contact-social-list flex items-center">

                <li className="social-item">
                    <Link to="www.linkedin.com/in/mario-von-bassen-3797831ba">
                        <img src={Linkedin} />
                        <span className="tooltip text">Linkedin</span>
                    </Link>
                </li>

                <li className="social-item">
                    <Link to="/">
                        <img src={Github} />
                        <span className="tooltip text">Github</span>
                    </Link>
                </li>

                <li className="social-item">
                    <a className="website-code" target="_blank" href="https://github.com/Mvb-DL/ApplicationWebsite">Website-Code</a>
                </li>

            </ul>

          </div>


          <div className="header-contact" >

            <GLBViewer></GLBViewer>

          </div>

    
        </div>
      </div>
    </header>
  );
};

export default Header;
