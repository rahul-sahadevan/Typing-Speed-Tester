import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import BackgoundColor from "./Backgroundcolor";

function Footer(){
    return (
        <div className="footer-div">
            <div className="social-media">
                <FontAwesomeIcon className="link-media" icon={faGithub} />
                <FontAwesomeIcon className="link-media" icon={faLinkedin} />
                <FontAwesomeIcon className="link-media" icon={faEnvelope} />
                <FontAwesomeIcon className="link-media" icon={faInstagram} />
                
            </div>
            <BackgoundColor/>
        </div>
    )
}
export default Footer;