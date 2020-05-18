import React from 'react'
import { Spring } from 'react-spring/renderprops'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

export default function PetPals() {

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className="pet-pals">
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 500, duration: 500 }}
            >
                {props => (
                    <div style={props}>
                        <div className="title-section">
                            <div className="project-section-link pet-pals-section-link">
                                <FontAwesomeIcon onClick={() => goBack()} icon={faArrowAltCircleLeft} size="4x"></FontAwesomeIcon>
                            </div>
                            <h1 className="project-title pet-pals-title">PetPals</h1>
                        </div>

                        <div className="project-about-section pet-pals-about-section">
                            <p className="overview-section">
                                <strong>About:</strong> PetPals is a pet-focused social media application. It was designed for people to take a break from the competition of social media. Now users can just watch pets all day while showing off their's. This project was my final project at Eleven Fifty Academy and was built fully remotely (due to COVID-19) with a team of three. The project was built in three weeks and was our first attempt at creating a social media application.
                            </p>
                            <p className="overview-section">
                                <strong>Tech Stack:</strong> This application uses React.js and TypeScript on the front-end and Node.js and Express.js on the back-end. We used PostgreSQL and Sequelize to set up our database and AWS S3 with Multer for file uploading and storing our user's images. Finally, we used Heroku with a cloud instance of Postgres to host the project. This project might take around 30 seconds to load on startup and when signing up for an account since we are hosting on a free version of Heroku.
                            </p>
                        </div>

                        <div className="live-links">
                            <a href="https://tat-petpals-client.herokuapp.com/" target="_blank"><button className="mobile-live project-section-btn live-btn pet-pals-section-btn">See Live</button></a>
                            <a href="https://github.com/Tristanoshier/PetPals-client" target="_blank"><button className="mobile-git project-section-btn live-btn pet-pals-section-btn">GitHub Repo</button></a>
                        </div>

                        <div className="image-section">
                            <img className="project-image" src={require("../../assets/petpals2.png")} alt="home page of PetPals"></img>
                            <img className="project-image" src={require("../../assets/petpals1.png")} alt="home page of PetPals"></img>
                            <img className="project-image" src={require("../../assets/petpals3.png")} alt="home page of PetPals"></img>
                            <img className="project-image" src={require("../../assets/petpals4.png")} alt="home page of PetPals"></img>
                        </div>
                    </div>
                )}
            </Spring>
        </div>
    )
}
