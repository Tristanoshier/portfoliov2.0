import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
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
            <div className="about-content">
                <p data-aos="fade-up" className="about-text">
                    I'm currently a full-stack developer seeking a position in Web Development/Software Development that will challenge me and further my coding skills. I enjoy problem-solving, creative thinking, and am very adaptable to any team environment. Throughout past educational and work experiences, I have met strict project deadlines, developed unique floor plans, and have worked in many different team environments. All of these experiences have prepared me for a multitude of situations I will face on the job in the tech world.
                </p>
                <div data-aos="fade-up" className="about-picture">
                    <img className="picture-of-me" src={require("../assets/picofme.png")} alt="picture of tristan" />
                    <div className="about-links">
                        <a className="about-link" href="https://github.com/Tristanoshier" target="_blank"><p className="about-icon">GitHub <FontAwesomeIcon icon={faGithubSquare} size="lg"></FontAwesomeIcon></p></a>
                        <a className="about-link" href={require("../assets/Tristan Oshier's Resume.pdf")} download target="_blank"><p>Resume <FontAwesomeIcon icon={faFile} size="lg"></FontAwesomeIcon></p></a>
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
