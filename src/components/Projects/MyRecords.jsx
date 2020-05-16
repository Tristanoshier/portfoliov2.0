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
                            <p className="overview-section"><strong>About:</strong> Built the server side with Node.js and the client side with React to create a full CRUD record collection application for vinyl collectors. The Application is deployed to Heroku with a cloud instance of Postgres.</p>
                            <p className="overview-section"><strong>Tech Stack:</strong> Built the server side with Node.js and the client side with React to create a full CRUD record collection application for vinyl collectors. The Application is deployed to Heroku with a cloud instance of Postgres.</p>
                        </div>

                        <div className="live-links">
                            <a href="https://to-myrecords-client.herokuapp.com/" target="_blank"><button className="project-section-btn live-btn record-section-btn">See Live</button></a>
                            <a href="https://github.com/Tristanoshier/myrecords-client" target="_blank"><button className="project-section-btn live-btn record-section-btn">GitHub Repo</button></a>
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
