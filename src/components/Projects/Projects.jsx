import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faSpaceShuttle, faRecordVinyl } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {


    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    })

    return (
        <div id="projects" className="projects">
            <div data-aos="fade-up" className="projects-title">Projects</div>

            <div data-aos="fade-up" className="project-section">
                <div className="app-layout">
                    <a href="https://tat-petpals-client.herokuapp.com/" target="_blank">
                        <div className="pet-app">
                            <FontAwesomeIcon className="pet-app-icon" icon={faDog} size="4x"></FontAwesomeIcon>
                        </div>
                    </a>
                    <p className="app-name">PetPals</p>
                    <Link to="/petpals"><button className="app-btn">See More</button></Link>
                </div>
                <div className="app-layout">
                    {/* change when app is live */}
                    <a href="https://to-mars-weather-api.web.app/" target="_blank"> 
                        <div className="solar-app">
                            <FontAwesomeIcon className="solar-app-icon" icon={faSpaceShuttle} size="3x"></FontAwesomeIcon>
                        </div>
                    </a>
                    <p className="app-name">Solar System Visualizer</p>
                    <Link to="/solarsystem"><button className="app-btn">See More</button></Link>
                </div>
                <div className="app-layout">
                    <a href="https://to-myrecords-client.herokuapp.com/" target="_blank"> 
                        <div className="record-app">
                            <FontAwesomeIcon className="record-app-icon" icon={faRecordVinyl} size="4x"></FontAwesomeIcon>
                        </div>
                    </a>
                    <p className="app-name">MyRecords</p>
                    <Link to="/record"><button className="app-btn">See More</button></Link>
                    
                </div>
            </div>
        </div>
    )
}