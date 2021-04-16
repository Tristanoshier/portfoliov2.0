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
                            <h1 className="project-title pet-pals-title">Facebook</h1>
                        </div>

                        <div className="project-about-section pet-pals-about-section">
                            <p className="overview-section">
                                <strong>About:</strong> This has been a recent project I started working on. Whenever I have time away from work, I have been trying to add more features to this project since Facebook is such a huge platform with so much to build on. Currently, the project only allows you to post and see other people's posts along with seeing where future features will be added with a fully built out UI. The project also uses Google authentication to login so you can immediately see what it would be like to create an account. I hope you enjoy this work in progress!
                            </p>
                            <p className="overview-section">
                                <strong>Tech Stack:</strong> This application uses React and the React context API on the front-end along with Firebase Hosting and the Firebase's Firestore realtime Database. 
                            </p>
                        </div>

                        <div className="live-links">
                            <a href="https://facebook-clone-6e52e.web.app/" target="_blank"><button className="mobile-live project-section-btn live-btn pet-pals-section-btn">See Live</button></a>
                            <a href="https://github.com/Tristanoshier/facebook-clone" target="_blank"><button className="mobile-git project-section-btn live-btn pet-pals-section-btn">GitHub Repo</button></a>
                        </div>

                        <div className="image-section">
                            <img className="project-image" src={require("../../assets/facebook1.png")} alt="home page of PetPals"></img>
                            <img className="project-image" src={require("../../assets/facebook3.png")} alt="home page of PetPals"></img>
                            <img className="project-image" src={require("../../assets/facebook2.png")} alt="home page of PetPals"></img>
                            <img className="project-image" src={require("../../assets/facebook4.png")} alt="home page of PetPals"></img>
                        </div>
                    </div>
                )}
            </Spring>
        </div>
    )
}
