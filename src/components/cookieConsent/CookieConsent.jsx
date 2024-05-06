import React from 'react';
import CookieConsent from "react-cookie-consent";
import { Link } from 'react-router-dom';

export default function Cookie_Consent() {

    return(

        <CookieConsent
                        location="bottom"
                        buttonText="Cookies akzeptieren"
                        declineButtonText="Nicht akzeptieren"
                        cookieName="myAwesomeCookieName2"
                        style={{ background: "#007FFF" }}
                        buttonStyle={{ color: "#007FFF", fontSize: "15px", backgroundColor: "#fff" }}
                        expires={150}
                      >
                        Meine Webseite verwendet Cookies, um das Nutzererlebins für Dich zu optimieren!{" "}
                        <span style={{ fontSize: "10px" }}><Link to="/">Datenschutzerklärung</Link></span>
        </CookieConsent>

    )
}