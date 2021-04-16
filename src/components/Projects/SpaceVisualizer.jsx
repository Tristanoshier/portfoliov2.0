import React from 'react'
import { Spring } from 'react-spring/renderprops'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

export default function SpaceVisualizer() {

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className="space-visualizer">
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 500, duration: 500 }}
            >
                {props => (
                    <div style={props}>
                        <div className="title-section">
                            <div className="project-section-link space-section-link" >
                                <FontAwesomeIcon onClick={() => goBack()} icon={faArrowAltCircleLeft} size="4x"></ FontAwesomeIcon>
                            </div>
                            <h1 className="project-title space-title">Solar System Visualizer</h1>
                        </div>
                        <div className="project-about-section space-about-section">
                            <p className="overview-section"><strong>About:</strong> Solar System Visualizer was designed to be a fun and interactive way to learn about our solar system and the planets within it. This project was the first real project other than this portfolio that was created after my time at Eleven Fifty Academy. This project was built by myself and two others from my cohort at the academy in a little under two weeks. We decided to build this project to brush up on our data structures and also to build something that we are passionate about.
                            </p>
                            <p className="overview-section"><strong>Tech Stack:</strong> This application was built in React.js and all Solar System animations were done in CSS. All data is fetched from <a className="overview-section-link" href="https://api.le-systeme-solaire.net/en/" target="_blank">The Solar System OpenData</a> API and manipulated to be interacted with at a beginner’s understanding of volume, gravity, etc... We decided to host this project on Firebase to branch out from our Heroku comfort zone.</p>
                        </div>

                        <div className="live-links">
                            <a href="https://solarsystemvisualizer-75b91.firebaseapp.com/" target="_blank"><button className="mobile-live project-section-btn live-btn space-section-btn">See Live</button></a>
                            <a href="https://github.com/dmmarsh114/Space-Visualizer" target="_blank"><button className=" mobile-git project-section-btn live-btn space-section-btn">GitHub Repo</button></a>
                        </div>

                        <div className="image-section">
                            <img className="project-image" src={require("../../assets/space2.png")} alt="home page of PetPals"></img>
                            <img className="project-image" src={require("../../assets/space3.png")} alt="home page of PetPals"></img>
                            <img className="project-image" src={require("../../assets/space4.png")} alt="home page of PetPals"></img>
                            <img className="project-image" src={require("../../assets/space1.png")} alt="home page of PetPals"></img>
                        </div>
                    </div>
                )}
            </Spring>
        </div>
    )
}
