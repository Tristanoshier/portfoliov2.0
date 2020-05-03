import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faTable } from '@fortawesome/free-solid-svg-icons'

export default function Skills() {


    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    })

    return (
        <div id="skills" className="skills">
            <div data-aos="fade-up" className="skills-title">Skills</div>
            
            <ul data-aos="fade-up" className="skills-layout">
                <li className="skill-item"><FontAwesomeIcon icon={faReact} size="4x"></FontAwesomeIcon><p>React.js</p></li>
                <li className="skill-item"><FontAwesomeIcon icon={faNodeJs} size="4x"></FontAwesomeIcon><p>Node.js</p></li>
                <li className="skill-item"><FontAwesomeIcon icon={faCogs} size="4x"></FontAwesomeIcon><p>Express.js</p></li>
                <li className="skill-item"><FontAwesomeIcon icon={faTable} size="4x"></FontAwesomeIcon><p>PostgreSQL</p></li>
                <li className="skill-item"><FontAwesomeIcon icon={faCloudUploadAlt} size="4x"></FontAwesomeIcon><p>Heroku</p></li>
                <li className="skill-item"><FontAwesomeIcon icon={faDatabase} size="4x"></FontAwesomeIcon><p>SQL</p></li>
            </ul>



        </div>
    )
}
