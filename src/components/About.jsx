import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faFile, faCamera } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function About() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    })

    return (
        <div id="about" className="about">
            <div data-aos="fade-up" className="about-title">About</div>
            <div data-aos="fade-up" className="about-content">
                <p className="about-text">
                Ambitious software developer who is passionate about lifelong learning, continuous development, and problem solving. My experience in the field has taught me to meet tight deadlines while applying my understanding of common web technologies, languages, and frameworks. I'm looking for a company that values their culture and impacting people so I can continue to grow as a developer.
                </p>
                <div className="about-picture tooltip">
                    <span class="tooltiptext"><FontAwesomeIcon icon={faCamera} size="sm"></FontAwesomeIcon> @kylie.haslem</span>
                    <div className="picture-of-me"></div>
                    <div className="about-links">
                        <a className="about-link" href="https://github.com/Tristanoshier" target="_blank"><p className="about-icon">GitHub <FontAwesomeIcon icon={faGithubSquare} size="lg"></FontAwesomeIcon></p></a>
                        <a className="about-link" href={require("../assets/Tristans Resume.pdf")} download target="_blank"><p>Resume <FontAwesomeIcon icon={faFile} size="lg"></FontAwesomeIcon></p></a>
                    </div>  
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
