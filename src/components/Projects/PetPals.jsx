import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

export default function PetPals() {
    return (
        <div className="pet-pals">
            <div className="title-section">
                <Link className="project-section-link" to="/"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="4x"></FontAwesomeIcon></Link>
                <h1 className="project-title">PetPals</h1> 
            </div>
            <div className="project-about-section">
                <p className="overview-section">About: Built the server side with Node.js and the client side with Legacy React and Typescript to create a full CRUD social media application. This Application is deployed to Heroku with a cloud instance of Postgres.</p>
                <p className="tech-section">Tech Stack: Built the server side with Node.js and the client side with Legacy React and Typescript to create a full CRUD social media application. This Application is deployed to Heroku with a cloud instance of Postgres.</p>
            </div>
            <a href="https://tat-petpals-client.herokuapp.com/" target="_blank"><button className="app-btn live-btn">See Live</button></a>
            <div className="image-section">
                    <img className="project-image" src={require("../../assets/petpals2.png")} alt="home page of PetPals"></img>
                    <img className="project-image" src={require("../../assets/petpals1.png")} alt="home page of PetPals"></img>
                    <img className="project-image" src={require("../../assets/petpals3.png")} alt="home page of PetPals"></img>
                    <img className="project-image" src={require("../../assets/petpals4.png")} alt="home page of PetPals"></img>
            </div>
        </div>
    )
}
