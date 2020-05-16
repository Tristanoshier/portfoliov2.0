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
                            <p className="overview-section"><strong>About:</strong> Built the server side with Node.js and the client side with React to create a full CRUD record collection application for vinyl collectors. The Application is deployed to Heroku with a cloud instance of Postgres.</p>
                            <p className="overview-section"><strong>Tech Stack:</strong> Built the server side with Node.js and the client side with React to create a full CRUD record collection application for vinyl collectors. The Application is deployed to Heroku with a cloud instance of Postgres.</p>
                        </div>

                        <div className="live-links">
                            <a href="https://solarsystemvisualizer-75b91.firebaseapp.com/" target="_blank"><button className="project-section-btn live-btn space-section-btn">See Live</button></a>
                            <a href="https://github.com/dmmarsh114/Space-Visualizer" target="_blank"><button className="project-section-btn live-btn space-section-btn">GitHub Repo</button></a>
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
