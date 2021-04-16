import React from 'react'
import { Spring } from 'react-spring/renderprops'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

export default function MyRecords() {

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className="myrecords">
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 500, duration: 500 }}
            >
                {props => (
                    <div style={props}>
                        <div className="title-section">
                            <div className="project-section-link record-section-link">
                                <FontAwesomeIcon onClick={() => goBack()} icon={faArrowAltCircleLeft} size="4x"></ FontAwesomeIcon>
                            </div>
                            <h1 className="project-title record-title">MyRecords</h1>
                        </div>

                        <div className="project-about-section record-about-section">
                            <p className="overview-section"><strong>About:</strong> MyRecords is a platform for vinyl collectors to keep track of their collection on the go. Since collecting vinyl is one of my favorite hobbies, I decided to build this application to keep track of my growing collection when shopping at my favorite record stores. This was the first full CRUD application I ever built at Eleven Fifty Academy which started my love for building web applications.<strong> The server isn't currently running for this project so users are unable to login.</strong>
                           </p>
                            <p className="overview-section"><strong>Tech Stack:</strong> This application uses React.js on the front-end and Node.js and Express.js on the back-end. I used PostgreSQL and Sequelize to set up the database while using Heroku with a cloud instance of Postgres to host the project. This project might take around 30 seconds to load on startup and when signing up for an account since I'm hosting on a free version of Heroku.</p>
                        </div>

                        <div className="live-links">
                            <a href="https://to-myrecords-client.herokuapp.com/" target="_blank"><button className="mobile-live project-section-btn live-btn record-section-btn">See Live</button></a>
                            <a href="https://github.com/Tristanoshier/myrecords-client" target="_blank"><button className="mobile-git project-section-btn live-btn record-section-btn">GitHub Repo</button></a>
                        </div>

                        <div className="image-section">
                            <img className="project-image" src={require("../../assets/records2.png")} alt="home page of PetPals"></img>
                            <img className="project-image" src={require("../../assets/records3.png")} alt="home page of PetPals"></img>
                            <img className="project-image" src={require("../../assets/records1.png")} alt="home page of PetPals"></img>
                            <img className="project-image" src={require("../../assets/records4.png")} alt="home page of PetPals"></img>
                        </div>
                    </div>
                )}
            </Spring>
        </div>
    )
}
