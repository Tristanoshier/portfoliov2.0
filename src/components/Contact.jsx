import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faFile } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    })

    return (
        <div id="contact" className="contact">
            <div data-aos="fade-up" className="contact-title">Contact</div>

            <ul data-aos="fade-up" className="contact-layout">
                <li className="contact-item"><a className="contact-link" href="https://www.linkedin.com/in/tristan-oshier-678420196/" target="_linkedin" ><div className="contact-content"><FontAwesomeIcon icon={faLinkedin} size="4x"></FontAwesomeIcon><p>LinkedIn</p></div></a></li>
                <li className="contact-item"><a className="contact-link" href="mailto:tristan.oshier2000@gmail.com" ><div className="contact-content"><FontAwesomeIcon icon={faEnvelopeSquare} size="4x"></FontAwesomeIcon><p>Email</p></div></a></li>
                <li className="contact-item"><a className="contact-link" href={require("../assets/Tristans Resume.pdf")} download><div className="contact-content"><FontAwesomeIcon icon={faFile} size="4x"></FontAwesomeIcon><p>Resume</p></div></a></li>
            </ul>

        </div>
    )
}
