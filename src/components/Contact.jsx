import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Modal } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {
    const [visible, setVisible] = useState(false)

    const showModal = () => {
        setVisible(true)
    }

    const handleCancel = e => {
        console.log(e);
        setVisible(false)
    };

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    })

    return (
        <div id="contact" className="contact">
            <div data-aos="fade-up" className="contact-title">Contact</div>

            <ul data-aos="fade-up" className="contact-layout">
                <li className="contact-item"><a className="contact-link" href="https://www.linkedin.com/in/tristan-oshier-678420196/" target="_linkedin" ><div className="contact-content"><FontAwesomeIcon icon={faLinkedin} size="4x"></FontAwesomeIcon><p>LinkedIn</p></div></a></li>
                <li className="contact-item"><a className="contact-link" href="mailto:tristan.oshier2000@gmail.com" ><div className="contact-content"><FontAwesomeIcon icon={faEnvelopeSquare} size="4x"></FontAwesomeIcon><p>Email</p></div></a></li>
                <li className="contact-item" onClick={showModal}><div className="contact-content"><FontAwesomeIcon icon={faPhoneSquare} size="4x"></FontAwesomeIcon><p>Call / Text</p></div></li>
            </ul>

            <Modal
                title="Basic Modal"
                visible={visible}
                onOk={handleCancel} 
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>


        </div>
    )
}
